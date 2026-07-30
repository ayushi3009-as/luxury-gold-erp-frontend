"use client";

interface ChatMessageProps {
  sender: "user" | "ai";
  message: string;
  time: string;
}

export default function ChatMessage({
  sender,
  message,
  time,
}: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-accent-gold text-black"
            : "bg-background-secondary border border-border-theme text-text-primary"
        }`}
      >
        <p className="leading-7 whitespace-pre-wrap">
          {message}
        </p>

        <p
          className={`mt-2 text-xs ${
            isUser
              ? "text-black/70"
              : "text-text-secondary"
          }`}
        >
          {time}
        </p>
      </div>
    </div>
  );
}