"use client";
import NotificationsNav from "./NotificationsNav";

export default function NotificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full w-full">
      <NotificationsNav />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
