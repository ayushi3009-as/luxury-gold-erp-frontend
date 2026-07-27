import { ReactNode } from "react";

export default function AIAssistantLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {children}
    </div>
  );
}