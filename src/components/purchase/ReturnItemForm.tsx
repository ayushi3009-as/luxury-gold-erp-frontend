"use client";

import {useState} from "react";


interface ReturnItem {

item:string;

category:string;

weight:number;

quantity:number;

amount:number;

}



export default function ReturnItemForm(){


const [items,setItems]=useState<ReturnItem[]>([]);



const addItem=()=>{


setItems([

...items,

{

item:"Gold Ring",

category:"Gold",

weight:15,

quantity:1,

amount:90000

}

]);


};



return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-xl
p-5
"
>


<div
className="
flex
justify-between
items-center
mb-5
"
>


<h2
className="
text-xl
font-semibold
text-[#D4AF37]
"
>
Return Items
</h2>



<button

onClick={addItem}

className="
bg-[#D4AF37]
text-black
px-4
py-2
rounded-xl
"
>
+ Add Item
</button>


</div>



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
Item
</th>

<th>
Category
</th>

<th>
Weight
</th>

<th>
Quantity
</th>

<th>
Amount
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
{item.item}
</td>


<td>
{item.category}
</td>


<td>
{item.weight} gm
</td>


<td>
{item.quantity}
</td>


<td
className="
text-[#D4AF37]
"
>
${item.amount}
</td>


</tr>


))


}



{
items.length===0 &&

<tr>

<td
colSpan={5}
className="
text-center
p-5
text-gray-500
"
>
No items added
</td>

</tr>

}



</tbody>


</table>


</div>


</div>

);

}