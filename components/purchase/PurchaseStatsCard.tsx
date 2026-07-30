"use client";

interface PurchaseStatsCardProps {
  title: string;
  value: string;
}


export default function PurchaseStatsCard({
  title,
  value,
}: PurchaseStatsCardProps) {

  return (

    <div
      className="
      bg-[#111111]
      border
      border-[#D4AF37]/30
      rounded-2xl
      p-4
      sm:p-5
      shadow-lg
      hover:border-[#D4AF37]
      transition-all
      duration-300
      "
    >

      <p
        className="
        text-gray-400
        text-xs
        sm:text-sm
        "
      >
        {title}
      </p>


      <h2
        className="
        text-xl
        sm:text-2xl
        lg:text-3xl
        font-bold
        text-[#D4AF37]
        mt-2
        "
      >
        {value}
      </h2>


      <div
        className="
        mt-4
        h-1
        w-full
        bg-[#D4AF37]/20
        rounded-full
        "
      >

        <div
          className="
          h-1
          w-2/3
          bg-[#D4AF37]
          rounded-full
          "
        />

      </div>


    </div>

  );
}