"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const pages = {
  orders: { title: "Purchase Orders", eyebrow: "Purchase / Orders", action: "Create purchase order", columns: ["PO number", "Supplier", "Metal / items", "Expected", "Amount", "Status"] },
  entry: { title: "Purchase Entry", eyebrow: "Purchase / Entry", action: "Add purchase entry", columns: ["Entry no.", "Supplier", "Gross weight", "Purity", "Amount", "Status"] },
  invoice: { title: "Purchase Invoice", eyebrow: "Purchase / Invoice", action: "Create invoice", columns: ["Invoice no.", "Supplier", "GSTIN", "Due date", "Amount", "Status"] },
  receipt: { title: "Goods Receipt", eyebrow: "Purchase / Goods Receipt", action: "Receive goods", columns: ["GRN", "Purchase order", "Supplier", "Items received", "Received on", "Status"] },
  returns: { title: "Purchase Return", eyebrow: "Purchase / Return", action: "Create return", columns: ["Return no.", "Supplier", "Reason", "Weight / items", "Amount", "Status"] },
  payment: { title: "Supplier Payment", eyebrow: "Purchase / Payment", action: "Record payment", columns: ["Payment ref.", "Supplier", "Method", "Paid on", "Amount", "Status"] },
  analytics: { title: "Purchase Analytics", eyebrow: "Purchase / Analytics", action: "Export analytics", columns: ["Supplier", "Orders", "Purchased wt.", "Average rate", "Spend", "Trend"] },
  reports: { title: "Purchase Reports", eyebrow: "Purchase / Reports", action: "Download report", columns: ["Report", "Period", "Prepared by", "Created", "Format", "Action"] },
};

const navigation = [
  ["orders", "Orders"], ["entry", "Entry"], ["invoice", "Invoice"], ["receipt", "Goods Receipt"],
  ["returns", "Returns"], ["payment", "Payments"], ["analytics", "Analytics"], ["reports", "Reports"],
];

const records = [
  ["PO-2026-0184", "Shree Gold Suppliers", "22K Gold - 245.60 g", "26 Jul 2026", "₹17,58,040", "Pending"],
  ["PO-2026-0183", "Aurum Diamonds", "Diamond lots - 32 pcs", "25 Jul 2026", "₹8,42,000", "Approved"],
  ["PO-2026-0182", "Raj Silver House", "Silver - 18.25 kg", "24 Jul 2026", "₹16,42,500", "Received"],
  ["PO-2026-0181", "Kalyan Gems", "Gemstones - 14 pcs", "23 Jul 2026", "₹3,88,250", "Received"],
];

export default function PurchaseWorkspace({ section }) {
  const config = pages[section];
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => records.filter((record) => {
    const match = record.join(" ").toLowerCase().includes(query.toLowerCase());
    return match && (filter === "All" || record[5] === filter);
  }), [query, filter]);

  const handleAction = () => setNotice(`${config.action} started. Connect this screen to your API to save it.`);

  return (
    <main className="purchase-page">
      <header className="topbar">
        <div className="brand"><span>◇</span><div><b>LUXRAY</b><small>Gold Jewellery ERP</small></div></div>
        <div className="rate"><i /> 22K Gold <strong>₹7,168/g</strong><em>Live</em></div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <p>PROCUREMENT</p>
          {navigation.map(([key, label]) => (
            <Link key={key} href={`/purchase/${key === "orders" ? "purchase-order" : key === "entry" ? "purchase-entry" : key === "invoice" ? "purchase-invoice" : key === "receipt" ? "goods-receipt" : key === "returns" ? "purchase-return" : key === "payment" ? "supplier-payment" : `purchase-${key}`}`} className={section === key ? "nav active" : "nav"}>{label}</Link>
          ))}
        </aside>

        <section className="content">
          <p className="eyebrow">{config.eyebrow}</p>
          <div className="title-row"><div><h1>{config.title}</h1><p>Manage your jewellery procurement with complete supplier and metal traceability.</p></div><button className="gold-button" onClick={handleAction}>+ {config.action}</button></div>
          {notice && <div className="notice"><span>✓</span>{notice}<button onClick={() => setNotice("")}>×</button></div>}

          <div className="metrics">
            <Metric label="Purchase this month" value="₹46.31L" change="+12.8%" />
            <Metric label="Open orders" value="18" change="6 due this week" />
            <Metric label="Metal received" value="8.54 kg" change="Across 12 suppliers" />
            <Metric label="Outstanding payable" value="₹12.64L" change="Due within 7 days" />
          </div>

          <section className="panel">
            <div className="panel-head"><div><h2>{section === "analytics" ? "Supplier performance" : section === "reports" ? "Available reports" : "Recent records"}</h2><span>{filtered.length} records</span></div><div className="controls"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search supplier, reference..." /><select value={filter} onChange={(event) => setFilter(event.target.value)}><option>All</option><option>Pending</option><option>Approved</option><option>Received</option></select></div></div>
            <div className="table-wrap"><table><thead><tr>{config.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{filtered.map((record) => <tr key={record[0]}>{record.map((value, index) => <td key={`${record[0]}-${index}`}>{index === 5 ? <span className={`status ${value.toLowerCase()}`}>{section === "reports" ? "View report" : value}</span> : value}</td>)}</tr>)}{filtered.length === 0 && <tr><td className="empty" colSpan={config.columns.length}>No records match your search.</td></tr>}</tbody></table></div>
          </section>
        </section>
      </div>

      <style jsx>{`
        .purchase-page{min-height:100vh;background:radial-gradient(circle at 82% 0,rgba(212,175,55,.12),transparent 28%),#121212;color:#fff;font-family:Arial,Helvetica,sans-serif}.topbar{height:68px;padding:0 30px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(18,18,18,.92)}.brand{display:flex;align-items:center;gap:10px;color:#d4af37}.brand>span{font-size:31px}.brand b,.brand small{display:block;letter-spacing:.08em}.brand b{font-size:14px}.brand small{margin-top:3px;color:#a0a0a0;font-size:9px}.rate{display:flex;align-items:center;gap:8px;padding:9px 12px;border:1px solid rgba(212,175,55,.35);border-radius:8px;color:#d4af37;font-size:12px}.rate i{width:7px;height:7px;border-radius:50%;background:#6dd39b;box-shadow:0 0 0 4px rgba(109,211,155,.12)}.rate strong{color:#fff}.rate em{font-style:normal;color:#6dd39b;font-size:10px}.workspace{display:flex;min-height:calc(100vh - 69px)}.sidebar{width:210px;flex:none;padding:28px 13px;border-right:1px solid rgba(255,255,255,.08);background:#171717}.sidebar>p{margin:0 11px 12px;color:#777;font-size:10px;font-weight:700;letter-spacing:.12em}.nav{display:block;margin:4px 0;padding:11px 13px;border:1px solid transparent;border-radius:7px;color:#aaa;text-decoration:none;font-size:13px}.nav:hover,.nav.active{border-color:rgba(212,175,55,.35);background:rgba(212,175,55,.12);color:#f2d975}.content{min-width:0;flex:1;padding:32px}.eyebrow{margin:0 0 8px;color:#a0a0a0;font-size:12px}.title-row{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:28px}.title-row h1{margin:0 0 7px;font-size:28px}.title-row p{margin:0;color:#a0a0a0;font-size:13px}.gold-button{border:0;border-radius:8px;padding:12px 16px;background:#d4af37;color:#17130a;font-weight:700;cursor:pointer;white-space:nowrap}.notice{display:flex;align-items:center;gap:10px;margin:-10px 0 20px;padding:12px 14px;border:1px solid rgba(109,211,155,.35);border-radius:8px;background:rgba(109,211,155,.08);color:#c8ead6;font-size:13px}.notice span{color:#6dd39b}.notice button{margin-left:auto;border:0;background:transparent;color:#c8ead6;font-size:19px;cursor:pointer}.metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-bottom:20px}.panel,.metric{border:1px solid rgba(255,255,255,.1);border-radius:12px;background:linear-gradient(145deg,#222,#1b1b1b);box-shadow:0 16px 30px rgba(0,0,0,.14)}.metric{padding:17px}.metric span,.metric small{display:block;color:#a0a0a0;font-size:11px}.metric strong{display:block;margin:9px 0 5px;color:#fff;font-size:21px}.metric small{color:#d4af37}.panel{overflow:hidden}.panel-head{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:19px 20px;border-bottom:1px solid rgba(255,255,255,.08)}.panel-head h2{margin:0 0 4px;font-size:16px}.panel-head>div>span{color:#a0a0a0;font-size:11px}.controls{display:flex;gap:8px}.controls input,.controls select{height:35px;border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:0 10px;outline:0;color:#eee;background:#141414;font-size:12px}.controls input{width:210px}.table-wrap{overflow:auto}table{width:100%;min-width:760px;border-collapse:collapse}th{padding:12px 18px;background:rgba(255,255,255,.035);color:#a0a0a0;font-size:10px;font-weight:600;text-align:left;text-transform:uppercase;letter-spacing:.05em}td{padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.07);color:#e4e0d6;font-size:12px}tbody tr:hover{background:rgba(212,175,55,.08)}.status{display:inline-block;padding:5px 8px;border-radius:14px;background:rgba(212,175,55,.13);color:#ebcf6a;font-size:10px}.status.received{background:rgba(109,211,155,.12);color:#8ae0ac}.empty{text-align:center;color:#a0a0a0}@media(max-width:1050px){.metrics{grid-template-columns:repeat(2,1fr)}}@media(max-width:700px){.topbar{padding:0 16px}.rate{display:none}.sidebar{display:none}.content{padding:20px 15px}.title-row{flex-direction:column}.metrics{grid-template-columns:1fr}.panel-head{align-items:stretch;flex-direction:column}.controls input{width:100%}.controls{display:grid;grid-template-columns:1fr 110px}}
      `}</style>
    </main>
  );
}

function Metric({ label, value, change }) {
  return <article className="metric"><span>{label}</span><strong>{value}</strong><small>{change}</small></article>;
}
