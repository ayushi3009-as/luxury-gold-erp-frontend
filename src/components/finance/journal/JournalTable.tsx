"use client";

import DataTable from "@/components/finance/tables/DataTable";
import StatusBadge from "@/components/finance/common/StatusBadge";
import ActionButtons from "@/components/finance/common/ActionButtons";

const journalEntries = [
  {
    id: 1,
    voucherNo: "JV-0001",
    date: "28 Jul 2026",
    debit: "Cash Account",
    credit: "Sales Account",
    amount: "₹1,25,000",
    status: "Posted",
  },
  {
    id: 2,
    voucherNo: "JV-0002",
    date: "28 Jul 2026",
    debit: "Office Expense",
    credit: "Cash Account",
    amount: "₹8,500",
    status: "Pending",
  },
  {
    id: 3,
    voucherNo: "JV-0003",
    date: "27 Jul 2026",
    debit: "Bank Account",
    credit: "Customer Account",
    amount: "₹75,000",
    status: "Posted",
  },
  {
    id: 4,
    voucherNo: "JV-0004",
    date: "26 Jul 2026",
    debit: "GST Input",
    credit: "Purchase Account",
    amount: "₹12,800",
    status: "Draft",
  },
];

export default function JournalTable() {
  return (
    <DataTable
      headers={[
        "Voucher No",
        "Date",
        "Debit Account",
        "Credit Account",
        "Amount",
        "Status",
        "Actions",
      ]}
    >
      {journalEntries.map((entry) => (
        <tr
          key={entry.id}
          className="transition hover:bg-[#1A1A1A]"
        >
          <td className="px-6 py-4 font-medium text-white">
            {entry.voucherNo}
          </td>

          <td className="px-6 py-4 text-gray-300">
            {entry.date}
          </td>

          <td className="px-6 py-4">
            {entry.debit}
          </td>

          <td className="px-6 py-4">
            {entry.credit}
          </td>

          <td className="px-6 py-4 font-semibold text-yellow-500">
            {entry.amount}
          </td>

          <td className="px-6 py-4">
            <StatusBadge status={entry.status} />
          </td>

          <td className="px-6 py-4">
            <ActionButtons
              viewHref={`/finance/journal/view/${entry.id}`}
              editHref={`/finance/journal/edit/${entry.id}`}
              showDelete
              onDelete={() =>
                alert(`Delete Journal Entry ${entry.id}`)
              }
            />
          </td>
        </tr>
      ))}
    </DataTable>
  );
}