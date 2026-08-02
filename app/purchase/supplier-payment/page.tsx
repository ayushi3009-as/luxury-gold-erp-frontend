import SupplierPaymentHeader from "@/components/purchase/SupplierPaymentHeader";
import SupplierPaymentStats from "@/components/purchase/SupplierPaymentStats";
import SupplierPaymentTable from "@/components/purchase/SupplierPaymentTable";


export default function SupplierPaymentPage(){


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


<SupplierPaymentHeader />



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-4
"
>


<SupplierPaymentStats
title="Total Payable"
value="$5,50,000"
/>



<SupplierPaymentStats
title="Paid Amount"
value="$3,80,000"
/>



<SupplierPaymentStats
title="Pending Amount"
value="$1,70,000"
/>



<SupplierPaymentStats
title="Overdue Payment"
value="$45,000"
/>



<SupplierPaymentStats
title="Suppliers"
value="85"
/>



</div>



<SupplierPaymentTable />



</div>

)

}