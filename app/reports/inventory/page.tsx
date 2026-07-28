import InventorySearch from "@/components/reports/InventorySearch";
import InventoryCard from "@/components/reports/InventoryCard";


const inventoryData = [
  {
    name: "22K Gold Ring",
    sku: "SKU1001",
    category: "Ring",
    quantity: 25,
    weight: "15.5 gm",
    purity: "22K",
  },
  {
    name: "Diamond Necklace",
    sku: "SKU1002",
    category: "Necklace",
    quantity: 10,
    weight: "45 gm",
    purity: "18K",
  },
  {
    name: "Gold Chain",
    sku: "SKU1003",
    category: "Chain",
    quantity: 18,
    weight: "30 gm",
    purity: "22K",
  },
];


export default function InventoryPage() {

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">


      <div className="mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          Inventory Management
        </h1>

        <p className="text-gray-400 mt-2">
          Manage jewellery stock, products and inventory details
        </p>

      </div>



      <InventorySearch />



      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        xl:grid-cols-3 
        gap-6
      ">

        {inventoryData.map((item)=>(
          <InventoryCard
            key={item.sku}
            {...item}
          />
        ))}

      </div>


    </main>
  );
}