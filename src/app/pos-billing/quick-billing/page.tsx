export default function QuickBillingPage() {

  const products = [
    {
      name:"Gold Ring",
      weight:"8 gm",
      price:"$800"
    },
    {
      name:"Gold Chain",
      weight:"20 gm",
      price:"$2000"
    },
    {
      name:"Diamond Ring",
      weight:"5 gm",
      price:"$1500"
    }
  ];


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
            Quick Billing
          </h1>


          <p className="text-gray-400 mt-2">
            Fast jewellery billing system
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
          Create Bill
        </button>


      </div>









      {/* Search Section */}


      <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-5
      ">



        {/* Customer */}

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
          mb-4
          "
          >
            Customer Search
          </h2>



          <input
          placeholder="Search customer name / mobile"
          className="
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


        </div>








        {/* Product */}

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
          mb-4
          "
          >
            Product Search
          </h2>


          <input
          placeholder="Scan barcode / search product"
          className="
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


        </div>


      </div>









      {/* Recent Products */}


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
          Recent Products
        </h2>



        <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
        "
        >


        {
          products.map((item,index)=>(


            <div
            key={index}
            className="
            bg-black
            border
            border-gray-700
            rounded-xl
            p-4
            hover:border-yellow-500
            transition
            "
            >


              <h3
              className="
              text-yellow-400
              font-bold
              text-lg
              "
              >
                {item.name}
              </h3>


              <p className="text-gray-400 mt-2">
                Weight : {item.weight}
              </p>


              <p className="text-gray-400">
                Amount : {item.price}
              </p>



              <button
              className="
              mt-4
              w-full
              bg-yellow-500
              text-black
              py-2
              rounded-lg
              font-bold
              "
              >
                Add
              </button>


            </div>


          ))
        }


        </div>


      </div>









      {/* Cart */}


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
          Billing Cart
        </h2>




        <div className="overflow-x-auto">


        <table
        className="
        min-w-[700px]
        w-full
        "
        >


          <thead>


            <tr
            className="
            border-b
            border-gray-700
            text-gray-400
            "
            >

              <th className="p-3 text-left">
                Product
              </th>

              <th>
                Weight
              </th>


              <th>
                Quantity
              </th>


              <th>
                Amount
              </th>


            </tr>


          </thead>




          <tbody>


            <tr
            className="
            border-b
            border-gray-800
            "
            >


              <td className="p-3">
                Gold Ring
              </td>


              <td>
                8 gm
              </td>


              <td>
                1
              </td>


              <td
              className="
              text-yellow-400
              "
              >
                $800
              </td>


            </tr>


          </tbody>



        </table>


        </div>


      </div>









      {/* Payment Summary */}


      <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-3
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
            Sub Total
          </p>


          <h2
          className="
          text-2xl
          text-yellow-400
          font-bold
          "
          >
            $800
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
            Payment Mode
          </p>


          <select
          className="
          mt-3
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          >

            <option>
              Cash
            </option>

            <option>
              UPI
            </option>

            <option>
              Card
            </option>


          </select>


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
            Total Amount
          </p>


          <h2
          className="
          text-3xl
          text-yellow-400
          font-bold
          "
          >
            $800
          </h2>


          <button
          className="
          mt-4
          w-full
          bg-yellow-500
          text-black
          py-3
          rounded-lg
          font-bold
          "
          >
            Generate Bill
          </button>


        </div>



      </div>





    </div>

  );

}