"use client";

import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";



const insights = [
  {
    title: "Revenue Growth Opportunity",
    description:
      "Gold jewellery sales are showing strong growth. Increasing premium product visibility may improve revenue further.",
    type: "Growth Opportunity",
    icon: TrendingUp,
  },
  {
    title: "Customer Retention Opportunity",
    description:
      "Repeat customers are contributing significantly to revenue. Loyalty campaigns can improve repeat purchase frequency.",
    type: "Customer Insight",
    icon: Sparkles,
  },
  {
    title: "Inventory Attention Required",
    description:
      "Some slow-moving products have remained in inventory for a long period and may require promotional pricing.",
    type: "Inventory Alert",
    icon: AlertTriangle,
  },
];

export default function AIInsightsPage() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-8">

        {/* HEADER */}
        <div>
          <p className="text-xs text-text-secondary">
            Analytics / AI Insights
          </p>

          <div className="mt-2 flex items-center gap-3">
            <div className="rounded-xl bg-[#211c0d] p-3">
              <Brain
                size={26}
                className="text-accent-gold"
              />
            </div>

            <h1 className="text-3xl font-bold text-accent-gold">
              AI Insights
            </h1>
          </div>

          <p className="mt-3 text-sm text-text-secondary">
            AI-powered analysis to help you understand your business better.
          </p>
        </div>

        {/* AI SUMMARY */}
        <div className="mt-8 rounded-2xl border border-[#6c5420] bg-gradient-to-r from-[#18150c] to-[#11130f] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-[#b98c20] p-3">
              <Sparkles
                size={24}
                className="text-black"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-accent-gold">
                AI Business Summary
              </h2>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-text-secondary">
                Your business is currently showing positive growth. Revenue
                performance is improving, customer activity is increasing,
                and gold jewellery remains the strongest performing category.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <ArrowUpRight size={17} />
                Overall business performance is trending positively.
              </div>
            </div>

          </div>
        </div>

        {/* INSIGHT CARDS */}
        <div className="mt-8 grid grid-cols-3 gap-6">

          {insights.map((insight) => {
            const Icon = insight.icon;

            return (
              <div
                key={insight.title}
                className="rounded-xl border border-border-theme bg-[#11130f] p-6 transition hover:border-[#b98c20]"
              >
                <div className="flex items-center justify-between">

                  <div className="rounded-lg bg-[#211c0d] p-3">
                    <Icon
                      size={21}
                      className="text-accent-gold"
                    />
                  </div>

                  <span className="rounded-full border border-[#51421c] px-3 py-1 text-[10px] text-accent-gold">
                    {insight.type}
                  </span>

                </div>

                <h2 className="mt-6 text-base font-semibold">
                  {insight.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {insight.description}
                </p>

                <button className="mt-5 text-xs text-accent-gold hover:text-accent-gold">
                  View detailed analysis →
                </button>
              </div>
            );
          })}

        </div>

        {/* RECOMMENDATIONS */}
        <div className="mt-8 rounded-xl border border-border-theme bg-[#11130f] p-6">

          <div className="flex items-center gap-3">
            <Lightbulb
              size={21}
              className="text-accent-gold"
            />

            <div>
              <h2 className="font-semibold text-accent-gold">
                AI Recommendations
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Suggested actions based on your business data
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-5">

            <div className="rounded-lg bg-[#151711] p-5">
              <p className="text-sm font-medium">
                Promote high-performing products
              </p>

              <p className="mt-2 text-xs leading-5 text-text-secondary">
                Focus marketing efforts on products with strong sales
                performance.
              </p>
            </div>

            <div className="rounded-lg bg-[#151711] p-5">
              <p className="text-sm font-medium">
                Improve customer loyalty
              </p>

              <p className="mt-2 text-xs leading-5 text-text-secondary">
                Create targeted offers for repeat customers to increase
                retention.
              </p>
            </div>

            <div className="rounded-lg bg-[#151711] p-5">
              <p className="text-sm font-medium">
                Reduce slow-moving stock
              </p>

              <p className="mt-2 text-xs leading-5 text-text-secondary">
                Use discounts or campaigns to improve inventory movement.
              </p>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}