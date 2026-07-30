"use client";

import { useEffect, useState } from "react";
import { Users, Clock, FileText, Settings, Search, Plus, Loader2 } from "lucide-react";

export default function HRDashboard() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hr/employees')
      .then(res => res.json())
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8 min-h-screen bg-background-primary text-text-primary">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <Users size={32} />
            HR & Payroll
          </h1>
          <p className="text-text-secondary mt-1">Manage staff, attendance, and generate salary slips</p>
        </div>
        <button className="flex items-center gap-2 bg-accent-gold text-black px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow">
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-text-secondary">Total Staff</h3>
          <p className="text-3xl font-bold mt-2 text-accent-gold">
            {loading ? <Loader2 className="animate-spin" /> : employees.length}
          </p>
        </div>
        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-text-secondary">Present Today</h3>
          <p className="text-3xl font-bold mt-2 text-green-500">0</p>
        </div>
        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-text-secondary">On Leave</h3>
          <p className="text-3xl font-bold mt-2 text-orange-400">0</p>
        </div>
        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-text-secondary">Payroll Processed</h3>
          <p className="text-3xl font-bold mt-2">0%</p>
        </div>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="w-full bg-background-tertiary border border-border-theme rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-gold"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-theme text-sm text-text-secondary">
                <th className="pb-3 font-medium">Employee Code</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Department</th>
                <th className="pb-3 font-medium">Basic Salary</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center">
                    <Loader2 className="animate-spin mx-auto text-accent-gold" size={32} />
                  </td>
                </tr>
              ) : employees.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-text-secondary">
                    No employees found. Please add staff members.
                  </td>
                </tr>
              ) : (
                employees.map(emp => (
                  <tr key={emp.id} className="border-b border-border-theme hover:bg-background-tertiary transition-colors">
                    <td className="py-4 font-mono text-text-secondary">{emp.employeeCode}</td>
                    <td className="py-4 font-medium text-text-primary">
                      {emp.firstName} {emp.lastName}
                    </td>
                    <td className="py-4 text-text-secondary">{emp.department?.name || 'Unassigned'}</td>
                    <td className="py-4 text-accent-gold font-semibold">₹{emp.basicSalary?.toLocaleString() || 0}</td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                        {emp.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-accent-gold hover:underline text-sm font-semibold">Generate Slip</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
