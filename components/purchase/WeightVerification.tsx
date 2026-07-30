"use client";


export default function WeightVerification(){


const orderedWeight = 100;

const receivedWeight = 98;


const difference =
orderedWeight - receivedWeight;



return (

<div>

<h3
className="
text-lg
font-semibold
text-[#D4AF37]
mb-4
"
>
Weight Verification
</h3>



<div
className="
grid
grid-cols-1
sm:grid-cols-3
gap-4
"
>


<div
className="
bg-[#050505]
border
border-[#D4AF37]/30
rounded-xl
p-4
"
>

<p className="text-gray-400">
Ordered Weight
</p>

<h2 className="text-xl text-[#D4AF37]">
{orderedWeight} gm
</h2>

</div>



<div
className="
bg-[#050505]
border
border-[#D4AF37]/30
rounded-xl
p-4
"
>

<p className="text-gray-400">
Received Weight
</p>

<h2 className="text-xl text-[#D4AF37]">
{receivedWeight} gm
</h2>

</div>




<div
className="
bg-[#050505]
border
border-[#D4AF37]/30
rounded-xl
p-4
"
>

<p className="text-gray-400">
Difference
</p>

<h2
className="
text-xl
text-red-400
"
>
{difference} gm
</h2>

</div>



</div>


</div>

)

}