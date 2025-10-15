import { Award, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence Opérationnelle",
      description: "Nous visons l'excellence dans chaque projet, chaque interaction, chaque décision. Notre quête de perfection se reflète dans nos processus rigoureux, nos certifications internationales et notre culture d'amélioration continue qui place la qualité au centre de toutes nos activités.",
    },
    {
      icon: Target,
      title: "Innovation & Créativité",
      description: "L'innovation est au cœur de notre stratégie pour rester à la pointe de nos secteurs. Nous investissons 15% de notre chiffre d'affaires en R&D, encourageons la créativité de nos équipes et adoptons les technologies émergentes pour anticiper les besoins futurs de nos clients.",
    },
    {
      icon: Heart,
      title: "Engagement Communautaire",
      description: "Nous nous engageons pleinement auprès de nos clients, partenaires et employés, mais aussi envers nos communautés. Programmes de formation, bourses d'études, actions environnementales : nous croyons en notre responsabilité sociale d'entreprise et agissons concrètement.",
    },
    {
      icon: Zap,
      title: "Performance Durable",
      description: "La performance guide nos actions pour des résultats concrets et mesurables, tout en respectant nos valeurs éthiques. Croissance rentable, développement durable et création de valeur partagée forment le triptyque de notre modèle économique responsable.",
    },
  ];

  const timeline = [
    { 
      year: "2010", 
      event: "Création de RN Corporation avec une vision ambitieuse de bâtir un groupe multisectoriel d'excellence en Côte d'Ivoire",
      details: "Premiers bureaux à Abidjan Plateau avec une équipe de 5 personnes passionnées"
    },
    { 
      year: "2013", 
      event: "Lancement de la division Événementiel et premiers contrats majeurs avec des entreprises multinationales",
      details: "Organisation de 50+ événements la première année, établissement de notre réputation"
    },
    { 
      year: "2015", 
      event: "Expansion dans la Cosmétique avec le lancement de notre première ligne de produits naturels premium",
      details: "Ouverture de notre laboratoire de recherche et obtention des certifications internationales"
    },
    { 
      year: "2017", 
      event: "Diversification stratégique : création de l'agence Communication 360° et inauguration de l'académie de Football",
      details: "Partenariats avec clubs européens et agences internationales, équipe passée à 50+ collaborateurs"
    },
    { 
      year: "2020", 
      event: "Nouvelle phase de croissance avec l'ouverture du service Location de véhicules VIP et du Restaurant gastronomique",
      details: "Investissement de 2 milliards FCFA, création de 100+ emplois directs et indirects"
    },
    { 
      year: "2024", 
      event: "Consolidation de notre position de leader : 500+ clients satisfaits, 6 filiales florissantes et ambitions continentales",
      details: "Chiffre d'affaires en croissance de 35%, projets d'expansion en Afrique de l'Ouest"
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">À Propos de Nous</h1>
            <p className="hero-subtitle">
              Découvrez l'histoire, les valeurs et la vision qui font de RN Corporation
              un acteur majeur du paysage économique ivoirien.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="section-title">Notre Mission</h2>
              <p className="mission-text">
                RN Corporation s'est donnée pour mission de créer de la valeur durable
                à travers l'excellence opérationnelle, l'innovation continue et un engagement
                profond envers nos communautés. Nous croyons en la puissance de la diversification
                stratégique pour construire un groupe solide, résilient et capable de traverser
                tous les cycles économiques.
              </p>
              <p className="mission-text">
                Notre approche intégrée nous permet de proposer des solutions complètes et
                personnalisées à nos clients, qu'ils soient particuliers, PME ou grandes entreprises.
                Cette synergie entre nos six filiales crée une valeur ajoutée unique sur le marché
                ivoirien et ouest-africain.
              </p>
              <p className="mission-text">
                Chaque jour, nos 150+ collaborateurs travaillent avec passion pour maintenir
                les standards les plus élevés dans chacune de nos activités. Notre succès repose
                sur notre capital humain, notre culture d'innovation et notre obsession du service
                client d'excellence.
              </p>
            </div>

            <div className="vision-card">
              <h3 className="vision-title">Notre Vision 2030</h3>
              <p className="vision-text">
                Devenir le groupe de référence en Afrique de l'Ouest, reconnu internationalement
                pour son expertise multisectorielle, son engagement indéfectible envers l'excellence
                et sa contribution majeure au développement économique et social de la région.
              </p>
              <p className="vision-text">
                D'ici 2030, nous visons à opérer dans 8 pays ouest-africains, à employer plus de
                500 collaborateurs directs, et à servir plus de 5000 clients satisfaits annuellement.
                Notre ambition : créer 1000+ emplois indirects et former 10000+ jeunes à travers
                nos programmes de développement des compétences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">
              Les principes fondamentaux qui guident nos actions et nos décisions au quotidien.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} className="value-card">
                <div className="value-icon-container">
                  <value.icon size={32} className="value-icon" />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Notre Histoire</h2>
            <p className="section-subtitle">
              Un parcours marqué par la croissance, l'innovation et l'excellence.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={item.year} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4 className="timeline-event">{item.event}</h4>
                  <p className="timeline-details">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Variables CSS */
        :root {
          --primary-color: #d4af37;
          --primary-dark: #b8941f;
          --primary-light: #f4e4a6;
          --text-color: #333333;
          --text-light: #666666;
          --background-color: #ffffff;
          --background-alt: #f8f9fa;
          --border-color: #eaeaea;
          --shadow-color: rgba(0, 0, 0, 0.1);
          --gold-shadow: rgba(212, 175, 55, 0.3);
          --transition: all 0.3s ease;
        }
        
        /* Base Styles */
        .about-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: var(--text-color);
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px var(--gold-shadow);
          color: var(--text-color);
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), transparent);
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        /* Animations */
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Hero Section */
        .hero-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%), 
                      url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
          padding: 100px 0;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 100%);
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          padding: 0 20px;
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--text-color);
          text-shadow: 3px 3px 6px var(--gold-shadow);
          line-height: 1.1;
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Mission Section */
        .mission-section {
          padding: 100px 0;
          background-color: var(--background-color);
        }
        
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .mission-content {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .mission-text {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }
        
        .vision-card {
          background: linear-gradient(135deg, var(--background-alt) 0%, #ffffff 100%);
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px var(--shadow-color);
          border-left: 4px solid var(--primary-color);
          animation: slideInRight 0.8s ease-out;
        }
        
        .vision-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-color);
          text-shadow: 1px 1px 3px var(--gold-shadow);
        }
        
        .vision-text {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }
        
        /* Values Section */
        .values-section {
          padding: 100px 0;
          background-color: var(--background-alt);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .value-card {
          background-color: var(--background-color);
          padding: 2.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px var(--shadow-color);
          transition: var(--transition);
          animation: scaleIn 0.6s ease-out;
        }
        
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px var(--shadow-color), 0 0 20px var(--gold-shadow);
        }
        
        .value-icon-container {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px var(--gold-shadow);
        }
        
        .value-icon {
          color: var(--background-color);
        }
        
        .value-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-color);
        }
        
        .value-description {
          color: var(--text-light);
          line-height: 1.6;
        }
        
        /* Timeline Section */
        .timeline-section {
          padding: 100px 0;
          background-color: var(--background-color);
        }
        
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: linear-gradient(to bottom, var(--primary-light), var(--primary-color), var(--primary-light));
          transform: translateX(-50%);
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .timeline-item:nth-child(odd) {
          flex-direction: row;
          animation: slideInLeft 0.8s ease-out;
        }
        
        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
          animation: slideInRight 0.8s ease-out;
        }
        
        .timeline-year {
          flex: 0 0 120px;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          text-shadow: 1px 1px 3px var(--gold-shadow);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .timeline-content {
          flex: 1;
          padding: 2rem;
          background-color: var(--background-alt);
          border-radius: 12px;
          box-shadow: 0 5px 15px var(--shadow-color);
          margin: 0 2rem;
          position: relative;
          transition: var(--transition);
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px var(--shadow-color);
        }
        
        .timeline-content::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 20px;
          height: 20px;
          background-color: var(--primary-color);
          border-radius: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 10px var(--gold-shadow);
        }
        
        .timeline-item:nth-child(odd) .timeline-content::before {
          right: -30px;
        }
        
        .timeline-item:nth-child(even) .timeline-content::before {
          left: -30px;
        }
        
        .timeline-event {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-color);
        }
        
        .timeline-details {
          color: var(--text-light);
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }
          
          .timeline-item {
            flex-direction: row !important;
          }
          
          .timeline-year {
            flex: 0 0 80px;
            font-size: 1.5rem;
          }
          
          .timeline-content {
            margin-left: 3rem;
            margin-right: 0;
          }
          
          .timeline-content::before {
            left: -40px !important;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 576px) {
          .container {
            padding: 0 15px;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .vision-card, .value-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;