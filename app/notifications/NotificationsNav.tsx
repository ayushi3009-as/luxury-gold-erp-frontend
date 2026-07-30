"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, AlertTriangle, Package, Clock3, CheckSquare, Settings } from "lucide-react";

const menuItems = [
  {
    name: "Alerts",
    icon: AlertTriangle,
    href: "/notifications/alerts",
  },
  {
    name: "Low Stock",
    icon: Package,
    href: "/notifications/low-stock",
  },
  {
    name: "Reminders",
    icon: Clock3,
    href: "/notifications/reminders",
  },
  {
    name: "Task Center",
    icon: CheckSquare,
    href: "/notifications/task-center",
  },
  {
    name: "System Notifications",
    icon: Settings,
    href: "/notifications/system-notifications",
  },
];

export default function NotificationsNav() {
  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">

    

      {/* LOGO */}
      <div className="flex h-[92px] items-center gap-3 border-b border-border-theme px-5">

        

        <div>
          

          <p className="text-[10px] text-text-secondary">
            Jewellery ERP System
          </p>
        </div>

      </div>

      {/* MODULE TITLE */}
      <div className="border-b border-border-theme px-5 py-5">

        <div className="flex items-center gap-2">

          <Bell
            size={16}
            className="text-accent-gold"
          />

          <p className="text-xs font-bold uppercase tracking-wider text-accent-gold">
            Notifications
          </p>

        </div>

      </div>

      {/* MENU */}
      

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm text-text-secondary transition hover:bg-[#211c0d] hover:text-accent-gold"
            >

              <div className="flex items-center gap-3">

                <Icon
                  size={18}
                  className="text-text-secondary transition group-hover:text-accent-gold"
                />

                <span>
                  {item.name}
                </span>

              </div>

              <span className="text-accent-gold">
                ›
              </span>

            </Link>
          );

        })}

      

    
  
    </nav>
  );
}