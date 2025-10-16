// Header.jsx
import { useState, useEffect } from "react";
import "./header.css";
import logoImage from "../assets/go.jpg"; // Ajustez le chemin

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const navigation = [
    { name: "Accueil", href: "/Accueil" },
    { name: "À Propos", href: "/A-propos-de-nous" },
    { name: "Filiales", href: "/Nos-filiales" },
    { name: "Galerie", href: "/Notre-galerie" },
    { name: "Actualités", href: "/Nos-actualités" },
    { name: "Contact", href: "/Nos-contacts" },
  ];

  const handleNavClick = (href) => {
    setActivePath(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      {/* Bordure vague dorée */}
      <div className="gold-wave-border"></div>
      
      <nav className="nav-container">
        <div className="nav-content">
          <a href="/" className="logo-link" onClick={() => handleNavClick("/")}>
            <div className="logo-container">
              <div className="logo-circle">
                <img 
                  src={logoImage} 
                  alt="RN CORPORATION Logo" 
                  className="logo-image"
                />
                {/* Effet de brillance supplémentaire */}
                <div className="logo-shine"></div>
              </div>
            </div>
            <span className="brand-name">RN CORPORATION</span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  activePath === item.href ? "nav-link-active" : ""
                }`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`mobile-nav-link ${
                  activePath === item.href ? "mobile-nav-link-active" : ""
                }`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;