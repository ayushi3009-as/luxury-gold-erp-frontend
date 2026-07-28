"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  UserPlus,
  UserCheck,
  ShoppingBag,
  Award,
  Coins,
  BookOpen,
  FileCheck,
  BarChart2,
  MessageSquare,
} from "lucide-react";

const crmTabs = [
  { name: "Customer List", href: "/dashboard/customers", icon: Users },
  { name: "Add Customer", href: "/dashboard/customers/add", icon: UserPlus },
  { name: "Customer Profile", href: "/dashboard/customers/profile", icon: UserCheck },
  { name: "Purchase History", href: "/dashboard/customers/purchases", icon: ShoppingBag },
  { name: "Loyalty Wallet", href: "/dashboard/customers/loyalty", icon: Award },
  { name: "Gold Saving Scheme", href: "/dashboard/customers/gold-scheme", icon: Coins },
  { name: "Customer Ledger", href: "/dashboard/customers/ledger", icon: BookOpen },
  { name: "Customer Documents", href: "/dashboard/customers/documents", icon: FileCheck },
  { name: "Customer Analytics", href: "/dashboard/customers/analytics", icon: BarChart2 },
  { name: "Customer Feedback", href: "/dashboard/customers/feedback", icon: MessageSquare },
];

export default function CRMSubNav() {
  const pathname = usePathname();

  return (
    <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-2 my-6 overflow-x-auto shadow-md">
      <div className="flex items-center gap-1 min-w-max">
        {crmTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            pathname === tab.href ||
            (tab.href !== "/dashboard/customers" && pathname.startsWith(tab.href));

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition ${
                isActive
                  ? "bg-[#D4AF37] text-black font-semibold shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-[#222]"
              }`}
            >
              <Icon size={16} />
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
