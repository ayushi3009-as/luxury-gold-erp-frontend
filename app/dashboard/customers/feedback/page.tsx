"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { customerFeedback, CustomerFeedback } from "@/app/components/customer-data";
import { Star } from "lucide-react";

export default function CustomerFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<CustomerFeedback[]>(customerFeedback);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredFeedbacks = feedbacks.filter(
    (f) => categoryFilter === "All" || f.category === categoryFilter
  );

  const handleResolve = (id: string) => {
    setFeedbacks((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: "Resolved" } : f))
    );
  };

  return (
    <div className="text-text-primary max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          Customer Feedback & Reviews
        </h1>
        <p className="text-text-secondary mt-1 text-sm">
          Module 3 / Page 10: Ratings, Service Feedback & CSAT Support Tickets
        </p>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Rating Overview Banner */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-6">
          <div className="text-center bg-[#101010] border border-[#2C2C2C] p-6 rounded-2xl shrink-0">
            <h2 className="text-4xl font-extrabold text-[#D4AF37]">4.8</h2>
            <div className="flex gap-1 text-[#D4AF37] my-1 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill="#D4AF37" />
              ))}
            </div>
            <p className="text-xs text-text-secondary">Out of 5 Stars CSAT</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-text-primary mb-1">Customer Satisfaction Index</h3>
            <p className="text-sm text-text-secondary max-w-xl">
              Based on verified feedback from buyers across Gold, Diamond, and Silver jewellery purchases and 11+1 savings scheme enrollments.
            </p>
          </div>
        </div>

        {/* Filter Dropdown */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-[#101010] text-text-primary border border-[#2C2C2C] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#D4AF37] w-full md:w-64"
        >
          <option value="All">All Categories</option>
          <option value="Product Quality">Product Quality</option>
          <option value="Store Experience">Store Experience</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Scheme Delivery">Scheme Delivery</option>
        </select>
      </div>

      {/* Feedback Items Grid */}
      <div className="space-y-4 mb-8">
        {filteredFeedbacks.map((fb) => (
          <div
            key={fb.id}
            className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#D4AF37] transition shadow-md"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] font-semibold mr-2">{fb.id}</span>
                <span className="font-bold text-text-primary text-base">{fb.customerName}</span>
                <span className="text-xs text-text-secondary ml-3">({fb.category})</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-1 text-[#D4AF37]">
                  {Array.from({ length: fb.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" />
                  ))}
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    fb.status === "Resolved"
                      ? "bg-emerald-900/50 text-emerald-400 border border-emerald-700/50"
                      : fb.status === "In Progress"
                      ? "bg-amber-900/50 text-amber-300 border border-amber-700/50"
                      : "bg-red-900/50 text-red-400 border border-red-700/50"
                  }`}
                >
                  {fb.status}
                </span>
              </div>
            </div>

            <p className="text-text-secondary text-sm italic mb-4 bg-[#101010] p-4 rounded-xl border border-[#2C2C2C]">
              &quot;{fb.comment}&quot;
            </p>

            <div className="flex justify-between items-center text-xs text-text-secondary">
              <span>Submitted: {fb.date}</span>

              {fb.status !== "Resolved" && (
                <button
                  onClick={() => handleResolve(fb.id)}
                  className="bg-[#D4AF37] hover:bg-accent-gold-hover text-black px-4 py-1.5 rounded-lg font-semibold transition"
                >
                  Mark as Resolved
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
