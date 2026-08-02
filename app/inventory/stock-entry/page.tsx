"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  Loader2,
  History
} from "lucide-react";

export default function StockEntry() {
  const router = useRouter();
  
  const [products, setProducts] = useState<any[]>([]);
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [entryNumber, setEntryNumber] = useState("");

  useEffect(() => {
    setEntryNumber(`SE-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`);
    
    const fetchRecent = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          setRecentProducts(data.slice(0, 5));
        }
      } catch (err) {
        console.error("Failed to fetch recent products", err);
      }
    };
    fetchRecent();
  }, []);
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Gold Jewellery",
    purity: "22K",
    grossWeight: "",
    netWeight: "",
    quantity: "1",
    rate: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.netWeight || !newProduct.rate) {
      alert("Please fill in Name, Net Weight, and Rate.");
      return;
    }
    const amount = (parseFloat(newProduct.rate) * parseFloat(newProduct.netWeight)).toFixed(2);
    setProducts([...products, { ...newProduct, id: Date.now(), amount }]);
    setIsModalOpen(false);
    setNewProduct({ name: "", category: "Gold Jewellery", purity: "22K", grossWeight: "", netWeight: "", quantity: "1", rate: "" });
  };

  const removeProduct = (id: number) => setProducts(products.filter(p => p.id !== id));

  const totalProducts = products.length;
  const totalNetWeight = products.reduce((acc, curr) => acc + (parseFloat(curr.netWeight) || 0), 0);
  const totalStockValue = products.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);

  const saveStockEntry = async () => {
    if (products.length === 0) return alert("Please add at least one product before saving.");
    setIsSaving(true);
    try {
      for (const prod of products) {
        await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productCode: `PRD-${Date.now()}-${Math.floor(Math.random()*1000)}`,
            name: prod.name,
            category: prod.category,
            purity: prod.purity,
            weight: parseFloat(prod.netWeight),
            sellingPrice: parseFloat(prod.rate),
            quantity: parseInt(prod.quantity, 10),
            minimumStock: 5,
            type: "FINISHED_GOOD"
          })
        });
      }
      alert("Stock Entry saved successfully!");
      router.push('/inventory');
    } catch (error) {
      console.error("Failed to save stock:", error);
      alert("Error saving stock entry.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary relative overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <main className="min-h-screen p-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-gold/80">Inventory / Stock Entry</p>
            <h1 className="mt-1 text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Stock Entry</h1>
            <p className="mt-1 text-sm text-text-secondary">Add new jewellery stock into your inventory securely.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => router.push('/inventory')} className="group flex items-center gap-2 rounded-xl border border-border-theme bg-background-secondary/50 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent-gold/50 hover:text-text-primary">
              <X size={18} className="transition-transform group-hover:rotate-90" />
              Cancel
            </button>
            <button onClick={saveStockEntry} disabled={isSaving || products.length === 0} className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none">
              {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              Save & Update
            </button>
          </div>
        </div>

        {/* ENTRY INFORMATION */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
          
          <div className="mb-6 flex items-center gap-4 border-b border-border-theme pb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide text-text-primary">ENTRY INFORMATION</h2>
              <p className="text-xs text-text-secondary mt-0.5">Enter supplier and stock entry details</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">STOCK ENTRY NUMBER</label>
              <input type="text" value={entryNumber} onChange={(e) => setEntryNumber(e.target.value)} className="w-full rounded-xl border border-border-theme bg-background-secondary px-4 py-3.5 text-sm font-mono text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:ring-4 focus:ring-accent-gold/10" />
            </div>

            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">ENTRY DATE</label>
              <div className="relative">
                <CalendarDays size={18} className="absolute left-4 top-3.5 text-accent-gold/70" />
                <input type="date" className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-11 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
              </div>
            </div>

            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">SUPPLIER / VENDOR</label>
              <div className="relative">
                <UserRound size={18} className="absolute left-4 top-3.5 text-accent-gold/70" />
                <input type="text" placeholder="Enter supplier name" className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-11 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-secondary/50 focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
              </div>
            </div>

            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">SUPPLIER INVOICE NO.</label>
              <input type="text" placeholder="Enter invoice number" className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-primary/20 focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
            </div>
          </div>
        </div>

        {/* ADD PRODUCT */}
        <div className="mt-6 rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-theme pb-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
                <PackagePlus size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-wide text-text-primary">PRODUCT DETAILS</h2>
                <p className="text-xs text-text-secondary mt-0.5">Add products and jewellery stock details</p>
              </div>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 rounded-xl border border-accent-gold/50 px-5 py-2.5 text-sm font-semibold text-accent-gold transition-all hover:bg-accent-gold hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Plus size={18} />
              Add Product
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-5 py-4">PRODUCT</th>
                  <th className="px-5 py-4">CATEGORY</th>
                  <th className="px-5 py-4">PURITY</th>
                  <th className="px-5 py-4">GROSS WT.</th>
                  <th className="px-5 py-4">NET WT.</th>
                  <th className="px-5 py-4">QTY</th>
                  <th className="px-5 py-4">RATE/g</th>
                  <th className="px-5 py-4">AMOUNT</th>
                  <th className="px-5 py-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-text-secondary">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <PackagePlus size={40} className="text-text-primary/10" />
                        <p>No products added yet. Click "+ Add Product" to begin.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="transition-colors hover:bg-text-primary/5">
                      <td className="px-5 py-4 font-semibold text-text-primary">{product.name}</td>
                      <td className="px-5 py-4 text-text-secondary">{product.category}</td>
                      <td className="px-5 py-4 font-medium text-accent-gold">{product.purity}</td>
                      <td className="px-5 py-4 text-text-primary/80">{product.grossWeight} g</td>
                      <td className="px-5 py-4 text-text-primary">{product.netWeight} g</td>
                      <td className="px-5 py-4">{product.quantity}</td>
                      <td className="px-5 py-4 text-text-primary/80">₹ {parseFloat(product.rate).toLocaleString()}</td>
                      <td className="px-5 py-4 font-bold text-accent-gold">₹ {parseFloat(product.amount).toLocaleString()}</td>
                      <td className="px-5 py-4 text-right">
                        <button onClick={() => removeProduct(product.id)} className="inline-flex items-center justify-center rounded-lg p-2 text-text-primary/40 transition-all hover:bg-red-500/20 hover:text-red-400">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-wider text-text-secondary">TOTAL PRODUCTS</p>
            <p className="mt-2 text-3xl font-bold text-text-primary">{totalProducts}</p>
          </div>
          <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-wider text-text-secondary">TOTAL NET WEIGHT</p>
            <p className="mt-2 text-3xl font-bold text-text-primary">{totalNetWeight.toFixed(3)} <span className="text-xl text-text-secondary font-medium">g</span></p>
          </div>
          <div className="rounded-2xl border border-accent-gold/30 bg-gradient-to-br from-accent-gold/10 to-transparent backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-wider text-accent-gold">TOTAL STOCK VALUE</p>
            <p className="mt-2 text-4xl font-bold text-accent-gold">₹ {totalStockValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
        </div>

        {/* RECENTLY ADDED INVENTORY */}
        <div className="mt-8 rounded-2xl border border-border-theme bg-background-primary/50 backdrop-blur-xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
                <History size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-wide text-text-primary">RECENTLY ADDED PRODUCTS</h2>
                <p className="text-xs text-text-secondary mt-0.5">Products from previous stock entries</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-secondary/50">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-5 py-4">PRODUCT</th>
                  <th className="px-5 py-4">CATEGORY</th>
                  <th className="px-5 py-4">SKU / CODE</th>
                  <th className="px-5 py-4">WEIGHT</th>
                  <th className="px-5 py-4">PRICE</th>
                  <th className="px-5 py-4">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {recentProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-text-secondary">
                      No recent products found.
                    </td>
                  </tr>
                ) : (
                  recentProducts.map((product) => (
                    <tr key={product.id} className="transition-colors hover:bg-text-primary/5">
                      <td className="px-5 py-4 font-semibold text-text-primary">{product.name}</td>
                      <td className="px-5 py-4 text-text-primary/80">{product.category || 'N/A'}</td>
                      <td className="px-5 py-4 font-mono text-text-secondary/80">{product.productCode || product.barcode || 'N/A'}</td>
                      <td className="px-5 py-4 text-text-primary/80">{product.weight || product.netWeight || 'N/A'} g</td>
                      <td className="px-5 py-4 font-bold text-accent-gold">₹ {(product.price || product.amount || 0).toLocaleString('en-IN')}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${product.isPublished ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                          {product.isPublished ? 'Active' : 'Draft'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ADD PRODUCT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary/60 backdrop-blur-md p-4">
          <div className="bg-[#111111] border border-border-theme rounded-2xl w-full max-w-2xl p-8 shadow-2xl transform transition-all scale-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-200 to-accent-gold/50"></div>
            
            <div className="flex justify-between items-center mb-8 border-b border-border-theme pb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Add New Product</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-text-secondary hover:text-text-primary p-2 rounded-xl hover:bg-text-primary/10 transition-colors"><X size={20}/></button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 group">
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">PRODUCT NAME *</label>
                <input type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} placeholder="e.g. Gold Chain 22K" className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
              </div>
              
              <div className="group">
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">CATEGORY</label>
                <div className="relative">
                  <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="w-full appearance-none rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10">
                    <option className="bg-[#111111] text-text-primary">Gold Jewellery</option>
                    <option className="bg-[#111111] text-text-primary">Diamond Jewellery</option>
                    <option className="bg-[#111111] text-text-primary">Silver Items</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-3.5 text-text-secondary pointer-events-none" />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">PURITY</label>
                <div className="relative">
                  <select value={newProduct.purity} onChange={e => setNewProduct({...newProduct, purity: e.target.value})} className="w-full appearance-none rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10">
                    <option className="bg-[#111111] text-text-primary">24K</option>
                    <option className="bg-[#111111] text-text-primary">22K</option>
                    <option className="bg-[#111111] text-text-primary">18K</option>
                    <option className="bg-[#111111] text-text-primary">14K</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-3.5 text-text-secondary pointer-events-none" />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">GROSS WT (g)</label>
                <input type="number" step="0.001" value={newProduct.grossWeight} onChange={e => setNewProduct({...newProduct, grossWeight: e.target.value})} placeholder="0.000" className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-primary/20 focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
              </div>

              <div className="group">
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">NET WT (g) *</label>
                <input type="number" step="0.001" value={newProduct.netWeight} onChange={e => setNewProduct({...newProduct, netWeight: e.target.value})} placeholder="0.000" className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-primary/20 focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
              </div>

              <div className="group">
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">QUANTITY</label>
                <input type="number" min="1" value={newProduct.quantity} onChange={e => setNewProduct({...newProduct, quantity: e.target.value})} className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
              </div>

              <div className="group">
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">RATE/g (₹) *</label>
                <input type="number" value={newProduct.rate} onChange={e => setNewProduct({...newProduct, rate: e.target.value})} placeholder="e.g. 7620" className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-primary/20 focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-border-theme">
              <button onClick={() => setIsModalOpen(false)} className="rounded-xl px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:bg-text-primary/5">Cancel</button>
              <button onClick={handleAddProduct} className="rounded-xl bg-accent-gold px-8 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]">Add to List</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}