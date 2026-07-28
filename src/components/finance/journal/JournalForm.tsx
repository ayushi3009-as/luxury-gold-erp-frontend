"use client";

import { useState } from "react";

import DateInput from "@/components/finance/forms/DateInput";
import FormInput from "@/components/finance/forms/FormInput";
import FormSelect from "@/components/finance/forms/FormSelect";
import AmountInput from "@/components/finance/forms/AmountInput";
import FormTextarea from "@/components/finance/forms/FormTextarea";
import FormActions from "@/components/finance/forms/FormActions";

export default function JournalForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Journal Entry Saved Successfully");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="grid gap-6 md:grid-cols-2">

        <FormInput
          label="Voucher Number"
          placeholder="JV-0001"
          required
        />

        <DateInput
          label="Entry Date"
          required
        />

        <FormSelect
          label="Debit Account"
          required
          options={[
            { label: "Select Debit Account", value: "" },
            { label: "Cash Account", value: "cash" },
            { label: "Bank Account", value: "bank" },
            { label: "Sales Account", value: "sales" },
            { label: "Purchase Account", value: "purchase" },
          ]}
        />

        <FormSelect
          label="Credit Account"
          required
          options={[
            { label: "Select Credit Account", value: "" },
            { label: "Cash Account", value: "cash" },
            { label: "Bank Account", value: "bank" },
            { label: "Sales Account", value: "sales" },
            { label: "Purchase Account", value: "purchase" },
          ]}
        />

        <AmountInput
          label="Amount"
          placeholder="0.00"
          required
        />

        <FormSelect
          label="Status"
          options={[
            { label: "Draft", value: "draft" },
            { label: "Pending", value: "pending" },
            { label: "Posted", value: "posted" },
          ]}
        />

      </div>

      <FormTextarea
        label="Narration"
        placeholder="Enter journal narration..."
      />

      <FormActions
        isLoading={loading}
        submitLabel="Save Journal Entry"
        cancelHref="/finance/journal"
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