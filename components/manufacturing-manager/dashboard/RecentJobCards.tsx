"use client";

interface RecentJobCardsProps {
  recentJobs?: Array<{
    id: string;
    jobCardNumber: string;
    productName: string;
    status: string;
  }>;
}

export default function RecentJobCards({ recentJobs }: RecentJobCardsProps) {
  const jobs = recentJobs && recentJobs.length > 0 ? recentJobs : [
    { id: "None", jobCardNumber: "-", productName: "No recent jobs", status: "-" }
  ];

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="text-xl font-semibold text-text-primary">
        Recent Job Cards
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        Latest manufacturing jobs
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-theme text-left text-text-secondary">
              <th className="pb-3">Job ID</th>
              <th className="pb-3">Product</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b border-border-theme">
                <td className="py-4 text-[#D4AF37]">
                  {job.jobCardNumber !== "-" ? job.jobCardNumber : job.id}
                </td>
                <td className="py-4 text-text-primary">
                  {job.productName}
                </td>
                <td className="py-4 text-text-secondary">
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