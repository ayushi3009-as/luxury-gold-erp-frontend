"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const transactions = [
  {
    date: "10/11/2023",
    customer: "Customer A",
    type: "Sale",
    amount: "$250.00",
  },
  {
    date: "10/11/2023",
    customer: "Customer B",
    type: "Purchase",
    amount: "$80.00",
  },
  {
    date: "10/11/2023",
    customer: "Customer B",
    type: "Sale",
    amount: "$290.00",
  },
  {
    date: "10/11/2023",
    customer: "Customer A",
    type: "Purchase",
    amount: "$20.00",
  },
  {
    date: "10/11/2023",
    customer: "Customer",
    type: "Sale",
    amount: "$100.00",
  },
];

const stockAlerts = [
  "18k Diamond Rings - 3 units left",
  "24k Gold Chains - 5 units left",
  "18k Diamond Rings - 3 units left",
  "24k Gold Chains - 5 units left",
];

const savingSchemes = [
  { customer: "Customer A", percentage: 75 },
  { customer: "Customer B", percentage: 40 },
  { customer: "Customer C", percentage: 30 },
  { customer: "Customer D", percentage: 80 },
  { customer: "Customer E", percentage: 30 },
  { customer: "Customer F", percentage: 50 },
];

const chartData = [
  { month: "Jan", value: 45000 },
  { month: "Feb", value: 105000 },
  { month: "May", value: 98000 },
  { month: "Jun", value: 150000 },
  { month: "Jul", value: 135000 },
  { month: "Aug", value: 215000 },
  { month: "Sep", value: 215000 },
  { month: "Oct", value: 290000 },
  { month: "Nov", value: 285000 },
  { month: "Dec", value: 390000 },
];

const menuItems = [
  {
    label: "Dashboard",
    icon: "▦",
    href: "/pos",
  },
  {
    label: "Inventory",
    icon: "▱",
    href: "/pos",
    expandable: true,
  },
  {
    label: "Sales",
    icon: "🛒",
    href: "/pos/new-invoice",
    expandable: true,
  },
  {
    label: "Customers",
    icon: "♧",
    href: "/pos",
    expandable: true,
  },
  {
    label: "Reports",
    icon: "▥",
    href: "/pos/history",
    expandable: true,
  },
  {
    label: "Settings",
    icon: "⚙",
    href: "/pos",
  },
];

function formatCurrency(value) {
  return `$${(value / 1000).toFixed(0)}k`;
}

function ProgressRing({ percentage, customer }) {
  const radius = 31;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <div className="scheme-item">
      <div className="progress-ring">
        <svg viewBox="0 0 80 80">
          <circle
            className="progress-ring-bg"
            cx="40"
            cy="40"
            r={radius}
          />

          <circle
            className="progress-ring-value"
            cx="40"
            cy="40"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={progress}
          />
        </svg>

        <span>{percentage}%</span>
      </div>

      <p>
        {customer} - {percentage}%
      </p>
    </div>
  );
}

function SalesChart() {
  const width = 760;
  const height = 220;
  const paddingX = 45;
  const paddingY = 25;
  const maxValue = 400000;

  const points = chartData.map((item, index) => {
    const x =
      paddingX +
      (index / (chartData.length - 1)) *
        (width - paddingX * 2);

    const y =
      height -
      paddingY -
      (item.value / maxValue) *
        (height - paddingY * 2);

    return {
      ...item,
      x,
      y,
    };
  });

  const linePath = points
    .map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
    })
    .join(" ");

  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} ${height - paddingY}
    L ${points[0].x} ${height - paddingY}
    Z
  `;

  return (
    <div className="chart-wrapper">
      <svg
        className="sales-chart"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="goldAreaGradient"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#D4AF37"
              stopOpacity="0.55"
            />

            <stop
              offset="100%"
              stopColor="#D4AF37"
              stopOpacity="0.02"
            />
          </linearGradient>
        </defs>

        {[0, 100000, 200000, 300000, 400000].map(
          (value) => {
            const y =
              height -
              paddingY -
              (value / maxValue) *
                (height - paddingY * 2);

            return (
              <g key={value}>
                <line
                  x1={paddingX}
                  x2={width - paddingX}
                  y1={y}
                  y2={y}
                  className="chart-grid-line"
                />

                <text
                  x="0"
                  y={y + 4}
                  className="chart-axis-label"
                >
                  {formatCurrency(value)}
                </text>
              </g>
            );
          }
        )}

        <path
          d={areaPath}
          fill="url(#goldAreaGradient)"
        />

        <path
          d={linePath}
          className="chart-line"
        />

        {points.map((point, index) => (
          <g key={point.month}>
            {index === 5 && (
              <>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="7"
                  className="chart-highlight-outer"
                />

                <circle
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  className="chart-highlight-inner"
                />
              </>
            )}

            <text
              x={point.x}
              y={height - 2}
              textAnchor="middle"
              className="chart-month-label"
            >
              {point.month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function POSDashboardPage() {
  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

  const [search, setSearch] = useState("");

  const [selectedFilter, setSelectedFilter] =
    useState("All Items");

  const filteredTransactions = useMemo(() => {
    if (!search.trim()) {
      return transactions;
    }

    return transactions.filter((transaction) =>
      Object.values(transaction)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div className="brand-section">
          <div className="brand-logo">◇</div>

          <div>
            <h1>Luxray</h1>
            <p>Gold Jewellery ERP System</p>
          </div>
        </div>

        <nav className="sidebar-navigation">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`sidebar-menu-item ${
                activeMenu === item.label
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveMenu(item.label)
              }
            >
              <span className="menu-icon">
                {item.icon}
              </span>

              <span className="menu-label">
                {item.label}
              </span>

              {item.expandable && (
                <span className="menu-arrow">
                  ⌄
                </span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <h2>Dashboard</h2>

          <div className="header-actions">
            <div className="gold-rate-ticker">
              <span className="gold-icon">
                ◆
              </span>

              <span>Gold 22k:</span>

              <strong>$68.50/g</strong>
            </div>

            <button className="user-info-button">
              <span className="user-avatar">
                👤
              </span>

              <span>User Info</span>

              <span>⌄</span>
            </button>

            <div className="dashboard-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>
          </div>
        </header>

        <div className="dashboard-grid">
          <section className="dashboard-card sales-card">
            <div className="card-header">
              <h3>Total Sales Revenue</h3>

              <div className="card-header-actions">
                <select
                  value={selectedFilter}
                  onChange={(event) =>
                    setSelectedFilter(
                      event.target.value
                    )
                  }
                >
                  <option>All Items</option>
                  <option>Gold</option>
                  <option>Diamond</option>
                  <option>Silver</option>
                </select>

                <button className="more-button">
                  •••
                </button>
              </div>
            </div>

            <SalesChart />
          </section>

          <section className="dashboard-card stock-card">
            <div className="card-header">
              <h3>Current Stock Alerts</h3>

              <button className="more-button">
                •••
              </button>
            </div>

            <div className="stock-alert-list">
              {stockAlerts.map((alert, index) => (
                <div
                  className="stock-alert"
                  key={`${alert}-${index}`}
                >
                  <span className="warning-icon">
                    ▲
                  </span>

                  <span>{alert}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-card transactions-card">
            <div className="card-header">
              <h3>Recent Transaction Logs</h3>

              <button className="more-button">
                •••
              </button>
            </div>

            <div className="transaction-table-wrapper">
              <table className="transaction-table">
                <thead>
                  <tr>
                    <th>
                      Date <span>⌄</span>
                    </th>

                    <th>Customer</th>

                    <th>Type</th>

                    <th>Amount</th>

                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTransactions.map(
                    (transaction, index) => (
                      <tr
                        key={`${transaction.date}-${index}`}
                      >
                        <td>
                          {transaction.date}
                        </td>

                        <td>
                          {transaction.customer}
                        </td>

                        <td>{transaction.type}</td>

                        <td>{transaction.amount}</td>

                        <td>
                          <span className="status-badge">
                            Indicator
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="dashboard-card schemes-card">
            <div className="card-header">
              <h3>
                Customer Saving Scheme Progress
                Meters
              </h3>

              <button className="more-button">
                •••
              </button>
            </div>

            <div className="scheme-grid">
              {savingSchemes.map((scheme) => (
                <ProgressRing
                  key={scheme.customer}
                  percentage={scheme.percentage}
                  customer={scheme.customer}
                />
              ))}
            </div>
          </section>
        </div>
      </section>

      <style jsx>{`
        .dashboard-page {
          min-height: 100vh;
          display: flex;
          color: #f3f0e8;
          background:
            radial-gradient(
              circle at 25% 20%,
              rgba(212, 175, 55, 0.14),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #11110f 0%,
              #171715 50%,
              #0c0c0c 100%
            );
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .dashboard-sidebar {
          width: 230px;
          min-height: 100vh;
          flex-shrink: 0;
          padding: 28px 14px;
          border-right: 1px solid
            rgba(212, 175, 55, 0.12);
          background:
            linear-gradient(
              180deg,
              rgba(56, 47, 24, 0.92),
              rgba(21, 21, 20, 0.98) 45%
            );
        }

        .brand-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 10px 30px;
        }

        .brand-logo {
          color: #e4c65a;
          font-size: 40px;
          line-height: 1;
        }

        .brand-section h1 {
          margin: 0;
          font-size: 21px;
          font-weight: 700;
        }

        .brand-section p {
          margin: 2px 0 0;
          color: #aaa69b;
          font-size: 10px;
        }

        .sidebar-navigation {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .sidebar-menu-item {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 13px;
          border: 1px solid transparent;
          border-radius: 7px;
          color: #e4e0d6;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .sidebar-menu-item:hover,
        .sidebar-menu-item.active {
          color: #f4dc7b;
          border-color: rgba(
            212,
            175,
            55,
            0.48
          );
          background:
            linear-gradient(
              90deg,
              rgba(212, 175, 55, 0.2),
              rgba(212, 175, 55, 0.07)
            );
        }

        .menu-icon {
          width: 25px;
          color: #dfbd4b;
          font-size: 22px;
          text-align: center;
        }

        .menu-label {
          flex: 1;
          font-size: 15px;
        }

        .menu-arrow {
          color: #cdbd80;
          font-size: 17px;
        }

        .dashboard-content {
          min-width: 0;
          flex: 1;
          padding: 25px 22px;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
        }

        .dashboard-header h2 {
          margin: 0;
          font-size: 21px;
          font-weight: 650;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gold-rate-ticker,
        .user-info-button,
        .dashboard-search {
          height: 34px;
          display: flex;
          align-items: center;
          border: 1px solid
            rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(28, 28, 28, 0.85);
          color: #d8d4c9;
        }

        .gold-rate-ticker {
          gap: 6px;
          padding: 0 13px;
          color: #dfc363;
          font-size: 12px;
        }

        .gold-rate-ticker strong {
          color: #f2eee4;
          font-weight: 600;
        }

        .gold-icon {
          color: #d4af37;
        }

        .user-info-button {
          gap: 8px;
          padding: 0 11px;
          color: #ddd9d0;
          cursor: pointer;
        }

        .user-avatar {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #7b8585;
          font-size: 11px;
        }

        .dashboard-search {
          width: 205px;
          gap: 8px;
          padding: 0 11px;
        }

        .dashboard-search span {
          color: #89857d;
          font-size: 20px;
        }

        .dashboard-search input {
          width: 100%;
          border: 0;
          outline: 0;
          color: #e9e5dc;
          background: transparent;
        }

        .dashboard-search input::placeholder {
          color: #77746f;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1.55fr)
            minmax(300px, 0.95fr);
          gap: 18px;
        }

        .dashboard-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid
            rgba(255, 255, 255, 0.15);
          border-radius: 13px;
          background:
            linear-gradient(
              145deg,
              rgba(39, 39, 37, 0.82),
              rgba(20, 20, 20, 0.92)
            );
          box-shadow:
            inset 0 1px 0
              rgba(255, 255, 255, 0.03),
            0 14px 35px
              rgba(0, 0, 0, 0.18);
        }

        .card-header {
          min-height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 15px;
        }

        .card-header h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
        }

        .card-header-actions {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .card-header select {
          padding: 7px 10px;
          border: 1px solid
            rgba(255, 255, 255, 0.12);
          border-radius: 7px;
          outline: none;
          color: #d9d5cc;
          background: #202020;
          font-size: 11px;
        }

        .more-button {
          border: 0;
          color: #aaa69d;
          background: transparent;
          cursor: pointer;
          letter-spacing: 2px;
        }

        .sales-card,
        .stock-card {
          min-height: 245px;
        }

        .chart-wrapper {
          height: 190px;
          padding: 0 13px 10px;
        }

        .sales-chart {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .chart-grid-line {
          stroke: rgba(255, 255, 255, 0.11);
          stroke-width: 1;
        }

        .chart-axis-label,
        .chart-month-label {
          fill: #aaa69e;
          font-size: 11px;
        }

        .chart-line {
          fill: none;
          stroke: #d4af37;
          stroke-width: 3;
          stroke-linejoin: round;
          stroke-linecap: round;
        }

        .chart-highlight-outer {
          fill: rgba(212, 175, 55, 0.25);
          stroke: rgba(212, 175, 55, 0.3);
          stroke-width: 5;
        }

        .chart-highlight-inner {
          fill: #f3e8c4;
          stroke: #d4af37;
          stroke-width: 2;
        }

        .stock-alert-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 0 15px 15px;
        }

        .stock-alert {
          min-height: 37px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 10px;
          border: 1px solid
            rgba(212, 175, 55, 0.22);
          border-radius: 8px;
          color: #eadcae;
          background: rgba(86, 75, 38, 0.55);
          font-size: 13px;
        }

        .warning-icon {
          color: #eac84d;
          font-size: 16px;
        }

        .transactions-card,
        .schemes-card {
          min-height: 275px;
        }

        .transaction-table-wrapper {
          overflow-x: auto;
        }

        .transaction-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .transaction-table th {
          padding: 10px 15px;
          color: #ddd8ce;
          background: rgba(255, 255, 255, 0.08);
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
        }

        .transaction-table td {
          padding: 10px 15px;
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.1);
          color: #e2ded5;
          white-space: nowrap;
        }

        .transaction-table tbody tr:last-child td {
          border-bottom: 0;
        }

        .status-badge {
          display: inline-flex;
          padding: 4px 10px;
          border-radius: 12px;
          color: #dfc35b;
          background: rgba(127, 103, 36, 0.42);
          font-size: 11px;
        }

        .scheme-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px 8px;
          padding: 3px 15px 15px;
        }

        .scheme-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .progress-ring {
          position: relative;
          width: 74px;
          height: 74px;
        }

        .progress-ring svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .progress-ring-bg,
        .progress-ring-value {
          fill: none;
          stroke-width: 7;
        }

        .progress-ring-bg {
          stroke: rgba(255, 255, 255, 0.13);
        }

        .progress-ring-value {
          stroke: #d4af37;
          stroke-linecap: round;
        }

        .progress-ring span {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #f3efe5;
          font-size: 14px;
          font-weight: 600;
        }

        .scheme-item p {
          margin: 0;
          color: #e3dfd6;
          font-size: 10px;
          text-align: center;
        }

        @media (max-width: 1100px) {
          .dashboard-sidebar {
            width: 200px;
          }

          .dashboard-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .header-actions {
            width: 100%;
          }

          .dashboard-search {
            flex: 1;
          }
        }

        @media (max-width: 850px) {
          .dashboard-page {
            flex-direction: column;
          }

          .dashboard-sidebar {
            width: 100%;
            min-height: auto;
            padding: 15px;
          }

          .brand-section {
            padding-bottom: 15px;
          }

          .sidebar-navigation {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .dashboard-content {
            padding: 15px;
          }

          .header-actions {
            flex-wrap: wrap;
          }

          .gold-rate-ticker,
          .user-info-button {
            flex: 1;
          }

          .dashboard-search {
            flex-basis: 100%;
          }

          .sidebar-navigation {
            grid-template-columns: repeat(2, 1fr);
          }

          .scheme-grid {
            gap: 15px 4px;
          }
        }
      `}</style>
    </main>
  );
}