"use client";

import type { ReactNode } from "react";
import {
  User,
  CheckCircle2,
  Clock3,
  ClipboardList,
  Target,
  Award,
  Bell,
} from "lucide-react";

export default function PersonalDashboard() {
  return (
    <main className="min-h-screen bg-background-primary p-6 text-text-primary">
      {/* HEADER */}
      <div className="mb-8">
        <p className="text-sm text-text-secondary">
          Dashboard / Personal Dashboard
        </p>

        <div className="mt-3 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-theme bg-background-tertiary text-accent-gold">
            <User size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Personal Dashboard
            </h1>

            <p className="mt-1 text-text-secondary">
              Manage your personal performance, tasks and daily activities.
            </p>
          </div>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="rounded-xl border border-border-theme bg-[#15130d] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background-tertiary text-xl font-bold text-accent-gold">
              HP
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Hasti Patel
              </h2>

              <p className="text-sm text-text-secondary">
                ERP Intern · Luxury Gold
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="text-accent-gold" />
            <span className="text-green-400">
              Excellent
            </span>
          </div>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <PersonalCard
          title="TASKS COMPLETED"
          value="86"
          subtitle="+12% this month"
          icon={<CheckCircle2 size={22} />}
        />

        <PersonalCard
          title="PENDING TASKS"
          value="12"
          subtitle="3 due today"
          icon={<ClipboardList size={22} />}
        />

        <PersonalCard
          title="WORKING HOURS"
          value="164h"
          subtitle="This month"
          icon={<Clock3 size={22} />}
        />

        <PersonalCard
          title="GOAL PROGRESS"
          value="78%"
          subtitle="On track"
          icon={<Target size={22} />}
        />
      </div>

      {/* PERFORMANCE + GOALS */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* PERFORMANCE */}
        <section className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <h2 className="font-semibold text-accent-gold">
            MY PERFORMANCE
          </h2>

          <div className="mt-6 space-y-5">
            <ProgressBar
              label="Task Completion"
              value="86%"
              progress="86%"
            />

            <ProgressBar
              label="Attendance"
              value="94%"
              progress="94%"
            />

            <ProgressBar
              label="Productivity"
              value="78%"
              progress="78%"
            />
          </div>
        </section>

        {/* GOALS */}
        <section className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <h2 className="font-semibold text-accent-gold">
            MY GOALS
          </h2>

          <div className="mt-6 space-y-5">
            <ProgressBar
              label="Complete Dashboard Module"
              value="90%"
              progress="90%"
            />

            <ProgressBar
              label="Learn Next.js & Tailwind CSS"
              value="72%"
              progress="72%"
            />

            <ProgressBar
              label="Improve Database Knowledge"
              value="58%"
              progress="58%"
            />
          </div>
        </section>
      </div>

      {/* TASKS */}
      <section className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-5">
        <h2 className="font-semibold text-accent-gold">
          MY TASKS
        </h2>

        <div className="mt-5 space-y-3">
          <TaskItem
            title="Complete Sales Report"
            time="Today, 11:00 AM"
            status="Completed"
          />

          <TaskItem
            title="Review Inventory Alerts"
            time="Today, 02:00 PM"
            status="Pending"
          />

          <TaskItem
            title="Prepare Daily Work Report"
            time="Today, 05:30 PM"
            status="Pending"
          />
        </div>
      </section>

      {/* TODAY SCHEDULE */}
      <section className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-5">
        <h2 className="font-semibold text-accent-gold">
          TODAY&apos;S SCHEDULE
        </h2>

        <div className="mt-5 space-y-3">
          <ScheduleItem
            time="10:00 AM"
            title="Team Stand-up Meeting"
          />

          <ScheduleItem
            time="03:00 PM"
            title="ERP Project Review"
          />

          <ScheduleItem
            time="05:30 PM"
            title="Daily Work Report"
          />
        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-5">
        <div className="flex items-center gap-3">
          <Bell className="text-accent-gold" />

          <h2 className="font-semibold text-accent-gold">
            NOTIFICATIONS
          </h2>
        </div>

        <div className="mt-5 space-y-3">
          <Notification text="New task assigned by Manager" />

          <Notification text="Monthly performance report is ready" />

          <Notification text="You have 3 pending approvals" />
        </div>
      </section>
    </main>
  );
}

/* KPI CARD */
function PersonalCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-theme bg-background-tertiary text-accent-gold">
        {icon}
      </div>

      <p className="mt-5 text-xs text-text-secondary">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-semibold">
        {value}
      </h3>

      <p className="mt-2 text-xs text-text-secondary">
        {subtitle}
      </p>
    </div>
  );
}

/* PROGRESS BAR */
function ProgressBar({
  label,
  value,
  progress,
}: {
  label: string;
  value: string;
  progress: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-text-secondary">
          {label}
        </span>

        <span className="text-accent-gold">
          {value}
        </span>
      </div>

      <div className="h-2 rounded-full bg-[#24251f]">
        <div
          className="h-2 rounded-full bg-accent-gold"
          style={{ width: progress }}
        />
      </div>
    </div>
  );
}

/* TASK ITEM */
function TaskItem({
  title,
  time,
  status,
}: {
  title: string;
  time: string;
  status: "Completed" | "Pending";
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border-theme bg-background-secondary p-4">
      <div>
        <p className="font-medium">
          {title}
        </p>

        <p className="text-xs text-text-secondary">
          {time}
        </p>
      </div>

      <span
        className={
          status === "Completed"
            ? "rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400"
            : "rounded-full bg-accent-gold/10 px-3 py-1 text-xs text-accent-gold"
        }
      >
        {status}
      </span>
    </div>
  );
}

/* SCHEDULE ITEM */
function ScheduleItem({
  time,
  title,
}: {
  time: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border-theme bg-background-secondary p-4">
      <span className="min-w-[80px] text-sm text-accent-gold">
        {time}
      </span>

      <div className="h-8 w-px bg-border-theme" />

      <span className="text-sm text-text-secondary">
        {title}
      </span>
    </div>
  );
}

/* NOTIFICATION */
function Notification({
  text,
}: {
  text: string;
}) {
  return (
    <p className="rounded-xl border border-border-theme bg-background-secondary p-4 text-sm text-text-secondary">
      {text}
    </p>
  );
}