"use client";

import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-5%] left-[50%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent flex items-center gap-3">
              <BarChart3 size={28} className="text-cyan-400" />
              Repair Reports
            </h1>
            <p className="mt-1 text-sm text-text-secondary">View detailed analytics on your repair operations.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border-theme bg-[#111111]/40 backdrop-blur-xl p-12 shadow-2xl flex flex-col items-center justify-center text-center">
          <BarChart3 size={64} className="text-text-primary/10 mb-4" />
          <h2 className="text-xl font-bold text-text-primary mb-2">Reports Module Coming Soon</h2>
          <p className="text-text-secondary max-w-md">
            The Repair Reports and Analytics dashboard is currently being provisioned.
          </p>
        </div>
      </div>
    </div>
  );
}