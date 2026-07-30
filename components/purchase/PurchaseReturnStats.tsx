"use client";


interface Props{

title:string;

value:string;

}


export default function PurchaseReturnStats({
title,
value
}:Props){


return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-5
hover:border-[#D4AF37]
transition
"
>


<p
className="
text-gray-400
text-sm
"
>
{title}
</p>



<h2
className="
text-2xl
font-bold
text-[#D4AF37]
mt-2
"
>
{value}
</h2>



</div>

)

}