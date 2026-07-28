import Link from "next/link";
import { ArrowLeft, Pencil, Gift } from "lucide-react";

interface ViewOfferPageProps {
  params: {
    id: string;
  };
}

export default function ViewOfferPage({
  params,
}: ViewOfferPageProps) {
  const offer = {
    id: params.id,
    title: "Diwali Gold Offer",
    code: "DG2026",
    discount: "20% OFF",
    status: "Active",
    startDate: "01 Aug 2026",
    endDate: "31 Aug 2026",
    description:
      "Get 20% discount on selected gold jewellery during the Diwali festival. Applicable on purchases above ₹50,000.",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center">
            <Gift className="text-black" size={30} />
          </div>

          <div>

            <h1 className="text-4xl font-bold text-yellow-500">
              Offer Details
            </h1>

            <p className="text-gray-400 mt-2">
              Offer ID : #{offer.id}
            </p>

          </div>

        </div>

        <Link
          href={`/offers-loyalty/offers/edit/${offer.id}`}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition"
        >
          <Pencil size={18} />
          Edit Offer
        </Link>

      </div>

      {/* Details Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>

            <h3 className="text-gray-400">
              Offer Title
            </h3>

            <p className="text-2xl font-semibold mt-2">
              {offer.title}
            </p>

          </div>

          <div>

            <h3 className="text-gray-400">
              Offer Code
            </h3>

            <p className="text-2xl font-semibold mt-2">
              {offer.code}
            </p>

          </div>

          <div>

            <h3 className="text-gray-400">
              Discount
            </h3>

            <p className="text-yellow-500 text-2xl font-bold mt-2">
              {offer.discount}
            </p>

          </div>

          <div>

            <h3 className="text-gray-400">
              Status
            </h3>

            <span className="inline-block mt-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400">
              {offer.status}
            </span>

          </div>

          <div>

            <h3 className="text-gray-400">
              Start Date
            </h3>

            <p className="mt-2">
              {offer.startDate}
            </p>

          </div>

          <div>

            <h3 className="text-gray-400">
              End Date
            </h3>

            <p className="mt-2">
              {offer.endDate}
            </p>

          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-gray-400 mb-3">
            Description
          </h3>

          <div className="bg-[#1B1B1B] rounded-xl p-5 border border-gray-700">

            <p className="leading-7 text-gray-300">
              {offer.description}
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          <Link
            href="/offers-loyalty/offers"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href={`/offers-loyalty/offers/edit/${offer.id}`}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            <Pencil size={18} />
            Edit
          </Link>

        </div>

      </div>

    </main>
  );
}