"use client";


import {
  CheckSquare,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  Circle,
  UserRound,
  CalendarDays,
  Plus,
} from "lucide-react";

const tasks = [
  {
    title: "Complete Inventory Verification",
    description: "Verify physical stock for the gold jewellery section.",
    assignee: "Hasti Patel",
    dueDate: "Today, 05:00 PM",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Review Monthly Sales Report",
    description: "Review the monthly sales and revenue performance.",
    assignee: "Manager",
    dueDate: "Tomorrow, 11:00 AM",
    priority: "Medium",
    status: "Pending",
  },
  {
    title: "Update Product Catalogue",
    description: "Add new jewellery products and update pricing.",
    assignee: "Product Team",
    dueDate: "Friday, 03:00 PM",
    priority: "Medium",
    status: "Pending",
  },
  {
    title: "Customer Follow-up",
    description: "Contact customers with pending jewellery inquiries.",
    assignee: "Sales Team",
    dueDate: "Saturday, 12:00 PM",
    priority: "Low",
    status: "Completed",
  },
];

export default function TaskCenterPage() {
  return (
  <div className="min-h-screen bg-background-primary text-text-primary">

    

    <main className=" min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-text-secondary">
              Notifications / Tasks & Reminders
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="rounded-xl bg-background-tertiary p-3">
                <CheckSquare size={25} className="text-accent-gold" />
              </div>
              <h1 className="text-3xl font-bold text-accent-gold">
                Tasks & Reminders
              </h1>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              Manage, track and complete your business tasks and reminders.
            </p>
          </div>

          <button 
            onClick={() => alert("Add Task functionality will open a modal here.")}
            className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-xs font-medium text-black transition hover:bg-accent-gold/80"
          >
            <Plus size={15} />
            Add New Task
          </button>

        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Total Tasks</p>
            <h2 className="mt-3 text-3xl font-bold">48</h2>
            <p className="mt-2 text-xs text-text-secondary">All assigned tasks</p>
          </div>

          <div className="rounded-xl border border-yellow-900/40 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">In Progress</p>
            <h2 className="mt-3 text-3xl font-bold text-accent-gold">16</h2>
            <p className="mt-2 text-xs text-accent-gold">Currently being worked on</p>
          </div>

          <div className="rounded-xl border border-red-900/40 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Pending</p>
            <h2 className="mt-3 text-3xl font-bold text-red-400">12</h2>
            <p className="mt-2 text-xs text-red-400">Waiting to be started</p>
          </div>

          <div className="rounded-xl border border-green-900/40 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Completed</p>
            <h2 className="mt-3 text-3xl font-bold text-green-400">20</h2>
            <p className="mt-2 text-xs text-green-400">Successfully completed</p>
          </div>
        </div>

        {/* TASK LIST */}
        <div className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-accent-gold">My Tasks</h2>
              <p className="mt-1 text-xs text-text-secondary">Tasks assigned to you and your team</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg border border-border-theme px-3 py-2 text-xs text-text-secondary hover:border-accent-gold hover:text-accent-gold bg-accent-gold/5">
                All
              </button>
              <button className="rounded-lg border border-border-theme px-3 py-2 text-xs text-text-secondary hover:border-accent-gold hover:text-accent-gold">
                Pending
              </button>
              <button className="rounded-lg border border-border-theme px-3 py-2 text-xs text-text-secondary hover:border-accent-gold hover:text-accent-gold">
                Completed
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-3">

            {tasks.map((task) => (

              <div
                key={task.title}
                className="flex items-center justify-between rounded-xl border border-border-theme bg-background-primary p-5 transition hover:border-accent-gold"
              >

                <div className="flex items-center gap-4">

                  <div>

                    {task.status === "Completed" ? (
                      <CheckCircle2
                        size={22}
                        className="text-green-400"
                      />
                    ) : task.status === "In Progress" ? (
                      <Clock3
                        size={22}
                        className="text-accent-gold"
                      />
                    ) : (
                      <Circle
                        size={22}
                        className="text-text-secondary"
                      />
                    )}

                  </div>

                  <div>

                    <h3 className="text-sm font-semibold">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-xs text-text-secondary">
                      {task.description}
                    </p>

                    <div className="mt-2 flex items-center gap-3 text-[10px] text-text-secondary">

                      <span className="flex items-center gap-1">
                        <UserRound size={12} />
                        {task.assignee}
                      </span>

                      <span className="flex items-center gap-1">
                        <CalendarDays size={12} />
                        {task.dueDate}
                      </span>

                    </div>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <span
                    className={`rounded-full px-3 py-1 text-[10px] ${
                      task.priority === "High"
                        ? "bg-red-500/10 text-red-400"
                        : task.priority === "Medium"
                          ? "bg-accent-gold/10 text-accent-gold"
                          : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {task.priority}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-[10px] ${
                      task.status === "Completed"
                        ? "bg-green-500/10 text-green-400"
                        : task.status === "In Progress"
                          ? "bg-accent-gold/10 text-accent-gold"
                          : "bg-gray-500/10 text-text-secondary"
                    }`}
                  >
                    {task.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* TASK INSIGHT */}
        <div className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-accent-gold/20 p-3">
              <AlertTriangle size={22} className="text-accent-gold" />
            </div>
            <div>
              <h2 className="font-semibold text-accent-gold">
                Task Management
              </h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Assign tasks, track progress and make sure important business
                activities are completed on time.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-500">
                <CheckSquare size={16} />
                Task progress can be monitored from one central location.
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}