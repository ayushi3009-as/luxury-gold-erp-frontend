"use client";


export default function ReturnSupplierDetails(){


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


<h2
className="
text-xl
font-semibold
text-[#D4AF37]
mb-4
"
>
Supplier Details
</h2>



<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-4
"
>


<input
placeholder="Supplier Name"
className="
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"
/>



<input
placeholder="Purchase Invoice Number"
className="
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"
/>



<input
placeholder="Return Number"
className="
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"
/>



<input
type="date"
className="
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"
/>



</div>



</div>

);

}