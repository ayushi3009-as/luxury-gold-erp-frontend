"use client";

import {
  Diamond,
  Download,
  Eye,
  Gem,
  Plus,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";



const diamonds = [
  {
    id: 1,
    stoneId: "DIA-000245",
    shape: "Round Brilliant",
    carat: "1.25 ct",
    color: "F",
    clarity: "VS1",
    cut: "Excellent",
    stock: "Available",
    value: "₹ 4,85,000",
  },
  {
    id: 2,
    stoneId: "DIA-000246",
    shape: "Princess",
    carat: "0.85 ct",
    color: "G",
    clarity: "VVS2",
    cut: "Very Good",
    stock: "Available",
    value: "₹ 2,95,000",
  },
  {
    id: 3,
    stoneId: "DIA-000247",
    shape: "Oval",
    carat: "1.50 ct",
    color: "E",
    clarity: "VS2",
    cut: "Excellent",
    stock: "Reserved",
    value: "₹ 6,25,000",
  },
  {
    id: 4,
    stoneId: "DIA-000248",
    shape: "Emerald",
    carat: "0.75 ct",
    color: "H",
    clarity: "SI1",
    cut: "Good",
    stock: "Available",
    value: "₹ 1,85,000",
  },
];

export default function DiamondInventory() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Diamond Inventory
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Diamond Inventory
            </h1>

            <p className="mt-1 text-text-secondary">
              Manage diamonds, certificates, grading and stock valuation.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <Download size={16} />
              Export
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold">
              <Plus size={17} />
              Add Diamond
            </button>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">
              <Diamond
                size={27}
                className="text-accent-gold"
              />

              <TrendingUp
                size={18}
                className="text-green-400"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL DIAMONDS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              1,248
            </h2>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">
              <Gem
                size={27}
                className="text-accent-gold"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL CARAT WEIGHT
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              856.75 ct
            </h2>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">
              <ShieldCheck
                size={27}
                className="text-accent-gold"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              CERTIFIED DIAMONDS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              1,086
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">

            <div className="flex items-center justify-between">
              <Diamond
                size={27}
                className="text-accent-gold"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL STOCK VALUE
            </p>

            <h2 className="mt-2 text-2xl font-bold text-accent-gold">
              ₹ 18.45 Cr
            </h2>

          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">

              <Search
                size={18}
                className="text-text-secondary"
              />

              <input
                type="text"
                placeholder="Search diamond..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Shapes</option>
              <option>Round Brilliant</option>
              <option>Princess</option>
              <option>Oval</option>
              <option>Emerald</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Colors</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
              <option>G</option>
              <option>H</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Clarity</option>
              <option>FL</option>
              <option>VVS1</option>
              <option>VVS2</option>
              <option>VS1</option>
              <option>VS2</option>
              <option>SI1</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Stock</option>
              <option>Available</option>
              <option>Reserved</option>
              <option>Sold</option>

            </select>

          </div>

        </div>

        {/* DIAMOND TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 border-b border-border-theme pb-4">

            <h2 className="font-semibold text-accent-gold">
              DIAMOND STOCK
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              View and manage all diamond inventory
            </p>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1200px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

                <tr>
                  <th className="px-4 py-4">STONE ID</th>
                  <th className="px-4 py-4">SHAPE</th>
                  <th className="px-4 py-4">CARAT</th>
                  <th className="px-4 py-4">COLOR</th>
                  <th className="px-4 py-4">CLARITY</th>
                  <th className="px-4 py-4">CUT</th>
                  <th className="px-4 py-4">STOCK</th>
                  <th className="px-4 py-4">VALUE</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>

              </thead>

              <tbody>

                {diamonds.map((diamond) => (

                  <tr
                    key={diamond.id}
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4 text-accent-gold">
                      {diamond.stoneId}
                    </td>

                    <td className="px-4 py-4 font-medium text-text-primary">
                      {diamond.shape}
                    </td>

                    <td className="px-4 py-4">
                      {diamond.carat}
                    </td>

                    <td className="px-4 py-4 text-accent-gold">
                      {diamond.color}
                    </td>

                    <td className="px-4 py-4">
                      {diamond.clarity}
                    </td>

                    <td className="px-4 py-4">
                      {diamond.cut}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          diamond.stock === "Available"
                            ? "rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400"
                            : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-accent-gold"
                        }
                      >
                        {diamond.stock}
                      </span>

                    </td>

                    <td className="px-4 py-4 font-semibold text-accent-gold">
                      {diamond.value}
                    </td>

                    <td className="px-4 py-4">

                      <button className="text-text-secondary hover:text-accent-gold">
                        <Eye size={17} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
}