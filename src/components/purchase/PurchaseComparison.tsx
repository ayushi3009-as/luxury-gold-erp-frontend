"use client";


export default function PurchaseComparison(){


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
Purchase Comparison
</h2>



<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-5
"
>


<div>

<p className="text-gray-400">
Current Month
</p>

<h2
className="
text-2xl
text-[#D4AF37]
font-bold
"
>
$3,20,000
</h2>

</div>




<div>

<p className="text-gray-400">
Previous Month
</p>

<h2
className="
text-2xl
font-bold
"
>
$2,70,000
</h2>

</div>




<div>

<p className="text-gray-400">
Growth
</p>

<h2
className="
text-2xl
text-green-400
font-bold
"
>
+18%
</h2>

</div>



</div>


</div>

)

}