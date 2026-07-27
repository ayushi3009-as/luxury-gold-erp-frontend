import Link from "next/link";

import {
  LayoutDashboard,
  Receipt,
  Package,
  ShoppingCart,
  Users,
  Factory,
  Wrench,
  CircleDollarSign,
  Wallet,
  UserRound,
  FileText,
  BarChart3,
  Settings,
  Database,
  ChevronRight,
  Box,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    name: "POS Billing",
    icon: Receipt,
    href: "/pos-billing",
  },
  {
    name: "Inventory",
    icon: Package,
    href: "/inventory",
  },
  {
    name: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
  {
    name: "Purchase",
    icon: ShoppingCart,
    href: "/purchase",
  },
  {
    name: "Customers",
    icon: Users,
    href: "/customers",
  },
  {
    name: "Products",
    icon: Box,
    href: "/products",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    href: "/manufacturing",
  },
  {
    name: "Repairs",
    icon: Wrench,
    href: "/repairs",
  },
  {
    name: "Gold Rate",
    icon: CircleDollarSign,
    href: "/gold-rate",
  },
  {
    name: "Finance",
    icon: Wallet,
    href: "/finance",
  },
  {
    name: "HR & Payroll",
    icon: UserRound,
    href: "/hr-payroll",
  },
  {
    name: "Reports",
    icon: FileText,
    href: "/reports",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    name: "Backup & Restore",
    icon: Database,
    href: "/backup-restore",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#090a09] text-white">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="fixed left-0 top-0 hidden h-screen w-[230px] border-r border-[#2b2617] bg-[#0c0e0d] lg:block">

          {/* LOGO */}
          <div className="flex h-[92px] items-center gap-3 border-b border-[#272419] px-5">
            <div className="text-4xl text-[#e4b52d]">
              ◇
            </div>

            <div>
              <h1 className="text-lg font-bold text-[#f0c43c]">
                Luxury Gold
              </h1>

              <p className="text-[10px] text-gray-400">
                Jewellery ERP System
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="mt-5 space-y-1 px-3">

            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                item.name === "Dashboard";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center justify-between rounded-lg px-3 py-3 text-sm transition ${
                    active
                      ? "border border-[#9b741b] bg-[#2a2413] text-[#f0c43c]"
                      : "text-gray-300 hover:bg-[#1c1a12] hover:text-[#f0c43c]"
                  }`}
                >

                  <div className="flex items-center gap-3">
                    <Icon size={17} />

                    <span>
                      {item.name}
                    </span>
                  </div>

                  {!active && (
                    <ChevronRight
                      size={14}
                      className="text-[#c69b25]"
                    />
                  )}

                </Link>
              );
            })}

          </nav>

          {/* CURRENT BRANCH */}
          <div className="absolute bottom-5 left-3 right-3 rounded-lg border border-[#40351b] bg-[#15150f] p-3">

            <p className="text-[10px] text-gray-500">
              CURRENT BRANCH
            </p>

            <div className="mt-2 flex items-center justify-between">

              <span className="text-sm text-[#e8bd3b]">
                Surat Branch
              </span>

              <ChevronRight
                size={15}
                className="text-gray-400"
              />

            </div>

          </div>

        </aside>

        {/* PAGE CONTENT */}
        <section className="w-full lg:ml-[230px]">

          {children}

        </section>

      </div>
    </main>
  );
}