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
  const rootDomains = ['gold.tivra.marketing', 'tivra.marketing', 'localhost:3000'];

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

  // If it's a subdomain, and it's NOT the 'app' subdomain (which is for ERP),
  // we route them to the B2C storefront folder: /store/[domain]
  if (isSubdomain && subdomain !== 'app' && subdomain !== 'www') {
    // Rewrite the URL to /store/[subdomain]/path
    // E.g. ram.tivra.marketing/products -> /store/ram/products
    return NextResponse.rewrite(new URL(`/store/${subdomain}${url.pathname}`, req.url));
  }

  // If it's the main domain (gold.tivra.marketing) without a subdomain,
  // we route them to the SaaS landing page
  if (!isSubdomain && hostname !== 'localhost:3000') {
    // If you want to show a generic SaaS marketing page on the root domain
    // return NextResponse.rewrite(new URL(`/marketing${url.pathname}`, req.url));
  }

  // Otherwise, let them pass through to the ERP Admin dashboard (current root routes)
  return NextResponse.next();
}
