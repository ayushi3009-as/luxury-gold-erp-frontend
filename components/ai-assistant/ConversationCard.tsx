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
    <div className="bg-[#141414] border border-yellow-500/20 rounded-xl p-4 hover:border-yellow-500 transition cursor-pointer">
      <h3 className="text-white font-semibold text-base">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        {date}
      </p>
    </div>
  );
}