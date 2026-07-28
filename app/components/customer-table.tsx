"use client";

import { useState } from "react";
import { Customer } from "./customer-data";
import CustomerProgress from "./customer-progress";
import { Eye, Trash2, X } from "lucide-react";

interface CustomerTableProps {
  customers: Customer[];
  sortOrder: string;
  onSortChange: (sort: string) => void;
  onDeleteCustomer: (id: number) => void;
  onEditCustomer?: (customer: Customer) => void;
}

export default function CustomerTable({
  customers,
  sortOrder,
  onSortChange,
  onDeleteCustomer,
}: CustomerTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Selected customer for View Modal
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const totalPages = Math.ceil(customers.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = customers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mt-8 bg-[#171717] rounded-2xl border border-[#2C2C2C] overflow-hidden shadow-lg">
      <div className="px-6 py-5 flex justify-between items-center border-b border-[#2C2C2C]">
        <h2 className="text-xl font-semibold text-white">
          Customer List ({customers.length})
        </h2>

        <select
          value={sortOrder}
          onChange={(e) => {
            onSortChange(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-[#101010] text-white border border-[#2C2C2C] rounded-lg px-3 py-2 outline-none focus:border-[#D4AF37]"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="balance-high">Balance: High to Low</option>
          <option value="balance-low">Balance: Low to High</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#1E1E1E] text-gray-400 text-sm">
            <tr>
              <th className="p-5">Customer</th>
              <th className="p-5">Mobile</th>
              <th className="p-5">Email</th>
              <th className="p-5">City</th>
              <th className="p-5">Gold Scheme</th>
              <th className="p-5">Balance</th>
              <th className="p-5">Status</th>
              <th className="p-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#2C2C2C]">
            {paginatedCustomers.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center p-12 text-gray-400">
                  No customers found matching the criteria.
                </td>
              </tr>
            ) : (
              paginatedCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-[#202020] transition text-sm"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={customer.image}
                        alt={customer.name}
                        className="w-12 h-12 rounded-full object-cover border border-[#333]"
                      />
                      <div>
                        <h3 className="font-semibold text-white">{customer.name}</h3>
                        <span
                          className={`text-xs rounded-full px-3 py-0.5 mt-1 inline-block font-medium ${
                            customer.membership === "Gold Member"
                              ? "bg-yellow-900/50 text-yellow-300 border border-yellow-700/50"
                              : customer.membership === "Diamond Member"
                              ? "bg-cyan-900/50 text-cyan-300 border border-cyan-700/50"
                              : "bg-gray-800 text-gray-300 border border-gray-700"
                          }`}
                        >
                          {customer.membership}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="p-5 text-gray-300">{customer.phone}</td>
                  <td className="p-5 text-gray-300">{customer.email}</td>
                  <td className="p-5 text-gray-300">{customer.city}</td>

                  <td className="p-5">
                    <CustomerProgress value={customer.progress} />
                  </td>

                  <td className="p-5 font-semibold text-[#D4AF37]">
                    ₹{customer.balance.toLocaleString()}
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.status === "Active"
                          ? "bg-green-900/50 text-green-400 border border-green-700/50"
                          : "bg-red-900/50 text-red-400 border border-red-700/50"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="p-5">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => setSelectedCustomer(customer)}
                        title="View Details"
                        className="p-2 rounded-lg border border-[#2C2C2C] hover:bg-[#2C2C2C] text-gray-300 hover:text-white transition"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => onDeleteCustomer(customer.id)}
                        title="Delete Customer"
                        className="p-2 rounded-lg border border-[#2C2C2C] hover:bg-red-950 hover:text-red-400 border-red-900/30 text-gray-400 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-t border-[#2C2C2C] gap-4">
        <p className="text-gray-400 text-sm">
          Showing {customers.length === 0 ? 0 : startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, customers.length)} of {customers.length} customers
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded-lg border border-[#2C2C2C] text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#222] transition flex items-center justify-center"
          >
            {"<"}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-lg font-medium transition flex items-center justify-center ${
                currentPage === page
                  ? "bg-[#D4AF37] text-black"
                  : "border border-[#2C2C2C] text-gray-300 hover:bg-[#222]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="w-9 h-9 rounded-lg border border-[#2C2C2C] text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#222] transition flex items-center justify-center"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* View Customer Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#171717] border border-[#2C2C2C] text-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedCustomer(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-[#222]"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src={selectedCustomer.image}
                alt={selectedCustomer.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37] mb-3"
              />
              <h3 className="text-xl font-bold text-white">{selectedCustomer.name}</h3>
              <span className="text-xs bg-yellow-900/50 text-yellow-300 border border-yellow-700/50 rounded-full px-3 py-1 mt-1">
                {selectedCustomer.membership}
              </span>
            </div>

            <div className="mt-6 space-y-3 border-t border-[#2C2C2C] pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Phone:</span>
                <span className="text-white font-medium">{selectedCustomer.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-white font-medium">{selectedCustomer.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">City:</span>
                <span className="text-white font-medium">{selectedCustomer.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Balance:</span>
                <span className="text-[#D4AF37] font-bold">
                  ₹{selectedCustomer.balance.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Gold Scheme Progress:</span>
                <span className="text-white font-medium">{selectedCustomer.progress}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Account Status:</span>
                <span
                  className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                    selectedCustomer.status === "Active"
                      ? "bg-green-900/50 text-green-400 border border-green-700/50"
                      : "bg-red-900/50 text-red-400 border border-red-700/50"
                  }`}
                >
                  {selectedCustomer.status}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setSelectedCustomer(null)}
                className="w-full bg-[#222] hover:bg-[#2C2C2C] text-white py-2.5 rounded-xl font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}