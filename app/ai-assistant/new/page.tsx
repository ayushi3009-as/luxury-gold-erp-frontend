import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import AIHeader from "@/components/ai-assistant/AIHeader";
import SuggestedPrompts from "@/components/ai-assistant/SuggestedPrompts";
import ChatInput from "@/components/ai-assistant/ChatInput";

export default function NewChatPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Back Button */}

      <Link
        href="/ai-assistant"
        className="inline-flex items-center gap-2 mb-6 text-accent-gold hover:text-accent-gold"
      >
        <ArrowLeft size={20} />
        Back to AI Assistant
      </Link>

      {/* Header */}

      <AIHeader />

      {/* Suggested Prompts */}

      <SuggestedPrompts />

      {/* Empty Chat */}

      <div className="mt-6 bg-background-secondary border border-border-theme rounded-2xl h-[500px] flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-3xl font-bold text-accent-gold">
            Start a New Conversation
          </h2>

          <p className="text-text-secondary mt-3">
            Type your question below or select a suggested prompt.
          </p>

        </div>

      </div>

      {/* Input */}

      <ChatInput />

    </main>
  );
}