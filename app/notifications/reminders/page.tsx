"use client";


import {
  Clock3,
  CalendarDays,
  CheckCircle2,
  AlertCircle,
  UserRound,
  CreditCard,
} from "lucide-react";

const reminders = [
  {
    title: "Customer Payment Due",
    description: "Payment from Rajesh Jewellers is due today.",
    date: "Today, 02:30 PM",
    category: "Payment",
    priority: "High",
    icon: CreditCard,
  },
  {
    title: "Follow-up Customer",
    description: "Follow up with Priya Shah regarding her jewellery inquiry.",
    date: "Today, 04:00 PM",
    category: "Customer",
    priority: "Medium",
    icon: UserRound,
  },
  {
    title: "Inventory Verification",
    description: "Complete the physical stock verification for the gold section.",
    date: "Tomorrow, 10:00 AM",
    category: "Inventory",
    priority: "Medium",
    icon: CheckCircle2,
  },
  {
    title: "Monthly Report Review",
    description: "Review the monthly sales and revenue performance report.",
    date: "Friday, 11:00 AM",
    category: "Report",
    priority: "Low",
    icon: CalendarDays,
  },
];

export default function RemindersPage() {
  return (
  <div className="min-h-screen bg-background-primary text-text-primary">

    

    <main className=" min-h-screen p-8">

        {/* HEADER */}
        <div>

          <p className="text-xs text-text-secondary">
            Notifications / Reminders
          </p>

          <div className="mt-2 flex items-center gap-3">

            <div className="rounded-xl bg-[#211c0d] p-3">
              <Clock3
                size={25}
                className="text-accent-gold"
              />
            </div>

            <h1 className="text-3xl font-bold text-accent-gold">
              Reminders
            </h1>

          </div>

          <p className="mt-3 text-sm text-text-secondary">
            Keep track of important upcoming activities and deadlines.
          </p>

        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">

            <p className="text-xs text-text-secondary">
              Total Reminders
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              18
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              All upcoming reminders
            </p>

          </div>

          <div className="rounded-xl border border-red-900/40 bg-[#11130f] p-5">

            <p className="text-xs text-text-secondary">
              Due Today
            </p>

            <h2 className="mt-3 text-3xl font-bold text-red-400">
              5
            </h2>

            <p className="mt-2 text-xs text-red-400">
              Requires attention today
            </p>

          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">

            <p className="text-xs text-text-secondary">
              This Week
            </p>

            <h2 className="mt-3 text-3xl font-bold text-accent-gold">
              12
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              Scheduled this week
            </p>

          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">

            <p className="text-xs text-text-secondary">
              Completed
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-400">
              42
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              Completed this month
            </p>

          </div>

        </div>

        {/* REMINDER LIST */}
        <div className="mt-6 rounded-xl border border-border-theme bg-[#11130f] p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-semibold text-accent-gold">
                Upcoming Reminders
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Important tasks and activities scheduled for you
              </p>

            </div>

            <button className="rounded-lg bg-[#b98c20] px-4 py-2 text-xs font-medium text-black transition hover:bg-[#d0a52d]">
              + Add Reminder
            </button>

          </div>

          <div className="mt-6 space-y-3">

            {reminders.map((reminder) => {

              const Icon = reminder.icon;

              return (
                <div
                  key={reminder.title}
                  className="flex items-center justify-between rounded-xl border border-[#2f2a1b] bg-[#151711] p-5 transition hover:border-[#6c5420]"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-lg bg-[#211c0d] p-3">
                      <Icon
                        size={20}
                        className="text-accent-gold"
                      />
                    </div>

                    <div>

                      <h3 className="text-sm font-semibold">
                        {reminder.title}
                      </h3>

                      <p className="mt-1 text-xs text-text-secondary">
                        {reminder.description}
                      </p>

                      <div className="mt-2 flex items-center gap-2 text-[10px] text-text-secondary">

                        <CalendarDays size={12} />

                        {reminder.date}

                        <span>•</span>

                        {reminder.category}

                      </div>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] ${
                        reminder.priority === "High"
                          ? "bg-red-500/10 text-red-400"
                          : reminder.priority === "Medium"
                            ? "bg-accent-gold/10 text-accent-gold"
                            : "bg-green-500/10 text-green-400"
                      }`}
                    >
                      {reminder.priority}
                    </span>

                    <button className="rounded-lg border border-border-theme px-3 py-2 text-[10px] text-text-secondary hover:border-green-500/50 hover:text-green-400">
                      Complete
                    </button>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

        {/* REMINDER INSIGHT */}
        <div className="mt-6 rounded-xl border border-[#6c5420] bg-[#18150c] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-[#b98c20] p-3">
              <AlertCircle
                size={22}
                className="text-black"
              />
            </div>

            <div>

              <h2 className="font-semibold text-accent-gold">
                Reminder Management
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Never miss important payments, customer follow-ups, inventory
                activities, or business deadlines.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <Clock3 size={16} />
                Upcoming reminders are automatically tracked by the system.
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}