import { ReactNode } from "react";
import OffersSidebar from "@/components/layout/OffersSidebar";

export default function OffersLoyaltyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0B] text-white">
      <OffersSidebar />

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}