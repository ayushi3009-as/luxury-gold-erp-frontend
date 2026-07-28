"use client";

import { useState } from "react";

import FormInput from "@/components/finance/forms/FormInput";
import FormSelect from "@/components/finance/forms/FormSelect";
import FormTextarea from "@/components/finance/forms/FormTextarea";
import AmountInput from "@/components/finance/forms/AmountInput";
import FormActions from "@/components/finance/forms/FormActions";

export default function LedgerForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Ledger Saved Successfully");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="grid gap-6 md:grid-cols-2">

        <FormInput
          label="Ledger Name"
          placeholder="Enter Ledger Name"
          required
        />

        <FormSelect
          label="Ledger Type"
          required
          options={[
            { label: "Select Type", value: "" },
            { label: "Asset", value: "asset" },
            { label: "Liability", value: "liability" },
            { label: "Income", value: "income" },
            { label: "Expense", value: "expense" },
            { label: "Equity", value: "equity" },
          ]}
        />

        <AmountInput
          label="Opening Balance"
          placeholder="0.00"
        />

        <FormSelect
          label="Status"
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />

      </div>

      <FormTextarea
        label="Description"
        placeholder="Enter ledger description..."
      />

      <FormActions
        isLoading={loading}
        submitLabel="Save Ledger"
        cancelHref="/finance/ledger"
        showReset
        onReset={() => {
          const form = document.querySelector("form");
          if (form) {
            form.reset();
          }
        }}
      />

    </form>
  );
}