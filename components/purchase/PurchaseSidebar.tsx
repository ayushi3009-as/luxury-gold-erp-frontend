"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const menuItems = [

{
name:"Purchase Dashboard",
path:"/purchase"
},

{
name:"Purchase Order",
path:"/purchase/purchase-order"
},

{
name:"Purchase Entry",
path:"/purchase/purchase-entry"
},

{
name:"Purchase Invoice",
path:"/purchase/purchase-invoice"
},

{
name:"Goods Receipt",
path:"/purchase/goods-receipt"
},

{
name:"Purchase Return",
path:"/purchase/purchase-return"
},

{
name:"Supplier Payment",
path:"/purchase/supplier-payment"
},

{
name:"Purchase Analytics",
path:"/purchase/purchase-analytics"
},

{
name:"Purchase Reports",
path:"/purchase/purchase-reports"
}

];



export default function PurchaseSidebar(){


const pathname = usePathname();


return (

<aside
className="
w-full
lg:w-72
h-[calc(100vh-40px)]
sticky
top-5
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-5
overflow-y-auto
custom-scroll
"
>


<h2
className="
text-2xl
font-bold
text-[#D4AF37]
mb-6
"
>
Purchase
</h2>



<div className="space-y-2">


{
menuItems.map((item)=>(

<Link

key={item.path}

href={item.path}

className={`
block
px-4
py-3
rounded-xl
transition

${
pathname === item.path
?
"bg-[#D4AF37] text-black"
:
"text-gray-300 hover:bg-[#222]"
}

`}

>

{item.name}

</Link>


))
}


</div>


</aside>

)


}
<aside
className="
w-full
lg:w-72
h-[calc(100vh-40px)]
sticky
top-5
overflow-y-auto
sidebar-scroll
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-5
"
>
    
</aside>