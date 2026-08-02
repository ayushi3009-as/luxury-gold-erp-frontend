"use client";

import ReturnSupplierDetails from "./ReturnSupplierDetails";
import ReturnItemForm from "./ReturnItemForm";
import ReturnSummary from "./ReturnSummary";


export default function CreatePurchaseReturn() {


return (

<div
className="
min-h-screen
bg-[#050505]
text-text-primary
p-4
sm:p-6
"
>


<div
className="
max-w-7xl
mx-auto
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-5
space-y-6
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
Create Purchase Return
</h1>


<p
className="
text-gray-400
text-sm
mt-2
"
>
Return jewellery items to supplier
</p>

</div>



<ReturnSupplierDetails />


<ReturnItemForm />


<ReturnSummary />



<div
className="
flex
flex-col
sm:flex-row
justify-end
gap-4
"
>


<button
className="
border
border-gray-600
px-5
py-3
rounded-xl
"
>
Save Draft
</button>



<button
className="
bg-[#D4AF37]
text-black
font-semibold
px-5
py-3
rounded-xl
"
>
Submit Return
</button>


</div>


</div>


</div>

);

}