"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Coins,
  Download,
  Gem,
  Search,
  Scale,
  TrendingUp,
} from "lucide-react";



const metalBalances = [
  {
    id: 1,
    metal: "Gold",
    purity: "24K",
    opening: "125.500 kg",
    received: "48.250 kg",
    issued: "32.750 kg",
    balance: "141.000 kg",
    value: "₹ 9,87,00,000",
  },
  {
    id: 2,
    metal: "Gold",
    purity: "22K",
    opening: "85.250 kg",
    received: "24.500 kg",
    issued: "18.250 kg",
    balance: "91.500 kg",
    value: "₹ 5,85,60,000",
  },
  {
    id: 3,
    metal: "Silver",
    purity: "999",
    opening: "250.000 kg",
    received: "75.000 kg",
    issued: "45.000 kg",
    balance: "280.000 kg",
    value: "₹ 2,24,00,000",
  },
  {
    id: 4,
    metal: "Platinum",
    purity: "950",
    opening: "12.500 kg",
    received: "3.250 kg",
    issued: "1.750 kg",
    balance: "14.000 kg",
    value: "₹ 4,90,00,000",
  },
];

export default function MetalBalance() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Metal Balance
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Metal Balance
            </h1>

            <p className="mt-1 text-text-secondary">
              Monitor metal stock, purity, movement and current balance.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            <Download size={16} />
            Export Report
          </button>

        </div>

        {/* FILTERS */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">

              <Search
                size={18}
                className="text-text-secondary"
              />

              <input
                type="text"
                placeholder="Search metal..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">

              <option>All Metals</option>
              <option>Gold</option>
              <option>Silver</option>
              <option>Platinum</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">

              <option>All Purity</option>
              <option>24K</option>
              <option>22K</option>
              <option>999</option>
              <option>950</option>

            </select>

            <div className="relative">

              <CalendarDays
                size={17}
                className="absolute left-3 top-3.5 text-[#d9a928]"
              />

              <input
                type="date"
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold"
              />

            </div>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <Coins
                size={27}
                className="text-accent-gold"
              />

              <span className="flex items-center text-xs text-green-400">
                <ArrowUpRight size={15} />
                8.4%
              </span>

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL GOLD BALANCE
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              232.5 kg
            </h2>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <Scale
                size={27}
                className="text-accent-gold"
              />

              <span className="flex items-center text-xs text-green-400">
                <ArrowUpRight size={15} />
                5.2%
              </span>

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL METAL STOCK
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              526.5 kg
            </h2>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <TrendingUp
                size={27}
                className="text-accent-gold"
              />

              <span className="flex items-center text-xs text-red-400">
                <ArrowDownRight size={15} />
                2.1%
              </span>

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL ISSUED
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              97.75 kg
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">

            <div className="flex items-center justify-between">

              <Gem
                size={27}
                className="text-accent-gold"
              />

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL METAL VALUE
            </p>

            <h2 className="mt-2 text-2xl font-bold text-accent-gold">
              ₹ 22.86 Cr
            </h2>

          </div>

        </div>

        {/* METAL BALANCE TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 border-b border-border-theme pb-4">

            <h2 className="font-semibold text-accent-gold">
              METAL BALANCE SUMMARY
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              Track opening, received, issued and current metal balance
            </p>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1150px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

                <tr>
                  <th className="px-4 py-4">METAL</th>
                  <th className="px-4 py-4">PURITY</th>
                  <th className="px-4 py-4">OPENING BALANCE</th>
                  <th className="px-4 py-4">RECEIVED</th>
                  <th className="px-4 py-4">ISSUED</th>
                  <th className="px-4 py-4">CURRENT BALANCE</th>
                  <th className="px-4 py-4">VALUE</th>
                </tr>

              </thead>

              <tbody>

                {metalBalances.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                          <Coins size={18} />
                        </div>

                        <span className="font-medium text-text-primary">
                          {item.metal}
                        </span>

                      </div>

                    </td>

                    <td className="px-4 py-4 text-accent-gold">
                      {item.purity}
                    </td>

                    <td className="px-4 py-4">
                      {item.opening}
                    </td>

                    <td className="px-4 py-4 text-green-400">
                      +{item.received}
                    </td>

                    <td className="px-4 py-4 text-red-400">
                      -{item.issued}
                    </td>

                    <td className="px-4 py-4 font-semibold text-accent-gold">
                      {item.balance}
                    </td>

                    <td className="px-4 py-4 font-semibold text-text-primary">
                      {item.value}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* BALANCE MOVEMENT */}
        <div className="mt-5 grid gap-5 xl:grid-cols-2">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <h2 className="font-semibold text-accent-gold">
                METAL MOVEMENT
              </h2>

              <span className="text-xs text-text-secondary">
                This Month
              </span>

            </div>

            <div className="mt-6 flex h-56 items-end justify-around gap-3 rounded-lg border border-dashed border-[#3a321e] p-5">

              {[45, 70, 55, 80, 65, 90, 75, 95].map(
                (height, index) => (

                  <div
                    key={index}
                    className="w-8 rounded-t-md bg-[#d9a927]"
                    style={{ height: `${height}%` }}
                  />

                )
              )}

            </div>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <h2 className="font-semibold text-accent-gold">
              PURITY DISTRIBUTION
            </h2>

            <div className="mt-6 space-y-5">

              {[
                ["24K Gold", "62%", "145.5 kg"],
                ["22K Gold", "25%", "91.5 kg"],
                ["Silver 999", "8%", "280 kg"],
                ["Platinum 950", "5%", "14 kg"],
              ].map(([name, percentage, weight]) => (

                <div key={name}>

                  <div className="mb-2 flex justify-between text-sm">

                    <span className="text-text-secondary">
                      {name}
                    </span>

                    <span className="text-accent-gold">
                      {weight}
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#27251b]">

                    <div
                      className="h-2 rounded-full bg-[#d9a927]"
                      style={{ width: percentage }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}