"use client";

interface RepairFilterProps {
  status: string;
  worker: string;
  onStatusChange: (value: string) => void;
  onWorkerChange: (value: string) => void;
}

export default function RepairFilter({
  status,
  worker,
  onStatusChange,
  onWorkerChange,
}: RepairFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* Status Filter */}

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="bg-background-secondary border border-border-theme rounded-xl px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Assigned">Assigned</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Delivered">Delivered</option>
      </select>

      {/* Worker Filter */}

      <select
        value={worker}
        onChange={(e) => onWorkerChange(e.target.value)}
        className="bg-background-secondary border border-border-theme rounded-xl px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
      >
        <option value="">All Workers</option>
        <option value="Ramesh">Ramesh</option>
        <option value="Suresh">Suresh</option>
        <option value="Mahesh">Mahesh</option>
        <option value="Amit">Amit</option>
      </select>

    </div>
  );
}