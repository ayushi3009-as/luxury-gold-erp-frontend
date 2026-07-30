"use client";

import { FileText, Search, Filter, Download } from "lucide-react";

export default function AuditLogs() {
  const logs = [
    { id: "LOG-001", user: "Admin", action: "Updated Settings", timestamp: "2026-07-29 10:15 AM", status: "Success" },
    { id: "LOG-002", user: "Priya Patel", action: "Created Invoice #INV-892", timestamp: "2026-07-29 11:30 AM", status: "Success" },
    { id: "LOG-003", user: "Rajesh Kumar", action: "Deleted Product SKU-109", timestamp: "2026-07-29 12:45 PM", status: "Warning" },
    { id: "LOG-004", user: "System", action: "Daily Backup Completed", timestamp: "2026-07-29 01:00 AM", status: "Success" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary flex items-center gap-3">
            <FileText className="text-accent-gold" size={32} />
            Audit Logs
          </h1>
          <p className="text-text-secondary mt-1">Track all system activities and user actions.</p>
        </div>
        <button className="flex items-center gap-2 bg-background-tertiary text-accent-gold border border-border-theme px-4 py-2 rounded-md hover:bg-background-tertiary">
          <Download size={18} />
          Export Logs
        </button>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-xl">
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
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-background-secondary text-text-secondary text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Log ID</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Action Details</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b2617] text-sm">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-background-secondary transition-colors">
                  <td className="px-6 py-4 text-accent-gold font-medium">{log.id}</td>
                  <td className="px-6 py-4 text-text-primary">{log.user}</td>
                  <td className="px-6 py-4 text-text-secondary">{log.action}</td>
                  <td className="px-6 py-4 text-text-secondary">{log.timestamp}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      log.status === 'Success' ? 'bg-green-500/20 text-green-400' : 'bg-accent-gold/20 text-accent-gold'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
