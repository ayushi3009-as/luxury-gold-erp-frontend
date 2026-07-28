import Link from "next/link";


type CustomerCardProps = {
  id: string;
  name: string;
  phone: string;
  email: string;
  totalOrders: number;
  totalPurchase: string;
  goldSavingScheme: boolean;
};


export default function CustomerCard({
  id,
  name,
  phone,
  email,
  totalOrders,
  totalPurchase,
  goldSavingScheme,
}: CustomerCardProps) {


  return (

    <div
      className="
      bg-[#151515]
      border
      border-gray-800
      rounded-2xl
      p-6
      hover:border-yellow-500
      transition
      "
    >


      <div className="flex justify-between items-start">


        <div>

          <h2 className="text-xl font-bold text-yellow-500">
            {name}
          </h2>


          <p className="text-gray-400 mt-1">
            {phone}
          </p>


        </div>



        <span
          className={`
          px-3
          py-1
          rounded-full
          text-sm
          ${
            goldSavingScheme
            ? "bg-yellow-500/10 text-yellow-500"
            : "bg-gray-800 text-gray-400"
          }
          `}
        >

          {
            goldSavingScheme
            ? "Gold Scheme"
            : "Regular"
          }

        </span>


      </div>





      <div className="mt-5 space-y-2 text-gray-300">


        <p>
          <span className="text-gray-500">
            Email:
          </span>{" "}
          {email}
        </p>



        <p>
          <span className="text-gray-500">
            Total Orders:
          </span>{" "}
          {totalOrders}
        </p>



        <p>
          <span className="text-gray-500">
            Total Purchase:
          </span>{" "}
          {totalPurchase}
        </p>


      </div>





      <Link
        href={`/reports/customers/details/${id}`}
        className="
        mt-6
        block
        text-center
        border
        border-yellow-500
        text-yellow-500
        py-2
        rounded-xl
        hover:bg-yellow-500
        hover:text-black
        transition
        "
      >

        View Details

      </Link>



    </div>

  );
}