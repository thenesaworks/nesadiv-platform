/* ==========================================================================
   NESADIV — GLOBAL PUBLIC HEADER & FOOTER INJECTOR
   ========================================================================== */

(function () {
  const headerHTML = `
    <!-- Institutional Market Ticker -->
    <div class="nd-ticker py-1.5 px-4 text-center border-b border-slate-800 no-print">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs">
        <span class="font-semibold text-teal-400">NESADIV INDEX · Q4 2026</span>
        <span>Bengaluru Backend (3–5y) Median: <strong class="font-mono-num text-white">₹32.0 LPA</strong></span>
        <span class="hidden sm:inline text-slate-600">|</span>
        <span class="hidden sm:inline">GCCs vs IT Services Spread: <strong class="font-mono-num text-emerald-400">+41.2%</strong></span>
        <span class="hidden md:inline text-slate-600">|</span>
        <span class="hidden md:inline">Under 6m experience? <a href="https://competence.co.in" target="_blank" rel="noopener" class="underline text-teal-300 hover:text-white">Visit Competence.co.in &rarr;</a></span>
      </div>
    </div>

    <!-- Main Navigation -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 no-print">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- Brand -->
          <a href="/index.html" class="flex items-center gap-2.5 group">
            <div class="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tight group-hover:bg-teal-700 transition">ND</div>
            <div class="leading-tight">
              <span class="block text-base font-bold tracking-tight text-slate-900">NesaDiv</span>
              <span class="block text-[10px] uppercase tracking-widest text-slate-500">Compensation, Decoded.</span>
            </div>
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="/ctc-decompiler.html" class="hover:text-slate-900 transition">CTC Decompiler</a>
            <a href="/salary-dossier.html" class="hover:text-slate-900 transition">Pro Se PSWR <span class="ml-1 text-[11px] font-mono-num bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded">₹299</span></a>
            <a href="/employers.html" class="hover:text-slate-900 transition">For Employers</a>
            <a href="/methodology.html" class="hover:text-slate-900 transition">Methodology</a>
            <a href="/market-pulse.html" class="hover:text-slate-900 transition">Market Pulse</a>
          </nav>

          <!-- Desktop Actions -->
          <div class="hidden lg:flex items-center gap-3">
            <a href="/dashboard/login.html" class="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2">Dashboard Login</a>
            <a href="/salary-dossier.html" class="nd-btn-primary text-sm px-4 py-2">Check Your Worth</a>
          </div>

          <!-- Mobile Hamburger -->
          <button id="nd-mobile-btn" type="button" aria-label="Toggle Menu" class="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <div id="nd-mobile-menu" class="hidden lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 text-sm font-medium">
        <a href="/ctc-decompiler.html" class="block py-2 text-slate-700 hover:text-slate-900">Forensic CTC Decompiler (Free)</a>
        <a href="/salary-dossier.html" class="block py-2 text-slate-700 hover:text-slate-900">Pro Se PSWR (₹299)</a>
        <a href="/employers.html" class="block py-2 text-slate-700 hover:text-slate-900">For Employers</a>
        <a href="/methodology.html" class="block py-2 text-slate-700 hover:text-slate-900">Methodology</a>
        <a href="/market-pulse.html" class="block py-2 text-slate-700 hover:text-slate-900">Market Pulse</a>
        <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <a href="/dashboard/login.html" class="text-center py-2.5 border border-slate-300 rounded-md text-slate-800">Dashboard Login</a>
          <a href="/salary-dossier.html" class="nd-btn-primary text-center py-2.5">Check Your Worth</a>
        </div>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="bg-slate-950 text-slate-400 border-t border-slate-800 mt-20 no-print">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <!-- Brand Col -->
          <div class="md:col-span-1">
            <div class="flex items-center gap-2.5 mb-3">
              <div class="w-7 h-7 rounded bg-white text-slate-900 flex items-center justify-center font-bold text-xs">ND</div>
              <span class="text-white font-bold tracking-tight">NesaDiv</span>
            </div>
            <p class="text-xs leading-relaxed text-slate-400 mb-4">
              Institutional salary intelligence and forensic CTC verification for experienced Indian professionals (6+ months experience) and HR teams.
            </p>
            <p class="text-xs text-slate-500">Bengaluru, Karnataka, India</p>
          </div>

          <!-- Professionals -->
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-white mb-3">Professionals</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/ctc-decompiler.html" class="hover:text-white transition">Forensic CTC Decompiler (Free)</a></li>
              <li><a href="/salary-dossier.html" class="hover:text-white transition">Pro Se PSWR (₹299)</a></li>
              <li><a href="/dashboard/login.html" class="hover:text-white transition">Premium PSWR &amp; AWR Dashboard</a></li>
              <li><a href="https://competence.co.in" target="_blank" rel="noopener" class="hover:text-teal-400 transition">Freshers (&lt;6m) &rarr; Competence.co.in</a></li>
            </ul>
          </div>

          <!-- Employers & Research -->
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-white mb-3">Employers &amp; Research</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/employers.html" class="hover:text-white transition">Employer Suite Overview</a></li>
              <li><a href="/employer-app/login.html" class="hover:text-white transition">Employer Portal Login</a></li>
              <li><a href="/methodology.html" class="hover:text-white transition">Forensic Methodology</a></li>
              <li><a href="/case-studies.html" class="hover:text-white transition">Verified Case Studies</a></li>
              <li><a href="/market-pulse.html" class="hover:text-white transition">Market Pulse</a></li>
            </ul>
          </div>

          <!-- Company & Legal -->
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-white mb-3">Company &amp; Legal</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/about.html" class="hover:text-white transition">About NesaDiv</a></li>
              <li><a href="/contact.html" class="hover:text-white transition">Enterprise Desk &amp; Support</a></li>
              <li><a href="/privacy.html" class="hover:text-white transition">Privacy Policy (DPDP Aligned)</a></li>
              <li><a href="/terms.html" class="hover:text-white transition">Terms of Service</a></li>
              <li><a href="/refund-policy.html" class="hover:text-white transition">Cancellation &amp; Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 NesaDiv. All rights reserved. Compensation, Decoded.</p>
          <p>Zero-BGV Policy: We never contact your current or former employers.</p>
        </div>
      </div>
    </footer>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const headerSlot = document.getElementById('nd-header');
    const footerSlot = document.getElementById('nd-footer');

    if (headerSlot) headerSlot.innerHTML = headerHTML;
    if (footerSlot) footerSlot.innerHTML = footerHTML;

    const btn = document.getElementById('nd-mobile-btn');
    const menu = document.getElementById('nd-mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  });
})();
