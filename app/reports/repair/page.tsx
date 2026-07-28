import RepairSearch from "@/components/reports/RepairSearch";
import RepairCard from "@/components/reports/RepairCard";


const repairs = [

  {
    id: "R001",
    customerName: "Rahul Shah",
    phone: "+91 9876543210",
    product: "22K Gold Ring",
    repairType: "Size Adjustment",
    status: "Completed",
    charges: "₹2,000",
  },


  {
    id: "R002",
    customerName: "Priya Patel",
    phone: "+91 9876501234",
    product: "Gold Necklace",
    repairType: "Polishing",
    status: "In Progress",
    charges: "₹1,500",
  },


  {
    id: "R003",
    customerName: "Amit Joshi",
    phone: "+91 9988776655",
    product: "Gold Bracelet",
    repairType: "Stone Replacement",
    status: "Pending",
    charges: "₹3,500",
  },

];



export default function RepairReportPage() {


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
          Repair Reports
        </h1>


        <p className="text-gray-400 mt-2">
          Manage repair orders, customer details and repair status
        </p>


      </div>





      {/* Search */}


      <RepairSearch />







      {/* Repair Cards */}


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
          repairs.map((repair)=>(

            <RepairCard
              key={repair.id}
              {...repair}
            />

          ))
        }


      </div>





    </main>

  );

}