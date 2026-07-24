"use client";

import { useEffect, useRef, useState } from "react";

const barcodeProducts = {
  "890001": {
    name: "22K Gold Ring",
    sku: "GR-890001",
    weight: "8.50 g",
    price: 1250,
  },
  "890002": {
    name: "Gold Chain",
    sku: "GC-890002",
    weight: "18.20 g",
    price: 2850,
  },
  "890003": {
    name: "Diamond Earrings",
    sku: "DE-890003",
    weight: "5.80 g",
    price: 3200,
  },
};

export default function BarcodeBillingPage() {
  const [barcode, setBarcode] = useState("");
  const [isScanning, setIsScanning] =
    useState(false);
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState(
    "Ready to scan"
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function scanBarcode(event) {
    event.preventDefault();

    const product = barcodeProducts[barcode];

    if (!product) {
      setMessage(
        "Product not found. Try 890001, 890002 or 890003."
      );

      return;
    }

    setItems((currentItems) => [
      ...currentItems,
      {
        ...product,
        id: Date.now(),
      },
    ]);

    setMessage(`${product.name} added successfully`);
    setBarcode("");

    inputRef.current?.focus();
  }

  function removeItem(id) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const tax = subtotal * 0.03;
  const total = subtotal + tax;

  return (
    <main className="barcode-page">
      <header className="page-header">
        <div>
          <p className="breadcrumb">
            POS / Sales / Barcode Billing
          </p>

          <h1>Barcode Billing</h1>
        </div>

        <div className="gold-rate">
          ◆ Gold 22K:
          <strong>$68.50/g</strong>
        </div>
      </header>

      <section className="barcode-layout">
        <div className="scanner-panel">
          <div className="scanner-icon">
            ▦
          </div>

          <h2>Scan Jewellery Barcode</h2>

          <p>
            Scan a barcode using your hardware scanner
            or enter the barcode manually.
          </p>

          <form onSubmit={scanBarcode}>
            <div className="barcode-input">
              <span>▥</span>

              <input
                ref={inputRef}
                value={barcode}
                onChange={(event) =>
                  setBarcode(event.target.value)
                }
                placeholder="Scan or enter barcode"
                autoFocus
              />

              <button type="submit">
                Add
              </button>
            </div>
          </form>

          <div
            className={
              isScanning
                ? "scanner-status scanning"
                : "scanner-status"
            }
          >
            <span />
            {isScanning
              ? "Scanner active"
              : message}
          </div>

          <button
            className="scan-button"
            onClick={() =>
              setIsScanning(!isScanning)
            }
          >
            {isScanning
              ? "Stop Scanner"
              : "Activate Scanner"}
          </button>

          <div className="demo-barcode">
            <p>Demo barcodes</p>

            <div>
              <button
                onClick={() => setBarcode("890001")}
              >
                890001
              </button>

              <button
                onClick={() => setBarcode("890002")}
              >
                890002
              </button>

              <button
                onClick={() => setBarcode("890003")}
              >
                890003
              </button>
            </div>
          </div>
        </div>

        <div className="bill-panel">
          <div className="bill-header">
            <div>
              <h2>Scanned Items</h2>

              <p>{items.length} items</p>
            </div>

            <button
              className="clear-button"
              onClick={() => setItems([])}
            >
              Clear All
            </button>
          </div>

          <div className="items-list">
            {items.length === 0 ? (
              <div className="empty-state">
                <span>◇</span>

                <p>No products scanned</p>

                <small>
                  Your scanned products will appear here
                </small>
              </div>
            ) : (
              items.map((item) => (
                <div
                  className="scanned-item"
                  key={item.id}
                >
                  <div className="item-icon">
                    ◇
                  </div>

                  <div className="item-details">
                    <strong>{item.name}</strong>

                    <small>
                      {item.sku} · {item.weight}
                    </small>
                  </div>

                  <strong>
                    ${item.price.toFixed(2)}
                  </strong>

                  <button
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="bill-summary">
            <div>
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div>
              <span>GST / Tax</span>
              <strong>${tax.toFixed(2)}</strong>
            </div>

            <div className="total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          <button
            className="pay-button"
            disabled={!items.length}
          >
            Continue to Payment
          </button>
        </div>
      </section>

      <style jsx>{`
        .barcode-page {
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
          font-size: 18px;
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

        .barcode-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 480px;
          gap: 20px;
        }

        .scanner-panel,
        .bill-panel {
          min-height: 600px;
          padding: 35px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              rgba(39, 39, 37, 0.86),
              rgba(20, 20, 20, 0.94)
            );
        }

        .scanner-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .scanner-icon {
          width: 100px;
          height: 100px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(212, 175, 55, 0.5);
          border-radius: 18px;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.08);
          font-size: 50px;
        }

        .scanner-panel h2 {
          margin: 25px 0 10px;
        }

        .scanner-panel > p {
          max-width: 400px;
          color: #908c83;
          font-size: 13px;
          line-height: 1.6;
        }

        form {
          width: 100%;
          max-width: 520px;
          margin-top: 25px;
        }

        .barcode-input {
          height: 54px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 15px;
          border: 1px solid rgba(212, 175, 55, 0.45);
          border-radius: 9px;
          background: #20201e;
        }

        .barcode-input span {
          color: #d4af37;
          font-size: 23px;
        }

        .barcode-input input {
          flex: 1;
          height: 100%;
          border: 0;
          outline: none;
          color: #f1ede3;
          background: transparent;
        }

        .barcode-input button,
        .scan-button,
        .pay-button {
          border: 0;
          border-radius: 7px;
          cursor: pointer;
          font-weight: 600;
        }

        .barcode-input button {
          height: 38px;
          margin-right: 8px;
          padding: 0 16px;
          color: #18150c;
          background: #d4af37;
        }

        .scanner-status {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 20px 0;
          color: #9c978b;
          font-size: 12px;
        }

        .scanner-status span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #77736b;
        }

        .scanner-status.scanning {
          color: #d4af37;
        }

        .scanner-status.scanning span {
          background: #d4af37;
          box-shadow: 0 0 10px #d4af37;
        }

        .scan-button {
          height: 42px;
          padding: 0 22px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #e8d37d;
          background: rgba(212, 175, 55, 0.1);
        }

        .demo-barcode {
          margin-top: 35px;
        }

        .demo-barcode p {
          color: #77736b;
          font-size: 11px;
        }

        .demo-barcode button {
          margin: 3px;
          padding: 6px 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 5px;
          color: #aaa69b;
          background: #20201e;
        }

        .bill-panel {
          display: flex;
          flex-direction: column;
        }

        .bill-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .bill-header h2 {
          margin-bottom: 5px;
        }

        .bill-header p {
          margin: 0;
          color: #89857b;
          font-size: 12px;
        }

        .clear-button {
          border: 0;
          color: #d7897e;
          background: transparent;
          cursor: pointer;
        }

        .items-list {
          flex: 1;
          overflow-y: auto;
        }

        .empty-state {
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #77736b;
          text-align: center;
        }

        .empty-state span {
          color: #d4af37;
          font-size: 55px;
        }

        .empty-state p {
          margin: 15px 0 5px;
          color: #b3aea3;
        }

        .empty-state small {
          font-size: 11px;
        }

        .scanned-item {
          display: grid;
          grid-template-columns: 42px 1fr auto 25px;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .item-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.12);
          font-size: 25px;
        }

        .item-details strong,
        .item-details small {
          display: block;
        }

        .item-details strong {
          font-size: 13px;
        }

        .item-details small {
          margin-top: 4px;
          color: #88847b;
          font-size: 10px;
        }

        .scanned-item > strong {
          color: #d4af37;
          font-size: 13px;
        }

        .scanned-item > button {
          border: 0;
          color: #d7897e;
          background: transparent;
          font-size: 20px;
          cursor: pointer;
        }

        .bill-summary {
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .bill-summary > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 13px;
          color: #aaa69b;
          font-size: 13px;
        }

        .bill-summary .total {
          margin-top: 20px;
          color: #f1ece1;
          font-size: 18px;
        }

        .total strong {
          color: #d4af37;
          font-size: 23px;
        }

        .pay-button {
          height: 47px;
          margin-top: 15px;
          color: #18150c;
          background: #d4af37;
        }

        .pay-button:disabled {
          cursor: not-allowed;
          opacity: 0.4;
        }

        @media (max-width: 1000px) {
          .barcode-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .barcode-page {
            padding: 15px;
          }

          .page-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .scanner-panel,
          .bill-panel {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}