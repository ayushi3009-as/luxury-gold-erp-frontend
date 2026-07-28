import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-5 hover:border-yellow-500/40 transition-all">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon className="text-white" size={26} />
        </div>
      </div>
    </div>
  );
}