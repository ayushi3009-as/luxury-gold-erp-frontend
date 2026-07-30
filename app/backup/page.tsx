"use client";

import { Database, Download, Upload, ShieldAlert, History, Clock } from "lucide-react";

export default function BackupRestore() {
  return (
    <main className="p-8 text-text-primary min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <Database size={32} />
            Backup & Restore
          </h1>
          <p className="text-text-secondary mt-1">Manage database backups and system restoration.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Backup Section */}
        <div className="bg-background-secondary border border-border-theme rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-theme">
            <div className="p-4 bg-background-tertiary rounded-full text-accent-gold">
              <Download size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Create Backup</h2>
              <p className="text-text-secondary text-sm mt-1">Generate a full database snapshot</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center bg-background-tertiary p-4 rounded-lg border border-border-theme">
              <span className="text-text-secondary">Estimated Size</span>
              <span className="font-semibold text-text-primary">450 MB</span>
            </div>
            <div className="flex justify-between items-center bg-background-tertiary p-4 rounded-lg border border-border-theme">
              <span className="text-text-secondary">Last Backup</span>
              <span className="font-semibold text-green-400">Today, 02:00 AM</span>
            </div>
          </div>
          
          <button className="w-full bg-accent-gold text-black font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-gold transition">
            <Download size={24} />
            Generate Full Backup
          </button>
        </div>

        {/* Restore Section */}
        <div className="bg-background-secondary border border-border-theme rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-theme">
            <div className="p-4 bg-background-tertiary rounded-full text-accent-gold">
              <Upload size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Restore System</h2>
              <p className="text-text-secondary text-sm mt-1">Restore from a previous backup file</p>
            </div>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8 flex items-start gap-3">
            <ShieldAlert className="text-red-400 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-red-200">
              <strong className="block text-red-400 mb-1">Warning!</strong>
              Restoring a backup will overwrite all current data. Make sure to download a fresh backup before proceeding.
            </p>
          </div>
          
          <button className="w-full bg-background-tertiary text-accent-gold border border-border-theme font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-background-tertiary transition">
            <Upload size={24} />
            Upload Backup File
          </button>
        </div>
      </div>
    </main>
  );
}
