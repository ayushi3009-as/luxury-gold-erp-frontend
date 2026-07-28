import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import EmployeeForm from "@/components/multi-branch/EmployeeForm";

export default function AddEmployeePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Add Employee
          </h1>

          <p className="text-gray-400 mt-2">
            Register a new employee for your organization.
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

      {/* Form */}

      <EmployeeForm />

    </main>
  );
}