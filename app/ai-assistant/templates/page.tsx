import { Sparkles } from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Daily Sales Report",
    description: "Generate today's complete sales report.",
  },
  {
    id: 2,
    title: "Inventory Summary",
    description: "Show current inventory and low stock products.",
  },
  {
    id: 3,
    title: "Customer Analysis",
    description: "View customer purchase history and analytics.",
  },
  {
    id: 4,
    title: "Repair Status",
    description: "Check pending and completed repair orders.",
  },
  {
    id: 5,
    title: "GST Report",
    description: "Generate GST sales and purchase reports.",
  },
  {
    id: 6,
    title: "Employee Performance",
    description: "View employee sales performance report.",
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-accent-gold">
          AI Templates
        </h1>

        <p className="text-text-secondary mt-2">
          Use ready-made AI prompts for faster reports.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-background-secondary border border-border-theme rounded-2xl p-6 hover:border-yellow-500 transition cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-gold flex items-center justify-center mb-4">
              <Sparkles className="text-black" size={22} />
            </div>

            <h2 className="text-xl font-semibold text-text-primary">
              {template.title}
            </h2>

            <p className="text-text-secondary mt-3 leading-6">
              {template.description}
            </p>

            <button
              className="mt-6 w-full bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold py-3 rounded-xl transition"
            >
              Use Template
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}