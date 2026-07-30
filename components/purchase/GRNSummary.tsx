"use client";


export default function GRNSummary(){


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
text-lg
font-semibold
text-[#D4AF37]
"
>
GRN Summary
</h3>



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-4
mt-5
"
>


<div>

<p className="text-gray-400">
Total Items
</p>

<h2 className="text-xl">
15
</h2>

</div>



<div>

<p className="text-gray-400">
Accepted Items
</p>

<h2
className="
text-xl
text-green-400
"
>
14
</h2>

</div>



<div>

<p className="text-gray-400">
Rejected Items
</p>

<h2
className="
text-xl
text-red-400
"
>
1
</h2>

</div>




<div>

<p className="text-gray-400">
Stock Update
</p>

<h2
className="
text-xl
text-[#D4AF37]
"
>
Ready
</h2>

</div>



</div>


</div>

)

}