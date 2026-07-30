"use client";


const orders=[
{
id:"#PO-1001",
supplier:"Kiran Jewellers",
date:"28 July 2026",
status:"Pending"
},
{
id:"#PO-1002",
supplier:"Diamond World",
date:"27 July 2026",
status:"Approval"
},
{
id:"#PO-1003",
supplier:"Royal Gold",
date:"25 July 2026",
status:"Processing"
}
];


export default function PendingOrders(){


return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-4
sm:p-6
"
>


<h2
className="
text-lg
sm:text-xl
text-[#D4AF37]
font-semibold
mb-4
"
>
Pending Purchase Orders
</h2>


<div className="space-y-3">


{
orders.map((order,index)=>(


<div
key={index}
className="
flex
flex-col
sm:flex-row
sm:items-center
justify-between
bg-[#171717]
rounded-xl
p-4
gap-3
"
>


<div>

<p className="font-semibold">
{order.id}
</p>

<p className="text-gray-400 text-sm">
{order.supplier}
</p>

</div>



<div className="text-sm text-gray-400">
{order.date}
</div>



<span
className="
text-xs
px-3
py-1
rounded-full
bg-[#D4AF37]/20
text-[#D4AF37]
w-fit
"
>
{order.status}
</span>


</div>


))
}


</div>


</div>


)

}