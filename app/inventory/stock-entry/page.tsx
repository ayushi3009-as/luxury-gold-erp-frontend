"use client";

import {
  CalendarDays,
  ChevronDown,
  FileText,
  PackagePlus,
  Plus,
  Save,
  Search,
  Trash2,
  UserRound,
  X,
} from "lucide-react";



const products = [
  {
    id: 1,
    name: "Gold Chain 22K",
    category: "Gold Jewellery",
    purity: "22K",
    grossWeight: "25.500",
    netWeight: "24.850",
    quantity: 2,
    rate: "₹ 7,620",
    amount: "₹ 3,78,714",
  },
  {
    id: 2,
    name: "Diamond Ring 18K",
    category: "Diamond Jewellery",
    purity: "18K",
    grossWeight: "8.200",
    netWeight: "7.850",
    quantity: 1,
    rate: "₹ 6,450",
    amount: "₹ 50,632",
  },
];

export default function StockEntry() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Stock Entry
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Stock Entry
            </h1>

            <p className="mt-1 text-text-secondary">
              Add new jewellery stock into your inventory.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary transition hover:border-accent-gold hover:text-accent-gold">
              <X size={16} />
              Cancel
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black transition hover:bg-accent-gold">
              <Save size={16} />
              Save Stock Entry
            </button>
          </div>
        </div>

        {/* ENTRY INFORMATION */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <FileText size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-accent-gold">
                ENTRY INFORMATION
              </h2>

              <p className="text-xs text-text-secondary">
                Enter supplier and stock entry details
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* ENTRY NUMBER */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                STOCK ENTRY NUMBER
              </label>

              <input
                type="text"
                value="SE-2026-0001"
                readOnly
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                ENTRY DATE
              </label>

              <div className="relative">
                <CalendarDays
                  size={17}
                  className="absolute left-3 top-3.5 text-[#d9a928]"
                />

                <input
                  type="date"
                  className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold"
                />
              </div>
            </div>

            {/* SUPPLIER */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                SUPPLIER / VENDOR
              </label>

              <div className="relative">
                <UserRound
                  size={17}
                  className="absolute left-3 top-3.5 text-[#d9a928]"
                />

                <select className="w-full appearance-none rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
                  <option>Select Supplier</option>
                  <option>Rajesh Jewellers</option>
                  <option>Shree Gold Traders</option>
                  <option>Diamond World</option>
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3 top-3.5 text-text-secondary"
                />
              </div>
            </div>

            {/* INVOICE NUMBER */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                SUPPLIER INVOICE NO.
              </label>

              <input
                type="text"
                placeholder="Enter invoice number"
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none placeholder:text-gray-600 focus:border-accent-gold"
              />
            </div>
          </div>
        </div>

        {/* ADD PRODUCT */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                <PackagePlus size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-accent-gold">
                  PRODUCT DETAILS
                </h2>

                <p className="text-xs text-text-secondary">
                  Add products and jewellery stock details
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-lg border border-[#7b5c17] px-4 py-2 text-xs text-accent-gold transition hover:bg-background-tertiary">
              <Plus size={16} />
              Add Product
            </button>
          </div>

          {/* SEARCH */}
          <div className="mb-5 flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">
            <Search size={18} className="text-text-secondary" />

            <input
              type="text"
              placeholder="Search product by name, barcode or SKU..."
              className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
            />
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">PURITY</th>
                  <th className="px-4 py-4">GROSS WT.</th>
                  <th className="px-4 py-4">NET WT.</th>
                  <th className="px-4 py-4">QTY</th>
                  <th className="px-4 py-4">RATE</th>
                  <th className="px-4 py-4">AMOUNT</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-border-theme text-text-secondary"
                  >
                    <td className="px-4 py-4 font-medium text-text-primary">
                      {product.name}
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
                      {product.category}
                    </td>

                    <td className="px-4 py-4 text-accent-gold">
                      {product.purity}
                    </td>

                    <td className="px-4 py-4">
                      {product.grossWeight} g
                    </td>

                    <td className="px-4 py-4">
                      {product.netWeight} g
                    </td>

                    <td className="px-4 py-4">
                      {product.quantity}
                    </td>

                    <td className="px-4 py-4">
                      {product.rate}
                    </td>

                    <td className="px-4 py-4 font-semibold text-accent-gold">
                      {product.amount}
                    </td>

                    <td className="px-4 py-4">
                      <button className="text-red-400 transition hover:text-red-300">
                        <Trash2 size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">
              TOTAL PRODUCTS
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              3
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">
              TOTAL NET WEIGHT
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              32.700 g
            </p>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <p className="text-xs text-text-secondary">
              TOTAL STOCK VALUE
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              ₹ 4,29,346
            </p>
          </div>
        </div>

        {/* NOTES */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <label className="mb-2 block text-xs text-text-secondary">
            NOTES / REMARKS
          </label>

          <textarea
            rows={4}
            placeholder="Enter any additional notes or remarks..."
            className="w-full resize-none rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none placeholder:text-gray-600 focus:border-accent-gold"
          />
        </div>

        {/* FOOTER ACTIONS */}
        <div className="mt-5 flex justify-end gap-3">
          <button className="rounded-lg border border-border-theme px-5 py-3 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            Save as Draft
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-semibold text-black hover:bg-accent-gold">
            <Save size={17} />
            Save Stock Entry
          </button>
        </div>
      </main>
    </div>
  );
}