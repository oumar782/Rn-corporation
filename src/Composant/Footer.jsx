import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Building2,
  Briefcase,
  Heart,
  Star,
  Sparkles
} from "lucide-react";
import './footer.css';

const OdevolvFooter = () => {
  // Données des filiales
  const subsidiaries = [
    { 
      name: "Événementiel Prestige", 
      category: "Événementiel"
    },
    { 
      name: "Cosmétique Luxe Africain", 
      category: "Cosmétique"
    },
    { 
      name: "Stratégie & Communication", 
      category: "Communication"
    },
    { 
      name: "Académie Football Elite", 
      category: "Football"
    },
    { 
      name: "Mobilité Executive", 
      category: "Location"
    },
    { 
      name: "Gastronomie Étoilée", 
      category: "Restaurant"
    }
  ];

  // Liens sociaux
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook"
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter"
    },
  ];

  // Navigation rapide
  const quickLinks = [
    { name: "À Propos", href: "/A-propos-de-nous" },
    { name: "Galerie", href: "/Notre-galerie" },
    { name: "Actualités", href: "/Nos-actualités" },
    { name: "Contact", href: "/Nos-contacts" }
  ];

  return (
    <footer className="odevolv-footer">
      <div className="odevolv-footer__container">
        
        {/* En-tête avec marque */}
        <div className="odevolv-footer__brand-section">
          <div className="odevolv-footer__logo-wrapper">
            <div className="odevolv-footer__logo">
              <span className="odevolv-footer__logo-text">OD</span>
              <Sparkles size={14} />
            </div>
            <div className="odevolv-footer__brand-info">
              <h2 className="odevolv-footer__brand-title">Odevolv Corporation</h2>
              <p className="odevolv-footer__brand-tagline">
                Excellence • Innovation • Leadership
              </p>
            </div>
          </div>
        </div>

        {/* Grille de contenu principale */}
        <div className="odevolv-footer__content-grid">
          
          {/* Colonne description */}
          <div className="odevolv-footer__column">
            <h3 className="odevolv-footer__column-title">
              <Building2 size={16} />
              Notre Vision
            </h3>
            <p className="odevolv-footer__description">
              Leader panafricain réunissant six expertises d'excellence pour 
              offrir des solutions stratégiques intégrées et innovantes.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="odevolv-footer__social">
              <div className="odevolv-footer__social-icons">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      className="odevolv-footer__social-icon"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Colonne filiales */}
          <div className="odevolv-footer__column">
            <h3 className="odevolv-footer__column-title">
              <Briefcase size={16} />
              Nos Expertises
            </h3>
            <ul className="odevolv-footer__links">
              {subsidiaries.map((subsidiary, index) => (
                <li key={index} className="odevolv-footer__link-item">
                  <a href="#" className="odevolv-footer__link">
                    {subsidiary.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne navigation */}
          <div className="odevolv-footer__column">
            <h3 className="odevolv-footer__column-title">
              Navigation
            </h3>
            <ul className="odevolv-footer__links">
              {quickLinks.map((link, index) => (
                <li key={index} className="odevolv-footer__link-item">
                  <a href={link.href} className="odevolv-footer__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne contact */}
          <div className="odevolv-footer__column">
            <h3 className="odevolv-footer__column-title">
              <Heart size={16} />
              Contact
            </h3>
            <ul className="odevolv-footer__contacts">
              <li className="odevolv-footer__contact-item">
                <MapPin size={16} />
                <div>
                  <p>Tour de l'Échangeur, Plateau</p>
                  <p>Abidjan, Côte d'Ivoire</p>
                </div>
              </li>
              
              <li className="odevolv-footer__contact-item">
                <Phone size={16} />
                <a href="tel:+2252722445566">
                  +225 27 22 44 55 66
                </a>
              </li>
              
              <li className="odevolv-footer__contact-item">
                <Mail size={16} />
                <a href="mailto:contact@odevolvcorporation.ci">
                  contact@odevolvcorporation.ci
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Section bas de page */}
        <div className="odevolv-footer__bottom">
          <p className="odevolv-footer__copyright">
            © {new Date().getFullYear()} Odevolv Corporation. Tous droits réservés.
          </p>
          
          <div className="odevolv-footer__legal">
            <a href="#">Confidentialité</a>
            <span>•</span>
            <a href="#">Conditions</a>
            <span>•</span>
            <a href="#">Mentions légales</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default OdevolvFooter;