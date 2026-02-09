import { Award, Target, Heart, Zap, Sparkles, TrendingUp, Users, Globe } from "lucide-react";
import './about.css';
const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence Opérationnelle",
      description: "Nous visons l'excellence dans chaque projet, chaque interaction, chaque décision. Notre quête de perfection se reflète dans nos processus rigoureux, nos certifications internationales et notre culture d'amélioration continue qui place la qualité au centre de toutes nos activités.",
      highlight: "Certifié ISO 9001:2015"
    },
    {
      icon: Target,
      title: "Innovation & Créativité",
      description: "L'innovation est au cœur de notre stratégie pour rester à la pointe de nos secteurs. Nous investissons 15% de notre chiffre d'affaires en R&D, encourageons la créativité de nos équipes et adoptons les technologies émergentes pour anticiper les besoins futurs de nos clients.",
      highlight: "15% CA en R&D"
    },
    {
      icon: Heart,
      title: "Engagement Communautaire",
      description: "Nous nous engageons pleinement auprès de nos clients, partenaires et employés, mais aussi envers nos communautés. Programmes de formation, bourses d'études, actions environnementales : nous croyons en notre responsabilité sociale d'entreprise et agissons concrètement.",
      highlight: "1000+ emplois créés"
    },
    {
      icon: Zap,
      title: "Performance Durable",
      description: "La performance guide nos actions pour des résultats concrets et mesurables, tout en respectant nos valeurs éthiques. Croissance rentable, développement durable et création de valeur partagée forment le triptyque de notre modèle économique responsable.",
      highlight: "+35% croissance annuelle"
    },
  ];

  const timeline = [
    { 
      year: "2010", 
      event: "Création de RN Corporation",
      details: "Premiers bureaux à Abidjan Plateau avec une équipe de 5 personnes passionnées",
      milestone: "Fondation"
    },
    { 
      year: "2013", 
      event: "Lancement de la division Événementiel",
      details: "Organisation de 50+ événements la première année, établissement de notre réputation",
      milestone: "Expansion"
    },
    { 
      year: "2015", 
      event: "Expansion dans la Cosmétique",
      details: "Ouverture de notre laboratoire de recherche et obtention des certifications internationales",
      milestone: "Innovation"
    },
    { 
      year: "2017", 
      event: "Diversification stratégique",
      details: "Partenariats avec clubs européens et agences internationales, équipe passée à 50+ collaborateurs",
      milestone: "Diversification"
    },
    { 
      year: "2020", 
      event: "Nouvelle phase de croissance",
      details: "Investissement de 2 milliards FCFA, création de 100+ emplois directs et indirects",
      milestone: "Croissance"
    },
    { 
      year: "2024", 
      event: "Consolidation de leader régional",
      details: "500+ clients satisfaits, 6 filiales florissantes et ambitions continentales",
      milestone: "Leadership"
    },
  ];

  const stats = [
    { icon: Users, value: "150+", label: "Collaborateurs experts", color: "from-blue-500 to-cyan-400" },
    { icon: TrendingUp, value: "35%", label: "Croissance annuelle", color: "from-emerald-500 to-green-400" },
    { icon: Award, value: "500+", label: "Clients satisfaits", color: "from-amber-500 to-yellow-400" },
    { icon: Globe, value: "6", label: "Filiales spécialisées", color: "from-purple-500 to-pink-400" },
  ];

  return (
    <div className="about-page">
      {/* Hero Section avec effet parallax */}
      <section className="hero-parallax">
        <div className="parallax-layer parallax-background" />
        <div className="parallax-layer parallax-content">
          <div className="hero-container">
            <div className="hero-glow" />
            <div className="hero-main">
              <div className="badge-container">
                <span className="badge">
                  <Sparkles size={16} />
                  Depuis 2010
                </span>
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">RN Corporation</span>
                <br />
                Excellence & Innovation
              </h1>
              <p className="hero-subtitle">
                Découvrez l'histoire, les valeurs et la vision qui font de RN Corporation
                un acteur incontournable du paysage économique ivoirien et ouest-africain.
              </p>
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="stat-item" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className={`stat-icon-bg bg-gradient-to-br ${stat.color}`}>
                      <stat.icon size={24} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Notre ADN</div>
            <h2 className="section-title">Mission & Vision</h2>
            <p className="section-subtitle">
              Construire l'avenir avec excellence, innovation et impact durable
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card card-hover">
              <div className="card-header">
                <div className="icon-wrapper bg-gradient-to-br from-amber-500/20 to-amber-500/5">
                  <Target size={28} className="text-amber-500" />
                </div>
                <h3 className="card-title">Notre Mission</h3>
              </div>
              <div className="card-content">
                <p className="card-text">
                  Créer de la valeur durable à travers l'excellence opérationnelle, 
                  l'innovation continue et un engagement profond envers nos communautés.
                </p>
                <ul className="mission-list">
                  <li>✓ Solutions complètes et personnalisées</li>
                  <li>✓ Diversification stratégique intelligente</li>
                  <li>✓ Excellence dans chaque interaction</li>
                  <li>✓ Impact social et économique positif</li>
                </ul>
              </div>
            </div>

            <div className="vision-card card-hover">
              <div className="card-header">
                <div className="icon-wrapper bg-gradient-to-br from-blue-500/20 to-blue-500/5">
                  <Sparkles size={28} className="text-blue-500" />
                </div>
                <h3 className="card-title">Vision 2030</h3>
              </div>
              <div className="card-content">
                <div className="vision-badge">Objectif Stratégique</div>
                <p className="card-text">
                  Devenir le groupe de référence en Afrique de l'Ouest, reconnu internationalement
                  pour son expertise multisectorielle et sa contribution au développement régional.
                </p>
                <div className="vision-metrics">
                  <div className="metric">
                    <div className="metric-value">8</div>
                    <div className="metric-label">Pays</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">500+</div>
                    <div className="metric-label">Employés</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">5000+</div>
                    <div className="metric-label">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Nos Fondations</div>
            <h2 className="section-title">Valeurs Fondamentales</h2>
            <p className="section-subtitle">
              Les principes qui guident chaque décision et action
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="value-card card-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="value-decoration">
                  <div className="value-glow" />
                  <div className="value-icon-container">
                    <value.icon size={32} className="value-icon" />
                  </div>
                </div>
                <div className="value-content">
                  <div className="value-highlight">{value.highlight}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Notre Parcours</div>
            <h2 className="section-title">Histoire & Croissance</h2>
            <p className="section-subtitle">
              Un voyage marqué par l'innovation, l'excellence et le succès
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={item.year} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  <div className="marker-line" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-milestone">{item.milestone}</div>
                  <h4 className="timeline-event">{item.event}</h4>
                  <p className="timeline-details">{item.details}</p>
                  <div className="timeline-connector">
                    <div className="connector-line" />
                    <div className="connector-arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h3 className="cta-title">Prêt à investir dans l'avenir ?</h3>
            <p className="cta-text">
              Rejoignez-nous dans notre mission de transformation économique 
              et sociale en Afrique de l'Ouest.
            </p>
            <button className="cta-button">
              <span>Découvrir les opportunités</span>
              <TrendingUp size={20} />
            </button>
          </div>
          <div className="cta-glow" />
        </div>
      </section>
    </div>
  );
};

export default About;