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
    purchase:40000
  },
  {
    month:"Feb",
    purchase:55000
  },
  {
    month:"Mar",
    purchase:48000
  },
  {
    month:"Apr",
    purchase:75000
  },
  {
    month:"May",
    purchase:90000
  },
];


export default function PurchaseChart(){


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
text-lg
sm:text-xl
font-semibold
text-[#D4AF37]
mb-5
"
>
Monthly Purchase Trend
</h2>



<div
className="
w-full
h-[250px]
sm:h-[320px]
"
>


<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart
data={data}
>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis
dataKey="month"
stroke="#888"
/>


<YAxis
stroke="#888"
/>


<Tooltip
contentStyle={{
background:"#111",
border:"1px solid #D4AF37"
}}
/>


<Line
type="monotone"
dataKey="purchase"
stroke="#D4AF37"
strokeWidth={3}
/>


</LineChart>


</ResponsiveContainer>


</div>


</div>


)

}