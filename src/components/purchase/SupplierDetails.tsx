"use client";


export default function SupplierDetails(){


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
Supplier Details
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
placeholder="Supplier Name"
className="erp-input"
/>


<input
placeholder="Contact Number"
className="erp-input"
/>


<input
placeholder="GST Number"
className="erp-input"
/>


<input
placeholder="Supplier Address"
className="erp-input"
/>



</div>


</div>

)

}