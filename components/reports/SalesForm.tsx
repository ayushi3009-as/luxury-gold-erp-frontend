"use client";

interface SalesFormProps {
  isEdit?: boolean;
}

export default function SalesForm({
  isEdit = false,
}: SalesFormProps) {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Customer */}

        <div>

          <label className="block text-accent-gold mb-2">
            Customer Name
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "Rahul Patel" : ""}
            placeholder="Enter Customer Name"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />

        </div>

        {/* Invoice */}

        <div>

          <label className="block text-accent-gold mb-2">
            Invoice Number
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "INV001" : ""}
            placeholder="Invoice Number"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />

        </div>

        {/* Product */}

        <div>

          <label className="block text-accent-gold mb-2">
            Product Name
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "Gold Ring" : ""}
            placeholder="Product Name"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />

        </div>

        {/* Quantity */}

        <div>

          <label className="block text-accent-gold mb-2">
            Quantity
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "1" : ""}
            placeholder="Quantity"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />

        </div>

        {/* Amount */}

        <div>

          <label className="block text-accent-gold mb-2">
            Amount
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "45000" : ""}
            placeholder="Amount"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />

        </div>

        {/* Status */}

        <div>

          <label className="block text-accent-gold mb-2">
            Payment Status
          </label>

          <select
            defaultValue={isEdit ? "Paid" : ""}
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          >
            <option value="">Select Status</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>

        </div>

        {/* Date */}

        <div>

          <label className="block text-accent-gold mb-2">
            Sales Date
          </label>

          <input
            type="date"
            defaultValue={isEdit ? "2026-07-27" : ""}
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />

        </div>

        {/* Executive */}

        <div>

          <label className="block text-accent-gold mb-2">
            Sales Executive
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "Ramesh" : ""}
            placeholder="Employee Name"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />

        </div>

      </div>

      {/* Remarks */}

      <div className="mt-6">

        <label className="block text-accent-gold mb-2">
          Remarks
        </label>

        <textarea
          rows={5}
          defaultValue={
            isEdit ? "Customer purchased Gold Ring." : ""
          }
          placeholder="Enter Remarks"
          className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
        />

      </div>

      {/* Button */}

      <div className="mt-8">

        <button className="bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-8 py-3 rounded-xl transition">

          {isEdit ? "Update Sales" : "Save Sales"}

        </button>

      </div>

    </div>
  );
}