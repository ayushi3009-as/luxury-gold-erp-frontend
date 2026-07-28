"use client";


import {useState} from "react";


export default function GRNItemForm(){


const [items,setItems]=useState<any[]>([]);



const addItem=()=>{

setItems([
...items,
{
name:"Gold Necklace",
category:"Gold",
ordered:100,
received:98
}
])

}



return (

<div>


<h3
className="
text-lg
font-semibold
text-[#D4AF37]
mb-4
"
>
Received Items
</h3>



<button
onClick={addItem}
className="
bg-[#D4AF37]
text-black
px-4
py-2
rounded-xl
mb-4
"
>
+ Add Received Item
</button>



<div
className="
overflow-x-auto
"
>


<table
className="
min-w-[700px]
w-full
bg-[#050505]
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
Ordered Weight
</th>

<th>
Received Weight
</th>


</tr>

</thead>



<tbody>


{
items.map((item,index)=>(

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
{item.ordered} gm
</td>


<td className="text-[#D4AF37]">
{item.received} gm
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