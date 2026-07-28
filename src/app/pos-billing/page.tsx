export default function POSHome(){


return(

<div>


<h1
className="
text-3xl
font-bold
text-yellow-400
"
>
POS Billing Dashboard
</h1>


<p
className="
mt-3
text-gray-400
"
>
Manage jewellery invoices, payments and sales.
</p>



<div
className="
grid
grid-cols-3
gap-6
mt-8
"
>


<div className="
bg-[#111]
p-6
rounded-xl
border
border-yellow-600/20
">

<h3>
Today's Sales
</h3>

<p className="
text-3xl
text-yellow-400
mt-3
">
$12,500
</p>

</div>



<div className="
bg-[#111]
p-6
rounded-xl
border
border-yellow-600/20
">

<h3>
Invoices
</h3>

<p className="
text-3xl
text-yellow-400
mt-3
">
45
</p>

</div>



<div className="
bg-[#111]
p-6
rounded-xl
border
border-yellow-600/20
">

<h3>
Pending Payment
</h3>

<p className="
text-3xl
text-yellow-400
mt-3
">
$2,500
</p>

</div>


</div>


</div>

)

}