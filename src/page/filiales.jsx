import React from 'react';
import { Calendar, Palette, Megaphone, Trophy, Car, UtensilsCrossed, ArrowRight, MessageCircle, ChevronDown, Sparkles, Building2, Target, Award, Globe, Users, TrendingUp, Shield, Star, Zap, Coins } from "lucide-react";
import './filiale.css';
const OdevolvSubsidiaries = () => {
  const subsidiaries = [
    {
      title: "Odevolv Événementiel",
      description: "Leader de l'événementiel premium en Côte d'Ivoire. Nous orchestrons des expériences mémorables : mariages de rêve (50+ par an), galas d'entreprise, conférences internationales, lancements de produits et manifestations culturelles d'envergure. Notre équipe de 25 experts créatifs, notre réseau de 100+ partenaires premium et notre flotte de matériel dernier cri nous permettent de réaliser des événements exceptionnels de 50 à 5000 invités. Certifiés ISO 9001, nous garantissons qualité, ponctualité et créativité sur chaque projet. Services : concept design, scénographie, traiteur gastronomique, animations artistiques, gestion technique complète.",
      icon: Calendar,
      link: "/filiales/evenementiel",
      stats: "5000+ invités max",
      performance: "+25% croissance"
    },
    {
      title: "Odevolv Cosmétique",
      description: "Marque de cosmétiques naturels premium \"Ébène Royale\" inspirée des richesses botaniques africaines. Gamme complète de 50+ produits certifiés bio : soins visage (sérums, crèmes anti-âge), soins corps (laits, gommages), maquillage (fonds de teint adaptés à toutes carnations) et parfums signature. Laboratoire R&D à Abidjan, formulations brevetées combinant karité, moringa, baobab et technologies dermatologiques avancées. Distribués dans 30+ points de vente en Côte d'Ivoire et exportés vers 5 pays africains. Nos produits sont cruelty-free, végans et développés en collaboration avec des dermatologues. Chiffre d'affaires 2023 : 500M FCFA, croissance annuelle de 40%.",
      icon: Palette,
      link: "/filiales/cosmetique",
      stats: "40% croissance annuelle",
      performance: "500M FCFA CA"
    },
    {
      title: "Odevolv Communication",
      description: "Agence de communication 360° et marketing digital primée. Services complets : stratégie de marque, création graphique (logos, chartes graphiques, packaging), production audiovisuelle (spots TV, vidéos corporate, contenus réseaux sociaux), campagnes digitales (SEO/SEA, social media management, influence marketing), relations publiques et organisation d'événements médiatiques. Équipe pluridisciplinaire de 20 talents : stratèges, créatifs, développeurs web, community managers, relations presse. Portfolio de 80+ clients dont multinationales, PME et institutions publiques. Spécialistes de la transformation digitale des entreprises africaines. Récompensés \"Meilleure agence digitale\" aux Abidjan Marketing Awards 2023. Studios créatifs équipés, plateforme de gestion 24/7 et reporting analytique détaillé.",
      icon: Megaphone,
      link: "/filiales/communication",
      stats: "80+ clients prestigieux",
      performance: "+35% satisfaction"
    },
    {
      title: "Odevolv Football Academy",
      description: "Académie de football d'élite certifiée FIFA. Infrastructure exceptionnelle de 5 hectares : 3 terrains aux normes internationas (dont 1 en gazon synthétique nouvelle génération), salle de musculation équipée, espace médical avec kinés diplômés, internat de 80 places, salles de classe pour suivi scolaire. Programme complet de formation pour jeunes de 8 à 18 ans : technique individuelle, tactique collective, préparation physique, nutrition sportive, accompagnement psychologique et scolaire. Staff technique de 15 entraîneurs diplômés UEFA/CAF. Partenariats avec clubs européens (détection, stages). Plus de 300 jeunes formés depuis 2017, dont 50+ évoluent en championnats professionnels africains et européens. Organisation de tournois internationaux accueillant des équipes de toute l'Afrique de l'Ouest. Programmes de détection dans 10 régions ivoiriennes.",
      icon: Trophy,
      link: "/filiales/football-academy",
      stats: "300+ jeunes formés",
      performance: "50+ professionnels"
    },
    {
      title: "Odevolv Prestige Location",
      description: "Service premium de location de véhicules avec chauffeur. Flotte exclusive de 80+ véhicules haut de gamme régulièrement renouvelés : berlines de luxe (Mercedes Classe S, BMW Série 7, Audi A8), SUV premium (Range Rover, Porsche Cayenne), minibus VIP (Mercedes Sprinter aménagés luxe jusqu'à 18 places), véhicules événementiels (limousines, voitures de collection pour mariages). Tous véhicules climatisés, GPS, WiFi embarqué. Chauffeurs professionnels trilingues (français/anglais/local), formés aux protocoles VIP, ponctuels et discrets. Services 24h/24, 7j/7 : transferts aéroport, déplacements d'affaires, circuits touristiques, événements spéciaux, mises à disposition longue durée. Tarifs dégressifs pour entreprises. Assurance tous risques incluse. Réservation en ligne et facturation simplifiée. Clientèle : diplomates, PDG, délégations officielles, touristes premium.",
      icon: Car,
      link: "/filiales/prestige-location",
      stats: "80+ véhicules premium",
      performance: "95% taux de fidélité"
    },
    {
      title: "Le Palais Saveurs",
      description: "Restaurant gastronomique fusion situé au cœur d'Abidjan Plateau. Expérience culinaire raffinée orchestrée par le Chef Kouamé, formé dans les meilleures tables parisiennes et récompensé d'une distinction Michelin. Cuisine signature mêlant traditions ivoiriennes et techniques gastronomiques contemporaines : attieké revisité aux fruits de mer nobles, poulet braisé aux épices rares, poissons grillés sauce vierge, desserts créatifs aux fruits tropicaux. Menu dégustation 7 plats (25000 FCFA), carte des vins exceptionnelle de 200+ références (France, Afrique du Sud, Californie), cave climatisée visible. Cadre élégant et intimiste de 80 couverts : décoration contemporaine africaine, vaisselle de créateurs, éclairage soigné, musique jazz live les vendredis. Service impeccable par sommeliers et maîtres d'hôtel formés. Salons privés disponibles pour événements d'affaires ou familiaux. Ouvert midi et soir, réservation conseillée. Certifié Hygiene Excellence.",
      icon: UtensilsCrossed,
      link: "/filiales/palais-saveurs",
      stats: "Distinction Michelin",
      performance: "4.9/5 étoiles"
    },
  ];

  const achievements = [
    { icon: Building2, number: "6", label: "Filiales Spécialisées" },
    { icon: Target, number: "150+", label: "Experts Talentueux" },
    { icon: Award, number: "25+", label: "Récompenses" },
    { icon: Globe, number: "5", label: "Pays d'Exportation" },
    { icon: Users, number: "500+", label: "Clients Satisfaits" }
  ];

  const valuePropositions = [
    {
      icon: TrendingUp,
      title: "Croissance Exponentielle",
      description: "Croissance moyenne de 35% par an sur 3 ans"
    },
    {
      icon: Shield,
      title: "Résilience Économique",
      description: "Diversification sectorielle réduisant les risques"
    },
    {
      icon: Star,
      title: "Excellence Avérée",
      description: "Certifications et récompenses internationales"
    },
    {
      icon: Zap,
      title: "Innovation Continue",
      description: "R&D permanente et adaptation aux marchés"
    }
  ];

  return (
    <div className="odevolv-subsidiaries">
      {/* Hero Section en noir/or */}
      <section className="odevolv-hero">
        <div className="odevolv-hero-background">
          <div className="odevolv-hero-overlay"></div>
          <div className="odevolv-hero-gold-particles"></div>
          <div className="odevolv-hero-glow"></div>
        </div>
        
        <div className="odevolv-hero-content">
          <div className="odevolv-hero-badge">
            <Sparkles size={16} />
            <span>Portfolio d'Excellence</span>
          </div>
          
          <h1 className="odevolv-hero-title">
            L'Empire <span className="odevolv-hero-highlight">Odevolv</span>
          </h1>
          
          <p className="odevolv-hero-subtitle">
            Un écosystème diversifié de six filiales d'excellence, 
            chacune leader dans son secteur. Innovation, qualité et 
            croissance durable définissent notre ADN entrepreneurial.
          </p>

          <div className="odevolv-hero-stats">
            {achievements.map((achievement, index) => (
              <div key={index} className="odevolv-hero-stat">
                <div className="odevolv-hero-stat-icon">
                  {React.createElement(achievement.icon, { size: 20 })}
                </div>
                <div className="odevolv-hero-stat-content">
                  <div className="odevolv-hero-stat-number">{achievement.number}</div>
                  <div className="odevolv-hero-stat-label">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="odevolv-hero-scroll">
            <a href="#portfolio" className="odevolv-scroll-indicator">
              <ChevronDown size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Section valeur ajoutée - fond clair */}
      <section className="odevolv-value-section">
        <div className="odevolv-container">
          <div className="odevolv-value-grid">
            {valuePropositions.map((prop, index) => (
              <div key={index} className="odevolv-value-card">
                <div className="odevolv-value-icon">
                  {React.createElement(prop.icon)}
                </div>
                <h3 className="odevolv-value-title">{prop.title}</h3>
                <p className="odevolv-value-description">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - fond clair */}
      <section className="odevolv-portfolio-section" id="portfolio">
        <div className="odevolv-container">
          <div className="odevolv-section-header">
            <div className="odevolv-section-badge">
              Notre Écosystème
            </div>
            <h2 className="odevolv-section-title">
              Des Piliers d'Excellence
            </h2>
            <p className="odevolv-section-description">
              Six filiales, une vision : révolutionner chaque secteur 
              avec innovation et expertise africaine.
            </p>
          </div>

          <div className="odevolv-portfolio-grid">
            {subsidiaries.map((subsidiary, index) => (
              <div 
                key={subsidiary.title} 
                className="odevolv-portfolio-card"
                data-index={index}
              >
                <div className="odevolv-card-gold-border"></div>
                <div className="odevolv-card-pattern"></div>
                
                <div className="odevolv-card-header">
                  <div className="odevolv-card-icon-wrapper">
                    <div className="odevolv-card-icon">
                      {React.createElement(subsidiary.icon, { size: 32 })}
                    </div>
                    <div className="odevolv-card-glow"></div>
                  </div>
                  
                  <div className="odevolv-card-titles">
                    <h3 className="odevolv-card-title">{subsidiary.title}</h3>
                    <div className="odevolv-card-performance">
                      <Coins size={14} />
                      <span>{subsidiary.performance}</span>
                    </div>
                  </div>
                </div>

                <div className="odevolv-card-body">
                  <div className="odevolv-card-stats">
                    <span className="odevolv-card-stat-badge">
                      {subsidiary.stats}
                    </span>
                  </div>
                  
                  <p className="odevolv-card-description">{subsidiary.description}</p>
                  
                  <div className="odevolv-card-footer">
                    <a href={subsidiary.link} className="odevolv-card-link">
                      <span>Explorer les détails</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - fond clair */}
      <section className="odevolv-cta-section">
        <div className="odevolv-container">
          <div className="odevolv-cta-content">
            <div className="odevolv-cta-badge">
              <Sparkles size={16} />
              <span>Opportunité d'Investissement</span>
            </div>
            
            <h2 className="odevolv-cta-title">
              Partenaire de Notre <span className="odevolv-cta-highlight">Croissance</span>
            </h2>
            
            <p className="odevolv-cta-description">
              Rejoignez-nous dans cette aventure entrepreneuriale exceptionnelle. 
              Investissez dans un écosystème diversifié, résilient et à forte 
              croissance. Notre succès est votre succès.
            </p>
            
            <div className="odevolv-cta-actions">
              <a href="/investisseurs" className="odevolv-cta-button odevolv-cta-primary">
                <MessageCircle size={20} />
                <span>Devenir Investisseur</span>
              </a>
              <a href="/contact" className="odevolv-cta-button odevolv-cta-secondary">
                <span>Planifier une Rencontre</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdevolvSubsidiaries;