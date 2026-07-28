"use client";

import TransferHeader from "@/components/multi-branch/TransferHeader";
import TransferTable from "@/components/multi-branch/TransferTable";
import TransferCard from "@/components/multi-branch/TransferCard";

const transfers = [
  {
    id: 1001,
    fromBranch: "Surat Head Office",
    toBranch: "Ahmedabad Branch",
    transferDate: "28 Jul 2026",
    items: 25,
    status: "Completed" as const,
  },
  {
    id: 1002,
    fromBranch: "Mumbai Branch",
    toBranch: "Rajkot Branch",
    transferDate: "29 Jul 2026",
    items: 15,
    status: "Pending" as const,
  },
  {
    id: 1003,
    fromBranch: "Ahmedabad Branch",
    toBranch: "Surat Head Office",
    transferDate: "30 Jul 2026",
    items: 32,
    status: "In Transit" as const,
  },
];

export default function TransfersPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <TransferHeader />

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <p className="text-gray-400">
            Total Transfers
          </p>

          <h2 className="text-4xl font-bold text-yellow-500 mt-2">
            152
          </h2>

        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <p className="text-gray-400">
            Pending
          </p>

          <h2 className="text-4xl font-bold text-yellow-500 mt-2">
            18
          </h2>

        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <p className="text-gray-400">
            Completed
          </p>

          <h2 className="text-4xl font-bold text-yellow-500 mt-2">
            134
          </h2>

        </div>

      </div>

      {/* Desktop Table */}

      <div className="hidden lg:block">
        <TransferTable transfers={transfers} />
      </div>

      {/* Mobile Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">

        {transfers.map((transfer) => (
          <TransferCard
            key={transfer.id}
            id={transfer.id}
            fromBranch={transfer.fromBranch}
            toBranch={transfer.toBranch}
            transferDate={transfer.transferDate}
            items={transfer.items}
            status={transfer.status}
          />
        ))}

      </div>

    </main>
  );
}