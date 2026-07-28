import {
  Gift,
  Star,
  Trophy,
  Coins,
} from "lucide-react";

const rewards = [
  {
    id: 1,
    customer: "Rahul Patel",
    membership: "Gold",
    points: 2500,
    redeemed: 1000,
    balance: 1500,
  },
  {
    id: 2,
    customer: "Priya Shah",
    membership: "Silver",
    points: 1800,
    redeemed: 500,
    balance: 1300,
  },
  {
    id: 3,
    customer: "Amit Mehta",
    membership: "Bronze",
    points: 900,
    redeemed: 300,
    balance: 600,
  },
  {
    id: 4,
    customer: "Neha Joshi",
    membership: "Gold",
    points: 3200,
    redeemed: 1500,
    balance: 1700,
  },
];

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-yellow-500">
          Rewards Management
        </h1>

        <p className="text-gray-400 mt-2">
          View reward points and redemption history of loyalty members.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <Gift className="text-yellow-500 mb-4" size={34} />

          <p className="text-gray-400">
            Total Members
          </p>

          <h2 className="text-4xl font-bold mt-2">
            548
          </h2>

        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <Coins className="text-yellow-500 mb-4" size={34} />

          <p className="text-gray-400">
            Total Points
          </p>

          <h2 className="text-4xl font-bold mt-2">
            24,580
          </h2>

        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <Star className="text-yellow-500 mb-4" size={34} />

          <p className="text-gray-400">
            Redeemed
          </p>

          <h2 className="text-4xl font-bold mt-2">
            8,450
          </h2>

        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <Trophy className="text-yellow-500 mb-4" size={34} />

          <p className="text-gray-400">
            Active Members
          </p>

          <h2 className="text-4xl font-bold mt-2">
            421
          </h2>

        </div>

      </div>

      {/* Rewards Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20">

        <table className="w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="text-left px-6 py-4">
                Customer
              </th>

              <th className="text-left px-6 py-4">
                Membership
              </th>

              <th className="text-left px-6 py-4">
                Earned
              </th>

              <th className="text-left px-6 py-4">
                Redeemed
              </th>

              <th className="text-left px-6 py-4">
                Balance
              </th>

            </tr>

          </thead>

          <tbody>

            {rewards.map((reward) => (

              <tr
                key={reward.id}
                className="border-t border-yellow-500/10 hover:bg-[#141414]"
              >

                <td className="px-6 py-5">
                  {reward.customer}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${
                      reward.membership === "Gold"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : reward.membership === "Silver"
                        ? "bg-gray-500/20 text-gray-300"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {reward.membership}
                  </span>

                </td>

                <td className="px-6 py-5 text-green-400 font-semibold">
                  {reward.points}
                </td>

                <td className="px-6 py-5 text-red-400 font-semibold">
                  {reward.redeemed}
                </td>

                <td className="px-6 py-5 text-yellow-500 font-bold">
                  {reward.balance}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}