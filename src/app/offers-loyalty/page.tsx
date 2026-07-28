import Link from "next/link";
import {
  Gift,
  Crown,
  Star,
  ArrowRight,
} from "lucide-react";

export default function OffersLoyaltyDashboard() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-yellow-500">
          Offers & Loyalty
        </h1>

        <p className="text-gray-400 mt-2">
          Manage promotional offers, customer loyalty programs and reward points.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <Gift className="text-yellow-500 mb-4" size={36} />
          <h2 className="text-gray-400">Active Offers</h2>
          <p className="text-4xl font-bold mt-2">12</p>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <Crown className="text-yellow-500 mb-4" size={36} />
          <h2 className="text-gray-400">Loyalty Members</h2>
          <p className="text-4xl font-bold mt-2">548</p>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <Star className="text-yellow-500 mb-4" size={36} />
          <h2 className="text-gray-400">Reward Points</h2>
          <p className="text-4xl font-bold mt-2">24,580</p>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <Gift className="text-yellow-500 mb-4" size={36} />
          <h2 className="text-gray-400">Redeemed Rewards</h2>
          <p className="text-4xl font-bold mt-2">97</p>
        </div>

      </div>

      {/* Navigation */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          href="/offers-loyalty/offers"
          className="bg-[#141414] border border-yellow-500/20 hover:border-yellow-500 rounded-2xl p-8 transition"
        >
          <Gift className="text-yellow-500 mb-5" size={40} />

          <h2 className="text-2xl font-bold">
            Offers
          </h2>

          <p className="text-gray-400 mt-3">
            Create and manage promotional offers.
          </p>

          <div className="flex items-center gap-2 mt-6 text-yellow-500">
            Open Module
            <ArrowRight size={18} />
          </div>

        </Link>

        <Link
          href="/offers-loyalty/loyalty"
          className="bg-[#141414] border border-yellow-500/20 hover:border-yellow-500 rounded-2xl p-8 transition"
        >
          <Crown className="text-yellow-500 mb-5" size={40} />

          <h2 className="text-2xl font-bold">
            Loyalty
          </h2>

          <p className="text-gray-400 mt-3">
            Manage loyalty members.
          </p>

          <div className="flex items-center gap-2 mt-6 text-yellow-500">
            Open Module
            <ArrowRight size={18} />
          </div>

        </Link>

        <Link
          href="/offers-loyalty/rewards"
          className="bg-[#141414] border border-yellow-500/20 hover:border-yellow-500 rounded-2xl p-8 transition"
        >
          <Star className="text-yellow-500 mb-5" size={40} />

          <h2 className="text-2xl font-bold">
            Rewards
          </h2>

          <p className="text-gray-400 mt-3">
            Reward points and redemption history.
          </p>

          <div className="flex items-center gap-2 mt-6 text-yellow-500">
            Open Module
            <ArrowRight size={18} />
          </div>

        </Link>

      </div>

    </main>
  );
}