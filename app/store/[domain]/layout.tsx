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
    <div className={`min-h-screen bg-[#0a0a0a] text-white selection:bg-accent-gold selection:text-black font-sans flex flex-col ${playfair.variable} ${inter.variable}`}>
      {/* 🌟 PREMIUM NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href={`/`} className="text-3xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#D4AF37] uppercase hover:opacity-80 transition-opacity">
              {tenant?.name || "Luxury Gold"}
            </Link>
            <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/60">
              <Link href={`/collections/gold`} className="hover:text-accent-gold transition-colors">Gold Collection</Link>
              <Link href={`/collections/diamonds`} className="hover:text-accent-gold transition-colors">Diamonds</Link>
              <Link href={`/about`} className="hover:text-accent-gold transition-colors">Heritage</Link>
            </div>
          </div>
          <div className="flex items-center gap-6 text-white/80">
            <button className="hover:text-accent-gold transition-colors"><Search size={22} strokeWidth={1.5} /></button>
            <button className="hover:text-accent-gold transition-colors"><User size={22} strokeWidth={1.5} /></button>
            <Link href={`/cart`} className="hover:text-accent-gold transition-colors relative">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-gold text-black text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* 📄 PAGE CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 📜 FOOTER */}
      <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif tracking-widest text-accent-gold uppercase mb-6">
              {tenant?.name || "Luxury Gold"}
            </h2>
            <p className="text-white/50 max-w-md leading-relaxed font-light mb-8">
              {tenant?.aboutUsText || "Crafting timeless masterpieces since 1995. We bring you the finest purity of 22K gold and internationally certified diamonds."}
            </p>
            <div className="flex gap-4">
              <Link href="/book-appointment" className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">Book an Appointment</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4 text-white/50 font-light text-sm">
              <li><Link href={`/collections/gold`} className="hover:text-accent-gold transition-colors">Gold Collection</Link></li>
              <li><Link href={`/collections/diamonds`} className="hover:text-accent-gold transition-colors">Diamond Collection</Link></li>
              <li><Link href={`/gifting`} className="hover:text-accent-gold transition-colors">The Gifting Edit</Link></li>
              <li><Link href={`/custom-orders`} className="hover:text-accent-gold transition-colors">Bespoke Services</Link></li>
              <li><Link href={`/journal`} className="hover:text-accent-gold transition-colors">The Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Client Care</h4>
            <ul className="space-y-4 text-white/50 font-light text-sm">
              <li><Link href={`/account`} className="hover:text-accent-gold transition-colors">My Account</Link></li>
              <li><Link href={`/size-guide`} className="hover:text-accent-gold transition-colors">Size Guide</Link></li>
              <li><Link href={`/care`} className="hover:text-accent-gold transition-colors">Jewelry Care</Link></li>
              <li><Link href={`/faq`} className="hover:text-accent-gold transition-colors">FAQ</Link></li>
              <li><Link href={`/contact`} className="hover:text-accent-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Legal</h4>
            <ul className="space-y-4 text-white/50 font-light text-sm">
              <li><Link href={`/policies/shipping`} className="hover:text-accent-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href={`/policies/returns`} className="hover:text-accent-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link href={`/policies/warranty`} className="hover:text-accent-gold transition-colors">Lifetime Warranty</Link></li>
              <li><Link href={`/policies/privacy`} className="hover:text-accent-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href={`/policies/terms`} className="hover:text-accent-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-white/30 text-[10px] tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} {tenant?.name || "Luxury Gold ERP"}. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Powered by <span className="text-gold font-semibold">Tivra</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
