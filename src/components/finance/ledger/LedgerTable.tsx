"use client";

import DataTable from "@/components/finance/tables/DataTable";
import StatusBadge from "@/components/finance/common/StatusBadge";
import ActionButtons from "@/components/finance/common/ActionButtons";

const ledgers = [
  {
    id: 1,
    name: "Cash Account",
    type: "Asset",
    balance: "₹2,50,000",
    status: "Active",
  },
  {
    id: 2,
    name: "Sales Account",
    type: "Income",
    balance: "₹12,40,000",
    status: "Active",
  },
  {
    id: 3,
    name: "Purchase Account",
    type: "Expense",
    balance: "₹4,80,000",
    status: "Pending",
  },
  {
    id: 4,
    name: "GST Payable",
    type: "Liability",
    balance: "₹95,000",
    status: "Active",
  },
];

export default function LedgerTable() {
  return (
    <DataTable
      headers={[
        "Ledger Name",
        "Type",
        "Balance",
        "Status",
        "Actions",
      ]}
    >
      {ledgers.map((ledger) => (
        <tr
          key={ledger.id}
          className="transition hover:bg-[#1A1A1A]"
        >
          <td className="px-6 py-4 font-medium text-white">
            {ledger.name}
          </td>

          <td className="px-6 py-4 text-gray-300">
            {ledger.type}
          </td>

          <td className="px-6 py-4 font-semibold text-yellow-500">
            {ledger.balance}
          </td>

          <td className="px-6 py-4">
            <StatusBadge status={ledger.status} />
          </td>

          <td className="px-6 py-4">
            <ActionButtons
              viewHref={`/finance/ledger/view/${ledger.id}`}
              editHref={`/finance/ledger/edit/${ledger.id}`}
              showDelete
              onDelete={() =>
                alert(`Delete Ledger ${ledger.id}`)
              }
            />
          </td>
        </tr>
      ))}
    </DataTable>
  );
}