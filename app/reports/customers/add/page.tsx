import Link from "next/link";


export default function AddCustomerPage() {


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




      <div className="mb-8">

        <h1
          className="
          text-4xl
          font-bold
          text-accent-gold
          "
        >
          Add Customer
        </h1>


        <p className="text-text-secondary mt-2">
          Add new customer details
        </p>

      </div>





      <div
        className="
        bg-background-secondary
        border
        border-border-theme
        rounded-2xl
        p-8
        "
      >



        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "
        >


          <div>

            <label className="text-accent-gold">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter Name"
              className="
              w-full
              mt-2
              bg-background-tertiary
              border
              border-gray-700
              rounded-xl
              px-4
              py-3
              "
            />

          </div>




          <div>

            <label className="text-accent-gold">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter Phone"
              className="
              w-full
              mt-2
              bg-background-tertiary
              border
              border-gray-700
              rounded-xl
              px-4
              py-3
              "
            />

          </div>




          <div>

            <label className="text-accent-gold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="
              w-full
              mt-2
              bg-background-tertiary
              border
              border-gray-700
              rounded-xl
              px-4
              py-3
              "
            />

          </div>




          <div>

            <label className="text-accent-gold">
              GSTIN
            </label>

            <input
              type="text"
              placeholder="Enter GSTIN"
              className="
              w-full
              mt-2
              bg-background-tertiary
              border
              border-gray-700
              rounded-xl
              px-4
              py-3
              "
            />

          </div>


        </div>





        <div className="mt-6">

          <label className="text-accent-gold">
            Address
          </label>


          <textarea
            rows={4}
            placeholder="Enter Address"
            className="
            w-full
            mt-2
            bg-background-tertiary
            border
            border-gray-700
            rounded-xl
            px-4
            py-3
            "
          />

        </div>





        <div className="mt-6 flex items-center gap-3">


          <input
            type="checkbox"
            className="w-5 h-5"
          />


          <span>
            Gold Saving Scheme Customer
          </span>


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
          "
        >

          Save Customer

        </button>



      </div>


    </main>

  );
}