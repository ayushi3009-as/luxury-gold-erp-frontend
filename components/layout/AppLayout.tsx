"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MainSidebar from "./MainSidebar";
import TopBar from "./TopBar";

import StoreNavbar from "./StoreNavbar";

export default function AppLayout({ children, userRole }: { children: React.ReactNode, userRole?: string }) {
  const pathname = usePathname();

  const isPublicPage = 
    pathname === "/" || 
    pathname === "/login" || 
    pathname.startsWith("/shop") || 
    pathname.startsWith("/product") || 
    pathname.startsWith("/cart");

  if (isPublicPage) {
    return (
      <div className="min-h-screen bg-background-primary text-text-primary flex flex-col">
        {pathname !== "/login" && <StoreNavbar />}
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background-primary text-text-primary transition-colors duration-300">
      <MainSidebar userRole={userRole} />
      <div className="flex-1 lg:ml-[230px] flex flex-col">
        <TopBar title={pathname === "/dashboard" ? "Dashboard" : ""} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
