"use client";

import { useState } from "react";


interface InvoiceItem {

    itemName: string;

    category: string;

    purity: string;

    weight: number;

    rate: number;

    makingCharge: number;

    amount: number;

}



export default function InvoiceItemForm(){


const [items,setItems] = useState<InvoiceItem[]>([]);



const addItem = () => {


setItems([

...items,

{

itemName:"Gold Necklace",

category:"Gold",

purity:"22K",

weight:25,

rate:6500,

makingCharge:5000,

amount:167500

}

]);


};



return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-4
sm:p-6
space-y-5
"
>


<div
className="
flex
flex-col
sm:flex-row
justify-between
gap-4
"
>


<div>


<h2
className="
text-xl
font-semibold
text-[#D4AF37]
"
>
Invoice Items
</h2>


<p
className="
text-gray-400
text-sm
"
>
Manage jewellery invoice items
</p>


</div>



<button

onClick={addItem}

className="
bg-[#D4AF37]
text-black
px-5
py-3
rounded-xl
font-semibold
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
min-w-[1000px]
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
Item Name
</th>


<th className="p-3 text-left">
Category
</th>


<th className="p-3 text-left">
Purity
</th>


<th className="p-3 text-left">
Weight
</th>


<th className="p-3 text-left">
Rate
</th>


<th className="p-3 text-left">
Making Charge
</th>


<th className="p-3 text-left">
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
hover:bg-[#181818]
"

>


<td className="p-3">
{item.itemName}
</td>


<td>
{item.category}
</td>


<td>
{item.purity}
</td>


<td>
{item.weight} gm
</td>


<td>
${item.rate}
</td>


<td>
${item.makingCharge}
</td>


<td
className="
text-[#D4AF37]
font-semibold
"
>
${item.amount}
</td>



</tr>


))


}



{
items.length === 0 && (

<tr>

<td
colSpan={7}
className="
text-center
text-gray-500
p-5
"
>

No invoice items added

</td>


</tr>

)

}



</tbody>


</table>


</div>


</div>

);

}