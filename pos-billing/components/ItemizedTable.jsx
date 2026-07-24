"use client";

export default function ItemizedTable({
  items = [],
  onUpdate,
  onRemove,
  editable = true,
}) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const calculateItemTotal = (item) => {
    const metalValue =
      Number(item.weight || 0) *
      Number(item.goldRate || 0);

    const makingCharges =
      Number(item.makingCharges || 0);

    const wastage =
      Number(item.wastage || 0);

    const baseAmount =
      metalValue + makingCharges + wastage;

    const gst =
      (baseAmount * Number(item.gst || 0)) / 100;

    return baseAmount + gst;
  };

  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        <div className="mb-3 text-4xl">
          🛒
        </div>

        <h3 className="font-semibold">
          No items added
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Add products to create the invoice
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Invoice Items
          </h2>

          <p className="text-sm text-gray-500">
            {items.length} item
            {items.length !== 1 ? "s" : ""} added
          </p>
        </div>

        <span className="rounded-full bg-[#fffaf3] px-3 py-1 text-sm font-medium text-[#9b6b28]">
          {items.length} Items
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b text-sm text-gray-500">
              <th className="p-3">
                Product
              </th>

              <th className="p-3">
                SKU
              </th>

              <th className="p-3">
                Weight
              </th>

              <th className="p-3">
                Gold Rate
              </th>

              <th className="p-3">
                Making
              </th>

              <th className="p-3">
                GST
              </th>

              <th className="p-3 text-right">
                Total
              </th>

              {editable && (
                <th className="p-3">
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              const itemTotal =
                item.total ||
                calculateItemTotal(item);

              return (
                <tr
                  key={item.id}
                  className="border-b last:border-0 hover:bg-[#fffaf3]"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eadbc5]">
                        💍
                      </div>

                      <div>
                        <p className="font-semibold">
                          {item.name}
                        </p>

                        {item.hsn && (
                          <p className="text-xs text-gray-500">
                            HSN: {item.hsn}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  <td className="p-3 text-sm text-gray-500">
                    {item.sku || "-"}
                  </td>

                  <td className="p-3">
                    {editable ? (
                      <input
                        type="number"
                        value={item.weight || ""}
                        onChange={(e) =>
                          onUpdate?.(
                            item.id,
                            "weight",
                            Number(e.target.value)
                          )
                        }
                        className="w-24 rounded-lg border border-gray-200 px-2 py-2 outline-none"
                      />
                    ) : (
                      `${item.weight || 0} g`
                    )}
                  </td>

                  <td className="p-3">
                    {formatPrice(
                      item.goldRate || 0
                    )}
                  </td>

                  <td className="p-3">
                    {formatPrice(
                      item.makingCharges || 0
                    )}
                  </td>

                  <td className="p-3">
                    {item.gst || 0}%
                  </td>

                  <td className="p-3 text-right font-semibold">
                    {formatPrice(itemTotal)}
                  </td>

                  {editable && (
                    <td className="p-3">
                      <button
                        onClick={() =>
                          onRemove?.(item.id)
                        }
                        className="rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Remove
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}