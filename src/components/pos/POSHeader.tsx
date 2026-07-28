"use client";

export default function POSHeader() {


  return (

    <div
      className="
      h-16
      flex
      items-center
      justify-between
      px-4
      md:px-6
      bg-[#050505]
      "
    >



      {/* Left Side */}

      <div
        className="
        flex
        items-center
        gap-3
        "
      >


        <div
          className="
          hidden
          md:block
          text-xl
          font-bold
          text-yellow-400
          "
        >

          LUXRAY GOLD ERP

        </div>



        <div
          className="
          md:hidden
          text-lg
          font-bold
          text-yellow-400
          "
        >

          LUXRAY

        </div>


      </div>








      {/* Search */}

      <div
        className="
        hidden
        sm:block
        flex-1
        max-w-xl
        mx-5
        "
      >

        <input

          placeholder="Search invoice, customer, product..."

          className="
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          px-4
          py-2
          text-sm
          outline-none
          focus:border-yellow-500
          "

        />

      </div>








      {/* Right Side */}

      <div
        className="
        flex
        items-center
        gap-3
        "
      >



        <button
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          px-3
          py-2
          "
        >

          🔔

        </button>





        <div
          className="
          hidden
          sm:block
          text-right
          "
        >

          <p
          className="
          text-sm
          font-semibold
          "
          >
            Admin
          </p>


          <p
          className="
          text-xs
          text-gray-400
          "
          >
            Manager
          </p>


        </div>




        <div
          className="
          w-10
          h-10
          rounded-full
          bg-yellow-500
          text-black
          flex
          items-center
          justify-center
          font-bold
          "
        >

          A

        </div>



      </div>





    </div>

  );

}