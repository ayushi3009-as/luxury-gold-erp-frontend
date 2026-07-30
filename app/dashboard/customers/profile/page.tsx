"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { customers, Customer } from "@/app/components/customer-data";
import { ShieldCheck, Phone, Mail, MapPin, Calendar, Award, ShoppingBag, Coins, CreditCard } from "lucide-react";

export default function CustomerProfilePage() {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(customers[0].id);

  const activeCustomer: Customer =
    customers.find((c) => c.id === selectedCustomerId) || customers[0];

  return (
    <div className="text-text-primary max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          Customer Profile
        </h1>
        <p className="text-text-secondary mt-1 text-sm">
          Module 3 / Page 3: 360-Degree Customer Profile View
        </p>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Customer Selector Dropdown */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <label className="text-sm text-text-secondary font-medium">Select Customer Profile:</label>
        <select
          value={selectedCustomerId}
          onChange={(e) => setSelectedCustomerId(Number(e.target.value))}
          className="bg-[#101010] text-text-primary border border-[#2C2C2C] rounded-xl px-4 py-2.5 outline-none focus:border-[#D4AF37] w-full sm:w-80"
        >
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} ({c.membership} - {c.city})
            </option>
          ))}
        </select>
      </div>

      {/* Main Profile Header Banner */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img
            src={activeCustomer.image}
            alt={activeCustomer.name}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#D4AF37] object-cover shadow-lg"
          />

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{activeCustomer.name}</h2>
              <span
                className={`text-xs font-semibold rounded-full px-3 py-1 ${
                  activeCustomer.membership === "Gold Member"
                    ? "bg-yellow-900/60 text-yellow-300 border border-yellow-700/50"
                    : activeCustomer.membership === "Diamond Member"
                    ? "bg-cyan-900/60 text-cyan-300 border border-cyan-700/50"
                    : "bg-gray-800 text-text-secondary border border-gray-700"
                }`}
              >
                {activeCustomer.membership}
              </span>
              {activeCustomer.kycVerified && (
                <span className="bg-emerald-900/40 text-emerald-400 border border-emerald-700/50 text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                  <ShieldCheck size={14} /> KYC Verified
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#D4AF37]" /> {activeCustomer.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#D4AF37]" /> {activeCustomer.email}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#D4AF37]" /> {activeCustomer.city}, India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="bg-amber-950/40 p-3.5 rounded-xl text-[#D4AF37] border border-amber-800/30">
              <ShoppingBag size={24} />
            </div>
            <div>
              <p className="text-xs text-text-secondary">Total Purchase Value</p>
              <h3 className="text-2xl font-bold text-text-primary mt-0.5">
                ₹{(activeCustomer.totalPurchases / 1000).toFixed(1)}k
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="bg-amber-950/40 p-3.5 rounded-xl text-[#D4AF37] border border-amber-800/30">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-xs text-text-secondary">Ledger Balance</p>
              <h3 className="text-2xl font-bold text-[#D4AF37] mt-0.5">
                ₹{activeCustomer.balance.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="bg-amber-950/40 p-3.5 rounded-xl text-[#D4AF37] border border-amber-800/30">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs text-text-secondary">Loyalty Points</p>
              <h3 className="text-2xl font-bold text-text-primary mt-0.5">
                {(activeCustomer.totalPurchases / 100).toFixed(0)} Pts
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="bg-amber-950/40 p-3.5 rounded-xl text-[#D4AF37] border border-amber-800/30">
              <Coins size={24} />
            </div>
            <div>
              <p className="text-xs text-text-secondary">Gold Scheme Status</p>
              <h3 className="text-2xl font-bold text-emerald-400 mt-0.5">
                {activeCustomer.progress}% Active
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-[#2C2C2C] pb-3">
            Account Details & CRM Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-text-secondary text-xs">Customer ID</p>
              <p className="font-mono text-text-primary font-semibold">CUST-00{activeCustomer.id}</p>
            </div>
            <div>
              <p className="text-text-secondary text-xs">Registration Date</p>
              <p className="text-text-primary font-medium flex items-center gap-1.5 mt-0.5">
                <Calendar size={14} className="text-[#D4AF37]" /> {activeCustomer.joinedDate}
              </p>
            </div>
            <div>
              <p className="text-text-secondary text-xs">Status</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                  activeCustomer.status === "Active"
                    ? "bg-green-900/50 text-green-400 border border-green-700/50"
                    : "bg-red-900/50 text-red-400 border border-red-700/50"
                }`}
              >
                {activeCustomer.status}
              </span>
            </div>
            <div>
              <p className="text-text-secondary text-xs">Preferred Category</p>
              <p className="text-text-primary font-medium">22K Gold & Solitaire Diamonds</p>
            </div>
          </div>
        </div>

        {/* Quick Action Sidebar */}
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 space-y-3">
          <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-[#2C2C2C] pb-3">
            Quick CRM Actions
          </h3>
          <button className="w-full text-left bg-[#101010] hover:bg-[#222] border border-[#2C2C2C] p-3 rounded-xl text-sm font-medium text-text-primary transition">
            💳 Generate Statement PDF
          </button>
          <button className="w-full text-left bg-[#101010] hover:bg-[#222] border border-[#2C2C2C] p-3 rounded-xl text-sm font-medium text-text-primary transition">
            📲 Send WhatsApp Payment Reminder
          </button>
          <button className="w-full text-left bg-[#101010] hover:bg-[#222] border border-[#2C2C2C] p-3 rounded-xl text-sm font-medium text-text-primary transition">
            ✨ Upgrade Membership Tier
          </button>
        </div>
      </div>
    </div>
  );
}
