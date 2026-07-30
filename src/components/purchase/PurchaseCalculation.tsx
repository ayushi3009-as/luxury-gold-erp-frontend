"use client";


export default function PurchaseCalculation(){


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
Purchase Calculation
</h2>



<div
className="
grid
grid-cols-1
sm:grid-cols-3
gap-4
"
>


<div>
<p className="text-gray-400">
Gold Value
</p>

<h3 className="text-[#D4AF37] text-xl">
$50,000
</h3>
</div>



<div>
<p className="text-gray-400">
GST
</p>

<h3 className="text-[#D4AF37] text-xl">
$5,000
</h3>
</div>



<div>
<p className="text-gray-400">
Making Charge
</p>

<h3 className="text-[#D4AF37] text-xl">
$3,000
</h3>
</div>



</div>


</div>

);

}