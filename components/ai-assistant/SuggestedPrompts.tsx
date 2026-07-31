"use client";

const prompts = [
  "Show today's sales report",
  "List low stock products",
  "Show pending repair orders",
  "How many customers do we have?",
  "What is our total revenue?",
];

export default function SuggestedPrompts({ onPromptClick }: { onPromptClick: (p: string) => void }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-accent-gold mb-4">
        Suggested Prompts
      </h2>

      <div className="flex flex-wrap gap-3">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptClick(prompt)}
            className="
              px-4
              py-2
              rounded-xl
              bg-background-secondary
              border
              border-border-theme
              text-text-secondary
              hover:border-yellow-500
              hover:text-accent-gold
              transition
            "
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}