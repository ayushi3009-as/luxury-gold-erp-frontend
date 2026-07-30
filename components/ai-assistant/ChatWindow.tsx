"use client";

import ChatMessage from "./ChatMessage";

const messages = [
  {
    id: 1,
    sender: "ai" as const,
    message:
      "Hello! 👋 Welcome to Luxury Gold ERP AI Assistant. How can I help you today?",
    time: "10:00 AM",
  },
  {
    id: 2,
    sender: "user" as const,
    message: "Show today's sales report.",
    time: "10:01 AM",
  },
  {
    id: 3,
    sender: "ai" as const,
    message:
      "Today's sales are ₹2,45,000. A total of 18 invoices have been generated and the best-selling product is the 22K Gold Ring.",
    time: "10:01 AM",
  },
];

export default function ChatWindow() {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 h-[550px] overflow-y-auto space-y-4">
      {messages.map((item) => (
        <ChatMessage
          key={item.id}
          sender={item.sender}
          message={item.message}
          time={item.time}
        />
      ))}
    </div>
  );
}