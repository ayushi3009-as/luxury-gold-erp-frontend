"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Wrench,
  LayoutDashboard,
  PlusCircle,
  Activity,
  Truck,
  ChevronDown,
  Users,
  Receipt,
  BarChart3,
  Bell,
} from "lucide-react";

export default function RepairNav() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const primaryItems = [
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
      title: "Repair Status",
      href: "/repair/status",
      icon: Activity,
    },
    {
      title: "Delivery",
      href: "/repair/delivery",
      icon: Truck,
    },
  ];

  const moreItems = [
    {
      title: "Worker Assignment",
      href: "/repair/worker-assignment",
      icon: Users,
    },
    {
      title: "Repair Invoice",
      href: "/repair/invoice",
      icon: Receipt,
    },
    {
      title: "Reports",
      href: "/repair/reports",
      icon: BarChart3,
    },
    {
      title: "Notifications",
      href: "/repair/notifications",
      icon: Bell,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/repair") return pathname === "/repair";
    return pathname.startsWith(href);
  };

  return (
    <nav className="relative z-[100] flex items-center justify-between border-b border-border-theme bg-[#111111]/80 backdrop-blur-xl px-6 py-4 w-full">
      <div className="flex items-center gap-6">
        <span className="text-sm font-bold tracking-widest uppercase text-accent-gold hidden md:block">
          Repair Modules
        </span>
        <div className="flex items-center gap-2">
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  active
                    ? "bg-accent-gold text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "text-text-secondary hover:bg-text-primary/5 hover:text-text-primary"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            );
          })}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                isMoreOpen || moreItems.some((i) => isActive(i.href))
                  ? "bg-text-primary/10 text-text-primary font-bold"
                  : "text-text-secondary hover:bg-text-primary/5 hover:text-text-primary"
              }`}
            >
              <span className="text-sm font-semibold">More</span>
              <ChevronDown size={18} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMoreOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-border-theme bg-[#151515] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-2 flex flex-col gap-1">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMoreOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                          active
                            ? "bg-accent-gold/20 text-accent-gold"
                            : "text-text-secondary hover:bg-text-primary/5 hover:text-text-primary"
                        }`}
                      >
                        <Icon size={16} />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}