document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Sticky Nav scrolled state
  // ==========================================
  const header = document.querySelector('.sticky-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 2. Dropdown Expandable (Solutions)
  // ==========================================
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
      dropdownToggle.setAttribute('aria-expanded', !expanded);
    });

    document.addEventListener('click', () => {
      dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // ==========================================
  // 3. Use Cases Tabs Interactivity
  // ==========================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      // Update active button state
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active panel state
      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // ==========================================
  // 4. Feature Split Panel Interactivity
  // ==========================================
  const capItems = document.querySelectorAll('.split-cap-item');
  const visualPanels = document.querySelectorAll('.split-visual-panel');

  capItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');

      // Update active list item
      capItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Update active visual panel
      visualPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // ==========================================
  // 5. General Accordion Interactivity
  // ==========================================
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other accordions inside the same container
      const siblings = item.parentElement.querySelectorAll('.accordion-item');
      siblings.forEach(sib => {
        sib.classList.remove('active');
        sib.querySelector('.accordion-body').style.maxHeight = '0px';
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        body.style.maxHeight = '0px';
      }
    });
  });

  // Simple statistics count-up animations on load
  const statNumbers = document.querySelectorAll('.hero-stat-num');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const parseNumber = (val) => {
    const prefix = val.match(/^[$+]/) ? val[0] : '';
    const suffix = val.match(/[%xX]$/) ? val[val.length - 1] : '';
    const cleanNum = parseFloat(val.replace(/[^0-9.]/g, ''));
    return { prefix, suffix, cleanNum };
  };

  const animateNumber = (el) => {
    const originalText = el.textContent.trim();
    if (originalText.includes('M') || originalText.includes('B') || isNaN(parseFloat(originalText.replace(/[^0-9.]/g, '')))) {
      return; // skip large strings or complex labels
    }
    const { prefix, suffix, cleanNum } = parseNumber(originalText);
    const duration = 1200;
    const startTime = performance.now();
    const isDecimal = originalText.includes('.');
    const decimals = isDecimal ? (originalText.split('.')[1] || '').length : 0;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease out
      const currentVal = (ease * cleanNum).toFixed(decimals);
      el.textContent = `${prefix}${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = originalText;
      }
    };
    requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(num => statsObserver.observe(num));
});
