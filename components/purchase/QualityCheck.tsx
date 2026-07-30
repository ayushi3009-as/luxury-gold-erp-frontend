"use client";


export default function QualityCheck(){


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
Quality Check
</h3>



<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-4
"
>


<select className="erp-input">

<option>
Purity Verification
</option>

<option>
Approved
</option>

<option>
Rejected
</option>

</select>



<select className="erp-input">

<option>
Diamond Certificate
</option>

<option>
Verified
</option>

<option>
Not Available
</option>

</select>




<select className="erp-input">

<option>
Damage Check
</option>

<option>
Pass
</option>

<option>
Fail
</option>

</select>




<select className="erp-input">

<option>
Final Status
</option>

<option>
Approved
</option>

<option>
Pending
</option>

<option>
Rejected
</option>

</select>



</div>


</div>

)

}