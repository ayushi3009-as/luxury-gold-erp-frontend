import Link from 'next/link';
import { Package, Heart, MapPin, User as UserIcon } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="border-b border-border-theme pb-8 mb-12">
        <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">Welcome Back</p>
        <h1 className="text-4xl md:text-5xl font-serif text-text-primary">My Account</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <ul className="space-y-4 text-sm uppercase tracking-widest">
            <li><Link href="/account" className="text-gold border-l-2 border-gold pl-4 block">Dashboard</Link></li>
            <li><Link href="/account/orders" className="text-text-primary/50 hover:text-text-primary pl-4 block transition-colors">Order History</Link></li>
            <li><Link href="/wishlist" className="text-text-primary/50 hover:text-text-primary pl-4 block transition-colors">Wishlist</Link></li>
            <li><Link href="/account/addresses" className="text-text-primary/50 hover:text-text-primary pl-4 block transition-colors">Addresses</Link></li>
            <li><button className="text-text-primary/50 hover:text-red-400 pl-4 block transition-colors text-left w-full mt-8">Sign Out</button></li>
          </ul>
        </div>

        {/* Content */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/account/orders" className="p-8 border border-border-theme bg-[#111]/30 hover:border-gold/50 transition-colors group">
            <Package className="text-gold mb-6" size={32} strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary mb-2">Order History</h3>
            <p className="text-text-primary/50 text-sm">Track recent orders and view invoices.</p>
          </Link>
          <Link href="/wishlist" className="p-8 border border-border-theme bg-[#111]/30 hover:border-gold/50 transition-colors group">
            <Heart className="text-gold mb-6" size={32} strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary mb-2">Wishlist</h3>
            <p className="text-text-primary/50 text-sm">View and manage your saved masterpieces.</p>
          </Link>
          <Link href="/account/addresses" className="p-8 border border-border-theme bg-[#111]/30 hover:border-gold/50 transition-colors group">
            <MapPin className="text-gold mb-6" size={32} strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary mb-2">Addresses</h3>
            <p className="text-text-primary/50 text-sm">Manage shipping and billing addresses.</p>
          </Link>
          <Link href="/account/profile" className="p-8 border border-border-theme bg-[#111]/30 hover:border-gold/50 transition-colors group">
            <UserIcon className="text-gold mb-6" size={32} strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary mb-2">Profile Details</h3>
            <p className="text-text-primary/50 text-sm">Update your personal information.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
