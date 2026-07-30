"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Send,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function RepairNotificationsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Customer Notifications
          </h1>

          <p className="text-text-secondary mt-2">
            Send repair updates to customers
          </p>

        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="max-w-5xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 text-accent-gold">
              Customer Name
            </label>

            <input
              type="text"
              defaultValue="Rahul Patel"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Mobile Number
            </label>

            <input
              type="text"
              defaultValue="9876543210"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Email
            </label>

            <input
              type="email"
              defaultValue="rahul@gmail.com"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Notification Type
            </label>

            <select className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3">

              <option>Repair Completed</option>
              <option>Ready for Delivery</option>
              <option>Repair Delayed</option>

            </select>

          </div>

        </div>

        <div className="mt-6">

          <label className="block mb-2 text-accent-gold">
            Message
          </label>

          <textarea
            rows={6}
            defaultValue="Dear Customer, your jewellery repair has been completed successfully and is ready for delivery."
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
          />

        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          <button
            onClick={() => alert("SMS Sent Successfully")}
            className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            <Bell size={18} />
            Send SMS
          </button>

          <button
            onClick={() => alert("WhatsApp Message Sent")}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>

          <button
            onClick={() => alert("Email Sent Successfully")}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-text-primary px-6 py-3 rounded-xl font-semibold transition"
          >
            <Mail size={18} />
            Email
          </button>

          <button
            onClick={() => alert("Notification Sent")}
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-text-primary px-6 py-3 rounded-xl font-semibold transition"
          >
            <Send size={18} />
            Send All
          </button>

        </div>

      </div>

    </main>
  );
}