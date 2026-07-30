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
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Dead Stock
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Dead Stock
            </h1>

            <p className="mt-1 text-text-secondary">
              Identify slow-moving and non-moving inventory to improve stock turnover.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
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

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL DEAD STOCK
            </p>

            <h2 className="mt-2 text-2xl font-bold text-red-400">
              31 Items
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">

            <div className="flex items-center justify-between">

              <Package
                size={27}
                className="text-accent-gold"
              />

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL QUANTITY
            </p>

            <h2 className="mt-2 text-2xl font-bold text-accent-gold">
              146 Units
            </h2>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <ShoppingCart
                size={27}
                className="text-accent-gold"
              />

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              DEAD STOCK VALUE
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              ₹ 68.45 Lakh
            </h2>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <TrendingDown
                size={27}
                className="text-accent-gold"
              />

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              STOCK TURNOVER LOSS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              18.6%
            </h2>

          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">

              <Search
                size={18}
                className="text-text-secondary"
              />

              <input
                type="text"
                placeholder="Search product or SKU..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Categories</option>
              <option>Gold Jewellery</option>
              <option>Diamond Jewellery</option>
              <option>Gemstone</option>
              <option>Silver Jewellery</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>Stock Age</option>
              <option>6+ Months</option>
              <option>12+ Months</option>
              <option>18+ Months</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Status</option>
              <option>Dead Stock</option>
              <option>Slow Moving</option>

            </select>

          </div>

        </div>

        {/* TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">

            <div>

              <h2 className="font-semibold text-accent-gold">
                DEAD STOCK ITEMS
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Inventory with no or very low sales activity
              </p>

            </div>

            <span className="text-xs text-red-400">
              31 Items Need Attention
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1150px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

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
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                          <Archive size={18} />
                        </div>

                        <span className="font-medium text-text-primary">
                          {item.product}
                        </span>

                      </div>

                    </td>

                    <td className="px-4 py-4 text-accent-gold">
                      {item.sku}
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
                      {item.category}
                    </td>

                    <td className="px-4 py-4 font-semibold text-red-400">
                      {item.stock} Units
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
                      {item.lastSold}
                    </td>

                    <td className="px-4 py-4 font-semibold text-accent-gold">
                      {item.value}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.status === "Dead Stock"
                            ? "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400"
                            : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-accent-gold"
                        }
                      >
                        {item.status}
                      </span>

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

        {/* ACTION SUMMARY */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <h2 className="font-semibold text-accent-gold">
              DISCOUNT / CLEARANCE
            </h2>

            <p className="mt-2 text-sm text-text-secondary">
              Move old inventory through special offers and clearance sales.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold">
              Create Clearance Sale
            </button>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <h2 className="font-semibold text-accent-gold">
              REWORK / REMODEL
            </h2>

            <p className="mt-2 text-sm text-text-secondary">
              Convert old jewellery into new designs and improve stock movement.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold">
              Start Rework
            </button>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <h2 className="font-semibold text-accent-gold">
              STOCK TRANSFER
            </h2>

            <p className="mt-2 text-sm text-text-secondary">
              Transfer slow-moving stock to another branch or warehouse.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold">
              Transfer Stock
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}