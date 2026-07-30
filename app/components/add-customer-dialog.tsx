"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Customer } from "./customer-data";

interface AddCustomerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomer: (customer: Omit<Customer, "id">) => void;
}

export default function AddCustomerDialog({
  isOpen,
  onClose,
  onAddCustomer,
}: AddCustomerDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    membership: "Gold Member" as "Gold Member" | "Silver Member" | "Diamond Member",
    balance: "",
    progress: "50",
    status: "Active" as "Active" | "Inactive",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (isNaN(Number(formData.balance)) || formData.balance === "") {
      newErrors.balance = "Valid balance amount is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Pick a random avatar seed
    const randomImgId = Math.floor(Math.random() * 50) + 10;

    onAddCustomer({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      membership: formData.membership,
      balance: Number(formData.balance) || 0,
      progress: Number(formData.progress) || 0,
      status: formData.status,
      image: `https://i.pravatar.cc/150?img=${randomImgId}`,
      kycVerified: false,
      totalPurchases: 0,
      joinedDate: new Date().toISOString().split("T")[0],
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      membership: "Gold Member",
      balance: "",
      progress: "50",
      status: "Active",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-[#171717] border border-[#2C2C2C] text-text-primary rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#2C2C2C]">
          <h2 className="text-xl font-semibold text-[#D4AF37]">Add New Customer</h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary p-1 rounded-lg hover:bg-[#222] transition"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm text-text-secondary mb-1">Customer Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar"
              className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-text-secondary mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rajesh@email.com"
                className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-text-secondary mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Mumbai"
                className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-1">Membership</label>
              <select
                name="membership"
                value={formData.membership}
                onChange={handleChange}
                className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Gold Member">Gold Member</option>
                <option value="Silver Member">Silver Member</option>
                <option value="Diamond Member">Diamond Member</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-text-secondary mb-1">Balance (₹)</label>
              <input
                type="number"
                name="balance"
                value={formData.balance}
                onChange={handleChange}
                placeholder="50000"
                className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              {errors.balance && <p className="text-red-400 text-xs mt-1">{errors.balance}</p>}
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-1">Gold Scheme %</label>
              <input
                type="number"
                name="progress"
                value={formData.progress}
                onChange={handleChange}
                min="0"
                max="100"
                placeholder="50"
                className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full bg-[#101010] border border-[#2C2C2C] rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-[#2C2C2C]">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 bg-transparent border border-[#2C2C2C] text-text-secondary hover:bg-[#222] py-3 rounded-xl font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-[#D4AF37] hover:bg-accent-gold-hover text-black py-3 rounded-xl font-semibold transition"
            >
              Save Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}