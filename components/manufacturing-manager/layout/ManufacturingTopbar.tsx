"use client";

import { Search, Bell, MessageSquare, CalendarDays } from "lucide-react";

export default function ManufacturingTopbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex h-20 items-center justify-between border-b border-[#2A2A2A] bg-[#111111] px-8">

      {/* Left Section */}

      <div>

        <h1 className="text-2xl font-bold text-white">
          Manufacturing Manager
        </h1>

        <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
          <CalendarDays size={16} />
          <span>{today}</span>
        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#D4AF37]"
          />

        </div>

        {/* Notifications */}

        <button className="relative rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-gray-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Messages */}

        <button className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-gray-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
          <MessageSquare size={20} />
        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-black">
            MM
          </div>

          <div className="hidden lg:block">

            <p className="font-semibold text-white">
              Manufacturing Manager
            </p>

            <p className="text-sm text-gray-400">
              luxurygold@example.com
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}