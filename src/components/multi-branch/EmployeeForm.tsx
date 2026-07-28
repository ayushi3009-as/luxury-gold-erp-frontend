"use client";

import { useState } from "react";

interface EmployeeFormProps {
  initialData?: {
    employeeName: string;
    employeeId: string;
    designation: string;
    branch: string;
    phone: string;
    email: string;
    address: string;
    salary: string;
    status: string;
  };
}

export default function EmployeeForm({
  initialData,
}: EmployeeFormProps) {
  const [formData, setFormData] = useState({
    employeeName: initialData?.employeeName || "",
    employeeId: initialData?.employeeId || "",
    designation: initialData?.designation || "",
    branch: initialData?.branch || "",
    phone: initialData?.phone || "",
    email: initialData?.email || "",
    address: initialData?.address || "",
    salary: initialData?.salary || "",
    status: initialData?.status || "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Employee Saved Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 text-gray-300">
            Employee Name
          </label>

          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Employee ID
          </label>

          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Designation
          </label>

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Branch
          </label>

          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          >
            <option value="">Select Branch</option>
            <option>Surat Head Office</option>
            <option>Ahmedabad Branch</option>
            <option>Mumbai Branch</option>
            <option>Rajkot Branch</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Monthly Salary
          </label>

          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

      </div>

      <div>
        <label className="block mb-2 text-gray-300">
          Address
        </label>

        <textarea
          rows={4}
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
        >
          Save Employee
        </button>
      </div>
    </form>
  );
}