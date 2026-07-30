"use client";


import {

PieChart,

Pie,

Cell,

Tooltip,

ResponsiveContainer

} from "recharts";



const data=[

{
name:"Gold",
value:65
},

{
name:"Diamond",
value:25
},

{
name:"Silver",
value:10
}

];



export default function CategoryPurchaseChart(){


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
Category Wise Purchase
</h2>



<div
className="
h-[300px]
"
>


<ResponsiveContainer
width="100%"
height="100%"
>


<PieChart>


<Pie

data={data}

dataKey="value"

nameKey="name"

outerRadius={100}

label

>


{
data.map((entry,index)=>(

<Cell
key={index}
/>

))
}


</Pie>


<Tooltip />


</PieChart>


</ResponsiveContainer>


</div>


</div>

)

}
