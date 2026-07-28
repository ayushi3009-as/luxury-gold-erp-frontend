"use client";

import {
  Search,
  Bell,
  Settings,
  UserCircle2,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-[#111111] border-b border-zinc-800 flex items-center justify-between px-8">

      {/* Left */}

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-[#1b1b1b] border border-zinc-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="relative text-gray-300 hover:text-yellow-400 transition">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>
        </button>

        <button className="text-gray-300 hover:text-yellow-400 transition">
          <Settings size={22} />
        </button>

        <div className="flex items-center gap-3 bg-[#1b1b1b] px-4 py-2 rounded-xl border border-zinc-700">

          <UserCircle2
            size={38}
            className="text-yellow-500"
          />

          <div>

            <h3 className="text-white font-semibold">
              Admin
            </h3>

            <p className="text-xs text-gray-400">
              System Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}