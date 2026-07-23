"use client";

import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Factory,
  PackageCheck,
  Users,
  Wrench,
} from "lucide-react";

const productionStages = [
  { name: "Gold Issue", value: 82 },
  { name: "Wax Casting", value: 68 },
  { name: "Polishing", value: 75 },
  { name: "Diamond Setting", value: 54 },
  { name: "Quality Check", value: 88 },
];

const workers = [
  ["Rajesh Kumar", "Gold Manufacturing", "42 Items", "92%"],
  ["Amit Patel", "Diamond Setting", "28 Items", "88%"],
  ["Suresh Shah", "Polishing", "36 Items", "85%"],
  ["Vijay Mehta", "Quality Check", "31 Items", "96%"],
];

export default function ManufacturingDashboard() {
  return (
    <div className="min-h-screen bg-[#090a09] p-5 text-white">

      {/* HEADER */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Dashboard / Manufacturing
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Manufacturing Dashboard
        </h1>

        <p className="mt-1 text-gray-400">
          Monitor production, job cards, workers and manufacturing operations.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <ManufacturingCard
          title="TOTAL PRODUCTION"
          value="1,248"
          subtitle="Items produced this month"
          icon={<Factory size={22} />}
        />

        <ManufacturingCard
          title="PENDING JOB CARDS"
          value="86"
          subtitle="Currently in production"
          icon={<Wrench size={22} />}
        />

        <ManufacturingCard
          title="COMPLETED ITEMS"
          value="1,162"
          subtitle="92.8% completion rate"
          icon={<PackageCheck size={22} />}
        />

        <ManufacturingCard
          title="ACTIVE WORKERS"
          value="48"
          subtitle="Currently assigned"
          icon={<Users size={22} />}
        />

      </div>

      {/* PRODUCTION OVERVIEW */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">

        {/* PRODUCTION STAGES */}
        <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5 xl:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#e5b72e]">
                PRODUCTION OVERVIEW
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Current manufacturing stage performance
              </p>
            </div>

            <Activity
              size={20}
              className="text-[#d9a928]"
            />
          </div>

          <div className="mt-7 space-y-5">

            {productionStages.map((stage) => (

              <div key={stage.name}>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-gray-300">
                    {stage.name}
                  </span>

                  <span className="text-[#e5b72e]">
                    {stage.value}%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-[#29271d]">

                  <div
                    className="h-3 rounded-full bg-[#d9a928]"
                    style={{
                      width: `${stage.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* PRODUCTION STATUS */}
        <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

          <h2 className="font-semibold text-[#e5b72e]">
            PRODUCTION STATUS
          </h2>

          <div className="mt-7 flex justify-center">

            <div className="flex h-44 w-44 items-center justify-center rounded-full border-[20px] border-[#d9a928]">

              <div className="text-center">

                <p className="text-3xl font-bold">
                  92.8%
                </p>

                <p className="text-xs text-gray-500">
                  Completion
                </p>

              </div>

            </div>

          </div>

          <div className="mt-6 space-y-3">

            <StatusRow
              icon={<CheckCircle size={16} />}
              label="Completed"
              value="1,162"
              className="text-green-400"
            />

            <StatusRow
              icon={<Clock size={16} />}
              label="In Progress"
              value="86"
              className="text-yellow-400"
            />

            <StatusRow
              icon={<AlertTriangle size={16} />}
              label="Quality Hold"
              value="18"
              className="text-red-400"
            />

          </div>

        </div>

      </div>

      {/* WORKER PERFORMANCE */}
      <div className="mt-5 rounded-xl border border-[#40351a] bg-[#101210] p-5">

        <div className="flex items-center justify-between">

          <h2 className="font-semibold text-[#e5b72e]">
            WORKER PERFORMANCE
          </h2>

          <Users
            size={20}
            className="text-[#d9a928]"
          />

        </div>

        <div className="mt-5 overflow-x-auto">

          <table className="w-full min-w-[650px] text-left text-sm">

            <thead className="border-b border-[#302b1d] text-xs text-gray-500">

              <tr>
                <th className="pb-3">WORKER</th>
                <th className="pb-3">DEPARTMENT</th>
                <th className="pb-3">PRODUCTION</th>
                <th className="pb-3">EFFICIENCY</th>
                <th className="pb-3">STATUS</th>
              </tr>

            </thead>

            <tbody>

              {workers.map((worker) => (

                <tr
                  key={worker[0]}
                  className="border-b border-[#25241c]"
                >

                  <td className="py-4 font-medium">
                    {worker[0]}
                  </td>

                  <td className="py-4 text-gray-400">
                    {worker[1]}
                  </td>

                  <td className="py-4 text-gray-300">
                    {worker[2]}
                  </td>

                  <td className="py-4 text-[#e5b72e]">
                    {worker[3]}
                  </td>

                  <td className="py-4">

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                      Active
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* RECENT JOB CARDS */}
      <div className="mt-5 rounded-xl border border-[#40351a] bg-[#101210] p-5">

        <div className="flex items-center justify-between">

          <h2 className="font-semibold text-[#e5b72e]">
            RECENT JOB CARDS
          </h2>

          <span className="text-xs text-[#d9a928]">
            View All →
          </span>

        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            ["JC-1001", "Gold Necklace", "Polishing", "In Progress"],
            ["JC-1002", "Diamond Ring", "Diamond Setting", "Completed"],
            ["JC-1003", "Gold Bangle", "Quality Check", "In Progress"],
            ["JC-1004", "Gold Earrings", "Finished Goods", "Completed"],
          ].map((job) => (

            <div
              key={job[0]}
              className="rounded-lg border border-[#302b1d] bg-[#151610] p-4"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs text-gray-500">
                  {job[0]}
                </span>

                <span
                  className={`rounded-full px-2 py-1 text-[10px] ${
                    job[3] === "Completed"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {job[3]}
                </span>

              </div>

              <h3 className="mt-4 font-medium">
                {job[1]}
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                Current Stage: {job[2]}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

function ManufacturingCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#66521d] bg-[#211c0f] text-[#e6b92e]">
        {icon}
      </div>

      <p className="mt-5 text-xs text-gray-500">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-semibold">
        {value}
      </h3>

      <p className="mt-2 text-xs text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}

function StatusRow({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <div className={`flex items-center gap-2 ${className}`}>
        {icon}
        <span className="text-sm">
          {label}
        </span>
      </div>

      <span className="text-sm font-semibold">
        {value}
      </span>

    </div>
  );
}