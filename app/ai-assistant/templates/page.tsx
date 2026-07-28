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
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          AI Templates
        </h1>

        <p className="text-gray-400 mt-2">
          Use ready-made AI prompts for faster reports.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center mb-4">
              <Sparkles className="text-black" size={22} />
            </div>

            <h2 className="text-xl font-semibold text-white">
              {template.title}
            </h2>

            <p className="text-gray-400 mt-3 leading-6">
              {template.description}
            </p>

            <button
              className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition"
            >
              Use Template
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}