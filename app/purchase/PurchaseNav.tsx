"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  Undo2,
  CreditCard
} from "lucide-react";

const mainPages = [
  { name: "Dashboard", href: "/purchase", icon: LayoutDashboard },
  { name: "Purchase Order", href: "/purchase/purchase-order", icon: ShoppingCart },
  { name: "Purchase Invoice", href: "/purchase/purchase-invoice", icon: FileText },
  { name: "Purchase Return", href: "/purchase/purchase-return", icon: Undo2 },
  { name: "Supplier Payment", href: "/purchase/supplier-payment", icon: CreditCard },
];

export default function PurchaseNav() {
  const pathname = usePathname();

  return (
    <nav className="relative z-[100] flex items-center justify-between border-b border-border-theme bg-background-secondary/80 backdrop-blur-xl px-6 py-4 w-full">
      <div className="flex items-center gap-6 w-full overflow-x-auto no-scrollbar">
        <span className="text-sm font-bold tracking-widest uppercase text-accent-gold hidden md:block shrink-0">
          Purchase Modules
        </span>
        
        <div className="flex items-center gap-2 shrink-0">
          {mainPages.map((page) => {
            const Icon = page.icon;
            const isActive = pathname === page.href || (page.href !== "/purchase" && pathname.startsWith(page.href));

            return (
              <Link
                key={page.href}
                href={page.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-accent-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "text-text-secondary hover:bg-text-primary/10 hover:text-text-primary"
                }`}
              >
                <Icon size={16} />
                <span>{page.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
