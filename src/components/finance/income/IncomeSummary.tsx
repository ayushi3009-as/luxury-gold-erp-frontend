interface Props{
 total:number;
 today:number;
 monthly:number;
}


export default function IncomeSummary({
 total,
 today,
 monthly
}:Props){

return(

<div className="grid grid-cols-3 gap-5">


<div className="bg-[#111] p-5 rounded-xl border border-yellow-700/30">
<p className="text-gray-400">
Total Income
</p>

<h2 className="text-2xl text-green-400">
${total}
</h2>

</div>



<div className="bg-[#111] p-5 rounded-xl border border-yellow-700/30">

<p className="text-gray-400">
Today Income
</p>

<h2 className="text-2xl text-yellow-400">
${today}
</h2>

</div>




<div className="bg-[#111] p-5 rounded-xl border border-yellow-700/30">

<p className="text-gray-400">
Monthly Income
</p>

<h2 className="text-2xl text-blue-400">
${monthly}
</h2>

</div>



</div>

)

}