"use client";

import InvoiceSupplierDetails from "./InvoiceSupplierDetails";
import InvoiceItemForm from "./InvoiceItemForm";
import InvoiceSummary from "./InvoiceSummary";


export default function CreatePurchaseInvoice(){


return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-4
sm:p-6
space-y-6
"
>


<div>

<h2
className="
text-xl
sm:text-2xl
font-bold
text-[#D4AF37]
"
>
Create Purchase Invoice
</h2>


<p className="text-gray-400 text-sm">
Generate supplier purchase invoice
</p>


</div>



<InvoiceSupplierDetails />


<InvoiceItemForm />


<InvoiceSummary />



<div
className="
flex
flex-col
sm:flex-row
justify-end
gap-4
"
>


<button
className="
border
border-gray-600
px-5
py-3
rounded-xl
text-gray-300
"
>
Save Draft
</button>



<button
className="
bg-[#D4AF37]
text-black
px-5
py-3
rounded-xl
font-semibold
"
>
Generate Invoice
</button>


</div>


</div>

)

}