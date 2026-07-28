"use client";

import { Search, Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-[#111111] border-b border-yellow-500/20 flex items-center justify-between px-8">
      {/* Left Side */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search employees..."
          className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-lg pl-11 pr-4 py-2.5 text-white outline-none focus:border-yellow-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="text-gray-300 hover:text-yellow-400 transition" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <UserCircle size={38} className="text-yellow-400" />

          <div>
            <h3 className="text-white font-semibold">Admin</h3>
            <p className="text-xs text-gray-400">HR Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}