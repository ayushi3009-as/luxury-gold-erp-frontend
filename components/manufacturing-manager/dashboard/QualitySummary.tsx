"use client";

interface QualitySummaryProps {
  qualityStats?: {
    passed: number;
    pending: number;
    failed: number;
  };
}

export default function QualitySummary({ qualityStats }: QualitySummaryProps) {
  const quality = [
    {
      status: "Passed",
      value: qualityStats?.passed || 0,
      color: "text-green-400",
    },
    {
      status: "Pending",
      value: qualityStats?.pending || 0,
      color: "text-yellow-400",
    },
    {
      status: "Failed",
      value: qualityStats?.failed || 0,
      color: "text-red-400",
    },
  ];

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="text-xl font-semibold text-text-primary">
        Quality Check
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        Today's QC status
      </p>

      <div className="mt-6 space-y-4">
        {quality.map((item) => (
          <div
            key={item.status}
            className="flex items-center justify-between rounded-xl bg-background-tertiary px-4 py-4"
          >
            <span className="text-text-primary">{item.status}</span>
            <span className={`font-semibold ${item.color}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}