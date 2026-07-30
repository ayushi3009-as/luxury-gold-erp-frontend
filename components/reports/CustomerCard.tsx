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
      border-border-theme
      rounded-2xl
      p-6
      hover:border-yellow-500
      transition
      "
    >


      <div className="flex justify-between items-start">


        <div>

          <h2 className="text-xl font-bold text-accent-gold">
            {name}
          </h2>


          <p className="text-text-secondary mt-1">
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
            ? "bg-accent-gold/10 text-accent-gold"
            : "bg-gray-800 text-text-secondary"
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





      <div className="mt-5 space-y-2 text-text-secondary">


        <p>
          <span className="text-text-secondary">
            Email:
          </span>{" "}
          {email}
        </p>



        <p>
          <span className="text-text-secondary">
            Total Orders:
          </span>{" "}
          {totalOrders}
        </p>



        <p>
          <span className="text-text-secondary">
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
        text-accent-gold
        py-2
        rounded-xl
        hover:bg-accent-gold
        hover:text-black
        transition
        "
      >

        View Details

      </Link>



    </div>

  );
}