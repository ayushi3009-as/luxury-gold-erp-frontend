"use client";


const grns=[

{
grn:"GRN-1001",
po:"PO-1001",
supplier:"Raj Jewellers",
weight:"25 KG",
status:"Completed"
},

{
grn:"GRN-1002",
po:"PO-1002",
supplier:"Diamond House",
weight:"12 KG",
status:"Quality Pending"
},

{
grn:"GRN-1003",
po:"PO-1003",
supplier:"Royal Gold",
weight:"18 KG",
status:"Processing"
}

];



export default function GRNTable(){


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
Goods Receipt List
</h2>



<div
className="
overflow-x-auto
"
>


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
GRN No
</th>


<th className="p-3 text-left">
PO No
</th>


<th className="p-3 text-left">
Supplier
</th>


<th className="p-3 text-left">
Weight
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
grns.map((item,index)=>(


<tr
key={index}
className="
border-b
border-gray-800
hover:bg-[#181818]
"
>


<td className="p-3">
{item.grn}
</td>


<td>
{item.po}
</td>


<td>
{item.supplier}
</td>


<td className="text-[#D4AF37]">
{item.weight}
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

);

}