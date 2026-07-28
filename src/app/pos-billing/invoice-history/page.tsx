export default function InvoiceHistoryPage() {


  const invoices = [
    {
      id:"INV00101",
      customer:"Rajesh Patel",
      date:"28 July 2026",
      amount:"$2500",
      payment:"Paid",
      status:"Completed"
    },
    {
      id:"INV00102",
      customer:"Amit Shah",
      date:"28 July 2026",
      amount:"$1800",
      payment:"Pending",
      status:"Pending"
    },
    {
      id:"INV00103",
      customer:"Neha Joshi",
      date:"27 July 2026",
      amount:"$3200",
      payment:"Paid",
      status:"Completed"
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
            Invoice History
          </h1>


          <p className="text-gray-400 mt-2">
            View and manage all sales invoices
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
          New Invoice
        </button>


      </div>









      {/* Search Filter */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-5
      "
      >


        <div
        className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-4
        "
        >


          <input
          placeholder="Search invoice number"
          className="
          bg-black
          border
          border-gray-700
          rounded-lg
          p-3
          "
          />



          <input
          placeholder="Customer name"
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
              All Status
            </option>

            <option>
              Paid
            </option>

            <option>
              Pending
            </option>

          </select>




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









      {/* Invoice Table */}


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
          Invoice List
        </h2>




        <div className="overflow-x-auto">


        <table
        className="
        min-w-[1000px]
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
                Invoice ID
              </th>


              <th>
                Customer
              </th>


              <th>
                Date
              </th>


              <th>
                Amount
              </th>


              <th>
                Payment
              </th>


              <th>
                Status
              </th>


              <th>
                Action
              </th>


            </tr>


          </thead>





          <tbody>


          {
            invoices.map((invoice,index)=>(


              <tr
              key={index}
              className="
              border-b
              border-gray-800
              "
              >


                <td className="p-3">
                  {invoice.id}
                </td>



                <td>
                  {invoice.customer}
                </td>



                <td>
                  {invoice.date}
                </td>



                <td
                className="
                text-yellow-400
                font-bold
                "
                >
                  {invoice.amount}
                </td>



                <td>
                  {invoice.payment}
                </td>



                <td
                className={
                  invoice.status==="Completed"
                  ?
                  "text-green-400"
                  :
                  "text-yellow-400"
                }
                >
                  {invoice.status}
                </td>



                <td>


                  <div
                  className="
                  flex
                  gap-2
                  "
                  >


                    <button
                    className="
                    bg-yellow-500
                    text-black
                    px-3
                    py-2
                    rounded-lg
                    font-bold
                    "
                    >
                      View
                    </button>



                    <button
                    className="
                    border
                    border-yellow-500
                    text-yellow-400
                    px-3
                    py-2
                    rounded-lg
                    "
                    >
                      Print
                    </button>


                  </div>


                </td>



              </tr>


            ))
          }


          </tbody>



        </table>


        </div>


      </div>









      {/* Summary */}


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
            Total Invoices
          </p>

          <h2 className="
          text-3xl
          text-yellow-400
          font-bold
          ">
            245
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

          <h2 className="
          text-3xl
          text-green-400
          font-bold
          ">
            $85,000
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
            Pending Amount
          </p>

          <h2 className="
          text-3xl
          text-red-400
          font-bold
          ">
            $12,500
          </h2>

        </div>



      </div>




    </div>

  );

}