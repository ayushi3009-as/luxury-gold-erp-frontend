import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. ram.tivra.marketing, app.tivra.marketing)
  const hostname = req.headers.get('host') || 'tivra.marketing';

  // We define our root domains. In production, this would be your actual domain.
  // For localhost, we use localhost:3000
  const rootDomains = ['gold.tivra.marketing', 'tivra.marketing', 'localhost:3000', 'localhost:3005'];

  // Identify if we are on a subdomain
  let isSubdomain = false;
  let subdomain = '';

  // Check if it's exactly a root domain first
  const isExactRoot = rootDomains.includes(hostname);

  if (!isExactRoot) {
    for (const domain of rootDomains) {
      if (hostname.endsWith(`.${domain}`)) {
        isSubdomain = true;
        subdomain = hostname.replace(`.${domain}`, '');
        break;
      }
    }
  }

  // ERP/Admin paths that should never be rewritten to the storefront
  const erpPaths = ['/login', '/register', '/dashboard', '/inventory', '/products',
    '/pos', '/reports', '/settings', '/hr', '/purchase', '/saas-admin',
    '/api', '/analytics', '/audit-logs', '/backup', '/gold-rate', '/notifications', '/ai-assistant', '/repair', '/manufacturing'];
  const isErpPath = erpPaths.some(p => url.pathname.startsWith(p));

  // If it's a subdomain (e.g. ram.tivra.marketing), route to that tenant's store
  // Do not rewrite if it's an ERP path, so tenant admins can access their dashboard on their subdomain.
  if (isSubdomain && subdomain !== 'app' && subdomain !== 'www' && !isErpPath) {
    return NextResponse.rewrite(new URL(`/store/${subdomain}${url.pathname}`, req.url));
  }

  // If it's the ROOT domain (gold.tivra.marketing) and NOT an ERP path,
  // show the demo storefront — acts as the flagship/demo tenant
  if (isExactRoot && !isErpPath) {
    return NextResponse.rewrite(new URL(`/store/gold${url.pathname}`, req.url));
  }

  // Otherwise pass through to ERP admin routes
  return NextResponse.next();
}
