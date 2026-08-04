const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components/manufacturing-manager/material-consumption');

const templates = [
  { file: 'GoldConsumption.tsx', title: 'Gold Consumption', icon: 'Coins', filter: 'Gold', color: 'yellow' },
  { file: 'SilverConsumption.tsx', title: 'Silver Consumption', icon: 'Coins', filter: 'Silver', color: 'gray' },
  { file: 'DiamondConsumption.tsx', title: 'Diamond Consumption', icon: 'Gem', filter: 'Diamond', color: 'blue' },
  { file: 'StoneConsumption.tsx', title: 'Stone Consumption', icon: 'Diamond', filter: 'Stone', color: 'purple' },
];

for (const t of templates) {
  const content = `"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Eye, Pencil, Trash2, ${t.icon} } from "lucide-react";
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
    assignments?: { worker?: { fullName: string } }[];
  };
}

export default function ${t.file.replace('.tsx', '')}() {
  const [records, setRecords] = useState<ConsumptionRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const response = await api.get("/material-consumptions");
      const data = response.data.data || response.data;
      // Filter by material name containing "${t.filter}" (case insensitive)
      const filtered = data.filter((d: any) => d.materialName?.toLowerCase().includes("${t.filter.toLowerCase()}"));
      setRecords(filtered);
    } catch (error) {
      console.error("Failed to fetch material consumption:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (!confirmDelete) return;
    try {
      await api.delete(\`/material-consumptions/\${id}\`);
      alert("Deleted successfully");
      fetchRecords();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed");
    }
  };

  const filteredRecords = records.filter((item) =>
    item.jobCard?.jobCardNumber?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary">
      <div className="flex flex-col gap-4 border-b border-border-theme p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-text-primary">${t.title}</h2>
          <${t.icon} className="text-[#D4AF37]" size={20} />
        </div>
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search Job Card..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border-theme bg-background-primary py-3 pl-10 pr-4 text-text-primary outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#181818]">
            <tr>
              <th className="px-6 py-4 text-left text-text-secondary">ID</th>
              <th className="px-6 py-4 text-left text-text-secondary">Job Card</th>
              <th className="px-6 py-4 text-left text-text-secondary">Worker</th>
              <th className="px-6 py-4 text-left text-text-secondary">Material</th>
              <th className="px-6 py-4 text-left text-text-secondary">Issued</th>
              <th className="px-6 py-4 text-left text-text-secondary">Consumed</th>
              <th className="px-6 py-4 text-left text-text-secondary">Balance</th>
              <th className="px-6 py-4 text-center text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="px-6 py-10 text-center text-text-secondary">Loading...</td>
              </tr>
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-10 text-center text-text-secondary">No records found</td>
              </tr>
            ) : (
              filteredRecords.map((item) => (
                <tr key={item.id} className="border-t border-border-theme hover:bg-background-tertiary">
                  <td className="px-6 py-4 font-semibold text-[#D4AF37]">{item.id.slice(0,8).toUpperCase()}</td>
                  <td className="px-6 py-4 text-text-primary">{item.jobCard?.jobCardNumber || "-"}</td>
                  <td className="px-6 py-4 text-text-primary">{item.jobCard?.assignments?.[0]?.worker?.fullName || "-"}</td>
                  <td className="px-6 py-4 text-text-primary">{item.materialName}</td>
                  <td className="px-6 py-4 text-blue-400">{item.issuedQuantity} {item.unit}</td>
                  <td className="px-6 py-4 text-green-400">{item.consumedQuantity} {item.unit}</td>
                  <td className="px-6 py-4 text-yellow-400">{item.remainingQuantity} {item.unit}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <Link href={\`/manufacturing-manager/material-consumption?tab=details&id=\${item.id}\`} className="rounded-lg bg-background-tertiary p-2 text-blue-400 hover:bg-blue-500 hover:text-text-primary"><Eye size={18} /></Link>
                      <Link href={\`/manufacturing-manager/material-consumption?tab=edit&id=\${item.id}\`} className="rounded-lg bg-background-tertiary p-2 text-yellow-400 hover:bg-yellow-500 hover:text-text-primary"><Pencil size={18} /></Link>
                      <button onClick={() => handleDelete(item.id)} className="rounded-lg bg-background-tertiary p-2 text-red-400 hover:bg-red-500 hover:text-text-primary"><Trash2 size={18} /></button>
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
`;
  fs.writeFileSync(path.join(dir, t.file), content, 'utf8');
}
console.log('Material consumption pages regenerated successfully!');
