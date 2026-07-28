"use client";


export default function GRNSupplierDetails(){


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
Supplier & Purchase Details
</h3>



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
placeholder="Purchase Order Number"
className="erp-input"
/>


<input
placeholder="Supplier Name"
className="erp-input"
/>


<input
placeholder="GRN Number"
className="erp-input"
/>


<input
type="date"
className="erp-input"
/>


</div>


</div>

)

}