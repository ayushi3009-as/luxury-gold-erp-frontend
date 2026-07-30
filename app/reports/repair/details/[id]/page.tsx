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
      bg-background-primary
      text-text-primary
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
        text-accent-gold
        px-5
        py-2
        rounded-xl
        hover:bg-accent-gold
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
          text-accent-gold
          "
        >
          Repair Details
        </h1>


        <p className="text-text-secondary mt-2">
          Repair ID: {params.id}
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
            {repair.product}
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

            <p className="text-text-secondary">
              Customer Name
            </p>

            <p>
              {repair.customerName}
            </p>

          </div>




          <div>

            <p className="text-text-secondary">
              Phone
            </p>

            <p>
              {repair.phone}
            </p>

          </div>




          <div>

            <p className="text-text-secondary">
              Email
            </p>

            <p>
              {repair.email}
            </p>

          </div>




          <div>

            <p className="text-text-secondary">
              Category
            </p>

            <p>
              {repair.category}
            </p>

          </div>




          <div>

            <p className="text-text-secondary">
              Repair Type
            </p>

            <p>
              {repair.repairType}
            </p>

          </div>




          <div>

            <p className="text-text-secondary">
              Repair Charges
            </p>

            <p className="text-accent-gold font-semibold">
              {repair.charges}
            </p>

          </div>




          <div>

            <p className="text-text-secondary">
              Received Date
            </p>

            <p>
              {repair.receivedDate}
            </p>

          </div>




          <div>

            <p className="text-text-secondary">
              Delivery Date
            </p>

            <p>
              {repair.deliveryDate}
            </p>

          </div>



        </div>







        <div className="mt-8">


          <p className="text-text-secondary mb-2">
            Issue Description
          </p>


          <p className="text-text-secondary">
            {repair.issue}
          </p>


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

          Update Repair Status

        </button>




      </div>



    </main>

  );

}