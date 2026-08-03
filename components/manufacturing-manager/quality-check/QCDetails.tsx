"use client";

import {
  ShieldCheck,
  Package,
  User,
  FileText,
} from "lucide-react";

interface QCDetailsProps {
  id?: string;
}

export default function QCDetails({
  id,
}: QCDetailsProps) {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-8">

      <h2 className="mb-8 text-3xl font-bold text-white">
        QC Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <ShieldCheck
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-gray-400">
            QC ID
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {id ?? "QC-1001"}
          </h3>

        </div>

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <Package
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-gray-400">
            Job Card
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            JC-1001
          </h3>

        </div>

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <User
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-gray-400">
            Inspector
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Rahul Patel
          </h3>

        </div>

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <FileText
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-gray-400">
            Result
          </p>

          <h3 className="mt-2 text-xl font-semibold text-green-400">
            Passed
          </h3>

        </div>

      </div>

    </div>
  );
}