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
      bg-background-primary
      text-text-primary
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
        text-accent-gold
        px-5
        py-2
        rounded-xl
        hover:bg-accent-gold
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
          text-accent-gold
          "
        >
          Customer Details
        </h1>


        <p className="text-text-secondary mt-2">
          Customer ID: {params.id}
        </p>


      </div>





      {/* Details Card */}


      <div
        className="
        bg-background-secondary
        border
        border-border-theme
        rounded-2xl
        p-8
        "
      >



        <div className="flex justify-between items-center mb-8">


          <h2
            className="
            text-2xl
            font-bold
            text-accent-gold
            "
          >
            {customer.name}
          </h2>



          <span
            className="
            bg-accent-gold/10
            text-accent-gold
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
            <p className="text-text-secondary">
              Phone
            </p>

            <p>
              {customer.phone}
            </p>
          </div>



          <div>
            <p className="text-text-secondary">
              Email
            </p>

            <p>
              {customer.email}
            </p>
          </div>



          <div>
            <p className="text-text-secondary">
              Address
            </p>

            <p>
              {customer.address}
            </p>
          </div>



          <div>
            <p className="text-text-secondary">
              GSTIN
            </p>

            <p>
              {customer.gstin}
            </p>
          </div>



          <div>
            <p className="text-text-secondary">
              Total Orders
            </p>

            <p>
              {customer.totalOrders}
            </p>
          </div>



          <div>
            <p className="text-text-secondary">
              Total Purchase
            </p>

            <p className="text-accent-gold font-semibold">
              {customer.totalPurchase}
            </p>
          </div>



          <div>
            <p className="text-text-secondary">
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
          bg-accent-gold
          text-black
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:bg-accent-gold-hover
          transition
          "
        >
          Export Report
        </button>



      </div>



    </main>

  );
}