import Link from "next/link";


interface InventoryDetailsPageProps {
  params: {
    id: string;
  };
}


export default function InventoryDetailsPage({
  params,
}: InventoryDetailsPageProps) {


  const inventory = {
    name: "22K Gold Ring",
    sku: "SKU1001",
    category: "Ring",
    quantity: 25,
    weight: "15.5 gm",
    purity: "22K",
    purchasePrice: "₹25,000",
    sellingPrice: "₹30,000",
    status: "In Stock",
    description:
      "Premium 22K gold ring available in jewellery inventory.",
  };


  return (

    <main
      className="
      min-h-screen
      bg-[#0B0B0B]
      text-white
      p-8
      "
    >


      {/* Back Button */}

      <Link
        href="/reports/inventory"
        className="
        inline-block
        mb-6
        border
        border-yellow-500
        text-yellow-500
        px-5
        py-2
        rounded-xl
        hover:bg-yellow-500
        hover:text-black
        transition
        "
      >
        ← Back to Inventory
      </Link>



      <div className="mb-8">


        <h1
          className="
          text-4xl
          font-bold
          text-yellow-500
          "
        >
          Inventory Details
        </h1>


        <p className="text-gray-400 mt-2">
          Product ID: {params.id}
        </p>


      </div>




      <div
        className="
        bg-[#141414]
        border
        border-yellow-500/20
        rounded-2xl
        p-8
        "
      >


        <div className="flex justify-between items-center mb-8">


          <h2
            className="
            text-2xl
            font-bold
            text-yellow-500
            "
          >
            {inventory.name}
          </h2>



          <span
            className="
            bg-yellow-500/10
            text-yellow-500
            px-4
            py-2
            rounded-full
            "
          >
            {inventory.purity}
          </span>


        </div>





        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "
        >


          <div>
            <p className="text-gray-500">
              SKU Code
            </p>

            <p className="text-lg">
              {inventory.sku}
            </p>
          </div>




          <div>
            <p className="text-gray-500">
              Category
            </p>

            <p className="text-lg">
              {inventory.category}
            </p>
          </div>





          <div>
            <p className="text-gray-500">
              Quantity
            </p>

            <p className="text-lg">
              {inventory.quantity}
            </p>
          </div>





          <div>
            <p className="text-gray-500">
              Weight
            </p>

            <p className="text-lg">
              {inventory.weight}
            </p>
          </div>





          <div>
            <p className="text-gray-500">
              Purity
            </p>

            <p className="text-lg text-yellow-500">
              {inventory.purity}
            </p>
          </div>





          <div>
            <p className="text-gray-500">
              Stock Status
            </p>

            <p className="text-green-400">
              {inventory.status}
            </p>
          </div>





          <div>
            <p className="text-gray-500">
              Purchase Price
            </p>

            <p>
              {inventory.purchasePrice}
            </p>
          </div>





          <div>
            <p className="text-gray-500">
              Selling Price
            </p>

            <p>
              {inventory.sellingPrice}
            </p>
          </div>



        </div>





        <div className="mt-8">


          <p className="text-gray-500 mb-2">
            Description
          </p>


          <p className="text-gray-300">
            {inventory.description}
          </p>


        </div>





        {/* Edit Button */}

        <Link
          href={`/reports/inventory/edit/${params.id}`}
          className="
          mt-8
          inline-block
          bg-yellow-500
          text-black
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:bg-yellow-400
          transition
          "
        >
          Edit Inventory
        </Link>



      </div>


    </main>

  );
}