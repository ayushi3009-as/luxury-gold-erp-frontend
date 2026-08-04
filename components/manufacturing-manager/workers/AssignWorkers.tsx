"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AssignWorkers() {
  const [workers, setWorkers] = useState<any[]>([]);
  const [jobCards, setJobCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    workerId: "",
    jobCardId: "",
    assignedDate: "",
    status: "Assigned",
    remarks: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [workersRes, jobsRes] = await Promise.all([
        api.get("/workers"),
        api.get("/job-cards")
      ]);
      setWorkers(workersRes.data.data || []);
      setJobCards(jobsRes.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workerId || !formData.jobCardId) {
      alert("Please select both a Worker and a Job Card.");
      return;
    }

    try {
      setLoading(true);
      await api.post("/worker-assignments", formData);
      alert("Worker assigned successfully!");
      setFormData({
        workerId: "",
        jobCardId: "",
        assignedDate: "",
        status: "Assigned",
        remarks: "",
      });
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="mb-6 text-2xl font-bold text-text-primary">
        Assign Worker
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Worker */}
        <div>
          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Select Worker
          </label>
          <select 
            name="workerId"
            value={formData.workerId}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          >
            <option value="">Select Worker</option>
            {workers.map((w) => (
              <option key={w.id} value={w.id}>{w.fullName}</option>
            ))}
          </select>
        </div>

        {/* Job Card */}
        <div>
          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Job Card
          </label>
          <select 
            name="jobCardId"
            value={formData.jobCardId}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          >
            <option value="">Select Job Card</option>
            {jobCards.map((jc) => (
              <option key={jc.id} value={jc.id}>{jc.jobCardNumber} - {jc.productName}</option>
            ))}
          </select>
        </div>

        {/* Start Date */}
        <div>
          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Start Date
          </label>
          <input
            type="date"
            name="assignedDate"
            value={formData.assignedDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          />
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Status
          </label>
          <select 
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          >
            <option value="Assigned">Assigned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Remarks */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Remarks
          </label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          />
        </div>

      </div>

      <div className="mt-8 flex justify-end gap-3">
        <button type="button" onClick={() => window.location.reload()} className="rounded-xl border border-border-theme px-6 py-3 text-text-primary hover:border-[#D4AF37]">
          Cancel
        </button>
        <button type="submit" disabled={loading} className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:bg-[#E6C458] disabled:opacity-50">
          {loading ? "Assigning..." : "Assign Worker"}
        </button>
      </div>

    </form>
  );
}