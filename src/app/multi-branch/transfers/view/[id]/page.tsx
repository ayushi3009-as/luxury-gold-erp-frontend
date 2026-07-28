import Link from "next/link";
import {
  ArrowLeft,
  ArrowRightLeft,
  Building2,
  Calendar,
  Boxes,
  BadgeCheck,
  FileText,
} from "lucide-react";

export default function ViewTransferPage() {
  const transfer = {
    id: "TR001",
    fromBranch: "Surat Head Office",
    toBranch: "Ahmedabad Branch",
    transferDate: "28 Jul 2026",
    items: 25,
    status: "Completed",
    remarks:
      "Gold jewellery stock transferred for festive season inventory.",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Transfer Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete transfer information.
          </p>
        </div>

        <Link
          href="/multi-branch/transfers"
          className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Transfer Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-8">

          <div className="w-20 h-20 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
            <ArrowRightLeft size={40} className="text-yellow-500" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Transfer #{transfer.id}
            </h2>

            <p className="text-gray-400">
              Inventory Transfer Record
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Building2 className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">From Branch</p>
                <h3 className="font-semibold">
                  {transfer.fromBranch}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Building2 className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">To Branch</p>
                <h3 className="font-semibold">
                  {transfer.toBranch}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Calendar className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Transfer Date</p>
                <h3 className="font-semibold">
                  {transfer.transferDate}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Boxes className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Items Transferred</p>
                <h3 className="font-semibold">
                  {transfer.items}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 md:col-span-2">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Transfer Status</p>

                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  {transfer.status}
                </span>

              </div>
            </div>
          </div>

        </div>

        {/* Remarks */}

        <div className="bg-[#1B1B1B] rounded-xl p-5 mt-6">

          <div className="flex items-center gap-3 mb-3">
            <FileText className="text-yellow-500" />

            <h3 className="text-xl font-semibold">
              Remarks
            </h3>
          </div>

          <p className="text-gray-300 leading-7">
            {transfer.remarks}
          </p>

        </div>

      </div>

    </main>
  );
}