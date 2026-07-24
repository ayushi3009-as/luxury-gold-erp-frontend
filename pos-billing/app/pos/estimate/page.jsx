"use client";

import { useMemo, useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Gold Ring",
    metal: "22K Gold",
    grossWeight: 8.5,
    wastage: 12,
    makingCharge: 850,
  },
];

export default function EstimatePage() {
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState(initialItems);
  const [goldRate, setGoldRate] = useState(68.5);

  const total = useMemo(() => {
    return items.reduce((sum, item) => {
      const netWeight =
        item.grossWeight +
        (item.grossWeight * item.wastage) / 100;

      return (
        sum +
        netWeight * goldRate +
        item.makingCharge
      );
    }, 0);
  }, [items, goldRate]);

  function addItem() {
    setItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        name: "New Jewellery Item",
        metal: "22K Gold",
        grossWeight: 0,
        wastage: 0,
        makingCharge: 0,
      },
    ]);
  }

  function updateItem(id, field, value) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "name" ||
                field === "metal"
                  ? value
                  : Number(value),
            }
          : item
      )
    );
  }

  function removeItem(id) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <main className="estimate-page">
      <header className="page-header">
        <div>
          <p className="breadcrumb">
            POS / Estimate
          </p>

          <h1>Create Estimate</h1>
        </div>

        <div className="header-actions">
          <div className="gold-rate">
            ◆ Gold 22K:
            <strong>${goldRate}/g</strong>
          </div>

          <button className="secondary-button">
            Save Estimate
          </button>

          <button className="primary-button">
            Print Estimate
          </button>
        </div>
      </header>

      <div className="estimate-layout">
        <section className="estimate-main">
          <div className="card customer-card">
            <div className="section-header">
              <div>
                <h2>Customer Information</h2>

                <p>
                  Estimates can be converted into
                  invoices later.
                </p>
              </div>

              <span className="estimate-badge">
                ESTIMATE
              </span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Customer Name</label>

                <input
                  value={customer}
                  onChange={(event) =>
                    setCustomer(event.target.value)
                  }
                  placeholder="Enter customer name"
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>

                <input placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="form-group">
                <label>Gold Rate / Gram</label>

                <input
                  type="number"
                  value={goldRate}
                  onChange={(event) =>
                    setGoldRate(
                      Number(event.target.value)
                    )
                  }
                />
              </div>

              <div className="form-group">
                <label>Valid Until</label>

                <input
                  type="date"
                  defaultValue="2026-08-23"
                />
              </div>
            </div>
          </div>

          <div className="card items-card">
            <div className="section-header">
              <div>
                <h2>Estimate Items</h2>

                <p>
                  Add jewellery items for the customer
                  estimate.
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
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Metal</th>
                    <th>Gross Weight</th>
                    <th>Wastage</th>
                    <th>Making Charges</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <input
                          value={item.name}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "name",
                              event.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <select
                          value={item.metal}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "metal",
                              event.target.value
                            )
                          }
                        >
                          <option>22K Gold</option>
                          <option>24K Gold</option>
                          <option>18K Gold</option>
                          <option>Silver</option>
                        </select>
                      </td>

                      <td>
                        <input
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
          </div>

          <div className="card notes-card">
            <h2>Estimate Notes</h2>

            <textarea
              placeholder="Add notes or terms and conditions..."
            />
          </div>
        </section>

        <aside className="estimate-summary">
          <div className="card summary-card">
            <h2>Estimate Summary</h2>

            <div className="summary-line">
              <span>Total Items</span>

              <strong>{items.length}</strong>
            </div>

            <div className="summary-line">
              <span>Gold Rate</span>

              <strong>${goldRate}/g</strong>
            </div>

            <div className="divider" />

            <div className="grand-total">
              <span>Estimated Total</span>

              <strong>
                ${total.toFixed(2)}
              </strong>
            </div>

            <p className="disclaimer">
              Final price may vary based on the gold
              rate and final item weight at the time of
              invoicing.
            </p>
          </div>

          <div className="card action-card">
            <button className="primary-action">
              Convert to Invoice
            </button>

            <button className="secondary-action">
              Share Estimate
            </button>

            <button className="secondary-action">
              Download PDF
            </button>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .estimate-page {
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
          margin-bottom: 25px;
        }

        .breadcrumb {
          margin: 0 0 8px;
          color: #89857b;
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
          font-size: 17px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gold-rate,
        .primary-button,
        .secondary-button {
          height: 38px;
          display: flex;
          align-items: center;
          border-radius: 8px;
        }

        .gold-rate {
          gap: 7px;
          padding: 0 13px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #d9bf62;
          font-size: 12px;
        }

        .gold-rate strong {
          color: #f3eee3;
        }

        button {
          font: inherit;
          cursor: pointer;
        }

        .primary-button,
        .secondary-button {
          padding: 0 15px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          color: #e4e0d6;
          background: #242422;
        }

        .primary-button {
          border-color: #d4af37;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
        }

        .estimate-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 20px;
        }

        .estimate-main,
        .estimate-summary {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .card {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 13px;
          background:
            linear-gradient(
              145deg,
              rgba(39, 39, 37, 0.86),
              rgba(20, 20, 20, 0.94)
            );
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 22px;
        }

        .section-header h2 {
          margin-bottom: 6px;
        }

        .section-header p {
          margin-bottom: 0;
          color: #8d8980;
          font-size: 12px;
        }

        .estimate-badge {
          padding: 6px 10px;
          border-radius: 20px;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.12);
          font-size: 10px;
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
        select,
        textarea {
          box-sizing: border-box;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          outline: none;
          color: #e9e5dc;
          background: #20201e;
        }

        input,
        select {
          height: 40px;
          padding: 0 11px;
        }

        textarea {
          min-height: 100px;
          padding: 12px;
          resize: vertical;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
        }

        th {
          padding: 11px 8px;
          color: #aaa69b;
          background: rgba(255, 255, 255, 0.05);
          font-size: 11px;
          font-weight: 500;
          text-align: left;
        }

        td {
          padding: 12px 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        td input,
        td select {
          height: 34px;
          font-size: 11px;
        }

        .delete-button {
          width: 30px;
          height: 30px;
          border: 0;
          border-radius: 6px;
          color: #d7897e;
          background: rgba(150, 50, 40, 0.15);
          font-size: 19px;
        }

        .summary-card h2 {
          margin-bottom: 25px;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 17px;
          color: #aaa69b;
          font-size: 13px;
        }

        .summary-line strong {
          color: #eee9df;
        }

        .divider {
          height: 1px;
          margin: 22px 0;
          background: rgba(255, 255, 255, 0.12);
        }

        .grand-total {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .grand-total span {
          color: #aaa69b;
          font-size: 13px;
        }

        .grand-total strong {
          color: #d4af37;
          font-size: 27px;
        }

        .disclaimer {
          margin: 22px 0 0;
          padding: 12px;
          border-radius: 7px;
          color: #9b9588;
          background: rgba(212, 175, 55, 0.07);
          font-size: 11px;
          line-height: 1.6;
        }

        .action-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .primary-action,
        .secondary-action {
          height: 43px;
          border-radius: 7px;
          cursor: pointer;
        }

        .primary-action {
          border: 0;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
        }

        .secondary-action {
          border: 1px solid rgba(255, 255, 255, 0.13);
          color: #ddd8ce;
          background: #222220;
        }

        @media (max-width: 1000px) {
          .estimate-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .estimate-page {
            padding: 15px;
          }

          .page-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .header-actions {
            flex-wrap: wrap;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}