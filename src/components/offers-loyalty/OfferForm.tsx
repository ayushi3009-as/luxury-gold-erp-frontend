"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface OfferFormProps {
  isEdit?: boolean;
}

export default function OfferForm({
  isEdit = false,
}: OfferFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    code: "",
    discount: "",
    startDate: "",
    endDate: "",
    status: "Active",
    description: "",
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

    alert(
      isEdit
        ? "Offer Updated Successfully!"
        : "Offer Created Successfully!"
    );

    router.push("/offers-loyalty/offers");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Offer Title */}

        <div>
          <label className="block mb-2 font-medium">
            Offer Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter offer title"
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        {/* Offer Code */}

        <div>
          <label className="block mb-2 font-medium">
            Offer Code
          </label>

          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Ex: GOLD20"
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        {/* Discount */}

        <div>
          <label className="block mb-2 font-medium">
            Discount
          </label>

          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="20% OFF"
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        {/* Status */}

        <div>
          <label className="block mb-2 font-medium">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none"
          >
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Expired">Expired</option>
          </select>
        </div>

        {/* Start Date */}

        <div>
          <label className="block mb-2 font-medium">
            Start Date
          </label>

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        {/* End Date */}

        <div>
          <label className="block mb-2 font-medium">
            End Date
          </label>

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none"
          />
        </div>

      </div>

      {/* Description */}

      <div className="mt-6">
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter offer description..."
          className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none resize-none"
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
          {isEdit ? "Update Offer" : "Create Offer"}
        </button>

      </div>
    </form>
  );
}