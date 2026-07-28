import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color = "text-yellow-400",
}: StatCardProps) {
  return (
    <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl p-5 hover:border-yellow-500 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`w-14 h-14 rounded-xl bg-[#232323] flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}