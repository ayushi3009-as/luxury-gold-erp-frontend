import Link from "next/link";
import {
  Shield,
  LogIn,
  Activity,
  Trash2,
  Database,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    title: "Login Logs",
    desc: "View user login history",
    href: "/audit-logs/login-logs",
    icon: LogIn,
  },
  {
    title: "Activity Logs",
    desc: "Track user activities",
    href: "/audit-logs/activity-logs",
    icon: Activity,
  },
  {
    title: "Security Logs",
    desc: "Security & authentication events",
    href: "/audit-logs/security-logs",
    icon: Shield,
  },
  {
    title: "Deleted Records",
    desc: "Recently deleted data",
    href: "/audit-logs/deleted-records",
    icon: Trash2,
  },
  {
    title: "Backup Logs",
    desc: "Database backup history",
    href: "/audit-logs/backup-logs",
    icon: Database,
  },
];

export default function AuditLogsDashboard() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Audit Logs Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor all audit logs, security events and user activities.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">Today's Logins</h3>
          <h1 className="text-3xl font-bold text-yellow-400 mt-3">
            248
          </h1>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">Activities</h3>
          <h1 className="text-3xl font-bold text-green-400 mt-3">
            1,240
          </h1>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">Security Alerts</h3>
          <h1 className="text-3xl font-bold text-red-400 mt-3">
            12
          </h1>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">Backups</h3>
          <h1 className="text-3xl font-bold text-blue-400 mt-3">
            36
          </h1>
        </div>

      </div>

      {/* Modules */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {modules.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="bg-[#111111] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500 transition"
            >

              <div className="flex justify-between">

                <div>

                  <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <Icon size={28} className="text-yellow-500" />
                  </div>

                  <h2 className="text-xl font-semibold text-white mt-5">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>

                </div>

                <ArrowRight className="text-yellow-500" />

              </div>

            </Link>

          );

        })}

      </div>

    </div>
  );
}