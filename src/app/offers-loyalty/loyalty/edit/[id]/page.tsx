import LoyaltyForm from "@/components/offers-loyalty/LoyaltyForm";

interface EditLoyaltyPageProps {
  params: {
    id: string;
  };
}

export default function EditLoyaltyPage({
  params,
}: EditLoyaltyPageProps) {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          Edit Loyalty Member
        </h1>

        <p className="text-gray-400 mt-2">
          Update loyalty member details for Member ID:
          <span className="text-yellow-500 font-semibold">
            {" "}#{params.id}
          </span>
        </p>

      </div>

      {/* Form */}

      <LoyaltyForm isEdit={true} />

    </main>
  );
}