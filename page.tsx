"use client";

import { useState, useEffect } from "react";
import { Receipt, Search, ShoppingCart, User, CreditCard, Plus, Trash2, Loader2, IndianRupee } from "lucide-react";

export default function POSBilling() {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [customerName, setCustomerName] = useState("Walk-in Customer");

  useEffect(() => {
    // Fetch products
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch(err => {
        console.error(err);
        setLoadingProducts(false);
      });
  }, []);

  const addToCart = (product: any) => {
    // Check if enough stock
    const stock = product.inventory?.quantity || 0;
    const existingCartItem = cart.find(item => item.id === product.id);
    const currentCartQty = existingCartItem ? existingCartItem.cartQty : 0;
    
    if (currentCartQty >= stock) {
      alert("Not enough stock available!");
      return;
    }

    if (existingCartItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, cartQty: item.cartQty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, cartQty: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateCartQty = (productId: string, newQty: number) => {
    if (newQty < 1) return;
    setCart(cart.map(item => 
      item.id === productId ? { ...item, cartQty: newQty } : item
    ));
  };

  // Calculations
  const subTotal = cart.reduce((sum, item) => sum + (item.sellingPrice * item.cartQty), 0);
  const taxTotal = subTotal * 0.03; // 3% GST
  const grandTotal = subTotal + taxTotal;

  const processPayment = async () => {
    if (cart.length === 0) return alert("Cart is empty!");
    setProcessing(true);

    try {
      // Create a dummy customer or use an existing one if we had a full selector
      const customerRes = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: customerName || "Walk-in Customer",
          phone: "9999999999" // TODO: Add a phone number input to the UI
        })
      });
      const customer = await customerRes.json();

      const invoiceRes = await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          invoiceNumber: `INV-${Date.now()}`,
          customerId: customer.id,
          subTotal,
          taxTotal,
          discountTotal: 0,
          grandTotal,
          paymentMethod: 'CASH',
          items: cart.map(item => ({
            productId: item.id,
            quantity: item.cartQty,
            unitPrice: item.sellingPrice,
            totalPrice: item.sellingPrice * item.cartQty,
          }))
        })
      });

      if (invoiceRes.ok) {
        alert("Payment Processed Successfully! Invoice Generated.");
        setCart([]);
      } else {
        alert("Error generating invoice.");
      }
    } catch (err) {
      console.error(err);
      alert("Error processing payment.");
    } finally {
      setProcessing(false);
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (p.barcode && p.barcode.includes(searchTerm)) ||
    (p.productCode && p.productCode.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-8 min-h-screen bg-background-primary text-text-primary">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <Receipt size={32} />
            TEST POS BILLING
          </h1>
          <p className="text-text-secondary mt-1">Point of Sale System for Fast Checkout</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Product Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-3.5 text-text-secondary" size={20} />
              <input 
                type="text" 
                placeholder="Search products by Name, SKU, or Barcode..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-background-tertiary border border-border-theme rounded-xl py-3 pl-12 pr-4 text-text-primary focus:outline-none focus:border-accent-gold/50 transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 h-[calc(100vh-320px)] overflow-y-auto pr-2">
              {loadingProducts ? (
                <div className="col-span-full flex justify-center py-20">
                  <Loader2 className="animate-spin text-accent-gold" size={40} />
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="col-span-full text-center py-20 text-text-secondary">
                  No products found.
                </div>
              ) : (
                filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    onClick={() => addToCart(product)}
                    className="group border border-border-theme rounded-xl p-4 cursor-pointer hover:border-accent-gold/50 hover:bg-background-tertiary transition-all relative flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <div className="w-full h-32 bg-background-primary rounded-lg mb-3 flex items-center justify-center border border-border-theme">
                      {product.images && product.images.length > 0 ? (
                        <img 
                          src={product.images[0].url} 
                          alt={product.name || 'Product Image'}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <span className="text-xs text-text-secondary">No Image</span>
                      )}
                    </div>
                    
                    <div className="flex flex-col flex-1">
                      <h3 className="font-semibold text-sm text-text-primary whitespace-normal break-words">{product.name || 'Unnamed Product'}</h3>
                      <p className="text-xs text-text-secondary mt-1 whitespace-normal break-all">{product.productCode || 'No Code'}</p>
                      
                      <div className="mt-auto pt-3 flex justify-between items-center gap-2">
                        <span className="font-bold text-text-primary text-sm whitespace-nowrap">
                          ₹{Number(product.sellingPrice || 0).toLocaleString()}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-md whitespace-nowrap ${
                          !product.inventory?.quantity || product.inventory.quantity <= 0 
                            ? 'bg-red-500/10 text-red-500' 
                            : 'bg-green-500/10 text-green-500'
                        }`}>
                          {product.inventory?.quantity || 0} in stock
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Cart & Checkout */}
        <div className="bg-background-secondary border border-border-theme rounded-2xl flex flex-col h-[calc(100vh-140px)] shadow-[0_0_40px_rgba(212,175,55,0.03)] overflow-hidden">
          <div className="p-5 border-b border-border-theme flex justify-between items-center bg-background-tertiary">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <User size={20} />
              </div>
              <input 
                type="text" 
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="bg-transparent border-b border-border-theme focus:border-accent-gold focus:outline-none font-semibold text-text-primary"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-text-secondary opacity-50">
                <ShoppingCart size={48} className="mb-4" />
                <p>Cart is empty</p>
              </div>
            ) : (
              <div className="space-y-2 p-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 border border-border-theme rounded-xl bg-background-primary">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                      <div className="text-accent-gold font-medium mt-1 flex items-center gap-1">
                        ₹{item.sellingPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <div className="flex items-center border border-border-theme rounded-lg overflow-hidden bg-background-secondary">
                        <button onClick={() => updateCartQty(item.id, item.cartQty - 1)} className="px-3 py-1 hover:bg-background-tertiary">-</button>
                        <span className="px-3 font-semibold text-sm border-x border-border-theme">{item.cartQty}</span>
                        <button onClick={() => updateCartQty(item.id, item.cartQty + 1)} className="px-3 py-1 hover:bg-background-tertiary">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 bg-background-tertiary border-t border-border-theme">
            <div className="flex justify-between mb-3 text-text-secondary text-sm">
              <span>Subtotal</span>
              <span className="font-medium text-text-primary">₹ {subTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4 text-text-secondary text-sm">
              <span>Tax (GST 3%)</span>
              <span className="font-medium text-text-primary">₹ {taxTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-6 border-t border-border-theme pt-4">
              <span className="text-lg font-semibold">Total Amount</span>
              <span className="text-3xl font-bold text-accent-gold">₹ {grandTotal.toLocaleString()}</span>
            </div>
            
            <button 
              onClick={processPayment}
              disabled={processing || cart.length === 0}
              className="w-full bg-accent-gold text-black font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              {processing ? <Loader2 className="animate-spin" size={24} /> : <CreditCard size={24} />}
              {processing ? "Processing..." : "Process Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
