"use client";


export default function PurchaseInvoiceHeader(){


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
Purchase Invoice
</h1>


<p
className="
text-gray-400
mt-1
"
>
Manage supplier purchase invoices
</p>


</div>



<button
className="
bg-[#D4AF37]
text-black
font-semibold
px-5
py-3
rounded-xl
w-full
md:w-auto
hover:bg-yellow-400
transition
"
>

+ Create Invoice

</button>



</div>

)

}