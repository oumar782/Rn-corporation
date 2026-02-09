import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle, ChevronRight, Building, Award, Shield } from "lucide-react";
import './contact.css';
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
    alert("Message envoyé avec succès ! Notre équipe vous contactera dans les plus brefs délais.");
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
      description: "Siège social stratégique au cœur du quartier d'affaires"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+225 27 22 58 42 00\n+225 07 08 09 10 11",
      description: "Service client premium disponible 6j/7"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@odevolv.ci\ndirection@odevolv.ci",
      description: "Réponse personnalisée sous 24h maximum"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 19h00\nSam: 9h00 - 15h00",
      description: "Accueil VIP sur rendez-vous"
    },
  ];

  const subsidiaries = [
    "Événementiel Premium",
    "Cosmétique Luxe",
    "Communication Stratégique",
    "Football Professionnel",
    "Location Véhicules Haut de Gamme",
    "Restaurant Gastronomique",
    "Conseil en Développement",
    "Autre / Partenariat Stratégique"
  ];

  const values = [
    { icon: Shield, title: "Confidentialité", desc: "Toutes vos informations sont sécurisées" },
    { icon: Award, title: "Excellence", desc: "Service premium certifié" },
    { icon: Building, title: "Stabilité", desc: "Groupe établi depuis 10 ans" }
  ];

  return (
    <div className="odevolv-contact-container">
      {/* Hero Section Élégante */}
      <section className="odevolv-hero">
        <div className="odevolv-hero-bg">
          <div className="odevolv-hero-overlay"></div>
          <div className="odevolv-hero-grid"></div>
        </div>
        
        <div className="odevolv-hero-content">
          <div className="odevolv-hero-badge">
            <MessageCircle size={18} />
            <span>Votre succès, notre priorité</span>
          </div>
          
          <div className="odevolv-hero-title-wrapper">
            <h1 className="odevolv-hero-main-title">
              Partenariat <span className="odevolv-hero-accent">d'Excellence</span>
            </h1>
            <div className="odevolv-hero-subtitle">
              <ChevronRight size={20} className="odevolv-chevron" />
              <span>Odevolv Group</span>
            </div>
          </div>
          
          <p className="odevolv-hero-description">
            Votre vision rencontre notre expertise. Ensemble, créons des opportunités 
            d'affaires exceptionnelles et bâtissons des succès durables.
          </p>
          
          <div className="odevolv-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="odevolv-value-card">
                  <div className="odevolv-value-icon">
                    <Icon size={22} />
                  </div>
                  <div className="odevolv-value-content">
                    <h4>{value.title}</h4>
                    <p>{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Contact Élégante */}
      <section className="odevolv-contact-section">
        <div className="odevolv-section-header">
          <div className="odevolv-header-decoration">
            <div className="odevolv-decoration-line"></div>
            <span className="odevolv-decoration-text">CONNECTIONS PRIVILÉGIÉES</span>
            <div className="odevolv-decoration-line"></div>
          </div>
          <h2 className="odevolv-section-title">
            Accès <span className="odevolv-accent">Direct</span> au Leadership
          </h2>
          <p className="odevolv-section-subtitle">
            Communication sécurisée avec nos décisionnaires exécutifs
          </p>
        </div>

        <div className="odevolv-contact-grid">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={info.title} 
                className="odevolv-contact-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="odevolv-card-header">
                  <div className="odevolv-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{info.title}</h3>
                </div>
                <div className="odevolv-card-body">
                  <p className="odevolv-card-content">{info.content}</p>
                  <p className="odevolv-card-description">{info.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Formulaire & Localisation */}
      <section className="odevolv-main-section">
        <div className="odevolv-main-grid">
          {/* Formulaire Premium */}
          <div className="odevolv-form-container">
            <div className="odevolv-form-header">
              <div className="odevolv-form-badge">
                <MessageCircle size={16} />
                <span>PROPOSITION EXCLUSIVE</span>
              </div>
              <h2 className="odevolv-form-title">
                Démarrez une <span className="odevolv-accent">Collaboration</span>
              </h2>
              <p className="odevolv-form-subtitle">
                Présentez votre projet à notre comité d'investissement
              </p>
            </div>

            <form onSubmit={handleSubmit} className="odevolv-form">
              <div className="odevolv-form-row">
                <div className="odevolv-form-group">
                  <label className="odevolv-form-label">
                    <User size={18} />
                    <span>Identité du Porteur *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Prénom et Nom"
                    required
                    className="odevolv-form-input"
                  />
                </div>
                
                <div className="odevolv-form-group">
                  <label className="odevolv-form-label">
                    <Mail size={18} />
                    <span>Email Professionnel *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@entreprise.com"
                    required
                    className="odevolv-form-input"
                  />
                </div>
              </div>

              <div className="odevolv-form-row">
                <div className="odevolv-form-group">
                  <label className="odevolv-form-label">
                    <Phone size={18} />
                    <span>Téléphone Direct</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+225 XX XX XX XX XX"
                    className="odevolv-form-input"
                  />
                </div>
                
                <div className="odevolv-form-group">
                  <label className="odevolv-form-label">
                    <Building size={18} />
                    <span>Domaine Stratégique *</span>
                  </label>
                  <select
                    name="subsidiary"
                    value={formData.subsidiary}
                    onChange={handleChange}
                    required
                    className="odevolv-form-input"
                  >
                    <option value="">Sélectionnez un secteur</option>
                    {subsidiaries.map(subsidiary => (
                      <option key={subsidiary} value={subsidiary}>
                        {subsidiary}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="odevolv-form-group">
                <label className="odevolv-form-label">
                  <MessageCircle size={18} />
                  <span>Proposition Détaillée *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre vision, le potentiel marché, l'investissement requis et les synergies possibles avec Odevolv Group..."
                  rows={6}
                  required
                  className="odevolv-form-textarea"
                />
              </div>

              <button type="submit" className="odevolv-submit-btn">
                <Send size={20} />
                <span>Soumettre au Comité</span>
              </button>
            </form>
          </div>

          {/* Carte & Infos */}
          <div className="odevolv-location-container">
            <div className="odevolv-location-header">
              <h3 className="odevolv-location-title">Siège Social Odevolv</h3>
              <p className="odevolv-location-subtitle">Quartier des Affaires, Abidjan Plateau</p>
            </div>
            
            <div className="odevolv-map-preview">
              <div className="odevolv-map-placeholder">
                <div className="odevolv-map-icon-wrapper">
                  <MapPin size={56} />
                </div>
                <div className="odevolv-map-content">
                  <h4>Carte Stratégique</h4>
                  <p>Localisation exclusive disponible sur demande</p>
                </div>
              </div>
              
              <div className="odevolv-features-list">
                <div className="odevolv-feature-item">
                  <div className="odevolv-feature-dot"></div>
                  <div>
                    <strong>Accès Sécurisé</strong>
                    <p>Contrôle d'accès biométrique</p>
                  </div>
                </div>
                <div className="odevolv-feature-item">
                  <div className="odevolv-feature-dot"></div>
                  <div>
                    <strong>Parking Privatif</strong>
                    <p>Espaces réservés visiteurs VIP</p>
                  </div>
                </div>
                <div className="odevolv-feature-item">
                  <div className="odevolv-feature-dot"></div>
                  <div>
                    <strong>Infrastructure</strong>
                    <p>Salles de réunion executive</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="odevolv-access-info">
              <h4>Conditions d'Accès</h4>
              <ul>
                <li>Présentation de pièce d'identité requise</li>
                <li>Rendez-vous confirmé obligatoire</li>
                <li>Parking sécurisé avec service voiturier</li>
                <li>Accueil personnalisé au hall principal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;