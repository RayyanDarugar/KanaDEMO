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

  const industriesListHtml = config.nav.industries.map(ind => {
    const isActive = ind.toLowerCase() === activeVertical.toLowerCase();
    const activeClass = isActive ? 'active' : '';
    return `<a href="${getVerticalUrl(ind)}" class="dropdown-item ${activeClass}">${ind}</a>`;
  }).join('');

  const headerHtml = `
    <header class="sticky-header" id="mainHeader">
      <div class="nav-container">
        <a href="../../index.html" class="logo-link">
          ${logoHtml}
        </a>
        
        <nav class="nav-menu">
          <div class="nav-item">
            <button class="dropdown-toggle" id="industriesDropdownBtn" aria-expanded="false" aria-haspopup="true">
              Industries
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="dropdown-menu" id="industriesDropdownMenu" role="menu">
              ${industriesListHtml}
            </div>
          </div>
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
    return `
      <div class="pain-card glass">
        <div class="pain-card-top">
          <h3 class="type-heading pain-title">${pain.title}</h3>
          <p class="type-body pain-desc">${pain.description}</p>
        </div>
        <div class="pain-callout">
          <span class="pain-callout-header">Research Fact (KAN-24)</span>
          <span>${pain.stat}</span>
        </div>
      </div>
    `;
  }).join('');

  const painPointsHtml = `
    <section class="pain-section section-padding" id="pain-points">
      <div class="container">
        <div class="section-header">
          <h2 class="type-h2 section-title">Why this matters to you</h2>
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

    return `
      <div class="solution-row" id="solution-row-${index}" style="background-image: url('${sol.bg}');">
        <div class="solution-text-block">
          <div class="solution-icon-wrapper">
            <img src="${sol.icon}" class="solution-icon" alt="" onerror="this.outerHTML='<svg class=&quot;solution-icon&quot; viewBox=&quot;0 0 24 24&quot;><path d=&quot;M12 2L2 22h20L12 2z&quot;></path></svg>'">
          </div>
          <span class="type-small-body solution-label">${sol.feature}</span>
          <h3 class="type-large-title solution-title">${sol.title}</h3>
          <p class="type-body solution-desc">${sol.description}</p>
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
        <div class="section-header">
          <h2 class="type-h2 section-title">Orchestrated AI Solutions</h2>
        </div>
        <div class="solutions-list">
          ${solutionsRowsHtml}
        </div>
      </div>
    </section>
  `;

  // ── 5. STATS BAR SECTION RENDER ──
  const statsColsHtml = config.stats.map(st => {
    return `
      <div class="stat-item">
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
  const logosHtml = config.assets.partnerLogos.map(path => {
    return resolveAsset(path, 'partner-logo', 'Partner Logo');
  }).join('');

  // Handle testimonial scaffolding / placeholders
  const isQuotePlaceholder = config.testimonial.quote.startsWith("[PLACEHOLDER");
  
  const testLogoHtml = config.testimonial.logo 
    ? `<img src="${config.testimonial.logo}" class="testimonial-brand-logo" alt="${config.testimonial.name}'s company logo" onerror="this.style.display='none';">`
    : '';

  const testimonialHtml = `
    <section class="social-proof-section section-padding" id="social-proof">
      <div class="container">
        <h4 class="logo-strip-title">Trusted by Leading Global Enterprises</h4>
        <div class="logo-strip-wrapper">
          <div class="logo-strip">
            ${logosHtml}
          </div>
        </div>
        
        <div class="testimonial-block">
          <div class="testimonial-card ${isQuotePlaceholder ? 'copy-placeholder-box' : ''}">
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
      <div class="faq-item" id="${faqId}">
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
        <div class="section-header">
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
      <div class="container final-cta-content">
        <h2 class="type-h2" style="color: var(--color-midnight-blue); max-width: 800px; line-height: 1.1;">
          ${config.finalCta.headline}
        </h2>
        <a href="${config.finalCta.cta.href}" class="kana-bubble-btn">
          <span class="btn-body" style="font-size: 18px; padding: 16px 36px;">${config.finalCta.cta.text}</span>
          <span class="btn-leaf"></span>
        </a>
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

  // 2. Navigation Industries Dropdown toggle
  const dropdownBtn = document.getElementById('industriesDropdownBtn');
  const dropdownMenu = document.getElementById('industriesDropdownMenu');

  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = dropdownBtn.getAttribute('aria-expanded') === 'true';
    dropdownBtn.setAttribute('aria-expanded', !expanded);
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownBtn.setAttribute('aria-expanded', 'false');
    }
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
}
