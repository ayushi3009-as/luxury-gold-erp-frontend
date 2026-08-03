"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface WorkerFormProps {
  id?: string;
}

interface WorkerFormData {
  employeeId: string;
  fullName: string;
  phone: string;
  email: string;
  specialization: string;
  experience: number | "";
  salary: number | "";
  status: string;
}

export default function WorkerForm({
  id,
}: WorkerFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState<WorkerFormData>({
      employeeId: "",
      fullName: "",
      phone: "",
      email: "",
      specialization: "",
      experience: "",
      salary: "",
      status: "Active",
    });

  useEffect(() => {
    if (id) {
      fetchWorker();
    }
  }, [id]);

  const fetchWorker = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `/workers/${id}`
      );

      const worker = response.data.data;

      setFormData({
        employeeId: worker.employeeId || "",
        fullName: worker.fullName || "",
        phone: worker.phone || "",
        email: worker.email || "",
        specialization:
          worker.specialization || "",
        experience:
          worker.experience ?? "",
        salary:
          worker.salary ?? "",
        status:
          worker.status || "Active",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to load Worker");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "experience" ||
        name === "salary"
          ? value === ""
            ? ""
            : Number(value)
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (id) {
        await api.put(
          `/workers/${id}`,
          formData
        );

        alert("Worker Updated Successfully");
      } else {
        await api.post(
          "/workers",
          formData
        );

        alert("Worker Created Successfully");
      }

      router.push(
        "/manufacturing-manager/workers"
      );

    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-8"
    >
      <h2 className="mb-8 text-2xl font-bold text-white">
        {id ? "Edit Worker" : "Add Worker"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Employee ID
          </label>

          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            placeholder="EMP001"
            required
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Rahul Patel"
            required
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            required
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="worker@gmail.com"
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Specialization
          </label>

          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            placeholder="Casting"
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Experience
          </label>

          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="5"
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Salary
          </label>

          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="25000"
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-3 text-white outline-none focus:border-[#D4AF37]"
          >
            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>
        </div>

      </div>

      <div className="mt-8 flex justify-end gap-3">

        <button
          type="button"
          onClick={() =>
            router.push(
              "/manufacturing-manager/workers"
            )
          }
          className="rounded-xl border border-[#2A2A2A] px-6 py-3 text-white hover:border-[#D4AF37]"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:bg-[#E6C458] disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : id
            ? "Update Worker"
            : "Save Worker"}
        </button>

      </div>

    </form>
  );
}