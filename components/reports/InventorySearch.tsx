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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
          />


          <input
            type="text"
            placeholder="Search Product / SKU..."
            className="
            w-full
            bg-background-secondary
            border
            border-gray-700
            rounded-xl
            pl-12
            pr-4
            py-3
            text-text-primary
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
            text-accent-gold
            px-5
            py-3
            rounded-xl
            hover:bg-accent-gold
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
            bg-accent-gold
            hover:bg-accent-gold-hover
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
            bg-background-secondary
            border
            border-border-theme
            rounded-xl
            p-5
            "
          >

            <h3 className="text-accent-gold mb-3 font-semibold">
              Filter Inventory
            </h3>


            <div className="flex gap-4">


              <select
                className="
                bg-background-tertiary
                border
                border-gray-700
                rounded-lg
                px-4
                py-2
                text-text-primary
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
                bg-background-tertiary
                border
                border-gray-700
                rounded-lg
                px-4
                py-2
                text-text-primary
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