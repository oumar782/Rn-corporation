import React from 'react';
import { 
  Megaphone, Globe, Target, TrendingUp, Users, Award, Shield, 
  CheckCircle, Phone, Mail, MapPin, ArrowRight, MessageCircle, 
  ChevronDown, Zap, Coins, Sparkles, Diamond, Crown, Camera,
  Video, PenTool, BarChart, Cloud, ShieldCheck, Clock, Star,
  Mail as MailIcon, Search, Monitor, Smartphone, Headphones,
  Layers, FileText, Users as UsersIcon, Globe as GlobeIcon,
  ThumbsUp, Share2, Twitter, Facebook, Instagram, Linkedin,
  Radio, Newspaper, Mic, BookOpen, Lightbulb, Rocket
} from "lucide-react";
import './communication.css';

const OdevolvCommunication = () => {
  const services = [
    {
      title: "Stratégie Digitale",
      description: "Développement de stratégies digitales complètes pour maximiser votre présence en ligne et votre retour sur investissement.",
      icon: Target,
      stats: "+300% ROI moyen",
      details: ["Audit stratégique", "Plan d'action", "KPI personnalisés", "Optimisation continue"]
    },
    {
      title: "Média & Relations Presse",
      description: "Gestion de votre image médiatique et relations avec les journalistes pour une couverture optimale.",
      icon: Newspaper,
      stats: "500+ publications",
      details: ["Relations presse", "Communiqués", "Interviews", "Crisis management"]
    },
    {
      title: "Branding & Identité",
      description: "Création et développement d'identités de marque fortes et mémorables qui se démarquent.",
      icon: Diamond,
      stats: "100+ marques",
      details: ["Positionnement", "Design d'identité", "Guidelines", "Storytelling"]
    },
    {
      title: "Production Audiovisuelle",
      description: "Création de contenus vidéo et audio professionnels pour captiver votre audience.",
      icon: Video,
      stats: "1000+ productions",
      details: ["Vidéo corporate", "Motion design", "Podcasting", "Live streaming"]
    }
  ];

  const expertises = [
    {
      icon: Globe,
      title: "Communication Internationale",
      description: "Campagnes adaptées aux marchés locaux avec une vision globale"
    },
    {
      icon: TrendingUp,
      title: "Influence Marketing",
      description: "Stratégies d'influence pour atteindre vos publics cibles"
    },
    {
      icon: Search,
      title: "SEO & Référencement",
      description: "Optimisation pour les moteurs de recherche et visibilité accrue"
    },
    {
      icon: BarChart,
      title: "Analyse & Reporting",
      description: "Suivi précis des performances et recommandations data-driven"
    }
  ];

  const temoignages = [
    {
      texte: "La stratégie digitale développée par Odevolv a transformé notre visibilité en ligne. Une équipe exceptionnellement compétente.",
      auteur: "Groupe Industriel",
      role: "Client Corporate",
      note: "5/5"
    },
    {
      texte: "Leur approche créative et stratégique a redéfini notre image de marque. Des résultats spectaculaires en seulement 6 mois.",
      auteur: "Startup Tech",
      role: "Scale-up",
      note: "5/5"
    },
    {
      texte: "Un accompagnement sur mesure et des résultats concrets. La référence en matière de communication en Afrique de l'Ouest.",
      auteur: "Institution Publique",
      role: "Partenaire institutionnel",
      note: "5/5"
    }
  ];

  const statistiques = [
    { icon: Users, number: "200+", label: "Clients Satisfaits" },
    { icon: Globe, number: "25+", label: "Pays Couverts" },
    { icon: Award, number: "35+", label: "Prix Remportés" },
    { icon: TrendingUp, number: "+400%", label: "ROI Moyen" },
    { icon: Camera, number: "1500+", label: "Projets Menés" }
  ];

  const technologies = [
    "Plateformes analytics avancées",
    "Outils de social listening",
    "Logiciels de création professionnels",
    "Solutions CRM intégrées",
    "IA pour l'optimisation",
    "Outils de collaboration en temps réel"
  ];

  const secteurs = [
    {
      name: "Corporate & Institutionnel",
      icon: Building,
      count: "85 clients"
    },
    {
      name: "Tech & Startups",
      icon: Cpu,
      count: "45 clients"
    },
    {
      name: "Luxe & Premium",
      icon: Crown,
      count: "30 clients"
    },
    {
      name: "Santé & Bien-être",
      icon: Heart,
      count: "25 clients"
    },
    {
      name: "Culture & Médias",
      icon: Film,
      count: "40 clients"
    },
    {
      name: "Retail & E-commerce",
      icon: ShoppingBag,
      count: "35 clients"
    }
  ];

  const reseaux = [
    { icon: Facebook, name: "Facebook", followers: "2M+" },
    { icon: Instagram, name: "Instagram", followers: "1.5M+" },
    { icon: Twitter, name: "Twitter/X", followers: "800K+" },
    { icon: Linkedin, name: "LinkedIn", followers: "500K+" }
  ];

  return (
    <div className="com-wrapper">
      {/* Hero Section */}
      <section className="com-hero">
        <div className="com-hero-background">
          <div className="com-hero-overlay"></div>
          <div className="com-hero-circuit-pattern"></div>
          <div className="com-hero-glow"></div>
        </div>
        
        <div className="com-container">
          <div className="com-hero-content">
            <div className="com-hero-badge">
              <Megaphone size={16} />
              <span>Stratégie & Influence</span>
            </div>
            
            <h1 className="com-hero-title">
              Odevolv <span className="com-hero-highlight">Communication</span>
            </h1>
            
            <p className="com-hero-subtitle">
              Leader de la communication stratégique en Afrique de l'Ouest. 
              Nous transformons les idées en impact et les marques en légendes.
            </p>

            <div className="com-hero-stats">
              {statistiques.map((stat, index) => (
                <div key={index} className="com-hero-stat">
                  <div className="com-hero-stat-icon">
                    {React.createElement(stat.icon, { size: 20 })}
                  </div>
                  <div className="com-hero-stat-content">
                    <div className="com-hero-stat-number">{stat.number}</div>
                    <div className="com-hero-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="com-hero-scroll">
              <a href="#services" className="com-scroll-indicator">
                <ChevronDown size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Services */}
      <section className="com-services-section" id="services">
        <div className="com-container">
          <div className="com-section-header">
            <div className="com-section-badge">
              Notre Expertise
            </div>
            <h2 className="com-section-title">
              Services de Communication
            </h2>
            <p className="com-section-description">
              Des solutions complètes pour chaque défi de communication, 
              de la stratégie à l'exécution.
            </p>
          </div>

          <div className="com-services-grid">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="com-service-card"
                data-index={index}
              >
                <div className="com-card-gold-border"></div>
                <div className="com-card-circuit-pattern"></div>
                
                <div className="com-card-header">
                  <div className="com-card-icon-wrapper">
                    <div className="com-card-icon">
                      {React.createElement(service.icon, { size: 32 })}
                    </div>
                    <div className="com-card-glow"></div>
                  </div>
                  
                  <div className="com-card-titles">
                    <h3 className="com-card-title">{service.title}</h3>
                    <div className="com-card-performance">
                      <TrendingUp size={14} />
                      <span>{service.stats}</span>
                    </div>
                  </div>
                </div>

                <div className="com-card-body">
                  <div className="com-card-stats">
                    <span className="com-card-stat-badge">
                      Service Premium
                    </span>
                  </div>
                  
                  <p className="com-card-description">{service.description}</p>
                  
                  <div className="com-card-details">
                    <ul className="com-details-list">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="com-detail-item">
                          <CheckCircle size={14} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="com-card-footer">
                    <a href="/contact" className="com-card-link">
                      <span>En savoir plus</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Secteurs d'Activité */}
      <section className="com-secteurs-section">
        <div className="com-container">
          <div className="com-section-header">
            <div className="com-section-badge">
              Nos Spécialités
            </div>
            <h2 className="com-section-title">
              Secteurs d'Expertise
            </h2>
            <p className="com-section-description">
              Une expertise pointue adaptée aux défis spécifiques de chaque industrie.
            </p>
          </div>

          <div className="com-secteurs-grid">
            {secteurs.map((secteur, index) => (
              <div key={index} className="com-secteur-card">
                <div className="com-secteur-icon">
                  {React.createElement(secteur.icon, { size: 32 })}
                </div>
                <h3 className="com-secteur-title">{secteur.name}</h3>
                <p className="com-secteur-count">{secteur.count}</p>
                <a href={`/secteur/${secteur.name.toLowerCase()}`} className="com-secteur-link">
                  <span>Voir nos réalisations</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nos Expertises */}
      <section className="com-expertises-section">
        <div className="com-container">
          <div className="com-section-header">
            <div className="com-section-badge">
              Domaines de Compétence
            </div>
            <h2 className="com-section-title">
              Expertises Pointues
            </h2>
            <p className="com-section-description">
              Des compétences spécialisées pour des résultats exceptionnels.
            </p>
          </div>

          <div className="com-expertises-grid">
            {expertises.map((expertise, index) => (
              <div key={index} className="com-expertise-card">
                <div className="com-expertise-icon">
                  {React.createElement(expertise.icon)}
                </div>
                <h3 className="com-expertise-title">{expertise.title}</h3>
                <p className="com-expertise-description">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Réseaux Sociaux */}
      <section className="com-reseaux-section">
        <div className="com-container">
          <div className="com-section-header">
            <div className="com-section-badge">
              Notre Portée
            </div>
            <h2 className="com-section-title">
              Influence Digitale
            </h2>
            <p className="com-section-description">
              Une communauté engagée et une portée exceptionnelle sur les principales plateformes.
            </p>
          </div>

          <div className="com-reseaux-grid">
            {reseaux.map((reseau, index) => (
              <div key={index} className="com-reseau-card">
                <div className="com-reseau-icon">
                  {React.createElement(reseau.icon, { size: 40 })}
                </div>
                <h3 className="com-reseau-name">{reseau.name}</h3>
                <div className="com-reseau-followers">
                  <Users size={16} />
                  <span>{reseau.followers} followers</span>
                </div>
                <div className="com-reseau-engagement">
                  <span>Engagement: 4.8%</span>
                  <ThumbsUp size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Technologies */}
      <section className="com-technologies-section">
        <div className="com-container">
          <div className="com-section-header">
            <div className="com-section-badge">
              Notre Écosystème
            </div>
            <h2 className="com-section-title">
              Technologies Avancées
            </h2>
            <p className="com-section-description">
              Des outils performants et innovants pour maximiser l'impact de vos campagnes.
            </p>
          </div>

          <div className="com-technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="com-technology-item">
                <div className="com-technology-icon">
                  <Zap size={20} />
                </div>
                <span className="com-technology-text">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="com-temoignages-section">
        <div className="com-container">
          <div className="com-section-header">
            <div className="com-section-badge">
              Nos Références
            </div>
            <h2 className="com-section-title">
              Ils Nous Font Confiance
            </h2>
            <p className="com-section-description">
              Des partenaires prestigieux qui témoignent de notre expertise et de notre impact.
            </p>
          </div>

          <div className="com-temoignages-grid">
            {temoignages.map((temoignage, index) => (
              <div key={index} className="com-temoignage-card">
                <div className="com-card-circuit-pattern"></div>
                
                <div className="com-temoignage-body">
                  <div className="com-temoignage-content">
                    <div className="com-temoignage-quote">
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
                    
                    <p className="com-temoignage-texte">"{temoignage.texte}"</p>
                    
                    <div className="com-temoignage-auteur">
                      <h4 className="com-temoignage-nom">{temoignage.auteur}</h4>
                      <p className="com-temoignage-role">{temoignage.role}</p>
                      <div className="com-temoignage-note">
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

      {/* Section CTA */}
      <section className="com-cta-section">
        <div className="com-container">
          <div className="com-cta-content">
            <div className="com-cta-badge">
              <Rocket size={16} />
              <span>Projet Ambitieux ?</span>
            </div>
            
            <h2 className="com-cta-title">
              Propulsez Votre <span className="com-cta-highlight">Communication</span>
            </h2>
            
            <p className="com-cta-description">
              Discutons de votre projet et créons ensemble une stratégie de communication 
              qui fera la différence. Notre équipe d'experts est à votre écoute.
            </p>
            
            <div className="com-contact-info">
              <div className="com-contact-item">
                <Phone size={20} />
                <span>+225 27 22 44 55 77</span>
              </div>
              <div className="com-contact-item">
                <Mail size={20} />
                <span>communication@odevolv.ci</span>
              </div>
              <div className="com-contact-item">
                <MapPin size={20} />
                <span>Plateau, Abidjan - Côte d'Ivoire</span>
              </div>
            </div>
            
            <div className="com-cta-actions">
              <a href="/audit" className="com-cta-button com-cta-primary">
                <BarChart size={20} />
                <span>Audit Gratuit</span>
              </a>
              <a href="/contact" className="com-cta-button com-cta-secondary">
                <MessageCircle size={20} />
                <span>Planifier un Appel</span>
              </a>
            </div>

            <div className="com-garanties">
              <div className="com-garantie">
                <Shield size={16} />
                <span>Stratégie Garantie</span>
              </div>
              <div className="com-garantie">
                <TrendingUp size={16} />
                <span>ROI Mesurable</span>
              </div>
              <div className="com-garantie">
                <Headphones size={16} />
                <span>Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="com-footer">
        <div className="com-container">
          <div className="com-footer-content">
            <div className="com-footer-brand">
              <h3 className="com-footer-title">Odevolv Communication</h3>
              <p className="com-footer-tagline">
                Stratégie, Création, Impact
              </p>
            </div>
            
            <div className="com-footer-links">
              <div className="com-footer-column">
                <h4>Services</h4>
                <a href="/strategie-digitale">Stratégie Digitale</a>
                <a href="/media-rp">Média & RP</a>
                <a href="/branding">Branding</a>
                <a href="/audiovisuel">Audiovisuel</a>
              </div>
              <div className="com-footer-column">
                <h4>Ressources</h4>
                <a href="/blog">Blog Stratégie</a>
                <a href="/etudes-cas">Études de Cas</a>
                <a href="/livre-blanc">Livres Blancs</a>
                <a href="/webinaires">Webinaires</a>
              </div>
              <div className="com-footer-column">
                <h4>Agence</h4>
                <a href="/a-propos">À propos</a>
                <a href="/equipe">Notre Équipe</a>
                <a href="/carrieres">Carrières</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
            
            <div className="com-footer-certifications">
              <div className="com-certification">
                <Award size={16} />
                <span>Meilleure Agence 2024</span>
              </div>
              <div className="com-certification">
                <Shield size={16} />
                <span>Certifié ISO 27001</span>
              </div>
              <div className="com-certification">
                <Globe size={16} />
                <span>25+ Pays Couverts</span>
              </div>
            </div>

            <div className="com-footer-social">
              <div className="com-social-title">Suivez-nous</div>
              <div className="com-social-icons">
                <a href="https://facebook.com" className="com-social-icon">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" className="com-social-icon">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" className="com-social-icon">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" className="com-social-icon">
                  <Linkedin size={20} />
                </a>
                <a href="https://youtube.com" className="com-social-icon">
                  <Video size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Icônes supplémentaires pour les secteurs
const Building = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
  </svg>
);

const Cpu = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const Heart = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Film = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

const ShoppingBag = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default OdevolvCommunication;