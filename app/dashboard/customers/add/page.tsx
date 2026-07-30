"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { UserPlus, CheckCircle2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddCustomerPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "Male",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    membership: "Gold Member",
    initialBalance: "",
    goldSchemeOptIn: true,
    kycType: "Aadhaar Card",
    kycNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push("/dashboard/customers");
    }, 2000);
  };

  return (
    <div className="text-text-primary max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          Add Customer (Full Registration)
        </h1>
        <p className="text-text-secondary mt-1 text-sm">
          Module 3 / Page 2: Add Customer Onboarding Wizard
        </p>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {submitted ? (
        <div className="bg-[#171717] border border-green-700/50 rounded-2xl p-12 text-center max-w-2xl mx-auto my-8">
          <div className="w-16 h-16 bg-green-900/40 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-600">
            <CheckCircle2 size={36} />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Customer Registered Successfully!</h2>
          <p className="text-text-secondary mb-6">
            Customer record for <span className="text-[#D4AF37] font-semibold">{form.firstName} {form.lastName}</span> has been added to Luxray ERP CRM.
          </p>
          <div className="text-sm text-text-secondary flex items-center justify-center gap-2">
            Redirecting to Customer List <ArrowRight size={16} />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-8 space-y-8 shadow-xl mt-6">
          {/* Section 1: Basic Information */}
          <div>
            <h2 className="text-lg font-semibold text-[#D4AF37] border-b border-[#2C2C2C] pb-3 mb-6 flex items-center gap-2">
              <UserPlus size={20} /> Section 1: Personal & Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Shah"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Phone Number *</label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ramesh.shah@email.com"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Address & Location */}
          <div>
            <h2 className="text-lg font-semibold text-[#D4AF37] border-b border-[#2C2C2C] pb-3 mb-6">
              Section 2: Address Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-3">
                <label className="block text-sm text-text-secondary mb-2">Street Address</label>
                <textarea
                  name="address"
                  rows={2}
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House/Shop No, Street Name, Area..."
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="e.g. Maharashtra"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">PIN Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="400001"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          </div>

          {/* Section 3: CRM Membership & Financial Settings */}
          <div>
            <h2 className="text-lg font-semibold text-[#D4AF37] border-b border-[#2C2C2C] pb-3 mb-6">
              Section 3: Membership Tier & Financial Ledger
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2">Membership Tier</label>
                <select
                  name="membership"
                  value={form.membership}
                  onChange={handleChange}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                >
                  <option value="Silver Member">Silver Member</option>
                  <option value="Gold Member">Gold Member</option>
                  <option value="Diamond Member">Diamond Member</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Opening Account Balance (₹)</label>
                <input
                  type="number"
                  name="initialBalance"
                  value={form.initialBalance}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">KYC Identification Type</label>
                <select
                  name="kycType"
                  value={form.kycType}
                  onChange={handleChange}
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                >
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="PAN Card">PAN Card</option>
                  <option value="Passport">Passport</option>
                  <option value="GSTIN Certificate">GSTIN Certificate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">KYC Document Number</label>
                <input
                  type="text"
                  name="kycNumber"
                  value={form.kycNumber}
                  onChange={handleChange}
                  placeholder="e.g. 1234-5678-9012"
                  className="w-full bg-[#101010] border border-[#2C2C2C] text-text-primary rounded-xl px-4 py-3 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="md:col-span-2 flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="goldSchemeOptIn"
                  name="goldSchemeOptIn"
                  checked={form.goldSchemeOptIn}
                  onChange={handleChange}
                  className="w-5 h-5 accent-[#D4AF37] rounded cursor-pointer"
                />
                <label htmlFor="goldSchemeOptIn" className="text-sm text-text-secondary cursor-pointer">
                  Enroll customer automatically in Gold Savings 11+1 Scheme preview
                </label>
              </div>
            </div>
          </div>

          {/* Form Controls */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#2C2C2C]">
            <button
              type="button"
              onClick={() => router.push("/dashboard/customers")}
              className="px-6 py-3.5 rounded-xl border border-[#2C2C2C] text-text-secondary hover:bg-[#222] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-accent-gold-hover text-black font-semibold transition shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              Save & Register Customer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
