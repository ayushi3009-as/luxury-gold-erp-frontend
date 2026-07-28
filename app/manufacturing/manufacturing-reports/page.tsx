import Link from "next/link";
import {
  BarChart3,
  FileText,
  Users,
  ShieldCheck,
  Package,
  Gem,
} from "lucide-react";

const reports = [
  {
    title: "Production Report",
    description: "View Production Summary",
    href: "/manufacturing/manufacturing-reports/production",
    icon: BarChart3,
  },
  {
    title: "Gold Issue Report",
    description: "Gold Issue & Return",
    href: "/manufacturing/manufacturing-reports/gold-issue",
    icon: FileText,
  },
  {
    title: "Worker Report",
    description: "Worker Performance",
    href: "/manufacturing/manufacturing-reports/worker",
    icon: Users,
  },
  {
    title: "Quality Report",
    description: "QC Pass / Fail",
    href: "/manufacturing/manufacturing-reports/quality",
    icon: ShieldCheck,
  },
  {
    title: "Finished Goods",
    description: "Finished Goods Stock",
    href: "/manufacturing/manufacturing-reports/finished-goods",
    icon: Package,
  },
  {
    title: "Diamond Setting",
    description: "Diamond Setting Report",
    href: "/manufacturing/manufacturing-reports/diamond-setting",
    icon: Gem,
  },
];

export default function ManufacturingReportsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Manufacturing Reports
        </h1>

        <p className="text-gray-400 mt-2">
          View all Manufacturing Reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {reports.map((report) => {
          const Icon = report.icon;

          return (
            <Link
              key={report.title}
              href={report.href}
              className="bg-[#111111] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500 transition-all"
            >
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <Icon size={28} className="text-yellow-500" />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {report.title}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    {report.description}
                  </p>
                </div>

              </div>
            </Link>
          );
        })}

      </div>

    </div>
  );
}