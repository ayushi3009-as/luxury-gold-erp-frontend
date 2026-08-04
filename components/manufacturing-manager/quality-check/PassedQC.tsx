"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";
import { CheckCircle2, Eye, Pencil, Trash2 } from "lucide-react";

interface QualityCheck {
  id: string;
  jobCardId: string;
  inspectorName: string;
  qualityStatus: string;
  inspectionDate: string;
  jobCard?: {
    id: string;
    productName?: string;
  };
}

export default function PassedQC() {

  const [loading, setLoading] = useState(true);

  const [qualityChecks, setQualityChecks] =
    useState<QualityCheck[]>([]);

  useEffect(() => {
    fetchQualityChecks();
  }, []);

  const fetchQualityChecks = async () => {

    try {

      setLoading(true);

      const response =
        await api.get("/quality-checks");

      setQualityChecks(response.data.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load Quality Checks");

    } finally {

      setLoading(false);

    }

  };

  
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Delete Quality Check?");
    if (!confirmDelete) return;
    try {
      await api.delete(`/quality-checks/${id}`);
      alert("Quality Check Deleted Successfully");
      fetchQualityChecks();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };
const passedQC =
    qualityChecks.filter(
      (item) => item.qualityStatus === "Passed"
    );

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary">

  <div className="flex items-center justify-between border-b border-border-theme p-6">

    <h2 className="text-xl font-semibold text-text-primary">
      Passed Quality Checks
    </h2>

    <div className="flex items-center gap-2 text-green-400">

      <CheckCircle2 size={20} />

      <span>{passedQC.length} Passed</span>

    </div>

  </div>

  <div className="overflow-x-auto">

    <table className="min-w-full">

      <thead className="bg-[#181818]">

        <tr>

          <th className="px-6 py-4 text-left text-text-secondary">
            Job Card
          </th>

          <th className="px-6 py-4 text-left text-text-secondary">
            Product
          </th>

          <th className="px-6 py-4 text-left text-text-secondary">
            Inspector
          </th>

          <th className="px-6 py-4 text-left text-text-secondary">
            Inspection Date
          </th>

          <th className="px-6 py-4 text-left text-text-secondary">
            Status
          </th>
          <th className="px-6 py-4 text-center text-text-secondary">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {loading ? (

          <tr>

            <td
              colSpan={5}
              className="py-10 text-center text-text-secondary"
            >
              Loading Quality Checks...
            </td>

          </tr>

        ) : passedQC.length === 0 ? (

          <tr>

            <td
              colSpan={5}
              className="py-10 text-center text-text-secondary"
            >
              No Passed Quality Checks Found
            </td>

          </tr>

        ) : (

          passedQC.map((item) => (

            <tr
              key={item.id}
              className="border-t border-border-theme hover:bg-background-tertiary"
            >

              <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                {item.jobCardId}
              </td>

              <td className="px-6 py-4 text-text-primary">
                {item.jobCard?.productName || "-"}
              </td>

              <td className="px-6 py-4 text-text-primary">
                {item.inspectorName}
              </td>

              <td className="px-6 py-4 text-text-secondary">
                {new Date(
                  item.inspectionDate
                ).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">

                <span className="rounded-lg bg-green-500/20 px-3 py-1 text-green-400">
                  Passed
                </span>

              </td>

            
              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <Link
                    href={`/manufacturing-manager/quality-check?tab=details&id=${item.id}`}
                    className="rounded-lg bg-background-tertiary p-2 text-blue-400 hover:bg-blue-500 hover:text-text-primary"
                  >
                    <Eye size={18} />
                  </Link>
                  <Link
                    href={`/manufacturing-manager/quality-check?tab=edit&id=${item.id}`}
                    className="rounded-lg bg-background-tertiary p-2 text-yellow-400 hover:bg-yellow-500 hover:text-text-primary"
                  >
                    <Pencil size={18} />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg bg-background-tertiary p-2 text-red-400 hover:bg-red-500 hover:text-text-primary"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
</tr>

          ))

        )}

      </tbody>

    </table>

  </div>

</div>

  );
}