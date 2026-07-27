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

export default function PurchaseSidebar() {
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
    <aside className="w-72 bg-[#111111] border-r border-yellow-500/20 min-h-screen flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-yellow-500/20">

        <h1 className="text-2xl font-bold text-yellow-500">
          💎 Luxury Gold ERP
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Purchase Module
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 p-4 space-y-2">

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
                  ? "bg-yellow-500 text-black font-semibold"
                  : "text-gray-300 hover:bg-[#1B1B1B] hover:text-yellow-500"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}