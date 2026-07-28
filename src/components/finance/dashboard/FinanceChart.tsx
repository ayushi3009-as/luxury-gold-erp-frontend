"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";


const data = [

  {
    month:"Jan",
    income:5000,
    expense:2000
  },

  {
    month:"Feb",
    income:7000,
    expense:3000
  },

  {
    month:"Mar",
    income:6000,
    expense:2500
  },

  {
    month:"Apr",
    income:9000,
    expense:4000
  },

  {
    month:"May",
    income:8000,
    expense:3500
  }

];



export default function FinanceChart(){


return (

<div className="bg-[#111] p-6 rounded-xl border border-yellow-700/30">


<h2 className="text-xl text-yellow-400 mb-5">
Income vs Expense
</h2>



<div className="h-[300px]">


<ResponsiveContainer width="100%" height="100%">


<LineChart data={data}>


<CartesianGrid strokeDasharray="3 3" />



<XAxis dataKey="month" />



<YAxis />



<Tooltip />



<Line

type="monotone"

dataKey="income"

stroke="#22c55e"

strokeWidth={3}

/>



<Line

type="monotone"

dataKey="expense"

stroke="#ef4444"

strokeWidth={3}

/>



</LineChart>


</ResponsiveContainer>


</div>


</div>

);


}