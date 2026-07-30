"use client";

interface ConversationCardProps {
  title: string;
  date: string;
}

export default function ConversationCard({
  title,
  date,
}: ConversationCardProps) {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-xl p-4 hover:border-yellow-500 transition cursor-pointer">
      <h3 className="text-text-primary font-semibold text-base">
        {title}
      </h3>

      <p className="text-text-secondary text-sm mt-2">
        {date}
      </p>
    </div>
  );
}