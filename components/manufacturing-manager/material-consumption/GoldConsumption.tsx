"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Eye, Pencil, Trash2 } from "lucide-react";
import api from "@/lib/api";

interface ConsumptionRecord {
  id: string;
  jobCardId: string;

  materialName: string;
  requiredQuantity: number;
  issuedQuantity: number;
  consumedQuantity: number;
  remainingQuantity: number;
  unit: string;
  remarks?: string;

  jobCard?: {
    id: string;
    jobCardNumber: string;
  };
}

export default function GoldConsumption() {

  const [records, setRecords] = useState<ConsumptionRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch Material Consumption
  const fetchRecords = async () => {
    try {

      setLoading(true);

      const response = await api.get("/material-consumptions");

      setRecords(response.data.data || response.data);

    } catch (error) {

      console.error("Failed to fetch material consumption:", error);

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    fetchRecords();
  }, []);


  // Delete Consumption
  const handleDelete = async (id: string) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (!confirmDelete) return;


    try {

      await api.delete(`/material-consumptions/${id}`);

      alert("Deleted successfully");

      fetchRecords();

    } catch (error) {

      console.error("Delete failed:", error);

      alert("Delete failed");

    }

  };


 const filteredRecords = records.filter((item) =>
  item.jobCard?.jobCardNumber
    ?.toLowerCase()
    .includes(search.toLowerCase())
);


  return (

    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">


      <div className="flex flex-col gap-4 border-b border-[#2A2A2A] p-6 md:flex-row md:items-center md:justify-between">


        <h2 className="text-xl font-semibold text-white">
          Gold Consumption
        </h2>


        <div className="relative w-full md:w-80">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />


          <input

            type="text"

            placeholder="Search..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] py-3 pl-10 pr-4 text-white outline-none focus:border-[#D4AF37]"

          />

        </div>


      </div>



      <div className="overflow-x-auto">


        <table className="min-w-full">


          <thead className="bg-[#181818]">

            <tr>

              <th className="px-6 py-4 text-left text-gray-300">
                ID
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Job Card
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Worker
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Issued
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Consumed
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Balance
              </th>

              <th className="px-6 py-4 text-center text-gray-300">
                Actions
              </th>

            </tr>

          </thead>



          <tbody>


            {loading ? (

              <tr>

                <td
                  colSpan={7}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  Loading...
                </td>

              </tr>


            ) : filteredRecords.length === 0 ? (


              <tr>

                <td
                  colSpan={7}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  No records found
                </td>

              </tr>


            ) : (


              filteredRecords.map((item)=>(


                <tr
                  key={item.id}
                  className="border-t border-[#2A2A2A] hover:bg-[#1A1A1A]"
                >


                  <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                    {item.id}
                  </td>


                  <td className="px-6 py-4 text-white">
                    {item.jobCard?.jobCardNumber || "-"}
                  </td>


                  <td className="px-6 py-4 text-white">
                    {item.materialName}
                  </td>


                  <td className="px-6 py-4 text-blue-400">
                    {item.issuedQuantity}
                  </td>


                  <td className="px-6 py-4 text-green-400">
                    {item.consumedQuantity}
                  </td>


                  <td className="px-6 py-4 text-yellow-400">
                    {item.remainingQuantity}
                  </td>


                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-2">


                      <Link

                        href={`/manufacturing-manager/material-consumption?tab=details&id=${item.id}`}

                        className="rounded-lg bg-[#1A1A1A] p-2 text-blue-400 hover:bg-blue-500 hover:text-white"

                      >
                        <Eye size={18}/>
                      </Link>



                      <Link

                        href={`/manufacturing-manager/material-consumption?tab=edit&id=${item.id}`}

                        className="rounded-lg bg-[#1A1A1A] p-2 text-yellow-400 hover:bg-yellow-500 hover:text-white"

                      >
                        <Pencil size={18}/>
                      </Link>



                      <button

                        onClick={()=>handleDelete(item.id)}

                        className="rounded-lg bg-[#1A1A1A] p-2 text-red-400 hover:bg-red-500 hover:text-white"

                      >
                        <Trash2 size={18}/>
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