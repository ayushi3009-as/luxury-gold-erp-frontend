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
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">
              Inventory / RFID Tracking
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              RFID Tracking
            </h1>

            <p className="mt-1 text-text-secondary">
              Track jewellery items in real-time using RFID technology.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <XCircle size={16} />
              Stop Scanning
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold">
              <Radio size={16} />
              Start Scanning
            </button>
          </div>
        </div>

        {/* RFID STATUS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <Radio className="text-accent-gold" size={26} />

              <span className="flex items-center gap-1 text-xs text-green-400">
                <Activity size={14} />
                Live
              </span>
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              RFID SYSTEM STATUS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              Active
            </h2>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <Tag className="text-accent-gold" size={26} />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL RFID TAGS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              2,856
            </h2>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <Signal className="text-accent-gold" size={26} />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              ACTIVE TAGS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              2,734
            </h2>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <div className="flex items-center justify-between">
              <MapPin className="text-accent-gold" size={26} />
            </div>

            <p className="mt-5 text-xs text-text-secondary">
              ITEMS TRACKED TODAY
            </p>

            <h2 className="mt-2 text-2xl font-bold text-accent-gold">
              1,248
            </h2>
          </div>

        </div>

        {/* FILTER SECTION */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">
              <Search size={18} className="text-text-secondary" />

              <input
                type="text"
                placeholder="Search RFID tag or product..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />
            </div>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
              <option>All Locations</option>
              <option>Main Warehouse</option>
              <option>Surat Branch</option>
              <option>Mumbai Branch</option>
            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
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
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold"
              />
            </div>

          </div>

        </div>

        {/* RFID TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">

            <div>
              <h2 className="font-semibold text-accent-gold">
                RFID TRACKING RECORDS
              </h2>

              <p className="text-xs text-text-secondary">
                Monitor tagged jewellery items and their locations
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Live Tracking
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1100px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">
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
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4">
                      <span className="flex items-center gap-2 text-accent-gold">
                        <Radio size={16} />
                        {item.tag}
                      </span>
                    </td>

                    <td className="px-4 py-4 font-medium text-text-primary">
                      {item.product}
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
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
                              ? "text-accent-gold"
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

                    <td className="px-4 py-4 text-text-secondary">
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

          <button className="rounded-lg border border-border-theme px-5 py-3 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            Export Report
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-semibold text-black hover:bg-accent-gold">
            <Save size={17} />
            Save Tracking Report
          </button>

        </div>

      </main>
    </div>
  );
}