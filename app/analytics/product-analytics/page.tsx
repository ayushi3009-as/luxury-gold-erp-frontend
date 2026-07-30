"use client";

import {
  Package,
  TrendingUp,
  ShoppingCart,
  Star,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";



const productCategories = [
  {
    name: "Gold Jewellery",
    sales: 92,
    revenue: "$284K",
    growth: "+18.6%",
  },
  {
    name: "Diamond Jewellery",
    sales: 78,
    revenue: "$196K",
    growth: "+14.2%",
  },
  {
    name: "Silver Jewellery",
    sales: 64,
    revenue: "$86K",
    growth: "+9.8%",
  },
  {
    name: "Platinum Jewellery",
    sales: 46,
    revenue: "$42K",
    growth: "+6.4%",
  },
];

const topProducts = [
  {
    name: "Gold Necklace Collection",
    category: "Gold Jewellery",
    sales: "1,248",
    revenue: "$86,400",
  },
  {
    name: "Diamond Engagement Ring",
    category: "Diamond Jewellery",
    sales: "864",
    revenue: "$72,800",
  },
  {
    name: "Classic Gold Bangles",
    category: "Gold Jewellery",
    sales: "742",
    revenue: "$48,600",
  },
  {
    name: "Premium Silver Bracelet",
    category: "Silver Jewellery",
    sales: "624",
    revenue: "$24,200",
  },
];

export default function ProductAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-text-secondary">
              Analytics / Product Analytics
            </p>

            <div className="mt-2 flex items-center gap-3">
              <div className="rounded-xl bg-[#211c0d] p-3">
                <Package
                  size={25}
                  className="text-accent-gold"
                />
              </div>

              <h1 className="text-3xl font-bold text-accent-gold">
                Product Analytics
              </h1>
            </div>

            <p className="mt-3 text-sm text-text-secondary">
              Analyze product performance, sales trends and category growth.
            </p>
          </div>

          <select className="rounded-lg border border-border-theme bg-[#11130f] px-4 py-2 text-xs text-text-secondary outline-none">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>

        </div>

        {/* KPI CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                Total Products
              </p>

              <Package
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              18,426
            </h2>

            <p className="mt-2 text-xs text-green-400">
              +8.4% product growth
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                Total Product Sales
              </p>

              <ShoppingCart
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              12,486
            </h2>

            <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
              <ArrowUpRight size={14} />
              +12.4% this period
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                Best Category
              </p>

              <TrendingUp
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              Gold
            </h2>

            <p className="mt-2 text-xs text-green-400">
              92% performance score
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">
                Average Rating
              </p>

              <Star
                size={19}
                className="text-accent-gold"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              4.8 / 5
            </h2>

            <p className="mt-2 text-xs text-green-400">
              Excellent customer rating
            </p>
          </div>

        </div>

        {/* CATEGORY PERFORMANCE */}
        <div className="mt-6 rounded-xl border border-border-theme bg-[#11130f] p-6">

          <div>
            <h2 className="text-lg font-semibold text-accent-gold">
              Category Performance
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              Product sales performance by jewellery category
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-7">

            {productCategories.map((category) => (

              <div key={category.name}>

                <div className="flex items-center justify-between">

                  <span className="text-sm text-text-secondary">
                    {category.name}
                  </span>

                  <span className="text-xs text-green-400">
                    {category.growth}
                  </span>

                </div>

                <div className="mt-2 flex items-center justify-between text-xs">

                  <span className="text-text-secondary">
                    Revenue: {category.revenue}
                  </span>

                  <span className="text-accent-gold">
                    {category.sales}%
                  </span>

                </div>

                <div className="mt-2 h-2 rounded-full bg-[#292519]">

                  <div
                    className="h-full rounded-full bg-[#b98c20]"
                    style={{
                      width: `${category.sales}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* TOP PRODUCTS TABLE */}
        <div className="mt-6 rounded-xl border border-border-theme bg-[#11130f] p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-semibold text-accent-gold">
                Top Performing Products
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Products generating the highest sales and revenue
              </p>
            </div>

            <TrendingUp
              size={20}
              className="text-green-400"
            />

          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-[#2f2a1b]">

            <div className="grid grid-cols-4 border-b border-[#2f2a1b] bg-[#151711] px-5 py-4 text-xs text-text-secondary">

              <span>Product</span>
              <span>Category</span>
              <span>Sales</span>
              <span>Revenue</span>

            </div>

            {topProducts.map((product) => (

              <div
                key={product.name}
                className="grid grid-cols-4 items-center border-b border-[#242117] px-5 py-4 last:border-b-0"
              >

                <span className="text-sm font-medium">
                  {product.name}
                </span>

                <span className="text-xs text-text-secondary">
                  {product.category}
                </span>

                <span className="text-sm text-accent-gold">
                  {product.sales}
                </span>

                <span className="text-sm text-green-400">
                  {product.revenue}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* PRODUCT INSIGHT */}
        <div className="mt-6 rounded-xl border border-[#6c5420] bg-[#18150c] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-[#b98c20] p-3">
              <AlertTriangle
                size={22}
                className="text-black"
              />
            </div>

            <div>

              <h2 className="font-semibold text-accent-gold">
                Product Performance Insight
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Gold jewellery is currently the strongest performing category.
                Premium gold collections and diamond products are generating
                the highest revenue contribution.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <TrendingUp size={16} />
                Premium product categories are showing strong growth.
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}