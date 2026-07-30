"use client";


export default function ExportReport(){


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
Export Reports
</h2>



<div
className="
flex
flex-col
sm:flex-row
gap-4
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
Download PDF
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
Download Excel
</button>



<button
className="
bg-[#222]
px-5
py-3
rounded-xl
"
>
Print Report
</button>



</div>


</div>

)

}