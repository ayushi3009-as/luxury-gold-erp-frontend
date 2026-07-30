"use client";


const returns=[

{
returnNo:"PR-1001",
invoice:"PI-1001",
supplier:"Raj Jewellers",
date:"28 July 2026",
amount:"$5,000",
status:"Approved"
},

{
returnNo:"PR-1002",
invoice:"PI-1002",
supplier:"Diamond House",
date:"29 July 2026",
amount:"$8,500",
status:"Pending"
},

{
returnNo:"PR-1003",
invoice:"PI-1003",
supplier:"Royal Gold",
date:"30 July 2026",
amount:"$3,200",
status:"Rejected"
}

];



export default function PurchaseReturnTable(){


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
text-xl
font-semibold
text-[#D4AF37]
mb-5
"
>
Return List
</h2>



<div
className="
overflow-x-auto
"
>


<table
className="
min-w-[900px]
w-full
"
>


<thead>

<tr
className="
border-b
border-gray-700
text-gray-400
"
>


<th className="p-3 text-left">
Return No
</th>


<th className="p-3 text-left">
Invoice
</th>


<th className="p-3 text-left">
Supplier
</th>


<th className="p-3 text-left">
Date
</th>


<th className="p-3 text-left">
Amount
</th>


<th className="p-3 text-left">
Status
</th>


<th className="p-3 text-left">
Action
</th>


</tr>

</thead>



<tbody>


{
returns.map((item,index)=>(


<tr
key={index}
className="
border-b
border-gray-800
hover:bg-[#181818]
"
>


<td className="p-3">
{item.returnNo}
</td>


<td>
{item.invoice}
</td>


<td>
{item.supplier}
</td>


<td>
{item.date}
</td>


<td
className="
text-[#D4AF37]
"
>
{item.amount}
</td>


<td>

<span
className="
bg-[#D4AF37]/20
text-[#D4AF37]
px-3
py-1
rounded-full
text-xs
"
>
{item.status}
</span>


</td>


<td>

<button
className="
text-[#D4AF37]
"
>
View
</button>


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