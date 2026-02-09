import { Award, Target, Heart, Zap, Sparkles, TrendingUp, Users, Globe, ChevronRight, Star, BarChart3, Lightbulb } from "lucide-react";
import './about.css';

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: "Excellence Opérationnelle",
      description: "Nous visons l'excellence dans chaque projet, chaque interaction, chaque décision. Notre quête de perfection se reflète dans nos processus rigoureux, nos certifications internationales et notre culture d'amélioration continue qui place la qualité au centre de toutes nos activités.",
      highlight: "Certifié ISO 9001:2015",
      accent: "gold"
    },
    {
      icon: Target,
      title: "Innovation & Créativité",
      description: "L'innovation est au cœur de notre stratégie pour rester à la pointe de nos secteurs. Nous investissons 15% de notre chiffre d'affaires en R&D, encourageons la créativité de nos équipes et adoptons les technologies émergentes pour anticiper les besoins futurs de nos clients.",
      highlight: "15% CA en R&D",
      accent: "emerald"
    },
    {
      icon: Heart,
      title: "Engagement Communautaire",
      description: "Nous nous engageons pleinement auprès de nos clients, partenaires et employés, mais aussi envers nos communautés. Programmes de formation, bourses d'études, actions environnementales : nous croyons en notre responsabilité sociale d'entreprise et agissons concrètement.",
      highlight: "1000+ emplois créés",
      accent: "rose"
    },
    {
      icon: Zap,
      title: "Performance Durable",
      description: "La performance guide nos actions pour des résultats concrets et mesurables, tout en respectant nos valeurs éthiques. Croissance rentable, développement durable et création de valeur partagée forment le triptyque de notre modèle économique responsable.",
      highlight: "+35% croissance annuelle",
      accent: "violet"
    },
  ];

  const journeyTimeline = [
    { 
      year: "2010", 
      title: "Création de Odevolv Corporation",
      details: "Premiers bureaux à Abidjan Plateau avec une équipe de 5 personnes passionnées",
      milestone: "Fondation",
      icon: Star
    },
    { 
      year: "2013", 
      title: "Lancement division Événementiel",
      details: "Organisation de 50+ événements la première année, établissement de notre réputation",
      milestone: "Expansion",
      icon: TrendingUp
    },
    { 
      year: "2015", 
      title: "Expansion Cosmétique & Recherche",
      details: "Ouverture de notre laboratoire R&D et obtention des certifications internationales",
      milestone: "Innovation",
      icon: Lightbulb
    },
    { 
      year: "2017", 
      title: "Diversification Stratégique",
      details: "Partenariats avec clubs européens et agences internationales, équipe passée à 50+",
      milestone: "Diversification",
      icon: Globe
    },
    { 
      year: "2020", 
      title: "Nouvelle Phase de Croissance",
      details: "Investissement de 2 milliards FCFA, création de 100+ emplois directs et indirects",
      milestone: "Croissance",
      icon: BarChart3
    },
    { 
      year: "2024", 
      title: "Leader Régional Consolidé",
      details: "500+ clients satisfaits, 6 filiales florissantes et ambitions continentales",
      milestone: "Leadership",
      icon: Award
    },
  ];

  const keyMetrics = [
    { icon: Users, value: "150+", label: "Collaborateurs Experts", suffix: "talents", gradient: "gold" },
    { icon: TrendingUp, value: "35%", label: "Croissance Annuelle", suffix: "moyenne", gradient: "emerald" },
    { icon: Award, value: "500+", label: "Clients Satisfaits", suffix: "partenaires", gradient: "rose" },
    { icon: Globe, value: "6", label: "Filiales Spécialisées", suffix: "pays", gradient: "violet" },
  ];

  const visionGoals = [
    { number: "8", label: "Pays d'ici 2030" },
    { number: "500+", label: "Employés dédiés" },
    { number: "5000+", label: "Clients satisfaits" },
    { number: "1", label: "Leader régional" },
  ];

  return (
    <div className="about-page-wrapper">
      {/* Hero Section Élégante */}
      <section className="about-hero-zone">
        <div className="about-hero-bg-layer">
          <div className="about-hero-pattern-overlay"></div>
          <div className="about-hero-gradient-mask"></div>
        </div>
        
        <div className="about-hero-inner">
          <div className="about-hero-top-badge">
            <div className="about-badge-icon-holder">
              <Sparkles size={16} />
            </div>
            <span>Excellence depuis 2010</span>
          </div>
          
          <h1 className="about-hero-main-title">
            <span className="about-title-brand">Odevolv</span>
            <span className="about-title-descriptor">Corporation</span>
          </h1>
          
          <p className="about-hero-tagline">
            Réinventer l'excellence entrepreneuriale en Afrique de l'Ouest à travers 
            l'innovation durable, la performance mesurable et l'impact transformationnel.
          </p>
          
          <div className="about-hero-stats-grid">
            {keyMetrics.map((metric, index) => (
              <div 
                key={index} 
                className={`about-stat-box about-stat-theme-${metric.gradient}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="about-stat-icon-wrap">
                  <metric.icon size={24} />
                </div>
                <div className="about-stat-text-area">
                  <div className="about-stat-number">{metric.value}</div>
                  <div className="about-stat-title">{metric.label}</div>
                  <div className="about-stat-meta">{metric.suffix}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-zone">
        <div className="about-content-container">
          <div className="about-section-intro">
            <div className="about-intro-badge">Notre Raison d'Être</div>
            <h2 className="about-section-heading">Mission & Vision Stratégique</h2>
            <p className="about-section-subtext">
              Construire l'avenir économique de l'Afrique avec une approche holistique 
              combinant innovation, durabilité et impact social mesurable.
            </p>
          </div>

          <div className="about-mission-vision-layout">
            <div className="about-mission-block">
              <div className="about-block-top">
                <div className="about-block-icon-area">
                  <Target size={32} />
                </div>
                <div className="about-block-title-group">
                  <h3>Notre Mission</h3>
                  <div className="about-block-label">ADN Corporatif</div>
                </div>
              </div>
              <div className="about-block-main">
                <p>
                  Créer de la valeur pérenne à travers l'excellence opérationnelle, 
                  l'innovation continue et un engagement profond envers le développement 
                  économique et social de l'Afrique de l'Ouest.
                </p>
                <div className="about-mission-checklist">
                  <div className="about-checklist-item">
                    <ChevronRight size={16} />
                    <span>Solutions intégrées sur mesure</span>
                  </div>
                  <div className="about-checklist-item">
                    <ChevronRight size={16} />
                    <span>Diversification stratégique intelligente</span>
                  </div>
                  <div className="about-checklist-item">
                    <ChevronRight size={16} />
                    <span>Excellence dans chaque livrable</span>
                  </div>
                  <div className="about-checklist-item">
                    <ChevronRight size={16} />
                    <span>Impact économique et social positif</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-vision-block">
              <div className="about-vision-top">
                <div className="about-vision-icon-area">
                  <Sparkles size={32} />
                </div>
                <div className="about-vision-title-group">
                  <h3>Vision 2030</h3>
                  <div className="about-vision-label">Objectif Stratégique</div>
                </div>
              </div>
              <div className="about-vision-main">
                <p>
                  Devenir le groupe de référence en Afrique de l'Ouest, reconnu 
                  internationalement pour son expertise multisectorielle et sa 
                  contribution au développement économique régional.
                </p>
                
                <div className="about-vision-goals-grid">
                  {visionGoals.map((goal, index) => (
                    <div key={index} className="about-vision-goal-item">
                      <div className="about-goal-number">{goal.number}</div>
                      <div className="about-goal-label">{goal.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Fondamentales */}
      <section className="about-values-zone">
        <div className="about-content-container">
          <div className="about-section-intro">
            <div className="about-intro-badge">Nos Fondements</div>
            <h2 className="about-section-heading">Valeurs Fondamentales</h2>
            <p className="about-section-subtext">
              Les principes intangibles qui guident chaque décision stratégique et 
              opérationnelle au sein de notre organisation.
            </p>
          </div>

          <div className="about-values-layout">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className={`about-value-panel about-value-color-${value.accent}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="about-value-visual">
                  <div className="about-value-ornament-bg"></div>
                  <div className="about-value-icon-holder">
                    <value.icon size={28} />
                  </div>
                </div>
                
                <div className="about-value-tag">{value.highlight}</div>
                
                <h3 className="about-value-heading">{value.title}</h3>
                
                <p className="about-value-text">
                  {value.description}
                </p>
                
                <div className="about-value-bottom">
                  <div className="about-value-accent-line"></div>
                  <span className="about-value-num">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Élégante */}
      <section className="about-timeline-zone">
        <div className="about-content-container">
          <div className="about-section-intro">
            <div className="about-intro-badge">Notre Parcours</div>
            <h2 className="about-section-heading">Évolution Stratégique</h2>
            <p className="about-section-subtext">
              Une trajectoire ascendante marquée par l'innovation, la croissance 
              mesurable et l'expansion stratégique.
            </p>
          </div>

          <div className="about-timeline-track">
            <div className="about-timeline-vertical-line"></div>
            
            {journeyTimeline.map((item, index) => (
              <div key={index} className="about-timeline-node">
                <div className="about-timeline-marker-area">
                  <div className="about-timeline-dot-point"></div>
                  {index !== journeyTimeline.length - 1 && (
                    <div className="about-timeline-segment-line"></div>
                  )}
                </div>
                
                <div className="about-timeline-card">
                  <div className="about-timeline-year-display">{item.year}</div>
                  
                  <div className="about-timeline-header-row">
                    <div className="about-timeline-icon-box">
                      <item.icon size={20} />
                    </div>
                    <div className="about-timeline-stage-tag">{item.milestone}</div>
                  </div>
                  
                  <h4 className="about-timeline-event-title">{item.title}</h4>
                  
                  <p className="about-timeline-event-desc">{item.details}</p>
                  
                  <div className="about-timeline-progress-track">
                    <div 
                      className="about-timeline-progress-fill"
                      style={{ width: `${(index + 1) * (100 / journeyTimeline.length)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Élégant */}
      <section className="about-cta-zone">
        <div className="about-cta-bg-layer">
          <div className="about-cta-pattern-fx"></div>
        </div>
        
        <div className="about-content-container">
          <div className="about-cta-inner">
            <div className="about-cta-top-label">Opportunité d'Investissement</div>
            
            <h3 className="about-cta-headline">
              Participez à Notre
              <br />
              <span className="about-cta-highlight-text">Croissance Exceptionnelle</span>
            </h3>
            
            <p className="about-cta-subline">
              Rejoignez notre mission de transformation économique et sociale 
              en Afrique de l'Ouest. Investissez dans un modèle éprouvé, 
              une croissance soutenue et un impact mesurable.
            </p>
            
            <div className="about-cta-buttons-row">
              <button className="about-cta-btn about-cta-btn-primary">
                <span>Explorer les Opportunités</span>
                <ChevronRight size={20} />
              </button>
              
              <button className="about-cta-btn about-cta-btn-secondary">
                <span>Télécharger le Dossier</span>
                <TrendingUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;