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
    <main className="min-h-screen bg-background-primary text-text-primary p-8">


      <div className="mb-8">

        <h1 className="text-4xl font-bold text-accent-gold">
          Edit Inventory
        </h1>


        <p className="text-text-secondary mt-2">
          Update inventory details for ID: {params.id}
        </p>

      </div>


      <InventoryForm isEdit={true} />


    </main>
  );
}