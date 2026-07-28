export default function PaymentPage() {

  return (

    <div className="min-h-screen space-y-5">


      {/* Header */}

      <div>

        <h1
        className="
        text-3xl
        font-bold
        text-yellow-400
        "
        >
          Payment
        </h1>


        <p className="text-gray-400 mt-2">
          Manage customer payment and receipt
        </p>

      </div>









      {/* Payment Summary */}


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
            Invoice Amount
          </p>


          <h2
          className="
          text-3xl
          font-bold
          text-yellow-400
          "
          >
            $2500
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
            Paid Amount
          </p>


          <h2
          className="
          text-3xl
          font-bold
          text-green-400
          "
          >
            $2000
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
            Remaining
          </p>


          <h2
          className="
          text-3xl
          font-bold
          text-red-400
          "
          >
            $500
          </h2>


        </div>


      </div>









      {/* Customer Payment */}


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
          Customer Payment
        </h2>





        <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-5
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

          placeholder="Invoice Number"

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









      {/* Payment Mode */}


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
          Payment Mode
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



          <button
          className="
          bg-yellow-500
          text-black
          p-4
          rounded-xl
          font-bold
          "
          >
            Cash
          </button>




          <button
          className="
          border
          border-yellow-500
          text-yellow-400
          p-4
          rounded-xl
          font-bold
          "
          >
            Card
          </button>





          <button
          className="
          border
          border-yellow-500
          text-yellow-400
          p-4
          rounded-xl
          font-bold
          "
          >
            UPI
          </button>





          <button
          className="
          border
          border-yellow-500
          text-yellow-400
          p-4
          rounded-xl
          font-bold
          "
          >
            Bank
          </button>



        </div>


      </div>









      {/* Payment Entry */}


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
          Payment Entry
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

          placeholder="Amount"

          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "

          />




          <input

          placeholder="Transaction ID"

          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "

          />




          <button

          className="
          bg-yellow-500
          text-black
          rounded-lg
          font-bold
          "

          >
            Add Payment

          </button>



        </div>


      </div>









      {/* Actions */}


      <div
      className="
      flex
      flex-col
      sm:flex-row
      justify-end
      gap-4
      "
      >



        <button
        className="
        border
        border-yellow-500
        text-yellow-400
        px-6
        py-3
        rounded-lg
        font-bold
        "
        >
          Print Receipt
        </button>





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
          Complete Payment
        </button>



      </div>



    </div>

  );

} 