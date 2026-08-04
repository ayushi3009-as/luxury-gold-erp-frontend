"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface Props {
  id?: string;
}

interface FormData {
  jobCardNumber: string;
  productName: string;
  designNumber: string;
  category: string;
  purity: string;
  grossWeight: number;
  netWeight: number;
  quantity: number;
  priority: string;
  status: string;
  remarks: string;
}

export default function JobCardForm({ id }: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    jobCardNumber: "",
    productName: "",
    designNumber: "",
    category: "",
    purity: "",
    grossWeight: 0,
    netWeight: 0,
    quantity: 1,
    priority: "Medium",
    status: "Pending",
    remarks: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "grossWeight" ||
        name === "netWeight" ||
        name === "quantity"
          ? Number(value)
          : value,
    }));

  };
    useEffect(() => {

    if (id) {
      fetchJobCard();
    }

  }, [id]);

  const fetchJobCard = async () => {

    try {

      setLoading(true);

      const response = await api.get(`/job-cards/${id}`);

      const job = response.data.data;

      setFormData({

        jobCardNumber: job.jobCardNumber || "",

        productName: job.productName || "",

        designNumber: job.designNumber || "",

        category: job.category || "",

        purity: job.purity || "",

        grossWeight: job.grossWeight || 0,

        netWeight: job.netWeight || 0,

        quantity: job.quantity || 1,

        priority: job.priority || "Medium",

        status: job.status || "Pending",

        remarks: job.remarks || "",

      });

    } catch (error) {

      console.error(error);

      alert("Failed to load Job Card");

    } finally {

      setLoading(false);

    }

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const user = JSON.parse(localStorage.getItem("user") || "{}");

if (id) {

  await api.put(
    `/job-cards/${id}`,
    formData
  );

  alert("Job Card Updated Successfully");

} else {

  await api.post("/job-cards", {
    ...formData,
    createdById: user.id,
  });

  alert("Job Card Created Successfully");

}
      router.push(
        "/manufacturing-manager/job-cards"
      );

      router.refresh();

    } catch (err: any) {

      alert(
        err.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <form
  onSubmit={handleSubmit}
  className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6"
>

  <h2 className="mb-6 text-2xl font-bold text-white">

    {id ? "Edit Job Card" : "Add Job Card"}

  </h2>

  <div className="grid gap-5 md:grid-cols-2">

    {/* Job Card Number */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Job Card Number
      </label>

      <input
        type="text"
        name="jobCardNumber"
        value={formData.jobCardNumber}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Product */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Product Name
      </label>

      <input
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Design */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Design Number
      </label>

      <input
        type="text"
        name="designNumber"
        value={formData.designNumber}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Category */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Category
      </label>

      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Purity */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Purity
      </label>

      <input
        type="text"
        name="purity"
        value={formData.purity}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Gross Weight */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Gross Weight
      </label>

      <input
        type="number"
        step="0.01"
        name="grossWeight"
        value={formData.grossWeight}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Net Weight */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Net Weight
      </label>

      <input
        type="number"
        step="0.01"
        name="netWeight"
        value={formData.netWeight}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Quantity */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Quantity
      </label>

      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

    {/* Priority */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Priority
      </label>

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white"
      >

        <option>High</option>
        <option>Medium</option>
        <option>Low</option>

      </select>

    </div>

    {/* Status */}

    <div>

      <label className="mb-2 block text-sm text-gray-400">
        Status
      </label>

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white"
      >

        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>

      </select>

    </div>

  </div>
        {/* Remarks */}

      <div className="mt-6">

        <label className="mb-2 block text-sm text-gray-400">
          Remarks
        </label>

        <input
          type="text"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          placeholder="Enter Remarks"
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
        />

      </div>

      {/* Button */}

      <div className="mt-8 flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#D4AF37] px-8 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-50"
        >

          {loading
            ? "Saving..."
            : id
            ? "Update Job Card"
            : "Create Job Card"}

        </button>

      </div>

    </form>

  );

}