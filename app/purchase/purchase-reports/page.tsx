import PurchaseReportsHeader from "@/components/purchase/PurchaseReportsHeader";
import PurchaseReportStats from "@/components/purchase/PurchaseReportStats";
import PurchaseReportTable from "@/components/purchase/PurchaseReportTable";
import GSTReport from "@/components/purchase/GSTReport";
import ExportReport from "@/components/purchase/ExportReport";


export default function PurchaseReportsPage() {


return (

<div
className="
min-h-screen
bg-[#050505]
text-text-primary
p-4
sm:p-6
space-y-6
"
>


{/* Header */}

<PurchaseReportsHeader />



{/* Report Statistics */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-4
"
>


<PurchaseReportStats
title="Total Purchase"
value="$8,50,000"
/>



<PurchaseReportStats
title="Total Invoice"
value="450"
/>



<PurchaseReportStats
title="GST Amount"
value="$85,000"
/>



<PurchaseReportStats
title="Suppliers"
value="120"
/>



<PurchaseReportStats
title="Purchase Return"
value="$45,000"
/>



</div>




{/* Reports Table */}

<PurchaseReportTable />





{/* GST Report */}

<GSTReport />





{/* Export Section */}

<ExportReport />



</div>

);

}