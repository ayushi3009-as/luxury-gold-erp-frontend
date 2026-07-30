"use client";

import { ClipboardList } from "lucide-react";

export default function TrackingPage() {
  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-5%] left-[50%] w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent flex items-center gap-3">
              <ClipboardList size={28} className="text-violet-400" />
              Advanced Tracking
            </h1>
            <p className="mt-1 text-sm text-text-secondary">Detailed step-by-step audit log of every repair job.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-[#111111]/40 backdrop-blur-xl p-12 shadow-2xl flex flex-col items-center justify-center text-center">
          <ClipboardList size={64} className="text-white/10 mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Tracking Module Coming Soon</h2>
          <p className="text-text-secondary max-w-md">
            The advanced GPS and audit tracking system for high-value repairs is currently being provisioned. For basic status updates, please use the <b>Repair Status</b> tab.
          </p>
        </div>
      </div>
    </div>
  );
}