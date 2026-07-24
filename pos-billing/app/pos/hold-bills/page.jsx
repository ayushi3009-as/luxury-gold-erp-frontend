"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { usePOS } from "../../../context/POSContext";

const initialBills = [
  {
    id: 1,
    invoiceNumber: "HOLD-001",
    customer: { name: "Aarav Mehta", phone: "+91 98765 41021" },
    items: [{ id: "ring-1", name: "22K Gold Ring", price: 48250, qty: 1 }],
    total: 49697.5,
    createdAt: "2026-07-24T09:40:00.000Z",
  },
  {
    id: 2,
    invoiceNumber: "HOLD-002",
    customer: { name: "Priya Shah", phone: "+91 98250 76312" },
    items: [{ id: "chain-1", name: "Gold Chain", price: 76450, qty: 1 }],
    total: 78743.5,
    createdAt: "2026-07-24T09:25:00.000Z",
  },
  {
    id: 3,
    invoiceNumber: "HOLD-003",
    customer: { name: "Kunal Patel", phone: "+91 99090 60043" },
    items: [{ id: "bracelet-1", name: "Gold Bracelet", price: 62500, qty: 1 }],
    total: 64375,
    createdAt: "2026-07-24T08:35:00.000Z",
  },
  {
    id: 4,
    invoiceNumber: "HOLD-004",
    customer: { name: "Walk-in Customer", phone: "" },
    items: [{ id: "earrings-1", name: "Diamond Earrings", price: 38200, qty: 1 }],
    total: 39346,
    createdAt: "2026-07-24T07:30:00.000Z",
  },
  {
    id: 5,
    invoiceNumber: "HOLD-005",
    customer: { name: "Nisha Desai", phone: "+91 98980 31145" },
    items: [{ id: "pendant-1", name: "Gold Pendant", price: 28750, qty: 1 }],
    total: 29612.5,
    createdAt: "2026-07-24T06:15:00.000Z",
  },
  {
    id: 6,
    invoiceNumber: "HOLD-006",
    customer: { name: "Rohan Joshi", phone: "+91 97654 10285" },
    items: [{ id: "bangle-1", name: "22K Gold Bangle", price: 91500, qty: 1 }],
    total: 94245,
    createdAt: "2026-07-23T15:20:00.000Z",
  },
];

export default function HoldBillsPage() {
  const router = useRouter();
  const { heldBills, restoreHeldBill, discardHeldBill } = usePOS();
  const [sampleBills, setSampleBills] = useState(initialBills);
  const [search, setSearch] = useState("");
  const [selectedBill, setSelectedBill] =
    useState(null);

  const filteredBills = useMemo(() => {
    return [...heldBills, ...sampleBills].filter((bill) =>
      `${bill.invoiceNumber} ${bill.customer?.name || "Walk-in Customer"}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [heldBills, sampleBills, search]);

  const formatMoney = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value || 0);

  const getHeldTime = (createdAt) => {
    const minutes = Math.max(1, Math.floor((Date.now() - new Date(createdAt).getTime()) / 60000));
    if (minutes < 60) return `${minutes} min ago`;
    if (minutes < 1440) return `${Math.floor(minutes / 60)} hr ago`;
    return new Date(createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  };

  function removeBill(id) {
    setSampleBills((currentBills) =>
      currentBills.filter((bill) => bill.id !== id)
    );
    discardHeldBill(id);

    if (selectedBill?.id === id) {
      setSelectedBill(null);
    }
  }

  function resumeBill(bill) {
    restoreHeldBill(bill);
    router.push("/pos/new-invoice");
  }

  return (
    <main className="hold-page">
      <header className="page-header">
        <div>
          <p className="breadcrumb">
            POS / Sales / Hold Bills
          </p>

          <h1>Hold Bills</h1>
        </div>

        <div className="header-actions">
          <div className="gold-rate">
            ◆ Gold 22K:
            <strong>$68.50/g</strong>
          </div>

          <button className="primary-button" onClick={() => router.push("/pos/new-invoice")}>
            + New Bill
          </button>
        </div>
      </header>

      <section className="toolbar">
        <div className="search-box">
          <span>⌕</span>

          <input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search held bills..."
          />
        </div>

        <div className="bill-count">
          {filteredBills.length} held bills
        </div>
      </section>

      <section className="bills-grid">
        {filteredBills.map((bill) => (
          <article
            className={
              selectedBill?.id === bill.id
                ? "bill-card selected"
                : "bill-card"
            }
            key={bill.id}
          >
            <div className="bill-card-header">
              <div>
                <span className="hold-badge">
                  ON HOLD
                </span>

                <h2>{bill.invoiceNumber}</h2>
              </div>

              <button
                className="delete-button"
                onClick={() => removeBill(bill.id)}
              >
                ×
              </button>
            </div>

            <div className="customer-info">
              <div className="customer-avatar">
                {(bill.customer?.name || "Walk-in Customer").charAt(0)}
              </div>

              <div>
                <strong>{bill.customer?.name || "Walk-in Customer"}</strong>

                <small>{getHeldTime(bill.createdAt)}</small>
              </div>
            </div>

            <div className="bill-details">
              <div>
                <span>Items</span>
                <strong>{bill.items.length}</strong>
              </div>

              <div>
                <span>Total</span>
                <strong>
                  {formatMoney(bill.total)}
                </strong>
              </div>
            </div>

            <div className="bill-actions">
              <button
                className="secondary-button"
                onClick={() =>
                  setSelectedBill(bill)
                }
              >
                View
              </button>

              <button className="primary-button" onClick={() => resumeBill(bill)}>
                Resume Bill
              </button>
            </div>
          </article>
        ))}
      </section>

      {selectedBill && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedBill(null)}
        >
          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="modal-header">
              <div>
                <span className="hold-badge">
                  ON HOLD
                </span>

                <h2>{selectedBill.invoiceNumber}</h2>
              </div>

              <button
                onClick={() => setSelectedBill(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="detail-row">
                <span>Customer</span>

                <strong>
                  {selectedBill.customer?.name || "Walk-in Customer"}
                </strong>
              </div>

              <div className="detail-row">
                <span>Items</span>

                <strong>
                  {selectedBill.items.length}
                </strong>
              </div>

              <div className="detail-row">
                <span>Amount</span>

                <strong>
                  {formatMoney(selectedBill.total)}
                </strong>
              </div>

              <div className="detail-row">
                <span>Held</span>

                <strong>{getHeldTime(selectedBill.createdAt)}</strong>
              </div>
            </div>

            <button className="resume-button" onClick={() => resumeBill(selectedBill)}>
              Resume This Bill
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .hold-page {
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
          margin: 10px 0 0;
          font-size: 17px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gold-rate {
          display: flex;
          gap: 7px;
          align-items: center;
          padding: 10px 14px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
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
          height: 38px;
          padding: 0 15px;
          border-radius: 7px;
        }

        .primary-button {
          border: 1px solid #d4af37;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
        }

        .secondary-button {
          border: 1px solid rgba(255, 255, 255, 0.13);
          color: #ddd8ce;
          background: #242422;
        }

        .toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 20px;
        }

        .search-box {
          width: min(450px, 100%);
          height: 43px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 13px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 8px;
          background: #20201e;
        }

        .search-box span {
          color: #aaa69b;
          font-size: 20px;
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: none;
          color: #eee9df;
          background: transparent;
        }

        .bill-count {
          color: #aaa69b;
          font-size: 13px;
        }

        .bills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .bill-card {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 13px;
          background:
            linear-gradient(
              145deg,
              rgba(39, 39, 37, 0.86),
              rgba(20, 20, 20, 0.94)
            );
          transition: 0.2s ease;
        }

        .bill-card.selected {
          border-color: #d4af37;
        }

        .bill-card:hover {
          transform: translateY(-2px);
          border-color: rgba(212, 175, 55, 0.5);
        }

        .bill-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .hold-badge {
          display: inline-flex;
          padding: 5px 8px;
          border-radius: 15px;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.12);
          font-size: 9px;
          font-weight: 700;
        }

        .delete-button {
          border: 0;
          color: #d7897e;
          background: transparent;
          font-size: 22px;
        }

        .customer-info {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 18px 0;
        }

        .customer-avatar {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
        }

        .customer-info strong,
        .customer-info small {
          display: block;
        }

        .customer-info strong {
          font-size: 13px;
        }

        .customer-info small {
          margin-top: 4px;
          color: #89857b;
          font-size: 10px;
        }

        .bill-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        .bill-details div {
          padding: 12px;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.05);
        }

        .bill-details span,
        .bill-details strong {
          display: block;
        }

        .bill-details span {
          margin-bottom: 5px;
          color: #89857b;
          font-size: 10px;
        }

        .bill-details strong {
          color: #d4af37;
          font-size: 15px;
        }

        .bill-actions {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 8px;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 20;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.7);
        }

        .modal {
          width: min(420px, 100%);
          padding: 22px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 13px;
          background: #20201e;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
        }

        .modal-header > button {
          border: 0;
          color: #aaa69b;
          background: transparent;
          font-size: 24px;
        }

        .modal-content {
          margin: 25px 0;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: #aaa69b;
          font-size: 13px;
        }

        .detail-row strong {
          color: #eee9df;
        }

        .resume-button {
          width: 100%;
          height: 45px;
          border: 0;
          border-radius: 7px;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
        }

        @media (max-width: 1000px) {
          .bills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .hold-page {
            padding: 15px;
          }

          .page-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .toolbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .bills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
