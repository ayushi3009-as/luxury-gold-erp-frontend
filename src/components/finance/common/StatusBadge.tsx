"use client";

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const getStatusClasses = () => {
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
      case "completed":
      case "paid":
      case "filed":
      case "cleared":
        return "bg-green-500/20 text-green-400 border border-green-500/30";

      case "pending":
      case "processing":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";

      case "draft":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";

      case "cancelled":
      case "rejected":
      case "inactive":
      case "failed":
      case "bounced":
        return "bg-red-500/20 text-red-400 border border-red-500/30";

      default:
        return "bg-gray-500/20 text-gray-300 border border-gray-500/30";
    }
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-3
        py-1
        text-sm
        font-medium
        ${getStatusClasses()}
      `}
    >
      {status}
    </span>
  );
}