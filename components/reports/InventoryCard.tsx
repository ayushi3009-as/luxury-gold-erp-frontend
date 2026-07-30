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


          <p className="text-text-secondary text-sm mt-1">
            SKU: {sku}
          </p>

        </div>



        <span
          className="
          bg-accent-gold/10
          text-accent-gold
          px-3
          py-1
          rounded-full
          text-sm
          "
        >

          {purity}

        </span>


      </div>



      <div className="mt-5 space-y-2 text-text-secondary">


        <p>
          <span className="text-text-secondary">
            Category:
          </span>{" "}
          {category}
        </p>


        <p>
          <span className="text-text-secondary">
            Quantity:
          </span>{" "}
          {quantity}
        </p>


        <p>
          <span className="text-text-secondary">
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