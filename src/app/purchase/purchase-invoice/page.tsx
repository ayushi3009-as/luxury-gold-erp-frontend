import PurchaseInvoiceHeader from "@/components/purchase/PurchaseInvoiceHeader";
import PurchaseInvoiceTable from "@/components/purchase/PurchaseInvoiceTable";


export default function PurchaseInvoicePage(){

return (

<div
className="
min-h-screen
bg-[#050505]
text-white
p-4
sm:p-6
space-y-6
"
>


<PurchaseInvoiceHeader />



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-4
"
>


<div className="erp-stat-card">

<p>
Total Invoice
</p>

<h2>
350
</h2>

</div>



<div className="erp-stat-card">

<p>
Paid Invoice
</p>

<h2>
240
</h2>

</div>



<div className="erp-stat-card">

<p>
Pending Invoice
</p>

<h2>
85
</h2>

</div>



<div className="erp-stat-card">

<p>
Overdue Invoice
</p>

<h2>
25
</h2>

</div>



<div className="erp-stat-card">

<p>
Purchase Amount
</p>

<h2>
$2,50,000
</h2>

</div>



</div>



<PurchaseInvoiceTable />



</div>

)

}