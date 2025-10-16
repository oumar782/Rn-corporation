import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subsidiary: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi réussi
    alert("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", phone: "", subsidiary: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Abidjan, Plateau\nCôte d'Ivoire",
      description: "Siège social au cœur du quartier d'affaires"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+225 27 22 58 42 00\n+225 07 08 09 10 11",
      description: "Disponible du lundi au samedi"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@rncorporation.ci\ninfo@rncorporation.ci",
      description: "Réponse sous 24h maximum"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 18h00\nSam: 9h00 - 13h00",
      description: "Accueil sur rendez-vous"
    },
  ];

  const subsidiaries = [
    "Événementiel",
    "Cosmétique",
    "Communication",
    "Football",
    "Location de véhicules",
    "Restaurant",
    "Autre / Général"
  ];

  return (
    <div className="contact-container-main">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-background">
          <div className="contact-hero-gradient"></div>
          <div className="contact-hero-pattern"></div>
        </div>
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <div className="contact-hero-badge">
              <MessageCircle size={16} />
              <span>Nous écoutons</span>
            </div>
            <h1 className="contact-hero-title">
              Contactez-<span className="contact-hero-highlight">nous</span>
            </h1>
            <p className="contact-hero-description">
              Une question ? Un projet ambitieux ? Notre équipe d'experts est à votre écoute 
              pour transformer vos idées en réalisations concrètes. Ensemble, bâtissons l'excellence.
            </p>
            <div className="contact-hero-stats">
              <div className="contact-stat">
                <div className="contact-stat-icon">
                  <Clock size={20} />
                </div>
                <div className="contact-stat-content">
                  <span className="contact-stat-number">24h</span>
                  <span className="contact-stat-label">Réponse garantie</span>
                </div>
              </div>
              <div className="contact-stat">
                <div className="contact-stat-icon">
                  <User size={20} />
                </div>
                <div className="contact-stat-content">
                  <span className="contact-stat-number">8</span>
                  <span className="contact-stat-label">Filiales expertes</span>
                </div>
              </div>
              <div className="contact-stat">
                <div className="contact-stat-icon">
                  <Send size={20} />
                </div>
                <div className="contact-stat-content">
                  <span className="contact-stat-number">98%</span>
                  <span className="contact-stat-label">Satisfaction client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section-main">
        <div className="contact-info-container">
          <div className="contact-section-header">
            <h2 className="contact-section-title">
              Nos <span className="contact-accent">Coordonnées</span>
            </h2>
            <p className="contact-section-subtitle">
              Plusieurs moyens de nous contacter pour échanger sur vos projets
            </p>
          </div>
          
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div 
                  key={info.title}
                  className="contact-info-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="contact-card-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">{info.title}</h3>
                    <p className="contact-card-text">{info.content}</p>
                    <p className="contact-card-description">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-main-section-main">
        <div className="contact-main-container">
          <div className="contact-layout-main">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-header">
                <h2 className="contact-form-title">
                  Envoyez-nous un <span className="contact-accent">message</span>
                </h2>
                <p className="contact-form-subtitle">
                  Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form-main">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      <User size={16} />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                      className="contact-form-input"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      <Mail size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@example.com"
                      required
                      className="contact-form-input"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      <Phone size={16} />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+225 01 23 45 67 89"
                      className="contact-form-input"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      <MessageCircle size={16} />
                      Filiale concernée *
                    </label>
                    <select
                      name="subsidiary"
                      value={formData.subsidiary}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                    >
                      <option value="">Sélectionnez une filiale</option>
                      {subsidiaries.map(subsidiary => (
                        <option key={subsidiary} value={subsidiary}>
                          {subsidiary}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">
                    <MessageCircle size={16} />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins ou vos questions en détail..."
                    rows={6}
                    required
                    className="contact-form-textarea"
                  />
                </div>

                <button type="submit" className="contact-submit-button">
                  <Send size={18} />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="contact-map-section">
              <div className="contact-map-container">
                <div className="contact-map-header">
                  <h3 className="contact-map-title">Notre Localisation</h3>
                  <p className="contact-map-subtitle">Abidjan Plateau, Côte d'Ivoire</p>
                </div>
                
                <div className="contact-map-placeholder">
                  <div className="contact-map-icon">
                    <MapPin size={48} />
                  </div>
                  <h4>Carte Interactive</h4>
                  <p>Disponible prochainement</p>
                  <div className="contact-map-features">
                    <div className="contact-feature">
                      <div className="contact-feature-dot"></div>
                      <span>Localisation précise</span>
                    </div>
                    <div className="contact-feature">
                      <div className="contact-feature-dot"></div>
                      <span>Itinéraires</span>
                    </div>
                    <div className="contact-feature">
                      <div className="contact-feature-dot"></div>
                      <span>Photos 360°</span>
                    </div>
                  </div>
                </div>
                
                <div className="contact-location-info">
                  <h4>Accès et Stationnement</h4>
                  <ul>
                    <li>Parking sécurisé gratuit</li>
                    <li>Accès personnes à mobilité réduite</li>
                    <li>Proche station de bus</li>
                    <li>Zone commerciale et hôtelière</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-container-main {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
          color: #1e293b;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          line-height: 1.6;
          width: 1500px;
          overflow-x: hidden;
        }

        /* Hero Section - CENTRÉE et PLEINE LARGEUR */
        .contact-hero-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          width: 100%;
          max-width: 100%;
        }

        .contact-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .contact-hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        .contact-hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 6rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .contact-hero-text {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .contact-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          color: #92400e;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 2rem;
          border: 1px solid #fcd34d;
        }

        .contact-hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #1e293b;
          text-align: center;
          width: 100%;
        }

        .contact-hero-highlight {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-hero-description {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 3rem;
          line-height: 1.7;
          max-width: 600px;
          text-align: center;
          width: 100%;
        }

        .contact-hero-stats {
          display: flex;
          gap: 3rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
        }

        .contact-stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }

        .contact-stat-icon {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          padding: 0.75rem;
          border-radius: 12px;
          color: #d97706;
          flex-shrink: 0;
        }

        .contact-stat-content {
          display: flex;
          flex-direction: column;
        }

        .contact-stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
        }

        .contact-stat-label {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Contact Info Section - PLEINE LARGEUR */
        .contact-info-section-main {
          padding: 6rem 2rem;
          background: #ffffff;
          width: 100%;
          max-width: 100%;
        }

        .contact-info-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        .contact-section-header {
          text-align: center;
          margin-bottom: 4rem;
          width: 100%;
        }

        .contact-section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
          width: 100%;
        }

        .contact-accent {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-section-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          width: 100%;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          width: 100%;
        }

        .contact-info-card {
          opacity: 0;
          animation: contactFadeInUp 0.6s ease forwards;
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          width: 100%;
        }

        @keyframes contactFadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }

        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(245, 158, 11, 0.15);
          border-color: #fcd34d;
        }

        .contact-card-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d97706;
        }

        .contact-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .contact-card-text {
          color: #64748b;
          margin-bottom: 0.5rem;
          white-space: pre-line;
          line-height: 1.6;
        }

        .contact-card-description {
          color: #94a3b8;
          font-size: 0.875rem;
          font-style: italic;
        }

        /* Contact Main Section - PLEINE LARGEUR */
        .contact-main-section-main {
          padding: 6rem 2rem;
          background: #f8fafc;
          width: 100%;
          max-width: 100%;
        }

        .contact-main-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        .contact-layout-main {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: start;
          width: 100%;
        }

        .contact-form-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
          width: 100%;
        }

        .contact-form-header {
          margin-bottom: 2rem;
          width: 100%;
        }

        .contact-form-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1e293b;
          width: 100%;
        }

        .contact-form-subtitle {
          color: #64748b;
          line-height: 1.6;
          width: 100%;
        }

        .contact-form-main {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          width: 100%;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .contact-form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
          width: 100%;
        }

        .contact-form-input,
        .contact-form-textarea {
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-form-input:focus,
        .contact-form-textarea:focus {
          outline: none;
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        .contact-form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
          width: 100%;
        }

        .contact-submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
          width: 100%;
        }

        .contact-submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4);
        }

        /* Map Section - PLEINE LARGEUR */
        .contact-map-section {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
          width: 100%;
          height: 100%;
        }

        .contact-map-container {
          height: 100%;
          width: 100%;
        }

        .contact-map-header {
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid #f1f5f9;
          width: 100%;
        }

        .contact-map-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .contact-map-subtitle {
          color: #64748b;
        }

        .contact-map-placeholder {
          padding: 3rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          width: 100%;
        }

        .contact-map-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d97706;
        }

        .contact-map-placeholder h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .contact-map-placeholder p {
          color: #64748b;
          margin-bottom: 2rem;
        }

        .contact-map-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .contact-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #64748b;
        }

        .contact-feature-dot {
          width: 8px;
          height: 8px;
          background: #f59e0b;
          border-radius: 50%;
        }

        .contact-location-info {
          padding: 2rem;
          border-top: 1px solid #f1f5f9;
          width: 100%;
        }

        .contact-location-info h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .contact-location-info ul {
          list-style: none;
          padding: 0;
          width: 100%;
        }

        .contact-location-info li {
          padding: 0.5rem 0;
          color: #64748b;
          position: relative;
          padding-left: 1.5rem;
        }

        .contact-location-info li::before {
          content: '•';
          color: #f59e0b;
          position: absolute;
          left: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-layout-main {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-title {
            font-size: 2.5rem;
          }

          .contact-hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }

          .contact-stat {
            justify-content: center;
            text-align: center;
          }

          .contact-section-title {
            font-size: 2rem;
          }

          .contact-form-section {
            padding: 2rem;
          }

          .contact-hero-content {
            padding: 4rem 1rem;
          }

          .contact-info-section-main,
          .contact-main-section-main {
            padding: 4rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-title {
            font-size: 2rem;
          }

          .contact-hero-description {
            font-size: 1.1rem;
          }

          .contact-hero-stats {
            gap: 1rem;
          }

          .contact-stat {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .contact-info-section-main,
          .contact-main-section-main {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;