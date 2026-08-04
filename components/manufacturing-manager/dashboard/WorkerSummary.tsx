"use client";

interface WorkerSummaryProps {
  workersData?: Array<{ name: string; jobs: number }>;
}

export default function WorkerSummary({ workersData }: WorkerSummaryProps) {
  const workers = workersData || [];

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="text-xl font-semibold text-text-primary">
        Worker Summary
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        Top active workers today
      </p>

      <div className="mt-6 space-y-4">
        {workers.length === 0 ? (
          <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-border-theme text-sm text-text-secondary">
            No active workers today
          </div>
        ) : (
          workers.map((worker) => (
            <div
              key={worker.name}
              className="flex items-center justify-between rounded-xl bg-background-tertiary px-4 py-4"
            >
              <span className="text-text-primary">{worker.name}</span>
              <span className="font-semibold text-[#D4AF37]">
                {worker.jobs} Jobs
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}