"use client";


export default function CustomerPanel(){

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
        Customer Details
      </h2>



      {/* Search Customer */}

      <input

        type="text"

        placeholder="Search Customer..."

        className="
        w-full
        bg-black
        border
        border-gray-700
        rounded-lg
        p-3
        text-white
        outline-none
        focus:border-yellow-400
        "

      />



      <button

        className="
        mt-4
        w-full
        bg-yellow-500
        text-black
        py-2
        rounded-lg
        font-semibold
        hover:bg-yellow-400
        "

      >

        + Add New Customer

      </button>




      {/* Customer Info */}

      <div
        className="
        mt-5
        bg-black
        rounded-lg
        p-4
        space-y-3
        "
      >


        <p
          className="
          flex
          justify-between
          text-gray-400
          "
        >

          Name

          <span className="text-white">
            Rahul Patel
          </span>

        </p>



        <p
          className="
          flex
          justify-between
          text-gray-400
          "
        >

          Mobile

          <span className="text-white">
            9876543210
          </span>

        </p>



        <p
          className="
          flex
          justify-between
          text-gray-400
          "
        >

          Previous Purchase

          <span className="text-yellow-400">
            12 Orders
          </span>

        </p>



        <p
          className="
          flex
          justify-between
          text-gray-400
          "
        >

          Loyalty Points

          <span className="text-yellow-400">
            850
          </span>

        </p>



      </div>


    </div>

  );

}