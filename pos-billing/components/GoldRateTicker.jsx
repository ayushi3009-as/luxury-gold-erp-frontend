"use client";

import { useEffect, useState } from "react";

export default function GoldRateTicker() {
  const [goldRate, setGoldRate] = useState(6850);
  const [silverRate, setSilverRate] = useState(92);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoldRate((previousRate) => previousRate);
      setSilverRate((previousRate) => previousRate);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-3 rounded-xl border border-[#eadbc5] bg-[#fffaf3] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eadbc5]">
          ✦
        </div>

        <div>
          <p className="text-xs text-gray-500">
            24K Gold Rate
          </p>

          <p className="font-bold text-[#9b6b28]">
            ₹{goldRate.toLocaleString("en-IN")}/g
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
          ◈
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Silver Rate
          </p>

          <p className="font-bold text-gray-700">
            ₹{silverRate.toLocaleString("en-IN")}/g
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Market Open
      </div>
    </div>
  );
}