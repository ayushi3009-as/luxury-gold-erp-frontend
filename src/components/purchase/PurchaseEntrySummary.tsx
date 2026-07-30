"use client";


export default function PurchaseEntrySummary(){


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
mb-4
"
>
Purchase Summary
</h2>



<div
className="
flex
justify-between
border-t
border-gray-700
pt-4
"
>

<span>
Total Purchase Amount
</span>


<span
className="
text-[#D4AF37]
font-bold
text-xl
"
>
$58,000
</span>


</div>



<button
className="
mt-5
w-full
bg-[#D4AF37]
text-black
py-3
rounded-xl
font-semibold
"
>
Save Purchase Entry
</button>


</div>

);

}