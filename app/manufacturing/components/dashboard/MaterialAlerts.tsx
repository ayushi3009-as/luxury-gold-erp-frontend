import { AlertTriangle } from "lucide-react";

const alerts = [
  {
    material: "24K Gold",
    stock: "15 gm",
    level: "Critical",
  },
  {
    material: "Diamond",
    stock: "45 pcs",
    level: "Low",
  },
  {
    material: "Silver",
    stock: "220 gm",
    level: "Normal",
  },
];

export default function MaterialAlerts() {
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          Material Alerts
        </h2>

        <AlertTriangle className="text-yellow-400" />
      </div>

      <div className="space-y-4">
        {alerts.map((item) => (
          <div
            key={item.material}
            className="flex items-center justify-between border-b border-zinc-800 pb-3"
          >
            <div>
              <p className="text-white font-medium">
                {item.material}
              </p>

              <p className="text-gray-400 text-sm">
                Stock : {item.stock}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.level === "Critical"
                  ? "bg-red-500/20 text-red-400"
                  : item.level === "Low"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}