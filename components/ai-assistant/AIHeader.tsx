"use client";

import Link from "next/link";
import { Bot, Sparkles } from "lucide-react";

export default function AIHeader() {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

        {/* Left Section */}

        <div className="flex items-center gap-4">

          {/* AI Logo */}

          <div className="w-16 h-16 rounded-2xl bg-accent-gold flex items-center justify-center shadow-lg">
            <Bot size={34} className="text-black" />
          </div>

          {/* Title */}

          <div>
            <h1 className="text-4xl font-bold text-accent-gold">
              Luxury Gold AI Assistant
            </h1>

            <p className="text-text-secondary mt-1">
              Smart AI-powered assistant for your Jewellery ERP
            </p>
          </div>

        </div>

        {/* Right Section */}

        <div className="flex items-center gap-4">

          {/* AI Status */}

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-green-400 font-medium">
              AI Online
            </span>

          </div>

          {/* AI Insights Button */}

          <Link
            href="/ai-assistant/insights"
            className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-5 py-3 rounded-xl transition"
          >
            <Sparkles size={18} />
            AI Insights
          </Link>

        </div>

      </div>
    </div>
  );
}