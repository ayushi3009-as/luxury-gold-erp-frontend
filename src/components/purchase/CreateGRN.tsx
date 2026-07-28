"use client";

import GRNSupplierDetails from "./GRNSupplierDetails";
import GRNItemForm from "./GRNItemForm";
import WeightVerification from "./WeightVerification";
import QualityCheck from "./QualityCheck";
import GRNSummary from "./GRNSummary";


export default function CreateGRN(){

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
text-2xl
font-bold
text-[#D4AF37]
"
>
Create Goods Receipt (GRN)
</h2>


<p className="text-gray-400 text-sm">
Verify received jewellery stock
</p>

</div>



<GRNSupplierDetails />


<GRNItemForm />


<WeightVerification />


<QualityCheck />


<GRNSummary />



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
px-5
py-3
rounded-xl
font-semibold
"
>
Approve & Update Stock
</button>


</div>



</div>

)

}