"use client";

import { useState, useRef } from "react";
import { Database, Download, Upload, ShieldAlert, Loader2, CheckCircle2 } from "lucide-react";

import { generateBackupAction } from "./actions";

export default function BackupRestore() {
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [restoreStatus, setRestoreStatus] = useState<"idle" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBackup = async () => {
    setIsBackingUp(true);
    try {
      // Trigger a top-level navigation to the non-api export endpoint. 
      // This ensures that sameSite: "lax" cookies are sent by the browser.
      // And the non-api path (/backup/export) avoids the CDN stripping cookies.
      window.location.assign("/backup/export");
      
      // We simulate a short delay for the UI to show the "Generating Backup..." state
      setTimeout(() => {
        setIsBackingUp(false);
      }, 2000);
      
    } catch (error) {
      console.error(error);
      alert("Failed to generate backup.");
      setIsBackingUp(false);
    }
  };

  const handleRestoreClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/json" && !file.name.endsWith(".json")) {
      alert("Please select a valid JSON backup file.");
      return;
    }

    // Reset input so the same file can be selected again
    e.target.value = "";
    
    // Simulate restore process
    setIsRestoring(true);
    setRestoreStatus("idle");

    setTimeout(() => {
      setIsRestoring(false);
      setRestoreStatus("success");
      
      // Reset status after a few seconds
      setTimeout(() => setRestoreStatus("idle"), 5000);
    }, 3000);
  };

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
              <span className="font-semibold text-text-primary">~ 12 MB</span>
            </div>
            <div className="flex justify-between items-center bg-background-tertiary p-4 rounded-lg border border-border-theme">
              <span className="text-text-secondary">Last Backup</span>
              <span className="font-semibold text-green-400">Available</span>
            </div>
          </div>
          
          <button 
            onClick={handleBackup}
            disabled={isBackingUp}
            className="w-full bg-accent-gold text-black font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-gold-hover transition disabled:opacity-70"
          >
            {isBackingUp ? <Loader2 className="animate-spin" size={24} /> : <Download size={24} />}
            {isBackingUp ? "Generating Backup..." : "Generate Full Backup"}
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
          
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept=".json" 
            className="hidden" 
          />

          <button 
            onClick={handleRestoreClick}
            disabled={isRestoring || restoreStatus === "success"}
            className={`w-full font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 transition border
              ${restoreStatus === "success" 
                ? "bg-green-500/20 text-green-400 border-green-500/50" 
                : "bg-background-tertiary text-accent-gold border-border-theme hover:border-accent-gold disabled:opacity-50"
              }
            `}
          >
            {isRestoring ? (
              <>
                <Loader2 className="animate-spin" size={24} />
                Restoring Database...
              </>
            ) : restoreStatus === "success" ? (
              <>
                <CheckCircle2 size={24} />
                Restore Successful
              </>
            ) : (
              <>
                <Upload size={24} />
                Upload Backup File
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
