export default function VoiceBillingPage() {


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
            Voice Billing
          </h1>


          <p className="text-gray-400 mt-2">
            Create invoice using voice commands
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
          🎤 Start Voice
        </button>


      </div>








      {/* Voice Assistant Area */}


      <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-12
      gap-5
      "
      >






        {/* Voice Control */}


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
            Voice Assistant
          </h2>





          <div
          className="
          h-52
          bg-black
          rounded-xl
          flex
          flex-col
          items-center
          justify-center
          "
          >


            <div
            className="
            text-6xl
            "
            >
              🎤
            </div>


            <p className="text-gray-400 mt-4">
              Listening...
            </p>


          </div>






          <div
          className="
          mt-5
          bg-black
          rounded-xl
          p-4
          "
          >


            <p className="text-gray-400">
              Voice Command
            </p>


            <p className="mt-2">
              "Add 22K gold ring 10 gram"
            </p>


          </div>






        </div>









        {/* Generated Bill */}


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
            Voice Generated Items
          </h2>






          <div
          className="
          overflow-x-auto
          "
          >



          <table
          className="
          min-w-[650px]
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
                  10 gm
                </td>


                <td>
                  22K
                </td>


                <td className="text-yellow-400">
                  $850
                </td>


              </tr>





              <tr>

                <td className="p-3">
                  Gold Chain
                </td>


                <td>
                  20 gm
                </td>


                <td>
                  22K
                </td>


                <td className="text-yellow-400">
                  $1800
                </td>


              </tr>


            </tbody>


          </table>



          </div>








          {/* Total */}


          <div
          className="
          mt-6
          flex
          flex-col
          sm:flex-row
          justify-between
          gap-4
          items-center
          "
          >


            <h2
            className="
            text-xl
            text-yellow-400
            font-bold
            "
            >
              Total : $2650
            </h2>



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
              Generate Invoice
            </button>



          </div>



        </div>






      </div>





    </div>

  );

}