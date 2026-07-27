import Link from "next/link";


type InventoryCardProps = {
  name: string;
  sku: string;
  category: string;
  quantity: number;
  weight: string;
  purity: string;
};



export default function InventoryCard({
  name,
  sku,
  category,
  quantity,
  weight,
  purity,
}: InventoryCardProps) {


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


          <p className="text-gray-400 text-sm mt-1">
            SKU: {sku}
          </p>

        </div>



        <span
          className="
          bg-yellow-500/10
          text-yellow-500
          px-3
          py-1
          rounded-full
          text-sm
          "
        >

          {purity}

        </span>


      </div>



      <div className="mt-5 space-y-2 text-gray-300">


        <p>
          <span className="text-gray-500">
            Category:
          </span>{" "}
          {category}
        </p>


        <p>
          <span className="text-gray-500">
            Quantity:
          </span>{" "}
          {quantity}
        </p>


        <p>
          <span className="text-gray-500">
            Weight:
          </span>{" "}
          {weight}
        </p>


      </div>




      <Link
        href={`/reports/inventory/details/${sku}`}
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