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
        month: "Jan",
        purchase: 120000
    },
    {
        month: "Feb",
        purchase: 180000
    },
    {
        month: "Mar",
        purchase: 250000
    },
    {
        month: "Apr",
        purchase: 200000
    },
    {
        month: "May",
        purchase: 320000
    }
];


export default function PurchaseTrendChart() {


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
                Monthly Purchase Trend
            </h2>



            <div
                className="
                w-full
                h-[300px]
                "
            >


                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >


                    <LineChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />


                        <XAxis
                            dataKey="month"
                        />


                        <YAxis />


                        <Tooltip />


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

    );

}