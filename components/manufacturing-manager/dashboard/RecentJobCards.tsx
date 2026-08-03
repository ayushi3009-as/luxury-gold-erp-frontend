"use client";

const jobs = [
  {
    id: "JC-1001",
    product: "Gold Ring",
    status: "Casting",
  },
  {
    id: "JC-1002",
    product: "Diamond Necklace",
    status: "Polishing",
  },
  {
    id: "JC-1003",
    product: "Gold Chain",
    status: "QC",
  },
  {
    id: "JC-1004",
    product: "Bangle",
    status: "Completed",
  },
];

export default function RecentJobCards() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="text-xl font-semibold text-white">
        Recent Job Cards
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        Latest manufacturing jobs
      </p>

      <div className="mt-6 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-[#2A2A2A] text-left text-gray-400">

              <th className="pb-3">Job ID</th>

              <th className="pb-3">Product</th>

              <th className="pb-3">Status</th>

            </tr>

          </thead>

          <tbody>

            {jobs.map((job) => (

              <tr
                key={job.id}
                className="border-b border-[#2A2A2A]"
              >
                <td className="py-4 text-[#D4AF37]">
                  {job.id}
                </td>

                <td className="py-4 text-white">
                  {job.product}
                </td>

                <td className="py-4 text-gray-300">
                  {job.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}