"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function StoreNavbar() {
  const [storeName, setStoreName] = useState("Luxury Gold");
  const [brandColor, setBrandColor] = useState("#e4b52d");
  
  useEffect(() => {
    fetch("/API/settings")
      .then(res => res.json())
      .then(data => {
        if (data.storeName) setStoreName(data.storeName);
        if (data.brandColor) setBrandColor(data.brandColor);
      })
      .catch(console.error);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background-primary/80 backdrop-blur-md border-b border-border-theme">
      <style>{`
        :root {
          --brand-color: ${brandColor};
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div style={{color: "var(--brand-color)"}} className="text-3xl">◇</div>
          <span style={{color: "var(--brand-color)"}} className="text-2xl font-bold tracking-wide">{storeName}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors">Home</Link>
          <Link href="/shop" className="text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors">Collections</Link>
          <Link href="/shop?category=Gold" className="text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors">Gold</Link>
          <Link href="/shop?category=Diamond" className="text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors">Diamonds</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <button className="text-text-secondary hover:text-accent-gold transition-colors p-2 rounded-full hover:bg-background-tertiary hidden sm:block">
            <Search size={20} />
          </button>
          
          <Link href="/cart" className="text-text-secondary hover:text-accent-gold transition-colors relative p-2 rounded-full hover:bg-background-tertiary">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-accent-gold text-black text-[10px] font-bold flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          <Link href="/login" className="hidden sm:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border-theme text-text-primary hover:border-accent-gold hover:text-accent-gold transition-colors ml-2">
            <User size={16} />
            ERP Login
          </Link>

          <button className="md:hidden text-text-primary p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
