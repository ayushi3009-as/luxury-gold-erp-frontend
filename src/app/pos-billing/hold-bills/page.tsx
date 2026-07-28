export default function HoldBillsPage() {


  const bills = [
    {
      id:"HB001",
      customer:"Rajesh Patel",
      mobile:"9876543210",
      items:"Gold Ring + Chain",
      amount:"$2500",
      time:"10:30 AM"
    },
    {
      id:"HB002",
      customer:"Amit Shah",
      mobile:"9876512345",
      items:"Diamond Ring",
      amount:"$1800",
      time:"11:15 AM"
    },
    {
      id:"HB003",
      customer:"Neha Joshi",
      mobile:"9876598765",
      items:"Gold Necklace",
      amount:"$3200",
      time:"12:05 PM"
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
            Hold Bills
          </h1>


          <p className="text-gray-400 mt-2">
            Manage pending billing transactions
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
          Create New Bill
        </button>


      </div>









      {/* Search */}


      <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-5
      "
      >


        <input
        placeholder="Search hold bill / customer / mobile"
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









      {/* Hold Bills Table */}


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
          Saved Hold Bills
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
                Bill ID
              </th>


              <th>
                Customer
              </th>


              <th>
                Items
              </th>


              <th>
                Amount
              </th>


              <th>
                Time
              </th>


              <th>
                Action
              </th>


            </tr>


          </thead>





          <tbody>


          {
            bills.map((bill,index)=>(


              <tr
              key={index}
              className="
              border-b
              border-gray-800
              "
              >


                <td className="p-3">
                  {bill.id}
                </td>



                <td>

                  <p className="text-white">
                    {bill.customer}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {bill.mobile}
                  </p>

                </td>



                <td>
                  {bill.items}
                </td>



                <td
                className="
                text-yellow-400
                font-bold
                "
                >
                  {bill.amount}
                </td>



                <td>
                  {bill.time}
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
                    px-4
                    py-2
                    rounded-lg
                    font-bold
                    "
                    >
                      Resume
                    </button>



                    <button
                    className="
                    border
                    border-red-500
                    text-red-400
                    px-4
                    py-2
                    rounded-lg
                    "
                    >
                      Delete
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









      {/* Summary Cards */}


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
            Total Hold Bills
          </p>


          <h2
          className="
          text-3xl
          text-yellow-400
          font-bold
          "
          >
            12
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


          <h2
          className="
          text-3xl
          text-yellow-400
          font-bold
          "
          >
            $18,500
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
            Today's Hold
          </p>


          <h2
          className="
          text-3xl
          text-yellow-400
          font-bold
          "
          >
            5
          </h2>


        </div>



      </div>



    </div>

  );

}