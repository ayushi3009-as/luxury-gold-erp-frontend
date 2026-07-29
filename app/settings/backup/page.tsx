"use client";

import {
  DatabaseBackup,
  Download,
  Upload,
  Save,
  Clock,
} from "lucide-react";

export default function BackupPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Backup
        </h1>

        <p className="text-gray-400 mt-2">
          Create and restore your ERP database backups.
        </p>

      </div>

      {/* Main Card */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-8">

          <div className="bg-yellow-500/20 p-4 rounded-xl">

            <DatabaseBackup
              size={32}
              className="text-yellow-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              Database Backup
            </h2>

            <p className="text-gray-400">
              Protect your company data with regular backups.
            </p>

          </div>

        </div>

        {/* Status */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-[#0F172A] rounded-xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              Last Backup
            </p>

            <div className="flex items-center gap-2 mt-3">

              <Clock
                size={18}
                className="text-yellow-400"
              />

              <span className="font-semibold">
                Today - 10:30 AM
              </span>

            </div>

          </div>

          <div className="bg-[#0F172A] rounded-xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              Backup Size
            </p>

            <h3 className="text-2xl font-bold mt-2">
              245 MB
            </h3>

          </div>

          <div className="bg-[#0F172A] rounded-xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              Auto Backup
            </p>

            <h3 className="text-green-400 text-xl font-semibold mt-2">
              Enabled
            </h3>

          </div>

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <button className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 rounded-xl">

            <Download size={20} />

            Create Backup

          </button>

          <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl">

            <Upload size={20} />

            Restore Backup

          </button>

          <button className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 py-4 rounded-xl">

            <Save size={20} />

            Save Settings

          </button>

        </div>

      </div>

    </div>
  );
}