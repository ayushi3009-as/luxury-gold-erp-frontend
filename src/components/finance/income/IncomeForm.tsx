"use client";

import { useEffect, useState } from "react";

export interface IncomeData {
  id?: number;
  source: string;
  category: string;
  amount: number;
  payment: string;
}

interface IncomeFormProps {
  initialData?: IncomeData | null;
  onSave: (income: IncomeData) => void;
}

export default function IncomeForm({
  initialData,
  onSave,
}: IncomeFormProps) {
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("Cash");

  useEffect(() => {
    if (initialData) {
      setSource(initialData.source);
      setCategory(initialData.category);
      setAmount(initialData.amount.toString());
      setPayment(initialData.payment);
    } else {
      setSource("");
      setCategory("");
      setAmount("");
      setPayment("Cash");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!source || !category || !amount) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      id: initialData?.id,
      source,
      category,
      amount: Number(amount),
      payment,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Income Source"
        className="w-full rounded-lg border border-gray-700 bg-[#0B0B0B] p-3"
      />

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full rounded-lg border border-gray-700 bg-[#0B0B0B] p-3"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full rounded-lg border border-gray-700 bg-[#0B0B0B] p-3"
      />

      <select
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-[#0B0B0B] p-3"
      >
        <option>Cash</option>
        <option>UPI</option>
        <option>Bank</option>
        <option>Card</option>
      </select>

      <button
        type="submit"
        className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black"
      >
        {initialData ? "Update Income" : "Save Income"}
      </button>

    </form>
  );
}