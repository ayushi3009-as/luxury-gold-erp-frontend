"use client";


export default function InvoiceSummary(){


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
font-semibold
text-lg
"
>
Invoice Summary
</h3>



<div className="space-y-3 mt-4">


<div className="flex justify-between">
<span className="text-gray-400">
Subtotal
</span>

<span>
$0.00
</span>

</div>



<div className="flex justify-between">
<span className="text-gray-400">
GST
</span>

<span>
$0.00
</span>

</div>



<div
className="
flex
justify-between
border-t
border-gray-700
pt-3
"
>

<span>
Total Amount
</span>


<span
className="
text-[#D4AF37]
font-bold
text-xl
"
>
$0.00
</span>


</div>


</div>


</div>

)

}