"use client";

import { Users, BadgeCheck, Gem, AlertTriangle } from "lucide-react";
import { Customer } from "./customer-data";

interface CustomerStatsProps {
  customers: Customer[];
}

export default function CustomerStats({ customers }: CustomerStatsProps) {
  const total = customers.length;
  const activeCount = customers.filter((c) => c.status === "Active").length;
  const activePercentage = total > 0 ? ((activeCount / total) * 100).toFixed(1) : "0";

  const premiumCount = customers.filter(
    (c) => c.membership === "Gold Member" || c.membership === "Diamond Member"
  ).length;
  const premiumPercentage = total > 0 ? ((premiumCount / total) * 100).toFixed(1) : "0";

  const totalBalance = customers.reduce((sum, c) => sum + c.balance, 0);

  const stats = [
    {
      title: "Total Customers",
      value: total.toLocaleString(),
      subtitle: `Active dataset (${total})`,
      icon: Users,
      color: "text-green-400",
    },
    {
      title: "Active Customers",
      value: activeCount.toLocaleString(),
      subtitle: `${activePercentage}% of total`,
      icon: BadgeCheck,
      color: "text-gray-400",
    },
    {
      title: "Premium Members",
      value: premiumCount.toLocaleString(),
      subtitle: `${premiumPercentage}% of total`,
      icon: Gem,
      color: "text-gray-400",
    },
    {
      title: "Total Account Balance",
      value: `₹${(totalBalance / 100000).toFixed(2)}L`,
      subtitle: `${customers.length} registered accounts`,
      icon: AlertTriangle,
      color: "text-amber-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#D4AF37] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#222] p-4 rounded-xl shrink-0">
                <Icon className="text-[#D4AF37]" size={26} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">{item.title}</p>
                <h2 className="text-3xl font-bold mt-1 text-white">{item.value}</h2>
                <p className={`text-sm mt-2 ${item.color}`}>{item.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}