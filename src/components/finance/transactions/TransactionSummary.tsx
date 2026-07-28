interface TransactionSummaryProps {
  totalTransactions: number;
  totalCredit: number;
  totalDebit: number;
}

export default function TransactionSummary({
  totalTransactions,
  totalCredit,
  totalDebit,
}: TransactionSummaryProps) {
  const cards = [
    {
      title: "Total Transactions",
      value: totalTransactions.toLocaleString(),
      color: "text-yellow-400",
    },
    {
      title: "Total Credit",
      value: `$${totalCredit.toLocaleString()}`,
      color: "text-green-400",
    },
    {
      title: "Total Debit",
      value: `$${totalDebit.toLocaleString()}`,
      color: "text-red-400",
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
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}