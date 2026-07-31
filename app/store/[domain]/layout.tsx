import prisma from '@/lib/prisma';
import { Search, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col ${playfair.variable} ${inter.variable}`}>
      {/* ── EDITORIAL NAVBAR ── hairline border, no blur bg fill */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#2A2724] bg-[#0a0a0a]">
        <div className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[40px_auto_1fr_auto] items-stretch h-[64px]">

          {/* Vertical rail marker */}
          <div className="border-r border-[#2A2724] flex items-center justify-center">
            <span className="text-[8px] text-[#8a7a5a]">◆</span>
          </div>

          {/* Brand wordmark */}
          <Link href="/" className="px-6 flex items-center border-r border-[#2A2724] shrink-0">
            <span className="text-sm font-serif tracking-[0.3em] text-white/95 uppercase">
              {tenant?.name || 'Luxury Gold'}
            </span>
          </Link>

          {/* Center nav links — desktop only */}
          <div className="hidden md:flex items-center px-6 gap-8 text-[10px] uppercase tracking-[0.2em] text-[#8a7a5a]">
            <Link href="/collections/gold" className="hover:text-[#D4AF37] transition-colors duration-500">Gold Collection</Link>
            <Link href="/collections/diamonds" className="hover:text-[#D4AF37] transition-colors duration-500">Diamonds</Link>
            <Link href="/gifting" className="hover:text-[#D4AF37] transition-colors duration-500">Gifting</Link>
            <Link href="/about" className="hover:text-[#D4AF37] transition-colors duration-500">Heritage</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center border-l border-[#2A2724]">
            <Link href="/search" className="h-full px-4 flex items-center border-r border-[#2A2724] hover:bg-[#2A2724]/30 transition-colors">
              <Search size={16} strokeWidth={1.5} className="text-[#8a7a5a]" />
            </Link>
            <Link href="/account" className="h-full px-4 flex items-center border-r border-[#2A2724] hover:bg-[#2A2724]/30 transition-colors">
              <User size={16} strokeWidth={1.5} className="text-[#8a7a5a]" />
            </Link>
            <Link href="/cart" className="h-full px-4 flex items-center hover:bg-[#2A2724]/30 transition-colors relative">
              <ShoppingBag size={16} strokeWidth={1.5} className="text-[#8a7a5a]" />
              <span className="absolute top-3 right-2 w-3.5 h-3.5 bg-[#D4AF37] text-black text-[8px] font-bold flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* 📄 PAGE CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* ── EDITORIAL FOOTER ── hairline divided, no shadows */}
      <footer className="border-t border-[#2A2724] bg-[#0a0a0a] mt-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-[#2A2724]">
          {/* Brand column */}
          <div className="p-10">
            <h2 className="font-serif tracking-[0.3em] text-white/95 uppercase text-sm mb-6">
              {tenant?.name || 'Luxury Gold'}
            </h2>
            <p className="text-[#8a7a5a] text-xs leading-relaxed font-sans font-light max-w-xs mb-8">
              {tenant?.aboutUsText || 'Crafting timeless masterpieces since 1995. Purest 22K gold and internationally certified diamonds.'}
            </p>
            <Link href="/book-appointment" className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase border-b border-[#D4AF37]/40 pb-1 hover:border-[#D4AF37] transition-colors">
              Book an appointment →
            </Link>
          </div>

          {/* Explore column */}
          <div className="p-10">
            <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-6">Explore</p>
            <ul className="space-y-4 text-xs text-[#8a7a5a] font-sans">
              {[
                { label: 'Gold Collection', href: '/collections/gold' },
                { label: 'Diamond Collection', href: '/collections/diamonds' },
                { label: 'The Gifting Edit', href: '/gifting' },
                { label: 'Bespoke Services', href: '/custom-orders' },
                { label: 'The Journal', href: '/journal' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-[#D4AF37] transition-colors duration-500">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Client Care column */}
          <div className="p-10">
            <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-6">Client Care</p>
            <ul className="space-y-4 text-xs text-[#8a7a5a] font-sans">
              {[
                { label: 'My Account', href: '/account' },
                { label: 'Size Guide', href: '/size-guide' },
                { label: 'Jewelry Care', href: '/care' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact Us', href: '/contact' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-[#D4AF37] transition-colors duration-500">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="p-10">
            <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-6">Legal</p>
            <ul className="space-y-4 text-xs text-[#8a7a5a] font-sans">
              {[
                { label: 'Shipping Policy', href: '/policies/shipping' },
                { label: 'Returns & Exchanges', href: '/policies/returns' },
                { label: 'Lifetime Warranty', href: '/policies/warranty' },
                { label: 'Privacy Policy', href: '/policies/privacy' },
                { label: 'Terms of Service', href: '/policies/terms' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-[#D4AF37] transition-colors duration-500">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2A2724] px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase">
            © {new Date().getFullYear()} {tenant?.name || 'Luxury Gold'}. All rights reserved.
          </p>
          <p className="text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase">
            Powered by <span className="text-[#D4AF37]">Tivra</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
