"use client";

import { useMemo, useState } from "react";

import ExpenseHeader from "@/components/finance/expense/ExpenseHeader";
import ExpenseSummary from "@/components/finance/expense/ExpenseSummary";
import ExpenseFilters from "@/components/finance/expense/ExpenseFilters";
import ExpenseTable, {
  Expense,
} from "@/components/finance/expense/ExpenseTable";
import ExpenseForm, {
  ExpenseData,
} from "@/components/finance/expense/ExpenseForm";

export default function ExpensePage() {
  const [openForm, setOpenForm] = useState(false);

  const [search, setSearch] = useState("");

  const [editingExpense, setEditingExpense] =
    useState<Expense | null>(null);

  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      date: "28-07-2026",
      title: "Gold Purchase",
      category: "Purchase",
      amount: 30000,
      payment: "Bank",
    },
    {
      id: 2,
      date: "27-07-2026",
      title: "Employee Salary",
      category: "Salary",
      amount: 15000,
      payment: "Bank",
    },
    {
      id: 3,
      date: "26-07-2026",
      title: "Office Rent",
      category: "Rent",
      amount: 8000,
      payment: "Cash",
    },
  ]);

  const handleSaveExpense = (expense: ExpenseData) => {
    if (expense.id) {
      setExpenses((prev) =>
        prev.map((item) =>
          item.id === expense.id
            ? {
                ...item,
                ...expense,
              }
            : item
        )
      );
    } else {
      const newExpense: Expense = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        title: expense.title,
        category: expense.category,
        amount: expense.amount,
        payment: expense.payment,
      };

      setExpenses((prev) => [newExpense, ...prev]);
    }

    setEditingExpense(null);
    setOpenForm(false);
  };

  const handleDeleteExpense = (id: number) => {
    if (confirm("Delete this expense?")) {
      setExpenses((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  const handleEditExpense = (
    expense: Expense
  ) => {
    setEditingExpense(expense);
    setOpenForm(true);
  };

  const handleClose = () => {
    setEditingExpense(null);
    setOpenForm(false);
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const keyword = search.toLowerCase();

      return (
        expense.title
          .toLowerCase()
          .includes(keyword) ||
        expense.category
          .toLowerCase()
          .includes(keyword) ||
        expense.payment
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [expenses, search]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8 text-white">

      <ExpenseHeader
        onAddClick={() => {
          setEditingExpense(null);
          setOpenForm(true);
        }}
      />

      <div className="mt-8">
        <ExpenseSummary
          total={53000}
          today={30000}
          monthly={180000}
        />
      </div>

      <div className="mt-8">
        <ExpenseFilters
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="mt-8">
        <ExpenseTable
          expenses={filteredExpenses}
          onEdit={handleEditExpense}
          onDelete={handleDeleteExpense}
        />
      </div>

      {openForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

          <div className="w-full max-w-2xl rounded-2xl bg-[#151515] p-8">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-yellow-500">
                {editingExpense
                  ? "Edit Expense"
                  : "Add Expense"}
              </h2>

              <button
                onClick={handleClose}
                className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
              >
                Close
              </button>

            </div>

            <ExpenseForm
              initialData={editingExpense}
              onSave={handleSaveExpense}
            />

          </div>

        </div>
      )}

    </div>
  );
}