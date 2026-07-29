"use client";

import { MessageSquare, Save, Send } from "lucide-react";

export default function SMSSettings() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          SMS Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure your SMS gateway and messaging service.
        </p>

      </div>

      {/* Card */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-8">

          <div className="bg-yellow-500/20 p-4 rounded-xl">

            <MessageSquare
              size={30}
              className="text-yellow-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              SMS Gateway Configuration
            </h2>

            <p className="text-gray-400">
              Setup your SMS provider credentials.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2">
              SMS Provider
            </label>

            <select className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500">
              <option>Twilio</option>
              <option>MSG91</option>
              <option>TextLocal</option>
            </select>

          </div>

          <div>

            <label className="block mb-2">
              Sender ID
            </label>

            <input
              type="text"
              placeholder="LUXERP"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block mb-2">
              API Key
            </label>

            <input
              type="password"
              placeholder="Enter API Key"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block mb-2">
              API Secret
            </label>

            <input
              type="password"
              placeholder="Enter API Secret"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-10">

          <button className="flex items-center gap-2 border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-700">

            <Send size={18} />

            Test SMS

          </button>

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg">

            <Save size={18} />

            Save Settings

          </button>

        </div>

      </div>

    </div>
  );
}