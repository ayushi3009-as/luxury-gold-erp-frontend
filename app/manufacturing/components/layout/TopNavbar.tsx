"use client";

import { Bell, Search, Settings, UserCircle } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="h-16 bg-[#111111] border-b border-yellow-500/20 flex items-center justify-between px-6">
      {/* Left */}
      <div>
        <h2 className="text-xl font-semibold text-white">
          Manufacturing Dashboard
        </h2>
        <p className="text-sm text-gray-400">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-zinc-900 rounded-lg px-3 py-2 border border-zinc-700">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
          />
        </div>

        {/* Notification */}
        <button className="p-2 rounded-lg hover:bg-zinc-800">
          <Bell className="text-yellow-400" size={20} />
        </button>

        {/* Settings */}
        <button className="p-2 rounded-lg hover:bg-zinc-800">
          <Settings className="text-yellow-400" size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle className="text-yellow-400" size={34} />
          <div className="hidden md:block">
            <p className="text-white text-sm font-medium">
              Admin
            </p>
            <p className="text-xs text-gray-400">
              Manufacturing Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}