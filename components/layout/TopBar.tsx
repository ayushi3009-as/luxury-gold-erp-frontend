import Link from "next/link";
import { Search, Bell, User, LogOut } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { logoutAction } from "@/app/actions/auth";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <div className="h-[78px] bg-background-primary border-b border-border-theme flex items-center justify-between px-8 w-full">
      {/* Left section: Title */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-text-primary tracking-wide">{title}</h1>
        <p className="text-sm text-text-secondary mt-0.5">Welcome back to Luxury Gold ERP</p>
      </div>

      {/* Right section: Gold Rate, Search, Notifications, Profile */}
      <div className="flex items-center gap-6">
        {/* Gold Rate Ticker */}
        <div className="flex items-center bg-background-tertiary border border-border-theme rounded-full px-4 py-1.5 shadow-inner">
          <span className="text-lg mr-2">🪙</span>
          <span className="text-sm text-text-secondary">
            Gold 22K: <span className="text-accent-gold font-semibold">₹ 7,620/g</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 border-l border-border-theme pl-6">
          <ThemeToggle />
          
          <button className="text-text-secondary hover:text-accent-gold transition-colors p-2 rounded-full hover:bg-background-tertiary">
            <Search size={20} />
          </button>
          
          <Link href="/notifications" className="text-text-secondary hover:text-accent-gold transition-colors relative p-2 rounded-full hover:bg-background-tertiary">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-[#0b0d0c]"></span>
          </Link>

          <form action={logoutAction}>
            <button title="Logout" className="w-10 h-10 rounded-full border border-border-theme bg-background-tertiary flex items-center justify-center text-accent-gold hover:bg-background-tertiary transition-colors ml-2">
              <LogOut size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
