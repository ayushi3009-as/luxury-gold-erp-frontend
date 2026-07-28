import { ArrowRight } from "lucide-react";

const jobs = [
  {
    id: "JC-1001",
    worker: "Raj Patel",
    status: "Running",
  },
  {
    id: "JC-1002",
    worker: "Amit Shah",
    status: "Completed",
  },
  {
    id: "JC-1003",
    worker: "Karan Mehta",
    status: "Pending",
  },
  {
    id: "JC-1004",
    worker: "Viral Patel",
    status: "Running",
  },
];

export default function RecentJobs() {
  return (
    <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Jobs
        </h2>

        <button className="text-yellow-400 hover:text-yellow-300">
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-center border-b border-zinc-800 pb-3"
          >
            <div>
              <h3 className="text-white font-medium">
                {job.id}
              </h3>

              <p className="text-gray-400 text-sm">
                {job.worker}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs ${
                job.status === "Completed"
                  ? "bg-green-500/20 text-green-400"
                  : job.status === "Running"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}