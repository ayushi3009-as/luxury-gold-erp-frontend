"use client";


export default function PaymentPanel(){

  return (

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
        font-semibold
        text-yellow-400
        mb-5
        "
      >
        Payment Summary
      </h2>



      {/* Amount Details */}

      <div
        className="
        bg-black
        rounded-lg
        p-4
        space-y-3
        "
      >


        <p className="flex justify-between text-gray-400">

          <span>
            Gold Value
          </span>

          <span className="text-white">
            $800
          </span>

        </p>



        <p className="flex justify-between text-gray-400">

          <span>
            Making Charge
          </span>

          <span className="text-white">
            $120
          </span>

        </p>



        <p className="flex justify-between text-gray-400">

          <span>
            Stone Amount
          </span>

          <span className="text-white">
            $100
          </span>

        </p>



        <p className="flex justify-between text-gray-400">

          <span>
            GST
          </span>

          <span className="text-white">
            $30
          </span>

        </p>



        <hr className="border-gray-700"/>



        <p
          className="
          flex
          justify-between
          text-xl
          font-bold
          "
        >

          <span>
            Total
          </span>


          <span className="text-yellow-400">
            $1,050
          </span>


        </p>



      </div>





      {/* Payment Methods */}

      <h3
        className="
        mt-5
        mb-3
        text-gray-300
        "
      >
        Payment Method
      </h3>



      <div
        className="
        grid
        grid-cols-2
        gap-3
        "
      >

        <button
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          py-2
          hover:border-yellow-400
          "
        >
          Cash
        </button>


        <button
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          py-2
          hover:border-yellow-400
          "
        >
          Card
        </button>


        <button
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          py-2
          hover:border-yellow-400
          "
        >
          UPI
        </button>


        <button
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          py-2
          hover:border-yellow-400
          "
        >
          Exchange
        </button>


      </div>





      {/* Action Button */}

      <button

        className="
        mt-6
        w-full
        bg-yellow-500
        text-black
        py-3
        rounded-lg
        font-bold
        hover:bg-yellow-400
        "

      >

        Generate Invoice

      </button>



    </div>

  );

}