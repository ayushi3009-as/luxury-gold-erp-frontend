"use client";

import {
  Download,
  Eye,
  Gem,
  Plus,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";



const gemstones = [
  {
    id: 1,
    stoneId: "GEM-000245",
    name: "Ruby",
    origin: "Myanmar",
    carat: "5.25 ct",
    color: "Pigeon Blood Red",
    quality: "Premium",
    stock: "Available",
    value: "₹ 3,25,000",
  },
  {
    id: 2,
    stoneId: "GEM-000246",
    name: "Emerald",
    origin: "Colombia",
    carat: "4.80 ct",
    color: "Vivid Green",
    quality: "Premium",
    stock: "Available",
    value: "₹ 2,85,000",
  },
  {
    id: 3,
    stoneId: "GEM-000247",
    name: "Sapphire",
    origin: "Sri Lanka",
    carat: "6.50 ct",
    color: "Royal Blue",
    quality: "Excellent",
    stock: "Reserved",
    value: "₹ 4,10,000",
  },
  {
    id: 4,
    stoneId: "GEM-000248",
    name: "Amethyst",
    origin: "Brazil",
    carat: "12.25 ct",
    color: "Deep Purple",
    quality: "Good",
    stock: "Available",
    value: "₹ 85,000",
  },
];

export default function GemstoneInventory() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Gemstone Inventory
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Gemstone Inventory
            </h1>

            <p className="mt-1 text-text-secondary">
              Manage coloured gemstones, origin, quality and stock valuation.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <Download size={16} />
              Export
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold">
              <Plus size={17} />
              Add Gemstone
            </button>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">
              <Gem size={27} className="text-accent-gold" />

              <TrendingUp
                size={18}
                className="text-green-400"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL GEMSTONES
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              856
            </h2>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">
              <Sparkles
                size={27}
                className="text-accent-gold"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL CARAT WEIGHT
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              4,285.50 ct
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
              AVAILABLE STOCK
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              742
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">

            <div className="flex items-center justify-between">
              <Sparkles
                size={27}
                className="text-accent-gold"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL STOCK VALUE
            </p>

            <h2 className="mt-2 text-2xl font-bold text-accent-gold">
              ₹ 8.65 Cr
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
                placeholder="Search gemstone..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Gemstones</option>
              <option>Ruby</option>
              <option>Emerald</option>
              <option>Sapphire</option>
              <option>Amethyst</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Origins</option>
              <option>Myanmar</option>
              <option>Colombia</option>
              <option>Sri Lanka</option>
              <option>Brazil</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Quality</option>
              <option>Premium</option>
              <option>Excellent</option>
              <option>Good</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Stock</option>
              <option>Available</option>
              <option>Reserved</option>
              <option>Sold</option>

            </select>

          </div>

        </div>

        {/* GEMSTONE TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 border-b border-border-theme pb-4">

            <h2 className="font-semibold text-accent-gold">
              GEMSTONE STOCK
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              View and manage all coloured gemstone inventory
            </p>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1250px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

                <tr>
                  <th className="px-4 py-4">STONE ID</th>
                  <th className="px-4 py-4">GEMSTONE</th>
                  <th className="px-4 py-4">ORIGIN</th>
                  <th className="px-4 py-4">CARAT</th>
                  <th className="px-4 py-4">COLOR</th>
                  <th className="px-4 py-4">QUALITY</th>
                  <th className="px-4 py-4">STOCK</th>
                  <th className="px-4 py-4">VALUE</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>

              </thead>

              <tbody>

                {gemstones.map((gemstone) => (

                  <tr
                    key={gemstone.id}
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4 text-accent-gold">
                      {gemstone.stoneId}
                    </td>

                    <td className="px-4 py-4 font-medium text-text-primary">
                      {gemstone.name}
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
                      {gemstone.origin}
                    </td>

                    <td className="px-4 py-4">
                      {gemstone.carat}
                    </td>

                    <td className="px-4 py-4 text-accent-gold">
                      {gemstone.color}
                    </td>

                    <td className="px-4 py-4">
                      {gemstone.quality}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          gemstone.stock === "Available"
                            ? "rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400"
                            : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-accent-gold"
                        }
                      >
                        {gemstone.stock}
                      </span>

                    </td>

                    <td className="px-4 py-4 font-semibold text-accent-gold">
                      {gemstone.value}
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