import Link from "next/link";
import { ArrowLeft, Pencil, Crown, Phone, Mail, MapPin, Star } from "lucide-react";

interface ViewLoyaltyPageProps {
  params: {
    id: string;
  };
}

export default function ViewLoyaltyPage({
  params,
}: ViewLoyaltyPageProps) {
  const member = {
    id: params.id,
    name: "Rahul Patel",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    address: "Surat, Gujarat",
    membership: "Gold",
    points: 2500,
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center">

            <Crown
              size={32}
              className="text-black"
            />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-yellow-500">
              Loyalty Member Details
            </h1>

            <p className="text-gray-400 mt-2">
              Member ID : #{member.id}
            </p>

          </div>

        </div>

        <Link
          href={`/offers-loyalty/loyalty/edit/${member.id}`}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition"
        >
          <Pencil size={18} />
          Edit Member
        </Link>

      </div>

      {/* Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>

            <h3 className="text-gray-400">
              Customer Name
            </h3>

            <p className="text-2xl font-semibold mt-2">
              {member.name}
            </p>

          </div>

          <div>

            <h3 className="text-gray-400">
              Membership
            </h3>

            <span className="inline-block mt-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400">
              {member.membership}
            </span>

          </div>

          <div className="flex items-center gap-3">

            <Phone
              size={20}
              className="text-yellow-500"
            />

            <div>

              <h3 className="text-gray-400">
                Mobile
              </h3>

              <p className="mt-1">
                {member.mobile}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Mail
              size={20}
              className="text-yellow-500"
            />

            <div>

              <h3 className="text-gray-400">
                Email
              </h3>

              <p className="mt-1">
                {member.email}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <MapPin
              size={20}
              className="text-yellow-500"
            />

            <div>

              <h3 className="text-gray-400">
                Address
              </h3>

              <p className="mt-1">
                {member.address}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Star
              size={20}
              className="text-yellow-500"
            />

            <div>

              <h3 className="text-gray-400">
                Reward Points
              </h3>

              <p className="text-yellow-500 font-bold mt-1">
                {member.points.toLocaleString()} Points
              </p>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          <Link
            href="/offers-loyalty/loyalty"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href={`/offers-loyalty/loyalty/edit/${member.id}`}
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