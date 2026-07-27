import InventoryForm from "@/components/reports/InventoryForm";


interface EditInventoryPageProps {
  params: {
    id: string;
  };
}


export default function EditInventoryPage({
  params,
}: EditInventoryPageProps) {

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">


      <div className="mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          Edit Inventory
        </h1>


        <p className="text-gray-400 mt-2">
          Update inventory details for ID: {params.id}
        </p>

      </div>


      <InventoryForm isEdit={true} />


    </main>
  );
}