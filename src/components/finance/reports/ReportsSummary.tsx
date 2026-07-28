interface ReportsSummaryProps {
  totalSales: number;
  totalIncome: number;
  totalExpense: number;
  netProfit: number;
}

export default function ReportsSummary({
  totalSales,
  totalIncome,
  totalExpense,
  netProfit,
}: ReportsSummaryProps) {
  const cards = [
    {
      title: "Total Sales",
      value: `$${totalSales.toLocaleString()}`,
      color: "text-green-400",
    },
    {
      title: "Total Income",
      value: `$${totalIncome.toLocaleString()}`,
      color: "text-blue-400",
    },
    {
      title: "Total Expense",
      value: `$${totalExpense.toLocaleString()}`,
      color: "text-red-400",
    },
    {
      title: "Net Profit",
      value: `$${netProfit.toLocaleString()}`,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-yellow-600/20 bg-[#151515] p-6 shadow-lg"
        >
          <p className="text-sm text-gray-400">{card.title}</p>

          <h2 className={`mt-3 text-3xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}