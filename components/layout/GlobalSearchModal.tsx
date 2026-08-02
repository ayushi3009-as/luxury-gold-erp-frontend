"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, User, Package, FileText, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState({ customers: [], products: [], invoices: [] });
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Handle keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger a custom event to open the modal (handled in TopBar)
          window.dispatchEvent(new Event("open-global-search"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults({ customers: [], products: [], invoices: [] });
    }
  }, [isOpen]);

  // Debounced Search API call
  useEffect(() => {
    if (!isOpen) return;

    if (query.trim().length < 2) {
      setResults({ customers: [], products: [], invoices: [] });
      setIsLoading(false);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setResults({
            customers: data.customers || [],
            products: data.products || [],
            invoices: data.invoices || [],
          });
        }
      } catch (error) {
        console.error("Search error", error);
      } finally {
        setIsLoading(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query, isOpen]);

  if (!isOpen) return null;

  const hasResults = results.customers.length > 0 || results.products.length > 0 || results.invoices.length > 0;
  const isSearchEmpty = query.trim().length < 2;

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-background-primary backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="w-full max-w-2xl bg-background-secondary border border-border-theme rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-4 border-b border-border-theme bg-background-tertiary">
          <Search className="text-text-secondary mr-3" size={24} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers, products, invoices... (Ctrl+K)"
            className="flex-1 bg-transparent text-lg text-text-primary focus:outline-none placeholder:text-text-secondary"
          />
          {isLoading && <Loader2 className="animate-spin text-accent-gold ml-2" size={20} />}
          <button onClick={onClose} className="p-2 ml-2 rounded-full text-text-secondary hover:bg-[#252525] hover:text-text-primary transition">
            <X size={20} />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {isSearchEmpty && !isLoading && (
            <div className="text-center py-10 text-text-secondary text-sm">
              Type at least 2 characters to search across your ERP.
            </div>
          )}

          {!isSearchEmpty && !isLoading && !hasResults && (
            <div className="text-center py-10 text-text-secondary text-sm">
              No results found for "{query}".
            </div>
          )}

          {!isSearchEmpty && hasResults && (
            <div className="space-y-6">
              
              {/* Customers */}
              {results.customers.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                    <User size={14} /> Customers
                  </h3>
                  <div className="space-y-1">
                    {results.customers.map((c: any) => (
                      <button
                        key={c.id}
                        onClick={() => handleNavigate(`/customers/view/${c.id}`)}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-background-tertiary transition flex justify-between items-center group"
                      >
                        <div>
                          <p className="text-sm font-medium text-text-primary group-hover:text-accent-gold transition">{c.name}</p>
                          <p className="text-xs text-text-secondary mt-0.5">{c.phone} {c.email ? `• ${c.email}` : ''}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Products */}
              {results.products.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                    <Package size={14} /> Products
                  </h3>
                  <div className="space-y-1">
                    {results.products.map((p: any) => (
                      <button
                        key={p.id}
                        onClick={() => handleNavigate(`/products/view/${p.id}`)}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-background-tertiary transition flex justify-between items-center group"
                      >
                        <div>
                          <p className="text-sm font-medium text-text-primary group-hover:text-accent-gold transition">{p.name}</p>
                          <p className="text-xs text-text-secondary mt-0.5">SKU: {p.sku}</p>
                        </div>
                        <div className="text-sm font-medium text-accent-gold">
                          ₹{p.price?.toLocaleString('en-IN') || 0}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Invoices */}
              {results.invoices.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                    <FileText size={14} /> Invoices
                  </h3>
                  <div className="space-y-1">
                    {results.invoices.map((inv: any) => (
                      <button
                        key={inv.id}
                        onClick={() => handleNavigate(`/sales/invoice/${inv.id}`)}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-background-tertiary transition flex justify-between items-center group"
                      >
                        <div>
                          <p className="text-sm font-medium text-text-primary group-hover:text-accent-gold transition">{inv.invoiceNo}</p>
                          <p className="text-xs text-text-secondary mt-0.5">Status: {inv.status}</p>
                        </div>
                        <div className="text-sm font-medium text-text-primary">
                          ₹{inv.totalAmount?.toLocaleString('en-IN') || 0}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
