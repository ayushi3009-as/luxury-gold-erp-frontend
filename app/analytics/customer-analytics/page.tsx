"use client";

import {
  Users,
  UserPlus,
  Repeat2,
  Crown,
  TrendingUp,
  ArrowUpRight,
  Heart,
} from "lucide-react";



const customerSegments = [
  {
    title: "Premium Customers",
    count: "1,248",
    percentage: 32,
    description: "High-value customers with premium purchases",
  },
  {
    title: "Regular Customers",
    count: "3,846",
    percentage: 58,
    description: "Customers with regular purchase activity",
  },
  {
    title: "New Customers",
    count: "672",
    percentage: 10,
    description: "Customers acquired during this period",
  },
];

const monthlyCustomers = [
  { month: "Jan", newCustomers: 120, returning: 280 },
  { month: "Feb", newCustomers: 145, returning: 310 },
  { month: "Mar", newCustomers: 180, returning: 340 },
  { month: "Apr", newCustomers: 210, returning: 390 },
  { month: "May", newCustomers: 240, returning: 420 },
  { month: "Jun", newCustomers: 280, returning: 470 },
];

export default function CustomerAnalyticsPage() {
  const maxValue = 500;

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-8">

        {/* HEADER */}
        <div>
          <p className="text-xs text-text-secondary">
            Analytics / Customer Analytics
          </p>

          <div className="mt-2 flex items-center gap-3">
            <div className="rounded-xl bg-[#211c0d] p-3">
              <Users
                size={25}
                className="text-accent-gold"
              />
            </div>

            <h1 className="text-3xl font-bold text-accent-gold">
              Customer Analytics
            </h1>
          </div>

          <p className="mt-3 text-sm text-text-secondary">
            Understand customer behavior, growth and purchase patterns.
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                Total Customers
              </p>

              <Users
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              5,766
            </h2>

            <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
              <ArrowUpRight size={14} />
              +14.8% this year
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                New Customers
              </p>

              <UserPlus
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              672
            </h2>

            <p className="mt-2 text-xs text-green-400">
              +18.2% compared to last period
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                Returning Customers
              </p>

              <Repeat2
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              64.7%
            </h2>

            <p className="mt-2 text-xs text-green-400">
              Strong retention rate
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                Customer Lifetime Value
              </p>

              <Crown
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              $4,820
            </h2>

            <p className="mt-2 text-xs text-green-400">
              +11.6% growth
            </p>
          </div>

        </div>

        {/* CUSTOMER GROWTH */}
        <div className="mt-6 rounded-xl border border-border-theme bg-[#11130f] p-6">

          <div className="flex items-start justify-between">

            <div>
              <h2 className="text-lg font-semibold text-accent-gold">
                Customer Growth
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                New and returning customer activity
              </p>
            </div>

            <TrendingUp
              size={20}
              className="text-green-400"
            />

          </div>

          <div className="mt-8 flex h-64 items-end gap-5">

            {monthlyCustomers.map((item) => {

              const newHeight =
                (item.newCustomers / maxValue) * 100;

              const returningHeight =
                (item.returning / maxValue) * 100;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >

                  <div className="flex h-full w-full items-end gap-1">

                    <div
                      className="flex-1 rounded-t-lg bg-[#80651c]"
                      style={{
                        height: `${newHeight}%`,
                      }}
                    />

                    <div
                      className="flex-1 rounded-t-lg bg-accent-gold"
                      style={{
                        height: `${returningHeight}%`,
                      }}
                    />

                  </div>

                  <span className="mt-3 text-xs text-text-secondary">
                    {item.month}
                  </span>

                </div>
              );
            })}

          </div>

          <div className="mt-6 flex gap-6 text-xs text-text-secondary">

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#80651c]" />
              New Customers
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-gold" />
              Returning Customers
            </span>

          </div>

        </div>

        {/* CUSTOMER SEGMENTS */}
        <div className="mt-6">

          <h2 className="text-lg font-semibold text-accent-gold">
            Customer Segments
          </h2>

          <p className="mt-1 text-xs text-text-secondary">
            Customer classification based on purchase behavior
          </p>

          <div className="mt-5 grid grid-cols-3 gap-5">

            {customerSegments.map((segment) => (

              <div
                key={segment.title}
                className="rounded-xl border border-border-theme bg-[#11130f] p-6"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-lg bg-[#211c0d] p-3">
                    <Crown
                      size={20}
                      className="text-accent-gold"
                    />
                  </div>

                  <span className="text-xl font-bold text-accent-gold">
                    {segment.percentage}%
                  </span>

                </div>

                <h3 className="mt-5 font-semibold">
                  {segment.title}
                </h3>

                <p className="mt-2 text-2xl font-bold">
                  {segment.count}
                </p>

                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  {segment.description}
                </p>

                <div className="mt-5 h-2 rounded-full bg-[#292519]">

                  <div
                    className="h-full rounded-full bg-[#b98c20]"
                    style={{
                      width: `${segment.percentage}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CUSTOMER INSIGHT */}
        <div className="mt-6 rounded-xl border border-[#6c5420] bg-[#18150c] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-[#b98c20] p-3">
              <Heart
                size={22}
                className="text-black"
              />
            </div>

            <div>

              <h2 className="font-semibold text-accent-gold">
                Customer Insight
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Returning customers are contributing strongly to overall
                business revenue. Improving loyalty programs and personalized
                offers can further increase customer retention.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <TrendingUp size={16} />
                Customer retention is showing positive growth.
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}