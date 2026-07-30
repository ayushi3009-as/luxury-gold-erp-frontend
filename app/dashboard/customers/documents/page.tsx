"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { kycDocuments, KYCDocument } from "@/app/components/customer-data";
import { FileCheck, Upload, Eye, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function CustomerDocumentsPage() {
  const [docs, setDocs] = useState<KYCDocument[]>(kycDocuments);
  const [statusFilter, setStatusFilter] = useState("All");
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [newDoc, setNewDoc] = useState({
    customerName: "",
    documentType: "Aadhaar Card" as KYCDocument["documentType"],
    documentNumber: "",
  });

  const filteredDocs = docs.filter(
    (d) => statusFilter === "All" || d.status === statusFilter
  );

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const created: KYCDocument = {
      id: `DOC-0${docs.length + 1}`,
      customerId: Date.now(),
      customerName: newDoc.customerName || "Walk-in Customer",
      documentType: newDoc.documentType,
      documentNumber: newDoc.documentNumber || "XXXX-XXXX-1234",
      uploadDate: new Date().toISOString().split("T")[0],
      status: "Verified",
      fileSize: "1.5 MB",
    };
    setDocs([created, ...docs]);
    setShowUploadModal(false);
  };

  return (
    <div className="text-text-primary max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Customer KYC Documents
          </h1>
          <p className="text-text-secondary mt-1 text-sm">
            Module 3 / Page 8: Government ID & Verification Repository
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-[#D4AF37] text-black rounded-xl px-6 py-3.5 font-semibold flex items-center gap-2 hover:bg-accent-gold-hover transition cursor-pointer shadow-lg shadow-amber-500/10"
        >
          <Upload size={20} />
          Upload New Document
        </button>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Filter Row */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck size={20} className="text-[#D4AF37]" />
          <span className="font-semibold text-text-primary">Verification Status:</span>
        </div>
        <div className="flex gap-2">
          {["All", "Verified", "Pending"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                statusFilter === st
                  ? "bg-[#D4AF37] text-black"
                  : "bg-[#101010] text-text-secondary border border-[#2C2C2C] hover:bg-[#222]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#D4AF37] transition shadow-lg relative"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[#222] border border-[#333] rounded-xl text-[#D4AF37]">
                <FileCheck size={24} />
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1 ${
                  doc.status === "Verified"
                    ? "bg-emerald-900/50 text-emerald-400 border border-emerald-700/50"
                    : doc.status === "Pending"
                    ? "bg-amber-900/50 text-amber-300 border border-amber-700/50"
                    : "bg-red-900/50 text-red-400 border border-red-700/50"
                }`}
              >
                {doc.status === "Verified" && <CheckCircle2 size={12} />}
                {doc.status === "Pending" && <Clock size={12} />}
                {doc.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-text-primary mb-1">{doc.customerName}</h3>
            <p className="text-sm font-semibold text-[#D4AF37]">{doc.documentType}</p>
            <p className="text-xs font-mono text-text-secondary mt-1">ID: {doc.documentNumber}</p>

            <div className="mt-6 pt-4 border-t border-[#2C2C2C] flex justify-between items-center text-xs text-text-secondary">
              <span>Uploaded: {doc.uploadDate}</span>
              <button
                onClick={() => alert(`Viewing ${doc.documentType} for ${doc.customerName}`)}
                className="flex items-center gap-1 text-[#D4AF37] hover:underline font-medium"
              >
                <Eye size={14} /> View Doc
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary/70 backdrop-blur-sm p-4">
          <div className="bg-[#171717] border border-[#2C2C2C] text-text-primary rounded-2xl w-full max-w-md p-6 relative">
            <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Upload Customer KYC Document</h3>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1">Customer Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Shah"
                  value={newDoc.customerName}
                  onChange={(e) => setNewDoc({ ...newDoc, customerName: e.target.value })}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-1">Document Type</label>
                <select
                  value={newDoc.documentType}
                  onChange={(e) =>
                    setNewDoc({ ...newDoc, documentType: e.target.value as KYCDocument["documentType"] })
                  }
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                >
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="PAN Card">PAN Card</option>
                  <option value="Passport">Passport</option>
                  <option value="GSTIN Certificate">GSTIN Certificate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-1">Document Number</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1234-5678-9012"
                  value={newDoc.documentNumber}
                  onChange={(e) => setNewDoc({ ...newDoc, documentNumber: e.target.value })}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#2C2C2C]">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="w-1/2 bg-[#222] text-text-secondary py-3 rounded-xl font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#D4AF37] hover:bg-accent-gold-hover text-black py-3 rounded-xl font-semibold"
                >
                  Upload & Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
