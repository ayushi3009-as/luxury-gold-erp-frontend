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
  {
    name: "Product List",
    href: "/products",
    icon: Package,
  },
  {
    name: "Categories",
    href: "/products/categories",
    icon: Tags,
  },
  {
    name: "Brands",
    href: "/products/brands",
    icon: BadgeCheck,
  },
  {
    name: "Collections",
    href: "/products/collections",
    icon: Layers,
  },
  {
    name: "Gold Products",
    href: "/products/gold",
    icon: CircleDollarSign,
  },
  {
    name: "Diamond Products",
    href: "/products/diamond",
    icon: Gem,
  },
  {
    name: "Product Images",
    href: "/products/images",
    icon: Image,
  },
  {
    name: "Barcode",
    href: "/products/barcode",
    icon: ScanBarcode,
  },
  {
    name: "QR Code",
    href: "/products/qrcode",
    icon: QrCode,
  },
  {
    name: "Product Pricing",
    href: "/products/pricing",
    icon: IndianRupee,
  },
  {
    name: "Product History",
    href: "/products/history",
    icon: History,
  },
];

export default function ProductSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#141414] border-r border-yellow-500/20 min-h-screen p-6 sticky top-0">

      <h1 className="text-2xl font-bold text-yellow-500 mb-8">
        Product Management
      </h1>

      <nav className="space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  active
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-[#222] hover:text-yellow-500"
                }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}