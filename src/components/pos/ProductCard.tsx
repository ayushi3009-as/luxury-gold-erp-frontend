"use client";


type ProductCardProps = {
  name: string;
  purity: string;
  weight: string;
  price: string;
};


export default function ProductCard({
  name,
  purity,
  weight,
  price,
}: ProductCardProps) {


  return (

    <div
      className="
      bg-[#111]
      border
      border-yellow-600/20
      rounded-xl
      p-4
      hover:border-yellow-400
      transition
      "
    >


      <h3
        className="
        text-lg
        font-semibold
        text-yellow-400
        "
      >
        {name}
      </h3>


      <div className="mt-3 space-y-2 text-sm">


        <p className="flex justify-between text-gray-400">

          <span>
            Purity
          </span>

          <span className="text-white">
            {purity}
          </span>

        </p>



        <p className="flex justify-between text-gray-400">

          <span>
            Weight
          </span>

          <span className="text-white">
            {weight}
          </span>

        </p>



        <p className="flex justify-between text-gray-400">

          <span>
            Price
          </span>

          <span className="text-yellow-400">
            {price}
          </span>

        </p>



      </div>



      <button
        className="
        mt-4
        w-full
        bg-yellow-500
        text-black
        py-2
        rounded-lg
        font-semibold
        hover:bg-yellow-400
        "
      >
        Add To Cart
      </button>


    </div>

  );

}