import { ReactNode } from "react";

export default function AIAssistantLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      {children}
    </div>
  );
}