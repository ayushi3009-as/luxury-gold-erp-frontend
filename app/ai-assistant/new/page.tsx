import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import AIHeader from "@/components/ai-assistant/AIHeader";
import SuggestedPrompts from "@/components/ai-assistant/SuggestedPrompts";
import ChatInput from "@/components/ai-assistant/ChatInput";

export default function NewChatPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Back Button */}

      <Link
        href="/ai-assistant"
        className="inline-flex items-center gap-2 mb-6 text-yellow-500 hover:text-yellow-400"
      >
        <ArrowLeft size={20} />
        Back to AI Assistant
      </Link>

      {/* Header */}

      <AIHeader />

      {/* Suggested Prompts */}

      <SuggestedPrompts />

      {/* Empty Chat */}

      <div className="mt-6 bg-[#141414] border border-yellow-500/20 rounded-2xl h-[500px] flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-3xl font-bold text-yellow-500">
            Start a New Conversation
          </h2>

          <p className="text-gray-400 mt-3">
            Type your question below or select a suggested prompt.
          </p>

        </div>

      </div>

      {/* Input */}

      <ChatInput />

    </main>
  );
}