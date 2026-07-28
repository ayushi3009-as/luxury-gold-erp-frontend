"use client";


interface Transaction {

  id:number;
  title:string;
  type:string;
  amount:number;
  date:string;

}


interface Props {

  transactions:Transaction[];

}



export default function RecentTransactions({

  transactions

}:Props){


return (

<div className="bg-[#111] rounded-xl border border-yellow-700/30 overflow-hidden">


<div className="p-5">

<h2 className="text-xl text-yellow-400">
Recent Transactions
</h2>

</div>



<table className="w-full text-sm text-white">


<thead className="bg-[#1b1b1b] text-yellow-400">


<tr>


<th className="p-4 text-left">
Title
</th>


<th className="p-4 text-left">
Type
</th>


<th className="p-4 text-left">
Amount
</th>


<th className="p-4 text-left">
Date
</th>


</tr>


</thead>



<tbody>


{
transactions.map((item)=>(


<tr

key={item.id}

className="border-t border-gray-800 hover:bg-[#1a1a1a]"

>


<td className="p-4">
{item.title}
</td>



<td className="p-4">

<span
className={
item.type==="Income"
? "text-green-400"
: "text-red-400"
}
>

{item.type}

</span>

</td>



<td

className={
item.type==="Income"
? "p-4 text-green-400"
: "p-4 text-red-400"
}

>

${item.amount}

</td>



<td className="p-4">
{item.date}
</td>



</tr>


))

}


</tbody>


</table>


</div>

);


}