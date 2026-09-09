import { useEffect, useState } from "react";

const LogoMark = () => (
  <svg className="logo-mark" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2c1.4 2.2 1.2 4.4-.4 6 1.9-.5 3.6.1 4.8 1.6-2 .1-3.3 1-4 2.6 2.1-.6 3.9.1 5.2 1.9-2.3.3-3.9 1.5-4.6 3.5M12 2c-1.4 2.2-1.2 4.4.4 6-1.9-.5-3.6.1-4.8 1.6 2 .1 3.3 1 4 2.6-2.1-.6-3.9.1-5.2 1.9 2.3.3 3.9 1.5 4.6 3.5M12 10v11M8 21c0-2 1-3.4 4-3.4M16 21c0-2 1-3.4-4-3.4" />
  </svg>
);

const Sparkle = () => (
  <svg className="badge-star" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z" />
  </svg>
);

const WorkflowIcon = () => (
  <svg className="stat-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2.5" y="4" width="12" height="5" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.35" />
    <rect x="9.5" y="15" width="12" height="5" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.35" />
    <path d="M14.5 6.5h2.2a3 3 0 0 1 3 3v2.5M9.5 17.5H7.3a3 3 0 0 1-3-3v-2.5" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
  </svg>
);

const ApproveIcon = () => (
  <svg className="stat-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5.5" fill="#f5f5f5" />
    <path d="m7 12.4 3.15 3.15L17.3 8.4" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Avatars = () => (
  <svg className="stat-icon stat-icon--avatars" viewBox="0 0 28 24" aria-hidden="true">
    <circle cx="7" cy="8" r="4.5" fill="#7b7b7b" stroke="#dcdcdc" strokeWidth="1" />
    <circle cx="14" cy="6" r="4.5" fill="#bcbcbc" stroke="#f1f1f1" strokeWidth="1" />
    <circle cx="21" cy="8" r="4.5" fill="#555" stroke="#bdbdbd" strokeWidth="1" />
    <path d="M1.5 21c.8-4 2.5-6 5.5-6s4.8 2 5.5 6M8.5 21c.8-4.6 2.7-7 5.5-7s4.7 2.4 5.5 7M15.5 21c.8-4 2.7-6 5.5-6s4.7 2 5.5 6" fill="#666" stroke="#d8d8d8" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

function WaveField() {
  return (
    <svg className="hero-waves" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="waveGrad1" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#0a1f12" />
          <stop offset="50%" stopColor="rgba(62,207,107,0.28)" />
          <stop offset="100%" stopColor="#050a06" />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#071a10" />
          <stop offset="50%" stopColor="rgba(62,207,107,0.18)" />
          <stop offset="100%" stopColor="#030503" />
        </linearGradient>
        <linearGradient id="waveGrad3" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#04120a" />
          <stop offset="50%" stopColor="rgba(62,207,107,0.10)" />
          <stop offset="100%" stopColor="#010201" />
        </linearGradient>
        <linearGradient id="waveGrad4" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#020a05" />
          <stop offset="50%" stopColor="rgba(62,207,107,0.06)" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
      <g className="wave wave--4">
        <path className="wave-path wave-path--4" fill="url(#waveGrad4)" opacity="0.12" d="M-360 470 C-120 420 60 520 300 468 C540 416 720 494 960 450 C1200 406 1370 494 1800 420 L1800 900 L-360 900 Z" />
      </g>
      <g className="wave wave--3">
        <path className="wave-path wave-path--3" fill="url(#waveGrad3)" opacity="0.22" d="M-360 560 C-100 480 70 620 330 536 C570 458 720 574 988 508 C1235 448 1400 560 1800 466 L1800 900 L-360 900 Z" />
      </g>
      <g className="wave wave--2">
        <path className="wave-path wave-path--2" fill="url(#waveGrad2)" opacity="0.35" d="M-360 650 C-90 540 96 696 360 600 C600 516 770 664 1030 560 C1260 468 1430 620 1800 512 L1800 900 L-360 900 Z" />
      </g>
      <g className="wave wave--1">
        <path className="wave-path wave-path--1" fill="url(#waveGrad1)" opacity="0.55" d="M-360 760 C-80 600 140 790 410 672 C670 558 820 748 1090 632 C1330 528 1470 700 1800 570 L1800 900 L-360 900 Z" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const appearItems = Array.from(document.querySelectorAll<HTMLElement>(".appear"));
    const waves = document.querySelector<HTMLElement>(".hero-waves");
    const onAnimationEnd = (event: AnimationEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.classList.add("is-in");
    };
    appearItems.forEach((item) => item.addEventListener("animationend", onAnimationEnd, { once: true }));
    const firstFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        appearItems.forEach((item) => {
          if (typeof item.getAnimations === "function" && item.getAnimations().length === 0) item.classList.add("is-in");
        });
        waves?.classList.add("is-active");
      });
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 901px)").matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(firstFrame);
      appearItems.forEach((item) => item.removeEventListener("animationend", onAnimationEnd));
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page" id="top">
      <div className="grain" aria-hidden="true" />
      <WaveField />
      <div className={`menu-backdrop ${menuOpen ? "is-open" : ""}`} onClick={closeMenu} aria-hidden="true" />

      <header className="header">
        <a className="logo appear appear--scale" style={{ "--d": "0.08s" } as React.CSSProperties} href="#top" aria-label="Adcrevia">
          <LogoMark />
          <span>Adcrevia</span>
        </a>

        <nav className={`site-nav ${menuOpen ? "menu-active" : ""}`} id="site-nav" aria-label="Primary">
          <a className="nav-pill appear appear--scale" style={{ "--d": "0.16s" } as React.CSSProperties} href="#workflow" onClick={closeMenu}>Workflow</a>
          <a className="nav-pill appear appear--soft" style={{ "--d": "0.28s" } as React.CSSProperties} href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a className="nav-pill appear appear--scale" style={{ "--d": "0.40s" } as React.CSSProperties} href="#faqs" onClick={closeMenu}>FAQs</a>
          <a className="nav-pill appear appear--soft" style={{ "--d": "0.52s" } as React.CSSProperties} href="#pricing" onClick={closeMenu}>Pricing</a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-solid header-cta appear appear--scale" style={{ "--d": "0.34s" } as React.CSSProperties} href="#start">Start Creating</a>
          <button className="burger appear appear--scale" style={{ "--d": "0.34s" } as React.CSSProperties} type="button" aria-controls="site-nav" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main className="hero" id="start">
        <div className="hero-copy">
          <div className="badge appear appear--pop" style={{ "--d": "0.22s" } as React.CSSProperties}>
            <Sparkle />
            <span>Operational Video Engine</span>
          </div>
          <h1>
            <span className="headline-line appear appear--mask" style={{ "--d": "0.42s" } as React.CSSProperties}>Turn product pages into <em>video ads</em></span>
            <span className="headline-line appear appear--mask" style={{ "--d": "0.62s" } as React.CSSProperties}>your team never had to shoot.</span>
          </h1>
          <p className="lede appear appear--soft" style={{ "--d": "0.82s" } as React.CSSProperties}>Adcrevia turns a product URL into scheduled, on-brand video ads — AI recommends the plan, you approve every step.</p>
          <div className="hero-actions">
            <a className="btn btn-solid btn-hero appear appear--btn" style={{ "--d": "0.96s" } as React.CSSProperties} href="#workflow">Start Creating</a>
            <a className="btn btn-ghost btn-hero appear appear--side" style={{ "--d": "1.10s" } as React.CSSProperties} href="#demo">See it in action <span className="arrow" aria-hidden="true">↗</span></a>
          </div>
        </div>
      </main>

      <footer className="stats" aria-label="Adcrevia platform stats">
        <div className="stat appear appear--stat" style={{ "--d": "1.12s" } as React.CSSProperties}><WorkflowIcon /><span>1.8M+ video ads generated</span></div>
        <div className="stat appear appear--stat" style={{ "--d": "1.28s" } as React.CSSProperties}><ApproveIcon /><span>96% pass automated QA on first pass</span></div>
        <div className="stat appear appear--stat" style={{ "--d": "1.44s" } as React.CSSProperties}><Avatars /><span>340+ brands publishing on autopilot</span></div>
      </footer>
    </div>
  );
}
