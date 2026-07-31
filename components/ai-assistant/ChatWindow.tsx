"use client";

import ChatMessage from "./ChatMessage";

interface Message {
  id: string;
  sender: "ai" | "user";
  message: string;
  time: string;
}

export default function ChatWindow({ messages }: { messages: Message[] }) {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 h-[550px] overflow-y-auto space-y-4 flex flex-col">
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