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
  Search,
  Bell,
  ChevronRight,
  Box,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "POS Billing", icon: Receipt },
  { name: "Inventory", icon: Package },
  { name: "Sales", icon: ShoppingCart },
  { name: "Purchase", icon: ShoppingCart },
  { name: "Customers", icon: Users },
  { name: "Products", icon: Box },
  { name: "Manufacturing", icon: Factory },
  { name: "Repairs", icon: Wrench },
  { name: "Gold Rate", icon: CircleDollarSign },
  { name: "Finance", icon: Wallet },
  { name: "HR & Payroll", icon: UserRound },
  { name: "Reports", icon: FileText },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
  { name: "Backup & Restore", icon: Database },
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

          {/* Logo */}
          <div className="flex h-[92px] items-center gap-3 border-b border-[#272419] px-5">
            <div className="text-4xl text-[#e4b52d]">◇</div>

            <div>
              <h1 className="text-lg font-bold text-[#f0c43c]">
                Luxury Gold
              </h1>

              <p className="text-[10px] text-gray-400">
                Jewellery ERP System
              </p>
            </div>
          </div>

          {/* Menu */}
          <nav className="mt-5 space-y-1 px-3">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className={`group flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-sm transition ${
                    index === 0
                      ? "border border-[#8e6b1c] bg-[#2a2413] text-[#f0c43c]"
                      : "text-gray-300 hover:bg-[#1c1a12] hover:text-[#f0c43c]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>

                  {index !== 0 && (
                    <ChevronRight
                      size={15}
                      className="text-[#d1a82e]"
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Branch */}
          <div className="absolute bottom-5 left-3 right-3 rounded-lg border border-[#40351b] bg-[#15150f] p-3">
            <p className="text-[10px] text-gray-500">
              CURRENT BRANCH
            </p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-[#e8bd3b]">
                Surat Branch
              </span>

              <ChevronRight size={15} />
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