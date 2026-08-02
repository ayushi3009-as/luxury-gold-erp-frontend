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

import { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
  assignee: { fullName: string } | null;
};

export default function TaskCenterPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      }
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    const title = prompt("Enter task title:");
    if (!title) return;
    const description = prompt("Enter task description:");
    
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          priority: "Medium",
          status: "Pending",
        }),
      });
      if (res.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error("Failed to add task", error);
    }
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "All") return true;
    return t.status === filter;
  });

  const totalTasks = tasks.length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "No due date";
    const d = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const isSameDay = (d1: Date, d2: Date) => 
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear();

    const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (isSameDay(d, today)) return "Today, " + timeStr;
    if (isSameDay(d, tomorrow)) return "Tomorrow, " + timeStr;
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ", " + timeStr;
  };

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
            onClick={handleAddTask}
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
            <h2 className="mt-3 text-3xl font-bold">{loading ? "-" : totalTasks}</h2>
            <p className="mt-2 text-xs text-text-secondary">All assigned tasks</p>
          </div>

          <div className="rounded-xl border border-yellow-900/40 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">In Progress</p>
            <h2 className="mt-3 text-3xl font-bold text-accent-gold">{loading ? "-" : inProgress}</h2>
            <p className="mt-2 text-xs text-accent-gold">Currently being worked on</p>
          </div>

          <div className="rounded-xl border border-red-900/40 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Pending</p>
            <h2 className="mt-3 text-3xl font-bold text-red-400">{loading ? "-" : pending}</h2>
            <p className="mt-2 text-xs text-red-400">Waiting to be started</p>
          </div>

          <div className="rounded-xl border border-green-900/40 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">Completed</p>
            <h2 className="mt-3 text-3xl font-bold text-green-400">{loading ? "-" : completed}</h2>
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
              <button onClick={() => setFilter("All")} className={`rounded-lg border border-border-theme px-3 py-2 text-xs text-text-secondary hover:border-accent-gold hover:text-accent-gold ${filter === "All" ? "bg-accent-gold/5" : ""}`}>
                All
              </button>
              <button onClick={() => setFilter("Pending")} className={`rounded-lg border border-border-theme px-3 py-2 text-xs text-text-secondary hover:border-accent-gold hover:text-accent-gold ${filter === "Pending" ? "bg-accent-gold/5" : ""}`}>
                Pending
              </button>
              <button onClick={() => setFilter("Completed")} className={`rounded-lg border border-border-theme px-3 py-2 text-xs text-text-secondary hover:border-accent-gold hover:text-accent-gold ${filter === "Completed" ? "bg-accent-gold/5" : ""}`}>
                Completed
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {loading ? (
              <div className="text-center text-sm text-text-secondary py-10">Loading tasks...</div>
            ) : filteredTasks.length === 0 ? (
              <div className="text-center text-sm text-text-secondary py-10">No tasks found.</div>
            ) : (
              filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-xl border border-border-theme bg-background-primary p-5 transition hover:border-accent-gold"
              >
                <div className="flex items-center gap-4">
                  <div>
                    {task.status === "Completed" ? (
                      <CheckCircle2 size={22} className="text-green-400" />
                    ) : task.status === "In Progress" ? (
                      <Clock3 size={22} className="text-accent-gold" />
                    ) : (
                      <Circle size={22} className="text-text-secondary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{task.title}</h3>
                    <p className="mt-1 text-xs text-text-secondary">{task.description}</p>
                    <div className="mt-2 flex items-center gap-3 text-[10px] text-text-secondary">
                      <span className="flex items-center gap-1">
                        <UserRound size={12} />
                        {task.assignee?.fullName || "Unassigned"}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays size={12} />
                        {formatDate(task.dueDate)}
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
            )))}
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