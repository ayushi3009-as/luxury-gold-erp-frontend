"use client";

import { useState } from "react";
import { Send, Mic, Paperclip } from "lucide-react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    alert(`Message Sent: ${message}`);
    setMessage("");
  };

  return (
    <div className="mt-6 bg-[#141414] border border-yellow-500/20 rounded-2xl p-4">

      <div className="flex items-center gap-3">

        {/* Attachment */}

        <button className="p-3 rounded-xl bg-[#1B1B1B] hover:bg-[#252525] transition">
          <Paperclip size={20} className="text-yellow-500" />
        </button>

        {/* Input */}

        <input
          type="text"
          placeholder="Ask anything about your ERP..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
        />

        {/* Voice */}

        <button className="p-3 rounded-xl bg-[#1B1B1B] hover:bg-[#252525] transition">
          <Mic size={20} className="text-yellow-500" />
        </button>

        {/* Send */}

        <button
          onClick={handleSend}
          className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-xl transition"
        >
          <Send size={20} />
        </button>

      </div>

    </div>
  );
}