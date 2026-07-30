"use client";


export default function InvoicePayment(){


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
Payment Details
</h3>



<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-4
"
>


<select className="erp-input">

<option>
Payment Status
</option>

<option>
Paid
</option>

<option>
Pending
</option>

<option>
Partial
</option>

</select>



<select className="erp-input">

<option>
Payment Mode
</option>

<option>
Cash
</option>

<option>
Bank
</option>

<option>
UPI
</option>

</select>



<input
placeholder="Paid Amount"
className="erp-input"
/>


</div>


</div>

)

}