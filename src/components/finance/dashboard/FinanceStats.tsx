import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Landmark,
} from "lucide-react";

export default function FinanceStats() {
  const stats = [
    {
      title: "Total Balance",
      value: "$850,000",
      icon: Wallet,
    },
    {
      title: "Income",
      value: "$1,250,000",
      icon: TrendingUp,
    },
    {
      title: "Expenses",
      value: "$400,000",
      icon: TrendingDown,
    },
    {
      title: "Bank Accounts",
      value: "8",
      icon: Landmark,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-yellow-600/30 bg-[#151515] p-8 transition-all duration-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/10"
          >
            <Icon
              size={40}
              className="mb-6 text-yellow-500"
            />

            <p className="text-lg text-gray-400">
              {item.title}
            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">
              {item.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}