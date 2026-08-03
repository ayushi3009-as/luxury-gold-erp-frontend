"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

interface Props {
  id: string;
}

interface JobCard {
  id: string;
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
  startDate: string | null;
  dueDate: string | null;
  createdAt: string;

  createdBy: {
    fullName: string;
    email: string;
  };
}

export default function JobCardDetails({ id }: Props) {
  const [jobCard, setJobCard] = useState<JobCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobCard();
  }, [id]);

  const fetchJobCard = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/job-cards/${id}`);

      setJobCard(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 text-white">
        Loading...
      </div>
    );
  }

  if (!jobCard) {
    return (
      <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 text-red-500">
        Job Card Not Found
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Job Card Details
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <Info title="Job Card Number" value={jobCard.jobCardNumber} />

        <Info title="Product" value={jobCard.productName} />

        <Info title="Design Number" value={jobCard.designNumber} />

        <Info title="Category" value={jobCard.category} />

        <Info title="Purity" value={jobCard.purity} />

        <Info
          title="Gross Weight"
          value={`${jobCard.grossWeight} gm`}
        />

        <Info
          title="Net Weight"
          value={`${jobCard.netWeight} gm`}
        />

        <Info
          title="Quantity"
          value={jobCard.quantity.toString()}
        />

        <Info title="Priority" value={jobCard.priority} />

        <Info title="Status" value={jobCard.status} />

        <Info
          title="Created By"
          value={jobCard.createdBy.fullName}
        />

        <Info title="Email" value={jobCard.createdBy.email} />

        <Info
          title="Remarks"
          value={jobCard.remarks || "-"}
        />

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>

      <p className="mb-1 text-sm text-gray-400">
        {title}
      </p>

      <p className="rounded-lg bg-[#1A1A1A] p-3 text-white">
        {value}
      </p>

    </div>
  );
}