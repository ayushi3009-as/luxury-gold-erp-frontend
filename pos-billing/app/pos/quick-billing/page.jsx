"use client";

import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Gold Ring",
    sku: "GR-001",
    category: "Rings",
    price: 1250,
  },
  {
    id: 2,
    name: "Gold Chain",
    sku: "GC-002",
    category: "Chains",
    price: 2850,
  },
  {
    id: 3,
    name: "Diamond Earrings",
    sku: "DE-003",
    category: "Earrings",
    price: 3200,
  },
  {
    id: 4,
    name: "Gold Bracelet",
    sku: "GB-004",
    category: "Bracelets",
    price: 1950,
  },
  {
    id: 5,
    name: "Diamond Ring",
    sku: "DR-005",
    category: "Rings",
    price: 4500,
  },
  {
    id: 6,
    name: "Gold Pendant",
    sku: "GP-006",
    category: "Pendants",
    price: 980,
  },
];

export default function QuickBillingPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState("");
  const [paymentMethod, setPaymentMethod] =
    useState("Cash");

  const categories = [
    "All",
    "Rings",
    "Chains",
    "Earrings",
    "Bracelets",
    "Pendants",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.sku
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.03;
  const total = subtotal + tax;

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      setCart((currentCart) =>
        currentCart.filter((item) => item.id !== id)
      );

      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  }

  return (
    <main className="quick-billing-page">
      <header className="page-header">
        <div>
          <p className="breadcrumb">
            POS / Sales / Quick Billing
          </p>

          <h1>Quick Billing</h1>
        </div>

        <div className="header-actions">
          <div className="gold-rate">
            ◆ Gold 22K:
            <strong>$68.50/g</strong>
          </div>

          <button className="secondary-button">
            Hold Bill
          </button>

          <button className="primary-button">
            Print Invoice
          </button>
        </div>
      </header>

      <div className="billing-layout">
        <section className="products-panel">
          <div className="search-box">
            <span>⌕</span>

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search product by name or SKU..."
            />
          </div>

          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <button
                className="product-card"
                key={product.id}
                onClick={() => addToCart(product)}
              >
                <div className="product-image">
                  ◇
                </div>

                <div className="product-info">
                  <strong>{product.name}</strong>

                  <small>{product.sku}</small>

                  <span>{product.category}</span>

                  <b>${product.price.toFixed(2)}</b>
                </div>
              </button>
            ))}
          </div>
        </section>

        <aside className="cart-panel">
          <div className="cart-header">
            <div>
              <h2>Current Bill</h2>

              <p>
                {cart.length} product
                {cart.length !== 1 ? "s" : ""}
              </p>
            </div>

            <button
              className="clear-button"
              onClick={() => setCart([])}
            >
              Clear
            </button>
          </div>

          <div className="customer-field">
            <label>Customer</label>

            <input
              value={customer}
              onChange={(event) =>
                setCustomer(event.target.value)
              }
              placeholder="Walk-in Customer"
            />
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>🛒</span>

                <p>No items added</p>

                <small>
                  Select products to start billing
                </small>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                >
                  <div>
                    <strong>{item.name}</strong>

                    <small>
                      ${item.price.toFixed(2)}
                    </small>
                  </div>

                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <strong>
                    $
                    {(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </strong>
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

            <div className="total-row">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          <div className="payment-methods">
            {["Cash", "Card", "UPI"].map(
              (method) => (
                <button
                  key={method}
                  className={
                    paymentMethod === method
                      ? "payment-button active"
                      : "payment-button"
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

          <button
            className="complete-button"
            disabled={!cart.length}
          >
            Pay ${total.toFixed(2)}
          </button>
        </aside>
      </div>

      <style jsx>{`
        .quick-billing-page {
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
          margin-bottom: 24px;
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
          margin-bottom: 5px;
          font-size: 17px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gold-rate,
        .secondary-button,
        .primary-button {
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
          cursor: pointer;
          font: inherit;
        }

        .secondary-button,
        .primary-button {
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

        .billing-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 390px;
          gap: 20px;
        }

        .products-panel,
        .cart-panel {
          min-height: 680px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              rgba(39, 39, 37, 0.86),
              rgba(20, 20, 20, 0.94)
            );
        }

        .products-panel {
          padding: 20px;
        }

        .search-box {
          height: 45px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 14px;
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

        .category-list {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          margin: 18px 0;
        }

        .category-button {
          padding: 8px 15px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          color: #aaa69b;
          background: #20201e;
          white-space: nowrap;
        }

        .category-button.active {
          border-color: #d4af37;
          color: #f2d975;
          background: rgba(212, 175, 55, 0.12);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .product-card {
          padding: 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          color: #f3eee4;
          text-align: left;
          background: #222220;
          transition: 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-2px);
          border-color: rgba(212, 175, 55, 0.6);
        }

        .product-image {
          height: 130px;
          display: grid;
          place-items: center;
          color: #d4af37;
          background:
            radial-gradient(
              circle,
              rgba(212, 175, 55, 0.2),
              transparent 65%
            ),
            #171715;
          font-size: 60px;
        }

        .product-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 12px;
        }

        .product-info strong {
          font-size: 13px;
        }

        .product-info small,
        .product-info span {
          color: #8d8980;
          font-size: 10px;
        }

        .product-info b {
          margin-top: 4px;
          color: #d4af37;
          font-size: 15px;
        }

        .cart-panel {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .cart-header p {
          margin: 0;
          color: #89857b;
          font-size: 12px;
        }

        .clear-button {
          border: 0;
          color: #d7897e;
          background: transparent;
        }

        .customer-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin: 20px 0;
        }

        .customer-field label {
          color: #aaa69b;
          font-size: 12px;
        }

        .customer-field input {
          height: 40px;
          padding: 0 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          outline: none;
          color: #eee9df;
          background: #20201e;
        }

        .cart-items {
          flex: 1;
          overflow-y: auto;
        }

        .empty-cart {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #77736b;
          text-align: center;
        }

        .empty-cart span {
          font-size: 45px;
        }

        .empty-cart p {
          margin: 12px 0 5px;
          color: #b3aea3;
        }

        .empty-cart small {
          font-size: 11px;
        }

        .cart-item {
          display: grid;
          grid-template-columns: 1fr auto auto;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cart-item strong,
        .cart-item small {
          display: block;
        }

        .cart-item strong {
          font-size: 12px;
        }

        .cart-item small {
          margin-top: 4px;
          color: #8b877e;
          font-size: 10px;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .quantity-control button {
          width: 25px;
          height: 25px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 5px;
          color: #d4af37;
          background: #20201e;
        }

        .bill-summary {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .bill-summary > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          color: #aaa69b;
          font-size: 13px;
        }

        .bill-summary .total-row {
          margin-top: 18px;
          color: #eee9df;
          font-size: 17px;
        }

        .total-row strong {
          color: #d4af37;
          font-size: 22px;
        }

        .payment-methods {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin: 15px 0;
        }

        .payment-button {
          height: 38px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          color: #aaa69b;
          background: #20201e;
        }

        .payment-button.active {
          border-color: #d4af37;
          color: #f2d975;
          background: rgba(212, 175, 55, 0.12);
        }

        .complete-button {
          height: 46px;
          border: 0;
          border-radius: 8px;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
        }

        .complete-button:disabled {
          cursor: not-allowed;
          opacity: 0.4;
        }

        @media (max-width: 1000px) {
          .billing-layout {
            grid-template-columns: 1fr;
          }

          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 650px) {
          .quick-billing-page {
            padding: 15px;
          }

          .page-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .header-actions {
            flex-wrap: wrap;
          }

          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </main>
  );
}