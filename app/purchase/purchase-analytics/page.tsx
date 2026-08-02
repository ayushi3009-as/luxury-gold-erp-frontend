import PurchaseAnalyticsHeader from "@/components/purchase/PurchaseAnalyticsHeader";
import PurchaseAnalyticsStats from "@/components/purchase/PurchaseAnalyticsStats";
import PurchaseTrendChart from "@/components/purchase/PurchaseTrendChart";

import SupplierPerformance from "@/components/purchase/SupplierPerformance";
import CategoryPurchaseChart from "@/components/purchase/CategoryPurchaseChart";
import PurchaseComparison from "@/components/purchase/PurchaseComparison";


export default function PurchaseAnalyticsPage() {


return (

<div
className="
min-h-screen
bg-[#050505]
text-text-primary
p-4
sm:p-6
space-y-6
"
>


{/* Header */}

<PurchaseAnalyticsHeader />



{/* Statistics Cards */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-4
"
>


<PurchaseAnalyticsStats

title="Total Purchase"

value="$8,50,000"

/>



<PurchaseAnalyticsStats

title="Purchase Orders"

value="450"

/>



<PurchaseAnalyticsStats

title="Suppliers"

value="120"

/>



<PurchaseAnalyticsStats

title="Received Weight"

value="250 KG"

/>



<PurchaseAnalyticsStats

title="Average Purchase"

value="$18,000"

/>



</div>




{/* Monthly Purchase Chart */}

<PurchaseTrendChart />





{/* Supplier Analysis */}

<SupplierPerformance />





{/* Category + Comparison */}

<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
"
>


<CategoryPurchaseChart />


<PurchaseComparison />


</div>



</div>

);

}