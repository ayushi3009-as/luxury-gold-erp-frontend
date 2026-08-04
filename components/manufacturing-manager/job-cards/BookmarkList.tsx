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
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">

      <h2 className="mb-6 text-xl font-semibold text-text-primary">
        Bookmarked Job Cards
      </h2>

      <div className="space-y-4">

        {bookmarkedJobs.map((job) => (

          <div
            key={job.id}
            className="flex items-center justify-between rounded-xl bg-background-tertiary px-4 py-4"
          >
            <div>

              <p className="font-semibold text-[#D4AF37]">
                {job.id}
              </p>

              <p className="text-text-secondary">
                {job.product}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}