"use client";


const invoices=[

{
invoice:"PI-1001",
supplier:"Raj Jewellers",
date:"28 July 2026",
amount:"$25,000",
status:"Paid"
},

{
invoice:"PI-1002",
supplier:"Diamond House",
date:"29 July 2026",
amount:"$45,000",
status:"Pending"
},

{
invoice:"PI-1003",
supplier:"Royal Gold",
date:"30 July 2026",
amount:"$18,500",
status:"Overdue"
}

];



export default function PurchaseInvoiceTable(){


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
Invoice List
</h2>



<div className="overflow-x-auto">


<table
className="
min-w-[850px]
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
Invoice No
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
invoices.map((invoice,index)=>(


<tr
key={index}
className="
border-b
border-gray-800
hover:bg-[#181818]
"
>


<td className="p-3">
{invoice.invoice}
</td>


<td className="p-3">
{invoice.supplier}
</td>


<td className="p-3">
{invoice.date}
</td>


<td
className="
p-3
text-[#D4AF37]
"
>
{invoice.amount}
</td>


<td className="p-3">

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
{invoice.status}
</span>


</td>


<td className="p-3 space-x-3">


<button
className="
text-[#D4AF37]
"
>
View
</button>


<button
className="
text-gray-400
"
>
Print
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