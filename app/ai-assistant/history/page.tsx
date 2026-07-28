import ConversationCard from "@/components/ai-assistant/ConversationCard";

const history = [
  {
    id: 1,
    title: "Today's Sales Report",
    date: "Today • 10:15 AM",
  },
  {
    id: 2,
    title: "Low Stock Products",
    date: "Yesterday • 4:30 PM",
  },
  {
    id: 3,
    title: "Customer Purchase History",
    date: "Yesterday • 11:20 AM",
  },
  {
    id: 4,
    title: "Pending Repair Orders",
    date: "24 Jul • 2:45 PM",
  },
  {
    id: 5,
    title: "Monthly Revenue Report",
    date: "22 Jul • 09:10 AM",
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          Chat History
        </h1>

        <p className="text-gray-400 mt-2">
          View all previous AI conversations.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {history.map((chat) => (
          <ConversationCard
            key={chat.id}
            title={chat.title}
            date={chat.date}
          />
        ))}

      </div>

    </main>
  );
}