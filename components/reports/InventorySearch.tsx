"use client";

import Link from "next/link";
import { Search, Filter, Plus } from "lucide-react";
import { useState } from "react";

export default function InventorySearch() {

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="mb-8">


      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">


        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />


          <input
            type="text"
            placeholder="Search Product / SKU..."
            className="
            w-full
            bg-[#141414]
            border
            border-gray-700
            rounded-xl
            pl-12
            pr-4
            py-3
            text-white
            focus:outline-none
            focus:border-yellow-500
            "
          />

        </div>



        {/* Buttons */}

        <div className="flex gap-3">


          <button
            onClick={() => setShowFilter(!showFilter)}
            className="
            flex
            items-center
            gap-2
            border
            border-yellow-500
            text-yellow-500
            px-5
            py-3
            rounded-xl
            hover:bg-yellow-500
            hover:text-black
            transition
            "
          >

            <Filter size={18} />

            Filter

          </button>



          <Link
            href="/reports/inventory/add"
            className="
            flex
            items-center
            gap-2
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-semibold
            px-5
            py-3
            rounded-xl
            transition
            "
          >

            <Plus size={18} />

            Add Inventory

          </Link>


        </div>


      </div>



      {/* Filter Section */}

      {
        showFilter && (

          <div
            className="
            mt-5
            bg-[#141414]
            border
            border-yellow-500/20
            rounded-xl
            p-5
            "
          >

            <h3 className="text-yellow-500 mb-3 font-semibold">
              Filter Inventory
            </h3>


            <div className="flex gap-4">


              <select
                className="
                bg-[#1B1B1B]
                border
                border-gray-700
                rounded-lg
                px-4
                py-2
                text-white
                "
              >

                <option>
                  All Categories
                </option>

                <option>
                  Ring
                </option>

                <option>
                  Necklace
                </option>

                <option>
                  Chain
                </option>

                <option>
                  Bracelet
                </option>

              </select>



              <select
                className="
                bg-[#1B1B1B]
                border
                border-gray-700
                rounded-lg
                px-4
                py-2
                text-white
                "
              >

                <option>
                  All Status
                </option>

                <option>
                  In Stock
                </option>

                <option>
                  Low Stock
                </option>

                <option>
                  Out of Stock
                </option>

              </select>


            </div>


          </div>

        )
      }


    </div>
  );
}