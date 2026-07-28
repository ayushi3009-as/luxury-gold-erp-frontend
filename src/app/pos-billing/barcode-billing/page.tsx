export default function BarcodeBillingPage() {


  const products = [
    {
      code:"GLD001",
      name:"Gold Ring",
      purity:"22K",
      weight:"8 gm",
      price:"$800"
    },
    {
      code:"GLD002",
      name:"Gold Chain",
      purity:"22K",
      weight:"20 gm",
      price:"$2000"
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
            Barcode Billing
          </h1>


          <p className="text-gray-400 mt-2">
            Scan jewellery barcode and create invoice
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
          Start Scanner
        </button>


      </div>








      {/* Scanner Section */}


      <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-3
      gap-5
      "
      >



        {/* Scanner */}

        <div
        className="
        lg:col-span-1
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
          mb-4
          "
          >
            Barcode Scanner
          </h2>



          <div
          className="
          h-52
          bg-black
          border-2
          border-dashed
          border-yellow-500
          rounded-xl
          flex
          items-center
          justify-center
          text-gray-400
          "
          >

            Scan Area

          </div>




          <input
          placeholder="Enter barcode manually"
          className="
          mt-5
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />



        </div>








        {/* Product Details */}


        <div
        className="
        lg:col-span-2
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
            Scanned Products
          </h2>




          <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
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
                  Barcode : {item.code}
                </p>


                <p className="text-gray-400">
                  Purity : {item.purity}
                </p>


                <p className="text-gray-400">
                  Weight : {item.weight}
                </p>


                <p
                className="
                text-yellow-400
                mt-2
                font-bold
                "
                >
                  {item.price}
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
                  Add To Cart
                </button>



              </div>


            ))
          }


          </div>



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
        text-yellow-400
        font-semibold
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
                Purity
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
                22K
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









      {/* Checkout */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-5
      flex
      flex-col
      md:flex-row
      justify-between
      gap-4
      items-center
      "
      >


        <div>

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


        </div>




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
          Proceed Payment
        </button>



      </div>




    </div>

  );

}