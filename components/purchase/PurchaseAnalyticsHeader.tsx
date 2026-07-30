"use client";


export default function PurchaseAnalyticsHeader(){


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
Purchase Analytics
</h1>


<p
className="
text-gray-400
mt-1
"
>
Analyze purchase performance and supplier data
</p>


</div>



<select
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-xl
px-4
py-3
text-white
"
>

<option>
This Year
</option>


<option>
This Month
</option>


<option>
Last Year
</option>


</select>


</div>

)

}