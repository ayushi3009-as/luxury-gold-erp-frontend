"use client";

const bookmarkedJobs = [
  {
    id: "JC-1003",
    product: "Diamond Ring",
  },
  {
    id: "JC-1008",
    product: "Gold Necklace",
  },
];

export default function BookmarkList() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        Bookmarked Job Cards
      </h2>

      <div className="space-y-4">

        {bookmarkedJobs.map((job) => (

          <div
            key={job.id}
            className="flex items-center justify-between rounded-xl bg-[#1A1A1A] px-4 py-4"
          >
            <div>

              <p className="font-semibold text-[#D4AF37]">
                {job.id}
              </p>

              <p className="text-gray-400">
                {job.product}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}