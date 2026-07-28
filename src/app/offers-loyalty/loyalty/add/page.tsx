import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LoyaltyForm from "@/components/offers-loyalty/LoyaltyForm";

export default function AddLoyaltyMemberPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Add Loyalty Member
          </h1>

          <p className="text-gray-400 mt-2">
            Register a new customer in the loyalty program.
          </p>
        </div>

        <Link
          href="/offers-loyalty/loyalty"
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <LoyaltyForm />

    </main>
  );
}