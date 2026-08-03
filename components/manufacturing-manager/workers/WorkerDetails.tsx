"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "@/lib/api";

import {
  User,
  Phone,
  Mail,
  Briefcase,
  Award,
  IndianRupee,
  BadgeCheck,
  IdCard,
} from "lucide-react";

interface Worker {
  id: string;
  employeeId: string;
  fullName: string;
  phone: string;
  email?: string;
  specialization?: string;
  experience?: number;
  salary?: number;
  status: string;
}

export default function WorkerDetails() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [loading, setLoading] = useState(true);

  const [worker, setWorker] =
    useState<Worker | null>(null);

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

      setWorker(response.data.data);
    } catch (error) {
      console.error(error);

      alert("Failed to load Worker");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-white">
        Loading...
      </div>
    );
  }

  if (!worker) {
    return (
      <div className="p-10 text-center text-red-400">
        Worker Not Found
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Worker Details
          </h2>

          <p className="mt-2 text-gray-400">
            Complete Worker Information
          </p>

        </div>

        <span
          className={`rounded-xl px-4 py-2 font-semibold ${
            worker.status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {worker.status}
        </span>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <Card
          icon={<IdCard className="text-[#D4AF37]" />}
          title="Employee ID"
          value={worker.employeeId}
        />

        <Card
          icon={<User className="text-[#D4AF37]" />}
          title="Full Name"
          value={worker.fullName}
        />

        <Card
          icon={<Phone className="text-[#D4AF37]" />}
          title="Phone"
          value={worker.phone}
        />

        <Card
          icon={<Mail className="text-[#D4AF37]" />}
          title="Email"
          value={worker.email || "-"}
        />

        <Card
          icon={<Briefcase className="text-[#D4AF37]" />}
          title="Specialization"
          value={worker.specialization || "-"}
        />

        <Card
          icon={<Award className="text-[#D4AF37]" />}
          title="Experience"
          value={`${worker.experience ?? 0} Years`}
        />

        <Card
          icon={<IndianRupee className="text-[#D4AF37]" />}
          title="Salary"
          value={
            worker.salary
              ? `₹ ${worker.salary}`
              : "-"
          }
        />

        <Card
          icon={<BadgeCheck className="text-[#D4AF37]" />}
          title="Status"
          value={worker.status}
        />

      </div>

    </div>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

      <div className="mb-3">
        {icon}
      </div>

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        {value}
      </h3>

    </div>
  );
}