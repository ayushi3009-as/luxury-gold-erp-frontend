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

import InventorySidebar from "../InventorySidebar";

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
    <div className="min-h-screen bg-[#090a09] text-white">
      <InventorySidebar />

      <main className="ml-64 min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Inventory / Stock Entry
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Stock Entry
            </h1>

            <p className="mt-1 text-gray-400">
              Add new jewellery stock into your inventory.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-[#40351a] px-4 py-2 text-sm text-gray-300 transition hover:border-[#d9a928] hover:text-[#e4b52d]">
              <X size={16} />
              Cancel
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-[#d9a928] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#f0c43c]">
              <Save size={16} />
              Save Stock Entry
            </button>
          </div>
        </div>

        {/* ENTRY INFORMATION */}
        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-[#302b1d] pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a2413] text-[#e4b52d]">
              <FileText size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-[#e4b52d]">
                ENTRY INFORMATION
              </h2>

              <p className="text-xs text-gray-500">
                Enter supplier and stock entry details
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* ENTRY NUMBER */}
            <div>
              <label className="mb-2 block text-xs text-gray-400">
                STOCK ENTRY NUMBER
              </label>

              <input
                type="text"
                value="SE-2026-0001"
                readOnly
                className="w-full rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="mb-2 block text-xs text-gray-400">
                ENTRY DATE
              </label>

              <div className="relative">
                <CalendarDays
                  size={17}
                  className="absolute left-3 top-3.5 text-[#d9a928]"
                />

                <input
                  type="date"
                  className="w-full rounded-lg border border-[#40351a] bg-[#171711] px-10 py-3 text-sm text-gray-300 outline-none focus:border-[#d9a928]"
                />
              </div>
            </div>

            {/* SUPPLIER */}
            <div>
              <label className="mb-2 block text-xs text-gray-400">
                SUPPLIER / VENDOR
              </label>

              <div className="relative">
                <UserRound
                  size={17}
                  className="absolute left-3 top-3.5 text-[#d9a928]"
                />

                <select className="w-full appearance-none rounded-lg border border-[#40351a] bg-[#171711] px-10 py-3 text-sm text-gray-300 outline-none focus:border-[#d9a928]">
                  <option>Select Supplier</option>
                  <option>Rajesh Jewellers</option>
                  <option>Shree Gold Traders</option>
                  <option>Diamond World</option>
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3 top-3.5 text-gray-500"
                />
              </div>
            </div>

            {/* INVOICE NUMBER */}
            <div>
              <label className="mb-2 block text-xs text-gray-400">
                SUPPLIER INVOICE NO.
              </label>

              <input
                type="text"
                placeholder="Enter invoice number"
                className="w-full rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none placeholder:text-gray-600 focus:border-[#d9a928]"
              />
            </div>
          </div>
        </div>

        {/* ADD PRODUCT */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <div className="mb-5 flex items-center justify-between border-b border-[#302b1d] pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a2413] text-[#e4b52d]">
                <PackagePlus size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-[#e4b52d]">
                  PRODUCT DETAILS
                </h2>

                <p className="text-xs text-gray-500">
                  Add products and jewellery stock details
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-lg border border-[#7b5c17] px-4 py-2 text-xs text-[#e4b52d] transition hover:bg-[#2a2413]">
              <Plus size={16} />
              Add Product
            </button>
          </div>

          {/* SEARCH */}
          <div className="mb-5 flex items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search product by name, barcode or SKU..."
              className="w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
            />
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-lg border border-[#302b1d]">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="bg-[#171711] text-xs text-gray-400">
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
                    className="border-t border-[#302b1d] text-gray-300"
                  >
                    <td className="px-4 py-4 font-medium text-white">
                      {product.name}
                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {product.category}
                    </td>

                    <td className="px-4 py-4 text-[#e4b52d]">
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

                    <td className="px-4 py-4 font-semibold text-[#e4b52d]">
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
          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
            <p className="text-xs text-gray-500">
              TOTAL PRODUCTS
            </p>

            <p className="mt-2 text-2xl font-bold text-[#e4b52d]">
              3
            </p>
          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">
            <p className="text-xs text-gray-500">
              TOTAL NET WEIGHT
            </p>

            <p className="mt-2 text-2xl font-bold text-[#e4b52d]">
              32.700 g
            </p>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-[#17140c] p-5">
            <p className="text-xs text-gray-500">
              TOTAL STOCK VALUE
            </p>

            <p className="mt-2 text-2xl font-bold text-[#e4b52d]">
              ₹ 4,29,346
            </p>
          </div>
        </div>

        {/* NOTES */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">
          <label className="mb-2 block text-xs text-gray-400">
            NOTES / REMARKS
          </label>

          <textarea
            rows={4}
            placeholder="Enter any additional notes or remarks..."
            className="w-full resize-none rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none placeholder:text-gray-600 focus:border-[#d9a928]"
          />
        </div>

        {/* FOOTER ACTIONS */}
        <div className="mt-5 flex justify-end gap-3">
          <button className="rounded-lg border border-[#40351a] px-5 py-3 text-sm text-gray-300 hover:border-[#d9a928] hover:text-[#e4b52d]">
            Save as Draft
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#d9a928] px-6 py-3 text-sm font-semibold text-black hover:bg-[#f0c43c]">
            <Save size={17} />
            Save Stock Entry
          </button>
        </div>
      </main>
    </div>
  );
}