interface Props {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}


export default function ReportCard({
  title,
  value,
  icon
}: Props) {


  return (

    <div className="bg-[#111] p-5 rounded-xl border border-yellow-700/30">


      <div className="flex items-center justify-between">


        <p className="text-gray-400">
          {title}
        </p>


        <div className="text-yellow-400">
          {icon}
        </div>


      </div>



      <h2 className="text-2xl text-white mt-3">
        {value}
      </h2>


    </div>

  );

}