"use client";

const workProgress = [
  {
    id: "PO-1001",
    product: "22K Gold Ring",
    stage: "Casting",
    worker: "Rahul Patel",
    progress: 35,
  },
  {
    id: "PO-1002",
    product: "Diamond Necklace",
    stage: "Stone Setting",
    worker: "Amit Shah",
    progress: 65,
  },
  {
    id: "PO-1003",
    product: "Gold Bracelet",
    stage: "Polishing",
    worker: "Kiran Joshi",
    progress: 90,
  },
];

export default function WorkInProgress() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        Work In Progress
      </h2>

      <div className="space-y-5">

        {workProgress.map((job) => (

          <div
            key={job.id}
            className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5"
          >

            <div className="mb-3 flex items-center justify-between">

              <div>

                <h3 className="font-semibold text-white">
                  {job.product}
                </h3>

                <p className="text-sm text-gray-400">
                  {job.id}
                </p>

              </div>

              <span className="rounded-lg bg-[#D4AF37]/20 px-3 py-1 text-sm text-[#D4AF37]">
                {job.stage}
              </span>

            </div>

            <p className="mb-3 text-gray-300">
              Worker: {job.worker}
            </p>

            <div className="h-3 w-full rounded-full bg-[#2A2A2A]">

              <div
                className="h-3 rounded-full bg-[#D4AF37]"
                style={{ width: `${job.progress}%` }}
              />

            </div>

            <p className="mt-2 text-right text-sm text-gray-400">
              {job.progress}% Completed
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}