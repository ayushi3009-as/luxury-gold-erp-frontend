"use client";


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
  <div className="min-h-screen bg-background-primary text-text-primary">

    

    <main className=" min-h-screen p-8">

        {/* HEADER */}
        <div>
          <p className="text-xs text-text-secondary">
            Notifications / Alerts
          </p>

          <div className="mt-2 flex items-center gap-3">

            <div className="rounded-xl bg-[#211c0d] p-3">
              <AlertTriangle
                size={25}
                className="text-accent-gold"
              />
            </div>

            <h1 className="text-3xl font-bold text-accent-gold">
              Alerts
            </h1>

          </div>

          <p className="mt-3 text-sm text-text-secondary">
            Monitor important alerts and actions that require your attention.
          </p>
        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-3 gap-5">

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <p className="text-xs text-text-secondary">
              Total Alerts
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              24
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              All active alerts
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <p className="text-xs text-text-secondary">
              High Priority
            </p>

            <h2 className="mt-3 text-3xl font-bold text-red-400">
              6
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              Requires immediate attention
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <p className="text-xs text-text-secondary">
              Resolved Today
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-400">
              18
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              Successfully completed
            </p>
          </div>

        </div>

        {/* ALERT LIST */}
        <div className="mt-6 rounded-xl border border-border-theme bg-[#11130f] p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-semibold text-accent-gold">
                Active Alerts
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Recent notifications requiring your attention
              </p>
            </div>

            <button className="rounded-lg border border-border-theme px-4 py-2 text-xs text-text-secondary hover:border-[#e4b52d] hover:text-accent-gold">
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
                        className="text-accent-gold"
                      />
                    </div>

                    <div>

                      <h3 className="text-sm font-semibold">
                        {alert.title}
                      </h3>

                      <p className="mt-1 text-xs text-text-secondary">
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
                          : "bg-accent-gold/10 text-accent-gold"
                      }`}
                    >
                      {alert.priority}
                    </span>

                    <CheckCircle2
                      size={18}
                      className="text-text-secondary"
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