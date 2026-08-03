"use client";

import { useState } from "react";
import AIHeader from "@/components/ai-assistant/AIHeader";
import SuggestedPrompts from "@/components/ai-assistant/SuggestedPrompts";
import ChatWindow from "@/components/ai-assistant/ChatWindow";
import ChatInput from "@/components/ai-assistant/ChatInput";

interface Message {
  id: string;
  sender: "ai" | "user";
  message: string;
  time: string;
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      message: "Hello! 👋 Welcome to Luxury Gold ERP AI Assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      message: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (res.status === 401) { console.warn("Unauthorized fetch"); }

      const data = await res.json();
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        message: data.reply || "I am unable to connect to the database right now.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        message: "An error occurred while connecting to the server.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      {/* Header */}
      <AIHeader />

      {/* Main Content */}
      <div className="mt-8 max-w-5xl mx-auto">
        <section className="w-full">
          <SuggestedPrompts onPromptClick={handleSendMessage} />

          <div className="mt-6">
            <ChatWindow messages={messages} />
          </div>

          <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
        </section>
      </div>
    </main>
  );
}