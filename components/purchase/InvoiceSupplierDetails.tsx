"use client";


export default function InvoiceSupplierDetails(){


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
Supplier & Invoice Details
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
placeholder="Supplier GST Number"
className="erp-input"
/>


<input
placeholder="Invoice Number"
className="erp-input"
/>


<input
type="date"
className="erp-input"
/>



<input
placeholder="Purchase Order Reference"
className="erp-input"
/>


<input
placeholder="Contact Number"
className="erp-input"
/>


</div>


</div>

)

}