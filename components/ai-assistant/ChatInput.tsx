"use client";

import { useState } from "react";
import { Send, Mic, Paperclip } from "lucide-react";

export default function ChatInput({ 
  onSendMessage, 
  disabled 
}: { 
  onSendMessage: (msg: string) => void, 
  disabled: boolean 
}) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="mt-6 bg-background-secondary border border-border-theme rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <button className="p-3 rounded-xl bg-background-tertiary hover:bg-[#252525] transition" disabled={disabled}>
          <Paperclip size={20} className="text-accent-gold" />
        </button>

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
          disabled={disabled}
          className="flex-1 bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-yellow-500 disabled:opacity-50"
        />

        <button className="p-3 rounded-xl bg-background-tertiary hover:bg-[#252525] transition" disabled={disabled}>
          <Mic size={20} className="text-accent-gold" />
        </button>

        <button
          onClick={handleSend}
          disabled={disabled}
          className="bg-accent-gold hover:bg-accent-gold-hover text-black p-3 rounded-xl transition disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}