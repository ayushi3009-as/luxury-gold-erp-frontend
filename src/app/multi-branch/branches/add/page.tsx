import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BranchForm from "@/components/multi-branch/BranchForm";

export default function AddBranchPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Add Branch
          </h1>

          <p className="text-gray-400 mt-2">
            Create a new branch for your organization.
          </p>

        </div>

        <Link
          href="/multi-branch/branches"
          className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}

      <BranchForm />

    </main>
  );
}