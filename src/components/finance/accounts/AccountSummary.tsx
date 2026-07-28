interface AccountSummaryProps {
  totalAccounts: number;
  totalBalance: number;
  bankBalance: number;
  cashBalance: number;
}

export default function AccountSummary({
  totalAccounts,
  totalBalance,
  bankBalance,
  cashBalance,
}: AccountSummaryProps) {
  const cards = [
    {
      title: "Total Accounts",
      value: totalAccounts.toString(),
      color: "text-yellow-400",
    },
    {
      title: "Total Balance",
      value: `$${totalBalance.toLocaleString()}`,
      color: "text-green-400",
    },
    {
      title: "Bank Balance",
      value: `$${bankBalance.toLocaleString()}`,
      color: "text-blue-400",
    },
    {
      title: "Cash Balance",
      value: `$${cashBalance.toLocaleString()}`,
      color: "text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-yellow-600/20 bg-[#151515] p-6 shadow-lg"
        >
          <p className="text-sm text-gray-400">
            {card.title}
          </p>

          <h2 className={`mt-3 text-3xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}