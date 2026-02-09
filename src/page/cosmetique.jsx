import React from 'react';
import { 
  Sparkles, Star, Award, Shield, CheckCircle, Users, Globe, Heart,
  Package, ShoppingBag, Truck, Phone, Mail, MapPin, ArrowRight,
  MessageCircle, ChevronDown, Zap, Coins, TrendingUp, Target,
  Leaf, Droplets, Flower, Gem, Brush, Palette, Smile, Camera,
  ShieldCheck, Truck as TruckIcon, Clock, Tag, Percent, Award as AwardIcon,
  Diamond, Crown, Gem as GemIcon, Moon, Sun, Wind
} from "lucide-react";
import './cosmetique.css';

const OdevolvCosmetique = () => {
  const services = [
    {
      title: "Cosmétiques Luxe",
      description: "Collection exclusive de produits de beauté haut de gamme, formulés avec des ingrédients rares et des technologies avancées.",
      icon: Diamond,
      stats: "200+ produits",
      details: ["Ingrédients précieux", "Formules exclusives", "Or 24K incorporé", "Packaging luxe"]
    },
    {
      title: "Soins Prestige",
      description: "Routines de soins élaborées par nos experts, combinant tradition ancestrale et innovation scientifique.",
      icon: Crown,
      stats: "50+ soins",
      details: ["Serums concentrés", "Technologie or colloïdal", "Résultats cliniques", "Texture luxueuse"]
    },
    {
      title: "Maquillage Artistique",
      description: "Gamme professionnelle de maquillage aux pigments purs et aux finitions exceptionnelles.",
      icon: GemIcon,
      stats: "75+ couleurs",
      details: ["Pigments précieux", "Finitions métallisées", "Tenue longue durée", "Formule exclusive"]
    },
    {
      title: "Parfums Signature",
      description: "Fragrances sur mesure créées par nos maîtres parfumeurs, pour une identité olfactive unique.",
      icon: Flower,
      stats: "20+ créations",
      details: ["Notes rares", "Concentration extrême", "Flacons cristal", "Édition limitée"]
    }
  ];

  const avantages = [
    {
      icon: ShieldCheck,
      title: "Certification Luxe",
      description: "Produits certifiés par les plus hautes normes de qualité internationale"
    },
    {
      icon: Diamond,
      title: "Ingrédients Précieux",
      description: "Or 24K, diamants micronisés, caviar et extraits de plantes rares"
    },
    {
      icon: TruckIcon,
      title: "Service Concierge",
      description: "Livraison personnalisée et service client dédié 24/7"
    },
    {
      icon: AwardIcon,
      title: "Récompenses Prestige",
      description: "Multiple prix internationaux d'excellence cosmétique"
    }
  ];

  const temoignages = [
    {
      texte: "La qualité des produits Odevolv est exceptionnelle. Mon teint n'a jamais été aussi lumineux depuis que j'utilise leurs soins à l'or.",
      auteur: "Isabelle D.",
      role: "Cliente VIP depuis 3 ans",
      note: "5/5"
    },
    {
      texte: "Le maquillage Odevolv offre une pigmentation et une tenue incomparables. Un must-have pour les professionnels.",
      auteur: "Alexandre M.",
      role: "Maquilleur artistique",
      note: "5/5"
    },
    {
      texte: "Le service client est à la hauteur des produits : exceptionnel. Une expérience beauté luxueuse de A à Z.",
      auteur: "Élise R.",
      role: "Influenceuse luxe",
      note: "5/5"
    }
  ];

  const statistiques = [
    { icon: Package, number: "350+", label: "Produits d'Exception" },
    { icon: Users, number: "25K+", label: "Clients VIP" },
    { icon: Globe, number: "30+", label: "Pays Prestiges" },
    { icon: Diamond, number: "100%", label: "Ingrédients Luxe" },
    { icon: Award, number: "18", label: "Prix Internationaux" }
  ];

  const valeurs = [
    "Excellence inégalée dans chaque formule",
    "Sélection rigoureuse des ingrédients",
    "Innovation scientifique constante",
    "Savoir-faire artisanal",
    "Éthique et transparence",
    "Expérience client sur-mesure"
  ];

  const categories = [
    {
      name: "Soins Visage Luxe",
      icon: GemIcon,
      count: "45 produits"
    },
    {
      name: "Soins Corps Précieux",
      icon: Diamond,
      count: "32 produits"
    },
    {
      name: "Maquillage Or",
      icon: Crown,
      count: "85 produits"
    },
    {
      name: "Parfums Signature",
      icon: Flower,
      count: "22 créations"
    },
    {
      name: "Homme Prestige",
      icon: Users,
      count: "28 produits"
    },
    {
      name: "Accessoires Cristal",
      icon: Sparkles,
      count: "18 pièces"
    }
  ];

  const certifications = [
    "Formules brevetées",
    "Tests cliniques validés",
    "Certification COSMOS",
    "Production éthique",
    "Packaging durable",
    "Service personnalisé"
  ];

  return (
    <div className="cos-wrapper">
      {/* Hero Section */}
      <section className="cos-hero">
        <div className="cos-hero-background">
          <div className="cos-hero-overlay"></div>
          <div className="cos-hero-gold-particles"></div>
          <div className="cos-hero-glow"></div>
        </div>
        
        <div className="cos-container">
          <div className="cos-hero-content">
           
            
            <h1 className="cos-hero-title">
              Odevolv <span className="cos-hero-highlights">Cosmétique</span>
            </h1>
            
            <p className="cos-hero-subtitle">
              L'art suprême de la beauté. Découvrez notre collection exclusive de cosmétiques 
              luxe, où l'or, les pierres précieuses et les ingrédients rares se rencontrent 
              pour révéler votre beauté la plus radieuse.
            </p>

            <div className="cos-hero-stats">
              {statistiques.map((stat, index) => (
                <div key={index} className="cos-hero-stat">
                  <div className="cos-hero-stat-icon">
                    {React.createElement(stat.icon, { size: 20 })}
                  </div>
                  <div className="cos-hero-stat-content">
                    <div className="cos-hero-stat-number">{stat.number}</div>
                    <div className="cos-hero-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cos-hero-scroll">
              <a href="#collections" className="cos-scroll-indicator">
                <ChevronDown size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Collections */}
      <section className="cos-collections-section" id="collections">
        <div className="cos-container">
          <div className="cos-section-header">
            
            <h2 className="cos-section-title">
              Collections d'Exception
            </h2>
            <p className="cos-section-description">
              Des formulations exclusives alliant savoir-faire ancestral et innovation 
              de pointe, pour une beauté transcendante.
            </p>
          </div>

          <div className="cos-collections-grid">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="cos-collection-card"
                data-index={index}
              >
                <div className="cos-card-gold-border"></div>
                <div className="cos-card-pattern"></div>
                
                <div className="cos-card-header">
                  <div className="cos-card-icon-wrapper">
                    <div className="cos-card-icon">
                      {React.createElement(service.icon, { size: 32 })}
                    </div>
                    <div className="cos-card-glow"></div>
                  </div>
                  
                  <div className="cos-card-titles">
                    <h3 className="cos-card-title">{service.title}</h3>
                    <div className="cos-card-performance">
                      <Package size={14} />
                      <span>{service.stats}</span>
                    </div>
                  </div>
                </div>

                <div className="cos-card-body">
                  <div className="cos-card-stats">
                    <span className="cos-card-stat-badge">
                      Collection Luxe
                    </span>
                  </div>
                  
                  <p className="cos-card-description">{service.description}</p>
                  
                  <div className="cos-card-details">
                    <ul className="cos-details-list">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="cos-detail-item">
                          <CheckCircle size={14} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="cos-card-footer">
                    <a href="/boutique" className="cos-card-link">
                      <span>Découvrir la collection</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Catégories */}
      <section className="cos-categories-section">
        <div className="cos-container">
          <div className="cos-section-header">
           
            <h2 className="cos-section-title">
              Nos Univers de Beauté
            </h2>
            <p className="cos-section-description">
              Explorez nos différentes lignes de produits, chacune conçue pour sublimer 
              votre beauté sous toutes ses facettes.
            </p>
          </div>

          <div className="cos-categories-grid">
            {categories.map((categorie, index) => (
              <div key={index} className="cos-categorie-card">
                <div className="cos-categorie-icon">
                  {React.createElement(categorie.icon, { size: 32 })}
                </div>
                <h3 className="cos-categorie-title">{categorie.name}</h3>
                <p className="cos-categorie-count">{categorie.count}</p>
                <a href={`/categorie/${categorie.name.toLowerCase()}`} className="cos-categorie-link">
                  <span>Explorer</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nos Avantages */}
      <section className="cos-avantages-section">
        <div className="cos-container">
          <div className="cos-section-header">
            
            <h2 className="cos-section-title">
              Garanties de Prestige
            </h2>
            <p className="cos-section-description">
              Des engagements qui font la différence entre le luxe et l'exceptionnel.
            </p>
          </div>

          <div className="cos-avantages-grid">
            {avantages.map((avantage, index) => (
              <div key={index} className="cos-avantage-card">
                <div className="cos-avantage-icon">
                  {React.createElement(avantage.icon)}
                </div>
                <h3 className="cos-avantage-title">{avantage.title}</h3>
                <p className="cos-avantage-description">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Certifications */}
      <section className="cos-certifications-section">
        <div className="cos-container">
          <div className="cos-section-header">
           
        
            <h2 className="cos-section-title">
              Excellence Validée
            </h2>
            <p className="cos-section-description">
              Des garanties qui témoignent de notre engagement envers la qualité et l'innovation.
            </p>
          </div>

          <div className="cos-certifications-grid">
            {certifications.map((certification, index) => (
              <div key={index} className="cos-certification-item">
                <div className="cos-certification-icon">
                  <Award size={20} />
                </div>
                <span className="cos-certification-text">{certification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="cos-temoignages-section">
        <div className="cos-container">
          <div className="cos-section-header">
           
            <h2 className="cos-section-title">
              Leurs Expériences
            </h2>
            <p className="cos-section-description">
              La satisfaction de notre clientèle d'exception est notre plus belle récompense.
            </p>
          </div>

          <div className="cos-temoignages-grid">
            {temoignages.map((temoignage, index) => (
              <div key={index} className="cos-temoignage-card">
                <div className="cos-card-pattern"></div>
                
                <div className="cos-temoignage-body">
                  <div className="cos-temoignage-content">
                    <div className="cos-temoignage-quote">
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
                    
                    <p className="cos-temoignage-texte">"{temoignage.texte}"</p>
                    
                    <div className="cos-temoignage-auteur">
                      <h4 className="cos-temoignage-nom">{temoignage.auteur}</h4>
                      <p className="cos-temoignage-role">{temoignage.role}</p>
                      <div className="cos-temoignage-note">
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
      


    </div>
  );
};

export default OdevolvCosmetique;