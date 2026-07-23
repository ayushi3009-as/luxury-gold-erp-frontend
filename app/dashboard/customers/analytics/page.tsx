"use client";

import CRMSubNav from "@/app/components/crm-sub-nav";
import { BarChart2, TrendingUp, Users, PieChart, DollarSign, Award } from "lucide-react";

export default function CustomerAnalyticsPage() {
  return (
    <div className="text-white max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Customer CRM Analytics
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Module 3 / Page 9: Customer Insights, LTV & Retention Performance
        </p>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Analytics KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-gray-400 font-medium">Customer Lifetime Value (LTV)</span>
            <div className="p-2 bg-amber-950/40 text-[#D4AF37] rounded-lg">
              <DollarSign size={18} />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white">₹3.98L</h3>
          <p className="text-xs text-emerald-400 mt-2 font-medium">↑ +14.2% vs last quarter</p>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-gray-400 font-medium">Average Order Value (AOV)</span>
            <div className="p-2 bg-amber-950/40 text-[#D4AF37] rounded-lg">
              <TrendingUp size={18} />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white">₹2,09,680</h3>
          <p className="text-xs text-emerald-400 mt-2 font-medium">↑ High-ticket gold jewelry sales</p>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-gray-400 font-medium">Customer Retention Rate</span>
            <div className="p-2 bg-amber-950/40 text-[#D4AF37] rounded-lg">
              <Users size={18} />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-emerald-400">82.4%</h3>
          <p className="text-xs text-gray-400 mt-2">Repeat buyers in 12 months</p>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-gray-400 font-medium">Gold Scheme Opt-in Rate</span>
            <div className="p-2 bg-amber-950/40 text-[#D4AF37] rounded-lg">
              <Award size={18} />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white">64.5%</h3>
          <p className="text-xs text-emerald-400 mt-2 font-medium">↑ 11+1 Monthly Plan growth</p>
        </div>
      </div>

      {/* Visual Distributions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Tier Distribution */}
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 border-b border-[#2C2C2C] pb-3 flex items-center gap-2">
            <PieChart size={20} className="text-[#D4AF37]" /> Membership Tier Distribution
          </h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-1 text-gray-300">
                <span>Gold Members (60%)</span>
                <span className="font-mono text-[#D4AF37]">750 Customers</span>
              </div>
              <div className="w-full bg-[#101010] h-3 rounded-full overflow-hidden border border-[#2C2C2C]">
                <div className="bg-[#D4AF37] h-full w-[60%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1 text-gray-300">
                <span>Silver Members (25%)</span>
                <span className="font-mono text-gray-300">312 Customers</span>
              </div>
              <div className="w-full bg-[#101010] h-3 rounded-full overflow-hidden border border-[#2C2C2C]">
                <div className="bg-gray-400 h-full w-[25%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1 text-gray-300">
                <span>Diamond VIP Members (15%)</span>
                <span className="font-mono text-cyan-300">188 Customers</span>
              </div>
              <div className="w-full bg-[#101010] h-3 rounded-full overflow-hidden border border-[#2C2C2C]">
                <div className="bg-cyan-400 h-full w-[15%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Revenue Share */}
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 border-b border-[#2C2C2C] pb-3 flex items-center gap-2">
            <BarChart2 size={20} className="text-[#D4AF37]" /> Top Spending Cities
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center p-3 bg-[#101010] rounded-xl border border-[#2C2C2C]">
              <span className="font-semibold text-white">Mumbai</span>
              <span className="text-[#D4AF37] font-mono font-bold">₹48.2 Lakhs</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#101010] rounded-xl border border-[#2C2C2C]">
              <span className="font-semibold text-white">Surat</span>
              <span className="text-[#D4AF37] font-mono font-bold">₹34.5 Lakhs</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#101010] rounded-xl border border-[#2C2C2C]">
              <span className="font-semibold text-white">Jaipur</span>
              <span className="text-[#D4AF37] font-mono font-bold">₹28.9 Lakhs</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#101010] rounded-xl border border-[#2C2C2C]">
              <span className="font-semibold text-white">Delhi</span>
              <span className="text-[#D4AF37] font-mono font-bold">₹22.1 Lakhs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
