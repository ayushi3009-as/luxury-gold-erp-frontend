export default function NewInvoicePage() {

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
            New Invoice
          </h1>


          <p className="text-gray-400 mt-2">
            Create jewellery sales invoice
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
          Save Invoice
        </button>


      </div>








      {/* Customer + Product */}

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
        ">


          <h2
          className="
          text-xl
          text-yellow-400
          font-semibold
          mb-4
          "
          >
            Customer Details
          </h2>



          <div className="space-y-4">


            <input
            placeholder="Customer Name"
            className="
            w-full
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
            w-full
            bg-black
            border
            border-gray-700
            rounded-lg
            p-3
            "
            />


            <input
            placeholder="Address"
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








        {/* Product Search */}

        <div
        className="
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-5
        ">


          <h2
          className="
          text-xl
          text-yellow-400
          font-semibold
          mb-4
          "
          >
            Product Search
          </h2>



          <input

          placeholder="Search jewellery / barcode"

          className="
          w-full
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "

          />



          <button
          className="
          mt-4
          bg-yellow-500
          text-black
          px-5
          py-3
          rounded-lg
          font-bold
          "
          >

            Add Product

          </button>


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
      ">


        <h2
        className="
        text-xl
        text-yellow-400
        font-semibold
        mb-4
        "
        >
          Cart Items
        </h2>




        <div className="overflow-x-auto">


        <table
        className="
        min-w-[750px]
        w-full
        "
        >


          <thead>


            <tr
            className="
            border-b
            border-gray-700
            text-gray-400
            ">


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
                Rate
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
            ">


              <td className="p-3">
                Gold Ring
              </td>


              <td>
                22K
              </td>


              <td>
                10 gm
              </td>


              <td>
                $100/gm
              </td>


              <td
              className="
              text-yellow-400
              "
              >
                $1000
              </td>


            </tr>


          </tbody>


        </table>


        </div>


      </div>









      {/* Gold Calculation */}

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
          Gold Calculation
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
          placeholder="Gold Rate"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />



          <select
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          >

            <option>
              22K
            </option>

            <option>
              24K
            </option>

            <option>
              18K
            </option>

          </select>




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
          placeholder="Making Charge %"
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









      {/* Charges */}

      <div
      className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-5
      ">


        <div className="
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-5
        ">

          <p className="text-gray-400">
            Gold Value
          </p>

          <h2 className="
          text-2xl
          text-yellow-400
          font-bold
          ">
            $1000
          </h2>

        </div>





        <div className="
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-5
        ">

          <p className="text-gray-400">
            GST + Making
          </p>

          <h2 className="
          text-2xl
          text-yellow-400
          font-bold
          ">
            $150
          </h2>

        </div>





        <div className="
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-5
        ">

          <p className="text-gray-400">
            Total Amount
          </p>

          <h2 className="
          text-2xl
          text-yellow-400
          font-bold
          ">
            $1150
          </h2>

        </div>



      </div>









      {/* Payment */}

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
          Payment Details
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


          <select
          className="
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
              Card
            </option>

            <option>
              UPI
            </option>

          </select>



          <input
          placeholder="Paid Amount"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />



          <input
          value="$0"
          readOnly
          className="
          bg-black
          border
          border-green-500
          rounded-lg
          p-3
          text-green-400
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

            Generate Invoice

          </button>



        </div>


      </div>



    </div>

  );

}