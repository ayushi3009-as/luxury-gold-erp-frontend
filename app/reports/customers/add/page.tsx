import Link from "next/link";


export default function AddCustomerPage() {


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




      <div className="mb-8">

        <h1
          className="
          text-4xl
          font-bold
          text-yellow-500
          "
        >
          Add Customer
        </h1>


        <p className="text-gray-400 mt-2">
          Add new customer details
        </p>

      </div>





      <div
        className="
        bg-[#141414]
        border
        border-yellow-500/20
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

            <label className="text-yellow-500">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter Name"
              className="
              w-full
              mt-2
              bg-[#1B1B1B]
              border
              border-gray-700
              rounded-xl
              px-4
              py-3
              "
            />

          </div>




          <div>

            <label className="text-yellow-500">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter Phone"
              className="
              w-full
              mt-2
              bg-[#1B1B1B]
              border
              border-gray-700
              rounded-xl
              px-4
              py-3
              "
            />

          </div>




          <div>

            <label className="text-yellow-500">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="
              w-full
              mt-2
              bg-[#1B1B1B]
              border
              border-gray-700
              rounded-xl
              px-4
              py-3
              "
            />

          </div>




          <div>

            <label className="text-yellow-500">
              GSTIN
            </label>

            <input
              type="text"
              placeholder="Enter GSTIN"
              className="
              w-full
              mt-2
              bg-[#1B1B1B]
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

          <label className="text-yellow-500">
            Address
          </label>


          <textarea
            rows={4}
            placeholder="Enter Address"
            className="
            w-full
            mt-2
            bg-[#1B1B1B]
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
          bg-yellow-500
          text-black
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:bg-yellow-400
          "
        >

          Save Customer

        </button>



      </div>


    </main>

  );
}