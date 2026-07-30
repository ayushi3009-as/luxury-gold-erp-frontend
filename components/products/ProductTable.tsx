"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Trash2, Loader2 } from "lucide-react";

export default function ProductTable() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-background-secondary border border-border-theme rounded-2xl">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-[0_8px_30px_rgba(212,175,55,0.05)] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="overflow-x-auto relative z-10">
        <table className="w-full">
          <thead className="bg-background-tertiary">
            <tr className="text-left border-b border-border-theme">
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm">Image</th>
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm">Product Name</th>
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm">Barcode / Code</th>
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm">Category</th>
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm">Selling Price</th>
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm">Stock Qty</th>
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm">Status</th>
              <th className="px-6 py-4 text-accent-gold font-semibold text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-text-secondary">
                  No products found. Start by adding a new product.
                </td>
              </tr>
            ) : (
              products.map((product) => {
                const stock = product.inventory?.quantity || 0;
                const minStock = product.inventory?.minimumStock || 5;
                const isAvailable = stock > 0;
                const isLowStock = stock > 0 && stock <= minStock;

                return (
                  <tr
                    key={product.id}
                    className="border-b border-border-theme hover:bg-background-tertiary transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="w-12 h-12 rounded-lg bg-background-tertiary border border-border-theme flex items-center justify-center text-xs text-text-secondary overflow-hidden">
                        {/* Placeholder for actual image upload feature */}
                        No Img
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-text-primary">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-sm">
                      {product.barcode || product.productCode || 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      {product.category || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-accent-gold font-semibold">
                      ₹{product.sellingPrice?.toLocaleString() || '0'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${isLowStock ? 'text-orange-400' : 'text-text-primary'}`}>
                        {stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          isAvailable
                            ? isLowStock 
                              ? "bg-orange-500/10 text-orange-400 border-orange-500/20" 
                              : "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-red-500/10 text-red-500 border-red-500/20"
                        }`}
                      >
                        {isAvailable ? (isLowStock ? "Low Stock" : "In Stock") : "Out of Stock"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <Link
                          href={`/products/details/${product.id}`}
                          className="p-2 rounded-md hover:bg-blue-500/10 text-blue-400 transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </Link>
                        <Link
                          href={`/products/edit/${product.id}`}
                          className="p-2 rounded-md hover:bg-accent-gold/10 text-accent-gold transition-colors"
                          title="Edit"
                        >
                          <Pencil size={18} />
                        </Link>
                        <button
                          onClick={() => {
                            if (confirm("Are you sure you want to delete this product?")) {
                              // Delete logic goes here
                              alert("Delete API not hooked up yet.");
                            }
                          }}
                          className="p-2 rounded-md hover:bg-red-500/10 text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}