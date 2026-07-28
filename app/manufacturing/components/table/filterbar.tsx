export default function FilterBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <select className="h-12 rounded-xl bg-[#111111] border border-zinc-800 px-4 text-white">
        <option>All Workers</option>
        <option>Worker A</option>
        <option>Worker B</option>
      </select>

      <select className="h-12 rounded-xl bg-[#111111] border border-zinc-800 px-4 text-white">
        <option>All Status</option>
        <option>Pending</option>
        <option>Running</option>
        <option>Completed</option>
      </select>

      <button className="h-12 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400">
        Apply Filters
      </button>

    </div>
  );
}