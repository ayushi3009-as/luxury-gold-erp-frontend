"use client";

import { useEffect, useState } from "react";

export interface AccountData {
  id?: number;
  accountName: string;
  accountNumber: string;
  type: "Bank" | "Cash" | "Wallet" | "Credit Card";
  balance: number;
  status: "Active" | "Inactive";
}

interface AccountFormProps {
  initialData?: AccountData | null;
  onSave: (account: AccountData) => void;
}

export default function AccountForm({
  initialData,
  onSave,
}: AccountFormProps) {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [type, setType] = useState<
    "Bank" | "Cash" | "Wallet" | "Credit Card"
  >("Bank");
  const [balance, setBalance] = useState("");
  const [status, setStatus] = useState<
    "Active" | "Inactive"
  >("Active");

  useEffect(() => {
    if (initialData) {
      setAccountName(initialData.accountName);
      setAccountNumber(initialData.accountNumber);
      setType(initialData.type);
      setBalance(initialData.balance.toString());
      setStatus(initialData.status);
    } else {
      setAccountName("");
      setAccountNumber("");
      setType("Bank");
      setBalance("");
      setStatus("Active");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!accountName || !accountNumber || !balance) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      id: initialData?.id,
      accountName,
      accountNumber,
      type,
      balance: Number(balance),
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
          Account Name
        </label>

        <input
          type="text"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          placeholder="HDFC Current Account"
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Account Number
        </label>

        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="123456789012"
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Account Type
          </label>

          <select
            value={type}
            onChange={(e) =>
              setType(
                e.target.value as
                  | "Bank"
                  | "Cash"
                  | "Wallet"
                  | "Credit Card"
              )
            }
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          >
            <option value="Bank">Bank</option>
            <option value="Cash">Cash</option>
            <option value="Wallet">Wallet</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Opening Balance
          </label>

          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="10000"
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Status
        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value as "Active" | "Inactive"
            )
          }
          className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
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
          {initialData
            ? "Update Account"
            : "Save Account"}
        </button>

      </div>
    </form>
  );
}