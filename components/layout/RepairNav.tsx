"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Gem,
  LayoutDashboard,
  PlusCircle,
  ClipboardList,
  Users,
  Activity,
  Truck,
  Receipt,
  BarChart3,
  Bell,
} from "lucide-react";

export default function RepairNav() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Repair Dashboard",
      href: "/repair",
      icon: LayoutDashboard,
    },
    {
      title: "Repair Entry",
      href: "/repair/add",
      icon: PlusCircle,
    },
    {
      title: "Repair Tracking",
      href: "/repair/tracking",
      icon: ClipboardList,
    },
    {
      title: "Worker Assignment",
      href: "/repair/worker-assignment",
      icon: Users,
    },
    {
      title: "Repair Status",
      href: "/repair/status",
      icon: Activity,
    },
    {
      title: "Delivery",
      href: "/repair/delivery",
      icon: Truck,
    },
    {
      title: "Repair Invoice",
      href: "/repair/invoice",
      icon: Receipt,
    },
    {
      title: "Repair Reports",
      href: "/repair/reports",
      icon: BarChart3,
    },
    {
      title: "Customer Notifications",
      href: "/repair/notifications",
      icon: Bell,
    },
  ];

  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">

    

      {/* Logo */}

      <div className="h-28 border-b border-border-theme flex items-center justify-center">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 border border-border-theme flex items-center justify-center">

            <Gem className="w-8 h-8 text-accent-gold" />

          </div>

          <div>

            

            <p className="text-sm text-text-secondary">
              Jewellery Management
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/repair"
              ? pathname === "/repair"
              : pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                active
                  ? "bg-accent-gold text-black font-semibold shadow-lg"
                  : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </Link>
          );
        })}

      

      {/* Footer */}

      <div className="border-t border-border-theme p-5">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-background-primary border border-gray-700 flex items-center justify-center text-text-primary font-bold">
            N
          </div>

          <div>

            <p className="text-text-primary font-medium">
              Admin
            </p>

            <p className="text-xs text-text-secondary">
              Luxury Gold ERP
            </p>

          </div>

        </div>

      </div>

    
  
    </nav>
  );
}