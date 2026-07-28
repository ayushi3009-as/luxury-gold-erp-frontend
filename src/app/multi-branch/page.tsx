import Link from "next/link";
import {
  Building2,
  Users,
  ArrowRightLeft,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function MultiBranchDashboard() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-yellow-500">
          Multi Branch Management
        </h1>

        <p className="text-gray-400 mt-2">
          Manage all branches, employees and inventory transfers from one place.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#141414] rounded-2xl border border-yellow-500/20 p-6">

          <Building2 size={36} className="text-yellow-500 mb-4" />

          <p className="text-gray-400">
            Total Branches
          </p>

          <h2 className="text-4xl font-bold mt-2">
            12
          </h2>

        </div>

        <div className="bg-[#141414] rounded-2xl border border-yellow-500/20 p-6">

          <Users size={36} className="text-yellow-500 mb-4" />

          <p className="text-gray-400">
            Employees
          </p>

          <h2 className="text-4xl font-bold mt-2">
            245
          </h2>

        </div>

        <div className="bg-[#141414] rounded-2xl border border-yellow-500/20 p-6">

          <ArrowRightLeft size={36} className="text-yellow-500 mb-4" />

          <p className="text-gray-400">
            Transfers
          </p>

          <h2 className="text-4xl font-bold mt-2">
            38
          </h2>

        </div>

        <div className="bg-[#141414] rounded-2xl border border-yellow-500/20 p-6">

          <MapPin size={36} className="text-yellow-500 mb-4" />

          <p className="text-gray-400">
            Active Locations
          </p>

          <h2 className="text-4xl font-bold mt-2">
            10
          </h2>

        </div>

      </div>

      {/* Quick Navigation */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          href="/multi-branch/branches"
          className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500 transition"
        >

          <Building2 size={42} className="text-yellow-500 mb-6" />

          <h2 className="text-2xl font-bold">
            Branches
          </h2>

          <p className="text-gray-400 mt-3">
            Add, edit and manage all branch locations.
          </p>

          <div className="flex items-center gap-2 mt-6 text-yellow-500 font-semibold">
            Open Module
            <ArrowRight size={18} />
          </div>

        </Link>

        <Link
          href="/multi-branch/employees"
          className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500 transition"
        >

          <Users size={42} className="text-yellow-500 mb-6" />

          <h2 className="text-2xl font-bold">
            Employees
          </h2>

          <p className="text-gray-400 mt-3">
            Manage employees working across branches.
          </p>

          <div className="flex items-center gap-2 mt-6 text-yellow-500 font-semibold">
            Open Module
            <ArrowRight size={18} />
          </div>

        </Link>

        <Link
          href="/multi-branch/transfers"
          className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500 transition"
        >

          <ArrowRightLeft
            size={42}
            className="text-yellow-500 mb-6"
          />

          <h2 className="text-2xl font-bold">
            Transfers
          </h2>

          <p className="text-gray-400 mt-3">
            Monitor inventory transfers between branches.
          </p>

          <div className="flex items-center gap-2 mt-6 text-yellow-500 font-semibold">
            Open Module
            <ArrowRight size={18} />
          </div>

        </Link>

      </div>

    </main>
  );
}