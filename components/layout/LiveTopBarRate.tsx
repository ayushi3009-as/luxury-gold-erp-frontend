"use client";

import { useEffect, useState } from "react";

export function LiveTopBarRate() {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    fetchRate();
    
    // Listen for custom event when rate is updated from gold-rate page
    window.addEventListener('goldRateUpdated', fetchRate);
    
    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchRate, 60000);
    
    return () => {
      window.removeEventListener('goldRateUpdated', fetchRate);
      clearInterval(interval);
    };
  }, []);

  async function fetchRate() {
    try {
      const res = await fetch('/api/gold-rate');
      if (res.ok) {
        const json = await res.json();
        if (json.gold22k) {
          // Convert from per 10g to per 1g for TopBar
          setRate(json.gold22k / 10);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (rate === null) {
    return <span>Gold 22K: <span className="text-accent-gold font-semibold">Updating...</span></span>;
  }

  return (
    <span>Gold 22K: <span className="text-accent-gold font-semibold">₹ {rate.toLocaleString("en-IN")}/g</span></span>
  );
}
