"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Receipt, 
  Package, 
  ShoppingCart, 
  Users, 
  Box, 
  Factory, 
  Wrench, 
  CircleDollarSign, 
  Wallet, 
  UserRound, 
  FileText, 
  BarChart3, 
  Settings, 
  Database,
  ChevronRight,
  Brain
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "POS Billing", href: "/billing", icon: Receipt },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Sales", href: "/dashboard/sales", icon: ShoppingCart },
  { name: "Purchase", href: "/purchase", icon: ShoppingCart },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Products", href: "/products", icon: Box },
  { name: "Manufacturing", href: "/dashboard/manufacturing", icon: Factory },
  { name: "Repairs", href: "/repair", icon: Wrench },
  { name: "Gold Rate", href: "/gold-rate", icon: CircleDollarSign },
  { name: "Finance", href: "/dashboard/finance", icon: Wallet },
  { name: "HR & Payroll", href: "/hr", icon: UserRound },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "AI Assistant", href: "/ai-assistant", icon: Brain },
  { name: "SaaS Admin", href: "/saas-admin", icon: Settings },
  { name: "Website Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Audit Logs", href: "/audit-logs", icon: FileText },
  { name: "Backup & Restore", href: "/backup", icon: Database },
];

export default function MainSidebar({ userRole }: { userRole?: string }) {
  const pathname = usePathname();

  const filteredMenuItems = menuItems.filter(item => {
    // Only Super Admins can see the SaaS Admin portal
    if (item.name === "SaaS Admin") {
      return userRole === "SUPER_ADMIN" || userRole === "Super Admin";
    }

    if (userRole === "SUPER_ADMIN" || userRole === "Super Admin") {
      // Super Admin mainly manages SaaS, but they can see other things too if they want
      return true;
    }

    if (userRole === "Sales Staff") {
      // Sales Staff only handles POS and basic sales
      return ["Dashboard", "POS Billing", "Sales", "Customers", "Products"].includes(item.name);
    }
    
    // Store Admin (and default fallback for others) sees everything EXCEPT SaaS Admin
    return true;
  });

  return (
    <div className="hidden lg:flex flex-col w-[230px] fixed inset-y-0 left-0 bg-background-primary border-r border-border-theme h-full z-50">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center py-6 border-b border-border-theme">
        <div className="mb-2 relative w-16 h-16 rounded-xl overflow-hidden ring-1 ring-accent-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="Luxury Gold Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-accent-gold font-bold text-lg tracking-wider">Luxury Gold</h1>
        <p className="text-text-secondary text-[10px] uppercase tracking-widest mt-1">Jewellery ERP System</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden py-4 px-3 space-y-1">
        {filteredMenuItems.map((item) => {
          const isActive = item.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 group ${
                isActive
                  ? "border border-border-theme bg-background-tertiary text-accent-gold"
                  : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className={isActive ? "text-accent-gold" : "text-text-secondary group-hover:text-accent-gold"} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              {!isActive && <ChevronRight size={14} className="text-gray-600 group-hover:text-accent-gold" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border-theme bg-background-primary">
        <div className="flex flex-col space-y-1">
          <span className="text-[10px] text-text-secondary uppercase font-semibold">Current Branch</span>
          <span className="text-xs text-accent-gold">Surat Branch</span>
        </div>
      </div>
    </div>
  );
}
