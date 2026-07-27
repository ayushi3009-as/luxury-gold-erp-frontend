import Link from "next/link";


export default function AddRepairPage() {


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
          Add Repair
        </h1>


        <p className="text-gray-400 mt-2">
          Add new jewellery repair request
        </p>


      </div>







      {/* Form */}


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
              placeholder="Enter Customer Name"
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
              placeholder="Enter Phone Number"
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
              Product Name
            </label>

            <input
              type="text"
              placeholder="Enter Product Name"
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
              Repair Type
            </label>


            <select
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
            >

              <option>
                Select Repair Type
              </option>

              <option>
                Polishing
              </option>

              <option>
                Size Adjustment
              </option>

              <option>
                Stone Replacement
              </option>

              <option>
                Cleaning
              </option>


            </select>


          </div>





          <div>

            <label className="text-yellow-500">
              Repair Charges
            </label>


            <input
              type="number"
              placeholder="Enter Charges"
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
              Status
            </label>


            <select
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
            >

              <option>
                Pending
              </option>

              <option>
                In Progress
              </option>

              <option>
                Completed
              </option>

              <option>
                Delivered
              </option>


            </select>


          </div>


        </div>






        <div className="mt-6">


          <label className="text-yellow-500">
            Repair Description
          </label>


          <textarea
            rows={4}
            placeholder="Enter repair issue details..."
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

          Save Repair

        </button>



      </div>



    </main>

  );

}