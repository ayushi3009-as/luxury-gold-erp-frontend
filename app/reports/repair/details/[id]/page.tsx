import Link from "next/link";


interface RepairDetailsPageProps {
  params: {
    id: string;
  };
}



export default function RepairDetailsPage({
  params,
}: RepairDetailsPageProps) {


  const repair = {

    repairId: "R001",
    customerName: "Rahul Shah",
    phone: "+91 9876543210",
    email: "rahul@gmail.com",
    product: "22K Gold Ring",
    category: "Ring",
    repairType: "Size Adjustment",
    issue: "Ring size is small and needs resizing.",
    status: "Completed",
    charges: "₹2,000",
    receivedDate: "25 July 2026",
    deliveryDate: "28 July 2026",

  };



  return (

    <main
      className="
      min-h-screen
      bg-[#0B0B0B]
      text-white
      p-8
      "
    >


      {/* Back Button */}

      <Link
        href="/reports/repair"
        className="
        inline-block
        mb-6
        border
        border-yellow-500
        text-yellow-500
        px-5
        py-2
        rounded-xl
        hover:bg-yellow-500
        hover:text-black
        transition
        "
      >

        ← Back to Repair Reports

      </Link>





      {/* Header */}

      <div className="mb-8">


        <h1
          className="
          text-4xl
          font-bold
          text-yellow-500
          "
        >
          Repair Details
        </h1>


        <p className="text-gray-400 mt-2">
          Repair ID: {params.id}
        </p>


      </div>






      {/* Details Card */}


      <div
        className="
        bg-[#141414]
        border
        border-yellow-500/20
        rounded-2xl
        p-8
        "
      >



        <div className="flex justify-between items-center mb-8">


          <h2
            className="
            text-2xl
            font-bold
            text-yellow-500
            "
          >
            {repair.product}
          </h2>



          <span
            className="
            bg-yellow-500/10
            text-yellow-500
            px-4
            py-2
            rounded-full
            "
          >

            {repair.status}

          </span>


        </div>







        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "
        >



          <div>

            <p className="text-gray-500">
              Customer Name
            </p>

            <p>
              {repair.customerName}
            </p>

          </div>




          <div>

            <p className="text-gray-500">
              Phone
            </p>

            <p>
              {repair.phone}
            </p>

          </div>




          <div>

            <p className="text-gray-500">
              Email
            </p>

            <p>
              {repair.email}
            </p>

          </div>




          <div>

            <p className="text-gray-500">
              Category
            </p>

            <p>
              {repair.category}
            </p>

          </div>




          <div>

            <p className="text-gray-500">
              Repair Type
            </p>

            <p>
              {repair.repairType}
            </p>

          </div>




          <div>

            <p className="text-gray-500">
              Repair Charges
            </p>

            <p className="text-yellow-500 font-semibold">
              {repair.charges}
            </p>

          </div>




          <div>

            <p className="text-gray-500">
              Received Date
            </p>

            <p>
              {repair.receivedDate}
            </p>

          </div>




          <div>

            <p className="text-gray-500">
              Delivery Date
            </p>

            <p>
              {repair.deliveryDate}
            </p>

          </div>



        </div>







        <div className="mt-8">


          <p className="text-gray-500 mb-2">
            Issue Description
          </p>


          <p className="text-gray-300">
            {repair.issue}
          </p>


        </div>







        <button
          className="
          mt-8
          bg-yellow-500
          text-black
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:bg-yellow-400
          transition
          "
        >

          Update Repair Status

        </button>




      </div>



    </main>

  );

}