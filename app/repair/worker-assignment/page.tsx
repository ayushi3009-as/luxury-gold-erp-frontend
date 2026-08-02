"use client";

import { Users, Plus } from "lucide-react";

export default function WorkerAssignmentPage() {
  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-5%] left-[50%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent flex items-center gap-3">
              <Users size={28} className="text-emerald-400" />
              Worker Assignment
            </h1>
            <p className="mt-1 text-sm text-text-secondary">Assign pending repairs to specific karigars/workers.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border-theme bg-[#111111]/40 backdrop-blur-xl p-12 shadow-2xl flex flex-col items-center justify-center text-center">
          <Users size={64} className="text-text-primary/10 mb-4" />
          <h2 className="text-xl font-bold text-text-primary mb-2">Worker Module Coming Soon</h2>
          <p className="text-text-secondary max-w-md">
            The advanced worker tracking and assignment module is currently being provisioned. 
          </p>
        </div>
      </div>
    </div>
  );
}