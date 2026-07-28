import CustomerSearch from "@/components/reports/CustomerSearch";
import CustomerCard from "@/components/reports/CustomerCard";


const customers = [
  {
    id: "C001",
    name: "Rahul Shah",
    phone: "+91 9876543210",
    email: "rahul@gmail.com",
    totalOrders: 12,
    totalPurchase: "₹5,50,000",
    goldSavingScheme: true,
  },

  {
    id: "C002",
    name: "Priya Patel",
    phone: "+91 9876501234",
    email: "priya@gmail.com",
    totalOrders: 8,
    totalPurchase: "₹2,80,000",
    goldSavingScheme: false,
  },

  {
    id: "C003",
    name: "Amit Joshi",
    phone: "+91 9988776655",
    email: "amit@gmail.com",
    totalOrders: 15,
    totalPurchase: "₹8,20,000",
    goldSavingScheme: true,
  },
];



export default function CustomersReportPage() {


  return (

    <main
      className="
      min-h-screen
      bg-[#0B0B0B]
      text-white
      p-8
      "
    >


      {/* Header */}

      <div className="mb-8">


        <h1
          className="
          text-4xl
          font-bold
          text-yellow-500
          "
        >
          Customer Reports
        </h1>


        <p className="text-gray-400 mt-2">
          Manage customer details, purchase history and gold schemes
        </p>


      </div>




      {/* Search */}

      <CustomerSearch />





      {/* Customer Cards */}


      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >


        {
          customers.map((customer)=>(
            
            <CustomerCard
              key={customer.id}
              {...customer}
            />

          ))
        }


      </div>



    </main>

  );
}