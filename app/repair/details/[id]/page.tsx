"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

export default function RepairDetailsPage() {
  const params = useParams();
  const id = params.id;

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Repair Details
          </h1>

          <p className="text-text-secondary mt-2">
            Repair ID: {id}
          </p>
        </div>

        <div className="flex gap-3">

          <Link
            href="/repair"
            className="px-5 py-3 border border-yellow-500 rounded-xl text-accent-gold hover:bg-accent-gold hover:text-black transition"
          >
            <ArrowLeft className="inline mr-2" size={18} />
            Back
          </Link>

          <Link
            href={`/repair/edit/${id}`}
            className="px-5 py-3 bg-accent-gold rounded-xl text-black font-semibold hover:bg-accent-gold-hover transition"
          >
            <Pencil className="inline mr-2" size={18} />
            Edit
          </Link>

        </div>

      </div>

      {/* Details Card */}

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-8">

        <img
          src="/repair/ring-repair.jpg"
          alt="Repair Product"
          className="w-80 rounded-xl border border-gray-700 mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <h3 className="text-text-secondary">Customer</h3>
            <p className="text-xl">Rahul Patel</p>
          </div>

          <div>
            <h3 className="text-text-secondary">Mobile</h3>
            <p className="text-xl">9876543210</p>
          </div>

          <div>
            <h3 className="text-text-secondary">Product</h3>
            <p className="text-xl">Gold Ring</p>
          </div>

          <div>
            <h3 className="text-text-secondary">Repair Type</h3>
            <p className="text-xl">Ring Resize</p>
          </div>

          <div>
            <h3 className="text-text-secondary">Worker</h3>
            <p className="text-xl">Ramesh</p>
          </div>

          <div>
            <h3 className="text-text-secondary">Estimated Cost</h3>
            <p className="text-xl text-accent-gold font-bold">
              ₹1,500
            </p>
          </div>

          <div>
            <h3 className="text-text-secondary">Delivery Date</h3>
            <p className="text-xl">30 Jul 2026</p>
          </div>

          <div>
            <h3 className="text-text-secondary">Status</h3>

            <span className="inline-block mt-2 px-4 py-1 rounded-full bg-blue-500/20 text-blue-400">
              In Progress
            </span>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-xl font-bold text-accent-gold mb-4">
            Problem Description
          </h2>

          <p className="text-text-secondary leading-8">
            Customer requested resizing and polishing of the ring.
            Stone tightening is also required before delivery.
          </p>

        </div>

      </div>

    </main>
  );
}