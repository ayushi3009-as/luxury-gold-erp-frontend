"use client";


const suppliers=[

{
name:"Raj Jewellers",
orders:25,
amount:"$2,50,000",
weight:"25 KG"
},

{
name:"Diamond House",
orders:18,
amount:"$1,80,000",
weight:"12 KG"
},

{
name:"Royal Gold",
orders:30,
amount:"$3,20,000",
weight:"40 KG"
}

];


export default function SupplierPerformance(){


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
Supplier Performance
</h2>



<div
className="
overflow-x-auto
"
>


<table
className="
min-w-[700px]
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
Supplier
</th>


<th>
Orders
</th>


<th>
Purchase Amount
</th>


<th>
Weight
</th>


</tr>


</thead>



<tbody>


{
suppliers.map((item,index)=>(


<tr
key={index}
className="
border-b
border-gray-800
"
>


<td className="p-3">
{item.name}
</td>


<td>
{item.orders}
</td>


<td
className="
text-[#D4AF37]
"
>
{item.amount}
</td>


<td>
{item.weight}
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