"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MainSidebar from "./MainSidebar";
import TopBar from "./TopBar";

import StoreNavbar from "./StoreNavbar";

export default function AppLayout({ children, userRole }: { children: React.ReactNode, userRole?: string }) {
  const pathname = usePathname();

  // All routes that are part of the B2C storefront (no ERP sidebar)
  const storefrontPaths = [
    "/store",
    "/collections",
    "/product",
    "/wishlist",
    "/checkout",
    "/account",
    "/search",
    "/gifting",
    "/custom-orders",
    "/size-guide",
    "/care",
    "/certification",
    "/book-appointment",
    "/journal",
    "/faq",
    "/contact",
    "/policies",
    "/cart",
    "/shop",
  ];

  const isPublicPage =
    pathname === "/" ||
    pathname === "/login" ||
    storefrontPaths.some(p => pathname.startsWith(p));

  if (isPublicPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-background-primary text-text-primary transition-colors duration-300">
      <MainSidebar userRole={userRole} />
      <div className="flex-1 lg:ml-[230px] flex flex-col min-w-0">
        <TopBar title={pathname === "/dashboard" ? "Dashboard" : ""} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
