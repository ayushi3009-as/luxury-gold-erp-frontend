"use client";

import {
  Building2,
  Users,
  ShoppingCart,
  TrendingUp,
  Package,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const branches = [
  {
    name: "Surat Branch",
    sales: "₹ 4,25,850",
    growth: "18.2%",
    orders: "156",
  },
  {
    name: "Mumbai Branch",
    sales: "₹ 2,85,650",
    growth: "14.5%",
    orders: "98",
  },
  {
    name: "Delhi Branch",
    sales: "₹ 2,35,400",
    growth: "10.3%",
    orders: "87",
  },
  {
    name: "Vadodara Branch",
    sales: "₹ 1,80,350",
    growth: "8.9%",
    orders: "64",
  },
  {
    name: "Rajkot Branch",
    sales: "₹ 1,58,900",
    growth: "6.4%",
    orders: "52",
  },
];

export default function BranchDashboard() {
  return (
    <main className="min-h-screen bg-background-primary p-6 text-text-primary">

      {/* HEADER */}
      <div className="mb-8">
        <p className="text-sm text-text-secondary">
          Dashboard / Branch
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Branch Dashboard
        </h1>

        <p className="mt-2 text-text-secondary">
          Monitor branch performance, sales, employees and inventory.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        <BranchCard
          title="TOTAL BRANCHES"
          value="12"
          subtitle="All branches active"
          icon={<Building2 size={22} />}
        />

        <BranchCard
          title="TOTAL BRANCH SALES"
          value="₹ 12,85,250"
          subtitle="18.2% vs last month"
          icon={<ShoppingCart size={22} />}
        />

        <BranchCard
          title="TOTAL EMPLOYEES"
          value="248"
          subtitle="Across all branches"
          icon={<Users size={22} />}
        />

        <BranchCard
          title="TOTAL STOCK VALUE"
          value="₹ 8.45 Cr"
          subtitle="Across all locations"
          icon={<Package size={22} />}
        />

      </div>

      {/* MAIN SECTION */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* TABLE */}
        <section className="rounded-xl border border-border-theme bg-background-secondary p-5 xl:col-span-2">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="font-semibold text-accent-gold">
                BRANCH PERFORMANCE
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Sales performance by branch
              </p>
            </div>

            <TrendingUp
              size={22}
              className="text-[#d9a928]"
            />

          </div>

          <div className="mt-6 overflow-x-auto">

            <table className="w-full min-w-[650px]">

              <thead>
                <tr className="border-b border-border-theme text-left text-xs text-text-secondary">

                  <th className="pb-4">
                    BRANCH
                  </th>

                  <th className="pb-4">
                    SALES
                  </th>

                  <th className="pb-4">
                    GROWTH
                  </th>

                  <th className="pb-4">
                    ORDERS
                  </th>

                  <th className="pb-4">
                    STATUS
                  </th>

                </tr>
              </thead>

              <tbody>

                {branches.map((branch) => (

                  <tr
                    key={branch.name}
                    className="border-b border-[#25241c]"
                  >

                    <td className="py-4 font-medium">
                      {branch.name}
                    </td>

                    <td className="py-4 text-accent-gold">
                      {branch.sales}
                    </td>

                    <td className="py-4 text-green-400">
                      <span className="flex items-center gap-1">
                        <ArrowUpRight size={14} />
                        {branch.growth}
                      </span>
                    </td>

                    <td className="py-4 text-text-secondary">
                      {branch.orders}
                    </td>

                    <td className="py-4">

                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                        Active
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* TOP BRANCH */}
        <section className="rounded-xl border border-border-theme bg-background-secondary p-5">

          <h2 className="font-semibold text-accent-gold">
            TOP PERFORMING BRANCH
          </h2>

          <div className="flex flex-col items-center py-8">

            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent-gold bg-background-tertiary">

              <Building2
                size={42}
                className="text-accent-gold"
              />

            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Surat Branch
            </h3>

            <p className="mt-2 text-sm text-text-secondary">
              Best performing branch
            </p>

            <p className="mt-5 text-2xl font-bold text-accent-gold">
              ₹ 4,25,850
            </p>

            <span className="mt-2 flex items-center gap-1 text-sm text-green-400">
              <ArrowUpRight size={16} />
              18.2% Growth
            </span>

          </div>

        </section>

      </div>

      {/* SALES OVERVIEW */}
      <section className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-5">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="font-semibold text-accent-gold">
              BRANCH SALES OVERVIEW
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              Sales comparison between branches
            </p>
          </div>

          <MapPin
            size={22}
            className="text-[#d9a928]"
          />

        </div>

        <div className="mt-8 flex h-64 items-end justify-around gap-6 border-b border-l border-border-theme px-6">

           {[
            { name: "Surat", height: "92%" },
            { name: "Mumbai", height: "72%" },
            { name: "Delhi", height: "62%" },
            { name: "Vadodara", height: "48%" },
            { name: "Rajkot", height: "42%" },
          ].map((branch) => (

            <div
              key={branch.name}
              className="flex h-full flex-1 flex-col items-center justify-end gap-3"
            >

              <div
                className="w-full max-w-[60px] rounded-t-md bg-accent-gold"
                style={{
                  height: branch.height,
                }}
              />

              <span className="text-xs text-text-secondary">
                {branch.name}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* INFO CARDS */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">

        <InfoCard
          title="BEST SALES BRANCH"
          value="Surat Branch"
          subtitle="₹ 4.25L Revenue"
        />

        <InfoCard
          title="MOST ORDERS"
          value="Surat Branch"
          subtitle="156 Orders"
        />

        <InfoCard
          title="FASTEST GROWTH"
          value="Mumbai Branch"
          subtitle="14.5% Growth"
        />

      </div>

    </main>
  );
}


/* BRANCH CARD */

function BranchCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-theme bg-background-tertiary text-accent-gold">
        {icon}
      </div>

      <p className="mt-5 text-xs text-text-secondary">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-semibold">
        {value}
      </h3>

      <p className="mt-2 text-xs text-text-secondary">
        {subtitle}
      </p>

    </div>
  );
}


/* INFO CARD */

function InfoCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

      <p className="text-xs text-text-secondary">
        {title}
      </p>

      <h3 className="mt-3 text-lg font-semibold text-accent-gold">
        {value}
      </h3>

      <p className="mt-2 text-xs text-text-secondary">
        {subtitle}
      </p>

    </div>
  );
}