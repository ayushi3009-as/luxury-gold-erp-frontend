"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface Props {
  id?: string;
}

interface JobCard {
  id: string;
  jobCardNumber: string;
}

interface FormData {
  productionNumber: string;
  jobCardId: string;
  stage: string;
  status: string;
  quantity: number;
  completedQty: number;
  startDate: string;
  endDate: string;
  remarks: string;
}

export default function ProductionForm({ id }: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [jobCards, setJobCards] = useState<JobCard[]>([]);

  const [formData, setFormData] = useState<FormData>({
    productionNumber: "",
    jobCardId: "",
    stage: "",
    status: "Pending",
    quantity: 1,
    completedQty: 0,
    startDate: "",
    endDate: "",
    remarks: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "quantity" ||
        name === "completedQty"
          ? Number(value)
          : value,
    }));

  };

  useEffect(() => {
  fetchJobCards();

  if (id) {
    fetchProduction();
  }
}, [id]);

const fetchJobCards = async () => {
  try {
    const response = await api.get("/job-cards");
    setJobCards(response.data.data || []);
  } catch (error) {
    console.error("Failed to load Job Cards", error);
  }
};

const fetchProduction = async () => {
  try {
    setLoading(true);

    const response = await api.get(
      `/production-orders/${id}`
    );

    const production = response.data.data;

    setFormData({
      productionNumber:
        production.productionNumber || "",

      jobCardId:
        production.jobCardId || "",

      stage:
        production.stage || "",

      status:
        production.status || "Pending",

      quantity:
        production.quantity || 1,

      completedQty:
        production.completedQty || 0,

      startDate:
        production.startDate
          ? production.startDate.slice(0, 10)
          : "",

      endDate:
        production.endDate
          ? production.endDate.slice(0, 10)
          : "",

      remarks:
        production.remarks || "",
    });

  } catch (error) {

    console.error(error);

    alert("Failed to load Production");

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

    if (id) {

      await api.put(
        `/production-orders/${id}`,
        formData
      );

      alert("Production Updated Successfully");

    } else {

      await api.post(
        "/production-orders",
        formData
      );

      alert("Production Created Successfully");

    }

    router.push(
      "/manufacturing-manager/production"
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
      {id ? "Edit Production Order" : "Add Production Order"}
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      {/* Production Number */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Production Number
        </label>

        <input
          type="text"
          name="productionNumber"
          value={formData.productionNumber}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
        />
      </div>

      {/* Job Card */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Job Card
        </label>

        <select
          name="jobCardId"
          value={formData.jobCardId}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white"
        >
          <option value="">
            Select Job Card
          </option>

          {jobCards.map((job) => (
            <option
              key={job.id}
              value={job.id}
            >
              {job.jobCardNumber}
            </option>
          ))}

        </select>

      </div>

      {/* Stage */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Stage
        </label>

        <input
          type="text"
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white"
        />
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
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
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
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white"
        />
      </div>

      {/* Completed Qty */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Completed Qty
        </label>

        <input
          type="number"
          name="completedQty"
          value={formData.completedQty}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white"
        />
      </div>

      {/* Start Date */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Start Date
        </label>

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white"
        />
      </div>

      {/* End Date */}

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          End Date
        </label>

        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white"
        />
      </div>

            {/* Remarks */}

      <div className="md:col-span-2">

        <label className="mb-2 block text-sm text-gray-400">
          Remarks
        </label>

        <textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
        />

      </div>

    </div>

    {/* Buttons */}

    <div className="mt-8 flex justify-end gap-4">

      <button
        type="button"
        onClick={() => router.back()}
        className="rounded-xl border border-[#2A2A2A] px-6 py-3 text-white hover:border-[#D4AF37]"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[#D4AF37] px-8 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : id
          ? "Update Production"
          : "Create Production"}
      </button>

    </div>

  </form>
);
}