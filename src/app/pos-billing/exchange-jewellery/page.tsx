export default function ExchangeJewelleryPage() {


  return (

    <div className="min-h-screen space-y-5">


      {/* Header */}

      <div
      className="
      flex
      flex-col
      md:flex-row
      justify-between
      gap-4
      "
      >

        <div>

          <h1
          className="
          text-3xl
          font-bold
          text-yellow-400
          "
          >
            Exchange Jewellery
          </h1>


          <p className="text-gray-400 mt-2">
            Exchange old jewellery with new products
          </p>


        </div>


        <button
        className="
        bg-yellow-500
        text-black
        px-6
        py-3
        rounded-lg
        font-bold
        "
        >
          Create Exchange
        </button>


      </div>









      {/* Customer Details */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-5
      "
      >


        <h2
        className="
        text-xl
        text-yellow-400
        font-semibold
        mb-5
        "
        >
          Customer Details
        </h2>



        <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4
        "
        >


          <input
          placeholder="Customer Name"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />



          <input
          placeholder="Mobile Number"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />



          <input
          placeholder="Old Invoice Number"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


        </div>


      </div>









      {/* Old Jewellery */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-5
      "
      >


        <h2
        className="
        text-xl
        text-yellow-400
        font-semibold
        mb-5
        "
        >
          Old Jewellery Details
        </h2>



        <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
        "
        >


          <input
          placeholder="Product Name"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


          <input
          placeholder="Purity"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


          <input
          placeholder="Weight (gm)"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


          <input
          placeholder="Old Gold Value"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


        </div>


      </div>









      {/* New Jewellery */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-5
      "
      >


        <h2
        className="
        text-xl
        text-yellow-400
        font-semibold
        mb-5
        "
        >
          New Jewellery Details
        </h2>



        <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
        "
        >


          <input
          placeholder="New Product"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


          <input
          placeholder="New Weight"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


          <input
          placeholder="Making Charges"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


          <input
          placeholder="New Product Value"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


        </div>


      </div>









      {/* Calculation Cards */}


      <div
      className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-5
      "
      >



        <div
        className="
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-5
        "
        >

          <p className="text-gray-400">
            Old Jewellery Value
          </p>


          <h2
          className="
          text-3xl
          text-yellow-400
          font-bold
          "
          >
            $1200
          </h2>


        </div>





        <div
        className="
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-5
        "
        >

          <p className="text-gray-400">
            New Jewellery Value
          </p>


          <h2
          className="
          text-3xl
          text-yellow-400
          font-bold
          "
          >
            $1800
          </h2>


        </div>





        <div
        className="
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-5
        "
        >

          <p className="text-gray-400">
            Payable Difference
          </p>


          <h2
          className="
          text-3xl
          text-yellow-400
          font-bold
          "
          >
            $600
          </h2>


        </div>



      </div>









      {/* Action */}


      <div
      className="
      flex
      justify-end
      "
      >


        <button
        className="
        bg-yellow-500
        text-black
        px-8
        py-3
        rounded-lg
        font-bold
        "
        >
          Generate Exchange Invoice
        </button>


      </div>



    </div>

  );

}