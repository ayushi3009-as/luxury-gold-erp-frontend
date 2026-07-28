interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  type?: "income" | "expense" | "balance" | "profit";
}


export default function FinanceCard({
  title,
  value,
  subtitle,
  type = "balance"
}: Props) {


  const colors = {

    income: "text-green-400",

    expense: "text-red-400",

    balance: "text-yellow-400",

    profit: "text-blue-400"

  };


  return (

    <div className="bg-[#111] p-5 rounded-xl border border-yellow-700/30">


      <p className="text-gray-400">
        {title}
      </p>


      <h2
        className={`text-2xl mt-2 ${colors[type]}`}
      >
        {value}
      </h2>


      {
        subtitle && (

          <p className="text-sm text-gray-500 mt-2">
            {subtitle}
          </p>

        )
      }


    </div>

  );

}