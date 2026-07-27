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
            Repair #{id}
          </h2>


          <p className="text-gray-400 mt-1">
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
            : "bg-yellow-500/10 text-yellow-500"
          }

          `}
        >

          {status}

        </span>


      </div>






      <div className="mt-5 space-y-2 text-gray-300">


        <p>

          <span className="text-gray-500">
            Phone:
          </span>{" "}

          {phone}

        </p>




        <p>

          <span className="text-gray-500">
            Product:
          </span>{" "}

          {product}

        </p>





        <p>

          <span className="text-gray-500">
            Repair Type:
          </span>{" "}

          {repairType}

        </p>





        <p>

          <span className="text-gray-500">
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