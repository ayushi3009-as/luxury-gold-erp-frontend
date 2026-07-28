"use client";

import { useEffect, useState } from "react";

export interface ExpenseData {
  id?: number;
  title: string;
  category: string;
  amount: number;
  payment: string;
}

interface ExpenseFormProps {
  initialData?: ExpenseData | null;
  onSave: (expense: ExpenseData) => void;
}

export default function ExpenseForm({
  initialData,
  onSave,
}: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("Cash");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setCategory(initialData.category);
      setAmount(initialData.amount.toString());
      setPayment(initialData.payment);
    } else {
      setTitle("");
      setCategory("");
      setAmount("");
      setPayment("Cash");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !category || !amount) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      id: initialData?.id,
      title,
      category,
      amount: Number(amount),
      payment,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Expense Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Office Rent"
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Category
        </label>

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Rent"
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Amount
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="5000"
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Payment Method
        </label>

        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        >
          <option>Cash</option>
          <option>UPI</option>
          <option>Bank</option>
          <option>Card</option>
        </select>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="reset"
          className="rounded-xl border border-gray-700 px-6 py-3 hover:bg-gray-800"
        >
          Reset
        </button>

        <button
          type="submit"
          className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
        >
          {initialData ? "Update Expense" : "Save Expense"}
        </button>
      </div>
    </form>
  );
}