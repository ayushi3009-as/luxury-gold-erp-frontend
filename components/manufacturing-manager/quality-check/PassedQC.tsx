"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { CheckCircle2 } from "lucide-react";

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

  const passedQC =
    qualityChecks.filter(
      (item) => item.qualityStatus === "Passed"
    );

  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">

  <div className="flex items-center justify-between border-b border-[#2A2A2A] p-6">

    <h2 className="text-xl font-semibold text-white">
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

          <th className="px-6 py-4 text-left text-gray-300">
            Job Card
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Product
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Inspector
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Inspection Date
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Status
          </th>

        </tr>

      </thead>

      <tbody>

        {loading ? (

          <tr>

            <td
              colSpan={5}
              className="py-10 text-center text-gray-400"
            >
              Loading Quality Checks...
            </td>

          </tr>

        ) : passedQC.length === 0 ? (

          <tr>

            <td
              colSpan={5}
              className="py-10 text-center text-gray-400"
            >
              No Passed Quality Checks Found
            </td>

          </tr>

        ) : (

          passedQC.map((item) => (

            <tr
              key={item.id}
              className="border-t border-[#2A2A2A] hover:bg-[#1A1A1A]"
            >

              <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                {item.jobCardId}
              </td>

              <td className="px-6 py-4 text-white">
                {item.jobCard?.productName || "-"}
              </td>

              <td className="px-6 py-4 text-white">
                {item.inspectorName}
              </td>

              <td className="px-6 py-4 text-gray-300">
                {new Date(
                  item.inspectionDate
                ).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">

                <span className="rounded-lg bg-green-500/20 px-3 py-1 text-green-400">
                  Passed
                </span>

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