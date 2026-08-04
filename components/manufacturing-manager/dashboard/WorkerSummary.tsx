"use client";

interface WorkerSummaryProps {
  workersData?: Array<{ name: string; jobs: number }>;
}

export default function WorkerSummary({ workersData }: WorkerSummaryProps) {
  const workers = workersData && workersData.length > 0 ? workersData : [
    { name: "Rahul Patel", jobs: 0 },
    { name: "Amit Shah", jobs: 0 },
    { name: "Kiran Joshi", jobs: 0 },
    { name: "Rakesh Kumar", jobs: 0 },
  ];

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="text-xl font-semibold text-text-primary">
        Worker Summary
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        Top active workers today
      </p>

      <div className="mt-6 space-y-4">
        {workers.map((worker) => (
          <div
            key={worker.name}
            className="flex items-center justify-between rounded-xl bg-background-tertiary px-4 py-4"
          >
            <span className="text-text-primary">{worker.name}</span>
            <span className="font-semibold text-[#D4AF37]">
              {worker.jobs} Jobs
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}