"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  ShieldCheck,
  Settings,
  Database,
  UserPlus,
  RefreshCw,
  CheckCircle2,
  Info,
  Loader2
} from "lucide-react";

export default function SystemNotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchNotifications() {
    setIsLoading(true);
    try {
      const res = await fetch("/api/notifications");
      if (res.status === 401) { console.warn("Unauthorized fetch"); }
      if (res.ok) {
        const data = await res.json();
        setNotifications(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchNotifications();
  }, []);

  const markAllAsRead = async () => {
    try {
      await fetch("/api/notifications", { method: "PUT" });
      setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    } catch (error) {
      console.error("Failed to mark as read");
    }
  };

  const totalNotifications = notifications.length;
  // For demo purposes, we will treat 'System Update' and 'Database' as 'Successful' type notifications.
  const successfulCount = notifications.filter(n => n.type === 'System Update' || n.type === 'Database').length;
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getIcon = (type: string) => {
    switch (type) {
      case "System Update": return RefreshCw;
      case "User Management": return UserPlus;
      case "Database": return Database;
      case "Security": return ShieldCheck;
      default: return Info;
    }
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-text-secondary">
              Notifications / System Alerts & Inquiries
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="rounded-xl bg-[#211c0d] p-3">
                <Bell size={25} className="text-accent-gold" />
              </div>
              <h1 className="text-3xl font-bold text-accent-gold">
                System Alerts & Inquiries
              </h1>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              View important system updates, security events, and storefront inquiries.
            </p>
          </div>
          <button 
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="rounded-lg border border-border-theme px-4 py-2 text-xs text-text-secondary transition hover:border-[#e4b52d] hover:text-accent-gold disabled:opacity-50"
          >
            Mark All as Read
          </button>
        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Total Notifications</p>
            <h2 className="mt-3 text-3xl font-bold">{totalNotifications}</h2>
            <p className="mt-2 text-xs text-text-secondary">System activity records</p>
          </div>
          <div className="rounded-xl border border-green-900/40 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Successful</p>
            <h2 className="mt-3 text-3xl font-bold text-green-400">{successfulCount}</h2>
            <p className="mt-2 text-xs text-green-400">Successfully completed</p>
          </div>
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Unread</p>
            <h2 className="mt-3 text-3xl font-bold text-accent-gold">{unreadCount}</h2>
            <p className="mt-2 text-xs text-text-secondary">New system updates</p>
          </div>
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">System Status</p>
            <h2 className="mt-3 text-3xl font-bold text-green-400">Healthy</h2>
            <p className="mt-2 text-xs text-green-400">All systems operational</p>
          </div>
        </div>

        {/* SYSTEM NOTIFICATION LIST */}
        <div className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-6 min-h-[300px] relative">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-background-tertiary p-3">
              <Settings size={20} className="text-accent-gold" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-accent-gold">System Activity</h2>
              <p className="mt-1 text-xs text-text-secondary">Recent system events and automated activities</p>
            </div>
          </div>

          {isLoading ? (
            <div className="absolute inset-0 top-[80px] flex items-center justify-center">
              <Loader2 className="animate-spin text-accent-gold" size={32} />
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {notifications.length === 0 && (
                <div className="text-center py-8 text-text-secondary">No new notifications.</div>
              )}
              {notifications.map((notification) => {
                const Icon = getIcon(notification.type);
                const isSuccess = notification.type === "System Update" || notification.type === "Database";
                const isInquiry = notification.type === "INQUIRY";
                let replyEmail = "";
                let displayMessage = notification.message;
                
                if (isInquiry) {
                  const emailMatch = notification.message.match(/Reply to: (.*)/);
                  if (emailMatch) {
                    replyEmail = emailMatch[1].trim();
                    displayMessage = notification.message.replace(/\n\nReply to: .*/, '');
                  }
                }

                return (
                  <div
                    key={notification.id}
                    className={`flex items-center justify-between rounded-xl border ${notification.isRead ? 'border-border-theme opacity-75' : 'border-accent-gold'} bg-background-primary p-5 transition hover:border-accent-gold`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-background-tertiary p-3">
                        <Icon size={20} className="text-accent-gold" />
                      </div>
                      <div>
                        <h3 className={`text-sm font-semibold ${!notification.isRead ? 'text-text-primary' : 'text-text-secondary'}`}>
                          {notification.title}
                        </h3>
                        <p className="mt-1 text-xs text-text-secondary whitespace-pre-line">
                          {displayMessage}
                        </p>
                        <p className="mt-2 text-[10px] text-gray-600">
                          {notification.type} • {new Date(notification.createdAt).toLocaleString()}
                        </p>
                        {isInquiry && replyEmail && (
                          <div className="mt-3">
                            <a href={`mailto:${replyEmail}?subject=Re: ${notification.title}`} className="inline-block rounded bg-accent-gold/20 px-3 py-1.5 text-xs text-accent-gold hover:bg-accent-gold hover:text-black transition">
                              Reply via Email
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] ${
                          isSuccess
                            ? "bg-green-500/10 text-green-400"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {isSuccess ? "Success" : "Information"}
                      </span>
                      {notification.isRead && (
                        <CheckCircle2 size={18} className="text-green-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* SYSTEM STATUS */}
        <div className="mt-6 rounded-xl border border-green-900/40 bg-background-secondary p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-green-500/10 p-3">
              <CheckCircle2 size={22} className="text-green-400" />
            </div>
            <div>
              <h2 className="font-semibold text-green-400">All Systems Operational</h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                All major ERP services are currently running normally.
                System activity, database and security services are operational.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
                <Info size={16} />
                Last system health check: Just now
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}