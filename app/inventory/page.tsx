"use client";

import {
  Package,
  AlertTriangle,
  Warehouse,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import InventorySidebar from "./InventorySidebar";

export default function InventoryDashboard() {
  return (
  <div className="min-h-screen bg-[#090a09] text-white">

    <InventorySidebar />

    <main className="ml-64 p-5">

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Dashboard / Inventory
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Inventory Dashboard
        </h1>

        <p className="mt-1 text-gray-400">
          Monitor jewellery stock, warehouse and inventory performance.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="flex items-center justify-between">
            <Package className="text-[#e4b52d]" size={28} />
            <span className="flex items-center text-sm text-green-400">
              <ArrowUpRight size={16} />
              12.5%
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-400">
            TOTAL STOCK VALUE
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            ₹ 8,45,25,000
          </h2>
        </div>

        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="flex items-center justify-between">
            <Warehouse className="text-[#e4b52d]" size={28} />
            <span className="flex items-center text-sm text-green-400">
              <ArrowUpRight size={16} />
              8.6%
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-400">
            TOTAL PRODUCTS
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            2,856
          </h2>
        </div>

        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="flex items-center justify-between">
            <TrendingUp className="text-[#e4b52d]" size={28} />
            <span className="flex items-center text-sm text-red-400">
              <ArrowDownRight size={16} />
              4.2%
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-400">
            STOCK MOVEMENT
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            1,248
          </h2>
        </div>

        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="flex items-center justify-between">
            <AlertTriangle className="text-[#e4b52d]" size={28} />
            <span className="text-sm text-red-400">
              Attention
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-400">
            LOW STOCK ITEMS
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            18
          </h2>
        </div>

      </div>

      {/* INVENTORY OVERVIEW */}
      <div className="mt-6 grid gap-5 xl:grid-cols-2">

        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#e4b52d]">
              INVENTORY OVERVIEW
            </h2>

            <button className="rounded-lg border border-[#4a3a18] px-3 py-1 text-xs text-gray-300">
              This Month
            </button>
          </div>

          <div className="mt-8 h-64 rounded-lg border border-dashed border-[#3a321e] p-5">
            <div className="flex h-full items-end justify-around gap-3">
              {[45, 70, 55, 85, 65, 95, 75, 90].map(
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
        </div>

        {/* STOCK ALERTS */}
        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#e4b52d]">
              CURRENT STOCK ALERTS
            </h2>

            <AlertTriangle
              size={20}
              className="text-yellow-400"
            />
          </div>

          <div className="mt-5 space-y-3">

            {[
              ["18K Diamond Rings", "3 units left"],
              ["24K Gold Chains", "5 units left"],
              ["22K Gold Bangles", "2 units left"],
              ["Gold Earrings", "1 unit left"],
            ].map(([name, stock]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-lg border border-[#302a1b] bg-[#151611] p-4"
              >
                <div>
                  <p className="text-sm font-medium">
                    {name}
                  </p>

                  <p className="mt-1 text-xs text-red-400">
                    {stock}
                  </p>
                </div>

                <button className="rounded-md border border-[#7b5c17] px-3 py-1 text-xs text-[#e4b52d]">
                  Reorder
                </button>
              </div>
            ))}

          </div>
        </div>

      </div>

    </main>            
    </div>
  );
}