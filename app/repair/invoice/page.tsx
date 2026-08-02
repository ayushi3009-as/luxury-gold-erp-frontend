"use client";

import { Receipt, BarChart3, Bell } from "lucide-react";

export default function InvoicePage() {
  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-5%] left-[50%] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent flex items-center gap-3">
              <Receipt size={28} className="text-orange-400" />
              Repair Invoices
            </h1>
            <p className="mt-1 text-sm text-text-secondary">Generate and print customer invoices for completed repairs.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border-theme bg-[#111111]/40 backdrop-blur-xl p-12 shadow-2xl flex flex-col items-center justify-center text-center">
          <Receipt size={64} className="text-text-primary/10 mb-4" />
          <h2 className="text-xl font-bold text-text-primary mb-2">Invoice Module Coming Soon</h2>
          <p className="text-text-secondary max-w-md">
            The Repair Invoicing feature is currently being provisioned.
          </p>
        </div>
      </div>
    </div>
  );
}