import { TrendingUp } from "lucide-react";

const workers = [
  {
    name: "Raj Patel",
    progress: 95,
  },
  {
    name: "Amit Shah",
    progress: 82,
  },
  {
    name: "Karan Mehta",
    progress: 68,
  },
];

export default function WorkerPerformance() {
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          Worker Performance
        </h2>

        <TrendingUp className="text-yellow-400" />
      </div>

      <div className="space-y-6">
        {workers.map((worker) => (
          <div key={worker.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">
                {worker.name}
              </span>

              <span className="text-yellow-400 font-semibold">
                {worker.progress}%
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-zinc-800">
              <div
                className="h-3 rounded-full bg-yellow-500"
                style={{ width: `${worker.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}