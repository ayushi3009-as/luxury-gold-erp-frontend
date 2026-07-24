"use client";

import { useState } from "react";

export default function CustomerLookup({
  customer,
  onCustomerSelect,
}) {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul.sharma@email.com",
      points: 2450,
    },
    {
      id: 2,
      name: "Priya Mehta",
      phone: "+91 98765 12345",
      email: "priya.mehta@email.com",
      points: 1820,
    },
    {
      id: 3,
      name: "Amit Shah",
      phone: "+91 99887 77665",
      email: "amit.shah@email.com",
      points: 980,
    },
  ];

  const filteredCustomers = customers.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );

  const handleSelect = (selectedCustomer) => {
    onCustomerSelect(selectedCustomer);
    setSearch("");
    setShowResults(false);
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Customer
          </h2>

          <p className="text-sm text-gray-500">
            Search or select customer
          </p>
        </div>

        <button className="text-sm font-medium text-[#9b6b28]">
          + Add Customer
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search customer by name or mobile..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 outline-none focus:border-[#b88a45]"
        />

        <span className="absolute left-3 top-3 text-gray-400">
          🔍
        </span>

        {showResults && search && (
          <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="flex w-full items-center gap-3 border-b p-4 text-left last:border-0 hover:bg-[#fffaf3]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eadbc5] font-semibold text-[#9b6b28]">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.phone}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-gray-500">
                No customers found
              </div>
            )}
          </div>
        )}
      </div>

      {customer && (
        <div className="mt-5 rounded-xl bg-[#fbf8f2] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eadbc5] text-lg font-bold text-[#9b6b28]">
              {customer.name.charAt(0)}
            </div>

            <div className="flex-1">
              <p className="font-semibold">
                {customer.name}
              </p>

              <p className="text-sm text-gray-500">
                {customer.phone}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">
                Loyalty Points
              </p>

              <p className="font-bold text-[#9b6b28]">
                {customer.points}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}