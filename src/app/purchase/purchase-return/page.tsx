import PurchaseReturnHeader from "@/components/purchase/PurchaseReturnHeader";
import PurchaseReturnStats from "@/components/purchase/PurchaseReturnStats";
import PurchaseReturnTable from "@/components/purchase/PurchaseReturnTable";


export default function PurchaseReturnPage(){


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


<PurchaseReturnHeader />



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-4
"
>


<PurchaseReturnStats
title="Total Returns"
value="120"
/>


<PurchaseReturnStats
title="Pending Returns"
value="18"
/>


<PurchaseReturnStats
title="Approved Returns"
value="95"
/>


<PurchaseReturnStats
title="Rejected Returns"
value="7"
/>


<PurchaseReturnStats
title="Return Amount"
value="$85,000"
/>



</div>



<PurchaseReturnTable />


</div>

)

}