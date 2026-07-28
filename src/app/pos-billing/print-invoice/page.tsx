export default function PrintInvoicePage() {


  const products = [
    {
      name:"Gold Ring",
      purity:"22K",
      weight:"8 gm",
      amount:"$800"
    },
    {
      name:"Diamond Pendant",
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
            Print Invoice
          </h1>


          <p className="text-gray-400 mt-2">
            Invoice preview and printing
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
          Print Invoice
        </button>


      </div>









      {/* Invoice Paper */}


      <div
      className="
      bg-white
      text-black
      rounded-xl
      p-6
      md:p-10
      "
      >


        {/* Company Header */}


        <div
        className="
        flex
        flex-col
        md:flex-row
        justify-between
        gap-5
        border-b
        pb-5
        "
        >


          <div>

            <h2
            className="
            text-3xl
            font-bold
            "
            >
              LUXRAY GOLD ERP
            </h2>


            <p>
              Premium Jewellery Store
            </p>


          </div>




          <div>

            <p>
              Invoice No : INV00125
            </p>

            <p>
              Date : 28 July 2026
            </p>

          </div>



        </div>









        {/* Customer */}


        <div
        className="
        mt-6
        "
        >


          <h3
          className="
          font-bold
          text-xl
          "
          >
            Customer Details
          </h3>


          <p>
            Name : Rajesh Patel
          </p>


          <p>
            Mobile : 9876543210
          </p>


          <p>
            Address : Ahmedabad
          </p>


        </div>









        {/* Product Table */}


        <div
        className="
        mt-8
        overflow-x-auto
        "
        >


        <table
        className="
        w-full
        min-w-[700px]
        border
        "
        >


          <thead>


            <tr
            className="
            border
            "
            >


              <th className="p-3 border">
                Product
              </th>


              <th className="border">
                Purity
              </th>


              <th className="border">
                Weight
              </th>


              <th className="border">
                Amount
              </th>


            </tr>


          </thead>





          <tbody>


          {
            products.map((item,index)=>(


              <tr
              key={index}
              className="
              border
              "
              >


                <td className="p-3 border">
                  {item.name}
                </td>


                <td className="border text-center">
                  {item.purity}
                </td>


                <td className="border text-center">
                  {item.weight}
                </td>


                <td className="border text-center">
                  {item.amount}
                </td>


              </tr>


            ))
          }


          </tbody>



        </table>


        </div>









        {/* Calculation */}


        <div
        className="
        mt-8
        flex
        justify-end
        "
        >


          <div
          className="
          w-full
          md:w-80
          space-y-3
          "
          >


            <div className="flex justify-between">
              <span>
                Gold Value
              </span>

              <span>
                $2300
              </span>
            </div>



            <div className="flex justify-between">
              <span>
                Making Charge
              </span>

              <span>
                $200
              </span>
            </div>



            <div className="flex justify-between">
              <span>
                GST
              </span>

              <span>
                $75
              </span>
            </div>





            <div
            className="
            flex
            justify-between
            font-bold
            text-xl
            border-t
            pt-3
            "
            >

              <span>
                Total
              </span>

              <span>
                $2575
              </span>


            </div>


          </div>


        </div>









        {/* Footer */}


        <div
        className="
        mt-10
        border-t
        pt-5
        text-center
        "
        >

          <p>
            Thank you for shopping with us
          </p>


          <p>
            Visit Again
          </p>


        </div>




      </div>



    </div>

  );

}