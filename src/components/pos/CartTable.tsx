"use client";


const cartItems = [
  {
    product: "Gold Ring",
    weight: "10 gm",
    purity: "22K",
    making: "15%",
    stone: "$0",
    amount: "$850",
  },
  {
    product: "Gold Chain",
    weight: "20 gm",
    purity: "22K",
    making: "12%",
    stone: "$100",
    amount: "$1,700",
  },
];


export default function CartTable() {


  return (

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
        Cart Items
      </h2>



      <div className="overflow-x-auto">


        <table className="w-full">


          <thead>

            <tr
              className="
              border-b
              border-gray-700
              text-gray-400
              text-sm
              "
            >

              <th className="text-left p-3">
                Product
              </th>

              <th className="text-left">
                Weight
              </th>

              <th className="text-left">
                Purity
              </th>

              <th className="text-left">
                Making
              </th>

              <th className="text-left">
                Stone
              </th>

              <th className="text-left">
                Amount
              </th>

            </tr>

          </thead>



          <tbody>


          {
            cartItems.map((item,index)=>(

              <tr
                key={index}
                className="
                border-b
                border-gray-800
                text-sm
                "
              >


                <td className="p-3 text-white">
                  {item.product}
                </td>


                <td>
                  {item.weight}
                </td>


                <td>
                  {item.purity}
                </td>


                <td>
                  {item.making}
                </td>


                <td>
                  {item.stone}
                </td>


                <td
                  className="
                  text-yellow-400
                  font-semibold
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


  );

}