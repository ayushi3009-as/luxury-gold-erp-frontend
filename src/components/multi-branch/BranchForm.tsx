"use client";

import { useState } from "react";

interface BranchFormProps {
  initialData?: {
    branchName: string;
    branchCode: string;
    manager: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    status: string;
  };
}

export default function BranchForm({
  initialData,
}: BranchFormProps) {
  const [formData, setFormData] = useState({
    branchName: initialData?.branchName || "",
    branchCode: initialData?.branchCode || "",
    manager: initialData?.manager || "",
    phone: initialData?.phone || "",
    email: initialData?.email || "",
    address: initialData?.address || "",
    city: initialData?.city || "",
    state: initialData?.state || "",
    status: initialData?.status || "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Branch Saved Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 text-gray-300">
            Branch Name
          </label>

          <input
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Branch Code
          </label>

          <input
            type="text"
            name="branchCode"
            value={formData.branchCode}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Branch Manager
          </label>

          <input
            type="text"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            required
          />
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
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            required
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
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
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
          Branch Address
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
          Save Branch
        </button>

      </div>

    </form>
  );
}