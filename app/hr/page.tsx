"use client";

import { useEffect, useState } from "react";
import { Users, Search, Plus, Loader2, X, UserPlus } from "lucide-react";

export default function HRDashboard() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    employeeCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    designation: '',
    departmentName: '',
    basicSalary: '',
    joiningDate: new Date().toISOString().split('T')[0],
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchEmployees = async () => {
    try {
      const res = await fetch('/api/hr/employees');
      if (res.ok) {
        const data = await res.json();
        setEmployees(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/hr/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowAddModal(false);
        setFormData({
          employeeCode: '', firstName: '', lastName: '', email: '', phone: '',
          designation: '', departmentName: '', basicSalary: '',
          joiningDate: new Date().toISOString().split('T')[0],
        });
        fetchEmployees();
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to add employee');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const filtered = employees.filter(emp => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      emp.firstName?.toLowerCase().includes(q) ||
      emp.lastName?.toLowerCase().includes(q) ||
      emp.employeeCode?.toLowerCase().includes(q) ||
      emp.designation?.toLowerCase().includes(q) ||
      emp.department?.name?.toLowerCase().includes(q)
    );
  });

  const activeCount = employees.filter(e => e.status === 'ACTIVE' || !e.status).length;

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
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 bg-accent-gold text-black px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow">
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <KpiCard label="Total Staff" value={loading ? "..." : String(employees.length)} color="text-accent-gold" />
        <KpiCard label="Active" value={loading ? "..." : String(activeCount)} color="text-green-500" />
        <KpiCard label="Departments" value={loading ? "..." : String(new Set(employees.map(e => e.department?.name).filter(Boolean)).size)} color="text-blue-400" />
        <KpiCard label="Avg. Salary" value={loading ? "..." : employees.length > 0 ? `₹${Math.round(employees.reduce((a, e) => a + (e.basicSalary || 0), 0) / employees.length).toLocaleString("en-IN")}` : "₹0"} color="text-accent-gold" />
      </div>

      {/* EMPLOYEE TABLE */}
      <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background-tertiary border border-border-theme rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-gold"
            />
          </div>
          <span className="text-sm text-text-secondary">{filtered.length} of {employees.length} employees</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-theme text-sm text-text-secondary">
                <th className="pb-3 font-medium">Employee Code</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Department</th>
                <th className="pb-3 font-medium">Designation</th>
                <th className="pb-3 font-medium">Basic Salary</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center">
                    <Loader2 className="animate-spin mx-auto text-accent-gold" size={32} />
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center">
                    <UserPlus size={40} className="mx-auto text-text-secondary/40 mb-3" />
                    <p className="text-text-secondary">{searchQuery ? "No matching employees found." : "No employees yet. Click \"Add Employee\" to get started."}</p>
                  </td>
                </tr>
              ) : (
                filtered.map(emp => (
                  <tr key={emp.id} className="border-b border-border-theme hover:bg-background-tertiary transition-colors">
                    <td className="py-4 font-mono text-sm text-text-secondary">{emp.employeeCode}</td>
                    <td className="py-4 font-medium">{emp.firstName} {emp.lastName}</td>
                    <td className="py-4 text-text-secondary">{emp.department?.name || 'Unassigned'}</td>
                    <td className="py-4 text-text-secondary">{emp.designation}</td>
                    <td className="py-4 text-accent-gold font-semibold">₹{emp.basicSalary?.toLocaleString("en-IN") || 0}</td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD EMPLOYEE MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background-secondary border border-border-theme rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-accent-gold">Add New Employee</h2>
              <button onClick={() => setShowAddModal(false)} className="text-text-secondary hover:text-text-primary transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddEmployee} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Employee Code" required value={formData.employeeCode} onChange={v => setFormData({...formData, employeeCode: v})} placeholder="EMP-001" />
                <FormField label="Designation" required value={formData.designation} onChange={v => setFormData({...formData, designation: v})} placeholder="Sales Executive" />
                <FormField label="First Name" required value={formData.firstName} onChange={v => setFormData({...formData, firstName: v})} />
                <FormField label="Last Name" required value={formData.lastName} onChange={v => setFormData({...formData, lastName: v})} />
                <FormField label="Email" required type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} />
                <FormField label="Phone" required value={formData.phone} onChange={v => setFormData({...formData, phone: v})} />
                <FormField label="Department" required value={formData.departmentName} onChange={v => setFormData({...formData, departmentName: v})} placeholder="Sales" />
                <FormField label="Basic Salary" required type="number" value={formData.basicSalary} onChange={v => setFormData({...formData, basicSalary: v})} placeholder="30000" />
              </div>
              <FormField label="Joining Date" required type="date" value={formData.joiningDate} onChange={v => setFormData({...formData, joiningDate: v})} />

              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded-lg border border-border-theme hover:bg-background-tertiary transition-colors">Cancel</button>
                <button type="submit" disabled={submitting} className="px-4 py-2 rounded-lg bg-accent-gold text-black font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 flex items-center gap-2">
                  {submitting && <Loader2 size={16} className="animate-spin" />}
                  Save Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function KpiCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-text-secondary text-sm">{label}</h3>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}

function FormField({ label, value, onChange, type = "text", required = false, placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-text-secondary mb-1">{label}</label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-background-tertiary border border-border-theme rounded-lg p-2 text-sm focus:border-accent-gold outline-none"
      />
    </div>
  );
}
