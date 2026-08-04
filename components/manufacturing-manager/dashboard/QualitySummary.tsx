"use client";

const quality = [
  {
    status: "Passed",
    value: 92,
    color: "text-green-400",
  },
  {
    status: "Pending",
    value: 11,
    color: "text-yellow-400",
  },
  {
    status: "Failed",
    value: 4,
    color: "text-red-400",
  },
];

export default function QualitySummary() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="text-xl font-semibold text-white">
        Quality Check
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        Today's QC status
      </p>

      <div className="mt-6 space-y-4">

        {quality.map((item) => (

          <div
            key={item.status}
            className="flex items-center justify-between rounded-xl bg-[#1A1A1A] px-4 py-4"
          >
            <span className="text-white">
              {item.status}
            </span>

            <span className={`font-semibold ${item.color}`}>
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}