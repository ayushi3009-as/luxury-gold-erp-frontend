"use client";

import { Bot } from "lucide-react";
import { useRouter } from "next/navigation";

export function CustomizeDashboardButton() {
  return (
    <button onClick={() => alert("Customize Dashboard feature coming soon!")} className="rounded-md border border-border-theme px-3 py-2 text-xs text-accent-gold hover:bg-background-tertiary">
      Customize Dashboard
    </button>
  );
}

export function AskAIAssistantButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/dashboard/ai")} className="flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500">
      <Bot size={17} />
      Ask AI Assistant
    </button>
  );
}
