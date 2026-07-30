"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  PlusCircle,
  ClipboardList,
  PackageCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

export default function PurchaseNav() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Purchase Dashboard",
      href: "/purchase",
      icon: LayoutDashboard,
    },
    {
      title: "Add Purchase",
      href: "/purchase/purchase-entry",
      icon: PlusCircle,
    },
    {
      title: "Purchase Orders",
      href: "/purchase/purchase-order",
      icon: ShoppingCart,
    },
    {
      title: "Suppliers",
      href: "/purchase/supplier-payment",
      icon: Truck,
    },
    {
      title: "Purchase Return",
      href: "/purchase/purchase-return",
      icon: RotateCcw,
    },
    {
      title: "Received Stock",
      href: "/purchase/goods-receipt",
      icon: PackageCheck,
    },
    {
      title: "History",
      href: "/purchase/purchase-reports",
      icon: ClipboardList,
    },
  ];

  return (
    <nav className="flex items-center gap-1 overflow-x-auto border-b border-border-theme bg-background-primary px-4 py-3 w-full [&::-webkit-scrollbar]:hidden text-sm">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-text-secondary mr-2 hidden md:block">Purchase:</span>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition ${
                active
                  ? "bg-accent-gold text-black font-semibold"
                  : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <Icon size={16} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}