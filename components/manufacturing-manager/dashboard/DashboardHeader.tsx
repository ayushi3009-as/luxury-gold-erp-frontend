"use client";

export default function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">
          Manufacturing Dashboard
        </h1>
        <p className="mt-2 text-text-secondary">
          Monitor production, workers, quality checks, and manufacturing performance.
        </p>
      </div>

    </div>
  );
}