"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface QCFormProps {
  id?: string;
}

interface QCFormData {
  jobCardId: string;
  inspectorName: string;
  qualityStatus: string;
  defects: string;
  remarks: string;
}

interface JobCard {
  id: string;
  jobCardNumber: string;
}

export default function QCForm({ id }: QCFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [jobCards, setJobCards] = useState<JobCard[]>([]);

  const [formData, setFormData] = useState<QCFormData>({
    jobCardId: "",
    inspectorName: "",
    qualityStatus: "Pending",
    defects: "",
    remarks: "",
  });

  // ==========================
  // Handle Input Change
  // ==========================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================
  // Load Job Cards
  // ==========================

  const fetchJobCards = async () => {
    try {
      const res = await api.get("/job-cards");

      setJobCards(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================
  // Load QC for Edit
  // ==========================

  const fetchQualityCheck = async () => {
    if (!id) return;

    try {
      setLoading(true);

      const res = await api.get(`/quality-checks/${id}`);

      const qc = res.data.data;

      setFormData({
        jobCardId: qc.jobCardId,
        inspectorName: qc.inspectorName,
        qualityStatus: qc.qualityStatus,
        defects: qc.defects || "",
        remarks: qc.remarks || "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to load Quality Check");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobCards();

    if (id) {
      fetchQualityCheck();
    }
  }, [id]);

  // ==========================
  // Submit
  // ==========================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (id) {
        await api.put(
          `/quality-checks/${id}`,
          formData
        );

        alert("Quality Check Updated Successfully");
      } else {
        await api.post(
          "/quality-checks",
          formData
        );

        alert("Quality Check Created Successfully");
      }

      router.push(
        "/manufacturing-manager/quality-check"
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
      className="rounded-2xl border border-border-theme bg-background-secondary p-8"
    >
      <h2 className="mb-8 text-2xl font-bold text-text-primary">
        {id ? "Update Quality Check" : "Add Quality Check"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Job Card */}

        <div>
          <label className="mb-2 block text-sm text-text-secondary">
            Job Card
          </label>

          <select
            name="jobCardId"
            value={formData.jobCardId}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
            required
          >
            <option value="">Select Job Card</option>

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

        {/* Inspector */}

        <div>
          <label className="mb-2 block text-sm text-text-secondary">
            Inspector
          </label>

          <input
            type="text"
            name="inspectorName"
            value={formData.inspectorName}
            onChange={handleChange}
            placeholder="Inspector Name"
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
            required
          />
        </div>

        {/* QC Status */}

        <div>
          <label className="mb-2 block text-sm text-text-secondary">
            QC Status
          </label>

          <select
            name="qualityStatus"
            value={formData.qualityStatus}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          >
            <option value="Pending">Pending</option>
            <option value="Passed">Passed</option>
            <option value="Failed">Failed</option>
            <option value="Rework">Rework</option>
          </select>
        </div>

        {/* Defects */}

        <div>
          <label className="mb-2 block text-sm text-text-secondary">
            Defects
          </label>

          <input
            type="text"
            name="defects"
            value={formData.defects}
            onChange={handleChange}
            placeholder="Defects"
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          />
        </div>

        {/* Remarks */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-text-secondary">
            Remarks
          </label>

          <textarea
            rows={5}
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Inspection remarks..."
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          />
        </div>

      </div>

      <div className="mt-8 flex justify-end gap-3">

        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl border border-border-theme px-6 py-3 text-text-primary hover:border-[#D4AF37]"
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
            ? "Update QC"
            : "Save QC"}
        </button>

      </div>

    </form>
  );
}