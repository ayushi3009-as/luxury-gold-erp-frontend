interface ExpenseSummaryProps {
  total: number;
  today: number;
  monthly: number;
}

export default function ExpenseSummary({
  total,
  today,
  monthly,
}: ExpenseSummaryProps) {
  const cards = [
    {
      title: "Total Expense",
      value: total,
      color: "text-red-400",
    },
    {
      title: "Today's Expense",
      value: today,
      color: "text-yellow-400",
    },
    {
      title: "Monthly Expense",
      value: monthly,
      color: "text-blue-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-yellow-600/20 bg-[#151515] p-6"
        >
          <p className="text-gray-400">
            {card.title}
          </p>

          <h2 className={`mt-3 text-4xl font-bold ${card.color}`}>
            ${card.value.toLocaleString()}
          </h2>
        </div>
      ))}
    </div>
  );
}