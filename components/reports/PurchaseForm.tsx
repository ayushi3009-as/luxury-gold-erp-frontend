"use client";

interface PurchaseFormProps {
  isEdit?: boolean;
}

export default function PurchaseForm({
  isEdit = false,
}: PurchaseFormProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Supplier */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Supplier Name
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "Shree Gold Traders" : ""}
            placeholder="Supplier Name"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        {/* Invoice */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Invoice Number
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "INV-1001" : ""}
            placeholder="Invoice Number"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        {/* Product */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Product Name
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "22K Gold Chain" : ""}
            placeholder="Product Name"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        {/* Category */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Category
          </label>

          <select
            defaultValue={isEdit ? "Chain" : ""}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          >
            <option value="">Select Category</option>
            <option>Ring</option>
            <option>Chain</option>
            <option>Necklace</option>
            <option>Bangle</option>
            <option>Bracelet</option>
          </select>
        </div>

        {/* Quantity */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Quantity
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "10" : ""}
            placeholder="Quantity"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        {/* Purchase Price */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Purchase Price
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "250000" : ""}
            placeholder="Purchase Price"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        {/* GST */}

        <div>
          <label className="block text-yellow-500 mb-2">
            GST %
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "3" : ""}
            placeholder="GST"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        {/* Purchase Date */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Purchase Date
          </label>

          <input
            type="date"
            defaultValue={isEdit ? "2026-07-27" : ""}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        {/* Status */}

        <div>
          <label className="block text-yellow-500 mb-2">
            Payment Status
          </label>

          <select
            defaultValue={isEdit ? "Paid" : ""}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          >
            <option value="">Select Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Partial</option>
          </select>
        </div>

      </div>

      {/* Remarks */}

      <div className="mt-6">

        <label className="block text-yellow-500 mb-2">
          Remarks
        </label>

        <textarea
          rows={5}
          defaultValue={
            isEdit
              ? "Gold items purchased successfully."
              : ""
          }
          placeholder="Remarks..."
          className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
        />

      </div>

      {/* Button */}

      <div className="mt-8">

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition">

          {isEdit ? "Update Purchase" : "Save Purchase"}

        </button>

      </div>

    </div>
  );
}