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
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-8">

      <h2 className="mb-8 text-3xl font-bold text-text-primary">
        QC Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <ShieldCheck
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-text-secondary">
            QC ID
          </p>

          <h3 className="mt-2 text-xl font-semibold text-text-primary">
            {id ?? "QC-1001"}
          </h3>

        </div>

        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <Package
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-text-secondary">
            Job Card
          </p>

          <h3 className="mt-2 text-xl font-semibold text-text-primary">
            JC-1001
          </h3>

        </div>

        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <User
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-text-secondary">
            Inspector
          </p>

          <h3 className="mt-2 text-xl font-semibold text-text-primary">
            Rahul Patel
          </h3>

        </div>

        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <FileText
            size={28}
            className="mb-3 text-[#D4AF37]"
          />

          <p className="text-text-secondary">
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