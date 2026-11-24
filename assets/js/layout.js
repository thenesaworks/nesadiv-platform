/* ==========================================================================
   NESADIV — MASTER HEADER, 3-COLUMN MEGA MENU, ZERO-RELOAD ROUTER & PWA
   ========================================================================== */

(function () {
  'use strict';

  const headerHTML = `
    <div id="nd-route-progress" class="no-print"></div>
    <a href="#nd-main-content" class="nd-skip-nav">Skip to main content</a>

    <!-- 1. TOP MARKET PULSE RIBBON -->
    <div class="nd-top-ribbon no-print" role="region" aria-label="Live Compensation Market Benchmarks">
      <div class="nd-ribbon-left">
        <span class="nd-live-indicator">
          <span class="nd-live-dot"></span>
          MARKET PULSE LIVE
        </span>
        <span class="nd-ribbon-stat">Calibrated across <strong>480,000+ Indian Profiles</strong></span>
      </div>

      <div class="nd-ticker-window" aria-hidden="true">
        <div class="nd-ticker-rail">
          <!-- Set 1 -->
          <div class="nd-ticker-node">
            <strong>Bengaluru &bull; Backend Engineer (4 Yrs):</strong>
            <span class="nd-ticker-median">₹24.8L Verified Median</span>
            <span class="nd-ticker-badge-up">+8.4% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Hyderabad &bull; Data Engineer:</strong>
            <span class="nd-ticker-median">₹21.5L Verified Median</span>
            <span class="nd-ticker-badge-up">+11.2% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Bengaluru &bull; Cloud Architect (GCC):</strong>
            <span class="nd-ticker-median">₹42.0L P75 Band</span>
            <span class="nd-ticker-badge-up">+6.9% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Pune &bull; Fullstack Developer:</strong>
            <span class="nd-ticker-median">₹17.2L Verified Median</span>
            <span class="nd-ticker-badge-up">+5.1% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Avg. Offer Phantom CTC Inflation:</strong>
            <span class="nd-ticker-badge-alert">18.6% Locked in PF &amp; Gratuity</span>
          </div>
          <!-- Set 2 (Seamless Loop) -->
          <div class="nd-ticker-node">
            <strong>Bengaluru &bull; Backend Engineer (4 Yrs):</strong>
            <span class="nd-ticker-median">₹24.8L Verified Median</span>
            <span class="nd-ticker-badge-up">+8.4% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Hyderabad &bull; Data Engineer:</strong>
            <span class="nd-ticker-median">₹21.5L Verified Median</span>
            <span class="nd-ticker-badge-up">+11.2% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Bengaluru &bull; Cloud Architect (GCC):</strong>
            <span class="nd-ticker-median">₹42.0L P75 Band</span>
            <span class="nd-ticker-badge-up">+6.9% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Pune &bull; Fullstack Developer:</strong>
            <span class="nd-ticker-median">₹17.2L Verified Median</span>
            <span class="nd-ticker-badge-up">+5.1% QoQ</span>
          </div>
          <div class="nd-ticker-node">
            <strong>Avg. Offer Phantom CTC Inflation:</strong>
            <span class="nd-ticker-badge-alert">18.6% Locked in PF &amp; Gratuity</span>
          </div>
        </div>
      </div>

      <div class="nd-ribbon-right">
        <a href="https://www.competence.co.in" target="_blank" rel="noopener" class="nd-competence-pill" title="0 to 6 Months Experience? Visit Competence.co.in">
          <span>Fresher (&lt;6 Mos)?</span>
          <strong>Competence.co.in &nearr;</strong>
        </a>
      </div>
    </div>

    <!-- 2. PRIMARY NAVIGATION BAR (OVERFLOW-PROOF) -->
    <header class="nd-master-header no-print" id="ndMasterHeader">
      <div class="nd-header-container">

        <!-- Left: Brand Logo & Experience Gate Badge -->
        <div class="nd-brand-wrap">
          <a href="/" class="nd-logo-anchor" aria-label="NesaDiv Home">
            <img src="/logo.png" alt="NesaDiv Logo" width="28" height="28" onerror="this.style.display='none'">
            <span class="nd-logo-text">NESA<span>DIV</span></span>
          </a>
          <span class="nd-v-divider"></span>
          <span class="nd-lateral-tag" title="Calibrated exclusively for experienced professionals with 6+ months of work experience">Experienced (6+ Mos)</span>
        </div>

        <!-- Center: Direct Pillar Triggers -->
        <nav class="nd-primary-nav" aria-label="Primary Navigation">
          <button type="button" class="nd-nav-item" data-trigger-pillar="pane-products">
            <span>Products</span>
            <svg class="nd-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <button type="button" class="nd-nav-item" data-trigger-pillar="pane-solutions">
            <span>Solutions</span>
            <svg class="nd-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <button type="button" class="nd-nav-item" data-trigger-pillar="pane-professionals">
            <span>For Professionals</span>
            <span class="nd-nav-chip blue">PSWR</span>
          </button>
          <button type="button" class="nd-nav-item" data-trigger-pillar="pane-employers">
            <span>For Employers</span>
            <span class="nd-nav-chip emerald">HR SUITE</span>
          </button>
          <button type="button" class="nd-nav-item" data-trigger-pillar="pane-company">
            <span>Company</span>
            <svg class="nd-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </nav>

        <!-- Right: PWA Install, Member Dashboard, Pro Se PSWR CTA, Full-Page Menu Toggle -->
        <div class="nd-header-actions">
          <button type="button" id="ndPwaInstallBtn" class="nd-install-btn" title="Install NesaDiv App">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Install App</span>
          </button>

          <a href="/dashboard/login.html" class="nd-vault-link" data-no-pjax="true">Member Dashboard</a>

          <a href="/salary-dossier.html" class="nd-pswr-cta">
            <span class="nd-cta-full">Get Pro Se PSWR</span>
            <span class="nd-cta-short">PSWR</span>
            <span class="nd-pswr-price">₹299</span>
          </a>

          <button type="button" class="nd-menu-trigger-btn" id="ndFullMenuToggle" aria-expanded="false" aria-controls="ndFullMenuOverlay" aria-label="Toggle Full Navigation Menu">
            <span class="nd-hamburger-box" aria-hidden="true">
              <span class="nd-hamburger-bar"></span>
              <span class="nd-hamburger-bar"></span>
              <span class="nd-hamburger-bar"></span>
            </span>
            <span id="ndMenuBtnText">Menu</span>
          </button>
        </div>

      </div>
    </header>

    <!-- 3. FULL-PAGE 3-COLUMN INTERACTIVE MEGA MENU OVERLAY -->
    <div class="nd-fullmenu-overlay no-print" id="ndFullMenuOverlay" role="dialog" aria-modal="true" aria-label="NesaDiv Complete Directory">

      <!-- Top Search & Quick Links -->
      <div class="nd-fullmenu-utilitybar">
        <div class="nd-utilitybar-inner">
          <div class="nd-search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="ndMenuFilterInput" class="nd-search-input" placeholder="Search tools, reports, or pages (e.g., Pro Se PSWR, AWR, CTC Decompiler, Honest CTC)..." autocomplete="off">
          </div>
          <div class="nd-utility-QuickLinks">
            <a href="/salary-dossier.html">Pro Se PSWR (₹299) &rarr;</a>
            <a href="/dashboard/login.html" data-no-pjax="true">Member Dashboard &rarr;</a>
            <a href="/employers.html">Employer Suite &rarr;</a>
          </div>
        </div>
      </div>

      <!-- 3-Column Master Directory Workspace -->
      <div class="nd-fullmenu-workspace">

        <!-- COLUMN 1: 5 CORE PILLARS -->
        <div class="nd-col-pillars" role="tablist" aria-orientation="vertical">
          <div>
            <div class="nd-pillar-heading">Navigation Directory</div>
            <div class="nd-pillar-stack">
              <button type="button" class="nd-pillar-tab is-active" role="tab" aria-selected="true" data-target="pane-products" data-accent="blue">
                <div class="nd-pillar-tab-inner">
                  <span class="nd-pillar-index">01</span>
                  <div class="nd-pillar-label-group">
                    <span class="nd-pillar-name">Products</span>
                    <span class="nd-pillar-caption">PSWR, AWR, CTC Decompiler &amp; Salary Bands</span>
                  </div>
                </div>
                <svg class="nd-pillar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              <button type="button" class="nd-pillar-tab" role="tab" aria-selected="false" data-target="pane-solutions" data-accent="indigo">
                <div class="nd-pillar-tab-inner">
                  <span class="nd-pillar-index">02</span>
                  <div class="nd-pillar-label-group">
                    <span class="nd-pillar-name">Solutions</span>
                    <span class="nd-pillar-caption">Salary Correction, Buyouts &amp; Retention</span>
                  </div>
                </div>
                <svg class="nd-pillar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              <button type="button" class="nd-pillar-tab" role="tab" aria-selected="false" data-target="pane-professionals" data-accent="emerald">
                <div class="nd-pillar-tab-inner">
                  <span class="nd-pillar-index">03</span>
                  <div class="nd-pillar-label-group">
                    <span class="nd-pillar-name">For Professionals</span>
                    <span class="nd-pillar-caption">Instant Reports, Appraisals &amp; HR Scripts</span>
                  </div>
                </div>
                <svg class="nd-pillar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              <button type="button" class="nd-pillar-tab" role="tab" aria-selected="false" data-target="pane-employers" data-accent="amber">
                <div class="nd-pillar-tab-inner">
                  <span class="nd-pillar-index">04</span>
                  <div class="nd-pillar-label-group">
                    <span class="nd-pillar-name">For Employers</span>
                    <span class="nd-pillar-caption">Live Benchmarks, Honest CTC &amp; Pay Equity</span>
                  </div>
                </div>
                <svg class="nd-pillar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              <button type="button" class="nd-pillar-tab" role="tab" aria-selected="false" data-target="pane-company" data-accent="rose">
                <div class="nd-pillar-tab-inner">
                  <span class="nd-pillar-index">05</span>
                  <div class="nd-pillar-label-group">
                    <span class="nd-pillar-name">Company</span>
                    <span class="nd-pillar-caption">About, Methodology, Case Studies &amp; Legal</span>
                  </div>
                </div>
                <svg class="nd-pillar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div class="nd-competence-box">
            <span class="nd-competence-eyebrow">Sister Brand &bull; 0–6 Months Exp</span>
            <h5>Competence.co.in</h5>
            <p>NesaDiv is built for experienced professionals (6+ mos). Freshers benchmark salary worthiness based on skill competence.</p>
            <a href="https://www.competence.co.in" target="_blank" rel="noopener" class="nd-competence-cta">
              <span>Visit Competence.co.in</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
          </div>
        </div>

        <!-- COLUMN 2: DYNAMIC CENTER WORKSPACE -->
        <div class="nd-col-center">

          <!-- PANE 01: PRODUCTS -->
          <div class="nd-center-pane is-active" id="pane-products" role="tabpanel">
            <div class="nd-pane-header">
              <div>
                <span class="nd-pane-kicker">01 // Core Products</span>
                <h2 class="nd-pane-title">Compensation Intelligence Suite</h2>
              </div>
              <a href="/salary-dossier.html" class="nd-pane-action">Compare Report Tiers &rarr;</a>
            </div>

            <div class="nd-cards-grid">
              <a href="/salary-dossier.html" class="nd-nav-card" data-keywords="pro se pswr personal salary worthiness report 299 instant pdf">
                <div class="nd-card-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Pro Se PSWR (Instant Report)</span>
                    <span class="nd-card-pill blue">₹299 NO-LOGIN</span>
                  </div>
                  <p class="nd-card-desc">Zero-login Personal Salary Worthiness Report PDF with Q4 2026 market medians, percentile standing, and counter-offer scripts.</p>
                  <div class="nd-card-foot">DELIVERY: <span>INSTANT EMAIL + PRINT PDF</span></div>
                </div>
              </a>

              <a href="/dashboard/login.html" data-no-pjax="true" class="nd-nav-card" data-keywords="premium pswr member dashboard job switch dossier">
                <div class="nd-card-icon indigo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Premium PSWR (Job Switch)</span>
                    <span class="nd-card-pill indigo">DASHBOARD</span>
                  </div>
                  <p class="nd-card-desc">Full institutional job-switch dossier comparing IT Services, Startups, and GCCs with multi-offer negotiation playbooks.</p>
                  <div class="nd-card-foot">POLICY: <span>ZERO-BGV · STRICT PRIVACY</span></div>
                </div>
              </a>

              <a href="/dashboard/login.html" data-no-pjax="true" class="nd-nav-card" data-keywords="awr appraisal worthiness report internal raise promotion">
                <div class="nd-card-icon emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Appraisal Worthiness Report (AWR)</span>
                    <span class="nd-card-pill emerald">RAISES &amp; PROMOS</span>
                  </div>
                  <p class="nd-card-desc">Built for internal performance reviews. Quantifies your pay-compression gap so you can defend your raise with market data.</p>
                  <div class="nd-card-foot">ACCESS: <span>MEMBER DASHBOARD</span></div>
                </div>
              </a>

              <a href="/ctc-decompiler.html" class="nd-nav-card" data-keywords="forensic ctc decompiler phantom ctc pf gratuity in hand salary calculator">
                <div class="nd-card-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Forensic CTC Decompiler</span>
                    <span class="nd-card-pill blue">100% FREE</span>
                  </div>
                  <p class="nd-card-desc">Strips out Phantom CTC, variable pay, and PF &amp; Gratuity deductions to show your exact monthly take-home under 2026–27 tax slabs.</p>
                  <div class="nd-card-foot">OUTPUT: <span>TRUE NET MONTHLY IN-HAND</span></div>
                </div>
              </a>

              <a href="/employers.html#comp-bands" class="nd-nav-card" data-keywords="live salary bands comp bands compensation benchmarks p25 p50 p90">
                <div class="nd-card-icon amber">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Live Salary Bands</span>
                    <span class="nd-card-pill amber">P25 / P50 / P90</span>
                  </div>
                  <p class="nd-card-desc">Real-time percentile compensation benchmarks across roles, experience bands, cities, and employer tiers.</p>
                  <div class="nd-card-foot">AUDIENCE: <span>HR &amp; TALENT TEAMS</span></div>
                </div>
              </a>

              <a href="/employers.html#honest-ctc" class="nd-nav-card" data-keywords="honest ctc offer generator transparent offer letter template">
                <div class="nd-card-icon emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Honest CTC Offer Generator</span>
                    <span class="nd-card-pill emerald">TRUST STANDARD</span>
                  </div>
                  <p class="nd-card-desc">Creates transparent, candidate-friendly offer letters with clear fixed-to-variable splits that reduce offer drop-offs.</p>
                  <div class="nd-card-foot">IMPACT: <span>HIGHER OFFER ACCEPTANCE</span></div>
                </div>
              </a>

              <a href="/dashboard/login.html" data-no-pjax="true" class="nd-nav-card" data-keywords="esop equity visualizer strike price vesting cliff exit liquidity">
                <div class="nd-card-icon indigo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">ESOP &amp; Equity Visualizer</span>
                    <span class="nd-card-pill indigo">DASHBOARD</span>
                  </div>
                  <p class="nd-card-desc">Model 4-year vesting cliffs, exercise prices, and realistic 2x/5x/10x startup exit scenarios before accepting equity-heavy offers.</p>
                  <div class="nd-card-foot">CLARITY: <span>TANGIBLE EQUITY VALUATION</span></div>
                </div>
              </a>

              <a href="/dashboard/login.html" data-no-pjax="true" class="nd-nav-card" data-keywords="sponsor gift report voucher colleague friend">
                <div class="nd-card-icon rose">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Sponsor / Gift a Report</span>
                    <span class="nd-card-pill rose">VOUCHERS</span>
                  </div>
                  <p class="nd-card-desc">Sponsor a Premium PSWR or Appraisal Report (AWR) for a colleague, mentee, or friend preparing for a career move.</p>
                  <div class="nd-card-foot">ACCESS: <span>MEMBER DASHBOARD</span></div>
                </div>
              </a>
            </div>
          </div>

          <!-- PANE 02: SOLUTIONS -->
          <div class="nd-center-pane" id="pane-solutions" role="tabpanel">
            <div class="nd-pane-header">
              <div>
                <span class="nd-pane-kicker">02 // By Career &amp; HR Scenario</span>
                <h2 class="nd-pane-title">Strategic Compensation &amp; Retention Solutions</h2>
              </div>
              <a href="/case-studies.html" class="nd-pane-action">Explore Case Studies &rarr;</a>
            </div>

            <div class="nd-cards-grid">
              <a href="/salary-dossier.html?scenario=market-correction" class="nd-nav-card" data-keywords="market correction legacy pay services witch to gcc">
                <div class="nd-card-icon indigo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Salary Market Correction</span>
                    <span class="nd-card-pill indigo">JOB SWITCH</span>
                  </div>
                  <p class="nd-card-desc">For professionals moving from IT Services to Product companies or GCCs who need hard data to move past the standard 30% hike cap.</p>
                  <div class="nd-card-foot">ANCHOR: <span>VERIFIED MARKET MEDIAN</span></div>
                </div>
              </a>

              <a href="/salary-dossier.html?scenario=buyout" class="nd-nav-card" data-keywords="notice period buyout strategy 60 day 90 day counter offer">
                <div class="nd-card-icon emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Notice Period Buyout Strategy</span>
                    <span class="nd-card-pill emerald">OFFER IN HAND</span>
                  </div>
                  <p class="nd-card-desc">Use verified percentile benchmarks and competing offers to negotiate 60-day or 90-day notice buyouts and joining bonuses.</p>
                  <div class="nd-card-foot">LEVERAGE: <span>EARLY JOINING BONUS</span></div>
                </div>
              </a>

              <a href="/salary-dossier.html?scenario=equity-split" class="nd-nav-card" data-keywords="base vs equity restructuring fixed cash esops seed series a">
                <div class="nd-card-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Fixed Pay vs. ESOP Structuring</span>
                    <span class="nd-card-pill blue">CASH + EQUITY</span>
                  </div>
                  <p class="nd-card-desc">Helps startup candidates balance guaranteed monthly cash against long-term ESOP upside without getting underpaid.</p>
                  <div class="nd-card-foot">BALANCE: <span>LIQUIDITY PROTECTION</span></div>
                </div>
              </a>

              <a href="/employers.html#retention-audit" class="nd-nav-card" data-keywords="pay equity retention audit flight risk payroll benchmark">
                <div class="nd-card-icon amber">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Pay Equity &amp; Retention Audit</span>
                    <span class="nd-card-pill amber">FOR HR TEAMS</span>
                  </div>
                  <p class="nd-card-desc">Benchmark internal team salaries against live market medians to spot underpaid performers before they resign.</p>
                  <div class="nd-card-foot">PREVENTION: <span>ATTRITION DEFENSE</span></div>
                </div>
              </a>
            </div>

            <div class="nd-roles-bar">
              <div class="nd-roles-bar-head">
                <span>High-Demand Role Benchmarks (Direct PSWR Calibration)</span>
                <span>Minimum 6 Months Experience</span>
              </div>
              <div class="nd-role-tags">
                <a href="/salary-dossier.html" class="nd-role-tag">Software Engineer (Backend)</a>
                <a href="/salary-dossier.html" class="nd-role-tag">Data Scientist / ML Engineer</a>
                <a href="/salary-dossier.html" class="nd-role-tag">Product Manager</a>
                <a href="/salary-dossier.html" class="nd-role-tag">DevOps &amp; Cloud Engineer</a>
                <a href="/salary-dossier.html" class="nd-role-tag">UI / UX Designer</a>
                <a href="/salary-dossier.html" class="nd-role-tag">Engineering Manager</a>
              </div>
            </div>
          </div>

          <!-- PANE 03: FOR PROFESSIONALS -->
          <div class="nd-center-pane" id="pane-professionals" role="tabpanel">
            <div class="nd-pane-header">
              <div>
                <span class="nd-pane-kicker">03 // For Experienced Professionals (6+ Mos)</span>
                <h2 class="nd-pane-title">Walk Into Every Negotiation Armed With Verified Data</h2>
              </div>
              <a href="/salary-dossier.html" class="nd-pane-action">Generate Pro Se PSWR (₹299) &rarr;</a>
            </div>

            <div class="nd-cards-grid">
              <a href="/salary-dossier.html" class="nd-nav-card" data-keywords="generate pro se pswr 299 instant salary dossier">
                <div class="nd-card-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Generate Pro Se PSWR</span>
                    <span class="nd-card-pill blue">₹299 INSTANT</span>
                  </div>
                  <p class="nd-card-desc">No account needed. Enter your role, city, and current fixed pay to receive your printable PDF salary dossier by email.</p>
                  <div class="nd-card-foot">USE CASE: <span>FAST HR SCREENING PROOF</span></div>
                </div>
              </a>

              <a href="/dashboard/login.html" data-no-pjax="true" class="nd-nav-card" data-keywords="member dashboard login premium pswr awr appraisal">
                <div class="nd-card-icon emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Member Dashboard Login</span>
                    <span class="nd-card-pill emerald">AUTHENTICATED</span>
                  </div>
                  <p class="nd-card-desc">Access Premium PSWR, Appraisal Worthiness Reports (AWR), ESOP Visualizer, and your permanently saved dossiers.</p>
                  <div class="nd-card-foot">ZERO-BGV: <span>WE NEVER CONTACT EMPLOYERS</span></div>
                </div>
              </a>

              <a href="/salary-dossier.html" class="nd-nav-card" data-keywords="salary negotiation scripts hr email templates counter offer">
                <div class="nd-card-icon indigo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Salary Negotiation Scripts</span>
                    <span class="nd-card-pill indigo">CUSTOM PLAYBOOK</span>
                  </div>
                  <p class="nd-card-desc">Ready-to-use email and phone scripts calibrated to your exact percentile gap to defend your target fixed salary.</p>
                  <div class="nd-card-foot">INCLUDED IN: <span>ALL PSWR &amp; AWR REPORTS</span></div>
                </div>
              </a>

              <a href="https://www.competence.co.in" target="_blank" rel="noopener" class="nd-nav-card" data-keywords="competence fresher portal 0 to 6 months">
                <div class="nd-card-icon rose">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Competence.co.in (Fresher Portal)</span>
                    <span class="nd-card-pill rose">&lt; 6 MOS EXP</span>
                  </div>
                  <p class="nd-card-desc">Under 6 months of work experience? Use our sister platform built specifically for freshers and campus hires.</p>
                  <div class="nd-card-foot">TAGLINE: <span>COMPETENCE IS THE NEW EXPERIENCE</span></div>
                </div>
              </a>
            </div>
          </div>

          <!-- PANE 04: FOR EMPLOYERS -->
          <div class="nd-center-pane" id="pane-employers" role="tabpanel">
            <div class="nd-pane-header">
              <div>
                <span class="nd-pane-kicker">04 // Employer &amp; HR Compensation Suite</span>
                <h2 class="nd-pane-title">Hire Transparently &amp; Retain Critical Talent</h2>
              </div>
              <a href="/employers.html" class="nd-pane-action">Explore Employer Suite &rarr;</a>
            </div>

            <div class="nd-cards-grid">
              <a href="/employers.html#comp-bands" class="nd-nav-card" data-keywords="real time salary benchmarks p25 p50 p90 bands">
                <div class="nd-card-icon amber">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Live Salary Benchmarks</span>
                    <span class="nd-card-pill amber">LIVE PERCENTILES</span>
                  </div>
                  <p class="nd-card-desc">Replace outdated annual surveys with live P25, P50, P75, and P90 salary bands filtered by city, role, and employer tier.</p>
                  <div class="nd-card-foot">DATA SOURCE: <span>Q4 2026 MARKET INDEX</span></div>
                </div>
              </a>

              <a href="/employers.html#honest-ctc" class="nd-nav-card" data-keywords="standardized offer generation honest ctc pdf">
                <div class="nd-card-icon emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M9 15l2 2 4-4"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Honest CTC Offer Studio</span>
                    <span class="nd-card-pill emerald">HONEST CTC</span>
                  </div>
                  <p class="nd-card-desc">Generate clear, verified offer breakdowns showing exact monthly in-hand pay and realistic ESOP value.</p>
                  <div class="nd-card-foot">OUTCOME: <span>HIGHER OFFER ACCEPTANCE</span></div>
                </div>
              </a>

              <a href="/employers.html#retention-audit" class="nd-nav-card" data-keywords="retention payroll audit underpaid employees flight risk">
                <div class="nd-card-icon rose">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Retention &amp; Pay Equity Audit</span>
                    <span class="nd-card-pill rose">FLIGHT RISK</span>
                  </div>
                  <p class="nd-card-desc">Upload your team roster CSV to spot employees whose pay has drifted below market medians before they start interviewing.</p>
                  <div class="nd-card-foot">STRATEGY: <span>PROACTIVE RETENTION</span></div>
                </div>
              </a>

              <a href="/employer-app/login.html" data-no-pjax="true" class="nd-nav-card" data-keywords="employer portal login hr dashboard">
                <div class="nd-card-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Employer Portal Login</span>
                    <span class="nd-card-pill blue">HR WORKSPACE</span>
                  </div>
                  <p class="nd-card-desc">Sign in to your corporate HR workspace to manage Honest CTC offers, salary bands, and retention reports.</p>
                  <div class="nd-card-foot">ACCESS: <span>EMPLOYER DASHBOARD</span></div>
                </div>
              </a>
            </div>
          </div>

          <!-- PANE 05: COMPANY -->
          <div class="nd-center-pane" id="pane-company" role="tabpanel">
            <div class="nd-pane-header">
              <div>
                <span class="nd-pane-kicker">05 // Infrastructure &amp; Trust</span>
                <h2 class="nd-pane-title">About NesaDiv, Methodology &amp; Governance</h2>
              </div>
              <a href="/about.html" class="nd-pane-action">Read Our Mission &rarr;</a>
            </div>

            <div class="nd-cards-grid">
              <a href="/about.html" class="nd-nav-card" data-keywords="about nesadiv mission bengaluru hq">
                <div class="nd-card-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">About NesaDiv</span>
                    <span class="nd-card-pill blue">OUR MISSION</span>
                  </div>
                  <p class="nd-card-desc">Headquartered in Bengaluru, building India's definitive standard for transparent salary intelligence.</p>
                  <div class="nd-card-foot">FOCUS: <span>INDIA'S EXPERIENCED WORKFORCE</span></div>
                </div>
              </a>

              <a href="/methodology.html" class="nd-nav-card" data-keywords="forensic methodology verified market median calculation">
                <div class="nd-card-icon indigo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Forensic Methodology</span>
                    <span class="nd-card-pill indigo">DATA INTEGRITY</span>
                  </div>
                  <p class="nd-card-desc">How our deterministic tax math, city cost indices, and percentile models maintain benchmark accuracy.</p>
                  <div class="nd-card-foot">STANDARD: <span>AUDIT-GRADE PRECISION</span></div>
                </div>
              </a>

              <a href="/case-studies.html" class="nd-nav-card" data-keywords="verified case studies retention saves salary negotiation outcomes">
                <div class="nd-card-icon emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Verified Case Studies</span>
                    <span class="nd-card-pill emerald">PROVEN IMPACT</span>
                  </div>
                  <p class="nd-card-desc">Real-world breakdowns of engineering retention turnarounds and lateral candidate salary corrections.</p>
                  <div class="nd-card-foot">RESULTS: <span>DOCUMENTED BENCHMARKS</span></div>
                </div>
              </a>

              <a href="/market-pulse.html" class="nd-nav-card" data-keywords="market pulse articles insights quarterly reports">
                <div class="nd-card-icon amber">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Market Pulse (Insights)</span>
                    <span class="nd-card-pill amber">EDITORIAL</span>
                  </div>
                  <p class="nd-card-desc">Quarterly compensation briefings, GCC hiring analyses, tax regime comparisons, and ESOP liquidity trends.</p>
                  <div class="nd-card-foot">UPDATES: <span>Q4 2026 RESEARCH</span></div>
                </div>
              </a>

              <a href="/contact.html" class="nd-nav-card" data-keywords="enterprise desk contact support inquiries">
                <div class="nd-card-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Enterprise Desk (Contact)</span>
                    <span class="nd-card-pill blue">DIRECT DESK</span>
                  </div>
                  <p class="nd-card-desc">Reach our Bengaluru team for HR onboarding, custom pay equity audits, or institutional partnerships.</p>
                  <div class="nd-card-foot">SUPPORT: <span>PRIORITY RESPONSE</span></div>
                </div>
              </a>

              <a href="/privacy.html" class="nd-nav-card" data-keywords="privacy terms of service refund legal compliance">
                <div class="nd-card-icon rose">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div class="nd-card-content">
                  <div class="nd-card-title-row">
                    <span class="nd-card-title">Privacy, Terms &amp; Refunds</span>
                    <span class="nd-card-pill rose">GOVERNANCE</span>
                  </div>
                  <p class="nd-card-desc">Zero-BGV privacy guarantees, DPDP-aligned data protection, terms of use, and Razorpay refund policy.</p>
                  <div class="nd-card-foot">COMPLIANCE: <span>STRICT CONFIDENTIALITY</span></div>
                </div>
              </a>
            </div>
          </div>

        </div>

        <!-- COLUMN 3: RIGHT CONTEXTUAL SIDEBAR -->
        <div class="nd-col-right">

          <div class="nd-right-pane is-active" id="ctx-pane-products">
            <div class="nd-right-heading">
              <span>Report Comparison</span>
              <span>Choose Format</span>
            </div>
            <div class="nd-spotlight-card">
              <span class="nd-spotlight-badge blue">Three Distinct Reports</span>
              <h4>Pro Se PSWR vs. Dashboard Suite</h4>
              <p>Use the instant ₹299 PDF for fast screening calls, or unlock the Member Dashboard for deep switches and appraisals.</p>
              <div class="nd-tier-compare">
                <div class="nd-tier-row">
                  <span>1. Pro Se PSWR (No Login, Email PDF)</span>
                  <strong>₹299</strong>
                </div>
                <div class="nd-tier-row">
                  <span>2. Premium PSWR (Job Switch Dossier)</span>
                  <strong>Dashboard</strong>
                </div>
                <div class="nd-tier-row">
                  <span>3. Appraisal Report (AWR)</span>
                  <strong>Dashboard</strong>
                </div>
              </div>
            </div>
            <a href="/ctc-decompiler.html" class="nd-spotlight-card">
              <span class="nd-spotlight-badge emerald">100% Free Tool</span>
              <h4>Forensic CTC Decompiler</h4>
              <p>Expose Phantom CTC and compute your exact monthly take-home under India's 2026–27 New Tax Regime.</p>
              <span class="nd-spotlight-link">Launch Free Calculator &rarr;</span>
            </a>
          </div>

          <div class="nd-right-pane" id="ctx-pane-solutions">
            <div class="nd-right-heading">
              <span>Featured Case Study</span>
              <span>Verified Outcome</span>
            </div>
            <a href="/case-studies.html" class="nd-spotlight-card">
              <span class="nd-spotlight-badge indigo">Salary Market Correction</span>
              <h4>From ₹12.0L Legacy Pay to ₹18.5L Fixed at a Bengaluru Series-B</h4>
              <p>How a 4-year Data Engineer used a NesaDiv PSWR to move past the 30% hike cap and secure a 54% market correction.</p>
              <span class="nd-spotlight-link">Read Full Breakdown &rarr;</span>
            </a>
            <a href="/market-pulse.html" class="nd-spotlight-card">
              <span class="nd-spotlight-badge amber">Market Pulse Guide</span>
              <h4>Navigating the 90-Day Notice Buyout</h4>
              <p>How to structure buyout conversations when holding a competing offer.</p>
              <span class="nd-spotlight-link">Read Briefing &rarr;</span>
            </a>
          </div>

          <div class="nd-right-pane" id="ctx-pane-professionals">
            <div class="nd-right-heading">
              <span>Professional Insights</span>
              <span>Guides</span>
            </div>
            <a href="/ctc-decompiler.html" class="nd-spotlight-card">
              <span class="nd-spotlight-badge emerald">CTC Breakdown</span>
              <h4>Why Your ₹24L Offer Only Pays ₹1.28L Monthly In-Hand</h4>
              <p>Exposing how Phantom CTC, variable targets, and PF &amp; Gratuity deductions reduce your monthly liquidity.</p>
              <span class="nd-spotlight-link">Check Your CTC &rarr;</span>
            </a>
            <a href="/salary-dossier.html" class="nd-spotlight-card">
              <span class="nd-spotlight-badge blue">Negotiation Playbook</span>
              <h4>How to Answer "What Is Your Expected CTC?"</h4>
              <p>Why quoting a random percentage loses leverage—and how citing Verified Market Medians shifts the conversation.</p>
              <span class="nd-spotlight-link">Get Pro Se PSWR &rarr;</span>
            </a>
          </div>

          <div class="nd-right-pane" id="ctx-pane-employers">
            <div class="nd-right-heading">
              <span>Employer Case Study</span>
              <span>Retention</span>
            </div>
            <a href="/case-studies.html" class="nd-spotlight-card">
              <span class="nd-spotlight-badge amber">Pay Equity &amp; Retention Audit</span>
              <h4>How a Bengaluru Fintech Prevented 4 Senior Engineering Resignations</h4>
              <p>Proactive payroll benchmarking identified backend engineers sitting 16% below live market medians before GCCs poached them.</p>
              <span class="nd-spotlight-link">Read Case Study &rarr;</span>
            </a>
            <a href="/employers.html#honest-ctc" class="nd-spotlight-card">
              <span class="nd-spotlight-badge emerald">Offer Conversion</span>
              <h4>The Honest CTC Standard</h4>
              <p>See how transparent monthly take-home breakdowns increase candidate offer acceptance.</p>
              <span class="nd-spotlight-link">Explore Employer Suite &rarr;</span>
            </a>
          </div>

          <div class="nd-right-pane" id="ctx-pane-company">
            <div class="nd-right-heading">
              <span>Institutional Standard</span>
              <span>Bengaluru, India</span>
            </div>
            <div class="nd-spotlight-card">
              <span class="nd-spotlight-badge blue">Zero-BGV Policy</span>
              <h4>Strict Candidate Privacy</h4>
              <p>We never contact your current or former employers. Built exclusively for experienced Indian professionals (6+ mos) and transparent HR teams.</p>
            </div>
            <div class="nd-right-heading" style="margin-top: 16px;">
              <span>Official Channels</span>
            </div>
            <div class="nd-social-grid">
              <a href="https://www.linkedin.com/company/nesadiv" target="_blank" rel="noopener" class="nd-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com/nesadiv" target="_blank" rel="noopener" class="nd-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                <span>X (Twitter)</span>
              </a>
              <a href="https://www.instagram.com/nesadiv" target="_blank" rel="noopener" class="nd-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>
              <a href="/contact.html" class="nd-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Contact Desk</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom Status Footer inside Full Menu -->
      <div class="nd-fullmenu-footer">
        <div class="nd-fullmenu-footer-inner">
          <div>&copy; 2026 NesaDiv Compensation Intelligence. All Rights Reserved.</div>
          <div class="nd-footer-quicklinks">
            <a href="/about.html">About NesaDiv</a>
            <a href="/methodology.html">Methodology</a>
            <a href="/case-studies.html">Case Studies</a>
            <a href="/market-pulse.html">Market Pulse</a>
            <a href="/contact.html">Contact</a>
            <a href="/privacy.html">Privacy &amp; Terms</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const footerHTML = `
    <footer class="bg-slate-950 text-slate-400 border-t border-slate-800 mt-20 no-print">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div class="md:col-span-1">
            <div class="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="NesaDiv Logo" width="28" height="28" class="w-7 h-7 object-contain" onerror="this.style.display='none'">
              <span class="text-white font-display font-bold tracking-tight text-base">NESA<span style="color:#6C8EE8;">DIV</span></span>
            </div>
            <p class="text-xs leading-relaxed text-slate-400 mb-4">
              Institutional salary intelligence and forensic CTC verification for experienced Indian professionals (6+ months experience) and HR teams.
            </p>
            <p class="text-xs text-slate-500">Bengaluru, Karnataka, India</p>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-white mb-3">Professionals</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/ctc-decompiler.html" class="hover:text-white transition">Forensic CTC Decompiler (Free)</a></li>
              <li><a href="/salary-dossier.html" class="hover:text-white transition">Pro Se PSWR (₹299)</a></li>
              <li><a href="/dashboard/login.html" data-no-pjax="true" class="hover:text-white transition">Premium PSWR &amp; AWR Dashboard</a></li>
              <li><a href="https://www.competence.co.in" target="_blank" rel="noopener" class="text-blue-400 hover:text-white transition">Freshers (&lt;6m) &rarr; Competence.co.in</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-white mb-3">Employers &amp; Research</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/employers.html" class="hover:text-white transition">Employer Suite Overview</a></li>
              <li><a href="/employer-app/login.html" data-no-pjax="true" class="hover:text-white transition">Employer Portal Login</a></li>
              <li><a href="/methodology.html" class="hover:text-white transition">Forensic Methodology</a></li>
              <li><a href="/case-studies.html" class="hover:text-white transition">Verified Case Studies</a></li>
              <li><a href="/market-pulse.html" class="hover:text-white transition">Market Pulse</a></li>
            </ul>
          </div>

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
          <p>&copy; 2026 NesaDiv Compensation Intelligence. All rights reserved.</p>
          <p>Zero-BGV Policy: We never contact your current or former employers.</p>
        </div>
      </div>
    </footer>
  `;

  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  let deferredInstallPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const installBtn = document.getElementById('ndPwaInstallBtn');
    if (installBtn) installBtn.classList.add('is-visible');
  });

  // ========================================================================
  // ZERO-RELOAD PJAX ROUTER (KEEPS HEADER & FOOTER FROZEN ACROSS PUBLIC PAGES)
  // ========================================================================
  let isNavigating = false;

  function shouldInterceptLink(anchor) {
    if (!anchor || !anchor.href) return false;
    if (anchor.hasAttribute('data-no-pjax') || anchor.hasAttribute('download')) return false;
    if (anchor.target && anchor.target !== '_self') return false;
    const url = new URL(anchor.href, window.location.origin);
    if (url.origin !== window.location.origin) return false;
    // Let authenticated app shells load normally
    if (url.pathname.startsWith('/dashboard/') || url.pathname.startsWith('/employer-app/')) return false;
    // Same-page hash link
    if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return false;
    return true;
  }

  async function navigateWithoutHeaderReload(targetUrl, pushState = true) {
    if (isNavigating) return;
    const mainSlot = document.getElementById('nd-main-content');
    if (!mainSlot) {
      window.location.href = targetUrl;
      return;
    }

    isNavigating = true;
    const progress = document.getElementById('nd-route-progress');
    if (progress) {
      progress.style.opacity = '1';
      progress.style.width = '65%';
    }
    mainSlot.classList.add('nd-is-loading');

    try {
      const response = await fetch(targetUrl, { headers: { 'X-Requested-With': 'NesaDiv-PJAX' } });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const htmlText = await response.text();
      const parsedDoc = new DOMParser().parseFromString(htmlText, 'text/html');
      const newMain = parsedDoc.getElementById('nd-main-content');

      if (!newMain) {
        window.location.href = targetUrl;
        return;
      }

      // Swap only <main> content
      mainSlot.innerHTML = newMain.innerHTML;

      // Update Title, Meta Description & Canonical
      if (parsedDoc.title) document.title = parsedDoc.title;
      const newDesc = parsedDoc.querySelector('meta[name="description"]');
      const curDesc = document.querySelector('meta[name="description"]');
      if (newDesc && curDesc) curDesc.setAttribute('content', newDesc.getAttribute('content') || '');

      const newCanon = parsedDoc.querySelector('link[rel="canonical"]');
      const curCanon = document.querySelector('link[rel="canonical"]');
      if (newCanon && curCanon) curCanon.setAttribute('href', newCanon.getAttribute('href') || '');

      if (pushState) {
        window.history.pushState({ ndUrl: targetUrl }, '', targetUrl);
      }

      // Re-run page-specific scripts (skip layout.js)
      const fetchedScripts = parsedDoc.querySelectorAll('body script');
      for (const oldScript of fetchedScripts) {
        const src = oldScript.getAttribute('src') || '';
        if (src.includes('layout.js')) continue;
        const newScript = document.createElement('script');
        if (src) {
          newScript.src = src;
          newScript.async = false;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        mainSlot.appendChild(newScript);
      }

      // Close Mega Menu if open
      if (typeof window.ndCloseMegaMenu === 'function') window.ndCloseMegaMenu();

      // Scroll to hash or top
      const parsedUrl = new URL(targetUrl, window.location.origin);
      if (parsedUrl.hash) {
        const hashEl = document.querySelector(parsedUrl.hash);
        if (hashEl) {
          hashEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } catch (err) {
      window.location.href = targetUrl;
    } finally {
      mainSlot.classList.remove('nd-is-loading');
      if (progress) {
        progress.style.width = '100%';
        setTimeout(() => {
          progress.style.opacity = '0';
          progress.style.width = '0%';
        }, 200);
      }
      isNavigating = false;
    }
  }

  document.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const anchor = e.target.closest('a');
    if (shouldInterceptLink(anchor)) {
      e.preventDefault();
      navigateWithoutHeaderReload(anchor.href, true);
    }
  });

  window.addEventListener('popstate', () => {
    navigateWithoutHeaderReload(window.location.href, false);
  });

  // ========================================================================
  // INITIALIZE HEADER, FOOTER & MEGA MENU
  // ========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    const headerSlot = document.getElementById('nd-header');
    const footerSlot = document.getElementById('nd-footer');

    if (headerSlot) {
      headerSlot.innerHTML = headerHTML;
      document.body.classList.add('nd-has-header');
    }
    if (footerSlot) {
      footerSlot.innerHTML = footerHTML;
    }

    // Bind PWA Install Button
    const installBtn = document.getElementById('ndPwaInstallBtn');
    if (installBtn) {
      if (deferredInstallPrompt) installBtn.classList.add('is-visible');
      installBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
          installBtn.classList.remove('is-visible');
        }
        deferredInstallPrompt = null;
      });
    }

    // Mega Menu Controller
    const masterHeader   = document.getElementById('ndMasterHeader');
    const menuToggleBtn  = document.getElementById('ndFullMenuToggle');
    const menuBtnText    = document.getElementById('ndMenuBtnText');
    const fullOverlay    = document.getElementById('ndFullMenuOverlay');
    const filterInput    = document.getElementById('ndMenuFilterInput');

    if (!masterHeader || !menuToggleBtn || !fullOverlay) return;

    const pillarTabs     = document.querySelectorAll('.nd-pillar-tab');
    const centerPanes    = document.querySelectorAll('.nd-center-pane');
    const rightPanes     = document.querySelectorAll('.nd-right-pane');
    const navBarTriggers = document.querySelectorAll('[data-trigger-pillar]');
    const navCards       = document.querySelectorAll('.nd-nav-card');

    window.addEventListener('scroll', () => {
      masterHeader.classList.toggle('is-elevated', window.scrollY > 10);
    }, { passive: true });

    function filterCards(query) {
      const cleanQuery = query.trim().toLowerCase();
      if (!cleanQuery) {
        navCards.forEach(card => { card.style.display = ''; });
        const activeTab = document.querySelector('.nd-pillar-tab.is-active');
        if (activeTab) switchPillar(activeTab.getAttribute('data-target'));
        return;
      }
      centerPanes.forEach(pane => pane.classList.add('is-active'));
      navCards.forEach(card => {
        const text = (card.textContent + ' ' + (card.getAttribute('data-keywords') || '')).toLowerCase();
        card.style.display = text.includes(cleanQuery) ? '' : 'none';
      });
    }

    function toggleFullMenu(forceState) {
      const isOpen = typeof forceState === 'boolean' ? forceState : !fullOverlay.classList.contains('is-open');
      fullOverlay.classList.toggle('is-open', isOpen);
      menuToggleBtn.classList.toggle('is-open', isOpen);
      menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuBtnText.textContent = isOpen ? 'Close' : 'Menu';
      document.body.classList.toggle('nd-menu-locked', isOpen);

      if (!isOpen) {
        navBarTriggers.forEach(btn => btn.classList.remove('is-active'));
        if (filterInput && filterInput.value !== '') {
          filterInput.value = '';
          filterCards('');
        }
      }
    }

    window.ndCloseMegaMenu = () => toggleFullMenu(false);

    function switchPillar(targetPaneId) {
      pillarTabs.forEach(tab => {
        const match = tab.getAttribute('data-target') === targetPaneId;
        tab.classList.toggle('is-active', match);
        tab.setAttribute('aria-selected', match ? 'true' : 'false');
      });
      centerPanes.forEach(pane => pane.classList.toggle('is-active', pane.id === targetPaneId));
      rightPanes.forEach(rPane => rPane.classList.toggle('is-active', rPane.id === 'ctx-' + targetPaneId));
      navBarTriggers.forEach(btn => {
        btn.classList.toggle('is-active', fullOverlay.classList.contains('is-open') && btn.getAttribute('data-trigger-pillar') === targetPaneId);
      });
    }

    menuToggleBtn.addEventListener('click', () => toggleFullMenu());

    pillarTabs.forEach(tab => {
      tab.addEventListener('mouseenter', function () {
        if (window.innerWidth > 820 && (!filterInput || !filterInput.value.trim())) {
          switchPillar(this.getAttribute('data-target'));
        }
      });
      tab.addEventListener('click', function () {
        if (filterInput && filterInput.value.trim()) {
          filterInput.value = '';
          filterCards('');
        }
        switchPillar(this.getAttribute('data-target'));
      });
    });

    navBarTriggers.forEach(trigger => {
      trigger.addEventListener('click', function () {
        const targetId = this.getAttribute('data-trigger-pillar');
        const isSameOpen = fullOverlay.classList.contains('is-open') && this.classList.contains('is-active');
        if (isSameOpen) {
          toggleFullMenu(false);
        } else {
          toggleFullMenu(true);
          switchPillar(targetId);
        }
      });
    });

    if (filterInput) {
      filterInput.addEventListener('input', function () {
        filterCards(this.value);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && fullOverlay.classList.contains('is-open')) {
        toggleFullMenu(false);
      }
    });
  });
})();
