"use client";

const production = [
  {
    stage: "Casting",
    total: 42,
  },
  {
    stage: "Polishing",
    total: 28,
  },
  {
    stage: "Stone Setting",
    total: 19,
  },
  {
    stage: "Finishing",
    total: 13,
  },
];

export default function ProductionOverview() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="text-xl font-semibold text-white">
        Production Overview
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        Current production stages
      </p>

      <div className="mt-6 space-y-4">

        {production.map((item) => (

          <div
            key={item.stage}
            className="flex items-center justify-between rounded-xl bg-[#1A1A1A] px-4 py-4"
          >
            <span className="text-white">
              {item.stage}
            </span>

            <span className="rounded-lg bg-[#D4AF37]/20 px-3 py-1 font-semibold text-[#D4AF37]">
              {item.total}
            </span>
          </div>

        ))}

      </div>

    </div>
  );
}