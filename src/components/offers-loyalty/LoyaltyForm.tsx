"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoyaltyFormProps {
  isEdit?: boolean;
}

export default function LoyaltyForm({
  isEdit = false,
}: LoyaltyFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    membership: "Gold",
    points: "0",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert(
      isEdit
        ? "Loyalty Member Updated Successfully!"
        : "Loyalty Member Added Successfully!"
    );

    router.push("/offers-loyalty/loyalty");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Customer Name */}

        <div>
          <label className="block mb-2 font-medium">
            Customer Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter customer name"
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Mobile */}

        <div>
          <label className="block mb-2 font-medium">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="customer@email.com"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Membership */}

        <div>
          <label className="block mb-2 font-medium">
            Membership
          </label>

          <select
            name="membership"
            value={formData.membership}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          >
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Bronze">Bronze</option>
          </select>
        </div>

        {/* Reward Points */}

        <div>
          <label className="block mb-2 font-medium">
            Reward Points
          </label>

          <input
            type="number"
            name="points"
            value={formData.points}
            onChange={handleChange}
            placeholder="0"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

      </div>

      {/* Address */}

      <div className="mt-6">
        <label className="block mb-2 font-medium">
          Address
        </label>

        <textarea
          name="address"
          rows={4}
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter customer address"
          className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-yellow-500"
        />
      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition"
        >
          {isEdit ? "Update Member" : "Add Member"}
        </button>

      </div>

    </form>
  );
}