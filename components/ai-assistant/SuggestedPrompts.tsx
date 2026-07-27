"use client";

const prompts = [
  "Show today's sales report",
  "List low stock products",
  "Show pending repair orders",
  "Generate GST report",
  "Top selling jewellery",
  "Today's customer registrations",
];

export default function SuggestedPrompts() {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-yellow-500 mb-4">
        Suggested Prompts
      </h2>

      <div className="flex flex-wrap gap-3">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            className="
              px-4
              py-2
              rounded-xl
              bg-[#141414]
              border
              border-yellow-500/20
              text-gray-300
              hover:border-yellow-500
              hover:text-yellow-500
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