"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  Tags,
  BadgeCheck,
  Layers,
  Gem,
  Image,
  ScanBarcode,
  QrCode,
  IndianRupee,
  History,
  CircleDollarSign,
} from "lucide-react";

const menuItems = [
  { name: "Product List", href: "/products", icon: Package },
  { name: "Categories", href: "/products/categories", icon: Tags },
  { name: "Brands", href: "/products/brands", icon: BadgeCheck },
  { name: "Collections", href: "/products/collections", icon: Layers },
  { name: "Gold Products", href: "/products/gold", icon: CircleDollarSign },
  { name: "Diamond Products", href: "/products/diamond", icon: Gem },
  { name: "Product Images", href: "/products/images", icon: Image },
  { name: "Barcode", href: "/products/barcode", icon: ScanBarcode },
  { name: "QR Code", href: "/products/qrcode", icon: QrCode },
  { name: "Product Pricing", href: "/products/pricing", icon: IndianRupee },
  { name: "Product History", href: "/products/history", icon: History },
];

export default function ProductNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">

    

      <h2 className="text-2xl font-bold text-accent-gold mb-8">
        Product Management
      </h2>

      

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  pathname === item.href
                    ? "bg-accent-gold text-black font-semibold"
                    : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
                }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}

      

    
  
    </nav>
  );
}