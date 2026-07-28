"use client";

import {
  Activity,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Radio,
  Search,
  Save,
  Signal,
  Tag,
  XCircle,
} from "lucide-react";

import InventorySidebar from "../InventorySidebar";

const rfidItems = [
  {
    id: 1,
    tag: "RFID-001245",
    product: "Gold Chain 22K",
    sku: "GLD-CHN-001",
    location: "Main Warehouse",
    signal: "Strong",
    status: "Active",
    lastScan: "2 min ago",
  },
  {
    id: 2,
    tag: "RFID-001246",
    product: "Diamond Ring 18K",
    sku: "DIA-RNG-002",
    location: "Surat Branch",
    signal: "Medium",
    status: "Active",
    lastScan: "8 min ago",
  },
  {
    id: 3,
    tag: "RFID-001247",
    product: "Gold Earrings 22K",
    sku: "GLD-EAR-003",
    location: "Main Warehouse",
    signal: "Weak",
    status: "Inactive",
    lastScan: "1 hour ago",
  },
];

export default function RFIDTracking() {
  return (
    <div className="min-h-screen bg-[#090a09] text-white">
      <InventorySidebar />

      <main className="ml-64 min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Inventory / RFID Tracking
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              RFID Tracking
            </h1>

            <p className="mt-1 text-gray-400">
              Track jewellery items in real-time using RFID technology.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-[#40351a] px-4 py-2 text-sm text-gray-300 hover:border-[#d9a928] hover:text-[#e4b52d]">
              <XCircle size={16} />
              Stop Scanning
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-[#d9a928] px-4 py-2 text-sm font-semibold text-black hover:bg-[#f0c43c]">
              <Radio size={16} />
              Start Scanning
            </button>
          </div>
        </div>

        {/* RFID STATUS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
            <div className="flex items-center justify-between">
              <Radio className="text-[#e4b52d]" size={26} />

              <span className="flex items-center gap-1 text-xs text-green-400">
                <Activity size={14} />
                Live
              </span>
            </div>

            <p className="mt-5 text-xs text-gray-500">
              RFID SYSTEM STATUS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              Active
            </h2>
          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
            <div className="flex items-center justify-between">
              <Tag className="text-[#e4b52d]" size={26} />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL RFID TAGS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              2,856
            </h2>
          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
            <div className="flex items-center justify-between">
              <Signal className="text-[#e4b52d]" size={26} />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              ACTIVE TAGS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              2,734
            </h2>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-[#17140c] p-5">
            <div className="flex items-center justify-between">
              <MapPin className="text-[#e4b52d]" size={26} />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              ITEMS TRACKED TODAY
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#e4b52d]">
              1,248
            </h2>
          </div>

        </div>

        {/* FILTER SECTION */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3">
              <Search size={18} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search RFID tag or product..."
                className="w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
              />
            </div>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none focus:border-[#d9a928]">
              <option>All Locations</option>
              <option>Main Warehouse</option>
              <option>Surat Branch</option>
              <option>Mumbai Branch</option>
            </select>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none focus:border-[#d9a928]">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <div className="relative">
              <CalendarDays
                size={17}
                className="absolute left-3 top-3.5 text-[#d9a928]"
              />

              <input
                type="date"
                className="w-full rounded-lg border border-[#40351a] bg-[#171711] px-10 py-3 text-sm text-gray-300 outline-none focus:border-[#d9a928]"
              />
            </div>

          </div>

        </div>

        {/* RFID TABLE */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="mb-5 flex items-center justify-between border-b border-[#302b1d] pb-4">

            <div>
              <h2 className="font-semibold text-[#e4b52d]">
                RFID TRACKING RECORDS
              </h2>

              <p className="text-xs text-gray-500">
                Monitor tagged jewellery items and their locations
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Live Tracking
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-[#302b1d]">

            <table className="w-full min-w-[1100px] text-left text-sm">

              <thead className="bg-[#171711] text-xs text-gray-400">
                <tr>
                  <th className="px-4 py-4">RFID TAG</th>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">LOCATION</th>
                  <th className="px-4 py-4">SIGNAL</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">LAST SCAN</th>
                </tr>
              </thead>

              <tbody>

                {rfidItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-[#302b1d] text-gray-300"
                  >

                    <td className="px-4 py-4">
                      <span className="flex items-center gap-2 text-[#e4b52d]">
                        <Radio size={16} />
                        {item.tag}
                      </span>
                    </td>

                    <td className="px-4 py-4 font-medium text-white">
                      {item.product}
                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {item.sku}
                    </td>

                    <td className="px-4 py-4">
                      <span className="flex items-center gap-2">
                        <MapPin size={15} className="text-[#d9a928]" />
                        {item.location}
                      </span>
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.signal === "Strong"
                            ? "text-green-400"
                            : item.signal === "Medium"
                              ? "text-yellow-400"
                              : "text-red-400"
                        }
                      >
                        {item.signal}
                      </span>

                    </td>

                    <td className="px-4 py-4">

                      {item.status === "Active" ? (

                        <span className="flex w-fit items-center gap-2 rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">
                          <CheckCircle2 size={14} />
                          Active
                        </span>

                      ) : (

                        <span className="rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400">
                          Inactive
                        </span>

                      )}

                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {item.lastScan}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-5 flex justify-end gap-3">

          <button className="rounded-lg border border-[#40351a] px-5 py-3 text-sm text-gray-300 hover:border-[#d9a928] hover:text-[#e4b52d]">
            Export Report
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#d9a928] px-6 py-3 text-sm font-semibold text-black hover:bg-[#f0c43c]">
            <Save size={17} />
            Save Tracking Report
          </button>

        </div>

      </main>
    </div>
  );
}