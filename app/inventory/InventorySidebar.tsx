"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PackagePlus,
  PackageMinus,
  ArrowLeftRight,
  ClipboardCheck,
  Radio,
  ScanLine,
  Warehouse,
  Scale,
  Gem,
  Diamond,
  AlertTriangle,
  Trash2,
  Settings,
  History,
} from "lucide-react";

const inventoryPages = [
  {
    name: "Inventory Dashboard",
    href: "/inventory",
    icon: LayoutDashboard,
  },
  {
    name: "Stock Entry",
    href: "/inventory/stock-entry",
    icon: PackagePlus,
  },
  {
    name: "Stock Out",
    href: "/inventory/stock-out",
    icon: PackageMinus,
  },
  {
    name: "Stock Transfer",
    href: "/inventory/stock-transfer",
    icon: ArrowLeftRight,
  },
  {
    name: "Physical Counting",
    href: "/inventory/physical-counting",
    icon: ClipboardCheck,
  },
  {
    name: "RFID Tracking",
    href: "/inventory/rfid-tracking",
    icon: Radio,
  },
  {
    name: "Barcode Scan",
    href: "/inventory/barcode-scan",
    icon: ScanLine,
  },
  {
    name: "Warehouse",
    href: "/inventory/warehouse",
    icon: Warehouse,
  },
  {
    name: "Metal Balance",
    href: "/inventory/metal-balance",
    icon: Scale,
  },
  {
    name: "Diamond Inventory",
    href: "/inventory/diamond-inventory",
    icon: Diamond,
  },
  {
    name: "Gemstone Inventory",
    href: "/inventory/gemstone-inventory",
    icon: Gem,
  },
  {
    name: "Low Stock",
    href: "/inventory/low-stock",
    icon: AlertTriangle,
  },
  {
    name: "Dead Stock",
    href: "/inventory/dead-stock",
    icon: Trash2,
  },
  {
    name: "Stock Adjustment",
    href: "/inventory/stock-adjustment",
    icon: Settings,
  },
  {
    name: "Inventory History",
    href: "/inventory/inventory-history",
    icon: History,
  },
];

export default function InventorySidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 z-50 h-screen w-64 overflow-y-auto border-r border-[#3d3218] bg-[#0d0f0d] p-4 text-white">

      {/* Header */}
      <div className="mb-6 border-b border-[#3d3218] pb-5">
        <h1 className="text-xl font-bold text-[#e4b52d]">
          LUXRAY GOLD
        </h1>

        <p className="mt-1 text-xs text-gray-500">
          Inventory Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">

        {inventoryPages.map((page) => {
          const Icon = page.icon;

          const isActive =
            pathname === page.href ||
            (page.href !== "/inventory" &&
              pathname.startsWith(page.href));

          return (
            <Link
              key={page.href}
              href={page.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all ${
                isActive
                  ? "border border-[#5a4617] bg-[#3d3218] text-[#e4b52d]"
                  : "text-gray-400 hover:bg-[#1a1b16] hover:text-[#e4b52d]"
              }`}
            >
              <Icon size={18} />

              <span>{page.name}</span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}