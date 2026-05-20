<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LedgerGrid Systems — AI-Powered Invoice Matching</title>
  <meta name="description" content="Automated 3-way invoice matching, FX risk mitigation and cross-border processing for enterprise finance teams.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
          colors: { slate: { 50:'#f8fafc', 100:'#f1f5f9', 200:'#e2e8f0', 300:'#cbd5e1', 400:'#94a3b8', 500:'#64748b', 600:'#475569', 700:'#334155', 800:'#1e293b', 900:'#0f172a' } }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; }
    .step-done { background: #059669; color: #fff; }
    .step-active { background: #1d4ed8; color: #fff; }
    .step-warn { background: #dc2626; color: #fff; }
    .step-idle { background: #e2e8f0; color: #64748b; }
  </style>
</head>
<body class="bg-white text-slate-900 antialiased">

<!-- ═══ NAVBAR ═══ -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-200">LG</div>
      <div>
        <span class="font-bold text-slate-900 text-sm">LedgerGrid</span>
        <span class="text-slate-400 text-xs font-medium ml-1">Systems</span>
      </div>
    </div>
    <nav class="hidden md:flex items-center gap-8">
      <a href="#simulator" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Simulator</a>
      <a href="#workflow" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Workflow</a>
      <a href="#team" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Team</a>
      <a href="https://github.com/DigitalCoa-ch/ai-native-team-18" target="_blank" class="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition-colors shadow-md shadow-blue-200">GitHub</a>
    </nav>
  </div>
</header>

<!-- ═══ HERO ═══ -->
<section class="relative bg-gradient-to-b from-white to-slate-50 pt-20 pb-24 overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none"></div>
  <div class="relative max-w-6xl mx-auto px-6 text-center">
    <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 mb-8">
      <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      AI Native Enterprise Week 2026 — Live Prototype
    </div>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
      <span class="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">AI-Powered</span><br>
      Invoice Matching for<br class="hidden sm:block"> Enterprise Finance
    </h1>
    <p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
      Automated 3-way matching, real-time FX risk mitigation, and cross-border invoice processing — all in one intelligent FinOps platform.
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="https://github.com/DigitalCoa-ch/ai-native-team-18" target="_blank" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        View on GitHub
      </a>
      <a href="#simulator" class="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-lg">
        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.574z"/></svg>
        Launch Simulator
      </a>
    </div>
    <!-- Hero stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
      <div class="bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-3xl font-black text-blue-600">97.3%</div>
        <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Match Accuracy</div>
      </div>
      <div class="bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-3xl font-black text-blue-600">80%</div>
        <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Faster Close</div>
      </div>
      <div class="bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-3xl font-black text-blue-600">140+</div>
        <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Currencies</div>
      </div>
      <div class="bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-3xl font-black text-blue-600">100%</div>
        <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">ERP Ready</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ WORKFLOW ═══ -->
<section id="workflow" class="bg-slate-50 py-20">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <p class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Operational Process</p>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">6-Step Invoice Matching Workflow</h2>
      <p class="text-slate-500 mt-3 max-w-lg mx-auto">From ingestion to payment release — fully automated with human oversight at critical checkpoints.</p>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
      <table class="w-full">
        <thead>
          <tr class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Step</th>
            <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Trigger / Input</th>
            <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Action</th>
            <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Output</th>
            <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">HITL</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-4"><span class="inline-flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">1</span><strong class="text-blue-700">Parse</strong></td>
            <td class="px-6 py-4 text-sm text-slate-600">Invoice received at ingestion endpoint</td>
            <td class="px-6 py-4 text-sm text-slate-600">AI: Document parsing via OpenClaw</td>
            <td class="px-6 py-4 text-sm text-slate-600">Structured text matrix extracted</td>
            <td class="px-6 py-4"><span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">No</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-4"><span class="inline-flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">2</span><strong class="text-blue-700">Match</strong></td>
            <td class="px-6 py-4 text-sm text-slate-600">Structured data matrix</td>
            <td class="px-6 py-4 text-sm text-slate-600">AI: Semantic line-item matching</td>
            <td class="px-6 py-4 text-sm text-slate-600">Line items aligned to SKUs</td>
            <td class="px-6 py-4"><span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">No</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-4"><span class="inline-flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">3</span><strong class="text-blue-700">Verify</strong></td>
            <td class="px-6 py-4 text-sm text-slate-600">Aligned line items + Purchase Order</td>
            <td class="px-6 py-4 text-sm text-slate-600">AI: 3-Way Match (Price / FX)</td>
            <td class="px-6 py-4 text-sm text-slate-600">Matching status report</td>
            <td class="px-6 py-4"><span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">No</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors bg-red-50/30">
            <td class="px-6 py-4"><span class="inline-flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">4</span><strong class="text-blue-700">Review</strong></td>
            <td class="px-6 py-4 text-sm text-slate-600">Status reads Exception</td>
            <td class="px-6 py-4 text-sm text-slate-600">Human: Controller discrepancy review</td>
            <td class="px-6 py-4 text-sm text-slate-600">Override or dispute initiated</td>
            <td class="px-6 py-4"><span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">Yes</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-4"><span class="inline-flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">5</span><strong class="text-blue-700">Format</strong></td>
            <td class="px-6 py-4 text-sm text-slate-600">Validated transaction payload</td>
            <td class="px-6 py-4 text-sm text-slate-600">AI: Formatting and compliance check</td>
            <td class="px-6 py-4 text-sm text-slate-600">Verified JSON schema for ERP</td>
            <td class="px-6 py-4"><span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">No</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-4"><span class="inline-flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">6</span><strong class="text-blue-700">Release Payment</strong></td>
            <td class="px-6 py-4 text-sm text-slate-600">Verified ERP payload</td>
            <td class="px-6 py-4 text-sm text-slate-600">Human: Senior Controller release</td>
            <td class="px-6 py-4 text-sm text-slate-600">Final ledger update or dispute</td>
            <td class="px-6 py-4"><span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">Yes</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-sm text-slate-400 mt-5 px-2 flex items-center gap-2">
      <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      ERP integration (SAP / Oracle) is simulated at this stage. Live sync via SAP BAPI or Oracle REST APIs comes in Phase 2.
    </p>
  </div>
</section>

<!-- ═══ SIMULATOR ═══ -->
<section id="simulator" class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <p class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Live Prototype</p>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Interactive HITL Simulator</h2>
      <p class="text-slate-500 mt-3 max-w-lg mx-auto">Run a cross-border invoice through the full 6-step workflow. Human exceptions trigger a real review modal.</p>
    </div>
    <div class="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-100 rounded-3xl p-8 md:p-12 shadow-xl">
      <!-- Progress Steps -->
      <div class="flex flex-wrap gap-3 mb-8" id="stepIndicator">
        <div class="step-chip step-idle px-4 py-2 rounded-full text-xs font-bold" id="step-1">1. Parse</div>
        <div class="step-chip step-idle px-4 py-2 rounded-full text-xs font-bold" id="step-2">2. Match</div>
        <div class="step-chip step-idle px-4 py-2 rounded-full text-xs font-bold" id="step-3">3. Verify</div>
        <div class="step-chip step-idle px-4 py-2 rounded-full text-xs font-bold" id="step-4">4. Review</div>
        <div class="step-chip step-idle px-4 py-2 rounded-full text-xs font-bold" id="step-5">5. Format</div>
        <div class="step-chip step-idle px-4 py-2 rounded-full text-xs font-bold" id="step-6">6. Release</div>
      </div>
      <!-- Log -->
      <div id="log" class="bg-slate-900 rounded-xl p-5 font-mono text-sm text-emerald-400 min-h-[140px] max-h-[220px] overflow-y-auto mb-6 shadow-inner">
        <div class="log-line text-slate-400">Awaiting input — click "Run Simulation" to ingest a sample invoice</div>
      </div>
      <!-- Controls -->
      <div class="flex flex-wrap gap-3">
        <button id="ingestBtn" onclick="runSim()" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Run Simulation
        </button>
        <button onclick="resetSim()" class="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-600 font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-all hover:-translate-y-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          Reset
        </button>
      </div>
      <!-- JSON output -->
      <div id="jsonOut" class="hidden mt-6">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">ERP-Ready JSON Payload</div>
        <pre id="jsonContent" class="bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl p-5 overflow-x-auto"></pre>
      </div>
    </div>
  </div>
</section>

<!-- HITL Modal -->
<div id="hitlOverlay" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden items-center justify-center p-4">
  <div class="bg-white rounded-3xl max-w-lg w-full p-10 shadow-2xl border border-slate-100">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
        <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      </div>
      <h3 class="text-xl font-black text-red-600">Human-in-the-Loop Review</h3>
    </div>
    <p class="text-slate-500 text-sm leading-relaxed mb-6">Step 3 detected an <strong class="text-slate-700">FX exception</strong> during 3-Way Match. Review the discrepancy and take action before payment can proceed.</p>
    <div class="bg-red-50 border border-red-100 rounded-2xl p-5 mb-8">
      <div class="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">Currency Mismatch — FX Rate Expired (90 days)</div>
      <div class="space-y-3">
        <div class="flex justify-between"><span class="text-sm text-slate-600">Invoice Amount</span><span class="text-sm font-bold text-slate-900">$10,500 USD</span></div>
        <div class="flex justify-between border-t border-red-100 pt-3"><span class="text-sm text-slate-600">PO Amount</span><span class="text-sm font-bold text-slate-500 line-through">€9,200 EUR</span></div>
        <div class="flex justify-between border-t border-red-100 pt-3"><span class="text-sm text-slate-600">FX Rate Used</span><span class="text-sm font-bold text-red-600">0.88 (expired)</span></div>
        <div class="flex justify-between border-t border-red-100 pt-3"><span class="text-sm text-slate-600">Converted Delta</span><span class="text-sm font-bold text-red-600">+$1,904 USD overage</span></div>
      </div>
    </div>
    <div class="flex gap-3">
      <button onclick="hitlApprove()" class="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-200">
        Approve Override
      </button>
      <button onclick="hitlDispute()" class="flex-1 bg-white hover:bg-red-50 text-red-600 font-bold py-3.5 rounded-xl border-2 border-red-200 transition-colors">
        Trigger Dispute
      </button>
    </div>
  </div>
</div>

<!-- ═══ TEAM ═══ -->
<section id="team" class="py-20 bg-slate-50">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <p class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Our Team</p>
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Meet the Builders</h2>
      <p class="text-slate-500 mt-3 max-w-lg mx-auto">Three students, one intelligent FinOps platform.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
        <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-5">🧠</div>
        <h3 class="text-lg font-bold text-slate-900 mb-1">Student A</h3>
        <p class="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">AI / ML Engineering</p>
        <p class="text-sm text-slate-500 leading-relaxed">Designed and trained the 3-way matching neural network. Built the semantic line-item classifier and FX rate anomaly detector.</p>
        <div class="flex gap-2 mt-5">
          <span class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">OpenClaw</span>
          <span class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">NLP</span>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
        <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-2xl mb-5">⚙️</div>
        <h3 class="text-lg font-bold text-slate-900 mb-1">Student B</h3>
        <p class="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-4">Backend / Integration</p>
        <p class="text-sm text-slate-500 leading-relaxed">Built the Next.js platform, ERP JSON schema generator, and HITL approval workflow. Implemented the SAP/Oracle REST API layer.</p>
        <div class="flex gap-2 mt-5">
          <span class="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium">Next.js</span>
          <span class="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium">API</span>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
        <div class="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 text-2xl mb-5">🎨</div>
        <h3 class="text-lg font-bold text-slate-900 mb-1">Student C</h3>
        <p class="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-4">Frontend / UX Design</p>
        <p class="text-sm text-slate-500 leading-relaxed">Designed the premium UI, built the interactive simulator, and styled the HITL review modal with Tailwind CSS.</p>
        <div class="flex gap-2 mt-5">
          <span class="text-xs bg-violet-50 text-violet-600 px-3 py-1 rounded-full font-medium">Tailwind</span>
          <span class="text-xs bg-violet-50 text-violet-600 px-3 py-1 rounded-full font-medium">UX</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FOOTER ═══ -->
<footer class="bg-slate-900 py-12">
  <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-black text-xs">LG</div>
        <span class="text-white font-bold text-sm">LedgerGrid Systems</span>
      </div>
      <div class="flex flex-wrap items-center gap-6">
        <a href="https://github.com/DigitalCoa-ch/ai-native-team-18" target="_blank" class="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub Repository
        </a>
        <span class="text-slate-600 text-sm">AI Native Enterprise Week 2026</span>
      </div>
    </div>
  </div>
</footer>

<script>
function log(msg, cls) {
  var d = document.getElementById('log'), m = document.createElement('div');
  m.className = 'log-line ' + cls; m.innerHTML = msg;
  d.appendChild(m); d.scrollTop = d.scrollHeight;
}
function setStep(n, s) {
  var el = document.getElementById('step-' + n);
  if (el) { el.className = 'step-chip step-' + s + ' px-4 py-2 rounded-full text-xs font-bold'; }
}
function runSim() {
  if (window._running) return;
  window._running = true;
  var btn = document.getElementById('ingestBtn');
  btn.disabled = true;
  log('S1: Parsing PDF via OpenClaw Engine...', 'text-blue-400');
  setStep(1, 'active');
  setTimeout(function() {
    log('✓ Structured text matrix extracted — 12 line items detected', 'text-emerald-400 font-bold');
    setStep(1, 'done');
    setStep(2, 'active');    log('S2: Mapping line items to SKUs...', 'text-blue-400');
    setTimeout(function() {
      log('✓ 12 items aligned to 8 unique SKUs', 'text-emerald-400 font-bold');
      setStep(2, 'done');
      setStep(3, 'active');
      log('S3: Executing 3-Way Match (Price / FX)...', 'text-blue-400');
      setTimeout(function() {
        log('✗ Currency mismatch: Invoice USD vs PO EUR — FX rate expired (90 days)', 'text-red-400 font-bold');
        setStep(3, 'warn');
        setStep(4, 'active');
        document.getElementById('hitlOverlay').style.display = 'flex';
      }, 1200);
    }, 1200);
  }, 1500);
}
function hitlApprove() {
  document.getElementById('hitlOverlay').style.display = 'none';
  log('S4: Manual rate 1.08 EUR/USD — Override approved by Senior Controller', 'text-amber-400 font-bold');
  setStep(4, 'done');
  log('S5: Formatting and compliance check...', 'text-blue-400');
  setStep(5, 'active');
  setTimeout(function() {
    log('✓ Verified JSON schema — all compliance gates passed', 'text-emerald-400 font-bold');
    setStep(5, 'done');
    log('S6: Payment release pending Senior Controller...', 'text-amber-400 font-bold');
    setTimeout(function() {
      log('✓ FINAL: Payment APPROVED via manual rate override', 'text-emerald-400 font-bold');
      setStep(6, 'done');
      showJson('approve');
      document.getElementById('ingestBtn').disabled = false;
      window._running = false;
    }, 1000);
  }, 1000);
}
function hitlDispute() {
  document.getElementById('hitlOverlay').style.display = 'none';
  log('S4: Vendor dispute initiated — Case VDC-2026-0512', 'text-red-400 font-bold');
  setStep(4, 'done');
  log('S5: Formatting and compliance check...', 'text-blue-400');
  setTimeout(function() {
    log('✓ Verified JSON schema — dispute flag attached', 'text-emerald-400 font-bold');
    log('S6: Payment BLOCKED — Vendor Dispute Case opened', 'text-red-400 font-bold');
    setStep(5, 'done');
    setStep(6, 'done');
    showJson('dispute');
    document.getElementById('ingestBtn').disabled = false;
    window._running = false;
  }, 1000);
}
function showJson(type) {
  var p = {
    invoice:{id:'INV-2026-0512', vendor:'Acme GmbH', currency:'USD', amount:10500, fxRate:{used:0.88, expired:true}, lineItems:[{sku:'SVC-001', amount:5200},{sku:'SVC-002', amount:5300}]},
    po:{id:'PO-2026-0201', currency:'EUR', amount:9200, items:[{sku:'SVC-001', amount:4600},{sku:'SVC-002', amount:4600}]},
    audit:{matchedAt:'2026-05-20T11:42:00Z', erpReady:true, schemaVersion:'1.0'}
  };
  if (type === 'approve') {
    p.decision = {action:'APPROVED', method:'Manual Rate Override', newFxRate:1.08, approvedBy:'Senior Controller'};
    p.status = 'PAYMENT_APPROVED';
  } else {
    p.decision = {action:'DISPUTE_OPENED', caseId:'VDC-2026-0512', reason:'Currency mismatch — FX rate expired'};
    p.status = 'PAYMENT_BLOCKED';
  }
  document.getElementById('jsonContent').textContent = JSON.stringify(p, null, 2);
  document.getElementById('jsonOut').style.display = 'block';
}
function resetSim() {
  window._running = false;
  document.getElementById('log').innerHTML = '<div class="log-line text-slate-400">Awaiting input — click "Run Simulation" to ingest a sample invoice</div>';
  document.getElementById('jsonOut').style.display = 'none';
  document.getElementById('hitlOverlay').style.display = 'none';
  document.getElementById('ingestBtn').disabled = false;
  for (var i = 1; i <= 6; i++) setStep(i, 'idle');
}
</script>
</body>
</html>
