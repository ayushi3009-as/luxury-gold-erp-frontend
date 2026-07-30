"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: any }) {
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    // In a real app, use Context/Redux/Zustand or API call to cart table
    // For demo, we'll store in localStorage
    const existingCart = JSON.parse(localStorage.getItem("erp_cart") || "[]");
    
    // Check if already in cart
    const exists = existingCart.find((item: any) => item.id === product.id);
    if (!exists) {
      existingCart.push({ ...product, cartQuantity: 1 });
      localStorage.setItem("erp_cart", JSON.stringify(existingCart));
      
      // Dispatch an event to update navbar cart count
      window.dispatchEvent(new Event("storage"));
    }
    
    setAdded(true);
    setTimeout(() => {
      router.push("/cart");
    }, 600);
  };

  if (product.quantity <= 0) {
    return (
      <button 
        disabled
        className="w-full md:w-auto px-12 py-4 bg-background-tertiary text-text-secondary border border-border-theme font-bold text-lg rounded-md cursor-not-allowed uppercase tracking-wider"
      >
        Out of Stock
      </button>
    );
  }

  return (
    <button 
      onClick={handleAddToCart}
      className={`w-full md:w-auto px-12 py-4 font-bold text-lg rounded-md uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 ${
        added 
        ? "bg-green-500 text-white border-green-500" 
        : "bg-accent-gold text-[#0b0d0c] hover:bg-[#fff4d0]"
      }`}
    >
      {added ? (
        <>
          <Check size={24} /> Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart size={24} /> Add to Cart
        </>
      )}
    </button>
  );
}
