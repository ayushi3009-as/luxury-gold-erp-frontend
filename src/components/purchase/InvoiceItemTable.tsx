"use client";


export default function InvoiceItemTable({
items
}:any){



const calculateAmount=(item:any)=>{


const value =
item.weight * item.rate;


const gst =
value * item.gst /100;


return value + gst;


};



return (

<div
className="
overflow-x-auto
bg-[#050505]
rounded-xl
border
border-[#D4AF37]/30
"
>


<table
className="
min-w-[800px]
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

<th className="p-3">
Item
</th>

<th>
Category
</th>

<th>
Weight
</th>

<th>
Rate
</th>

<th>
GST
</th>

<th>
Amount
</th>


</tr>

</thead>



<tbody>


{
items.map((item:any,index:number)=>(


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
{item.category}
</td>


<td>
{item.weight} gm
</td>


<td>
${item.rate}
</td>


<td>
{item.gst}%
</td>


<td
className="
text-[#D4AF37]
font-semibold
"
>
${calculateAmount(item)}
</td>


</tr>


))
}


</tbody>


</table>


</div>

)

}