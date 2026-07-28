"use client";


export default function ReturnSummary(){


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


<h2
className="
text-xl
font-semibold
text-[#D4AF37]
mb-4
"
>
Return Summary
</h2>



<div
className="
space-y-3
"
>


<div
className="
flex
justify-between
"
>

<span className="text-gray-400">
Subtotal
</span>

<span>
$90,000
</span>

</div>



<div
className="
flex
justify-between
"
>

<span className="text-gray-400">
GST Adjustment
</span>

<span>
$4,500
</span>

</div>



<div
className="
border-t
border-gray-700
pt-3
flex
justify-between
"
>

<span>
Total Return Amount
</span>


<span
className="
text-[#D4AF37]
font-bold
text-xl
"
>
$94,500
</span>


</div>



</div>


</div>

);

}