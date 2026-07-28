export default function SalesReturnPage() {


  const returnItems = [
    {
      invoice:"INV00125",
      customer:"Rajesh Patel",
      product:"Gold Ring",
      weight:"8 gm",
      amount:"$800",
      status:"Approved"
    },
    {
      invoice:"INV00126",
      customer:"Amit Shah",
      product:"Diamond Ring",
      weight:"5 gm",
      amount:"$1500",
      status:"Pending"
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
            Sales Return
          </h1>


          <p className="text-gray-400 mt-2">
            Manage jewellery return transactions
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
          New Return
        </button>


      </div>









      {/* Invoice Search */}


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
        mb-4
        "
        >
          Find Invoice
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
          placeholder="Invoice Number"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />


          <input
          placeholder="Customer Mobile"
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
            Search
          </button>


        </div>


      </div>









      {/* Return Details */}


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
          Return Product Details
        </h2>





        <div className="overflow-x-auto">


        <table
        className="
        min-w-[900px]
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
                Invoice
              </th>


              <th>
                Customer
              </th>


              <th>
                Product
              </th>


              <th>
                Weight
              </th>


              <th>
                Amount
              </th>


              <th>
                Status
              </th>


            </tr>


          </thead>





          <tbody>


          {
            returnItems.map((item,index)=>(


              <tr
              key={index}
              className="
              border-b
              border-gray-800
              "
              >


                <td className="p-3">
                  {item.invoice}
                </td>


                <td>
                  {item.customer}
                </td>


                <td>
                  {item.product}
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


                <td
                className="
                text-green-400
                "
                >
                  {item.status}
                </td>


              </tr>


            ))
          }


          </tbody>



        </table>


        </div>


      </div>









      {/* Return Calculation */}


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
            Return Amount
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
            Return Type
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
              Refund
            </option>

            <option>
              Exchange
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
            Return Reason
          </p>


          <input
          placeholder="Enter reason"
          className="
          mt-3
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
          Process Return
        </button>


      </div>




    </div>

  );

}