"use client";

import { useMemo, useState } from "react";

import TransactionHeader from "@/components/finance/transactions/TransactionHeader";
import TransactionSummary from "@/components/finance/transactions/TransactionSummary";
import TransactionFilters from "@/components/finance/transactions/TransactionFilters";
import TransactionTable, {
  Transaction,
} from "@/components/finance/transactions/TransactionTable";
import TransactionForm, {
  TransactionData,
} from "@/components/finance/transactions/TransactionForm";

export default function TransactionsPage() {
  const [openForm, setOpenForm] = useState(false);

  const [search, setSearch] = useState("");

  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      date: "28-07-2026",
      description: "Gold Jewellery Sale",
      type: "Credit",
      amount: 25000,
      payment: "UPI",
      status: "Completed",
    },
    {
      id: 2,
      date: "27-07-2026",
      description: "Gold Purchase",
      type: "Debit",
      amount: 30000,
      payment: "Bank",
      status: "Completed",
    },
    {
      id: 3,
      date: "26-07-2026",
      description: "Repair Service",
      type: "Credit",
      amount: 5000,
      payment: "Cash",
      status: "Pending",
    },
  ]);

  const handleSaveTransaction = (
    transaction: TransactionData
  ) => {
    if (transaction.id) {
      setTransactions((prev) =>
        prev.map((item) =>
          item.id === transaction.id
            ? {
                ...item,
                ...transaction,
              }
            : item
        )
      );
    } else {
      const newTransaction: Transaction = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        description: transaction.description,
        type: transaction.type,
        amount: transaction.amount,
        payment: transaction.payment,
        status: transaction.status,
      };

      setTransactions((prev) => [
        newTransaction,
        ...prev,
      ]);
    }

    setEditingTransaction(null);
    setOpenForm(false);
  };

  const handleDeleteTransaction = (id: number) => {
    if (
      confirm(
        "Are you sure you want to delete this transaction?"
      )
    ) {
      setTransactions((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  const handleEditTransaction = (
    transaction: Transaction
  ) => {
    setEditingTransaction(transaction);
    setOpenForm(true);
  };

  const handleClose = () => {
    setEditingTransaction(null);
    setOpenForm(false);
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const keyword = search.toLowerCase();

      return (
        transaction.description
          .toLowerCase()
          .includes(keyword) ||
        transaction.payment
          .toLowerCase()
          .includes(keyword) ||
        transaction.status
          .toLowerCase()
          .includes(keyword) ||
        transaction.type
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [transactions, search]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8 text-white">

      <TransactionHeader
        onAddClick={() => {
          setEditingTransaction(null);
          setOpenForm(true);
        }}
      />

      <div className="mt-8">
        <TransactionSummary
          totalTransactions={transactions.length}
          totalCredit={30000}
          totalDebit={30000}
        />
      </div>

      <div className="mt-8">
        <TransactionFilters
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="mt-8">
        <TransactionTable
          transactions={filteredTransactions}
          onEdit={handleEditTransaction}
          onDelete={handleDeleteTransaction}
        />
      </div>

      {openForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

          <div className="w-full max-w-2xl rounded-2xl bg-[#151515] p-8">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-yellow-500">
                {editingTransaction
                  ? "Edit Transaction"
                  : "Add Transaction"}
              </h2>

              <button
                onClick={handleClose}
                className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
              >
                Close
              </button>

            </div>

            <TransactionForm
              initialData={editingTransaction}
              onSave={handleSaveTransaction}
            />

          </div>

        </div>
      )}

    </div>
  );
}