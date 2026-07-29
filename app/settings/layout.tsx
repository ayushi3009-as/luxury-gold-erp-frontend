"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

const menus = [
  {
    name: "Company Profile",
    href: "/settings/company-profile",
    icon: Building2,
  },
  {
    name: "Branch Management",
    href: "/settings/branch-management",
    icon: GitBranch,
  },
  {
    name: "User Roles",
    href: "/settings/user-roles",
    icon: Users,
  },
  {
    name: "Permissions",
    href: "/settings/permissions",
    icon: ShieldCheck,
  },
  {
    name: "Printer Settings",
    href: "/settings/printer-settings",
    icon: Printer,
  },
  {
    name: "Theme Settings",
    href: "/settings/theme-settings",
    icon: Palette,
  },
  {
    name: "Backup",
    href: "/settings/backup",
    icon: DatabaseBackup,
  },
  {
    name: "API Integration",
    href: "/settings/api-integration",
    icon: Cable,
  },
  {
    name: "SMS Settings",
    href: "/settings/sms-settings",
    icon: MessageSquare,
  },
  {
    name: "WhatsApp Settings",
    href: "/settings/whatsapp-settings",
    icon: MessagesSquare,
  },
  {
    name: "Email Settings",
    href: "/settings/email-settings",
    icon: Mail,
  },
  {
    name: "Security Settings",
    href: "/settings/security-settings",
    icon: Lock,
  },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0b1220]">

      <aside className="w-72 border-r border-slate-700 bg-[#111827] p-6">

        <h2 className="text-2xl font-bold text-yellow-400 mb-8">
          Settings
        </h2>

        <div className="space-y-2">

          {menus.map((menu) => {
            const Icon = menu.icon;
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.name}
                href={menu.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-slate-800 hover:text-yellow-400"
                }`}
              >
                <Icon size={20} />
                {menu.name}
              </Link>
            );
          })}

        </div>

      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>

    </div>
  );
}