import prisma from '@/lib/prisma';
import { Search, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

import { Playfair_Display, Inter, Roboto } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['300', '400', '500'] });

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { domain: string };
}) {
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: params.domain }
  });

  const defaultTheme = {
    primaryColor: "#B08A57",
    backgroundColor: "#FFFDF9",
    textColor: "#0B1324",
    typography: "playfair",
  };

  const theme = tenant?.themeSettings ? (tenant.themeSettings as any) : defaultTheme;
  const primaryColor = theme.primaryColor || defaultTheme.primaryColor;
  const backgroundColor = theme.backgroundColor || defaultTheme.backgroundColor;
  const textColor = theme.textColor || defaultTheme.textColor;
  const fontClass = theme.typography === 'inter' ? inter.variable : theme.typography === 'roboto' ? roboto.variable : playfair.variable;

  return (
    <div 
      className={`min-h-screen flex flex-col font-sans ${playfair.variable} ${inter.variable} ${fontClass}`}
      style={{ 
        backgroundColor,
        color: textColor,
        '--store-primary': primaryColor,
        '--store-bg': backgroundColor,
        '--store-text': textColor,
        '--store-border': `${textColor}20`,
        '--store-text-muted': `${textColor}80`
      } as React.CSSProperties}
    >
      <style>{`
        .text-store-primary { color: var(--store-primary); }
        .bg-store-primary { background-color: var(--store-primary); }
        .border-store-primary { border-color: var(--store-primary); }
        .hover\\:text-store-primary:hover { color: var(--store-primary); }
        
        .text-store-text { color: var(--store-text); }
        .text-store-muted { color: var(--store-text-muted); }
        .border-store-border { border-color: var(--store-border); }
        .bg-store-border { background-color: var(--store-border); }
        
        .font-store-heading { font-family: var(--font-serif); }
        ${theme.typography === 'inter' ? '.font-store-heading { font-family: var(--font-sans); }' : ''}
        ${theme.typography === 'roboto' ? '.font-store-heading { font-family: var(--font-roboto); }' : ''}
      `}</style>

      {/* ── EDITORIAL NAVBAR ── */}
      <nav className="fixed top-0 w-full z-50 border-b border-store-border transition-colors duration-300" style={{ backgroundColor }}>
        <div className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[40px_auto_1fr_auto] items-stretch h-[64px]">

          <div className="border-r border-store-border flex items-center justify-center">
            <span className="text-[8px] text-store-muted">◆</span>
          </div>

          <Link href="/" className="px-6 flex items-center border-r border-store-border shrink-0">
            {tenant?.logoUrl ? (
              <img src={tenant.logoUrl} alt={tenant.name} className="h-8 object-contain" />
            ) : (
              <span className="text-sm font-store-heading tracking-[0.3em] uppercase text-store-text">
                {tenant?.name || 'Luxury Gold'}
              </span>
            )}
          </Link>

          <div className="hidden md:flex items-center px-6 gap-8 text-[10px] uppercase tracking-[0.2em] text-store-muted">
            <Link href="/collections/gold" className="hover:text-store-primary transition-colors duration-500">Gold Collection</Link>
            <Link href="/collections/diamonds" className="hover:text-store-primary transition-colors duration-500">Diamonds</Link>
            <Link href="/gifting" className="hover:text-store-primary transition-colors duration-500">Gifting</Link>
            <Link href="/about" className="hover:text-store-primary transition-colors duration-500">Heritage</Link>
          </div>

          <div className="flex items-center border-l border-store-border">
            <Link href="/search" className="h-full px-4 flex items-center border-r border-store-border hover:bg-store-border transition-colors">
              <Search size={16} strokeWidth={1.5} className="text-store-muted hover:text-store-primary" />
            </Link>
            <Link href="/account" className="h-full px-4 flex items-center border-r border-store-border hover:bg-store-border transition-colors">
              <User size={16} strokeWidth={1.5} className="text-store-muted hover:text-store-primary" />
            </Link>
            <Link href="/cart" className="h-full px-4 flex items-center hover:bg-store-border transition-colors relative">
              <ShoppingBag size={16} strokeWidth={1.5} className="text-store-muted hover:text-store-primary" />
              <span className="absolute top-3 right-2 w-3.5 h-3.5 bg-store-primary text-black text-[8px] font-bold flex items-center justify-center" style={{ color: backgroundColor }}>0</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* 📄 PAGE CONTENT */}
      <main className="flex-grow pt-[64px]">
        {children}
      </main>

      {/* ── EDITORIAL FOOTER ── */}
      <footer className="border-t border-store-border mt-auto" style={{ backgroundColor }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-store-border">
          <div className="p-10">
            {tenant?.logoUrl ? (
              <img src={tenant.logoUrl} alt={tenant.name} className="h-10 object-contain mb-6 grayscale opacity-80" />
            ) : (
              <h2 className="font-store-heading tracking-[0.3em] text-store-text uppercase text-sm mb-6">
                {tenant?.name || 'Luxury Gold'}
              </h2>
            )}
            <p className="text-store-muted text-xs leading-relaxed font-sans font-light max-w-xs mb-8">
              {tenant?.aboutUsText || 'Crafting timeless masterpieces since 1995.'}
            </p>
            <Link href="/book-appointment" className="text-[10px] tracking-[0.2em] text-store-primary uppercase border-b border-store-primary/40 pb-1 hover:border-store-primary transition-colors">
              Book an appointment →
            </Link>
          </div>

          <div className="p-10">
            <p className="text-[9px] tracking-[0.3em] text-store-muted uppercase mb-6 opacity-60">Explore</p>
            <ul className="space-y-4 text-xs text-store-muted font-sans">
              {[
                { label: 'Gold Collection', href: '/collections/gold' },
                { label: 'Diamond Collection', href: '/collections/diamonds' },
                { label: 'The Gifting Edit', href: '/gifting' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-store-primary transition-colors duration-500">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="p-10">
            <p className="text-[9px] tracking-[0.3em] text-store-muted uppercase mb-6 opacity-60">Client Care</p>
            <ul className="space-y-4 text-xs text-store-muted font-sans">
              {[
                { label: 'My Account', href: '/account' },
                { label: 'Size Guide', href: '/size-guide' },
                { label: 'FAQ', href: '/faq' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-store-primary transition-colors duration-500">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="p-10">
            <p className="text-[9px] tracking-[0.3em] text-store-muted uppercase mb-6 opacity-60">Legal</p>
            <ul className="space-y-4 text-xs text-store-muted font-sans">
              {[
                { label: 'Privacy Policy', href: '/policies/privacy' },
                { label: 'Terms of Service', href: '/policies/terms' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-store-primary transition-colors duration-500">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-store-border px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[9px] tracking-[0.2em] text-store-muted uppercase">
            © {new Date().getFullYear()} {tenant?.name || 'Luxury Gold'}. All rights reserved.
          </p>

          <Link
            href="/login"
            className="text-[8px] tracking-[0.25em] text-store-muted hover:text-store-text uppercase transition-colors duration-500 flex items-center gap-2 group"
          >
            <span className="w-3 h-px bg-store-border group-hover:bg-store-primary transition-colors duration-500"></span>
            Staff Login
            <span className="w-3 h-px bg-store-border group-hover:bg-store-primary transition-colors duration-500"></span>
          </Link>

          <p className="text-[9px] tracking-[0.2em] text-store-muted uppercase">
            Powered by <span className="text-store-primary">Tivra</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
