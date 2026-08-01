"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Loader2, Store, Clock } from "lucide-react";

export default function TenantApprovalsPage() {
  const [tenants, setTenants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const fetchTenants = async () => {
    try {
      const res = await fetch("/api/saas-admin/tenants/pending");
      if (res.ok) {
        const data = await res.json();
        setTenants(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  const handleApprove = async (id: string, storeName: string) => {
    const subdomain = prompt(`Enter subdomain for ${storeName}:\n(e.g., enter "ram" to make it ram.gold.tivramarketing)`, storeName.toLowerCase().replace(/[^a-z0-9]/g, ''));
    
    if (!subdomain) return;

    setProcessingId(id);
    try {
      const res = await fetch(`/api/saas-admin/tenants/${id}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subdomain, status: 'APPROVED' })
      });
      
      if (res.ok) {
        alert("Tenant approved successfully!");
        fetchTenants();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to approve tenant.");
      }
    } catch (error) {
      console.error(error);
      alert("Error approving tenant");
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (id: string) => {
    if (!confirm("Are you sure you want to reject this registration?")) return;

    setProcessingId(id);
    try {
      const res = await fetch(`/api/saas-admin/tenants/${id}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: 'REJECTED' })
      });
      
      if (res.ok) {
        alert("Tenant rejected.");
        fetchTenants();
      } else {
        alert("Failed to reject tenant.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-background-primary text-text-primary">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
          <Clock size={32} />
          Pending Approvals
        </h1>
        <p className="text-text-secondary mt-2">Review and approve new store registrations and payment proofs.</p>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-theme bg-[#17150d] text-sm text-accent-gold">
                <th className="px-6 py-4 font-semibold">Store Details</th>
                <th className="px-6 py-4 font-semibold">Admin Info</th>
                <th className="px-6 py-4 font-semibold">Payment Ref</th>
                <th className="px-6 py-4 font-semibold">Date Registered</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <Loader2 className="animate-spin mx-auto text-accent-gold" size={32} />
                  </td>
                </tr>
              ) : tenants.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-text-secondary">
                    No pending registrations found.
                  </td>
                </tr>
              ) : (
                tenants.map((tenant) => (
                  <tr key={tenant.id} className="border-b border-border-theme hover:bg-background-tertiary transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-accent-gold">
                          <Store size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-text-primary">{tenant.name}</div>
                          <div className="text-xs text-text-secondary font-mono">{tenant.id.split('-')[0]}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {tenant.users?.[0] ? (
                        <>
                          <div className="text-text-primary">{tenant.users[0].fullName}</div>
                          <div className="text-xs text-text-secondary">{tenant.users[0].email}</div>
                          <div className="text-xs text-text-secondary">{tenant.users[0].mobile}</div>
                        </>
                      ) : (
                        <span className="text-text-secondary italic">No user linked</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono bg-[#1A1A1A] px-2 py-1 rounded text-accent-gold text-sm border border-gray-700">
                        {tenant.paymentReference || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-secondary text-sm">
                      {new Date(tenant.createdAt).toLocaleDateString()} <br/>
                      {new Date(tenant.createdAt).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleReject(tenant.id)}
                          disabled={processingId === tenant.id}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                        >
                          <XCircle size={16} />
                          Reject
                        </button>
                        <button 
                          onClick={() => handleApprove(tenant.id, tenant.name)}
                          disabled={processingId === tenant.id}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-colors disabled:opacity-50"
                        >
                          <CheckCircle size={16} />
                          Approve
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
