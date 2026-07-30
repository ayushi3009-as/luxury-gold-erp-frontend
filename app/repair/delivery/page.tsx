"use client";

import { useState, useEffect } from "react";
import { Truck, Loader2, PackageCheck } from "lucide-react";

export default function RepairDelivery() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/repair')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const orders = data?.orders || [];
  // Delivery page only cares about COMPLETED items ready for delivery
  const readyOrders = orders.filter((o: any) => o.status === 'COMPLETED');

  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-200 to-purple-400 bg-clip-text text-transparent flex items-center gap-3">
            <Truck size={36} className="text-purple-400" />
            Repair Delivery
          </h1>
          <p className="mt-2 text-text-secondary">Process payments and mark completed repairs as delivered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readyOrders.length === 0 ? (
            <div className="col-span-full p-12 text-center text-text-secondary bg-[#111111]/60 rounded-2xl border border-white/5">
              No completed items ready for delivery right now.
            </div>
          ) : (
            readyOrders.map((order: any) => (
              <div key={order.id} className="bg-[#111111]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-sm font-bold text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded">{order.repairNumber}</span>
                    <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded">READY</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-1">{order.itemName}</h3>
                  <p className="text-sm text-text-secondary mb-4">Customer: <span className="text-white">{order.customerName}</span></p>
                  
                  <div className="space-y-2 mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Estimated Cost:</span>
                      <span className="text-white font-medium">₹{order.estimatedCost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Advance Paid:</span>
                      <span className="text-green-400 font-medium">- ₹{order.advancePaid}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold pt-2 border-t border-white/10 mt-2">
                      <span className="text-white">Balance Due:</span>
                      <span className="text-purple-400">₹{(order.estimatedCost || 0) - (order.advancePaid || 0)}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2">
                  <PackageCheck size={18} />
                  Mark as Delivered
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}