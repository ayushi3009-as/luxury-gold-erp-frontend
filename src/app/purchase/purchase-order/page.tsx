import PurchaseOrderHeader from "@/components/purchase/PurchaseOrderHeader";
import PurchaseOrderTable from "@/components/purchase/PurchaseOrderTable";


export default function PurchaseOrderPage() {

  return (

    <div
      className="
      min-h-screen
      bg-[#050505]
      text-white
      p-4
      sm:p-6
      space-y-6
      "
    >

      <PurchaseOrderHeader />


      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-4
        "
      >

        <div className="erp-stat-card">
          <p>Total PO</p>
          <h2>245</h2>
        </div>


        <div className="erp-stat-card">
          <p>Pending Approval</p>
          <h2>35</h2>
        </div>


        <div className="erp-stat-card">
          <p>Approved PO</p>
          <h2>180</h2>
        </div>


        <div className="erp-stat-card">
          <p>Completed</p>
          <h2>120</h2>
        </div>


        <div className="erp-stat-card">
          <p>Cancelled</p>
          <h2>10</h2>
        </div>


      </div>


      <PurchaseOrderTable />


    </div>

  );
}