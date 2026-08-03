"use client";

import { useEffect, useState } from "react";
import { FileText, Search, Filter, Download, Loader2, RefreshCw } from "lucide-react";

export default function AuditLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchLogs() {
    setIsLoading(true);
    try {
      const res = await fetch("/api/audit-logs");
      if (res.status === 401) { console.warn("Unauthorized fetch"); }
      if (res.ok) {
        const data = await res.json();
        setLogs(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-background-primary text-text-primary">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary flex items-center gap-3">
            <FileText className="text-accent-gold" size={32} />
            Audit Logs
          </h1>
          <p className="text-text-secondary mt-1">Track all system activities and user actions.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={fetchLogs}
            className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold hover:bg-[#2a2414] transition-colors"
          >
            <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-xl min-h-[400px] relative">
        <div className="p-6 border-b border-border-theme flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search logs..." 
              className="w-full bg-background-tertiary border border-border-theme rounded-md py-2 pl-10 pr-4 text-sm text-text-primary focus:outline-none focus:border-border-theme"
            />
          </div>
          <button className="flex items-center gap-2 bg-background-tertiary text-text-secondary border border-border-theme px-4 py-2 rounded-md text-sm hover:text-accent-gold">
            <Filter size={16} />
            Filter
          </button>
        </div>
        
        {isLoading ? (
          <div className="absolute inset-0 top-[80px] flex items-center justify-center">
            <Loader2 className="animate-spin text-accent-gold" size={32} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-background-secondary text-text-secondary text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Log ID</th>
                  <th className="px-6 py-4">Module</th>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Action Details</th>
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2b2617] text-sm">
                {logs.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-text-secondary">
                      No system logs found.
                    </td>
                  </tr>
                )}
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-black/5 transition-colors">
                    <td className="px-6 py-4 text-accent-gold font-medium truncate max-w-[120px]" title={log.id}>
                      {log.id.split('-')[0]}...
                    </td>
                    <td className="px-6 py-4 text-text-primary capitalize">{log.module}</td>
                    <td className="px-6 py-4 text-text-primary">{log.user?.fullName || log.user?.email || "System"}</td>
                    <td className="px-6 py-4 text-text-secondary">{log.description}</td>
                    <td className="px-6 py-4 text-text-secondary">
                      {new Date(log.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                        Success
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
