"use client";

import { useMemo, useState } from "react";

import OffersHeader from "@/components/offers-loyalty/OffersHeader";
import OffersSearch from "@/components/offers-loyalty/OffersSearch";
import OfferCard from "@/components/offers-loyalty/OfferCard";

const offers = [
  {
    id: 1,
    title: "Diwali Gold Offer",
    discount: "20% OFF",
    validTill: "31 Aug 2026",
    status: "Active" as const,
  },
  {
    id: 2,
    title: "Wedding Collection",
    discount: "15% OFF",
    validTill: "10 Sep 2026",
    status: "Upcoming" as const,
  },
  {
    id: 3,
    title: "Festive Sale",
    discount: "10% OFF",
    validTill: "20 Jul 2026",
    status: "Expired" as const,
  },
  {
    id: 4,
    title: "Akshaya Tritiya",
    discount: "25% OFF",
    validTill: "15 May 2026",
    status: "Active" as const,
  },
  {
    id: 5,
    title: "Gold Exchange Offer",
    discount: "5% Bonus",
    validTill: "30 Oct 2026",
    status: "Upcoming" as const,
  },
];

export default function OffersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredOffers = useMemo(() => {
    return offers.filter((offer) => {
      const matchesSearch = offer.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesFilter =
        filter === "All" || offer.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <OffersHeader />

      <OffersSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      {filteredOffers.length === 0 ? (
        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-10 text-center">

          <h2 className="text-2xl font-bold text-yellow-500">
            No Offers Found
          </h2>

          <p className="text-gray-400 mt-2">
            Try changing the search or filter.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              discount={offer.discount}
              validTill={offer.validTill}
              status={offer.status}
            />
          ))}

        </div>
      )}

    </main>
  );
}