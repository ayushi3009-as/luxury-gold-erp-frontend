"use client";

import Link from "next/link";
import {
  Building2,
  GitBranch,
  Users,
  ShieldCheck,
  Printer,
  Palette,
  DatabaseBackup,
  Cable,
  MessageSquare,
  MessagesSquare,
  Mail,
  Lock,
  Search,
  Save,
} from "lucide-react";

const settings = [
  {
    title: "Company Profile",
    desc: "Manage company information",
    href: "/settings/company-profile",
    icon: Building2,
  },
  {
    title: "Branch Management",
    desc: "Manage all branches",
    href: "/settings/branch-management",
    icon: GitBranch,
  },
  {
    title: "User Roles",
    desc: "Create and manage user roles",
    href: "/settings/user-roles",
    icon: Users,
  },
  {
    title: "Permissions",
    desc: "Role permissions",
    href: "/settings/permissions",
    icon: ShieldCheck,
  },
  {
    title: "Printer Settings",
    desc: "Printer configuration",
    href: "/settings/printer-settings",
    icon: Printer,
  },
  {
    title: "Theme Settings",
    desc: "Change application theme",
    href: "/settings/theme-settings",
    icon: Palette,
  },
  {
    title: "Backup",
    desc: "Backup & Restore",
    href: "/settings/backup",
    icon: DatabaseBackup,
  },
  {
    title: "API Integration",
    desc: "Manage APIs",
    href: "/settings/api-integration",
    icon: Cable,
  },
  {
    title: "SMS Settings",
    desc: "SMS Gateway",
    href: "/settings/sms-settings",
    icon: MessageSquare,
  },
  {
    title: "WhatsApp Settings",
    desc: "WhatsApp Integration",
    href: "/settings/whatsapp-settings",
    icon: MessagesSquare,
  },
  {
    title: "Email Settings",
    desc: "SMTP Configuration",
    href: "/settings/email-settings",
    icon: Mail,
  },
  {
    title: "Security Settings",
    desc: "Security Controls",
    href: "/settings/security-settings",
    icon: Lock,
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-8">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Settings Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your ERP settings and configurations.
          </p>
        </div>

        <div className="flex gap-4">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-72 bg-[#1b2535] border border-gray-700 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-yellow-500"
            />

          </div>

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 rounded-xl">

            <Save size={18} />

            Save

          </button>

        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

        {settings.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-gray-700 bg-[#161f2e] p-6 hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-5">

                <Icon
                  size={28}
                  className="text-yellow-400"
                />

              </div>

              <h2 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition">

                {item.title}

              </h2>

              <p className="text-gray-400 text-sm">

                {item.desc}

              </p>

              <div className="mt-5 text-yellow-400 text-sm font-medium">

                Open Settings →

              </div>

            </Link>

          );

        })}

      </div>

    </div>
  );
}