import { useState, useEffect, useRef } from "react";
import "./header.css";

const HeaderEnhanced = () => {
  const [isScrolledEnhanced, setIsScrolledEnhanced] = useState(false);
  const [isMobileMenuOpenEnhanced, setIsMobileMenuOpenEnhanced] = useState(false);
  const [activePathEnhanced, setActivePathEnhanced] = useState(
    typeof window !== 'undefined' ? window.location.pathname : "/"
  );
  const mobileMenuRefEnhanced = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScrollEnhanced = () => {
      setIsScrolledEnhanced(window.scrollY > 10);
    };

    const handleLocationChangeEnhanced = () => {
      setActivePathEnhanced(window.location.pathname);
      setIsMobileMenuOpenEnhanced(false);
    };

    const handleClickOutsideEnhanced = (event) => {
      if (
        mobileMenuRefEnhanced.current &&
        !mobileMenuRefEnhanced.current.contains(event.target) &&
        !event.target.closest('.menu-toggle-enhanced')
      ) {
        setIsMobileMenuOpenEnhanced(false);
      }
    };

    let tickingEnhanced = false;
    const optimizedScrollEnhanced = () => {
      if (!tickingEnhanced) {
        requestAnimationFrame(() => {
          handleScrollEnhanced();
          tickingEnhanced = false;
        });
        tickingEnhanced = true;
      }
    };

    window.addEventListener("scroll", optimizedScrollEnhanced, { passive: true });
    window.addEventListener("popstate", handleLocationChangeEnhanced);
    document.addEventListener("mousedown", handleClickOutsideEnhanced);

    // Initial scroll check
    handleScrollEnhanced();

    return () => {
      window.removeEventListener("scroll", optimizedScrollEnhanced);
      window.removeEventListener("popstate", handleLocationChangeEnhanced);
      document.removeEventListener("mousedown", handleClickOutsideEnhanced);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpenEnhanced) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpenEnhanced]);

  const navigationEnhanced = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/A-propos-de-nous" },
    { name: "Filiales", href: "/Nos-filiales" },
    { name: "Galerie", href: "/Notre-galerie" },
    { name: "Actualités", href: "/Nos-actualités" },
    { name: "Contact", href: "/Nos-contacts" },
  ];

  const handleNavClickEnhanced = (href, event) => {
    if (event) {
      event.preventDefault();
    }
    setActivePathEnhanced(href);
    setIsMobileMenuOpenEnhanced(false);
    
    document.body.style.opacity = '0.8';
    setTimeout(() => {
      window.location.href = href;
    }, 150);
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 300);
  };

  const handleContactClick = () => {
    handleNavClickEnhanced('/Nos-contacts', { preventDefault: () => {} });
  };

  return (
    <header 
      className={`header-enhanced ${isScrolledEnhanced ? "scrolled-enhanced" : ""}`}
      role="banner"
    >
      {/* Banderole de statut */}
      <div className="status-banner-enhanced">
        <div className="status-banner-content-enhanced">
          <span className="status-text-enhanced">Odevolv Corporation</span>
          <span className="status-separator-enhanced">•</span>
          <span className="status-text-enhanced">Excellence depuis 2005</span>
          <span className="status-badge-enhanced">
            <span className="status-dot-enhanced"></span>
            Service 24/7
          </span>
        </div>
      </div>

      <div className="header-container-enhanced">
        <nav className="nav-wrapper-enhanced" aria-label="Navigation principale">
          {/* Logo */}
          <a 
            href="/" 
            className="logo-enhanced" 
            onClick={(e) => handleNavClickEnhanced("/", e)}
            aria-label="Odevolv Corporation - Retour à l'accueil"
          >
            <div className="logo-symbol-enhanced">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="url(#logo-gradient-enhanced)"/>
                <path d="M12 20L20 12L28 20L20 28L12 20Z" fill="white" fillOpacity="0.9"/>
                <path d="M15 20L20 15L25 20L20 25L15 20Z" fill="#D4AF37"/>
                <defs>
                  <linearGradient id="logo-gradient-enhanced" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#000000"/>
                    <stop offset="1" stopColor="#0A0A0A"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo-text-enhanced">
              <span className="logo-name-enhanced">Odevolv Corporation</span>
              <span className="logo-tagline-enhanced">Excellence & Innovation</span>
            </div>
          </a>

          {/* Navigation Desktop - Visible uniquement sur desktop */}
          <div className="nav-desktop-enhanced">
            {navigationEnhanced.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link-enhanced ${activePathEnhanced === item.href ? "active-enhanced" : ""}`}
                onClick={(e) => handleNavClickEnhanced(item.href, e)}
                aria-current={activePathEnhanced === item.href ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="nav-actions-enhanced">
            <button 
              className="cta-button-enhanced" 
              aria-label="Nous contacter"
              onClick={handleContactClick}
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile Menu Button - Visible uniquement sur mobile/tablet */}
          <button
            className={`menu-toggle-enhanced ${isMobileMenuOpenEnhanced ? "active-enhanced" : ""}`}
            onClick={() => setIsMobileMenuOpenEnhanced(!isMobileMenuOpenEnhanced)}
            aria-label={isMobileMenuOpenEnhanced ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpenEnhanced}
          >
            <span className="menu-bar-enhanced"></span>
            <span className="menu-bar-enhanced"></span>
            <span className="menu-bar-enhanced"></span>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div 
          ref={mobileMenuRefEnhanced}
          className={`nav-mobile-enhanced ${isMobileMenuOpenEnhanced ? "active-enhanced" : ""}`}
          role="navigation"
          aria-label="Navigation mobile"
        >
          <div className="nav-mobile-inner-enhanced">
            {navigationEnhanced.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-mobile-link-enhanced ${activePathEnhanced === item.href ? "active-enhanced" : ""}`}
                onClick={(e) => handleNavClickEnhanced(item.href, e)}
                aria-current={activePathEnhanced === item.href ? "page" : undefined}
              >
                {item.name}
                <span className="mobile-link-indicator-enhanced">
                  {activePathEnhanced === item.href && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 5L6.5 11.5L3 8" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </a>
            ))}
            <button 
              className="cta-button-enhanced mobile-enhanced" 
              aria-label="Nous contacter"
              onClick={handleContactClick}
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay pour mobile */}
      {isMobileMenuOpenEnhanced && (
        <div 
          className="mobile-menu-overlay-enhanced"
          onClick={() => setIsMobileMenuOpenEnhanced(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default HeaderEnhanced;