const productionStages = [
  {
    stage: "Gold Issue",
    progress: 100,
  },
  {
    stage: "Wax Casting",
    progress: 85,
  },
  {
    stage: "Polishing",
    progress: 72,
  },
  {
    stage: "Diamond Setting",
    progress: 58,
  },
  {
    stage: "Hallmark",
    progress: 40,
  },
  {
    stage: "Quality Check",
    progress: 25,
  },
];

export default function ProductionStatus() {
  return (
    <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Production Status
      </h2>

      <div className="space-y-5">
        {productionStages.map((item) => (
          <div key={item.stage}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{item.stage}</span>
              <span className="text-yellow-400 font-semibold">
                {item.progress}%
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-[#2A2A2A]">
              <div
                className="h-3 rounded-full bg-yellow-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}