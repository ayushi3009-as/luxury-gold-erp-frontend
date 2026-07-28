"use client";

import { useState, useMemo } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import CustomerFilters from "@/app/components/customer-filters";
import CustomerStats from "@/app/components/customer-stats";
import CustomerTable from "@/app/components/customer-table";
import AddCustomerDialog from "@/app/components/add-customer-dialog";
import { customers as initialCustomers, Customer } from "@/app/components/customer-data";
import { Plus } from "lucide-react";

export default function CustomersPage() {
  const [customerList, setCustomerList] = useState<Customer[]>(initialCustomers);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Filter States
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [membershipFilter, setMembershipFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");

  // Sort State
  const [sortOrder, setSortOrder] = useState("newest");

  // Unique list of cities for filter dropdown
  const cities = useMemo(() => {
    const citySet = new Set(customerList.map((c) => c.city));
    return Array.from(citySet).sort();
  }, [customerList]);

  // Handle Add Customer
  const handleAddCustomer = (newCustomerData: Omit<Customer, "id">) => {
    const nextId = Math.max(0, ...customerList.map((c) => c.id)) + 1;
    const newCustomer: Customer = {
      ...newCustomerData,
      id: nextId,
      kycVerified: false,
      totalPurchases: 0,
      joinedDate: new Date().toISOString().split("T")[0],
    };
    setCustomerList((prev) => [newCustomer, ...prev]);
  };

  // Handle Delete Customer
  const handleDeleteCustomer = (id: number) => {
    if (confirm("Are you sure you want to delete this customer?")) {
      setCustomerList((prev) => prev.filter((c) => c.id !== id));
    }
  };

  // Handle Export Data to CSV
  const handleExport = () => {
    if (customerList.length === 0) return;
    const headers = ["ID", "Name", "Phone", "Email", "City", "Membership", "Balance", "Progress", "Status"];
    const rows = filteredCustomers.map((c) => [
      c.id,
      `"${c.name}"`,
      `"${c.phone}"`,
      `"${c.email}"`,
      `"${c.city}"`,
      `"${c.membership}"`,
      c.balance,
      `${c.progress}%`,
      c.status,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `luxray_customers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered and sorted customers list
  const filteredCustomers = useMemo(() => {
    return customerList
      .filter((c) => {
        const matchSearch =
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.phone.includes(search) ||
          c.email.toLowerCase().includes(search.toLowerCase());

        const matchStatus = statusFilter === "All" || c.status === statusFilter;
        const matchMembership = membershipFilter === "All" || c.membership === membershipFilter;
        const matchCity = cityFilter === "All" || c.city === cityFilter;

        return matchSearch && matchStatus && matchMembership && matchCity;
      })
      .sort((a, b) => {
        if (sortOrder === "newest") return b.id - a.id;
        if (sortOrder === "oldest") return a.id - b.id;
        if (sortOrder === "balance-high") return b.balance - a.balance;
        if (sortOrder === "balance-low") return a.balance - b.balance;
        if (sortOrder === "name") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [customerList, search, statusFilter, membershipFilter, cityFilter, sortOrder]);

  return (
    <div className="text-white max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Customer CRM
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Module 3 / Page 1: Customer List
          </p>
        </div>

        <button
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-[#D4AF37] text-black rounded-xl px-6 py-3.5 font-semibold flex items-center gap-2 hover:bg-yellow-400 transition shadow-lg shadow-amber-500/10 cursor-pointer"
        >
          <Plus size={20} />
          Add Quick Customer
        </button>
      </div>

      {/* CRM 10-Tab Navigation Bar */}
      <CRMSubNav />

      {/* Customer Filters */}
      <CustomerFilters
        search={search}
        onSearchChange={setSearch}
        status={statusFilter}
        onStatusChange={setStatusFilter}
        membership={membershipFilter}
        onMembershipChange={setMembershipFilter}
        city={cityFilter}
        onCityChange={setCityFilter}
        cities={cities}
        onExport={handleExport}
      />

      {/* Stats */}
      <CustomerStats customers={filteredCustomers} />

      {/* Table */}
      <CustomerTable
        customers={filteredCustomers}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onDeleteCustomer={handleDeleteCustomer}
      />

      {/* Add Customer Quick Modal */}
      <AddCustomerDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAddCustomer={handleAddCustomer}
      />
    </div>
  );
}