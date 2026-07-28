"use client";

import { useMemo, useState } from "react";

import IncomeHeader from "@/components/finance/income/IncomeHeader";
import IncomeSummary from "@/components/finance/income/IncomeSummary";
import IncomeFilters from "@/components/finance/income/IncomeFilters";
import IncomeTable from "@/components/finance/income/IncomeTable";
import IncomeForm, {
  IncomeData,
} from "@/components/finance/income/IncomeForm";

interface Income extends IncomeData {
  id: number;
  date: string;
}

export default function IncomePage() {

  const [openForm, setOpenForm] = useState(false);

  const [search, setSearch] = useState("");

  const [editingIncome, setEditingIncome] =
    useState<Income | null>(null);

  const [incomes, setIncomes] = useState<Income[]>([
    {
      id: 1,
      date: "28-07-2026",
      source: "Gold Jewellery Sale",
      category: "Sales",
      amount: 25000,
      payment: "UPI",
    },
    {
      id: 2,
      date: "27-07-2026",
      source: "Repair Service",
      category: "Repair",
      amount: 5000,
      payment: "Cash",
    },
    {
      id: 3,
      date: "26-07-2026",
      source: "Gold Saving Scheme",
      category: "Scheme",
      amount: 15000,
      payment: "Bank",
    },
  ]);

  const handleSaveIncome = (income: IncomeData) => {

    if (income.id) {

      setIncomes((prev) =>
        prev.map((item) =>
          item.id === income.id
            ? {
                ...item,
                ...income,
              }
            : item
        )
      );

    } else {

      const newIncome: Income = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        source: income.source,
        category: income.category,
        amount: income.amount,
        payment: income.payment,
      };

      setIncomes((prev) => [newIncome, ...prev]);
    }

    setEditingIncome(null);
    setOpenForm(false);
  };

  const handleDeleteIncome = (id: number) => {

    if (confirm("Delete this income?")) {

      setIncomes((prev) =>
        prev.filter((item) => item.id !== id)
      );

    }
  };

  const handleEditIncome = (income: Income) => {

    setEditingIncome(income);

    setOpenForm(true);

  };
    const handleClose = () => {
    setEditingIncome(null);
    setOpenForm(false);
  };

  const filteredIncomes = useMemo(() => {
    return incomes.filter((income) => {
      const keyword = search.toLowerCase();

      return (
        income.source.toLowerCase().includes(keyword) ||
        income.category.toLowerCase().includes(keyword) ||
        income.payment.toLowerCase().includes(keyword)
      );
    });
  }, [incomes, search]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8 text-white">

      <IncomeHeader
        onAddClick={() => {
          setEditingIncome(null);
          setOpenForm(true);
        }}
      />

      <div className="mt-8">
        <IncomeSummary
          total={45000}
          today={25000}
          monthly={125000}
        />
      </div>

      <div className="mt-8">
        <IncomeFilters
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="mt-8">
        <IncomeTable
          incomes={filteredIncomes}
          onEdit={handleEditIncome}
          onDelete={handleDeleteIncome}
        />
      </div>

      {openForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

          <div className="w-full max-w-2xl rounded-2xl bg-[#151515] p-8">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-yellow-500">
                {editingIncome ? "Edit Income" : "Add Income"}
              </h2>

              <button
                onClick={handleClose}
                className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Close
              </button>

            </div>
                        <IncomeForm
              initialData={editingIncome}
              onSave={handleSaveIncome}
            />

          </div>

        </div>
      )}

    </div>
  );
}