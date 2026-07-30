"use client";

import { Search, Download } from "lucide-react";

interface CustomerFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  membership: string;
  onMembershipChange: (value: string) => void;
  city: string;
  onCityChange: (value: string) => void;
  cities: string[];
  onExport: () => void;
}

export default function CustomerFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  membership,
  onMembershipChange,
  city,
  onCityChange,
  cities,
  onExport,
}: CustomerFiltersProps) {
  return (
    <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-5 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search */}
        <div className="md:col-span-5 relative">
          <Search
            className="absolute left-4 top-3.5 text-text-secondary"
            size={20}
          />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search customers by name, mobile or email..."
            className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D4AF37] placeholder-gray-500"
          />
        </div>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="md:col-span-2 bg-[#101010] text-text-primary rounded-xl border border-[#2C2C2C] px-4 py-3 outline-none focus:border-[#D4AF37]"
        >
          <option value="All">Status : All</option>
          <option value="Active">Status : Active</option>
          <option value="Inactive">Status : Inactive</option>
        </select>

        {/* Membership */}
        <select
          value={membership}
          onChange={(e) => onMembershipChange(e.target.value)}
          className="md:col-span-2 bg-[#101010] text-text-primary rounded-xl border border-[#2C2C2C] px-4 py-3 outline-none focus:border-[#D4AF37]"
        >
          <option value="All">Membership : All</option>
          <option value="Gold Member">Gold Member</option>
          <option value="Silver Member">Silver Member</option>
          <option value="Diamond Member">Diamond Member</option>
        </select>

        {/* City */}
        <select
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          className="md:col-span-2 bg-[#101010] text-text-primary rounded-xl border border-[#2C2C2C] px-4 py-3 outline-none focus:border-[#D4AF37]"
        >
          <option value="All">City : All</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              City : {c}
            </option>
          ))}
        </select>

        {/* Export */}
        <button
          onClick={onExport}
          className="md:col-span-1 bg-transparent text-[#D4AF37] border border-[#D4AF37] rounded-xl flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-black transition py-3 px-4 font-medium"
        >
          <Download size={18} />
          Export
        </button>
      </div>
    </div>
  );
}