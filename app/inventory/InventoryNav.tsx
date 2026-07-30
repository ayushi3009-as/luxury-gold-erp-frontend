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

export default function InventoryNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">

    

      {/* Header */}
      <div className="mb-6 border-b border-border-theme pb-5">
        

        <p className="mt-1 text-xs text-text-secondary">
          Inventory Management
        </p>
      </div>

      {/* Navigation */}
      

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
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border border-[#5a4617] bg-background-tertiary text-accent-gold"
                  : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <Icon size={18} />

              <span>{page.name}</span>
            </Link>
          );
        })}

      

    
  
    </nav>
  );
}