<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LedgerGrid — AI-Powered Invoice Matching</title>
<meta name="description" content="LedgerGrid: Automated 3-way invoice matching, FX risk mitigation and cross-border processing for enterprise finance teams.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--white:#ffffff;--bg:#f8fafc;--border:#e2e8f0;--text:#0f172a;--text2:#475569;--text3:#94a3b8;--blue:#1d4ed8;--blue-light:#dbeafe;--blue-dark:#1e40af;--green:#059669;--green-light:#d1fae5;--red:#dc2626;--red-light:#fee2e2;--purple:#7c3aed;--purple-light:#ede9fe;--shadow:0 1px 3px rgba(0,0,0,.06),0 4px 12px rgba(0,0,0,.04);--shadow-lg:0 8px 30px rgba(0,0,0,.1)}
body{font-family:Inter,system-ui,sans-serif;background:var(--white);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased}
.c{max-width:1120px;margin:0 auto;padding:0 40px}
header{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.hdr{display:flex;justify-content:space-between;align-items:center;height:68px}
.logo{display:flex;align-items:center;gap:14px;font-weight:800;font-size:1rem;color:var(--text);text-decoration:none}
.logo-icon{width:42px;height:42px;background:linear-gradient(135deg,#1d4ed8,#1e40af);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:.95rem;box-shadow:0 4px 14px rgba(29,78,216,.4)}
.logo-name{font-weight:800;font-size:1.1rem;color:var(--text);line-height:1.1}
.logo-sub{font-size:.6rem;color:var(--text3);font-weight:500}
.nav{display:flex;gap:32px;align-items:center}
.nav a{color:var(--text2);text-decoration:none;font-size:.875rem;font-weight:500;transition:color .2s}
.nav a:hover{color:var(--blue)}
.cta-blue{background:var(--blue);color:#fff!important;padding:10px 22px;border-radius:10px;font-weight:600;font-size:.875rem!important;transition:all .2s;box-shadow:0 2px 10px rgba(29,78,216,.3);text-decoration:none}
.cta-blue:hover{background:var(--blue-dark);transform:translateY(-1px)}
.hero{position:relative;padding:115px 0 105px;overflow:hidden;background:linear-gradient(180deg,#fff 0%,var(--bg) 100%)}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% -5%,rgba(29,78,216,.1) 0%,transparent 65%);pointer-events:none}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:50px;background:linear-gradient(to top,var(--bg),transparent);pointer-events:none}
.hero-inner{max-width:730px;margin:0 auto;text-align:center;position:relative;z-index:1}
.badge{display:inline-flex;align-items:center;gap:7px;padding:7px 16px;background:var(--blue-light);border:1.5px solid rgba(29,78,216,.2);border-radius:100px;font-size:.7rem;font-weight:700;color:var(--blue);margin-bottom:36px}
.hero h1{font-size:clamp(2.3rem,5.5vw,3.1rem);font-weight:800;line-height:1.1;letter-spacing:-.04em;margin-bottom:24px}
.hero h1 span{background:linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero p{font-size:1.15rem;color:var(--text2);max-width:560px;margin:0 auto 44px;line-height:1.75}
.btn-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:9px;padding:15px 30px;border-radius:12px;font-size:.9rem;font-weight:700;text-decoration:none;transition:all .2s;border:none;cursor:pointer}
.btn-blue{background:var(--blue);color:#fff;box-shadow:0 4px 16px rgba(29,78,216,.35)}
.btn-blue:hover{background:var(--blue-dark);transform:translateY(-2px);box-shadow:0 8px 24px rgba(29,78,216,.45)}
.btn-white{background:var(--white);color:var(--text);border:1.5px solid var(--border);box-shadow:var(--shadow)}
.btn-white:hover{border-color:var(--blue);color:var(--blue);box-shadow:0 4px 16px rgba(29,78,216,.12)}
.stats{margin-top:56px;display:flex;justify-content:center;gap:16px;flex-wrap:wrap}
.stat{background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px 30px;text-align:center;min-width:145px;box-shadow:var(--shadow-lg);transition:transform .25s}
.stat:hover{transform:translateY(-4px)}
.stat-num{font-size:1.8rem;font-weight:800;color:var(--blue);display:block;line-height:1}
.stat-label{font-size:.65rem;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:.8px;margin-top:8px;display:block}
.s{padding:90px 0}
.s+.s{border-top:1px solid var(--border)}
.eyebrow{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:var(--blue);margin-bottom:14px}
.section-title{font-size:clamp(1.7rem,2.8vw,2.2rem);font-weight:800;letter-spacing:-.025em;color:var(--text);margin-bottom:16px;line-height:1.15}
.section-desc{font-size:1rem;color:var(--text2);max-width:560px;line-height:1.7}
.grid-2{display:grid;grid-template-columns:1.15fr 1fr;gap:60px;align-items:center;margin-top:44px}
.about-text p{font-size:1.05rem;color:var(--text2);line-height:1.8;margin-bottom:28px}
.tags{display:flex;gap:10px;flex-wrap:wrap}
.tag{padding:8px 16px;border-radius:10px;font-size:.8rem;font-weight:700;border:1px solid}
.tag-green{background:var(--green-light);color:var(--green);border-color:#6ee7b7}
.tag-blue{background:var(--blue-light);color:var(--blue);border-color:#bfdbfe}
.tag-purple{background:var(--purple-light);color:var(--purple);border-color:#ddd6fe}
.visual-box{background:linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%);border-radius:24px;padding:42px;border:1px solid #bfdbfe;box-shadow:var(--shadow-lg)}
.icon-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.icon-box{background:#fff;border-radius:14px;padding:26px 16px;text-align:center;border:1px solid var(--border);transition:all .25s}
.icon-box:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.icon-circle{width:50px;height:50px;background:var(--blue-light);border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.4rem}
.icon-label{font-size:.78rem;font-weight:600;color:var(--text2);line-height:1.35}
.section-bg{background:var(--bg)}
.section-center{text-align:center;margin-bottom:52px}
.section-center .section-desc{margin:0 auto}
.wf-card{overflow-x:auto;margin-top:40px;border-radius:18px;border:1px solid var(--border);box-shadow:var(--shadow-lg);background:#fff}
table{width:100%;border-collapse:collapse}
th,td{padding:18px 22px;text-align:left;border-bottom:1px solid var(--border);font-size:.88rem;vertical-align:middle}
th{background:linear-gradient(135deg,#1d4ed8,#1e40af);color:#fff;font-weight:700;text-transform:uppercase;font-size:.6rem;letter-spacing:1.8px}
tr:last-child td{border-bottom:none}
tr:hover td{background:#f8fafc}
td strong{color:var(--blue);font-weight:700}
.step-badge{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;background:var(--blue);color:#fff;border-radius:50%;font-size:.75rem;font-weight:800;margin-right:12px}
.badge-pill{display:inline-block;padding:4px 12px;border-radius:100px;font-size:.7rem;font-weight:700}
.green-pill{background:var(--green-light);color:var(--green);border:1px solid #6ee7b7}
.blue-pill{background:var(--blue-light);color:var(--blue);border:1px solid #bfdbfe}
.note{margin-top:22px;padding:18px 22px;background:#fff;border-left:4px solid var(--blue);border-radius:0 12px 12px 0;box-shadow:var(--shadow);font-size:.85rem;color:var(--text3);line-height:1.65}
.sim-box{background:linear-gradient(145deg,#eff6ff 0%,#f0f4ff 100%);border:2px solid rgba(29,78,216,.12);border-radius:22px;padding:46px;margin-top:44px;box-shadow:var(--shadow-lg)}
.sim-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:30px;gap:16px}
.sim-hdr h3{font-size:1.2rem;font-weight:800}
.sim-badge{background:var(--blue);color:#fff;padding:6px 14px;border-radius:100px;font-size:.72rem;font-weight:700}
.log{background:#0f172a;border-radius:14px;padding:20px;font-family:'Courier New',monospace;font-size:.8rem;color:#4ade80;min-height:140px;max-height:210px;overflow-y:auto;margin-bottom:22px;box-shadow:inset 0 2px 10px rgba(0,0,0,.35)}
.log-entry{margin-bottom:8px;display:flex;align-items:flex-start;gap:8px}
.log-ok{color:#4ade80;font-weight:700}
.log-err{color:#f87171;font-weight:700}
.log-warn{color:#fbbf24;font-weight:700}
.log-info{color:#60a5fa}
.log-pending{color:#94a3b8}
.log-s{font-size:.62rem;font-weight:800;padding:2px 8px;border-radius:4px;margin-right:6px;display:inline-block;background:#1d4ed8;color:#fff}
.btn-row-sim{display:flex;gap:12px;flex-wrap:wrap}
.sim-btn{background:var(--blue);color:#fff;padding:13px 26px;border:none;border-radius:11px;font-weight:700;font-size:.875rem;cursor:pointer;transition:all .2s;box-shadow:0 2px 10px rgba(29,78,216,.3)}
.sim-btn:hover{background:var(--blue-dark);transform:translateY(-2px)}
.sim-btn:disabled{opacity:.5;cursor:not-allowed;transform:none}
.sim-btn-alt{background:#fff;color:var(--text);border:1.5px solid var(--border);box-shadow:var(--shadow)}
.sim-btn-alt:hover{border-color:var(--blue);color:var(--blue)}
.overlay{position:fixed;inset:0;background:rgba(15,23,42,.65);display:flex;align-items:center;justify-content:center;z-index:1000;padding:24px;backdrop-filter:blur(5px)}
.modal{background:#fff;border-radius:22px;max-width:540px;width:100%;padding:40px;box-shadow:0 24px 60px rgba(0,0,0,.25)}
.modal-title{font-size:1.25rem;font-weight:800;color:var(--red);margin-bottom:10px;display:flex;align-items:center;gap:10px}
.modal-sub{font-size:.92rem;color:var(--text2);margin-bottom:26px;line-height:1.7}
.dispute-box{background:var(--red-light);border:1px solid #fca5a5;border-radius:14px;padding:20px;margin-bottom:26px}
.dispute-box h4{font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:var(--red);margin-bottom:16px}
.row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(220,38,38,.1)}
.row:last-child{border-bottom:none}
.row span:first-child{color:var(--text2);font-size:.85rem}
.row span:last-child{font-weight:700;font-size:.88rem}
.row .strike{color:var(--red);text-decoration:line-through;font-weight:500}
.action-row{display:flex;gap:12px;flex-wrap:wrap}
.action-btn{flex:1;min-width:185px;padding:14px 22px;border-radius:12px;font-weight:700;font-size:.9rem;cursor:pointer;border:none;transition:all .2s}
.action-green{background:var(--green);color:#fff;box-shadow:0 2px 10px rgba(5,150,105,.35)}
.action-green:hover{background:#047857;transform:translateY(-2px)}
.action-red{background:#fff;color:var(--red);border:2px solid var(--red)}
.action-red:hover{background:var(--red-light)}
.json-out{background:#0f172a;border-radius:14px;padding:22px;margin-top:20px;overflow-x:auto;box-shadow:inset 0 2px 10px rgba(0,0,0,.35)}
.json-out pre{font-family:'CourierNew',monospace;font-size:.76rem;color:#4ade80;margin:0;white-space:pre-wrap;word-break:break-all}
.json-label{font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:#4ade80;margin-bottom:10px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:44px}
.card{background:#fff;border:1px solid var(--border);border-radius:18px;padding:32px;transition:all .3s;box-shadow:var(--shadow)}
.card:hover{border-color:rgba(29,78,216,.3);box-shadow:var(--shadow-lg);transform:translateY(-5px)}
.card-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:18px;box-shadow:0 3px 10px rgba(0,0,0,.07)}
.card-icon.blue{background:var(--blue-light)}
.card-icon.green{background:var(--green-light)}
.card-icon.purple{background:var(--purple-light)}
.card h3{font-size:1.1rem;font-weight:800;color:var(--text);margin-bottom:12px}
.card p{font-size:.9rem;color:var(--text2);line-height:1.7}
.cta-full{background:linear-gradient(135deg,#1d4ed8 0%,#1e40af 50%,#312e81 100%);color:#fff;text-align:center;padding:100px 0;position:relative;overflow:hidden}
.cta-full::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(124,58,237,.15) 0%,transparent 70%);pointer-events:none}
.cta-full h2{font-size:clamp(1.7rem,3.5vw,2.3rem);font-weight:800;margin-bottom:14px;letter-spacing:-.02em;position:relative}
.cta-full p{opacity:.85;margin-bottom:36px;font-size:1.05rem;position:relative}
.cta-btn{background:#fff;color:var(--blue);padding:16px 32px;border-radius:12px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:10px;transition:all .25s;font-size:.95rem;position:relative}
.cta-btn:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.2)}
footer{padding:32px 0;border-top:1px solid var(--border);text-align:center}
footer p{color:var(--text3);font-size:.82rem}
footer a{color:var(--blue);text-decoration:none;font-weight:600}
footer a:hover{text-decoration:underline}
@media(max-width:768px){.hdr{flex-direction:column;height:auto;padding:16px 0;gap:14px}.grid-2,.grid-3{grid-template-columns:1fr}.nav{gap:20px}.stats{gap:12px}.stat{min-width:120px}.hero{padding:70px 0 60px}.s{padding:60px 0}}
@media(max-width:520px){.grid-3{grid-template-columns:1fr}.btn-row{flex-direction:column;align-items:center}.btn{width:100%;justify-content:center}.nav{gap:14px}.nav a{font-size:.8rem}}

</style>
</head>

<header>
<div class="c hdr">
<a href="#" class="logo">
<div class="logo-icon">LG</div>
<div class="logo-text">
<div class="logo-name">LedgerGrid</div>
<div class="logo-sub">AI Invoice Matching</div>
</div>
</a>
<nav class="nav">
<a href="#about">About</a>
<a href="#workflow">Workflow</a>
<a href="#demo">Live Demo</a>
<a href="#features">Features</a>
<a href="#contact" class="cta-blue">Get Started</a>
</nav>
</div>
</header>

<section class="hero">
<div class="c hero-inner">
<div class="badge">Powered by OpenClaw AI Engine</div>
<h1>AI-Powered <span>Invoice Matching</span> for Enterprise</h1>
<p>Automated 3-way matching, FX risk mitigation, and cross-border processing. Eliminate manual reconciliation and close books 80% faster.</p>
<div class="btn-row">
<a href="#demo" class="btn btn-blue">Try Live Demo</a>
<a href="#workflow" class="btn btn-white">See How It Works</a>
</div>
<div class="stats">
<div class="stat"><div class="stat-num">97.3%</div><div class="stat-label">Auto-Match Rate</div></div>
<div class="stat"><div class="stat-num">80%</div><div class="stat-label">Faster Close</div></div>
<div class="stat"><div class="stat-num">140+</div><div class="stat-label">Currencies</div></div>
<div class="stat"><div class="stat-num">100%</div><div class="stat-label">Audit Trail</div></div>
</div>
</div>
</section>

<section id="about" class="s">
<div class="c grid-2">
<div class="about-text">
<p class="eyebrow">About LedgerGrid</p>
<h2 class="section-title">Intelligent invoice reconciliation that learns from your exceptions</h2>
<p>LedgerGrid replaces spreadsheet-based reconciliation with an AI engine that automatically matches invoices to purchase orders and receipts, handles currency fluctuations, and escalates only the exceptions that need human attention.</p>
<div class="tags">
<span class="tag tag-green">AI-Powered</span>
<span class="tag tag-blue">3-Way Match</span>
<span class="tag tag-purple">Multi-Currency</span>
</div>
</div>
<div class="visual-box">
<div class="icon-grid">
<div class="icon-box">
<div class="icon-circle">&#128269;</div>
<div class="icon-label">AI Engine</div>
</div>
<div class="icon-box">
<div class="icon-circle">&#128200;</div>
<div class="icon-label">FX Tracking</div>
</div>
<div class="icon-box">
<div class="icon-circle">&#128274;</div>
<div class="icon-label">Secure</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="workflow" class="s section-bg">
<div class="c section-center">
<p class="eyebrow">Workflow</p>
<h2 class="section-title">From raw data to matched records in seconds</h2>
<p class="section-desc">LedgerGrid processes invoices through a fully automated pipeline with human-in-the-loop oversight at every stage that requires judgment.</p>
</div>
<div class="c">
<div class="wf-card">
<table>
<thead>
<tr>
<th style="width:44px">Step</th>
<th>Stage</th>
<th>Action</th>
<th>Automated</th>
<th>HITL</th>
</tr>
</thead>
<tbody>

<thead>
<tr><th>Step</th><th>Trigger / Input</th><th>Action</th><th>Output</th><th>HITL</th></tr>
</thead>
<tbody>
<tr><td><span class="step-num">1</span><strong>Parse</strong></td><td>Invoice received at ingestion endpoint</td><td>AI: Document parsing via OpenClaw</td><td>Structured text matrix extracted</td><td><span class="badge no">No</span></td></tr>
<tr><td><span class="step-num">2</span><strong>Match</strong></td><td>Structured data matrix</td><td>AI: Semantic line-item matching</td><td>Line items aligned to SKUs</td><td><span class="badge no">No</span></td></tr>
<tr><td><span class="step-num">3</span><strong>Verify</strong></td><td>Aligned line items + Purchase Order</td><td>AI: 3-Way Match (Price / FX)</td><td>Matching status report</td><td><span class="badge no">No</span></td></tr>
<tr><td><span class="step-num">4</span><strong>Review</strong></td><td>Status reads Exception</td><td>Human: Controller discrepancy review</td><td>Override or dispute initiated</td><td><span class="badge yes">Yes</span></td></tr>
<tr><td><span class="step-num">5</span><strong>Format</strong></td><td>Validated transaction payload</td><td>AI: Formatting and compliance check</td><td>Verified JSON schema for ERP</td><td><span class="badge no">No</span></td></tr>
<tr><td><span class="step-num">6</span><strong>Release</strong></td><td>Verified ERP payload</td><td>Human: Senior Controller payment release</td><td>Final ledger update or dispute logged</td><td><span class="badge yes">Yes</span></td></tr>
</tbody>

</tbody>
</table>
</div>
<p class="note">All exceptions are flagged in real time. HITL tasks are assigned to the designated approver and tracked in the audit log with full reasoning.</p>
</div>
</section>

<section id="demo" class="s">
<div class="c">
<p class="eyebrow">Live Prototype</p>
<h2 class="section-title">See it in action — no sign-up required</h2>
<p class="section-desc">Ingest a sample invoice and watch LedgerGrid match it line-by-line against the PO and receipt.</p>
</div>
<div class="c">
<div class="sim-box">
<div class="sim-hdr">
<h3>Live Prototype Simulator</h3>
<span class="sim-badge">Interactive</span>
</div>
<div id="log" class="log"></div>
<div class="btn-row-sim">
<button id="ingestBtn" class="sim-btn" onclick="runSimulation()">Ingest Sample Invoice</button>
<button class="sim-btn sim-btn-alt" onclick="resetSimulation()">Reset</button>
</div>
</div>
</div>
</section>

<section id="features" class="s section-bg">
<div class="c section-center">
<p class="eyebrow">Features</p>
<h2 class="section-title">Everything your finance team needs</h2>
<p class="section-desc">Built for enterprise-grade invoice processing with full audit trails, multi-entity support, and seamless ERP integration.</p>
<div class="grid-3">
<div class="card">
<div class="card-icon blue">&#128273;</div>
<h3>3-Way Matching</h3>
<p>Automatically match invoices to purchase orders and goods receipts. Handle quantity and price variances with intelligent tolerance rules.</p>
</div>
<div class="card">
<div class="card-icon green">&#128200;</div>
<h3>FX Risk Dashboard</h3>
<p>Track multi-currency exposures in real time. Get automated alerts when exchange rate movements breach your configured thresholds.</p>
</div>
<div class="card">
<div class="card-icon purple">&#128274;</div>
<h3>Full Audit Trail</h3>
<p>Every decision is logged with timestamps, user context, and AI reasoning. Exportable for compliance and SOC 2 reporting.</p>
</div>
</div>
</div>
</section>

<section id="contact" class="cta-full">
<div class="c">
<h2>Ready to modernize your invoice matching?</h2>
<p>Get early access to LedgerGrid for your finance team.</p>
<a href="mailto:hello@ledgergrid.ai" class="cta-btn">Contact Us &#8594;</a>
</div>
</section>

<footer>
<div class="c">
<p>&copy; 2026 LedgerGrid. All rights reserved. | <a href="#">Privacy</a> | <a href="#">Terms</a></p>
</div>
</footer>

<div id="hitlOverlay" class="overlay" style="display:none">
<div class="modal">
<div class="modal-title">&#9888; Exception Detected</div>
<p class="modal-sub">Price variance exceeds tolerance. Review and approve or raise a dispute.</p>
<div class="dispute-box">
<h4>Dispute Details</h4>
<div class="row"><span>Invoice Amount</span><span>USD 24,500.00</span></div>
<div class="row"><span>PO Amount</span><span class="strike">USD 25,000.00</span></div>
<div class="row"><span>Variance</span><span style="color:var(--red)">-USD 500.00 (2%)</span></div>
</div>
<div class="action-row">
<button class="action-btn action-green" onclick="approveOverride()">Approve Variance</button>
<button class="action-btn action-red" onclick="closeOverlay()">Raise Dispute</button>
</div>
</div>
</div>
</div>

<div id="jsonOverlay" class="overlay" style="display:none">
<div class="modal">
<div class="modal-title" style="color:var(--green)">&#10004; Match Complete</div>
<p class="modal-sub">Final reconciliation payload ready for ERP ingestion.</p>
<div class="json-out"><div class="json-label">JSON Payload</div><pre id="jsonOutput"></pre></div>
<div class="action-row" style="margin-top:20px">
<button class="action-btn action-green" onclick="closeJsonOverlay()">Confirm &amp; Close</button>
</div>
</div>
</div>
</div>

<script>

var step=0;
function log(msg,cls){
  var d=document.getElementById('log'),m=document.createElement('div');m.className='log-line';m.innerHTML='<span class="'+cls+'">'+msg+'</span>';d.appendChild(m);d.scrollTop=d.scrollHeight;
}
function runSimulation(){if(step>0)return;step=1;document.getElementById('ingestBtn').disabled=true;log('Step 1: Parsing PDF via OpenClaw Engine...','info');setTimeout(function(){log('Structured text matrix extracted — 12 line items detected','ok');log('Step 2: Mapping line items to SKUs...','info');setTimeout(function(){log('12 items aligned to 8 unique SKUs','ok');log('Step 3: Executing 3-Way Match (Price / FX)...','info');setTimeout(function(){log('Currency mismatch: Invoice USD vs PO EUR — FX rate expired (90 days)','err');document.getElementById('hitlOverlay').style.display='flex';},1200);},1200);},1500);}
function hitlApprove(){document.getElementById('hitlOverlay').style.display='none';log('HITL Step 4: Manual rate update @ 1.08 EUR/USD — Override approved','warn');setTimeout(function(){log('Step 5: Formatting and compliance check...','info');setTimeout(function(){log('Verified JSON schema for ERP — all compliance gates passed','ok');log('HITL Step 6: Senior Controller payment release pending...','warn');setTimeout(function(){log('Final ledger update complete — Approved via manual rate override','ok');showJson('override');document.getElementById('ingestBtn').disabled=false;step=0;},1000);},1000);},800);}
function hitlDispute(){document.getElementById('hitlOverlay').style.display='none';log('HITL Step 4: Vendor dispute initiated — Invoice flagged for re-evaluation','err');setTimeout(function(){log('Step 5: Formatting and compliance check...','info');setTimeout(function(){log('Verified JSON schema for ERP — dispute flag attached','ok');log('Step 6: Final ledger update — DISPUTE PENDING...','info');setTimeout(function(){log('Payment blocked — Vendor Dispute Case opened — Case ID: VDC-2026-0512','err');showJson('dispute');document.getElementById('ingestBtn').disabled=false;step=0;},1000);},1000);},800);}
function showJson(action){var payload={invoice:{id:'INV-2026-0512',vendor:'Acme GmbH',currency:'USD',amount:10500,fxRate:{used:0.88,expired:true},lineItems:[{sku:'SVC-001',description:'Cloud Services Q1',amount:5200},{sku:'SVC-002',description:'Data Storage Overage',amount:5300}]},po:{id:'PO-2026-0201',currency:'EUR',amount:9200,items:[{sku:'SVC-001',amount:4600},{sku:'SVC-002',amount:4600}]}};if(action==='override'){payload.decision={action:'APPROVED',method:'Manual Rate Override',newFxRate:1.08,approvedBy:'Senior Controller',approvedAt:'2026-05-20T11:42:00Z'};payload.status='PAYMENT_APPROVED';}else{payload.decision={action:'DISPUTE_OPENED',caseId:'VDC-2026-0512',initiatedAt:'2026-05-20T11:42:00Z',reason:'Currency mismatch — FX rate expired'};payload.status='PAYMENT_BLOCKED';}payload.audit={matchedAt:'2026-05-20T11:42:00Z',erpReady:true,schemaVersion:'1.0'};document.getElementById('jsonContent').textContent=JSON.stringify(payload,null,2);document.getElementById('jsonOutput').style.display='block';}
function resetSim(){step=0;document.getElementById('log').innerHTML='<div class="log-line"><span class="pending">Awaiting input — click the button below to ingest a sample invoice</span></div>';document.getElementById('jsonOutput').style.display='none';document.getElementById('hitlOverlay').style.display='none';document.getElementById('ingestBtn').disabled=false;}

</script>
</body></html>
