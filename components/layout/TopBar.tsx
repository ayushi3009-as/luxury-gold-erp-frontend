import { Search, Bell, User } from "lucide-react";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <div className="h-[78px] bg-[#0b0d0c] border-b border-[#29251a] flex items-center justify-between px-8 w-full">
      {/* Left section: Title */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-white tracking-wide">{title}</h1>
        <p className="text-sm text-gray-400 mt-0.5">Welcome back to Luxury Gold ERP</p>
      </div>

      {/* Right section: Gold Rate, Search, Notifications, Profile */}
      <div className="flex items-center gap-6">
        {/* Gold Rate Ticker */}
        <div className="flex items-center bg-[#1c1a12] border border-[#2b2617] rounded-full px-4 py-1.5 shadow-inner">
          <span className="text-lg mr-2">🪙</span>
          <span className="text-sm text-gray-300">
            Gold 22K: <span className="text-[#f0c43c] font-semibold">₹ 7,620/g</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 border-l border-[#29251a] pl-6">
          <button className="text-gray-400 hover:text-[#f0c43c] transition-colors p-2 rounded-full hover:bg-[#1c1a12]">
            <Search size={20} />
          </button>
          
          <button className="text-gray-400 hover:text-[#f0c43c] transition-colors relative p-2 rounded-full hover:bg-[#1c1a12]">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-[#0b0d0c]"></span>
          </button>

          <button className="w-10 h-10 rounded-full border border-[#8e6b1c] bg-[#2a2413] flex items-center justify-center text-[#f0c43c] hover:bg-[#1c1a12] transition-colors ml-2">
            <User size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
