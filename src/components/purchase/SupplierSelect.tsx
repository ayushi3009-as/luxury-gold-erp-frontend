"use client";

import { useState } from "react";


const suppliers = [

"Raj Jewellers",
"Diamond House",
"Royal Gold",
"Shree Jewellery"

];


export default function SupplierSelect(){


const [supplier,setSupplier]=useState("");



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
text-[#D4AF37]
font-semibold
mb-4
"
>
Supplier Details
</h2>



<select

value={supplier}

onChange={(e)=>setSupplier(e.target.value)}

className="
w-full
bg-[#050505]
border
border-gray-700
rounded-xl
p-3
"

>


<option>
Select Supplier
</option>


{
suppliers.map((item,index)=>(

<option key={index}>
{item}
</option>

))
}


</select>


</div>

);

}