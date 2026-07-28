import FinanceCard from "@/components/finance/dashboard/FinanceCard";
import FinanceStats from "@/components/finance/dashboard/FinanceStats";
import FinanceChart from "@/components/finance/dashboard/FinanceChart";
import RecentTransactions from "@/components/finance/dashboard/RecentTransactions";


export default function FinanceDashboard(){


const transactions = [

  {
    id:1,
    title:"Gold Sale Payment",
    type:"Income",
    amount:25000,
    date:"28-07-2026"
  },

  {
    id:2,
    title:"Gold Purchase",
    type:"Expense",
    amount:12000,
    date:"27-07-2026"
  },

  {
    id:3,
    title:"Repair Service",
    type:"Income",
    amount:5000,
    date:"26-07-2026"
  }

];



return (

<div className="p-6 bg-[#0B0B0B] min-h-screen text-white">


<h1 className="text-3xl text-yellow-400 mb-6">
Finance Dashboard
</h1>



{/* Summary Cards */}

<div className="grid grid-cols-4 gap-5 mb-6">


<FinanceCard

title="Total Balance"

value="$85,000"

type="balance"

/>



<FinanceCard

title="Total Income"

value="$1,25,000"

type="income"

/>



<FinanceCard

title="Total Expense"

value="$40,000"

type="expense"

/>



<FinanceCard

title="Net Profit"

value="$85,000"

type="profit"

/>


</div>




{/* Finance Stats */}

<div className="mb-6">

<FinanceStats

totalIncome={125000}

totalExpense={40000}

totalProfit={85000}

growth={12}

/>

</div>




{/* Chart */}

<div className="mb-6">

<FinanceChart/>

</div>




{/* Recent Transactions */}

<RecentTransactions

transactions={transactions}

/>


</div>

);


}