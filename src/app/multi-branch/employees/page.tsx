"use client";

import { useState } from "react";

import EmployeeHeader from "@/components/multi-branch/EmployeeHeader";
import EmployeeSearch from "@/components/multi-branch/EmployeeSearch";
import EmployeeCard from "@/components/multi-branch/EmployeeCard";

const employees = [
  {
    id: 1,
    name: "Raj Patel",
    branch: "Surat Head Office",
    designation: "Branch Manager",
    email: "raj@luxurygold.com",
    phone: "+91 9876543210",
    status: "Active" as const,
  },
  {
    id: 2,
    name: "Priya Shah",
    branch: "Ahmedabad Branch",
    designation: "Sales Executive",
    email: "priya@luxurygold.com",
    phone: "+91 9876501234",
    status: "Active" as const,
  },
  {
    id: 3,
    name: "Amit Mehta",
    branch: "Mumbai Branch",
    designation: "Cashier",
    email: "amit@luxurygold.com",
    phone: "+91 9876549876",
    status: "Inactive" as const,
  },
  {
    id: 4,
    name: "Neha Patel",
    branch: "Rajkot Branch",
    designation: "Accountant",
    email: "neha@luxurygold.com",
    phone: "+91 9876512345",
    status: "Active" as const,
  },
];

export default function EmployeesPage() {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.branch.toLowerCase().includes(search.toLowerCase()) ||
      employee.designation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <EmployeeHeader />

      <EmployeeSearch
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            branch={employee.branch}
            designation={employee.designation}
            email={employee.email}
            phone={employee.phone}
            status={employee.status}
          />
        ))}

      </div>

    </main>
  );
}