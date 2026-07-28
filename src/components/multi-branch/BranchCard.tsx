"use client";

import Link from "next/link";
import {
  Building2,
  MapPin,
  User,
  Users,
  Eye,
  Pencil,
} from "lucide-react";

interface BranchCardProps {
  id: number;
  name: string;
  location: string;
  manager: string;
  employees: number;
  status: "Active" | "Inactive";
}

export default function BranchCard({
  id,
  name,
  location,
  manager,
  employees,
  status,
}: BranchCardProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition-all">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">

            <Building2
              size={24}
              className="text-yellow-500"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold">
              {name}
            </h2>

            <p className="text-gray-400 text-sm">
              Branch ID : #{id}
            </p>

          </div>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status}
        </span>

      </div>

      {/* Details */}

      <div className="space-y-4 mt-6">

        <div className="flex items-center gap-3">

          <MapPin
            size={18}
            className="text-yellow-500"
          />

          <span>{location}</span>

        </div>

        <div className="flex items-center gap-3">

          <User
            size={18}
            className="text-yellow-500"
          />

          <span>{manager}</span>

        </div>

        <div className="flex items-center gap-3">

          <Users
            size={18}
            className="text-yellow-500"
          />

          <span>{employees} Employees</span>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-3 mt-8">

        <Link
          href={`/multi-branch/branches/view/${id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] py-3 rounded-xl transition"
        >
          <Eye size={18} />
          View
        </Link>

        <Link
          href={`/multi-branch/branches/edit/${id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition"
        >
          <Pencil size={18} />
          Edit
        </Link>

      </div>

    </div>
  );
}