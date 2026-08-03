"use client";

import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <>
      <div className="h-[78px] bg-background-primary border-b border-border-theme flex items-center justify-between px-8 w-full">
        {/* Left section: Title */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-text-primary tracking-wide">{title}</h1>
          <p className="text-sm text-text-secondary mt-0.5">Welcome back to Luxury Gold ERP</p>
        </div>

        {/* Right section: Profile/Actions */}
        <div className="flex items-center gap-6">
          {/* Actions */}
          <div className="flex items-center gap-4 pl-6">
            <ThemeToggle />
            
            <a 
              href="/logout"
              title="Logout" 
              className="w-10 h-10 rounded-full border border-border-theme bg-background-tertiary flex items-center justify-center text-accent-gold hover:bg-background-tertiary transition-colors ml-2"
            >
              <LogOut size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
