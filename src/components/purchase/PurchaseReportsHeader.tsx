"use client";


export default function PurchaseReportsHeader(){


return (

<div
className="
flex
flex-col
md:flex-row
md:items-center
justify-between
gap-4
"
>


<div>

<h1
className="
text-2xl
sm:text-3xl
font-bold
text-[#D4AF37]
"
>
Purchase Reports
</h1>


<p
className="
text-gray-400
mt-1
"
>
Generate purchase and GST reports
</p>


</div>



<div
className="
flex
flex-col
sm:flex-row
gap-3
"
>


<button
className="
border
border-[#D4AF37]
text-[#D4AF37]
px-5
py-3
rounded-xl
"
>
Export PDF
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
Export Excel
</button>


</div>



</div>

)

}