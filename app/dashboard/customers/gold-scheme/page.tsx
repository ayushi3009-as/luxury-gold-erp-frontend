"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { goldSchemes, GoldSchemeRecord } from "@/app/components/customer-data";
import { Plus } from "lucide-react";

export default function GoldSavingSchemePage() {
  const [schemes, setSchemes] = useState<GoldSchemeRecord[]>(goldSchemes);
  const [showModal, setShowModal] = useState(false);

  const [newScheme, setNewScheme] = useState({
    customerName: "",
    schemeName: "Luxray Swarna Bachat 11+1",
    monthlyInstallment: "5000",
  });

  const handleCreateScheme = (e: React.FormEvent) => {
    e.preventDefault();
    const created: GoldSchemeRecord = {
      id: `SCH-00${schemes.length + 1}`,
      customerId: Date.now(),
      customerName: newScheme.customerName || "Walk-in Customer",
      schemeName: newScheme.schemeName,
      monthlyInstallment: Number(newScheme.monthlyInstallment) || 5000,
      paidInstallments: 1,
      totalInstallments: 11,
      accumulatedWeight: 0.8,
      startDate: new Date().toISOString().split("T")[0],
      maturityDate: "2027-06-01",
      status: "Active",
    };
    setSchemes([created, ...schemes]);
    setShowModal(false);
  };

  return (
    <div className="text-white max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Gold Saving Scheme (11+1)
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Module 3 / Page 6: Monthly Gold Installment Scheme Management
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#D4AF37] text-black rounded-xl px-6 py-3.5 font-semibold flex items-center gap-2 hover:bg-yellow-400 transition cursor-pointer shadow-lg shadow-amber-500/10"
        >
          <Plus size={20} />
          Enroll New Scheme
        </button>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Scheme Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {schemes.map((s) => {
          const progressPercent = Math.round((s.paidInstallments / s.totalInstallments) * 100);

          return (
            <div
              key={s.id}
              className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#D4AF37] transition shadow-lg relative"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] font-semibold">{s.id}</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{s.customerName}</h3>
                  <p className="text-xs text-gray-400">{s.schemeName}</p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    s.status === "Active"
                      ? "bg-green-900/50 text-green-400 border border-green-700/50"
                      : s.status === "Matured"
                      ? "bg-amber-900/50 text-amber-300 border border-amber-700/50"
                      : "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                  }`}
                >
                  {s.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs text-gray-300 font-medium">
                  <span>Installments Paid</span>
                  <span>
                    {s.paidInstallments} of {s.totalInstallments} Months ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full bg-[#101010] h-3 rounded-full overflow-hidden border border-[#2C2C2C]">
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Stat Row */}
              <div className="grid grid-cols-3 gap-2 bg-[#101010] p-4 rounded-xl border border-[#2C2C2C] text-xs">
                <div>
                  <span className="text-gray-400 block">Monthly Pay</span>
                  <span className="text-white font-bold font-mono text-sm">
                    ₹{s.monthlyInstallment.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block">Accumulated</span>
                  <span className="text-[#D4AF37] font-bold font-mono text-sm">
                    {s.accumulatedWeight} g
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block">Maturity Date</span>
                  <span className="text-gray-300 font-medium">{s.maturityDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enrolment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#171717] border border-[#2C2C2C] text-white rounded-2xl w-full max-w-md p-6 relative">
            <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Enroll Customer in Gold Scheme</h3>
            <form onSubmit={handleCreateScheme} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Customer Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunita Devi"
                  value={newScheme.customerName}
                  onChange={(e) => setNewScheme({ ...newScheme, customerName: e.target.value })}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-white rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Scheme Package</label>
                <select
                  value={newScheme.schemeName}
                  onChange={(e) => setNewScheme({ ...newScheme, schemeName: e.target.value })}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-white rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                >
                  <option value="Luxray Swarna Bachat 11+1">Luxray Swarna Bachat 11+1 (1 Bonus Month)</option>
                  <option value="Dhanraksha Diamond Plan">Dhanraksha Diamond Savings (11 Months)</option>
                  <option value="Silver Micro Savings 6M">Silver Micro Savings (6 Months)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Monthly Installment Amount (₹)</label>
                <input
                  type="number"
                  required
                  value={newScheme.monthlyInstallment}
                  onChange={(e) => setNewScheme({ ...newScheme, monthlyInstallment: e.target.value })}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-white rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#2C2C2C]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-1/2 bg-[#222] hover:bg-[#333] text-gray-300 py-3 rounded-xl font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#D4AF37] hover:bg-yellow-400 text-black py-3 rounded-xl font-semibold transition"
                >
                  Create Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
