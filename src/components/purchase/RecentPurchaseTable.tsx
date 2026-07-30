"use client";


const purchases = [
  {
    supplier:"Raj Jewellers",
    item:"Gold Necklace",
    weight:"250 gm",
    amount:"$18,500",
    status:"Received"
  },
  {
    supplier:"Diamond House",
    item:"Diamond Ring",
    weight:"50 gm",
    amount:"$25,000",
    status:"Pending"
  },
  {
    supplier:"Shree Gold",
    item:"Gold Chain",
    weight:"150 gm",
    amount:"$12,000",
    status:"Completed"
  }
];


export default function RecentPurchaseTable(){


return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-4
sm:p-6
overflow-hidden
"
>

<h2
className="
text-lg
sm:text-xl
font-semibold
text-[#D4AF37]
mb-4
"
>
Recent Purchase
</h2>


<div className="overflow-x-auto">

<table className="min-w-[700px] w-full text-left">


<thead>

<tr
className="
border-b
border-gray-700
text-gray-400
text-sm
"
>

<th className="p-3">
Supplier
</th>

<th className="p-3">
Item
</th>

<th className="p-3">
Weight
</th>

<th className="p-3">
Amount
</th>

<th className="p-3">
Status
</th>

</tr>

</thead>


<tbody>


{
purchases.map((item,index)=>(

<tr
key={index}
className="
border-b
border-gray-800
hover:bg-[#1a1a1a]
"
>


<td className="p-3">
{item.supplier}
</td>


<td className="p-3">
{item.item}
</td>


<td className="p-3">
{item.weight}
</td>


<td className="p-3 text-[#D4AF37]">
{item.amount}
</td>


<td className="p-3">

<span
className="
px-3
py-1
rounded-full
text-xs
bg-[#D4AF37]/20
text-[#D4AF37]
"
>
{item.status}
</span>

</td>


</tr>


))
}



</tbody>


</table>


</div>


</div>


)

}