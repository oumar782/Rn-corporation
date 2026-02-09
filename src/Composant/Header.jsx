import { useState, useEffect, useRef } from "react";
import "./header.css";
import logoImage from "../assets/go.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
      setIsMobileMenuOpen(false);
    };

    // Fermer le menu mobile en cliquant à l'extérieur
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll, { passive: true });
    window.addEventListener("popstate", handleLocationChange);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", optimizedScroll);
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Empêcher le défilement du body quand le menu mobile est ouvert
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/A-propos-de-nous" },
    { name: "Filiales", href: "/Nos-filiales" },
    { name: "Galerie", href: "/Notre-galerie" },
    { name: "Actualités", href: "/Nos-actualités" },
    { name: "Contact", href: "/Nos-contacts" },
  ];

  const handleNavClick = (href, event) => {
    event.preventDefault();
    setActivePath(href);
    setIsMobileMenuOpen(false);
    
    // Animation de transition
    document.body.style.opacity = '0.8';
    setTimeout(() => {
      window.location.href = href;
    }, 150);
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 300);
  };

  return (
    <header 
      className={`header ${isScrolled ? "scrolled" : ""}`}
      role="banner"
    >
      {/* Banderole de statut */}
      <div className="status-banner">
        <div className="status-banner-content">
          <span className="status-text">Odevolv Corporation</span>
          <span className="status-separator">•</span>
          <span className="status-text">Excellence depuis 2005</span>
          <span className="status-badge">
            <span className="status-dot"></span>
            Service 24/7
          </span>
        </div>
      </div>

      <div className="header-container">
        <nav className="nav-wrapper" aria-label="Navigation principale">
          {/* Logo */}
          <a 
            href="/" 
            className="logo" 
            onClick={(e) => handleNavClick("/", e)}
            aria-label="Odevolv Corporation - Retour à l'accueil"
          >
            <div className="logo-image-wrapper">
              <img 
                src={logoImage} 
                alt="Odevolv Corporation" 
                className="logo-img"
                loading="eager"
                width={40}
                height={40}
              />
            </div>
            <div className="logo-text">
              <span className="logo-name">Odevolv Corporation</span>
              <span className="logo-tagline">Excellence & Innovation</span>
            </div>
          </a>

          {/* Navigation Desktop */}
          <div className="nav-desktop">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activePath === item.href ? "active" : ""}`}
                onClick={(e) => handleNavClick(item.href, e)}
                aria-current={activePath === item.href ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="nav-actions">
            <button 
              className="cta-button" 
              aria-label="Nous contacter"
              onClick={() => handleNavClick('/Nos-contacts', { preventDefault: () => {} })}
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`nav-mobile ${isMobileMenuOpen ? "active" : ""}`}
          role="navigation"
          aria-label="Navigation mobile"
        >
          <div className="nav-mobile-inner">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-mobile-link ${activePath === item.href ? "active" : ""}`}
                onClick={(e) => handleNavClick(item.href, e)}
                aria-current={activePath === item.href ? "page" : undefined}
              >
                {item.name}
                <span className="mobile-link-indicator">
                  {activePath === item.href && "✓"}
                </span>
              </a>
            ))}
            <button 
              className="cta-button mobile" 
              aria-label="Nous contacter"
              onClick={() => handleNavClick('/Nos-contacts', { preventDefault: () => {} })}
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay pour mobile */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;