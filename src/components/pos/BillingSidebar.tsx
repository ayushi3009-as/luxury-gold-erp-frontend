"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [

  {
    name:"New Invoice",
    path:"/pos-billing/new-invoice",
    icon:"🧾"
  },

  {
    name:"Quick Billing",
    path:"/pos-billing/quick-billing",
    icon:"⚡"
  },

  {
    name:"Barcode Billing",
    path:"/pos-billing/barcode-billing",
    icon:"📷"
  },

  {
    name:"Voice Billing",
    path:"/pos-billing/voice-billing",
    icon:"🎤"
  },

  {
    name:"Estimate",
    path:"/pos-billing/estimate",
    icon:"📄"
  },

  {
    name:"Hold Bills",
    path:"/pos-billing/hold-bills",
    icon:"⏸️"
  },

  {
    name:"Sales Return",
    path:"/pos-billing/sales-return",
    icon:"↩️"
  },

  {
    name:"Exchange Jewellery",
    path:"/pos-billing/exchange-jewellery",
    icon:"💎"
  },

  {
    name:"Payment",
    path:"/pos-billing/payment",
    icon:"💳"
  },

  {
    name:"Invoice History",
    path:"/pos-billing/invoice-history",
    icon:"📚"
  },

  {
    name:"Print Invoice",
    path:"/pos-billing/print-invoice",
    icon:"🖨️"
  },

  {
    name:"E-Invoice",
    path:"/pos-billing/e-invoice",
    icon:"🌐"
  }

];




export default function BillingSidebar(){


const pathname = usePathname();



return (

<div
className="
h-full
p-4
bg-[#050505]
"
>


{/* Logo */}

<div
className="
mb-6
text-center
"
>

<h1
className="
text-2xl
font-bold
text-yellow-400
"
>
LUXRAY
</h1>


<p
className="
text-xs
text-gray-400
"
>
POS Billing
</p>


</div>







{/* Menu */}

<div
className="
space-y-2
"
>


{
menu.map((item,index)=>{


const active = pathname === item.path;



return (

<Link
key={index}
href={item.path}
>


<div

className={`
flex
items-center
gap-3
px-4
py-3
rounded-xl
cursor-pointer
transition-all
duration-300


${
active

?

"bg-yellow-500 text-black font-bold shadow-lg"

:

"text-gray-300 hover:bg-[#151515] hover:text-yellow-400"

}

`}

>


<span
className="
text-xl
"
>
{item.icon}
</span>



<span
className="
text-sm
"
>
{item.name}
</span>



</div>


</Link>


)


})
}



</div>




</div>


);


}