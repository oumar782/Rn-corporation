import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/go.jpg"; // Remplacez par le chemin de votre logo

const Footer = () => {
  const subsidiaries = [
    "Événementiel",
    "Cosmétique",
    "Communication",
    "Football",
    "Location de véhicules",
    "Restaurant",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="logo-section">
              <h3 className="company-name">RN CORPORATION</h3>
            </div>
            <p className="company-description">
              Un groupe ivoirien prestigieux regroupant 6 filiales d'excellence
              dans divers secteurs d'activité.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Subsidiaries */}
          <div className="footer-section">
            <h4 className="section-title">Nos Filiales</h4>
            <ul className="footer-links">
              {subsidiaries.map((subsidiary) => (
                <li key={subsidiary}>
                  <a href="/subsidiaries" className="footer-link">
                    <span className="link-decoration">›</span>
                    {subsidiary}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Liens Rapides</h4>
            <ul className="footer-links">
              <li>
                <a href="/about" className="footer-link">
                  <span className="link-decoration">›</span>
                  À Propos
                </a>
              </li>
              <li>
                <a href="/gallery" className="footer-link">
                  <span className="link-decoration">›</span>
                  Galerie
                </a>
              </li>
              <li>
                <a href="/news" className="footer-link">
                  <span className="link-decoration">›</span>
                  Actualités
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  <span className="link-decoration">›</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="section-title">Contact</h4>
            <ul className="contact-info">
              <li className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <span className="contact-text">
                  Abidjan, Côte d'Ivoire
                </span>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+2250123456789"
                  className="contact-link"
                >
                  +225 01 23 45 67 89
                </a>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:contact@rncorporation.ci"
                  className="contact-link"
                >
                  contact@rncorporation.ci
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} RN Corporation. Tous droits réservés.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
          font-family: 'Arial', sans-serif;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            transparent, 
            #d4af37, 
            #ffd700, 
            #d4af37, 
            transparent
          );
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
            gap: 50px;
          }
        }

        .footer-section {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .footer-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
        }

        .company-name {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ffffff, #d4af37, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .company-description {
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
          text-align: justify;
        }

        .section-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 25px;
          position: relative;
          display: inline-block;
          color: #d4af37;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #d4af37, #ffd700);
          border-radius: 2px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid rgba(212, 175, 55, 0.3);
          color: #d4af37;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .social-link:hover {
          background: #d4af37;
          color: #1a1a1a;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
          border-color: #ffd700;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 15px;
          position: relative;
        }

        .footer-link {
          color: #b0b0b0;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          padding: 8px 0;
          position: relative;
          font-size: 1rem;
        }

        .footer-link:hover {
          color: #ffd700;
          transform: translateX(10px);
        }

        .link-decoration {
          color: #d4af37;
          font-weight: bold;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover .link-decoration {
          transform: translateX(5px) scale(1.2);
          color: #ffd700;
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #d4af37;
          border: 2px solid rgba(212, 175, 55, 0.3);
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: #d4af37;
          color: #1a1a1a;
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .contact-text {
          color: #b0b0b0;
          line-height: 1.5;
          font-size: 1rem;
        }

        .contact-link {
          color: #b0b0b0;
          text-decoration: none;
          transition: all 0.3s ease;
          line-height: 1.5;
          font-size: 1rem;
        }

        .contact-link:hover {
          color: #ffd700;
          text-decoration: underline;
        }

        .footer-bottom {
          border-top: 1px solid rgba(212, 175, 55, 0.3);
          padding-top: 30px;
          text-align: center;
          position: relative;
        }

        .footer-bottom::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .copyright {
          color: #888;
          font-size: 0.9rem;
          margin: 0;
          font-style: italic;
        }

        /* Effets de brillance au survol */
        .footer-section:hover .section-title::after {
          width: 80px;
          transition: width 0.5s ease;
        }

        /* Responsive */
        @media (max-width: 767px) {
          .footer-container {
            padding: 40px 15px 15px;
          }
          
          .logo-section {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .footer-grid {
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;