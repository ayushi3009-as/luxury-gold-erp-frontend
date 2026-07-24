"use client";

import { useMemo, useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Gold Ring",
    sku: "GR-001",
    metal: "22K Gold",
    grossWeight: 8.5,
    wastage: 12,
    makingCharge: 850,
    quantity: 1,
  },
];

export default function NewInvoicePage() {
  const [customer, setCustomer] = useState("");
  const [invoiceNumber] = useState("INV-2026-0001");
  const [items, setItems] = useState(initialItems);
  const [goldRate, setGoldRate] = useState(68.5);
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] =
    useState("Cash");

  const totals = useMemo(() => {
    const subtotal = items.reduce((total, item) => {
      const netWeight =
        item.grossWeight +
        (item.grossWeight * item.wastage) / 100;

      const metalValue = netWeight * goldRate;

      const makingCharge =
        item.makingCharge * item.quantity;

      return (
        total +
        (metalValue + makingCharge) *
          item.quantity
      );
    }, 0);

    const tax = subtotal * 0.03;
    const total = subtotal + tax - discount;

    return {
      subtotal,
      tax,
      total: Math.max(total, 0),
    };
  }, [items, goldRate, discount]);

  function updateItem(id, field, value) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: Number(value),
            }
          : item
      )
    );
  }

  function addItem() {
    setItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        name: "New Item",
        sku: "SKU-000",
        metal: "22K Gold",
        grossWeight: 0,
        wastage: 0,
        makingCharge: 0,
        quantity: 1,
      },
    ]);
  }

  function removeItem(id) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function formatMoney(value) {
    return `$${value.toFixed(2)}`;
  }

  return (
    <main className="invoice-page">
      <header className="page-header">
        <div>
          <p className="breadcrumb">
            POS / Sales / New Invoice
          </p>

          <h1>New Invoice</h1>
        </div>

        <div className="header-actions">
          <div className="gold-rate">
            <span>◆</span>
            Gold 22K
            <strong>${goldRate}/g</strong>
          </div>

          <button className="secondary-button">
            Save Draft
          </button>

          <button className="primary-button">
            Preview Invoice
          </button>
        </div>
      </header>

      <section className="invoice-layout">
        <div className="invoice-main">
          <section className="card customer-card">
            <div className="section-title">
              <div>
                <h2>Customer Details</h2>
                <p>
                  Select an existing customer or add a new
                  customer.
                </p>
              </div>

              <button className="secondary-button">
                + Add Customer
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Customer Name</label>

                <input
                  value={customer}
                  onChange={(event) =>
                    setCustomer(event.target.value)
                  }
                  placeholder="Search customer"
                />
              </div>

              <div className="form-group">
                <label>Invoice Number</label>

                <input
                  value={invoiceNumber}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Invoice Date</label>

                <input
                  type="date"
                  defaultValue="2026-07-23"
                />
              </div>

              <div className="form-group">
                <label>Customer Phone</label>

                <input
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
          </section>

          <section className="card items-card">
            <div className="section-title">
              <div>
                <h2>Invoice Items</h2>
                <p>
                  Add jewellery items and calculate metal
                  pricing.
                </p>
              </div>

              <button
                className="primary-button"
                onClick={addItem}
              >
                + Add Item
              </button>
            </div>

            <div className="table-wrapper">
              <table className="items-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Metal</th>
                    <th>Gross Wt.</th>
                    <th>Wastage %</th>
                    <th>Making Charge</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="item-name">
                          <div className="item-icon">
                            ◇
                          </div>

                          <div>
                            <strong>{item.name}</strong>
                            <small>{item.sku}</small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="metal-badge">
                          {item.metal}
                        </span>
                      </td>

                      <td>
                        <input
                          className="table-input"
                          type="number"
                          value={item.grossWeight}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "grossWeight",
                              event.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <input
                          className="table-input"
                          type="number"
                          value={item.wastage}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "wastage",
                              event.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <input
                          className="table-input"
                          type="number"
                          value={item.makingCharge}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "makingCharge",
                              event.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <input
                          className="table-input quantity-input"
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "quantity",
                              event.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <button
                          className="delete-button"
                          onClick={() =>
                            removeItem(item.id)
                          }
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="card notes-card">
            <h2>Notes</h2>

            <textarea
              placeholder="Add invoice notes, special instructions, or customer remarks..."
            />
          </section>
        </div>

        <aside className="invoice-summary">
          <section className="card summary-card">
            <div className="summary-header">
              <h2>Invoice Summary</h2>

              <span className="draft-badge">
                Draft
              </span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>
                {formatMoney(totals.subtotal)}
              </strong>
            </div>

            <div className="summary-row">
              <span>Tax / GST 3%</span>
              <strong>
                {formatMoney(totals.tax)}
              </strong>
            </div>

            <div className="discount-row">
              <label>Discount</label>

              <input
                type="number"
                min="0"
                value={discount}
                onChange={(event) =>
                  setDiscount(
                    Number(event.target.value)
                  )
                }
              />
            </div>

            <div className="summary-divider" />

            <div className="total-row">
              <span>Total Amount</span>

              <strong>
                {formatMoney(totals.total)}
              </strong>
            </div>
          </section>

          <section className="card payment-card">
            <h2>Payment Method</h2>

            <div className="payment-options">
              {["Cash", "Card", "UPI", "Split"].map(
                (method) => (
                  <button
                    key={method}
                    className={
                      paymentMethod === method
                        ? "payment-option active"
                        : "payment-option"
                    }
                    onClick={() =>
                      setPaymentMethod(method)
                    }
                  >
                    {method}
                  </button>
                )
              )}
            </div>

            <button className="complete-button">
              Complete Payment
            </button>
          </section>

          <section className="card calculation-card">
            <h2>Calculation Details</h2>

            {items.map((item) => {
              const netWeight =
                item.grossWeight +
                (item.grossWeight *
                  item.wastage) /
                  100;

              return (
                <div
                  className="calculation-item"
                  key={item.id}
                >
                  <span>Gross Weight</span>
                  <strong>
                    {item.grossWeight.toFixed(2)} g
                  </strong>

                  <span>Wastage</span>
                  <strong>
                    {item.wastage}%
                  </strong>

                  <span>Net Weight</span>
                  <strong>
                    {netWeight.toFixed(2)} g
                  </strong>
                </div>
              );
            })}
          </section>
        </aside>
      </section>

      <style jsx>{`
        .invoice-page {
          min-height: 100vh;
          padding: 26px;
          color: #f4f0e6;
          background:
            radial-gradient(
              circle at 20% 10%,
              rgba(212, 175, 55, 0.12),
              transparent 30%
            ),
            #11110f;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif;
        }

        .page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
        }

        .breadcrumb {
          margin: 0 0 8px;
          color: #928e83;
          font-size: 12px;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        h1 {
          margin-bottom: 0;
          font-size: 26px;
        }

        h2 {
          margin-bottom: 6px;
          font-size: 16px;
        }

        .section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 22px;
        }

        .section-title p {
          margin-bottom: 0;
          color: #8d8a82;
          font-size: 12px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gold-rate,
        .secondary-button,
        .primary-button {
          min-height: 38px;
          border-radius: 8px;
        }

        .gold-rate {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 13px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #d9bf62;
          background: rgba(72, 59, 24, 0.35);
          font-size: 12px;
        }

        .gold-rate strong {
          color: #f3eee3;
        }

        button {
          font: inherit;
          cursor: pointer;
        }

        .secondary-button,
        .primary-button {
          padding: 0 15px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          color: #e4e0d6;
          background: #242422;
        }

        .primary-button {
          border-color: rgba(212, 175, 55, 0.55);
          color: #19170e;
          background: #d4af37;
          font-weight: 700;
        }

        .invoice-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 20px;
        }

        .invoice-main,
        .invoice-summary {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .card {
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 13px;
          padding: 20px;
          background:
            linear-gradient(
              145deg,
              rgba(39, 39, 37, 0.86),
              rgba(20, 20, 20, 0.94)
            );
          box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.17);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        label {
          color: #aaa69b;
          font-size: 12px;
        }

        input,
        textarea,
        select {
          box-sizing: border-box;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          outline: none;
          color: #e9e5dc;
          background: #20201e;
        }

        input {
          height: 40px;
          padding: 0 12px;
        }

        input:focus,
        textarea:focus {
          border-color: rgba(212, 175, 55, 0.7);
        }

        .table-wrapper {
          overflow-x: auto;
        }

        .items-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
        }

        .items-table th {
          padding: 11px 8px;
          color: #aaa69b;
          background: rgba(255, 255, 255, 0.05);
          font-size: 11px;
          font-weight: 500;
          text-align: left;
        }

        .items-table td {
          padding: 12px 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .item-name {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .item-icon {
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.12);
          font-size: 21px;
        }

        .item-name strong,
        .item-name small {
          display: block;
        }

        .item-name strong {
          font-size: 12px;
        }

        .item-name small {
          margin-top: 3px;
          color: #88857d;
          font-size: 10px;
        }

        .metal-badge,
        .draft-badge {
          display: inline-flex;
          padding: 5px 9px;
          border-radius: 20px;
          color: #dfc35b;
          background: rgba(127, 103, 36, 0.35);
          font-size: 10px;
        }

        .table-input {
          width: 90px;
          height: 32px;
          padding: 0 8px;
          font-size: 12px;
        }

        .quantity-input {
          width: 55px;
        }

        .delete-button {
          width: 30px;
          height: 30px;
          border: 0;
          border-radius: 6px;
          color: #d67b70;
          background: rgba(150, 50, 40, 0.15);
          font-size: 20px;
        }

        .notes-card textarea {
          min-height: 100px;
          padding: 12px;
          resize: vertical;
        }

        .summary-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .summary-row,
        .discount-row,
        .total-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 16px;
          color: #aaa69b;
          font-size: 13px;
        }

        .summary-row strong,
        .total-row strong {
          color: #f2eee5;
        }

        .discount-row input {
          width: 100px;
          height: 32px;
          text-align: right;
        }

        .summary-divider {
          height: 1px;
          margin: 20px 0;
          background: rgba(255, 255, 255, 0.12);
        }

        .total-row {
          margin-bottom: 0;
          color: #e9e3d4;
          font-size: 16px;
        }

        .total-row strong {
          color: #d4af37;
          font-size: 22px;
        }

        .payment-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin: 18px 0;
        }

        .payment-option {
          height: 38px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          color: #aaa69b;
          background: #20201e;
        }

        .payment-option.active {
          border-color: #d4af37;
          color: #f1d875;
          background: rgba(212, 175, 55, 0.12);
        }

        .complete-button {
          width: 100%;
          height: 45px;
          border: 0;
          border-radius: 8px;
          color: #17150d;
          background: #d4af37;
          font-weight: 700;
        }

        .calculation-item {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: #aaa69b;
          font-size: 12px;
        }

        .calculation-item strong {
          color: #e8e3d8;
        }

        @media (max-width: 1000px) {
          .invoice-layout {
            grid-template-columns: 1fr;
          }

          .invoice-summary {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .invoice-page {
            padding: 15px;
          }

          .page-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .header-actions {
            width: 100%;
            flex-wrap: wrap;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .invoice-summary {
            display: flex;
          }
        }
      `}</style>
    </main>
  );
}