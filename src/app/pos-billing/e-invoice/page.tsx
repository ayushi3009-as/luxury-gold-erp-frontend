export default function EInvoicePage() {


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
            E-Invoice
          </h1>


          <p className="text-gray-400 mt-2">
            Generate and manage GST e-invoices
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
          Generate E-Invoice
        </button>


      </div>









      {/* Invoice Information */}


      <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-12
      gap-5
      "
      >





        {/* Invoice Details */}


        <div
        className="
        lg:col-span-7
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-4
        md:p-6
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
            Invoice Information
          </h2>





          <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
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
            placeholder="GST Number"
            className="
            bg-black
            border
            border-gray-700
            rounded-lg
            p-3
            "
            />



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
            placeholder="Customer GSTIN"
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









        {/* Status */}


        <div
        className="
        lg:col-span-5
        bg-[#111]
        border
        border-yellow-600/20
        rounded-xl
        p-4
        md:p-6
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
            Invoice Status
          </h2>





          <div
          className="
          bg-black
          rounded-xl
          p-5
          "
          >


            <p className="text-gray-400">
              Current Status
            </p>


            <h3
            className="
            text-orange-400
            text-xl
            mt-2
            "
            >
              Not Generated
            </h3>



          </div>




          <button
          className="
          mt-5
          w-full
          bg-yellow-500
          text-black
          py-3
          rounded-lg
          font-bold
          "
          >
            Submit GST Portal
          </button>



        </div>





      </div>









      {/* JSON Preview */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-4
      md:p-6
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
          E-Invoice Preview
        </h2>




        <div
        className="
        bg-black
        rounded-xl
        p-5
        overflow-x-auto
        "
        >

<pre
className="
text-sm
text-gray-300
min-w-[500px]
"
>
{`
{
  "invoiceNo": "INV-1001",
  "customer": "Rahul Patel",
  "amount": 2750,
  "gst": 100,
  "status": "Pending"
}
`}
</pre>


        </div>



      </div>








      {/* History */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-4
      md:p-6
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
          E-Invoice History
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
                Invoice
              </th>

              <th>
                Date
              </th>

              <th>
                IRN Number
              </th>

              <th>
                Status
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
                INV-1001
              </td>


              <td>
                28 July 2026
              </td>


              <td>
                IRN123456789
              </td>


              <td className="text-green-400">
                Generated
              </td>


            </tr>


          </tbody>



        </table>



        </div>



      </div>





    </div>

  );

}