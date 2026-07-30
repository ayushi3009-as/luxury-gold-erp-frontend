"use client";

import SupplierDetails from "./SupplierDetails";
import PurchaseItemForm from "./PurchaseItemForm";


export default function CreatePurchaseOrder(){


return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-4
sm:p-6
space-y-6
"
>


<div>

<h2
className="
text-xl
sm:text-2xl
font-bold
text-[#D4AF37]
"
>
Create Purchase Order
</h2>


<p className="text-gray-400 text-sm mt-1">
Create supplier order for jewellery purchase
</p>

</div>



<SupplierDetails />


<PurchaseItemForm />



<div
className="
flex
flex-col
sm:flex-row
gap-4
justify-end
"
>


<button
className="
px-5
py-3
rounded-xl
border
border-gray-600
text-gray-300
hover:bg-gray-800
"
>
Save Draft
</button>



<button
className="
px-5
py-3
rounded-xl
bg-[#D4AF37]
text-black
font-semibold
hover:bg-yellow-400
"
>
Submit For Approval
</button>


</div>


</div>

)

}