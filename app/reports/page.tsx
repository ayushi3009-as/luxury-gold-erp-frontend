import Link from "next/link";
import {
  Package,
  ShoppingCart,
  Users,
  Wrench,
  ArrowRight,
} from "lucide-react";

const reportCards = [
  {
    title: "Inventory Reports",
    value: "1,248",
    description: "Products Available",
    icon: Package,
    href: "/reports/inventory",
  },
  {
    title: "Sales Reports",
    value: "856",
    description: "Completed Sales",
    icon: ShoppingCart,
    href: "/reports/sales",
  },
  {
    title: "Customer Reports",
    value: "512",
    description: "Registered Customers",
    icon: Users,
    href: "/reports/customers",
  },
  {
    title: "Repair Reports",
    value: "74",
    description: "Repair Orders",
    icon: Wrench,
    href: "/reports/repair",
  },
];

export default function ReportsDashboardPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      {/* Header */}

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-accent-gold">
          Reports Dashboard
        </h1>

        <p className="text-text-secondary mt-2">
          Overview of all reports in the Luxury Gold ERP System
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {reportCards.map((report) => {
          const Icon = report.icon;

          return (
            <div
              key={report.title}
              className="
                bg-background-secondary
                border
                border-border-theme
                rounded-2xl
                p-6
                hover:border-yellow-500
                transition
              "
            >
              <div className="flex justify-between items-center">
                <Icon size={34} className="text-accent-gold" />

                <span className="text-3xl font-bold text-text-primary">
                  {report.value}
                </span>
              </div>

              <h2 className="text-xl font-semibold mt-6 text-accent-gold">
                {report.title}
              </h2>

              <p className="text-text-secondary mt-2">
                {report.description}
              </p>

              <Link
                href={report.href}
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border
                  border-yellow-500
                  text-accent-gold
                  rounded-xl
                  px-4
                  py-3
                  hover:bg-accent-gold
                  hover:text-black
                  transition
                "
              >
                <span>Open Report</span>

                <ArrowRight size={18} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Quick Access */}

      <div
        className="
          bg-background-secondary
          border
          border-border-theme
          rounded-2xl
          p-8
        "
      >
        <h2 className="text-2xl font-bold text-accent-gold mb-6">
          Quick Access
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/reports/inventory"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            📦 Inventory Report
          </Link>

          <Link
            href="/reports/sales"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            💰 Sales Report
          </Link>

          <Link
            href="/reports/customers"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            👥 Customer Report
          </Link>

          <Link
            href="/reports/repair"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            🔧 Repair Report
          </Link>
        </div>
      </div>
    </main>
  );
}