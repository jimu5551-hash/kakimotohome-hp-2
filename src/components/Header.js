export const Header = () => {
  return `
    <header class="header">
      <div class="header-container">
        <a href="/" class="logo">
          <img src="/logo.avif" alt="柿本ホーム産業" class="logo-img" />
        </a>

        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="/" class="nav-link">ホーム</a></li>
            <li class="nav-item"><a href="/gallery.html" class="nav-link">施工事例</a></li>
            <li class="nav-item"><a href="#philosophy" class="nav-link">私たちについて</a></li>
            <li class="nav-item"><a href="#services" class="nav-link">事業案内</a></li>
            <li class="nav-item"><a href="#company" class="nav-link">会社概要</a></li>
            <li class="header-contact nav-only-contact">
                <a href="tel:0120-654-711" class="header-tel">
                    <span class="tel-top-row">
                        <span class="tel-free-badge">通話無料</span>
                        <span class="tel-label">お気軽にお電話ください</span>
                    </span>
                    <span class="tel-number-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="tel-phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span class="tel-number">0120-654-711</span>
                    </span>
                </a>
                <a href="/#contact" class="nav-link btn-header">お問い合わせ</a>
            </li>
          </ul>
        </nav>

        <!-- Always-visible phone + hamburger (shown when nav collapses) -->
        <div class="header-right-mobile">
          <a href="tel:0120-654-711" class="mobile-tel">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="tel-phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span class="mobile-tel-number">0120-654-711</span>
          </a>
          <button class="mobile-menu-toggle" aria-label="メニューを開く">
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
    <style>
      /* ======================================================
         HEADER — Bulletproof layout (no-wrap + flexible gap)
         ====================================================== */
      .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: rgba(255, 255, 255, 0.95);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        padding: 0.75rem 0;
        transition: all 0.3s ease;
      }

      .header-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 clamp(1rem, 2vw, 2rem);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: clamp(0.5rem, 1.5vw, 1.5rem);
      }

      /* ---- Logo ---- */
      .logo {
        display: flex;
        align-items: center;
        flex-shrink: 0;            /* NEVER compress the logo */
      }

      .logo-img {
        height: clamp(45px, 5vw, 65px);
        width: auto;
        display: block;
      }

      /* ---- Navigation ---- */
      .nav-list {
        display: flex;
        gap: clamp(0.8rem, 1.5vw, 2rem);   /* flexible gap */
        align-items: center;
        flex-wrap: nowrap;                   /* NEVER wrap */
      }

      .nav-item {
        white-space: nowrap;                 /* NEVER break nav text */
        flex-shrink: 0;                      /* NEVER compress */
      }

      .nav-link {
        font-size: clamp(0.8rem, 0.9vw, 1rem);   /* flexible font */
        font-weight: 500;
        letter-spacing: 0.03em;
        color: var(--color-text-primary);
        position: relative;
        text-decoration: none;
        white-space: nowrap;
      }

      .nav-link:hover {
        color: var(--color-accent);
      }

      /* ---- Header Contact Block ---- */
      .header-contact {
        display: flex;
        align-items: center;
        gap: clamp(0.5rem, 1vw, 1rem);
        margin-left: clamp(0.3rem, 0.8vw, 1rem);
        padding-left: clamp(0.5rem, 1vw, 1.5rem);
        border-left: 1px solid rgba(0,0,0,0.1);
        white-space: nowrap;
        flex-shrink: 0;
      }

      .header-tel {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-decoration: none;
        color: var(--color-text-primary);
        line-height: 1.2;
        padding: 0.4rem 0.8rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        white-space: nowrap;
      }

      .header-tel:hover {
        background: rgba(216, 141, 45, 0.06);
      }

      .tel-top-row {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        margin-bottom: 0.15rem;
      }

      .tel-free-badge {
        font-size: 0.55rem;
        font-weight: 700;
        color: #fff;
        background: var(--color-accent);
        padding: 0.05rem 0.35rem;
        border-radius: 3px;
        letter-spacing: 0.05em;
      }

      .tel-label {
        font-size: 0.65rem;
        color: var(--color-text-secondary);
      }

      .tel-number-row {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .tel-phone-icon {
        color: var(--color-accent);
        flex-shrink: 0;
      }

      .tel-number {
        font-size: clamp(1.1rem, 1.3vw, 1.5rem);
        font-weight: 700;
        color: var(--color-text-primary);
        font-family: var(--font-primary);
        letter-spacing: 0.04em;
      }
      
      .header-tel:hover .tel-number {
        color: var(--color-accent);
      }

      .header-tel:hover .tel-phone-icon {
        animation: headerPhoneRing 0.5s ease;
      }

      @keyframes headerPhoneRing {
        0%, 100% { transform: rotate(0deg); }
        20% { transform: rotate(-15deg); }
        40% { transform: rotate(15deg); }
        60% { transform: rotate(-10deg); }
        80% { transform: rotate(10deg); }
      }

      .btn-header {
        background-color: var(--color-accent);
        color: #fff !important;
        padding: 0.7rem 1.4rem;
        border-radius: 5px;
        transition: all 0.3s ease;
        font-weight: 700;
        font-size: clamp(0.8rem, 0.9vw, 1rem);
        box-shadow: 0 4px 6px rgba(216, 141, 45, 0.2);
        white-space: nowrap;
        flex-shrink: 0;
      }
      
      .btn-header:hover {
         background-color: #c27a1f; 
         transform: translateY(-2px);
      }

      /* ---- Mobile Hamburger Toggle ---- */
      .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        gap: 6px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
      }

      .mobile-menu-toggle span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: var(--color-text-primary);
        transition: all 0.3s ease;
      }

      /* ================================================================
         BREAKPOINT: Switch to hamburger menu at 1200px
         This is intentionally wider than typical to prevent any
         text-wrapping on mid-size screens with larger font rendering.
         ================================================================ */
      /* --- Mobile phone + hamburger group --- */
      .header-right-mobile {
        display: none;  /* hidden on desktop */
        align-items: center;
        gap: 0.8rem;
        flex-shrink: 0;
      }

      .mobile-tel {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        text-decoration: none;
        color: var(--color-accent);
        font-weight: 700;
        white-space: nowrap;
      }

      .mobile-tel-number {
        font-size: clamp(0.9rem, 1.3vw, 1.2rem);
        letter-spacing: 0.03em;
      }

      .mobile-tel .tel-phone-icon {
        color: var(--color-accent);
        flex-shrink: 0;
      }

      @media (max-width: 960px) {
        .header-right-mobile {
          display: flex;
        }

        .mobile-menu-toggle {
          display: flex;
          z-index: 101;
        }

        .nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: right 0.4s ease;
        }

        .nav.active {
          right: 0;
        }

        .nav-list {
          flex-direction: column;
          flex-wrap: wrap;
          text-align: center;
          gap: 2.5rem;
        }
        
        .header-contact {
            flex-direction: column;
            border-left: none;
            padding-left: 0;
            margin-left: 0;
            margin-top: 1.5rem;
            gap: 1.2rem;
            width: 100%;
            max-width: 280px;
        }
        
        .header-tel {
            align-items: center;
            background: rgba(216, 141, 45, 0.06);
            padding: 1.2rem 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(216, 141, 45, 0.15);
            width: 100%;
            box-sizing: border-box;
        }

        .btn-header {
            width: 100%;
            text-align: center;
            padding: 1rem 1.8rem;
            font-size: 1.1rem;
            border-radius: 8px;
            box-sizing: border-box;
        }

        .nav-link {
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .tel-number {
            font-size: 1.8rem;
        }
        
        /* Hamburger Animation */
        .mobile-menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }

      @media (max-width: 768px) {
        .logo-img {
          height: 50px;
        }
        
        .header-container {
          padding: 0 1rem;
        }
      }
    </style>
  `;
};
