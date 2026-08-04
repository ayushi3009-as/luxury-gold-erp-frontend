"use client";

export default function AssignWorkers() {
  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">

      <h2 className="mb-6 text-2xl font-bold text-text-primary">
        Assign Worker
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Worker */}

        <div>

          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Select Worker
          </label>

          <select className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]">

            <option>Rahul Patel</option>
            <option>Amit Shah</option>
            <option>Kiran Joshi</option>

          </select>

        </div>

        {/* Job Card */}

        <div>

          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Job Card
          </label>

          <select className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]">

            <option>JC-1001</option>
            <option>JC-1002</option>
            <option>JC-1003</option>

          </select>

        </div>

        {/* Production Order */}

        <div>

          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Production Order
          </label>

          <select className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]">

            <option>PO-1001</option>
            <option>PO-1002</option>
            <option>PO-1003</option>

          </select>

        </div>

        {/* Shift */}

        <div>

          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Shift
          </label>

          <select className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]">

            <option>Morning</option>
            <option>Evening</option>
            <option>Night</option>

          </select>

        </div>

        {/* Start Date */}

        <div>

          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Start Date
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]"
          />

        </div>

        {/* Priority */}

        <div>

          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Priority
          </label>

          <select className="w-full rounded-xl border border-border-theme bg-background-primary p-3 text-text-primary outline-none focus:border-[#D4AF37]">

            <option>High</option>
            <option>Medium</option>
            <option>Low</option>

          </select>

        </div>

      </div>

      <div className="mt-8 flex justify-end gap-3">

        <button className="rounded-xl border border-border-theme px-6 py-3 text-text-primary hover:border-[#D4AF37]">
          Cancel
        </button>

        <button className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:bg-[#E6C458]">
          Assign Worker
        </button>

      </div>

    </div>
  );
}