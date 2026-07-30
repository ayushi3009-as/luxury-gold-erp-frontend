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
      href: "/purchase/add",
      icon: PlusCircle,
    },
    {
      title: "Purchase Orders",
      href: "/purchase/orders",
      icon: ShoppingCart,
    },
    {
      title: "Suppliers",
      href: "/purchase/suppliers",
      icon: Truck,
    },
    {
      title: "Purchase Return",
      href: "/purchase/returns",
      icon: RotateCcw,
    },
    {
      title: "Received Stock",
      href: "/purchase/received",
      icon: PackageCheck,
    },
    {
      title: "Purchase History",
      href: "/purchase/history",
      icon: ClipboardList,
    },
  ];

  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">

    

      {/* Logo */}

      <div className="p-6 border-b border-border-theme">

        

        <p className="text-text-secondary text-sm mt-2">
          Purchase Module
        </p>

      </div>

      {/* Menu */}

      

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-accent-gold text-black font-semibold"
                  : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      
    
  
    </nav>
  );
}