"use client";

interface ProductionOverviewProps {
  stagesData?: Array<{ stage: string; count: number }>;
}

export default function ProductionOverview({ stagesData }: ProductionOverviewProps) {
  const production = stagesData && stagesData.length > 0 ? stagesData : [
    { stage: "Casting", count: 0 },
    { stage: "Polishing", count: 0 },
    { stage: "Stone Setting", count: 0 },
    { stage: "Finishing", count: 0 },
  ];

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="text-xl font-semibold text-text-primary">
        Production Overview
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        Current production stages
      </p>

      <div className="mt-6 space-y-4">
        {production.map((item) => (
          <div
            key={item.stage}
            className="flex items-center justify-between rounded-xl bg-background-tertiary px-4 py-4"
          >
            <span className="text-text-primary">{item.stage}</span>
            <span className="rounded-lg bg-[#D4AF37]/20 px-3 py-1 font-semibold text-[#D4AF37]">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}