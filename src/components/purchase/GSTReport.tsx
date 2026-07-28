"use client";


export default function GSTReport(){


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
mb-5
"
>
GST Purchase Report
</h2>



<div
className="
grid
grid-cols-1
sm:grid-cols-3
gap-5
"
>


<div>

<p className="text-gray-400">
Purchase Value
</p>

<h3 className="text-2xl text-[#D4AF37]">
$8,50,000
</h3>

</div>



<div>

<p className="text-gray-400">
Input GST
</p>

<h3 className="text-2xl text-[#D4AF37]">
$85,000
</h3>

</div>



<div>

<p className="text-gray-400">
Total Tax Invoice
</p>

<h3 className="text-2xl text-[#D4AF37]">
450
</h3>

</div>



</div>


</div>

)

}