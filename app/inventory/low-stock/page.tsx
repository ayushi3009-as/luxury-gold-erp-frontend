"use client";

import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Download,
  Package,
  Plus,
  Search,
  ShoppingCart,
  TrendingDown,
} from "lucide-react";



const lowStockItems = [
  {
    id: 1,
    product: "18K Diamond Rings",
    sku: "DIA-RNG-018",
    category: "Diamond Jewellery",
    currentStock: 3,
    minimumStock: 10,
    reorderLevel: 5,
    supplier: "Diamond Traders",
    priority: "Critical",
  },
  {
    id: 2,
    product: "24K Gold Chains",
    sku: "GLD-CHN-024",
    category: "Gold Jewellery",
    currentStock: 5,
    minimumStock: 15,
    reorderLevel: 8,
    supplier: "Gold Suppliers",
    priority: "High",
  },
  {
    id: 3,
    product: "22K Gold Bangles",
    sku: "GLD-BNG-022",
    category: "Gold Jewellery",
    currentStock: 2,
    minimumStock: 8,
    reorderLevel: 4,
    supplier: "Royal Gold",
    priority: "Critical",
  },
  {
    id: 4,
    product: "Gold Earrings",
    sku: "GLD-EAR-022",
    category: "Gold Jewellery",
    currentStock: 1,
    minimumStock: 6,
    reorderLevel: 3,
    supplier: "Jewellery Hub",
    priority: "Critical",
  },
  {
    id: 5,
    product: "Ruby Gemstone",
    sku: "GEM-RUB-001",
    category: "Gemstone",
    currentStock: 4,
    minimumStock: 12,
    reorderLevel: 6,
    supplier: "Gem Traders",
    priority: "High",
  },
];

export default function LowStock() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Low Stock
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Low Stock
            </h1>

            <p className="mt-1 text-text-secondary">
              Monitor low inventory items and create purchase orders before stock runs out.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <Download size={16} />
              Export Report
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold">
              <Plus size={17} />
              Create Purchase Order
            </button>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-red-900 bg-[#17100f] p-5">

            <div className="flex items-center justify-between">
              <AlertTriangle
                size={27}
                className="text-red-400"
              />

              <span className="text-xs text-red-400">
                Attention
              </span>
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL LOW STOCK ITEMS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-red-400">
              18
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">

            <div className="flex items-center justify-between">
              <TrendingDown
                size={27}
                className="text-accent-gold"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              CRITICAL ITEMS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-accent-gold">
              7
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
              PENDING REORDERS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              12
            </h2>

          </div>

          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">

            <div className="flex items-center justify-between">
              <CheckCircle2
                size={27}
                className="text-green-400"
              />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              REORDERED ITEMS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              24
            </h2>

          </div>

        </div>

        {/* SEARCH AND FILTERS */}
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

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Priority</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Suppliers</option>
              <option>Diamond Traders</option>
              <option>Gold Suppliers</option>
              <option>Royal Gold</option>

            </select>

          </div>

        </div>

        {/* LOW STOCK TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">

            <div>
              <h2 className="font-semibold text-accent-gold">
                LOW STOCK ITEMS
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Items that require immediate inventory replenishment
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs text-red-400">
              <Bell size={15} />
              18 Items Need Attention
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1250px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">CURRENT STOCK</th>
                  <th className="px-4 py-4">MINIMUM STOCK</th>
                  <th className="px-4 py-4">REORDER LEVEL</th>
                  <th className="px-4 py-4">SUPPLIER</th>
                  <th className="px-4 py-4">PRIORITY</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>

              </thead>

              <tbody>

                {lowStockItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                          <Package size={18} />
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

                    <td className="px-4 py-4">

                      <span className="font-semibold text-red-400">
                        {item.currentStock} Units
                      </span>

                    </td>

                    <td className="px-4 py-4">
                      {item.minimumStock} Units
                    </td>

                    <td className="px-4 py-4 text-accent-gold">
                      {item.reorderLevel} Units
                    </td>

                    <td className="px-4 py-4">
                      {item.supplier}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.priority === "Critical"
                            ? "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400"
                            : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-accent-gold"
                        }
                      >
                        {item.priority}
                      </span>

                    </td>

                    <td className="px-4 py-4">

                      <button className="rounded-md border border-[#7b5c17] px-3 py-1 text-xs text-accent-gold hover:bg-background-tertiary">
                        Reorder
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* REORDER SUMMARY */}
        <div className="mt-5 grid gap-5 xl:grid-cols-2">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center gap-3">

              <ShoppingCart
                size={22}
                className="text-accent-gold"
              />

              <h2 className="font-semibold text-accent-gold">
                REORDER SUMMARY
              </h2>

            </div>

            <div className="mt-5 space-y-4">

              {[
                ["Gold Jewellery", "8 Items", "₹ 42,50,000"],
                ["Diamond Jewellery", "6 Items", "₹ 68,25,000"],
                ["Gemstone", "4 Items", "₹ 12,85,000"],
              ].map(([category, items, value]) => (

                <div
                  key={category}
                  className="flex items-center justify-between rounded-lg border border-border-theme bg-background-tertiary p-4"
                >

                  <div>

                    <p className="font-medium">
                      {category}
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      {items}
                    </p>

                  </div>

                  <p className="font-semibold text-accent-gold">
                    {value}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center gap-3">

              <Package
                size={22}
                className="text-accent-gold"
              />

              <h2 className="font-semibold text-accent-gold">
                STOCK LEVEL STATUS
              </h2>

            </div>

            <div className="mt-6 space-y-5">

              {[
                ["Critical Stock", "7 Items", "35%"],
                ["High Priority", "6 Items", "30%"],
                ["Medium Priority", "5 Items", "25%"],
              ].map(([name, items, percentage]) => (

                <div key={name}>

                  <div className="mb-2 flex justify-between text-sm">

                    <span className="text-text-secondary">
                      {name}
                    </span>

                    <span className="text-text-secondary">
                      {items}
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