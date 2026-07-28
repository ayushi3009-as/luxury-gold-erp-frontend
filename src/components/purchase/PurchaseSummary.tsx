"use client";


export default function PurchaseSummary({
items
}:any){


const grandTotal = items.reduce(
(total:number,item:any)=>{


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


return total + goldValue + making + wastage;


},
0
);



return (

<div
className="
bg-[#050505]
border
border-[#D4AF37]/30
rounded-xl
p-5
"
>


<h3
className="
text-[#D4AF37]
text-lg
font-semibold
"
>
Purchase Summary
</h3>



<div
className="
flex
justify-between
mt-4
"
>

<span className="text-gray-400">
Total Items
</span>


<span>
{items.length}
</span>


</div>



<div
className="
flex
justify-between
mt-4
"
>


<span className="text-gray-400">
Grand Total
</span>


<span
className="
text-[#D4AF37]
text-2xl
font-bold
"
>
${grandTotal.toFixed(2)}
</span>


</div>



</div>

)

}