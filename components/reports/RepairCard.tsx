import Link from "next/link";


type RepairCardProps = {
  id: string;
  customerName: string;
  phone: string;
  product: string;
  repairType: string;
  status: string;
  charges: string;
};



export default function RepairCard({
  id,
  customerName,
  phone,
  product,
  repairType,
  status,
  charges,
}: RepairCardProps) {


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
            Repair #{id}
          </h2>


          <p className="text-text-secondary mt-1">
            {customerName}
          </p>


        </div>




        <span
          className={`
          px-3
          py-1
          rounded-full
          text-sm

          ${
            status === "Completed"
            ? "bg-green-500/10 text-green-400"
            : status === "Pending"
            ? "bg-red-500/10 text-red-400"
            : "bg-accent-gold/10 text-accent-gold"
          }

          `}
        >

          {status}

        </span>


      </div>






      <div className="mt-5 space-y-2 text-text-secondary">


        <p>

          <span className="text-text-secondary">
            Phone:
          </span>{" "}

          {phone}

        </p>




        <p>

          <span className="text-text-secondary">
            Product:
          </span>{" "}

          {product}

        </p>





        <p>

          <span className="text-text-secondary">
            Repair Type:
          </span>{" "}

          {repairType}

        </p>





        <p>

          <span className="text-text-secondary">
            Charges:
          </span>{" "}

          {charges}

        </p>


      </div>






      <Link
        href={`/reports/repair/details/${id}`}
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