"use client";

import { useEffect, useState } from "react";

export interface TransactionData {
  id?: number;
  description: string;
  type: "Credit" | "Debit";
  amount: number;
  payment: string;
  status: "Completed" | "Pending" | "Cancelled";
}

interface TransactionFormProps {
  initialData?: TransactionData | null;
  onSave: (transaction: TransactionData) => void;
}

export default function TransactionForm({
  initialData,
  onSave,
}: TransactionFormProps) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"Credit" | "Debit">("Credit");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("Cash");
  const [status, setStatus] = useState<
    "Completed" | "Pending" | "Cancelled"
  >("Completed");

  useEffect(() => {
    if (initialData) {
      setDescription(initialData.description);
      setType(initialData.type);
      setAmount(initialData.amount.toString());
      setPayment(initialData.payment);
      setStatus(initialData.status);
    } else {
      setDescription("");
      setType("Credit");
      setAmount("");
      setPayment("Cash");
      setStatus("Completed");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amount) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      id: initialData?.id,
      description,
      type,
      amount: Number(amount),
      payment,
      status,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Description
        </label>

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Gold Jewellery Sale"
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Type
          </label>

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value as "Credit" | "Debit")
            }
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          >
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1000"
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

      </div>

      <div className="grid grid-cols-2 gap-4">

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

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as
                  | "Completed"
                  | "Pending"
                  | "Cancelled"
              )
            }
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

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
          {initialData
            ? "Update Transaction"
            : "Save Transaction"}
        </button>

      </div>

    </form>
  );
}