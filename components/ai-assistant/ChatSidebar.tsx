"use client";

import Link from "next/link";
import { Plus, History, Sparkles, Settings } from "lucide-react";
import ConversationCard from "./ConversationCard";

const conversations = [
  {
    id: 1,
    title: "Today's Sales Report",
    date: "Today • 10:15 AM",
  },
  {
    id: 2,
    title: "Low Stock Products",
    date: "Yesterday • 4:30 PM",
  },
  {
    id: 3,
    title: "Customer Purchase History",
    date: "Yesterday • 11:20 AM",
  },
  {
    id: 4,
    title: "Pending Repair Orders",
    date: "24 Jul • 2:45 PM",
  },
];

export default function ChatSidebar() {
  return (
    <aside className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 h-full">

      {/* New Chat */}

      <Link
        href="/ai-assistant/new"
        className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition"
      >
        <Plus size={20} />
        New Chat
      </Link>

      {/* Recent Chats */}

      <div className="mt-8">

        <div className="flex items-center gap-2 mb-4">
          <History size={20} className="text-yellow-500" />
          <h2 className="text-lg font-semibold text-yellow-500">
            Recent Chats
          </h2>
        </div>

        <div className="space-y-4">
          {conversations.map((chat) => (
            <ConversationCard
              key={chat.id}
              title={chat.title}
              date={chat.date}
            />
          ))}
        </div>

      </div>

      {/* Quick Links */}

      <div className="mt-8">

        <h2 className="text-lg font-semibold text-yellow-500 mb-4">
          Quick Links
        </h2>

        <div className="space-y-3">

          <Link
            href="/ai-assistant/history"
            className="flex items-center gap-3 bg-[#1B1B1B] hover:bg-[#232323] rounded-xl p-3 transition"
          >
            <History size={18} className="text-yellow-500" />
            <span>Chat History</span>
          </Link>

          <Link
            href="/ai-assistant/templates"
            className="flex items-center gap-3 bg-[#1B1B1B] hover:bg-[#232323] rounded-xl p-3 transition"
          >
            <Sparkles size={18} className="text-yellow-500" />
            <span>Templates</span>
          </Link>

          <Link
            href="/ai-assistant/settings"
            className="flex items-center gap-3 bg-[#1B1B1B] hover:bg-[#232323] rounded-xl p-3 transition"
          >
            <Settings size={18} className="text-yellow-500" />
            <span>Settings</span>
          </Link>

        </div>

      </div>

      {/* AI Tips */}

      <div className="mt-8 bg-[#1B1B1B] border border-yellow-500/20 rounded-xl p-4">

        <h3 className="text-yellow-500 font-semibold mb-2">
          AI Tips
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Ask AI about inventory, sales, customers, repair orders,
          invoices and business reports.
        </p>

      </div>

    </aside>
  );
}