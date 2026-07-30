import {
  TrendingUp,
  TrendingDown,
  CalendarDays,
  Search,
} from "lucide-react";



const rateHistory = [
  {
    date: "24 July 2026",
    gold24k: "₹ 9,850",
    gold22k: "₹ 9,030",
    change: "+2.4%",
    trend: "up",
  },
  {
    date: "23 July 2026",
    gold24k: "₹ 9,620",
    gold22k: "₹ 8,820",
    change: "+1.8%",
    trend: "up",
  },
  {
    date: "22 July 2026",
    gold24k: "₹ 9,450",
    gold22k: "₹ 8,650",
    change: "-0.6%",
    trend: "down",
  },
  {
    date: "21 July 2026",
    gold24k: "₹ 9,510",
    gold22k: "₹ 8,700",
    change: "+1.2%",
    trend: "up",
  },
];

export default function GoldRateHistoryPage() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" p-8">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary">
              Gold Rate / History
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Gold Rate History
            </h1>

            <p className="mt-2 text-text-secondary">
              View historical gold rate changes and market trends.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold">
            <CalendarDays size={16} />
            Select Date
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-sm text-text-secondary">
              CURRENT 24K RATE
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              ₹ 9,850
            </h2>

            <p className="mt-2 flex items-center gap-1 text-sm text-green-400">
              <TrendingUp size={15} />
              +2.4% today
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-sm text-text-secondary">
              HIGHEST RATE
            </p>

            <h2 className="mt-3 text-2xl font-bold text-accent-gold">
              ₹ 9,850
            </h2>

            <p className="mt-2 text-sm text-text-secondary">
              24 July 2026
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-sm text-text-secondary">
              RATE CHANGE
            </p>

            <h2 className="mt-3 text-2xl font-bold text-green-400">
              +₹ 230
            </h2>

            <p className="mt-2 text-sm text-text-secondary">
              Compared to previous day
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-accent-gold">
            RATE HISTORY
          </h2>

          <div className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2">
            <Search size={16} className="text-text-secondary" />

            <input
              type="text"
              placeholder="Search date..."
              className="bg-transparent text-sm text-text-primary outline-none placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-hidden rounded-xl border border-border-theme bg-background-secondary">

          <table className="w-full text-left">

            <thead className="border-b border-border-theme bg-[#151611]">
              <tr>
                <th className="px-6 py-4 text-sm text-text-secondary">
                  DATE
                </th>

                <th className="px-6 py-4 text-sm text-text-secondary">
                  24K GOLD
                </th>

                <th className="px-6 py-4 text-sm text-text-secondary">
                  22K GOLD
                </th>

                <th className="px-6 py-4 text-sm text-text-secondary">
                  CHANGE
                </th>

                <th className="px-6 py-4 text-sm text-text-secondary">
                  STATUS
                </th>
              </tr>
            </thead>

            <tbody>
              {rateHistory.map((rate) => (
                <tr
                  key={rate.date}
                  className="border-b border-[#292519] hover:bg-background-tertiary"
                >
                  <td className="px-6 py-5 text-sm">
                    {rate.date}
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {rate.gold24k}
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {rate.gold22k}
                  </td>

                  <td
                    className={`px-6 py-5 ${
                      rate.trend === "up"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {rate.trend === "up" ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}

                      {rate.change}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full border border-[#574719] bg-[#211c0d] px-3 py-1 text-xs text-accent-gold">
                      Recorded
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </main>
    </div>
  );
}