"use client";
import NotificationsSidebar from "../NotificationsSidebar";

import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Clock3,
  Package,
  ShieldAlert,
} from "lucide-react";

const alerts = [
  {
    title: "Low Stock Alert",
    description: "Gold Chain Collection is below the minimum stock level.",
    time: "10 minutes ago",
    type: "Inventory",
    priority: "High",
    icon: Package,
  },
  {
    title: "Payment Reminder",
    description: "Customer payment of $12,450 is due today.",
    time: "35 minutes ago",
    type: "Finance",
    priority: "Medium",
    icon: Clock3,
  },
  {
    title: "System Security Alert",
    description: "New login detected from an unrecognized device.",
    time: "1 hour ago",
    type: "Security",
    priority: "High",
    icon: ShieldAlert,
  },
];

export default function AlertsPage() {
  return (
  <div className="min-h-screen bg-[#090a09] text-white">

    <NotificationsSidebar />

    <main className="ml-64 min-h-screen p-8">

        {/* HEADER */}
        <div>
          <p className="text-xs text-gray-500">
            Notifications / Alerts
          </p>

          <div className="mt-2 flex items-center gap-3">

            <div className="rounded-xl bg-[#211c0d] p-3">
              <AlertTriangle
                size={25}
                className="text-[#e4b52d]"
              />
            </div>

            <h1 className="text-3xl font-bold text-[#f0c43c]">
              Alerts
            </h1>

          </div>

          <p className="mt-3 text-sm text-gray-400">
            Monitor important alerts and actions that require your attention.
          </p>
        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-3 gap-5">

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">
            <p className="text-xs text-gray-500">
              Total Alerts
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              24
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              All active alerts
            </p>
          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">
            <p className="text-xs text-gray-500">
              High Priority
            </p>

            <h2 className="mt-3 text-3xl font-bold text-red-400">
              6
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              Requires immediate attention
            </p>
          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">
            <p className="text-xs text-gray-500">
              Resolved Today
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-400">
              18
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              Successfully completed
            </p>
          </div>

        </div>

        {/* ALERT LIST */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-semibold text-[#f0c43c]">
                Active Alerts
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Recent notifications requiring your attention
              </p>
            </div>

            <button className="rounded-lg border border-[#40351b] px-4 py-2 text-xs text-gray-300 hover:border-[#e4b52d] hover:text-[#e4b52d]">
              Mark All as Read
            </button>

          </div>

          <div className="mt-6 space-y-3">

            {alerts.map((alert) => {

              const Icon = alert.icon;

              return (
                <div
                  key={alert.title}
                  className="flex items-center justify-between rounded-xl border border-[#2f2a1b] bg-[#151711] p-5"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-lg bg-[#211c0d] p-3">
                      <Icon
                        size={20}
                        className="text-[#e4b52d]"
                      />
                    </div>

                    <div>

                      <h3 className="text-sm font-semibold">
                        {alert.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        {alert.description}
                      </p>

                      <p className="mt-2 text-[10px] text-gray-600">
                        {alert.type} • {alert.time}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] ${
                        alert.priority === "High"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {alert.priority}
                    </span>

                    <CheckCircle2
                      size={18}
                      className="text-gray-500"
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </main>

    </div>
  );
}