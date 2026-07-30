import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Clock,
  Coins,
} from "lucide-react";



export default function SilverRatePage() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" p-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-text-secondary">
            Gold Rate / Silver Rate
          </p>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Silver Rate
              </h1>

              <p className="mt-2 text-text-secondary">
                Monitor current silver market rates and price movement.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold">
              <RefreshCw size={16} />
              Update Rate
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {/* Per Gram */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <Coins
                size={26}
                className="text-accent-gold"
              />

              <span className="flex items-center gap-1 text-sm text-green-400">
                <TrendingUp size={15} />
                2.4%
              </span>
            </div>

            <p className="mt-5 text-sm text-text-secondary">
              SILVER RATE / GRAM
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              ₹ 92.50
            </h2>
          </div>

          {/* 10 Gram */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-sm text-text-secondary">
              SILVER RATE / 10 GRAM
            </p>

            <h2 className="mt-5 text-2xl font-bold">
              ₹ 925
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              Current market rate
            </p>
          </div>

          {/* 1 KG */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-sm text-text-secondary">
              SILVER RATE / KG
            </p>

            <h2 className="mt-5 text-2xl font-bold">
              ₹ 92,500
            </h2>

            <p className="mt-2 text-xs text-text-secondary">
              Based on current market price
            </p>
          </div>

          {/* Last Updated */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <Clock
              size={26}
              className="text-accent-gold"
            />

            <p className="mt-5 text-sm text-text-secondary">
              LAST UPDATED
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              10:45 AM
            </h2>

            <p className="mt-2 text-xs text-green-400">
              Live market data
            </p>
          </div>

        </div>

        {/* Rate Details */}
        <div className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-6">

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-accent-gold">
              SILVER RATE DETAILS
            </h2>

            <span className="rounded-full border border-green-900 bg-green-950 px-3 py-1 text-xs text-green-400">
              Market Open
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-lg border border-[#302a1b] bg-[#151611] p-4">
              <p className="text-xs text-text-secondary">
                PURITY
              </p>

              <p className="mt-2 text-lg font-semibold">
                999 Fine Silver
              </p>
            </div>

            <div className="rounded-lg border border-[#302a1b] bg-[#151611] p-4">
              <p className="text-xs text-text-secondary">
                TODAY'S CHANGE
              </p>

              <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-green-400">
                <TrendingUp size={18} />
                +₹ 2.20
              </p>
            </div>

            <div className="rounded-lg border border-[#302a1b] bg-[#151611] p-4">
              <p className="text-xs text-text-secondary">
                PREVIOUS RATE
              </p>

              <p className="mt-2 text-lg font-semibold">
                ₹ 90.30 / gram
              </p>
            </div>

          </div>

        </div>

        {/* Market Summary */}
        <div className="mt-6 grid gap-5 xl:grid-cols-2">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-6">
            <h2 className="text-lg font-semibold text-accent-gold">
              MARKET SUMMARY
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex items-center justify-between border-b border-[#292519] pb-3">
                <span className="text-text-secondary">
                  Opening Rate
                </span>

                <span>
                  ₹ 90.80 / gram
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292519] pb-3">
                <span className="text-text-secondary">
                  Highest Today
                </span>

                <span className="text-green-400">
                  ₹ 93.10 / gram
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-text-secondary">
                  Lowest Today
                </span>

                <span className="text-red-400">
                  ₹ 90.10 / gram
                </span>
              </div>

            </div>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-6">
            <h2 className="text-lg font-semibold text-accent-gold">
              QUICK ACTIONS
            </h2>

            <div className="mt-5 grid gap-3">

              <button className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e]">
                Update Silver Rate
              </button>

              <button className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e]">
                View Rate History
              </button>

              <button className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e]">
                Compare With Gold
              </button>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}