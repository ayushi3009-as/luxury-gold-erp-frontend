"use client";


export default function PurchaseItemTable({
items
}:any){


const calculateTotal=(item:any)=>{

const goldValue =
Number(item.weight) *
Number(item.rate) *
Number(item.quantity);


const making =
goldValue *
(Number(item.making)/100);


const wastage =
goldValue *
(Number(item.wastage)/100);


return (
goldValue +
making +
wastage
);

};



return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-xl
p-4
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
Making
</th>

<th>
Wastage
</th>

<th>
Total
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
{item.itemName}
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
{item.making}%
</td>


<td>
{item.wastage}%
</td>


<td
className="
text-[#D4AF37]
font-semibold
"
>
${calculateTotal(item).toFixed(2)}
</td>


</tr>


))
}


</tbody>


</table>


</div>

)

}