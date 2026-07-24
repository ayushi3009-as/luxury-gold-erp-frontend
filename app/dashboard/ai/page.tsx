"use client";

import {
  BrainCircuit,
  TrendingUp,
  Package,
  Users,
  ShoppingCart,
  AlertTriangle,
  Sparkles,
  Activity,
} from "lucide-react";

const insights = [
  {
    title: "Sales Growth Prediction",
    description:
      "Sales are expected to increase by 18% next month based on current trends.",
    type: "Positive",
  },
  {
    title: "Inventory Alert",
    description:
      "18 jewellery products may reach low stock levels within the next 7 days.",
    type: "Warning",
  },
  {
    title: "Customer Trend",
    description:
      "Diamond jewellery demand has increased significantly this month.",
    type: "Positive",
  },
];

const predictions = [
  {
    label: "Next Month Revenue",
    value: "₹ 15.2L",
    growth: "+18.5%",
  },
  {
    label: "Expected Sales",
    value: "1,850",
    growth: "+14.2%",
  },
  {
    label: "Customer Growth",
    value: "24.8%",
    growth: "+8.4%",
  },
];

export default function AIDashboard() {
  return (
    <main className="min-h-screen bg-[#090a09] p-6 text-white">

      {/* HEADER */}
      <div className="mb-8">
        <p className="text-sm text-gray-500">
          Dashboard / AI Dashboard
        </p>

        <div className="mt-3 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#66521d] bg-[#211c0f] text-[#e5b72e]">
            <BrainCircuit size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              AI Dashboard
            </h1>

            <p className="mt-1 text-gray-400">
              Intelligent insights, predictions and business recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* AI STATUS */}
      <div className="rounded-xl border border-[#66521d] bg-[#15130d] p-5">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
              <Activity size={22} />
            </div>

            <div>
              <h2 className="font-semibold">
                AI Engine is Active
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Last analysis completed a few minutes ago
              </p>
            </div>
          </div>

          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
            Online
          </span>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        <AICard
          title="AI CONFIDENCE SCORE"
          value="94.8%"
          subtitle="High prediction accuracy"
          icon={<BrainCircuit size={22} />}
        />

        <AICard
          title="SALES PREDICTION"
          value="+18.5%"
          subtitle="Expected growth next month"
          icon={<TrendingUp size={22} />}
        />

        <AICard
          title="INVENTORY RISK"
          value="18 Items"
          subtitle="May reach low stock"
          icon={<Package size={22} />}
        />

        <AICard
          title="CUSTOMER INSIGHTS"
          value="2,450"
          subtitle="Customer patterns analyzed"
          icon={<Users size={22} />}
        />

      </div>

      {/* PREDICTIONS */}
      <section className="mt-6 rounded-xl border border-[#40351a] bg-[#101210] p-5">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="flex items-center gap-2 font-semibold text-[#e5b72e]">
              <Sparkles size={20} />
              AI BUSINESS PREDICTIONS
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Predictions generated from current business data.
            </p>
          </div>

          <span className="rounded-full bg-[#211c0f] px-3 py-1 text-xs text-[#e5b72e]">
            AI Powered
          </span>

        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

          {predictions.map((prediction) => (
            <div
              key={prediction.label}
              className="rounded-xl border border-[#302b1d] bg-[#151610] p-5"
            >
              <p className="text-xs text-gray-500">
                {prediction.label}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {prediction.value}
              </h3>

              <p className="mt-2 text-sm text-green-400">
                {prediction.growth} expected
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* TWO COLUMNS */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* SALES FORECAST */}
        <section className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#e5b72e]">
                SALES FORECAST
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                AI predicted sales trend
              </p>
            </div>

            <TrendingUp
              size={22}
              className="text-[#d9a928]"
            />
          </div>

          <div className="mt-8 flex h-64 items-end gap-4 border-b border-l border-[#302b1d] px-5">

            {[
              { month: "Aug", height: "42%" },
              { month: "Sep", height: "55%" },
              { month: "Oct", height: "48%" },
              { month: "Nov", height: "68%" },
              { month: "Dec", height: "75%" },
              { month: "Jan", height: "92%" },
            ].map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className="w-full max-w-[48px] rounded-t-md bg-[#d9a928]"
                  style={{
                    height: item.height,
                  }}
                />

                <span className="text-xs text-gray-500">
                  {item.month}
                </span>
              </div>
            ))}

          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="font-semibold text-[#e5b72e]">
                AI RECOMMENDATIONS
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Suggested actions for your business
              </p>
            </div>

            <Sparkles
              size={22}
              className="text-[#d9a928]"
            />
          </div>

          <div className="mt-5 space-y-4">

            <Recommendation
              icon={<ShoppingCart size={18} />}
              title="Increase Diamond Inventory"
              description="Demand is expected to rise by 22% next month."
            />

            <Recommendation
              icon={<Package size={18} />}
              title="Restock Gold Bangles"
              description="Current inventory may not meet expected demand."
            />

            <Recommendation
              icon={<Users size={18} />}
              title="Target Premium Customers"
              description="High-value customers show increased purchase activity."
            />

          </div>
        </section>
      </div>

      {/* INSIGHTS */}
      <section className="mt-6 rounded-xl border border-[#40351a] bg-[#101210] p-5">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="font-semibold text-[#e5b72e]">
              AI BUSINESS INSIGHTS
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Important insights detected by the AI engine.
            </p>
          </div>

          <BrainCircuit
            size={22}
            className="text-[#d9a928]"
          />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">

          {insights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-xl border border-[#302b1d] bg-[#151610] p-5"
            >

              <div className="flex items-start justify-between">

                <h3 className="font-medium">
                  {insight.title}
                </h3>

                {insight.type === "Warning" ? (
                  <AlertTriangle
                    size={18}
                    className="text-yellow-400"
                  />
                ) : (
                  <TrendingUp
                    size={18}
                    className="text-green-400"
                  />
                )}

              </div>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {insight.description}
              </p>

              <span
                className={`mt-4 inline-block rounded-full px-3 py-1 text-xs ${
                  insight.type === "Warning"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-green-500/10 text-green-400"
                }`}
              >
                {insight.type}
              </span>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

function AICard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#66521d] bg-[#211c0f] text-[#e6b92e]">
        {icon}
      </div>

      <p className="mt-5 text-xs text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-semibold">
        {value}
      </h3>

      <p className="mt-2 text-xs text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}

function Recommendation({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-[#302b1d] bg-[#151610] p-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#211c0f] text-[#e5b72e]">
        {icon}
      </div>

      <div>
        <h3 className="font-medium">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {description}
        </p>
      </div>

    </div>
  );
}