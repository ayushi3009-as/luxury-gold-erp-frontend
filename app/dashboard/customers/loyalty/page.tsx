"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { loyaltyRecords } from "@/app/components/customer-data";
import { Award, Gift, Sparkles, Check } from "lucide-react";

export default function LoyaltyWalletPage() {
  const [selectedTier, setSelectedTier] = useState<string>("All");

  const filteredLoyalty = loyaltyRecords.filter(
    (l) => selectedTier === "All" || l.tier === selectedTier
  );

  return (
    <div className="text-white max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Loyalty Wallet & Rewards
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Module 3 / Page 5: Customer Tier Loyalty & Points Management
        </p>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Tier Benefits Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 text-gray-300 mb-3">
            <Award size={24} className="text-gray-400" />
            <h3 className="text-xl font-bold text-white">Silver Tier</h3>
          </div>
          <p className="text-xs text-gray-400 mb-4">Purchases up to ₹2,00,000</p>
          <ul className="text-xs text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" /> 1 Point per ₹100 Spent
            </li>
            <li className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" /> 5% Discount on Making Charges
            </li>
            <li className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" /> Birthday Greeting Offer
            </li>
          </ul>
        </div>

        <div className="bg-[#171717] border border-[#D4AF37] rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-amber-500/5">
          <div className="flex items-center gap-3 text-[#D4AF37] mb-3">
            <Sparkles size={24} />
            <h3 className="text-xl font-bold text-[#D4AF37]">Gold Tier (Popular)</h3>
          </div>
          <p className="text-xs text-gray-400 mb-4">Purchases ₹2,00,000 - ₹5,00,000</p>
          <ul className="text-xs text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <Check size={14} className="text-[#D4AF37]" /> 1.5 Points per ₹100 Spent
            </li>
            <li className="flex items-center gap-2">
              <Check size={14} className="text-[#D4AF37]" /> 12% Discount on Making Charges
            </li>
            <li className="flex items-center gap-2">
              <Check size={14} className="text-[#D4AF37]" /> Free Annual Jewellery Cleaning
            </li>
          </ul>
        </div>

        <div className="bg-[#171717] border border-cyan-700/60 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 text-cyan-400 mb-3">
            <Gift size={24} />
            <h3 className="text-xl font-bold text-cyan-300">Diamond VIP Tier</h3>
          </div>
          <p className="text-xs text-gray-400 mb-4">Purchases Above ₹5,00,000</p>
          <ul className="text-xs text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <Check size={14} className="text-cyan-400" /> 2 Points per ₹100 Spent
            </li>
            <li className="flex items-center gap-2">
              <Check size={14} className="text-cyan-400" /> 20% Discount on Making Charges
            </li>
            <li className="flex items-center gap-2">
              <Check size={14} className="text-cyan-400" /> Dedicated Personal Relationship Manager
            </li>
          </ul>
        </div>
      </div>

      {/* Customer Loyalty Table */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl overflow-hidden shadow-xl">
        <div className="p-5 border-b border-[#2C2C2C] flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Customer Reward Wallet Standings</h3>
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="bg-[#101010] text-white border border-[#2C2C2C] rounded-xl px-4 py-2 text-xs outline-none focus:border-[#D4AF37]"
          >
            <option value="All">All Tiers</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Diamond">Diamond</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1E1E1E] text-gray-400">
              <tr>
                <th className="p-4">Customer Name</th>
                <th className="p-4">Membership Tier</th>
                <th className="p-4">Available Points</th>
                <th className="p-4">Lifetime Earned</th>
                <th className="p-4">Total Redeemed</th>
                <th className="p-4">Last Activity</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2C2C2C]">
              {filteredLoyalty.map((l) => (
                <tr key={l.customerId} className="hover:bg-[#202020] transition">
                  <td className="p-4 font-semibold text-white">{l.customerName}</td>
                  <td className="p-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        l.tier === "Gold"
                          ? "bg-yellow-900/60 text-yellow-300 border border-yellow-700/50"
                          : l.tier === "Diamond"
                          ? "bg-cyan-900/60 text-cyan-300 border border-cyan-700/50"
                          : "bg-gray-800 text-gray-300 border border-gray-700"
                      }`}
                    >
                      {l.tier} Member
                    </span>
                  </td>
                  <td className="p-4 font-bold text-[#D4AF37] font-mono">{l.pointsBalance.toLocaleString()} Pts</td>
                  <td className="p-4 font-mono text-gray-300">{l.totalEarned.toLocaleString()}</td>
                  <td className="p-4 font-mono text-gray-400">{l.totalRedeemed.toLocaleString()}</td>
                  <td className="p-4 text-gray-400 text-xs">{l.lastActivity}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => alert(`Redeem reward points for ${l.customerName}`)}
                      className="px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-yellow-400 text-black text-xs font-semibold transition"
                    >
                      Redeem Points
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
