"use client";


const reports=[

{
id:"REP-1001",
type:"Purchase Invoice Report",
date:"28 July 2026",
amount:"$50,000",
status:"Generated"
},

{
id:"REP-1002",
type:"GST Purchase Report",
date:"29 July 2026",
amount:"$12,500",
status:"Generated"
},

{
id:"REP-1003",
type:"Supplier Report",
date:"30 July 2026",
amount:"$75,000",
status:"Pending"
}

];


export default function PurchaseReportTable(){


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
Generated Reports
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
Report ID
</th>


<th className="p-3 text-left">
Report Type
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
reports.map((item,index)=>(


<tr
key={index}
className="
border-b
border-gray-800
hover:bg-[#181818]
"
>


<td className="p-3">
{item.id}
</td>


<td>
{item.type}
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