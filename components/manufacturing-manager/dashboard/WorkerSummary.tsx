"use client";

const workers = [
  {
    name: "Rahul Patel",
    jobs: 12,
  },
  {
    name: "Amit Shah",
    jobs: 10,
  },
  {
    name: "Kiran Joshi",
    jobs: 9,
  },
  {
    name: "Rakesh Kumar",
    jobs: 7,
  },
];

export default function WorkerSummary() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="text-xl font-semibold text-white">
        Worker Summary
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        Top active workers today
      </p>

      <div className="mt-6 space-y-4">

        {workers.map((worker) => (

          <div
            key={worker.name}
            className="flex items-center justify-between rounded-xl bg-[#1A1A1A] px-4 py-4"
          >
            <span className="text-white">
              {worker.name}
            </span>

            <span className="font-semibold text-[#D4AF37]">
              {worker.jobs} Jobs
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}