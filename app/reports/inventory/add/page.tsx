import Link from "next/link";
import InventoryForm from "@/components/reports/InventoryForm";


export default function AddInventoryPage() {


  return (

    <main
      className="
      min-h-screen
      bg-background-primary
      text-text-primary
      p-8
      "
    >


      <Link
        href="/reports/inventory"
        className="
        inline-block
        mb-6
        border
        border-yellow-500
        text-accent-gold
        px-5
        py-2
        rounded-xl
        hover:bg-accent-gold
        hover:text-black
        transition
        "
      >

        ← Back to Inventory

      </Link>



      <div className="mb-8">


        <h1 className="text-4xl font-bold text-accent-gold">
          Add Inventory
        </h1>


        <p className="text-text-secondary mt-2">
          Add new jewellery products into inventory
        </p>


      </div>



      <InventoryForm />


    </main>

  );
}