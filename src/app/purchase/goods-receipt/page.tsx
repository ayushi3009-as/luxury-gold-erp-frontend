import GRNHeader from "@/components/purchase/GRNHeader";
import GRNStatsCard from "@/components/purchase/GRNStatsCard";
import GRNTable from "@/components/purchase/GRNTable";


export default function GoodsReceiptPage() {


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


<GRNHeader />



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-4
"
>


<GRNStatsCard
title="Total GRN"
value="320"
/>


<GRNStatsCard
title="Pending Receipt"
value="45"
/>


<GRNStatsCard
title="Completed GRN"
value="250"
/>


<GRNStatsCard
title="Quality Pending"
value="25"
/>


<GRNStatsCard
title="Received Weight"
value="125 KG"
/>


</div>



<GRNTable />


</div>

);

}