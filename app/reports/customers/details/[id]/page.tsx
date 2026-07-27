import Link from "next/link";


interface CustomerDetailsPageProps {
  params: {
    id: string;
  };
}



export default function CustomerDetailsPage({
  params,
}: CustomerDetailsPageProps) {


  const customer = {
    name: "Rahul Shah",
    phone: "+91 9876543210",
    email: "rahul@gmail.com",
    address: "Ahmedabad, Gujarat",
    gstin: "24ABCDE1234F1Z5",
    totalOrders: 12,
    totalPurchase: "₹5,50,000",
    goldSavingScheme: true,
    lastPurchase: "22K Gold Ring",
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
        href="/reports/customers"
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

        ← Back to Customers

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
          Customer Details
        </h1>


        <p className="text-gray-400 mt-2">
          Customer ID: {params.id}
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
            {customer.name}
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

            {
              customer.goldSavingScheme
              ? "Gold Saving Customer"
              : "Regular Customer"
            }

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
              Phone
            </p>

            <p>
              {customer.phone}
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Email
            </p>

            <p>
              {customer.email}
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Address
            </p>

            <p>
              {customer.address}
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              GSTIN
            </p>

            <p>
              {customer.gstin}
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Total Orders
            </p>

            <p>
              {customer.totalOrders}
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Total Purchase
            </p>

            <p className="text-yellow-500 font-semibold">
              {customer.totalPurchase}
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Last Purchase
            </p>

            <p>
              {customer.lastPurchase}
            </p>
          </div>



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
          Export Report
        </button>



      </div>



    </main>

  );
}