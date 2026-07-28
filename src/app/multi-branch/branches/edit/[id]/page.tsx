import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BranchForm from "@/components/multi-branch/BranchForm";

export default function EditBranchPage() {
  const branchData = {
    branchName: "Surat Head Office",
    branchCode: "BR001",
    manager: "Raj Patel",
    phone: "+91 9876543210",
    email: "surat@luxurygold.com",
    address: "Ring Road, Surat",
    city: "Surat",
    state: "Gujarat",
    status: "Active",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Edit Branch
          </h1>

          <p className="text-gray-400 mt-2">
            Update branch information.
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

      <BranchForm initialData={branchData} />

    </main>
  );
}