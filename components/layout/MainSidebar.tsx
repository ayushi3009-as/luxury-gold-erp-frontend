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
  ChevronRight
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "POS Billing", href: "/pos", icon: Receipt },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Sales", href: "/dashboard/sales", icon: ShoppingCart },
  { name: "Purchase", href: "/purchase", icon: ShoppingCart },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Products", href: "/products", icon: Box },
  { name: "Manufacturing", href: "/dashboard/manufacturing", icon: Factory },
  { name: "Repairs", href: "/repairs", icon: Wrench },
  { name: "Gold Rate", href: "/gold-rate", icon: CircleDollarSign },
  { name: "Finance", href: "/dashboard/finance", icon: Wallet },
  { name: "HR & Payroll", href: "/hr", icon: UserRound },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Analytics", href: "/dashboard/ai", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Backup & Restore", href: "/backup", icon: Database },
];

export default function MainSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex flex-col w-[230px] fixed inset-y-0 left-0 bg-[#0c0e0d] border-r border-[#2b2617] h-full z-50">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center py-6 border-b border-[#2b2617]">
        <div className="text-[#e4b52d] text-2xl mb-1">◇</div>
        <h1 className="text-[#f0c43c] font-bold text-lg tracking-wider">Luxury Gold</h1>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Jewellery ERP System</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 group ${
                isActive
                  ? "border border-[#8e6b1c] bg-[#2a2413] text-[#f0c43c]"
                  : "text-gray-300 hover:bg-[#1c1a12] hover:text-[#f0c43c]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className={isActive ? "text-[#f0c43c]" : "text-gray-400 group-hover:text-[#f0c43c]"} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              {!isActive && <ChevronRight size={14} className="text-gray-600 group-hover:text-[#8e6b1c]" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-[#2b2617] bg-[#0c0e0d]">
        <div className="flex flex-col space-y-1">
          <span className="text-[10px] text-gray-500 uppercase font-semibold">Current Branch</span>
          <span className="text-xs text-[#f0c43c]">Surat Branch</span>
        </div>
      </div>
    </div>
  );
}
