"use client";

import {
  Archive,
  Download,
  Eye,
  Package,
  Search,
  ShoppingCart,
  TrendingDown,
} from "lucide-react";

import InventorySidebar from "../InventorySidebar";

const deadStockItems = [
  {
    id: 1,
    product: "Old Gold Necklace",
    sku: "GLD-NCK-2019",
    category: "Gold Jewellery",
    stock: 8,
    lastSold: "18 Months Ago",
    value: "₹ 12,50,000",
    status: "Dead Stock",
  },
  {
    id: 2,
    product: "Diamond Pendant",
    sku: "DIA-PND-2020",
    category: "Diamond Jewellery",
    stock: 5,
    lastSold: "14 Months Ago",
    value: "₹ 8,75,000",
    status: "Dead Stock",
  },
  {
    id: 3,
    product: "Traditional Gold Bangles",
    sku: "GLD-BNG-2021",
    category: "Gold Jewellery",
    stock: 12,
    lastSold: "11 Months Ago",
    value: "₹ 18,20,000",
    status: "Slow Moving",
  },
  {
    id: 4,
    product: "Emerald Stone Set",
    sku: "GEM-EMR-2021",
    category: "Gemstone",
    stock: 6,
    lastSold: "16 Months Ago",
    value: "₹ 5,40,000",
    status: "Dead Stock",
  },
  {
    id: 5,
    product: "Silver Antique Earrings",
    sku: "SLV-EAR-2022",
    category: "Silver Jewellery",
    stock: 15,
    lastSold: "10 Months Ago",
    value: "₹ 2,85,000",
    status: "Slow Moving",
  },
];

export default function DeadStock() {
  return (
    <div className="min-h-screen bg-[#090a09] text-white">

      <InventorySidebar />

      <main className="ml-64 min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Inventory / Dead Stock
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Dead Stock
            </h1>

            <p className="mt-1 text-gray-400">
              Identify slow-moving and non-moving inventory to improve stock turnover.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-[#40351a] px-4 py-2 text-sm text-gray-300 hover:border-[#d9a928] hover:text-[#e4b52d]">
            <Download size={16} />
            Export Report
          </button>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-red-900 bg-[#17100f] p-5">

            <div className="flex items-center justify-between">

              <Archive
                size={27}
                className="text-red-400"
              />

              <TrendingDown
                size={18}
                className="text-red-400"
              />

            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL DEAD STOCK
            </p>

            <h2 className="mt-2 text-2xl font-bold text-red-400">
              31 Items
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-[#17140c] p-5">

            <div className="flex items-center justify-between">

              <Package
                size={27}
                className="text-[#e4b52d]"
              />

            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL QUANTITY
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#e4b52d]">
              146 Units
            </h2>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center justify-between">

              <ShoppingCart
                size={27}
                className="text-[#e4b52d]"
              />

            </div>

            <p className="mt-5 text-xs text-gray-500">
              DEAD STOCK VALUE
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              ₹ 68.45 Lakh
            </h2>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center justify-between">

              <TrendingDown
                size={27}
                className="text-[#e4b52d]"
              />

            </div>

            <p className="mt-5 text-xs text-gray-500">
              STOCK TURNOVER LOSS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              18.6%
            </h2>

          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3">

              <Search
                size={18}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search product or SKU..."
                className="w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>All Categories</option>
              <option>Gold Jewellery</option>
              <option>Diamond Jewellery</option>
              <option>Gemstone</option>
              <option>Silver Jewellery</option>

            </select>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>Stock Age</option>
              <option>6+ Months</option>
              <option>12+ Months</option>
              <option>18+ Months</option>

            </select>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>All Status</option>
              <option>Dead Stock</option>
              <option>Slow Moving</option>

            </select>

          </div>

        </div>

        {/* TABLE */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="mb-5 flex items-center justify-between border-b border-[#302b1d] pb-4">

            <div>

              <h2 className="font-semibold text-[#e4b52d]">
                DEAD STOCK ITEMS
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Inventory with no or very low sales activity
              </p>

            </div>

            <span className="text-xs text-red-400">
              31 Items Need Attention
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-[#302b1d]">

            <table className="w-full min-w-[1150px] text-left text-sm">

              <thead className="bg-[#171711] text-xs text-gray-400">

                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">STOCK</th>
                  <th className="px-4 py-4">LAST SOLD</th>
                  <th className="px-4 py-4">STOCK VALUE</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>

              </thead>

              <tbody>

                {deadStockItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-[#302b1d] text-gray-300"
                  >

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a2413] text-[#e4b52d]">
                          <Archive size={18} />
                        </div>

                        <span className="font-medium text-white">
                          {item.product}
                        </span>

                      </div>

                    </td>

                    <td className="px-4 py-4 text-[#e4b52d]">
                      {item.sku}
                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {item.category}
                    </td>

                    <td className="px-4 py-4 font-semibold text-red-400">
                      {item.stock} Units
                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {item.lastSold}
                    </td>

                    <td className="px-4 py-4 font-semibold text-[#e4b52d]">
                      {item.value}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.status === "Dead Stock"
                            ? "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400"
                            : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-yellow-400"
                        }
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="px-4 py-4">

                      <button className="text-gray-400 hover:text-[#e4b52d]">
                        <Eye size={17} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* ACTION SUMMARY */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <h2 className="font-semibold text-[#e4b52d]">
              DISCOUNT / CLEARANCE
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Move old inventory through special offers and clearance sales.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-[#e4b52d]">
              Create Clearance Sale
            </button>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <h2 className="font-semibold text-[#e4b52d]">
              REWORK / REMODEL
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Convert old jewellery into new designs and improve stock movement.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-[#e4b52d]">
              Start Rework
            </button>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <h2 className="font-semibold text-[#e4b52d]">
              STOCK TRANSFER
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Transfer slow-moving stock to another branch or warehouse.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-[#e4b52d]">
              Transfer Stock
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}