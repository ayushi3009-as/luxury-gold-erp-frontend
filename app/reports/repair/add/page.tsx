import Link from "next/link";


export default function AddRepairPage() {


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
          Add Repair
        </h1>


        <p className="text-text-secondary mt-2">
          Add new jewellery repair request
        </p>


      </div>







      {/* Form */}


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
              placeholder="Enter Customer Name"
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
              placeholder="Enter Phone Number"
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
              Product Name
            </label>

            <input
              type="text"
              placeholder="Enter Product Name"
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
              Repair Type
            </label>


            <select
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

            <label className="text-accent-gold">
              Repair Charges
            </label>


            <input
              type="number"
              placeholder="Enter Charges"
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
              Status
            </label>


            <select
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


          <label className="text-accent-gold">
            Repair Description
          </label>


          <textarea
            rows={4}
            placeholder="Enter repair issue details..."
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

          Save Repair

        </button>



      </div>



    </main>

  );

}