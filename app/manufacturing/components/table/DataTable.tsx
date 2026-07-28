import { Eye, Pencil, Trash2 } from "lucide-react";

const jobs = [
  {
    id: "JC-1001",
    worker: "Raj Patel",
    gold: "120 gm",
    status: "Completed",
  },
  {
    id: "JC-1002",
    worker: "Amit Shah",
    gold: "85 gm",
    status: "Running",
  },
  {
    id: "JC-1003",
    worker: "Karan Mehta",
    gold: "60 gm",
    status: "Pending",
  },
];

export default function DataTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111]">
      <table className="w-full">
        <thead className="bg-[#181818]">
          <tr>
            <th className="px-6 py-4 text-left text-gray-300">Job Card</th>
            <th className="px-6 py-4 text-left text-gray-300">Worker</th>
            <th className="px-6 py-4 text-left text-gray-300">Gold Weight</th>
            <th className="px-6 py-4 text-left text-gray-300">Status</th>
            <th className="px-6 py-4 text-center text-gray-300">Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr
              key={job.id}
              className="border-t border-zinc-800 hover:bg-[#1a1a1a]"
            >
              <td className="px-6 py-5 text-white font-medium">
                {job.id}
              </td>

              <td className="px-6 py-5 text-gray-300">
                {job.worker}
              </td>

              <td className="px-6 py-5 text-yellow-400">
                {job.gold}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.status === "Completed"
                      ? "bg-green-600/20 text-green-400"
                      : job.status === "Running"
                      ? "bg-blue-600/20 text-blue-400"
                      : "bg-yellow-600/20 text-yellow-400"
                  }`}
                >
                  {job.status}
                </span>
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-center gap-3">
                  <button className="text-blue-400 hover:text-blue-300">
                    <Eye size={18} />
                  </button>

                  <button className="text-yellow-400 hover:text-yellow-300">
                    <Pencil size={18} />
                  </button>

                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}