import React from "react";

export default function Home() {
  const html = "\n<header>
<div class=\"c hdr\">
<a href=\"#\" class=\"logo\">
<div class=\"logo-icon\">LG</div>
<div class=\"logo-text\">
<div class=\"logo-name\">LedgerGrid</div>
<div class=\"logo-sub\">Systems</div>
</div>
</a>
<nav class=\"nav\">
<a href=\"#simulator\">Simulator</a>
<a href=\"#workflow\">Workflow</a>
<a href=\"https://github.com/DigitalCoa-ch/ai-native-team-18\" target=\"_blank\" class=\"cta-blue\">GitHub</a>
</nav>
</div>
</header>

<section class=\"hero\">
<div class=\"c hero-inner\">
<div class=\"badge\">AI Native Enterprise Week 2026</div>
<h1>AI-Powered <span>Invoice Matching</span> for Enterprise</h1>
<p>Automated 3-way matching, real-time FX risk mitigation, and cross-border invoice processing — all in one intelligent FinOps platform.</p>
<div class=\"btn-row\">
<a href=\"https://github.com/DigitalCoa-ch/ai-native-team-18\" target=\"_blank\" class=\"btn btn-blue\">View on GitHub</a>
<a href=\"#simulator\" class=\"btn btn-white\">Launch Simulator</a>
</div>
<div class=\"stats\">
<div class=\"stat\"><div class=\"stat-num\">97.3%</div><div class=\"stat-label\">Match Accuracy</div></div>
<div class=\"stat\"><div class=\"stat-num\">80%</div><div class=\"stat-label\">Faster Close</div></div>
<div class=\"stat\"><div class=\"stat-num\">140+</div><div class=\"stat-label\">Currencies</div></div>
<div class=\"stat\"><div class=\"stat-num\">100%</div><div class=\"stat-label\">ERP Ready</div></div>
</div>
</div>
</section>

<section id=\"workflow\" class=\"s section-bg\">
<div class=\"c section-center\">
<p class=\"eyebrow\">Operational Process</p>
<h2 class=\"section-title\">6-Step Invoice Matching Workflow</h2>
</div>
<div class=\"c\">
<div class=\"wf-card\">
<table>
<thead>
<tr>
<th style=\"width:44px\">Step</th>
<th>Trigger</th>
<th>Action</th>
<th>Output</th>
<th>HITL</th>
</tr>
</thead>
<tbody>
<tr><td><span class=\"step-num\">1</span><strong>Parse</strong></td><td>Invoice received</td><td>AI: Document parsing</td><td>Structured text matrix</td><td><span class=\"badge no\">No</span></td></tr>
<tr><td><span class=\"step-num\">2</span><strong>Match</strong></td><td>Structured data</td><td>AI: Line-item matching</td><td>SKUs aligned</td><td><span class=\"badge no\">No</span></td></tr>
<tr><td><span class=\"step-num\">3</span><strong>Verify</strong></td><td>Line items + PO</td><td>AI: 3-Way Match FX</td><td>Match status</td><td><span class=\"badge no\">No</span></td></tr>
<tr><td><span class=\"step-num\">4</span><strong>Review</strong></td><td>Exception status</td><td>Human: Controller review</td><td>Override or dispute</td><td><span class=\"badge yes\">Yes</span></td></tr>
<tr><td><span class=\"step-num\">5</span><strong>Format</strong></td><td>Validated payload</td><td>AI: Compliance check</td><td>ERP JSON schema</td><td><span class=\"badge no\">No</span></td></tr>
<tr><td><span class=\"step-num\">6</span><strong>Release</strong></td><td>Verified payload</td><td>Human: Payment release</td><td>Ledger update</td><td><span class=\"badge yes\">Yes</span></td></tr>
</tbody>
</table>
</div>
</div>
</section>

<section id=\"simulator\" class=\"s\">
<div class=\"c section-center\">
<p class=\"eyebrow\">Live Prototype</p>
<h2 class=\"section-title\">Interactive HITL Simulator</h2>
<p class=\"section-desc\">Run a cross-border invoice through the full 6-step workflow. FX exceptions trigger a real review modal.</p>
</div>
<div class=\"c\">
<div class=\"sim-box\">
<div class=\"sim-hdr\">
<h3>Live Prototype Simulator</h3>
<span class=\"sim-badge\">HITL Ready</span>
</div>
<div id=\"log\" class=\"log\"></div>
<div class=\"btn-row-sim\">
<button id=\"ingestBtn\" class=\"sim-btn\" onclick=\"runSim()\">Run Simulation</button>
<button class=\"sim-btn sim-btn-alt\" onclick=\"resetSim()\">Reset</button>
</div>
<div id=\"jsonOut\" class=\"json-out\" style=\"display:none\">
<div class=\"json-label\">ERP-Ready JSON Payload</div>
<pre id=\"jsonContent\"></pre>
</div>
</div>
</div>
</section>

<footer>
<div class=\"c\">
<p>LedgerGrid Systems — AI Native Enterprise Week 2026 | <a href=\"https://github.com/DigitalCoa-ch/ai-native-team-18\" target=\"_blank\">GitHub</a></p>
</div>
</footer>

<div id=\"hitlOverlay\" class=\"overlay\" style=\"display:none\">
<div class=\"modal\">
<div class=\"modal-title\">Human-in-the-Loop Review</div>
<p class=\"modal-sub\">Step 3 detected an FX exception during 3-Way Match. Review the discrepancy before payment can proceed.</p>
<div class=\"dispute-box\">
<h4>Currency Mismatch — FX Rate Expired (90 days)</h4>
<div class=\"row\"><span>Invoice Amount</span><span>$10,500 USD</span></div>
<div class=\"row\"><span>PO Amount</span><span class=\"strike\">&#8364;9,200 EUR</span></div>
<div class=\"row\"><span>FX Rate Used</span><span class=\"err\">0.88 (expired)</span></div>
<div class=\"row\"><span>Converted Delta</span><span class=\"err\">+$1,904 USD overage</span></div>
</div>
<div class=\"action-row\">
<button class=\"action-btn action-green\" onclick=\"hitlApprove()\">Approve Override</button>
<button class=\"action-btn action-red\" onclick=\"hitlDispute()\">Trigger Dispute</button>
</div>
</div>
</div>
</div>

<script>
var step=0;
function _log(msg,cls){var d=document.getElementById('log'),m=document.createElement('div');m.className='log-line';m.innerHTML='<span class=\"'+cls+'\">'+msg+'</span>';d.appendChild(m);d.scrollTop=d.scrollHeight;}
function runSim(){if(step>0)return;step=1;document.getElementById('ingestBtn').disabled=true;_log('S1: Parsing PDF via OpenClaw Engine...','info');setTimeout(function(){_log('Structured text matrix extracted — 12 line items detected','ok');_log('S2: Mapping line items to SKUs...','info');setTimeout(function(){_log('12 items aligned to 8 unique SKUs','ok');_log('S3: Executing 3-Way Match (Price / FX)...','info');setTimeout(function(){_log('Currency mismatch: Invoice USD vs PO EUR — FX rate expired (90 days)','err');document.getElementById('hitlOverlay').style.display='flex';},1200);},1200);},1500);}
function hitlApprove(){document.getElementById('hitlOverlay').style.display='none';_log('S4: Manual rate 1.08 EUR/USD — Override approved by Senior Controller','warn');setTimeout(function(){_log('S5: Formatting and compliance check...','info');setTimeout(function(){_log('Verified JSON schema — all compliance gates passed','ok');_log('S6: Payment release pending Senior Controller...','warn');setTimeout(function(){_log('FINAL: Payment APPROVED via manual rate override','ok');showJson('approve');document.getElementById('ingestBtn').disabled=false;step=0;},1000);},1000);},800);}
function hitlDispute(){document.getElementById('hitlOverlay').style.display='none';_log('S4: Vendor dispute initiated — Case VDC-2026-0512','err');setTimeout(function(){_log('S5: Formatting and compliance check...','info');setTimeout(function(){_log('Verified JSON schema — dispute flag attached','ok');_log('S6: Payment BLOCKED — Vendor Dispute Case opened','err');showJson('dispute');document.getElementById('ingestBtn').disabled=false;step=0;},1000);},1000);}
function showJson(t){var p={invoice:{id:'INV-2026-0512',vendor:'Acme GmbH',currency:'USD',amount:10500,fxRate:{used:0.88,expired:true},lineItems:[{sku:'SVC-001',amount:5200},{sku:'SVC-002',amount:5300}]},po:{id:'PO-2026-0201',currency:'EUR',amount:9200,items:[{sku:'SVC-001',amount:4600},{sku:'SVC-002',amount:4600}]},audit:{matchedAt:'2026-05-20T11:42:00Z',erpReady:true,schemaVersion:'1.0'}};if(t==='approve'){p.decision={action:'APPROVED',method:'Manual Rate Override',newFxRate:1.08,approvedBy:'Senior Controller'};p.status='PAYMENT_APPROVED';}else{p.decision={action:'DISPUTE_OPENED',caseId:'VDC-2026-0512',reason:'Currency mismatch'};p.status='PAYMENT_BLOCKED';}document.getElementById('jsonContent').textContent=JSON.stringify(p,null,2);document.getElementById('jsonOut').style.display='block';}
function resetSim(){step=0;document.getElementById('log').innerHTML='<div class=\"log-line\"><span class=\"pending\">Awaiting input — click \"Run Simulation\" to ingest a sample invoice</span></div>';document.getElementById('jsonOut').style.display='none';document.getElementById('hitlOverlay').style.display='none';document.getElementById('ingestBtn').disabled=false;}
</script>
";
  return <div dangerouslySetInnerHTML={ __html: html } />;
}
