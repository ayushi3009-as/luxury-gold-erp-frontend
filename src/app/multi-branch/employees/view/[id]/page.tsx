import Link from "next/link";
import {
  ArrowLeft,
  User,
  Building2,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
  IndianRupee,
} from "lucide-react";

export default function ViewEmployeePage() {
  const employee = {
    id: "EMP001",
    name: "Raj Patel",
    designation: "Branch Manager",
    branch: "Surat Head Office",
    phone: "+91 9876543210",
    email: "raj@luxurygold.com",
    salary: "75,000",
    address: "Ring Road, Surat, Gujarat",
    status: "Active",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Employee Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete employee information.
          </p>
        </div>

        <Link
          href="/multi-branch/employees"
          className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* Employee Details Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
            <User size={40} className="text-yellow-500" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">{employee.name}</h2>

            <p className="text-gray-400">
              Employee ID: {employee.id}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Building2 className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Branch</p>
                <h3 className="font-semibold">{employee.branch}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Briefcase className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Designation</p>
                <h3 className="font-semibold">{employee.designation}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <h3 className="font-semibold">{employee.phone}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <h3 className="font-semibold">{employee.email}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <IndianRupee className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Monthly Salary</p>
                <h3 className="font-semibold">₹ {employee.salary}</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Status</p>

                <span
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-sm ${
                    employee.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {employee.status}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Address */}

        <div className="bg-[#1B1B1B] rounded-xl p-5 mt-6">

          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-yellow-500" />

            <h3 className="text-xl font-semibold">
              Address
            </h3>
          </div>

          <p className="text-gray-300">
            {employee.address}
          </p>

        </div>

      </div>
    </main>
  );
}