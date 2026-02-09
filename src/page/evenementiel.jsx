import React from 'react';
import { 
  Calendar, Palette, Megaphone, Trophy, Car, UtensilsCrossed, 
  ArrowRight, MessageCircle, ChevronDown, Sparkles, Building2, 
  Target, Award, Globe, Users, TrendingUp, Shield, Star, Zap, 
  Coins, Users as UsersIcon, MapPin, Phone, Mail, Clock, 
  CheckCircle, Award as AwardIcon, Star as StarIcon, Heart
} from "lucide-react";
import './evenementiel.css';

const OdevolvEvenementiel = () => {
  const services = [
    {
      title: "Mariages de Rêve",
      description: "50+ mariages premium par an avec une équipe dédiée de 25 experts créatifs. Organisation complète de A à Z selon vos désirs les plus fous.",
      icon: Heart,
      stats: "50+ par an",
      details: ["Conseil personnalisé", "Scénographie sur mesure", "Coordination jour J", "Budget optimisé"]
    },
    {
      title: "Événements d'Entreprise",
      description: "Galas, conférences internationales, lancements produits et team buildings d'exception pour 50 à 5000 participants.",
      icon: Building2,
      stats: "5000+ invités",
      details: ["Logistique complète", "Solutions techniques avancées", "Animation sur mesure", "Reporting post-événement"]
    },
    {
      title: "Manifestations Culturelles",
      description: "Production d'événements culturels d'envergure : festivals, expositions, défilés de mode et cérémonies officielles.",
      icon: StarIcon,
      stats: "Événements internationaux",
      details: ["Production artistique", "Gestion des artistes", "Médiatisation", "Billetterie intégrée"]
    },
    {
      title: "Traiteur Gastronomique",
      description: "Service traiteur premium avec chefs étoilés et créations culinaires adaptées à chaque événement.",
      icon: UtensilsCrossed,
      stats: "Cuisine sur place",
      details: ["Menu personnalisé", "Chefs internationaux", "Service en salle", "Équipement complet"]
    }
  ];

  const avantages = [
    {
      icon: CheckCircle,
      title: "Certification ISO 9001",
      description: "Qualité garantie et processus optimisés pour chaque événement"
    },
    {
      icon: UsersIcon,
      title: "100+ Partenaires Premium",
      description: "Réseau étendu de fournisseurs et prestataires triés sur le volet"
    },
    {
      icon: AwardIcon,
      title: "25 Experts Créatifs",
      description: "Équipe pluridisciplinaire passionnée et diplômée"
    },
    {
      icon: Shield,
      title: "Assurance Tous Risques",
      description: "Couverture complète pour une tranquillité d'esprit totale"
    }
  ];

  const temoignages = [
    {
      texte: "Notre mariage a été parfait grâce à l'équipe Odevolv. Une organisation impeccable et des souvenirs inoubliables !",
      auteur: "Sophie & Thomas",
      role: "Mariage prestige",
      note: "5/5"
    },
    {
      texte: "Pour notre gala annuel de 2000 personnes, Odevolv a géré toute la logistique avec un professionnalisme remarquable.",
      auteur: "Groupe Bancaire International",
      role: "Gala d'entreprise",
      note: "5/5"
    },
    {
      texte: "La qualité du service et l'attention aux détails sont exceptionnelles. Nous faisons confiance à Odevolv depuis 5 ans.",
      auteur: "Ministère de la Culture",
      role: "Événements officiels",
      note: "5/5"
    }
  ];

  const statistiques = [
    { icon: Calendar, number: "500+", label: "Événements Réalisés" },
    { icon: Users, number: "150K+", label: "Participants Satisfaits" },
    { icon: Award, number: "25+", label: "Récompenses" },
    { icon: Globe, number: "10+", label: "Pays Desservis" },
    { icon: Star, number: "98%", label: "Clients Fidèles" }
  ];

  const equipements = [
    "Systèmes son et lumière dernier cri",
    "Écrans LED 4K et mapping vidéo",
    "Mobilier design et décoration premium",
    "Véhicules VIP avec chauffeurs",
    "Matériel scénographique sur mesure",
    "Solutions technologiques innovantes"
  ];

  return (
    <div className="evnt-wrapper">
      {/* Hero Section */}
      <section className="evnt-hero">
        <div className="evnt-hero-background">
          <div className="evnt-hero-overlay"></div>
          <div className="evnt-hero-gold-particles"></div>
          <div className="evnt-hero-glow"></div>
        </div>
        
        <div className="evnt-container">
          <div className="evnt-hero-content">
            <div className="evnt-hero-badge">
              <Sparkles size={16} />
              <span>Événementiel d'Excellence</span>
            </div>
            
            <h1 className="evnt-hero-title">
              Odevolv <span className="evnt-hero-highlights">Événementiel</span>
            </h1>
            
            <p className="evnt-hero-subtitle">
              Leader de l'événementiel premium en Côte d'Ivoire. Nous orchestrons 
              des expériences mémorables pour 50 à 5000 participants avec une 
              créativité et un professionnalisme inégalés.
            </p>

            <div className="evnt-hero-stats">
              {statistiques.map((stat, index) => (
                <div key={index} className="evnt-hero-stat">
                  <div className="evnt-hero-stat-icon">
                    {React.createElement(stat.icon, { size: 20 })}
                  </div>
                  <div className="evnt-hero-stat-content">
                    <div className="evnt-hero-stat-number">{stat.number}</div>
                    <div className="evnt-hero-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="evnt-hero-scroll">
              <a href="#services" className="evnt-scroll-indicator">
                <ChevronDown size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Services */}
      <section className="evnt-portfolio-section" id="services">
        <div className="evnt-container">
          <div className="evnt-section-header">
           
            <h2 className="evnt-section-title">
              Services Premium
            </h2>
            <p className="evnt-section-description">
              Des prestations sur mesure adaptées à chaque type d'événement, 
              avec une qualité d'exécution irréprochable.
            </p>
          </div>

          <div className="evnt-portfolio-grid">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="evnt-portfolio-card"
                data-index={index}
              >
                <div className="evnt-card-gold-border"></div>
                <div className="evnt-card-pattern"></div>
                
                <div className="evnt-card-header">
                  <div className="evnt-card-icon-wrapper">
                    <div className="evnt-card-icon">
                      {React.createElement(service.icon, { size: 32 })}
                    </div>
                    <div className="evnt-card-glow"></div>
                  </div>
                  
                  <div className="evnt-card-titles">
                    <h3 className="evnt-card-title">{service.title}</h3>
                    <div className="evnt-card-performance">
                      <Coins size={14} />
                      <span>{service.stats}</span>
                    </div>
                  </div>
                </div>

                <div className="evnt-card-body">
                  <div className="evnt-card-stats">
                    <span className="evnt-card-stat-badge">
                      Service Premium
                    </span>
                  </div>
                  
                  <p className="evnt-card-description">{service.description}</p>
                  
                  <div className="evnt-card-details">
                    <ul className="evnt-details-list">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="evnt-detail-item">
                          <CheckCircle size={14} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="evnt-card-footer">
                    <a href="/devis" className="evnt-card-link">
                      <span>Demander un devis</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nos Avantages */}
      <section className="evnt-value-section">
        <div className="evnt-container">
          <div className="evnt-section-header">
           
            <h2 className="evnt-section-title">
              Garanties d'Excellence
            </h2>
            <p className="evnt-section-description">
              Des engagements forts qui font la différence pour vos événements.
            </p>
          </div>

          <div className="evnt-value-grid">
            {avantages.map((avantage, index) => (
              <div key={index} className="evnt-value-card">
                <div className="evnt-value-icon">
                  {React.createElement(avantage.icon)}
                </div>
                <h3 className="evnt-value-title">{avantage.title}</h3>
                <p className="evnt-value-description">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="evnt-portfolio-section" style={{ background: '#ffffff' }}>
        <div className="evnt-container">
          <div className="evnt-section-header">
           
            <h2 className="evnt-section-title">
              Témoignages Clients
            </h2>
            <p className="evnt-section-description">
              La satisfaction de nos clients est notre plus belle récompense.
            </p>
          </div>

          <div className="evnt-portfolio-grid">
            {temoignages.map((temoignage, index) => (
              <div key={index} className="evnt-portfolio-card">
                <div className="evnt-card-pattern"></div>
                
                <div className="evnt-card-body">
                  <div className="evnt-temoignage-content">
                    <div className="evnt-temoignage-quote">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M10 30V20H20C20 16.6667 20 13.3333 20 10C13.3333 10 6.66667 10 0 10C0 16.6667 0 23.3333 0 30H10ZM40 30V20H30C30 16.6667 30 13.3333 30 10C36.6667 10 43.3333 10 50 10C50 16.6667 50 23.3333 50 30H40Z" 
                              fill="url(#gold-gradient)" />
                        <defs>
                          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D4AF37" />
                            <stop offset="100%" stopColor="#B8860B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    <p className="evnt-temoignage-texte">"{temoignage.texte}"</p>
                    
                    <div className="evnt-temoignage-auteur">
                      <h4 className="evnt-temoignage-nom">{temoignage.auteur}</h4>
                      <p className="evnt-temoignage-role">{temoignage.role}</p>
                      <div className="evnt-temoignage-note">
                        <Star size={16} fill="#D4AF37" />
                        <span>{temoignage.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipements */}
      <section className="evnt-equipements-section">
        <div className="evnt-container">
          <div className="evnt-section-header">
           
            <h2 className="evnt-section-titles">
              Équipements Haut de Gamme
            </h2>
            <p className="evnt-section-description">
              Une flotte de matériel dernier cri pour des événements spectaculaires.
            </p>
          </div>

          <div className="evnt-equipements-grid">
            {equipements.map((equipement, index) => (
              <div key={index} className="evnt-equipement-item">
                <div className="evnt-equipement-icon">
                  <Zap size={20} />
                </div>
                <span className="evnt-equipement-text">{equipement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </div>
  );
};

export default OdevolvEvenementiel;