"use client";
import NotificationsSidebar from "../NotificationsSidebar";

import {
  Package,
  AlertTriangle,
  TrendingDown,
  Warehouse,
  ArrowDownRight,
} from "lucide-react";

const lowStockProducts = [
  {
    name: "Gold Chain Collection",
    sku: "GLD-CH-1024",
    category: "Gold Jewellery",
    currentStock: 5,
    minimumStock: 20,
    status: "Critical",
  },
  {
    name: "Diamond Engagement Ring",
    sku: "DIA-RG-2088",
    category: "Diamond Jewellery",
    currentStock: 8,
    minimumStock: 15,
    status: "Low",
  },
  {
    name: "Classic Gold Bangles",
    sku: "GLD-BG-3045",
    category: "Gold Jewellery",
    currentStock: 12,
    minimumStock: 25,
    status: "Low",
  },
  {
    name: "Premium Silver Bracelet",
    sku: "SLV-BR-4056",
    category: "Silver Jewellery",
    currentStock: 4,
    minimumStock: 12,
    status: "Critical",
  },
];

export default function LowStockPage() {
  return (
  <div className="min-h-screen bg-[#090a09] text-white">

    <NotificationsSidebar />

    <main className="ml-64 min-h-screen p-8">
        {/* HEADER */}
        <div>

          <p className="text-xs text-gray-500">
            Notifications / Low Stock
          </p>

          <div className="mt-2 flex items-center gap-3">

            <div className="rounded-xl bg-[#211c0d] p-3">
              <Package
                size={25}
                className="text-[#e4b52d]"
              />
            </div>

            <h1 className="text-3xl font-bold text-[#f0c43c]">
              Low Stock
            </h1>

          </div>

          <p className="mt-3 text-sm text-gray-400">
            Monitor products that are running below their minimum stock level.
          </p>

        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-500">
                Low Stock Items
              </p>

              <Package
                size={19}
                className="text-[#e4b52d]"
              />

            </div>

            <h2 className="mt-3 text-3xl font-bold">
              24
            </h2>

            <p className="mt-2 text-xs text-yellow-400">
              Requires attention
            </p>

          </div>

          <div className="rounded-xl border border-red-900/40 bg-[#11130f] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-500">
                Critical Stock
              </p>

              <AlertTriangle
                size={19}
                className="text-red-400"
              />

            </div>

            <h2 className="mt-3 text-3xl font-bold text-red-400">
              8
            </h2>

            <p className="mt-2 text-xs text-red-400">
              Immediate restocking required
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-500">
                Stock Value at Risk
              </p>

              <TrendingDown
                size={19}
                className="text-[#e4b52d]"
              />

            </div>

            <h2 className="mt-3 text-3xl font-bold">
              $84.6K
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              Estimated inventory value
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-500">
                Warehouses Affected
              </p>

              <Warehouse
                size={19}
                className="text-[#e4b52d]"
              />

            </div>

            <h2 className="mt-3 text-3xl font-bold">
              6
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              Across all locations
            </p>

          </div>

        </div>

        {/* LOW STOCK TABLE */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-semibold text-[#f0c43c]">
                Products Requiring Restock
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Products currently below the defined minimum stock level
              </p>

            </div>

            <button className="rounded-lg border border-[#40351b] px-4 py-2 text-xs text-gray-300 transition hover:border-[#e4b52d] hover:text-[#e4b52d]">
              Create Purchase Order
            </button>

          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-[#2f2a1b]">

            {/* TABLE HEADER */}
            <div className="grid grid-cols-6 border-b border-[#2f2a1b] bg-[#151711] px-5 py-4 text-xs text-gray-500">

              <span>Product</span>
              <span>SKU</span>
              <span>Category</span>
              <span>Current Stock</span>
              <span>Minimum Stock</span>
              <span>Status</span>

            </div>

            {/* TABLE ROWS */}
            {lowStockProducts.map((product) => (

              <div
                key={product.sku}
                className="grid grid-cols-6 items-center border-b border-[#242117] px-5 py-5 last:border-b-0"
              >

                <span className="text-sm font-medium">
                  {product.name}
                </span>

                <span className="text-xs text-gray-500">
                  {product.sku}
                </span>

                <span className="text-xs text-gray-400">
                  {product.category}
                </span>

                <span
                  className={`text-sm font-semibold ${
                    product.status === "Critical"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }`}
                >
                  {product.currentStock} units
                </span>

                <span className="text-sm text-gray-400">
                  {product.minimumStock} units
                </span>

                <span
                  className={`flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[10px] ${
                    product.status === "Critical"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  <ArrowDownRight size={12} />
                  {product.status}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* AUTOMATIC ALERT INFO */}
        <div className="mt-6 rounded-xl border border-[#6c5420] bg-[#18150c] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-[#b98c20] p-3">
              <AlertTriangle
                size={22}
                className="text-black"
              />
            </div>

            <div>

              <h2 className="font-semibold text-[#f0c43c]">
                Automatic Low Stock Monitoring
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                The system automatically monitors inventory levels and creates
                alerts whenever a product falls below its minimum stock level.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <Package size={16} />
                Automatic stock monitoring is enabled.
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}