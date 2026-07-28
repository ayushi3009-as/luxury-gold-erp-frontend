import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  MapPin,
  User,
  Phone,
  Mail,
  BadgeCheck,
} from "lucide-react";

export default function ViewBranchPage() {
  const branch = {
    id: "BR001",
    name: "Surat Head Office",
    manager: "Raj Patel",
    phone: "+91 9876543210",
    email: "surat@luxurygold.com",
    address: "Ring Road, Surat",
    city: "Surat",
    state: "Gujarat",
    employees: 35,
    status: "Active",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Branch Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete branch information.
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

      {/* Details Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-8">

          <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
            <Building2 size={32} className="text-yellow-500" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {branch.name}
            </h2>

            <p className="text-gray-400">
              Branch ID : {branch.id}
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <User className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Branch Manager</p>
                <h3 className="font-semibold">{branch.manager}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <h3 className="font-semibold">{branch.phone}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <h3 className="font-semibold">{branch.email}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Status</p>

                <span
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-sm ${
                    branch.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {branch.status}
                </span>

              </div>
            </div>
          </div>

        </div>

        <div className="bg-[#1B1B1B] rounded-xl p-5 mt-6">

          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-yellow-500" />
            <h3 className="text-xl font-semibold">
              Branch Address
            </h3>
          </div>

          <p className="text-gray-300">
            {branch.address}
          </p>

          <p className="text-gray-400 mt-2">
            {branch.city}, {branch.state}
          </p>

        </div>

        <div className="bg-[#1B1B1B] rounded-xl p-5 mt-6">

          <h3 className="text-xl font-semibold text-yellow-500 mb-3">
            Branch Summary
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-gray-400">Branch Code</p>
              <p className="font-semibold">{branch.id}</p>
            </div>

            <div>
              <p className="text-gray-400">Employees</p>
              <p className="font-semibold">
                {branch.employees}
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}