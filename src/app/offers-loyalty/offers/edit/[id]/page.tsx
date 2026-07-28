import OfferForm from "@/components/offers-loyalty/OfferForm";

interface EditOfferPageProps {
  params: {
    id: string;
  };
}

export default function EditOfferPage({
  params,
}: EditOfferPageProps) {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          Edit Offer
        </h1>

        <p className="text-gray-400 mt-2">
          Update offer details for Offer ID:
          <span className="text-yellow-500 font-semibold">
            {" "}#{params.id}
          </span>
        </p>

      </div>

      {/* Offer Form */}

      <OfferForm isEdit={true} />

    </main>
  );
}