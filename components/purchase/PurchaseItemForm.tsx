"use client";


export default function PurchaseItemForm(){


return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-5
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
Purchase Items
</h2>



<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-4
"
>


<input
placeholder="Item Name"
className="
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"
/>



<input
placeholder="Gold Purity (22K/24K)"
className="
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"
/>



<input
placeholder="Weight (Gram)"
className="
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"
/>



</div>



<button
className="
mt-5
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

);

}