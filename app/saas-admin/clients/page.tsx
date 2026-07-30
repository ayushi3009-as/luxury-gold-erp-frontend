"use client";

import { useEffect, useState } from "react";
import { Users, Server, DollarSign, Activity, Loader2, ArrowRight, Search, Plus, MoreVertical, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function SaaSClientsPage() {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/saas/clients");
        const data = await res.json();
        if (Array.isArray(data)) {
          setClients(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredClients = clients.filter((c: any) => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 pb-20 animate-fade-in text-text-primary">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 text-text-secondary text-sm">
            <Link href="/saas-admin" className="hover:text-accent-gold">SaaS Admin</Link>
            <ArrowRight size={14} />
            <span className="text-text-primary font-medium">Clients</span>
          </div>
          <h1 className="text-3xl font-bold text-accent-gold">Client Management</h1>
          <p className="text-text-secondary mt-1">Manage all your deployed client domains and their active subscriptions.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-accent-gold text-[#0b0d0c] hover:bg-yellow-400 px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
            <Plus size={18} />
            New Client
          </button>
        </div>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border-theme flex flex-col md:flex-row gap-4 justify-between items-center bg-background-tertiary/20">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
            <input
              type="text"
              placeholder="Search by client name or domain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background-primary border border-border-theme rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-accent-gold transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <span>Showing {filteredClients.length} clients</span>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-text-secondary">
            <Loader2 className="w-8 h-8 animate-spin text-accent-gold mb-4" />
            <p>Loading Clients...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background-tertiary/50">
                  <th className="p-4 text-xs uppercase tracking-wider text-text-secondary font-semibold border-b border-border-theme">Client Info</th>
                  <th className="p-4 text-xs uppercase tracking-wider text-text-secondary font-semibold border-b border-border-theme">Custom Domain</th>
                  <th className="p-4 text-xs uppercase tracking-wider text-text-secondary font-semibold border-b border-border-theme">Current Plan</th>
                  <th className="p-4 text-xs uppercase tracking-wider text-text-secondary font-semibold border-b border-border-theme">Renewal Date</th>
                  <th className="p-4 text-xs uppercase tracking-wider text-text-secondary font-semibold border-b border-border-theme">Status</th>
                  <th className="p-4 text-xs uppercase tracking-wider text-text-secondary font-semibold border-b border-border-theme text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {filteredClients.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-text-secondary">
                      No clients found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredClients.map((client: any) => {
                    const activeSub = client.subscriptions?.find((s: any) => s.status === 'ACTIVE');
                    
                    return (
                      <tr key={client.id} className="hover:bg-background-tertiary/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold">
                              {client.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-medium text-text-primary">{client.name}</p>
                              <p className="text-xs text-text-secondary">{client.email} • {client.phone}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 font-mono text-sm">
                          <a href={`https://${client.domain}`} target="_blank" rel="noreferrer" className="text-accent-gold hover:underline flex items-center gap-1">
                            {client.domain}
                          </a>
                        </td>
                        <td className="p-4">
                          {activeSub ? (
                            <div>
                              <p className="text-sm font-medium">{activeSub.plan.name}</p>
                              <p className="text-xs text-text-secondary">
                                ₹{activeSub.plan.pricePerMonth}/mo
                              </p>
                            </div>
                          ) : (
                            <span className="text-sm text-text-secondary">No active plan</span>
                          )}
                        </td>
                        <td className="p-4 text-sm text-text-secondary">
                          {activeSub ? new Date(activeSub.endDate).toLocaleDateString() : '-'}
                        </td>
                        <td className="p-4">
                          {activeSub ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                              Inactive
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-text-secondary hover:text-accent-gold hover:bg-background-tertiary rounded-full transition-colors" title="Edit Client">
                              <Edit size={16} />
                            </button>
                            <button className="p-2 text-text-secondary hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors" title="Delete Client">
                              <Trash2 size={16} />
                            </button>
                            <button className="p-2 text-text-secondary hover:text-accent-gold hover:bg-background-tertiary rounded-full transition-colors">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
