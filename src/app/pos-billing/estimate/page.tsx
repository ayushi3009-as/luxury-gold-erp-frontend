export default function EstimatePage() {


  const items = [
    {
      product:"Gold Ring",
      purity:"22K",
      weight:"8 gm",
      amount:"$800"
    },
    {
      product:"Diamond Pendant",
      purity:"18K",
      weight:"5 gm",
      amount:"$1500"
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
            Estimate
          </h1>


          <p className="text-gray-400 mt-2">
            Create jewellery quotation before invoice
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
          Save Estimate
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
        font-semibold
        text-yellow-400
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
          placeholder="Estimate Date"
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









      {/* Product Table */}


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
          Estimate Items
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
                Purity
              </th>

              <th>
                Weight
              </th>

              <th>
                Amount
              </th>


            </tr>


          </thead>




          <tbody>


          {
            items.map((item,index)=>(


              <tr
              key={index}
              className="
              border-b
              border-gray-800
              "
              >


                <td className="p-3">
                  {item.product}
                </td>


                <td>
                  {item.purity}
                </td>


                <td>
                  {item.weight}
                </td>


                <td
                className="
                text-yellow-400
                "
                >
                  {item.amount}
                </td>


              </tr>


            ))
          }


          </tbody>



        </table>


        </div>



      </div>









      {/* Calculation */}


      <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
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
            Gold Value
          </p>

          <h2 className="
          text-2xl
          text-yellow-400
          font-bold
          ">
            $2300
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
            Making Charges
          </p>

          <h2 className="
          text-2xl
          text-yellow-400
          font-bold
          ">
            $200
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
            GST
          </p>

          <h2 className="
          text-2xl
          text-yellow-400
          font-bold
          ">
            $75
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
            Total Estimate
          </p>

          <h2 className="
          text-2xl
          text-yellow-400
          font-bold
          ">
            $2575
          </h2>

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
          Print Estimate
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
          Convert To Invoice
        </button>



      </div>




    </div>

  );

}