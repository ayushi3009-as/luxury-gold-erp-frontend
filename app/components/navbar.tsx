"use client";

import { Search, Bell, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-[#b4a0a0] bg-[#111111] flex items-center justify-between px-8 text-white">
      <div className="flex items-center gap-4">
        <div className="rounded-xl border border-[#2C2C2C] bg-[#171717] px-5 py-2.5 flex items-center gap-2">
          <span className="text-[#D4AF37] font-semibold">Gold 22K:</span>
          <span className="font-mono text-gray-200">₹6,850/g</span>
        </div>

        <div className="hidden md:flex rounded-xl border border-[#2C2C2C] bg-[#171717] px-5 py-2.5 items-center gap-2">
          <span className="text-[#D4AF37] font-semibold">Silver 999:</span>
          <span className="font-mono text-gray-200">₹92/g</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          className="p-2.5 rounded-xl border border-[#2C2C2C] bg-[#171717] hover:border-[#D4AF37] text-gray-300 hover:text-white transition"
          title="Search"
        >
          <Search size={18} />
        </button>

        <button
          className="p-2.5 rounded-xl border border-[#2C2C2C] bg-[#171717] hover:border-[#D4AF37] text-gray-300 hover:text-white transition relative"
          title="Notifications"
        >
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D4AF37]"></span>
        </button>

        <button
          className="p-2.5 rounded-xl border border-[#2C2C2C] bg-[#171717] hover:border-[#D4AF37] text-gray-300 hover:text-white transition"
          title="Settings"
        >
          <Settings size={18} />
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-[#2C2C2C]">
          <img
            src="https://i.pravatar.cc/150?img=33"
            alt="User profile"
            className="h-10 w-10 rounded-full border border-[#D4AF37] object-cover"
          />
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-white">Aditya Sharma</p>
            <p className="text-xs text-gray-400">Store Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}