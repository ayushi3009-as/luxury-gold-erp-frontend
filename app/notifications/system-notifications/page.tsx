"use client";
import NotificationsSidebar from "../NotificationsSidebar";

import {
  Bell,
  ShieldCheck,
  Settings,
  Database,
  UserPlus,
  RefreshCw,
  CheckCircle2,
  Info,
} from "lucide-react";

const notifications = [
  {
    title: "System Update Completed",
    description: "The ERP system was successfully updated to the latest version.",
    time: "10 minutes ago",
    type: "System Update",
    icon: RefreshCw,
    status: "Success",
  },
  {
    title: "New User Added",
    description: "A new employee account was successfully created in the system.",
    time: "1 hour ago",
    type: "User Management",
    icon: UserPlus,
    status: "Information",
  },
  {
    title: "Database Backup Completed",
    description: "Automatic database backup was completed successfully.",
    time: "3 hours ago",
    type: "Database",
    icon: Database,
    status: "Success",
  },
  {
    title: "Security Settings Updated",
    description: "System security and authentication settings were updated.",
    time: "Yesterday",
    type: "Security",
    icon: ShieldCheck,
    status: "Information",
  },
];

export default function SystemNotificationsPage() {
  return (
  <div className="min-h-screen bg-[#090a09] text-white">

    <NotificationsSidebar />

    <main className="ml-64 min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs text-gray-500">
              Notifications / System Notifications
            </p>

            <div className="mt-2 flex items-center gap-3">

              <div className="rounded-xl bg-[#211c0d] p-3">
                <Bell
                  size={25}
                  className="text-[#e4b52d]"
                />
              </div>

              <h1 className="text-3xl font-bold text-[#f0c43c]">
                System Notifications
              </h1>

            </div>

            <p className="mt-3 text-sm text-gray-400">
              View important system updates, security events and system activity.
            </p>

          </div>

          <button className="rounded-lg border border-[#40351b] px-4 py-2 text-xs text-gray-300 transition hover:border-[#e4b52d] hover:text-[#e4b52d]">
            Mark All as Read
          </button>

        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <p className="text-xs text-gray-500">
              Total Notifications
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              36
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              System activity records
            </p>

          </div>

          <div className="rounded-xl border border-green-900/40 bg-[#11130f] p-5">

            <p className="text-xs text-gray-500">
              Successful
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-400">
              28
            </h2>

            <p className="mt-2 text-xs text-green-400">
              Successfully completed
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <p className="text-xs text-gray-500">
              Unread
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#e4b52d]">
              8
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              New system updates
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <p className="text-xs text-gray-500">
              System Status
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-400">
              Healthy
            </h2>

            <p className="mt-2 text-xs text-green-400">
              All systems operational
            </p>

          </div>

        </div>

        {/* SYSTEM NOTIFICATION LIST */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-[#211c0d] p-3">
              <Settings
                size={20}
                className="text-[#e4b52d]"
              />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#f0c43c]">
                System Activity
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Recent system events and automated activities
              </p>

            </div>

          </div>

          <div className="mt-6 space-y-3">

            {notifications.map((notification) => {

              const Icon = notification.icon;

              return (
                <div
                  key={notification.title}
                  className="flex items-center justify-between rounded-xl border border-[#2f2a1b] bg-[#151711] p-5 transition hover:border-[#6c5420]"
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
                        {notification.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        {notification.description}
                      </p>

                      <p className="mt-2 text-[10px] text-gray-600">
                        {notification.type} • {notification.time}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] ${
                        notification.status === "Success"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {notification.status}
                    </span>

                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />

                  </div>

                </div>
              );

            })}

          </div>

        </div>

        {/* SYSTEM STATUS */}
        <div className="mt-6 rounded-xl border border-green-900/40 bg-[#10150f] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-green-500/10 p-3">
              <CheckCircle2
                size={22}
                className="text-green-400"
              />
            </div>

            <div>

              <h2 className="font-semibold text-green-400">
                All Systems Operational
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                All major ERP services are currently running normally.
                System activity, database and security services are operational.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                <Info size={16} />
                Last system health check: Just now
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}