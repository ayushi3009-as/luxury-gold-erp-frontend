"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, AlertTriangle, Package, Clock3, CheckSquare, Settings } from "lucide-react";
import clsx from "clsx";

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
  const pathname = usePathname();
  
  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-2 pr-6 border-r border-border-theme mr-2">
        <Bell size={18} className="text-accent-gold" />
        <span className="text-sm font-bold uppercase tracking-wider text-accent-gold">
          Notifications
        </span>
      </div>

      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              "group flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors",
              isActive 
                ? "bg-accent-gold/10 text-accent-gold font-medium" 
                : "text-text-secondary hover:bg-background-secondary hover:text-text-primary"
            )}
          >
            <Icon
              size={16}
              className={clsx(
                "transition-colors",
                isActive ? "text-accent-gold" : "text-text-secondary group-hover:text-text-primary"
              )}
            />
            <span className="whitespace-nowrap">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}