"use client";


const payments=[

{
payment:"PAY-1001",
supplier:"Raj Jewellers",
invoice:"PI-1001",
amount:"$25,000",
mode:"Bank",
status:"Completed"
},


{
payment:"PAY-1002",
supplier:"Diamond House",
invoice:"PI-1002",
amount:"$15,000",
mode:"UPI",
status:"Pending"
},


{
payment:"PAY-1003",
supplier:"Royal Gold",
invoice:"PI-1003",
amount:"$35,000",
mode:"Cash",
status:"Completed"
}

];



export default function SupplierPaymentTable(){


return (

<div
className="
bg-[#111]
border
border-[#D4AF37]/30
rounded-2xl
p-4
sm:p-6
"
>


<h2
className="
text-xl
font-semibold
text-[#D4AF37]
mb-5
"
>
Payment History
</h2>



<div
className="
overflow-x-auto
"
>


<table
className="
min-w-[900px]
w-full
"
>


<thead>

<tr
className="
border-b
border-gray-700
text-gray-400
"
>


<th className="p-3 text-left">
Payment No
</th>


<th className="p-3 text-left">
Supplier
</th>


<th className="p-3 text-left">
Invoice
</th>


<th className="p-3 text-left">
Amount
</th>


<th className="p-3 text-left">
Mode
</th>


<th className="p-3 text-left">
Status
</th>


<th className="p-3 text-left">
Action
</th>


</tr>

</thead>



<tbody>


{
payments.map((item,index)=>(


<tr
key={index}
className="
border-b
border-gray-800
hover:bg-[#181818]
"
>


<td className="p-3">
{item.payment}
</td>


<td>
{item.supplier}
</td>


<td>
{item.invoice}
</td>


<td
className="
text-[#D4AF37]
"
>
{item.amount}
</td>


<td>
{item.mode}
</td>


<td>

<span
className="
bg-[#D4AF37]/20
text-[#D4AF37]
px-3
py-1
rounded-full
text-xs
"
>
{item.status}
</span>


</td>


<td>

<button
className="
text-[#D4AF37]
"
>
View
</button>


</td>


</tr>


))
}


</tbody>


</table>


</div>


</div>

)

}