"use client";

import {
  Building2,
  MapPin,
  Package,
  Search,
  Plus,
  Eye,
  Edit,
  Warehouse as WarehouseIcon,
} from "lucide-react";

import InventorySidebar from "../InventorySidebar";

const warehouses = [
  {
    id: 1,
    name: "Main Warehouse",
    code: "WH-MAIN-001",
    location: "Surat, Gujarat",
    manager: "Rajesh Patel",
    products: "1,856",
    value: "₹ 5,25,00,000",
    status: "Active",
  },
  {
    id: 2,
    name: "Surat Branch",
    code: "WH-SRT-002",
    location: "Surat, Gujarat",
    manager: "Amit Shah",
    products: "645",
    value: "₹ 1,85,25,000",
    status: "Active",
  },
  {
    id: 3,
    name: "Mumbai Branch",
    code: "WH-MUM-003",
    location: "Mumbai, Maharashtra",
    manager: "Vikram Mehta",
    products: "355",
    value: "₹ 95,00,000",
    status: "Active",
  },
];

export default function Warehouse() {
  return (
    <div className="min-h-screen bg-[#090a09] text-white">

      <InventorySidebar />

      <main className="ml-64 min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Inventory / Warehouse
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Warehouse
            </h1>

            <p className="mt-1 text-gray-400">
              Manage warehouses, branches and inventory locations.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-[#d9a928] px-4 py-2 text-sm font-semibold text-black hover:bg-[#f0c43c]">
            <Plus size={17} />
            Add Warehouse
          </button>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center justify-between">
              <WarehouseIcon
                size={27}
                className="text-[#e4b52d]"
              />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL WAREHOUSES
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              12
            </h2>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center justify-between">
              <Package
                size={27}
                className="text-[#e4b52d]"
              />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL PRODUCTS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              2,856
            </h2>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center justify-between">
              <Building2
                size={27}
                className="text-[#e4b52d]"
              />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              ACTIVE LOCATIONS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              10
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-[#17140c] p-5">

            <div className="flex items-center justify-between">
              <MapPin
                size={27}
                className="text-[#e4b52d]"
              />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL STOCK VALUE
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#e4b52d]">
              ₹ 8.45 Cr
            </h2>

          </div>

        </div>

        {/* SEARCH */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="flex items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search warehouse by name, code or location..."
              className="w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
            />

          </div>

        </div>

        {/* WAREHOUSE TABLE */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="mb-5 border-b border-[#302b1d] pb-4">

            <h2 className="font-semibold text-[#e4b52d]">
              WAREHOUSE LOCATIONS
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Manage all inventory storage locations
            </p>

          </div>

          <div className="overflow-x-auto rounded-lg border border-[#302b1d]">

            <table className="w-full min-w-[1100px] text-left text-sm">

              <thead className="bg-[#171711] text-xs text-gray-400">

                <tr>
                  <th className="px-4 py-4">WAREHOUSE</th>
                  <th className="px-4 py-4">CODE</th>
                  <th className="px-4 py-4">LOCATION</th>
                  <th className="px-4 py-4">MANAGER</th>
                  <th className="px-4 py-4">PRODUCTS</th>
                  <th className="px-4 py-4">STOCK VALUE</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>

              </thead>

              <tbody>

                {warehouses.map((warehouse) => (

                  <tr
                    key={warehouse.id}
                    className="border-t border-[#302b1d] text-gray-300"
                  >

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a2413] text-[#e4b52d]">
                          <WarehouseIcon size={18} />
                        </div>

                        <span className="font-medium text-white">
                          {warehouse.name}
                        </span>

                      </div>

                    </td>

                    <td className="px-4 py-4 text-[#e4b52d]">
                      {warehouse.code}
                    </td>

                    <td className="px-4 py-4">

                      <span className="flex items-center gap-2">
                        <MapPin
                          size={15}
                          className="text-[#d9a928]"
                        />
                        {warehouse.location}
                      </span>

                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {warehouse.manager}
                    </td>

                    <td className="px-4 py-4">
                      {warehouse.products}
                    </td>

                    <td className="px-4 py-4 text-[#e4b52d]">
                      {warehouse.value}
                    </td>

                    <td className="px-4 py-4">

                      <span className="rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">
                        {warehouse.status}
                      </span>

                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <button className="text-gray-400 hover:text-[#e4b52d]">
                          <Eye size={17} />
                        </button>

                        <button className="text-gray-400 hover:text-[#e4b52d]">
                          <Edit size={17} />
                        </button>

                      </div>

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