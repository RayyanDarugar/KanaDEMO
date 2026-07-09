/* ============================================================
   KANA SYSTEM DESIGN — LAYOUT ENGINE (app.js)
   Renders the page dynamically based on the vertical config.
   ============================================================ */

/**
 * Resolves an asset path and handles missing files / placeholders gracefully
 * @param {string} path - The asset file path
 * @param {string} type - The asset type (e.g. 'image', 'video', 'logo', 'partner-logo', 'soc2')
 * @param {string} label - Fallback display label
 * @returns {string} HTML string for the resolved asset
 */
function resolveAsset(path, type, label = "Visual Asset") {
  const isPlaceholder = !path || path.startsWith("[PLACEHOLDER");
  
  if (isPlaceholder) {
    return `
      <div class="asset-placeholder" aria-label="Visual placeholder for ${label}">
        <div style="font-weight:600;">[PLACEHOLDER: ${label}]</div>
        <div style="font-size:10px; opacity:0.6; word-break:break-all;">${path || "No path provided"}</div>
      </div>
    `;
  }

  // Generate file name for error logging
  const filename = path.split('/').pop();

  if (type === 'image' || type === 'solution-image') {
    const cssClass = type === 'image' ? 'hero-img' : 'solution-media';
    return `
      <img src="${path}" class="${cssClass}" alt="${label}" 
           onerror="this.outerHTML='<div class=&quot;asset-placeholder&quot;><div>[Failed to load Image: ${filename}]</div></div>'">
    `;
  }

  if (type === 'video') {
    if (path.trim().startsWith('<')) {
      return path;
    }
    return `
      <video src="${path}" class="solution-media" autoplay muted loop playsinline 
             onerror="this.outerHTML='<div class=&quot;asset-placeholder&quot;><div>[Failed to load Video: ${filename}]</div></div>'">
      </video>
    `;
  }

  if (type === 'logo') {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 39" fill="none" class="logo-img" style="height: 40px; width: auto;"><path d="M0 19.1908C0 8.59208 8.59198 8.58307e-05 19.1907 8.58307e-05V19.1906C19.1907 29.7893 10.5987 38.3813 0 38.3813V19.1908Z" fill="currentColor" class="path w-variant-f82c05ae-9ac1-7a3a-6de9-69c7d8815c43" stroke-width="1px" fill-opacity="1" stroke-opacity="1"></path><path d="M19.1906 19.1907C19.1906 8.59199 27.7826 1.90735e-06 38.3813 1.90735e-06V19.1905C38.3813 29.7893 29.7894 38.3812 19.1906 38.3812V19.1907Z" fill="#FCA397" stroke-width="1px" fill-opacity="1" stroke-opacity="1"></path><path d="M105.894 12.308C107.895 12.3081 109.593 12.8964 110.947 14.0824C112.721 15.6371 113.634 17.9376 113.634 20.684V32.6097H107.533V21.7787C107.533 19.0322 105.978 17.438 103.698 17.4379C101.254 17.4379 99.8627 19.1725 99.8626 21.3119V32.6097H93.6693V12.515H99.8626V15.1371C101.118 13.4363 103.095 12.308 105.894 12.308Z" fill="currentColor" stroke-width="1px" fill-opacity="1" stroke-opacity="1"></path><path d="M51.9268 18.3456L60.2569 7.33293H67.5255L57.7569 19.6991L67.9395 32.5898H60.3477L51.9268 21.4775V32.6093H45.7208V7.33293H51.9268V18.3456Z" fill="currentColor" stroke-width="1px" fill-opacity="1" stroke-opacity="1"></path><path d="M77.7408 12.2626C80.2152 12.2626 82.5209 13.2436 83.7974 15.3398V12.5156H89.9908V32.6093H83.7974V29.7617C83.0621 30.9138 81.0285 32.8876 77.7212 32.8876C75.1767 32.8876 72.5138 31.6998 70.7964 29.3124C70.0375 28.2575 69.4331 26.9627 69.1128 25.3867C68.8977 24.328 68.8404 23.1565 68.8404 21.7919C68.8404 21.0434 69.0431 20.0354 69.1773 19.3886C69.5796 17.4488 70.3692 16.2708 71.2505 15.1904C73.2123 12.7855 75.772 12.2627 77.7408 12.2626ZM79.4253 17.5937C78.1119 17.5937 76.8003 18.1967 76.0044 19.2519C75.3479 20.1225 75.0855 21.322 75.0855 22.5624C75.0855 23.7693 75.3735 24.8755 75.9986 25.7363C76.7947 26.8326 78.0826 27.5312 79.4253 27.5312C80.7626 27.5312 82.0813 26.825 82.8775 25.7363C83.5082 24.8736 83.7651 23.7754 83.7652 22.5624C83.7652 21.291 83.4407 20.1307 82.7544 19.2519C81.9597 18.2344 80.7115 17.5937 79.4253 17.5937Z" fill="currentColor" stroke-width="1px" fill-opacity="1" stroke-opacity="1"></path><path d="M124.751 12.2626C127.225 12.2628 129.531 13.2436 130.807 15.3398V12.5156H137V32.6093H130.807V29.7617C130.072 30.9137 128.038 32.8874 124.731 32.8876C122.187 32.8876 119.524 31.6995 117.807 29.3124C117.048 28.2575 116.442 26.9627 116.122 25.3867C115.907 24.328 115.85 23.1565 115.849 21.7919C115.849 21.0434 116.052 20.0354 116.186 19.3886C116.589 17.4488 117.378 16.2708 118.26 15.1904C120.222 12.7854 122.782 12.2626 124.751 12.2626ZM126.434 17.5937C125.121 17.5938 123.81 18.1968 123.015 19.2519C122.358 20.1225 122.095 21.322 122.095 22.5624C122.095 23.7692 122.383 24.8755 123.008 25.7363C123.804 26.8326 125.092 27.5311 126.434 27.5312C127.772 27.5312 129.091 26.8251 129.888 25.7363C130.518 24.8737 130.775 23.7753 130.775 22.5624C130.775 21.291 130.451 20.1307 129.765 19.2519C128.97 18.2342 127.721 17.5937 126.434 17.5937Z" fill="currentColor" stroke-width="1px" fill-opacity="1" stroke-opacity="1"></path></svg>
    `;
  }

  if (type === 'partner-logo') {
    return `
      <img src="${path}" class="partner-logo" alt="Partner Logo" 
           onerror="this.outerHTML='<span style=&quot;font-size:12px; font-weight:700; opacity:0.5; margin: 0 10px;&quot;>${filename.split('_').pop().replace('.svg','').toUpperCase()}</span>'">
    `;
  }

  if (type === 'soc2') {
    return `
      <img src="${path}" class="soc2-badge-img" alt="SOC2 Compliance Badge" 
           onerror="this.style.display=&quot;none&quot;">
    `;
  }

  return '';
}

/**
 * Checks if a string copy is a draft placeholder and returns formatted HTML
 * @param {string} text - Copy text
 * @param {string} fallbackLabel - Scaffold label if placeholder
 * @returns {string} HTML string
 */
function resolveCopy(text, fallbackLabel = "Draft Content") {
  if (text && text.startsWith("[PLACEHOLDER")) {
    return `
      <div class="copy-placeholder-box">
        <div class="copy-placeholder-badge">⚠️ ${fallbackLabel}</div>
        <p style="font-style: italic; opacity: 0.7;">${text}</p>
      </div>
    `;
  }
  return text;
}

function initScrollAnimations() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => observer.observe(el));
}

function parseAndAnimateStat(el) {
  const original = el.textContent.trim();
  if (original.includes('–') || original.includes('/')) {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.9s ease';
    requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = ''; }));
    return;
  }
  const prefix = (original.match(/^[$€£¥]/) || [''])[0];
  const suffix = (original.match(/[%KMBkmb]+$/) || [''])[0];
  const numStr = original.slice(prefix.length, suffix ? -suffix.length : undefined);
  const target = parseFloat(numStr);
  if (isNaN(target)) return;
  const decimals = (numStr.split('.')[1] || '').length;
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = prefix + (ease * target).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = original;
  };
  requestAnimationFrame(step);
}

function initStatsCounter() {
  const statEls = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        parseAndAnimateStat(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => observer.observe(el));
}

/**
 * Main application renderer
 * @param {Object} config - The vertical industryConfig object
 */
export function renderApp(config) {
  // 1. Establish the color re-skinning token in the document root
  const hexAccent = config.accent || "#ff7a59";
  document.documentElement.style.setProperty('--color-accent', hexAccent);
  
  // Extract RGB values for shadow glow mapping
  const r = parseInt(hexAccent.slice(1, 3), 16) || 255;
  const g = parseInt(hexAccent.slice(3, 5), 16) || 122;
  const b = parseInt(hexAccent.slice(5, 7), 16) || 89;
  document.documentElement.style.setProperty('--color-accent-rgb', `${r}, ${g}, ${b}`);

  // Inject responsive footer background styles dynamically to prevent layout edits
  let styleEl = document.getElementById('dynamic-footer-bg-style');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamic-footer-bg-style';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = `
    .footer-section {
      background-image: url('${config.assets.footer.mobile}');
    }
    @media (min-width: 768px) {
      .footer-section {
        background-image: url('${config.assets.footer.tablet}');
      }
    }
    @media (min-width: 1024px) {
      .footer-section {
        background-image: url('${config.assets.footer.desktop}');
      }
    }
  `;

  // Set document title and meta description dynamically for SEO
  document.title = `Kana for ${config.label} - AI Marketing Orchestration`;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = config.hero.subheadline || `Kana AI Marketing Platform built specifically for ${config.label} brands.`;

  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Clear container
  appContainer.innerHTML = '';

  // ── 1. STICKY NAV RENDER ──
  const activeVertical = config.label;
  const logoHtml = resolveAsset(config.assets.logo, 'logo', 'Kana Logo');
  
  // Clean slugs for dropdown matching folder naming convention
  const getVerticalUrl = (vertical) => {
    const slugMap = {
      "CPG": "cpg",
      "Retail & E-Commerce": "retail-ecommerce",
      "Media & Advertisers": "media-advertisers",
      "Manufacturing": "manufacturing",
      "Financial Services": "financial-services",
      "Pharma": "pharma",
      "Travel & Hospitality": "travel-hospitality"
    };
    return `../${slugMap[vertical] || vertical.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/index.html`;
  };

  // ── Suites: products per suite (left side of the Solutions megamenu) ──
  const solutionProducts = {
    "Campaign Orchestrator":       { href: "/solutions/campaignmanagement",       icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/69901757ec677b2ce290fcb4_Smarter%20Campaign%20Management.svg" },
    "Media Proposal Generator":    { href: "/solutions/mediaproposals",           icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/69901757be05292281eee76e_Media%20Proposal%20Generation.svg" },
    "LLM Command Center":          { href: "/solutions/llmcommandcenter",         icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/69901758dc3503adabece211_Answer%20Engine%20Optimization.svg" },
    "Audience Builder":            { href: "/solutions/audience-manager",         icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/6a07370afa74e1a989f5eb11_Audience%20Manager.svg" },
    "Category Intelligence":       { href: "/solutions/category-intelligence-hub", icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/6a07370a2e3e29f5d03b13d9_Category%20Intelligence%20Hub.svg" },
    "Omni-Channel Media Planner":  { href: "/solutions/mediaplanner",             icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/69901757be05292281eee76e_Media%20Proposal%20Generation.svg" },
    "Marketing Intelligence":      { href: "/solutions/marketingintel",           icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/699017579f378c81f5094a40_Analytics.svg" },
    "Customer Engagement":         { href: "/solutions/customerengagement",       icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/699017586c99f26d8f0a4085_Customer%20Engagement.svg" },
    "Answer Engine Optimization":  { href: "/solutions/aeo",                      icon: "https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/69901758dc3503adabece211_Answer%20Engine%20Optimization.svg" },
  };

  // Suite composition per Industry GTM Assets mapping (KFM / KFP / KFA)
  const suites = [
    { name: "Kana for Marketers",   products: ["Category Intelligence", "Omni-Channel Media Planner", "Audience Builder", "Customer Engagement", "Marketing Intelligence", "Answer Engine Optimization"] },
    { name: "Kana for Publishers",  products: ["Campaign Orchestrator", "Media Proposal Generator", "LLM Command Center", "Audience Builder"] },
    { name: "Kana for Advertisers", products: ["Omni-Channel Media Planner", "Campaign Orchestrator", "Audience Builder", "Marketing Intelligence"] },
  ];

  const suiteColumnsHtml = suites.map(suite => {
    const linksHtml = suite.products.map(name => {
      const p = solutionProducts[name];
      return `
        <a href="${p.href}" class="megamenu-link">
          <img src="${p.icon}" class="megamenu-icon" alt=""/>
          <div class="megamenu-link-text">
            <div class="megamenu-link-name">${name}</div>
          </div>
        </a>`;
    }).join('');
    return `
      <div class="megamenu-col">
        <div class="megamenu-col-title">${suite.name}</div>
        ${linksHtml}
      </div>`;
  }).join('');

  // ── Industries grouped by suite (right side of the Solutions megamenu) ──
  const industrySuiteMap = {
    "CPG": "Kana for Marketers",
    "Retail & E-Commerce": "Kana for Marketers",
    "Manufacturing": "Kana for Marketers",
    "Financial Services": "Kana for Marketers",
    "Pharma": "Kana for Marketers",
    "Travel & Hospitality": "Kana for Marketers",
    "Publishers": "Kana for Publishers",
    "Media & Advertisers": "Kana for Advertisers",
  };

  const industriesListHtml = suites.map(suite => {
    const groupItems = config.nav.industries.filter(ind =>
      (industrySuiteMap[ind] || "Kana for Marketers") === suite.name
    );
    if (groupItems.length === 0) return '';
    const linksHtml = groupItems.map(ind => {
      const isActive = ind.toLowerCase() === activeVertical.toLowerCase();
      const activeClass = isActive ? 'active' : '';
      return `<a href="${getVerticalUrl(ind)}" class="dropdown-item ${activeClass}">${ind}</a>`;
    }).join('');
    return `
      <div class="industries-group-label">${suite.name}</div>
      ${linksHtml}`;
  }).join('');

  const headerHtml = `
    <header class="sticky-header" id="mainHeader">
      <div class="nav-container">
        <a href="../../index.html" class="logo-link">
          ${logoHtml}
        </a>
        
        <nav class="nav-menu">
          <ul class="nav-links-list">
            <li class="nav-item">
              <a href="../../index.html" class="nav-link-item">Home</a>
            </li>
            
            <li class="nav-item dropdown">
              <button class="dropdown-toggle" id="solutionsDropdownBtn" aria-expanded="false" aria-haspopup="true">
                Solutions
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-left: 4px;"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="dropdown-menu megamenu solutions-megamenu" id="solutionsDropdownMenu" role="menu">
                <div class="megamenu-header-band">
                  <a href="/solutions" class="all-solutions-link">
                    <span>All solutions</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style="margin-left: 6px;"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </a>
                </div>
                <div class="megamenu-columns">
                  <!-- Left: Kana suites with their products -->
                  ${suiteColumnsHtml}

                  <!-- Right: Industries grouped by suite -->
                  <div class="megamenu-col industries-col">
                    <div class="megamenu-col-title">By Industry</div>
                    <div class="industries-menu-list">
                      ${industriesListHtml}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li class="nav-item dropdown">
              <button class="dropdown-toggle" id="resourcesDropdownBtn" aria-expanded="false" aria-haspopup="true">
                Resources
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-left: 4px;"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="dropdown-menu megamenu resources-megamenu" id="resourcesDropdownMenu" role="menu">
                <div class="resources__grid">
                  <!-- Left side: Newsroom & FAQ -->
                  <div class="resources__coll">
                    <div class="resources-item-block">
                      <a href="/newsroom" class="resources-block-title">
                        <div class="icon-wrapper news-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/></svg>
                        </div>
                        <span>Newsroom</span>
                        <svg class="chevron-right" width="12" height="12" viewBox="0 0 24 24" fill="none" style="margin-left: 4px;"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </a>
                      <div class="featured-article-card">
                        <div class="article-card-tag">LATEST ARTICLE</div>
                        <a href="https://www.businesswire.com/news/home/20260326828346/en/Transparent-Partners-and-Kana-Announce-Strategic-Partnership-to-Deliver-Enterprise-Grade-Agentic-AI-for-Marketing" target="_blank" class="article-card-link">
                          <div class="article-card-cover">
                            <img src="https://cdn.prod.website-files.com/6985f304223445dc4a40285e/69c57c9b7edff6465930f1a0_Transparent%20Partners-1.avif" alt="Transparent Partners"/>
                          </div>
                          <div class="article-card-body">
                            <div class="article-card-title" style="line-height:1.2; margin-bottom:4px;">Transparent Partners and Kana Strategic Partnership</div>
                            <div class="article-card-desc">Delivering Enterprise-Grade Agentic AI for Marketing tech investments.</div>
                            <span class="read-more-text">Read More &nbsp;›</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="resources-item-block">
                      <a href="/faq" class="resources-block-title">
                        <div class="icon-wrapper faq-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H5c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.11-.45 2.12-1.17 2.85z" fill="currentColor"/></svg>
                        </div>
                        <span>FAQ</span>
                        <svg class="chevron-right" width="12" height="12" viewBox="0 0 24 24" fill="none" style="margin-left: 4px;"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </a>
                    </div>
                  </div>
                  
                  <!-- Right side: Content & Blog -->
                  <div class="resources__coll">
                    <div class="resources-item-block">
                      <a href="/content" class="resources-block-title">
                        <div class="icon-wrapper content-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" fill="currentColor"/></svg>
                        </div>
                        <span>Content</span>
                        <svg class="chevron-right" width="12" height="12" viewBox="0 0 24 24" fill="none" style="margin-left: 4px;"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </a>
                      <ul class="resources-content-links">
                        <li><a href="/content?category=White+Papers" class="content-nav-sublink">White Papers</a></li>
                        <li><a href="/content?category=Product+Materials" class="content-nav-sublink">Product Materials</a></li>
                        <li><a href="/content?category=Video" class="content-nav-sublink">Video</a></li>
                      </ul>
                    </div>
                    <div class="resources-item-block" style="margin-top: 8px;">
                      <a href="/blog" class="resources-block-title">
                        <div class="icon-wrapper blog-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/></svg>
                        </div>
                        <span>Blog</span>
                        <svg class="chevron-right" width="12" height="12" viewBox="0 0 24 24" fill="none" style="margin-left: 4px;"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="megamenu-substack-footer">
                  <a href="https://www.tomisms.com/" target="_blank" class="substack-footer-link">
                    <img src="https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/6989c7707a282a65be10cfbc_9158d4d99cb920f8713a950358a9757c_Frame%202087330851.avif" alt=""/>
                    <span>Tom Chavez's Substack</span>
                  </a>
                  <a href="https://www.problem-is.com/" target="_blank" class="substack-footer-link">
                    <img src="https://cdn.prod.website-files.com/6938c88532164b75764d7ec5/6989c77076666dfa1c21ebef_Frame%202087330852.avif" alt=""/>
                    <span>Vivek Vaidya's Substack</span>
                  </a>
                </div>
              </div>
            </li>
            
            <li class="nav-item dropdown">
              <button class="dropdown-toggle" id="companyDropdownBtn" aria-expanded="false" aria-haspopup="true">
                Company
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-left: 4px;"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="dropdown-menu company-dropdown" id="companyDropdownMenu" role="menu">
                <a href="/about" class="company-dropdown-link">
                  <div class="company-link-icon about-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/></svg>
                  </div>
                  <span>About Kana</span>
                </a>
                <a href="/partners" class="company-dropdown-link">
                  <div class="company-link-icon partners-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12.5 8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8.5-5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-1 12H4V9h17v10z" fill="currentColor"/></svg>
                  </div>
                  <span>Partners</span>
                </a>
                <a href="/investors" class="company-dropdown-link">
                  <div class="company-link-icon investors-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.2c-.07-2.01-1.42-3.66-3.7-4.13V3h-4v2.01c-2.43.51-4.14 2.13-4.14 4.41 0 2.82 2.26 4.24 5.7 5.08 2.51.6 3.1 1.38 3.1 2.33 0 1.09-1.01 1.85-2.7 1.85-2 0-2.83-.98-2.9-2.3H5c.07 2.42 1.94 4.09 4.5 4.62V21h4v-2.02c2.44-.49 4.5-2.11 4.5-4.49 0-3.39-2.93-4.01-6.2-4.59z" fill="currentColor"/></svg>
                  </div>
                  <span>Investors</span>
                </a>
                <a href="/events" class="company-dropdown-link">
                  <div class="company-link-icon events-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v2h-5z" fill="currentColor"/></svg>
                  </div>
                  <span>Events</span>
                </a>
                <a href="/contact-us" class="company-dropdown-link">
                  <div class="company-link-icon contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
                  </div>
                  <span>Contact Us</span>
                </a>
                <a href="/legal" class="company-dropdown-link">
                  <div class="company-link-icon legal-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
                  </div>
                  <span>Legal</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
        
        <a href="${config.nav.cta.href}" class="kana-bubble-btn compact dark-body">
          <span class="btn-body">${config.nav.cta.text}</span>
          <span class="btn-leaf"></span>
        </a>
      </div>
    </header>
  `;

  const heroImageHtml = resolveAsset(config.hero.image, 'image', `${config.label} Hero Visual`);

  const heroHtml = `
    <section class="hero-section" id="hero" style="background-image: url('${config.assets.heroBg}');">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-left">
          <h1 class="type-h1 hero-headline">${config.hero.headline}</h1>
          <p class="type-body hero-subheadline">${config.hero.subheadline}</p>
          <div class="hero-ctas">
            <a href="${config.hero.primaryCta.href}" class="kana-bubble-btn">
              <span class="btn-body">${config.hero.primaryCta.text}</span>
              <span class="btn-leaf"></span>
            </a>
            ${config.hero.secondaryCta ? `<a href="${config.hero.secondaryCta.href}" class="btn-ghost">${config.hero.secondaryCta.text}<svg width="14" height="10" viewBox="0 0 14 10" fill="none" style="margin-left:4px;flex-shrink:0;"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>` : ''}
          </div>
        </div>
        <div class="hero-right">
          <div class="hero-img-wrapper">
            ${heroImageHtml}
          </div>
        </div>
      </div>
    </section>
  `;

  // ── 3. PAIN POINTS SECTION RENDER ──
  const painCardsHtml = config.painPoints.map((pain, index) => {
    const blogLinkHtml = pain.blog
      ? `<a href="${pain.blog.href}" class="pain-blog-link">${pain.blog.text} &nbsp;›</a>`
      : '';
    return `
      <div class="pain-card glass reveal" data-delay="${index + 1}">
        <div class="pain-card-top">
          <h3 class="type-heading pain-title">${pain.title}</h3>
          <p class="type-body pain-desc">${pain.description}</p>
          ${blogLinkHtml}
        </div>
      </div>
    `;
  }).join('');

  const painPointsHtml = `
    <section class="pain-section section-padding dot-grid-bg" id="pain-points">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="type-h2 section-title">The gaps your competitors are closing</h2>
        </div>
        <div class="pain-grid">
          ${painCardsHtml}
        </div>
      </div>
    </section>
  `;

  // ── 4. SOLUTIONS SECTION RENDER ──
  const solutionsRowsHtml = config.solutions.map((sol, index) => {
    const hasVideo = sol.video !== null && sol.video !== undefined;
    const mediaHtml = hasVideo 
      ? resolveAsset(sol.video, 'video', `${sol.feature} Demo Video`)
      : resolveAsset(sol.image, 'solution-image', `${sol.feature} Preview`);
    const blogLinkHtml = sol.blog 
      ? ` <a href="${sol.blog.href}" class="solution-blog-link">${sol.blog.text} &nbsp;›</a>` 
      : '';

    return `
      <div class="solution-row reveal" id="solution-row-${index}" style="background-image: url('${sol.bg}');">
        <div class="solution-text-block">
          <span class="type-small-body solution-label">${sol.feature}</span>
          <h3 class="type-large-title solution-title">${sol.title}</h3>
          <p class="type-body solution-desc">${sol.description}${blogLinkHtml}</p>
        </div>
        <div class="solution-visual-block">
          ${mediaHtml}
        </div>
      </div>
    `;
  }).join('');

  const solutionsHtml = `
    <section class="solutions-section section-padding" id="solutions">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="type-h2 section-title">${config.solutionsTitle || "Build agentic applications that support your entire team"}</h2>
        </div>
        <div class="solutions-list">
          ${solutionsRowsHtml}
        </div>
      </div>
    </section>
  `;

  // ── 4.5 PERSONAS SECTION RENDER ──
  let personasHtml = '';
  if (config.personas && config.personas.length > 0) {
    const personaTabsHtml = config.personas.map((persona, index) => {
      const isActive = index === 0;
      return `
        <button role="tab" 
                aria-selected="${isActive ? 'true' : 'false'}" 
                aria-controls="persona-panel-${index}" 
                id="persona-tab-${index}" 
                class="persona-tab ${isActive ? 'active' : ''}" 
                data-target="persona-panel-${index}">
          ${persona.role}
        </button>
      `;
    }).join('');

    const personaPanelsHtml = config.personas.map((persona, index) => {
      const isActive = index === 0;
      const painPointsListHtml = persona.painPoints.map(pain => {
        const blogLinkHtml = pain.blog 
          ? ` <a href="${pain.blog.href}" class="pain-blog-link">${pain.blog.text} &nbsp;›</a>` 
          : '';
        return `
          <div class="persona-pain-item">
            <div class="persona-pain-bullet"></div>
            <div class="persona-pain-body">
              <p class="type-body persona-pain-text">${pain.text}${blogLinkHtml}</p>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div role="tabpanel" 
             id="persona-panel-${index}" 
             aria-labelledby="persona-tab-${index}" 
             class="persona-panel-content" 
             style="display: ${isActive ? 'grid' : 'none'};">
           <div class="persona-pains-list">
             ${painPointsListHtml}
           </div>
           <div class="persona-solution-card-wrapper">
             <div class="persona-solution-card glass">
               <h4 class="type-heading persona-sol-name">${persona.solution.name}</h4>
               <p class="type-body persona-sol-desc">${persona.solution.description}</p>
               <a href="${persona.solution.linkHref}" class="persona-sol-link">
                 <span>${persona.solution.linkLabel}</span>
                 <svg width="14" height="10" viewBox="0 0 14 10" fill="none" class="persona-sol-chevron">
                   <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
               </a>
             </div>
           </div>
         </div>
       `;
    }).join('');

    personasHtml = `
      <section class="persona-section section-padding dot-grid-bg" id="personas">
        <div class="container">
          <div class="section-header reveal">
            <h2 class="type-h2 section-title">We build solutions to support your team roles</h2>
            <p class="type-body persona-subtext">Tailored capabilities designed to address role-specific challenges and achieve your business goals.</p>
          </div>

          <div role="tablist" class="persona-tabs reveal">
            ${personaTabsHtml}
          </div>
          
          <div class="persona-panel-wrapper">
             ${personaPanelsHtml}
          </div>
        </div>
      </section>
    `;
  }

  // ── 4.6 INTERACTIVE SHOWCASE SECTION RENDER ──
  let showcaseHtml = '';
  if (config.showcase) {
    const panelsHtml = config.showcase.columns.map((col, index) => {
      const isActive = index === 0;
      return `
        <div class="showcase-panel ${isActive ? 'active' : ''}" id="showcase-panel-${index}">
          <img src="${col.image}" class="showcase-img" alt="${col.title} visual" onerror="this.outerHTML='<div class=&quot;asset-placeholder&quot;><div>[Failed to load Image]</div></div>'">
        </div>
      `;
    }).join('');

    const triggersHtml = config.showcase.columns.map((col, index) => {
      const isActive = index === 0;
      return `
        <div class="showcase-trigger ${isActive ? 'active' : ''}" data-target="showcase-panel-${index}" id="showcase-trigger-${index}">
          <h3 class="showcase-col-title">${col.title}</h3>
          <p class="showcase-col-desc">${col.description}</p>
          <a href="${col.linkHref}" class="showcase-col-link">
            <span>${col.linkLabel}</span>
            <div class="showcase-arrow-btn">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </a>
        </div>
      `;
    }).join('');

    showcaseHtml = `
      <section class="showcase-section section-padding reveal" id="showcase">
        <div class="container">
          <h2 class="showcase-headline">${config.showcase.headline}</h2>
          
          <div class="showcase-layout-grid">
            <!-- Left column: Steppers triggers list -->
            <div class="showcase-steppers-col">
              <div class="showcase-triggers-list">
                ${triggersHtml}
              </div>
            </div>
            
            <!-- Right column: Mockup Display -->
            <div class="showcase-visual-col">
              <div class="showcase-visual-card">
                <div class="showcase-panels-wrapper">
                  ${panelsHtml}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // ── 4.65 FEATURED CONTENT BAND RENDER ──
  let featuredContentHtml = '';
  if (config.featuredContent) {
    const fc = config.featuredContent;
    const fcImageHtml = fc.image
      ? `<div class="featured-content-media"><img src="${fc.image}" alt="${fc.title}" onerror="this.closest('.featured-content-media').style.display='none';"></div>`
      : '';
    const fcCtaHtml = fc.cta
      ? `<a href="${fc.cta.href}" class="featured-content-link">${fc.cta.text}<svg width="14" height="10" viewBox="0 0 14 10" fill="none" style="margin-left:6px;"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`
      : '';
    featuredContentHtml = `
      <section class="featured-content-section reveal" id="featured-content">
        <div class="container">
          <div class="featured-content-card">
            <div class="featured-content-body">
              ${fc.heading ? `<span class="featured-content-heading">${fc.heading}</span>` : ''}
              ${fc.type ? `<span class="featured-content-type">${fc.type}</span>` : ''}
              <h3 class="featured-content-title">${fc.title}</h3>
              ${fc.description ? `<p class="featured-content-desc">${fc.description}</p>` : ''}
              ${fcCtaHtml}
            </div>
            ${fcImageHtml}
          </div>
        </div>
      </section>
    `;
  }

  // ── 4.7 INTERACTIVE STACK SHOWCASE SECTION RENDER ──
  // Rotating "works on top of ___" words; verticals may override via
  // config.stackShowcase.rotations = [{ text, className }, ...]
  const defaultStackRotations = [
    { text: 'Snowflake', className: 'color-snowflake' },
    { text: 'Databricks', className: 'color-databricks' },
    { text: 'BigQuery', className: 'color-bigquery' },
    { text: 'Salesforce', className: 'color-salesforce' },
    { text: 'Marketo', className: 'color-marketo' },
    { text: 'your stack', className: 'color-kana' }
  ];
  const stackRotations = (config.stackShowcase && config.stackShowcase.rotations) || defaultStackRotations;

  let stackShowcaseHtml = '';
  if (config.stackShowcase) {
    const panelsHtml = config.stackShowcase.columns.map((col, index) => {
      const isActive = index === 0;
      return `
        <div class="stack-panel ${isActive ? 'active' : ''}" id="stack-panel-${index}">
          <img src="${col.image}" class="stack-img" alt="${col.title} visual" onerror="this.outerHTML='<div class=&quot;asset-placeholder&quot;><div>[Failed to load Image]</div></div>'">
        </div>
      `;
    }).join('');

    const stackCardsHtml = config.stackShowcase.columns.map((col, index) => {
      const isActive = index === 0;
      return `
        <div class="stack-card-item ${isActive ? 'active' : ''}" data-index="${index}" id="stack-card-${index}">
          <h3 class="stack-card-title">${col.title}</h3>
          <p class="stack-card-desc">${col.description}</p>
        </div>
      `;
    }).join('');

    stackShowcaseHtml = `
      <section class="stack-showcase-section section-padding reveal" id="stack-showcase">
        <div class="container">
          <h2 class="stack-headline">
            Kana works on<br>
            top of <span class="rotating-word ${stackRotations[0].className}" id="rotatingStackWord">${stackRotations[0].text}</span><br>
            not instead of it.
          </h2>
          <p class="stack-subtitle">${config.stackShowcase.subtitle}</p>

          <div class="stack-showcase-grid">
            <div class="stack-showcase-left">
              <div class="stack-visual-card">
                <div class="stack-panels-wrapper">
                  ${panelsHtml}
                </div>
              </div>
            </div>

            <div class="stack-showcase-right">
              <div class="stack-cards-list">
                ${stackCardsHtml}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // ── 5. STATS BAR SECTION RENDER ──
  const statsColsHtml = config.stats.map((st, index) => {
    return `
      <div class="stat-item reveal" data-delay="${index + 1}">
        <span class="type-h2 stat-number">${st.number}</span>
        <span class="type-body stat-label">${st.label}</span>
      </div>
    `;
  }).join('');

  const statsBarHtml = `
    <section class="stats-bar">
      <div class="container stats-grid">
        ${statsColsHtml}
      </div>
    </section>
  `;

  // ── 6. SOCIAL PROOF & TESTIMONIAL RENDER ──
  const logoSet = config.assets.partnerLogos.map(path =>
    resolveAsset(path, 'partner-logo', 'Partner Logo')
  ).join('');
  const logosHtml = logoSet + logoSet;

  // Handle testimonial scaffolding / placeholders
  const isQuotePlaceholder = config.testimonial.quote.startsWith("[PLACEHOLDER");
  
  const testLogoHtml = config.testimonial.logo 
    ? `<img src="${config.testimonial.logo}" class="testimonial-brand-logo" alt="${config.testimonial.name}'s company logo" onerror="this.style.display='none';">`
    : '';

  const testimonialHtml = `
    <section class="social-proof-section section-padding" id="social-proof">
      <div class="container">
        <h4 class="logo-strip-title">${config.logoStripTitle || "Integrates with the platforms you already run"}</h4>
        <div class="logo-strip-wrapper">
          <div class="logo-strip">
            ${logosHtml}
          </div>
        </div>
        
        <div class="testimonial-block">
          <div class="testimonial-card reveal ${isQuotePlaceholder ? 'copy-placeholder-box' : ''}">
            ${testLogoHtml}
            <p class="testimonial-quote">
              “${resolveCopy(config.testimonial.quote, "Draft Testimonial Scenario Placeholder")}”
            </p>
            <div class="testimonial-author">
              <span class="author-name">${isQuotePlaceholder ? '[Customer Name]' : config.testimonial.name}</span>
              <span class="author-title">${isQuotePlaceholder ? '[Job Title], [Brand]' : config.testimonial.title}</span>
            </div>
            <a href="#demo" class="btn-testimonial-story">Read the story &nbsp;›</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // ── 7. FAQ ACCORDION SECTION RENDER ──
  const faqItemsHtml = config.faq.map((faq, index) => {
    const isAnswerPlaceholder = faq.a.startsWith("[PLACEHOLDER");
    const faqId = `faq-item-${index}`;
    return `
      <div class="faq-item reveal" id="${faqId}">
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-panel-${index}">
          <h3 class="type-heading faq-question">${faq.q}</h3>
          <svg class="faq-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="faq-panel" id="faq-panel-${index}" role="region" aria-labelledby="${faqId}">
          <div class="faq-answer type-body">
            ${resolveCopy(faq.a, "Draft FAQ Answer Scaffold")}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const faqHtml = `
    <section class="faq-section section-padding" id="faq">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="type-h2 section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          ${faqItemsHtml}
        </div>
      </div>
    </section>
  `;

  // ── 8. FINAL CTA BAND SECTION RENDER ──
  const soc2Html = resolveAsset(config.assets.soc2Badge, 'soc2', 'SOC2 Badge');
  const finalCtaHtml = `
    <section class="final-cta-band section-padding" id="cta" style="background-image: url('${config.assets.ctaBg}');">
      <div class="final-cta-overlay"></div>
      <div class="container final-cta-content reveal">
        <h2 class="type-h2" style="color: var(--color-midnight-blue); max-width: 800px; line-height: 1.1;">
          ${config.finalCta.headline}
        </h2>
        <a href="${config.finalCta.cta.href}" class="kana-bubble-btn">
          <span class="btn-body" style="font-size: 18px; padding: 16px 36px;">${config.finalCta.cta.text}</span>
          <span class="btn-leaf"></span>
        </a>
        <p class="final-cta-sublabel">30-minute demo &nbsp;·&nbsp; No commitment required</p>
      </div>
      <div class="soc2-badge-wrapper">
        ${soc2Html}
      </div>
    </section>
  `;

  // ── 9. FOOTER SECTION RENDER ──
  const footerHtml = `
    <footer class="footer-section">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            ${logoHtml}
            <p class="type-small-body footer-motto">
              The AI-first operating system for enterprise marketing orchestration.
            </p>
          </div>
          <div class="footer-nav">
            <h5 class="footer-nav-title">Platform</h5>
            <ul class="footer-nav-links">
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#social-proof">Customers</a></li>
            </ul>
          </div>
          <div class="footer-nav">
            <h5 class="footer-nav-title">Legal</h5>
            <ul class="footer-nav-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/security">Security & Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <span>&copy; 2026 Kana Technologies, Inc. All rights reserved.</span>
          <span>SOC 2 Type II Certified AI Orchestration</span>
        </div>
      </div>
    </footer>
  `;

  // Combine entire page structure
  appContainer.innerHTML = `
    ${headerHtml}
    <main>
      ${heroHtml}
      ${painPointsHtml}
      ${showcaseHtml}
      ${stackShowcaseHtml}
      ${featuredContentHtml}
      ${personasHtml}
      ${solutionsHtml}
      ${statsBarHtml}
      ${testimonialHtml}
      ${faqHtml}
      ${finalCtaHtml}
    </main>
    ${footerHtml}
  `;

  // ── REGISTER EVENT LISTENERS ──
  
  // 1. Sticky Nav Scrolled styling
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Navigation Megamenu Dropdown Manager
  const dropdowns = [
    { btnId: 'solutionsDropdownBtn', menuId: 'solutionsDropdownMenu' },
    { btnId: 'resourcesDropdownBtn', menuId: 'resourcesDropdownMenu' },
    { btnId: 'companyDropdownBtn', menuId: 'companyDropdownMenu' }
  ];

  dropdowns.forEach(d => {
    const btn = document.getElementById(d.btnId);
    const menu = document.getElementById(d.menuId);
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Close all dropdowns
      dropdowns.forEach(other => {
        const otherBtn = document.getElementById(other.btnId);
        if (otherBtn) {
          otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    dropdowns.forEach(d => {
      const btn = document.getElementById(d.btnId);
      const menu = document.getElementById(d.menuId);
      if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 3. FAQ Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other panels for clean accordion behavior
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-panel').style.maxHeight = null;
      });

      // Toggle active state on current
      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        // Smooth slide-down height calculation
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // 4. Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Persona selector logic
  const personaTabs = document.querySelectorAll('.persona-tab');
  const personaPanels = document.querySelectorAll('.persona-panel-content');
  
  personaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      personaTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      
      // Activate clicked tab
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      
      const targetId = tab.getAttribute('data-target');
      // Hide all panels, show target
      personaPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.style.display = 'grid';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });

  // 6. Scroll reveal animations
  initScrollAnimations();

  // 7. Animated stats counter
  initStatsCounter();

  // 8. Showcase Section tab switching interactivity with auto-transition
  if (config.showcase) {
    const showcaseTriggers = document.querySelectorAll('.showcase-trigger');
    const showcasePanels = document.querySelectorAll('.showcase-panel');
    let autoTransitionInterval = null;
    const intervalTime = 12000; // 12 seconds auto-transition

    function activateShowcaseTab(index) {
      const trigger = showcaseTriggers[index];
      if (!trigger) return;
      const targetId = trigger.getAttribute('data-target');

      // Deactivate all triggers
      showcaseTriggers.forEach(t => t.classList.remove('active'));

      // Hide all panels
      showcasePanels.forEach(p => p.classList.remove('active'));
      // Show target panel
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      // Force layout reflow on target to ensure the vertical bar animation restarts
      trigger.offsetHeight;
      trigger.classList.add('active');
    }

    function startShowcaseTimer() {
      if (autoTransitionInterval) {
        clearInterval(autoTransitionInterval);
      }
      autoTransitionInterval = setInterval(() => {
        let activeIndex = 0;
        showcaseTriggers.forEach((t, idx) => {
          if (t.classList.contains('active')) {
            activeIndex = idx;
          }
        });
        const nextIndex = (activeIndex + 1) % showcaseTriggers.length;
        activateShowcaseTab(nextIndex);
      }, intervalTime);
    }

    showcaseTriggers.forEach((trigger, idx) => {
      trigger.addEventListener('click', () => {
        activateShowcaseTab(idx);
        // Restart the timer so the user has full intervalTime to read the manually selected tab
        startShowcaseTimer();
      });
    });

    // Start auto transition initially
    startShowcaseTimer();
  }

  // ── 9. STACK SHOWCASE SECTION INTERACTIVITY & ROTATION ──
  if (config.stackShowcase) {
    const stackTriggers = document.querySelectorAll('.stack-card-item');
    const rotatingWordEl = document.getElementById('rotatingStackWord');

    // Add inline styling helper for opacity animations
    if (rotatingWordEl) {
      rotatingWordEl.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s ease';
    }

    // Rotation variables (config-driven; same fallback as the render block)
    const stackRotations = (config.stackShowcase && config.stackShowcase.rotations) || [
      { text: 'Snowflake', className: 'color-snowflake' },
      { text: 'Databricks', className: 'color-databricks' },
      { text: 'BigQuery', className: 'color-bigquery' },
      { text: 'Salesforce', className: 'color-salesforce' },
      { text: 'Marketo', className: 'color-marketo' },
      { text: 'your stack', className: 'color-kana' }
    ];
    let rotationIndex = 0;

    // Start text rotation interval
    setInterval(() => {
      if (!rotatingWordEl) return;
      rotationIndex = (rotationIndex + 1) % stackRotations.length;
      const current = stackRotations[rotationIndex];
      
      // Update text with transition fade
      rotatingWordEl.style.opacity = '0';
      setTimeout(() => {
        rotatingWordEl.textContent = current.text;
        
        // Remove all previous color classes
        stackRotations.forEach(r => rotatingWordEl.classList.remove(r.className));
        // Add current color class
        rotatingWordEl.classList.add(current.className);
        
        rotatingWordEl.style.opacity = '1';

      }, 400);
    }, 3000);

    const stackPanels = document.querySelectorAll('.stack-panel');
    // Card selection interactive logic
    stackTriggers.forEach((trigger, idx) => {
      trigger.addEventListener('click', () => {
        // Toggle active card state
        stackTriggers.forEach(t => t.classList.remove('active'));
        trigger.classList.add('active');

        // Toggle active mockup image panel
        stackPanels.forEach(p => p.classList.remove('active'));
        const targetPanel = document.getElementById(`stack-panel-${idx}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }
}


