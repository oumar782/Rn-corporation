import { useState } from "react";
import { Calendar, Tag, ArrowRight, Clock, Users, Trophy, Star, Award, TrendingUp } from "lucide-react";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Football", "Cosmétique", "Événementiel", "Communication", "Restaurant", "Location", "Groupe"];

  const newsItems = [
    {
      title: "RN Corporation ouvre sa nouvelle académie de football ultramoderne de 5 hectares",
      excerpt: "Investissement majeur de 800 millions FCFA dans une infrastructure d'excellence dédiée à la formation de jeunes talents footballistiques. Plus de 200 jeunes pourront bénéficier de nos programmes de formation intensifs encadrés par 15 coachs diplômés UEFA/CAF. Partenariats signés avec 3 clubs européens pour faciliter la détection et les stages internationaux de nos meilleurs espoirs.",
      date: "15 Mars 2024",
      category: "Football",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1577223625818-2c7d0e2ee41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Lancement triomphal de notre nouvelle ligne cosmétique bio \"Ébène Royale Prestige\"",
      excerpt: "Découvrez notre collection exclusive révolutionnaire de 25 nouveaux produits cosmétiques 100% naturels et certifiés bio, enrichis aux ingrédients locaux rares : beurre de karité du Burkina Faso, huile de moringa, extrait de baobab. Formulations brevetées développées en collaboration avec des dermatologues français. Disponibles dans 30 points de vente à travers la Côte d'Ivoire et bientôt exportés vers le Sénégal, le Mali et le Bénin. Packaging éco-responsable 100% recyclable.",
      date: "8 Mars 2024",
      category: "Cosmétique",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Succès retentissant du Gala Annuel RN Corporation 2024 au Sofitel Hôtel Ivoire",
      excerpt: "Plus de 650 invités prestigieux (ministres, PDG, diplomates, personnalités) ont célébré les réussites exceptionnelles de l'année écoulée lors d'une soirée inoubliable de 6 heures orchestrée par notre division événementiel. Au programme : spectacles artistiques de classe internationale, dîner gastronomique 5 services signé par notre chef étoilé, remises de distinctions à nos partenaires clés, et annonce de nos projets d'expansion 2025-2027 en Afrique de l'Ouest.",
      date: "1 Mars 2024",
      category: "Événementiel",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Partenariats stratégiques majeurs : RN Corporation signe avec 5 groupes internationaux",
      excerpt: "RN Corporation renforce considérablement sa présence continentale avec des accords de coopération majeurs dans les secteurs de la communication digitale (partenariat avec Publicis Groupe), de l'automobile (Mercedes-Benz pour notre flotte premium), et de la cosmétique (laboratoires Clarins pour R&D). Ces alliances stratégiques nous positionnent comme acteur incontournable de la transformation économique ouest-africaine et ouvrent de nouvelles opportunités de croissance.",
      date: "22 Février 2024",
      category: "Communication",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Grande ouverture du restaurant gastronomique \"Le Palais Saveurs\" à Abidjan Plateau",
      excerpt: "Un nouveau temple de la haute gastronomie fusion ouvre ses portes au cœur de la capitale économique. Investissement de 300 millions FCFA pour créer un espace élégant de 250m² pouvant accueillir 80 convives. Notre Chef Kouamé, formé chez Alain Ducasse à Paris et récompensé d'une distinction Michelin, propose une carte audacieuse mêlant traditions culinaires ivoiriennes et techniques gastronomiques contemporaines. Cave à vins exceptionnelle de 200+ références internationales. Réservations ouvertes.",
      date: "14 Février 2024",
      category: "Restaurant",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Expansion massive de notre flotte automobile : 50 véhicules premium rejoignent RN Prestige Location",
      excerpt: "Investissement stratégique de 2 milliards FCFA pour renouveler et agrandir significativement notre parc automobile. Arrivée de 50 nouveaux véhicules haut de gamme dernière génération : 20 berlines de luxe Mercedes Classe S et BMW Série 7, 15 SUV premium Range Rover Sport et Porsche Cayenne, 10 minibus VIP Mercedes Sprinter aménagés grand luxe, 5 véhicules électriques Tesla Model S. Cette expansion répond à la demande croissante de nos clients corporatifs (multinationales, ambassades, organisations internationales) et renforce notre position de leader du transport VIP en Côte d'Ivoire.",
      date: "5 Février 2024",
      category: "Location",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "RN Communication remporte le Grand Prix de la Meilleure Campagne Digitale 2024",
      excerpt: "Notre agence de communication a été couronnée lors des prestigieux Abidjan Marketing Awards pour sa campagne digitale innovante \"Connectons l'Afrique\" réalisée pour Orange Côte d'Ivoire. Cette reconnaissance salue notre créativité exceptionnelle, notre maîtrise des codes digitaux africains et les résultats impressionnants obtenus : +250% d'engagement sur les réseaux sociaux, +180% de trafic web, +65% de conversions. Une fierté pour nos 20 talents créatifs qui confirme notre position de leader de la communication digitale en Afrique de l'Ouest.",
      date: "28 Janvier 2024",
      category: "Communication",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1565689228644-83e87f26c3f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "RN Corporation lance son programme de responsabilité sociale \"Impact Positif Côte d'Ivoire\"",
      excerpt: "Engagement citoyen majeur : lancement de notre programme RSE ambitieux doté de 100 millions FCFA pour 2024. Quatre axes prioritaires : formation professionnelle gratuite pour 500 jeunes défavorisés aux métiers de nos filiales, bourses d'excellence pour 50 étudiants méritants, actions environnementales (plantation de 10000 arbres, sensibilisation au recyclage), et soutien aux PME locales (mentorat, formation, mise en réseau). Partenariats signés avec 15 ONG et associations communautaires pour maximiser notre impact social positif.",
      date: "20 Janvier 2024",
      category: "Groupe",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Ébène Royale Cosmétique certifiée Ecocert et remporte le Prix de l'Innovation Beauté Africaine",
      excerpt: "Double consécration pour notre marque de cosmétiques naturels : obtention de la prestigieuse certification Ecocert Cosmos Organic (reconnaissance internationale du bio) et remise du Prix de l'Innovation Beauté Africaine lors du Salon International de la Cosmétique d'Abidjan. Ces distinctions récompensent nos 5 années de recherche, notre engagement pour des formulations 100% naturelles et notre valorisation des ingrédients africains d'exception. Export vers 8 nouveaux pays prévu en 2024.",
      date: "12 Janvier 2024",
      category: "Cosmétique",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  const filteredItems = selectedCategory === "Tous" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="news-page">
      {/* Header */}
    

      {/* Hero Section */}
      <section className="news-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <TrendingUp size={16} />
              <span>Informations en temps réel</span>
            </div>
            <h1 className="hero-title">
              Nos <span className="hero-highlight">Actualités</span>
            </h1>
            <p className="hero-description">
              Restez informés des dernières nouvelles, événements marquants 
              et réalisations exceptionnelles de RN Corporation et de ses filiales. 
              L'excellence en mouvement.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">
                  <Calendar size={20} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">{newsItems.length}+</span>
                  <span className="stat-label">Articles publiés</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Users size={20} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Filiales actives</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Award size={20} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Prix remportés</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-main">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="RN Corporation Actualités" />
              <div className="visual-overlay">
                <span className="overlay-badge">À la une</span>
                <h3>L'excellence en action</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="news-categories">
        <div className="categories-container">
          <h2 className="categories-title">Filtrer par catégorie</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span className="category-text">{category}</span>
                {selectedCategory === category && (
                  <div className="category-indicator">
                    <div className="indicator-dot"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="news-container">
          <div className="news-header">
            <h2 className="news-title">
              Dernières <span className="accent">Actualités</span>
            </h2>
            <p className="news-subtitle">
              {selectedCategory === "Tous" 
                ? "Découvrez toutes nos actualités" 
                : `Actualités ${selectedCategory} - ${filteredItems.length} article${filteredItems.length > 1 ? 's' : ''}`}
            </p>
          </div>
          <div className="news-grid">
            {filteredItems.map((item, index) => (
              <article 
                key={`${item.title}-${index}`} 
                className="news-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="card-badge">
                    <Tag size={12} />
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-excerpt">{item.excerpt}</p>
                  <div className="card-actions">
                    <button className="read-more">
                      <span>Lire l'article</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <style jsx>{`
        .news-page {
          min-height: 100vh;
          background: white;
          color: #1e293b;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          line-height: 1.6;
        }

        /* Header Styles */
        .news-header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          z-index: 1000;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
        }

        .logo-icon {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          padding: 0.5rem;
          border-radius: 10px;
          font-size: 1.2rem;
        }

        .header-nav {
          display: flex;
          gap: 2rem;
        }

        .header-nav a {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .header-nav a:hover,
        .header-nav a.active {
          color: #f59e0b;
        }

        .header-nav a.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, #d97706);
          border-radius: 2px;
        }

        /* Hero Section */
        .news-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          margin-top: 80px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
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

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }

        .hero-highlight {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .hero-highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #f59e0b, #d97706);
          border-radius: 2px;
          opacity: 0.3;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          padding: 0.75rem;
          border-radius: 12px;
          color: #d97706;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .hero-visual {
          position: relative;
        }

        .visual-main {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid #e2e8f0;
        }

        .visual-main img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .visual-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 2rem;
        }

        .overlay-badge {
          display: inline-block;
          background: #f59e0b;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .visual-overlay h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        /* Categories Section */
        .news-categories {
          padding: 3rem 2rem;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .categories-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .categories-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #1e293b;
        }

        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .category-button {
          position: relative;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 50px;
          color: #64748b;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .category-button:hover {
          border-color: #f59e0b;
          color: #f59e0b;
          transform: translateY(-2px);
        }

        .category-button.active {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border-color: #f59e0b;
          color: #92400e;
          box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.2);
        }

        .category-indicator {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 12px;
          height: 12px;
          background: #f59e0b;
          border-radius: 50%;
          border: 2px solid white;
        }

        /* News Grid Section */
        .news-grid-section {
          padding: 6rem 2rem;
          background: #f8fafc;
        }

        .news-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .news-header {
          text-align: center;
          margin-bottom: 4rem;
          position: static;
          background: none;
          border: none;
          box-shadow: none;
        }

        .news-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .accent {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .news-subtitle {
          font-size: 1.25rem;
          color: #64748b;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .news-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.4s ease;
          border: 1px solid #f1f5f9;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }

        .news-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(245, 158, 11, 0.1);
        }

        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .news-card:hover .card-image img {
          transform: scale(1.1);
        }

        .card-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.95);
          color: #92400e;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 1rem;
          color: #1e293b;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .read-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4);
        }

        /* Footer */
        .news-footer {
          background: #1e293b;
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .footer-tagline {
          color: #cbd5e1;
          line-height: 1.6;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .footer-column h4 {
          color: #f59e0b;
          margin-bottom: 1rem;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .footer-column a,
        .footer-column p {
          display: block;
          color: #cbd5e1;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: #f59e0b;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid #334155;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        .footer-legal a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #f59e0b;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .news-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }

          .header-nav {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }

          .categories-grid {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }

          .news-grid {
            grid-template-columns: 1fr;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .news-title {
            font-size: 2rem;
          }

          .categories-grid {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default News;