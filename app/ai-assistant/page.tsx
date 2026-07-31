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

      if (res.status === 401) {
        window.location.href = "/login";
        return;
      }

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
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
        {/* Left Section */}
        <section className="xl:col-span-3">
          <SuggestedPrompts onPromptClick={handleSendMessage} />

          <div className="mt-6">
            <ChatWindow messages={messages} />
          </div>

          <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
        </section>

        {/* Right Sidebar */}
        <aside className="xl:col-span-1">
          {/* We can put context info here later */}
          <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">
            <h3 className="font-semibold text-accent-gold mb-4">System Status</h3>
            <div className="space-y-4 text-sm text-text-secondary">
              <div className="flex justify-between">
                <span>Database Connection</span>
                <span className="text-green-400">Online</span>
              </div>
              <div className="flex justify-between">
                <span>AI Module</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex justify-between">
                <span>Tenant Isolation</span>
                <span className="text-green-400">Secured</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-accent-gold mt-8 mb-4">Capabilities</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
              <li>Fetch real-time sales revenue</li>
              <li>Count active customers</li>
              <li>Check inventory stock levels</li>
              <li>View pending repair orders</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}