import { useState } from "react";
import { Star, Trophy, Utensils, MessageCircle, Calendar, Palette, ArrowRight, Play, Users, Award, Target } from "lucide-react";

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const filters = [
    { name: "Tous", icon: Star },
    { name: "Événementiel", icon: Calendar },
    { name: "Cosmétique", icon: Palette },
    { name: "Communication", icon: MessageCircle },
    { name: "Football", icon: Trophy },
    { name: "Restaurant", icon: Utensils }
  ];

  const galleryItems = [
    { 
      category: "Événementiel", 
      title: "Gala d'entreprise 2024",
      description: "Organisation complète d'un gala prestigieux pour 500 invités",
      link: "/evenementiel/gala-2024",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    { 
      category: "Cosmétique", 
      title: "Nouvelle collection printemps",
      description: "Lancement de la collection saisonnière avec shooting professionnel",
      link: "/cosmetique/collection-printemps",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
    },
    { 
      category: "Communication", 
      title: "Campagne digitale",
      description: "Stratégie de communication 360° pour une marque internationale",
      link: "/communication/campagne-digitale",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
    },
    { 
      category: "Football", 
      title: "Tournoi inter-académies",
      description: "Compétition jeunes talents avec 32 équipes participantes",
      link: "/football/tournoi-academies",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    },
    { 
      category: "Restaurant", 
      title: "Soirée gastronomique",
      description: "Événement culinaire d'exception avec chef étoilé",
      link: "/restaurant/soiree-gastronomique",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      category: "Événementiel", 
      title: "Mariage de luxe",
      description: "Cérémonie haut de gamme dans un château historique",
      link: "/evenementiel/mariage-luxe",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      category: "Cosmétique", 
      title: "Shooting produits",
      description: "Mise en valeur des nouveautés avec mannequins internationaux",
      link: "/cosmetique/shooting-produits",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2087&q=80"
    },
    { 
      category: "Communication", 
      title: "Branding corporate",
      description: "Identité visuelle complète pour groupe multinational",
      link: "/communication/branding-corporate",
      image: "https://images.unsplash.com/photo-1565689228644-83e87f26c3f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80"
    },
    { 
      category: "Football", 
      title: "Formation des jeunes talents",
      description: "Programme de développement sportif avec académie d'élite",
      link: "/football/formation-jeunes",
      image: "https://images.unsplash.com/photo-1577223625818-2c7d0e2ee41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
    },
  ];

  const filteredItems = selectedFilter === "Tous"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="gallery-page">
      {/* Header */}


      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Award size={16} />
              <span>Excellence depuis 2010</span>
            </div>
            <h1 className="hero-title">
              Notre <span className="hero-highlight">Galerie</span> d'Excellence
            </h1>
            <p className="hero-description">
              Découvrez l'étendue de notre savoir-faire à travers des réalisations 
              qui marquent les esprits. Chaque projet est une promesse d'excellence 
              et d'innovation dans nos cinq domaines d'expertise.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">
                  <Target size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Projets d'exception</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Users size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction client</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Play size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Filiales expertes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card card-1">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Événement" />
            </div>
            <div className="visual-card card-2">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Communication" />
            </div>
            <div className="visual-card card-3">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Sport" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="gallery-filters">
        <div className="filters-container">
          <h2 className="filters-title">Explorez nos Domaines d'Expertise</h2>
          <p className="filters-subtitle">
            Filtrez par filiale pour découvrir nos réalisations spécifiques
          </p>
          <div className="filters-grid">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.name}
                  className={`filter-button ${selectedFilter === filter.name ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter.name)}
                >
                  <div className="filter-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="filter-text">{filter.name}</span>
                  <div className="filter-arrow">
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="gallery-title">
              Nos <span className="accent">Réalisations</span>
            </h2>
            <p className="gallery-subtitle">
              {selectedFilter === "Tous" 
                ? "Découvrez l'ensemble de nos projets marquants" 
                : `Projets ${selectedFilter} - ${filteredItems.length} réalisation${filteredItems.length > 1 ? 's' : ''}`}
            </p>
          </div>
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={`${item.title}-${index}`} 
                className="gallery-item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="gallery-item-inner">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <span className="item-category">{item.category}</span>
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-description">{item.description}</p>
                        <a href={item.link} className="item-link">
                          <span>Découvrir le projet</span>
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    
      <style jsx>{`
        .gallery-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
          color: #1e293b;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          line-height: 1.6;
        }

        /* Header Styles */
        .gallery-header {
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
        .gallery-hero {
          position: relative;
          min-height: 90vh;
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
            radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
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
          height: 500px;
        }

        .visual-card {
          position: absolute;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: all 0.4s ease;
          border: 1px solid #e2e8f0;
        }

        .visual-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-1 {
          width: 300px;
          height: 200px;
          top: 0;
          left: 0;
          transform: rotate(-5deg);
        }

        .card-2 {
          width: 250px;
          height: 180px;
          top: 50px;
          right: 50px;
          transform: rotate(3deg);
        }

        .card-3 {
          width: 280px;
          height: 220px;
          bottom: 0;
          left: 100px;
          transform: rotate(-2deg);
        }

        .visual-card:hover {
          transform: rotate(0deg) scale(1.05);
          z-index: 10;
        }

        /* Filters Section */
        .gallery-filters {
          padding: 4rem 2rem;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .filters-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .filters-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .filters-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          margin-bottom: 3rem;
        }

        .filters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 1.5rem;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          color: #64748b;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .filter-button:hover {
          border-color: #f59e0b;
          color: #f59e0b;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.1);
        }

        .filter-button.active {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border-color: #f59e0b;
          color: #92400e;
          box-shadow: 0 20px 40px -10px rgba(245, 158, 11, 0.2);
        }

        .filter-icon {
          transition: transform 0.3s ease;
        }

        .filter-button.active .filter-icon {
          transform: scale(1.1);
        }

        .filter-text {
          flex: 1;
          text-align: left;
        }

        .filter-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .filter-button.active .filter-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Gallery Grid Section */
        .gallery-grid-section {
          padding: 6rem 2rem;
          background: #f8fafc;
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 4rem;
          position: static;
          background: none;
          border: none;
          box-shadow: none;
        }

        .gallery-title {
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

        .gallery-subtitle {
          font-size: 1.25rem;
          color: #64748b;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .gallery-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
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

        .gallery-item-inner {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.4s ease;
          border: 1px solid #f1f5f9;
        }

        .gallery-item-inner:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(245, 158, 11, 0.1);
        }

        .item-image {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item-inner:hover .item-image img {
          transform: scale(1.1);
        }

        .item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.95), rgba(217, 119, 6, 0.9));
          display: flex;
          align-items: flex-end;
          opacity: 0;
          transition: all 0.4s ease;
          padding: 2rem;
        }

        .gallery-item-inner:hover .item-overlay {
          opacity: 1;
        }

        .overlay-content {
          color: white;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .gallery-item-inner:hover .overlay-content {
          transform: translateY(0);
        }

        .item-category {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
        }

        .item-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: white;
        }

        .item-description {
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        .item-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: #d97706;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .item-link:hover {
          background: transparent;
          border-color: white;
          color: white;
          transform: translateX(5px);
        }

        /* Footer */
        .gallery-footer {
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

          .hero-visual {
            height: 300px;
          }

          .visual-card {
            position: relative;
            margin: 0 auto;
          }

          .card-1, .card-2, .card-3 {
            position: static;
            transform: none;
            margin-bottom: 1rem;
          }

          .gallery-grid {
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
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }

          .filters-grid {
            grid-template-columns: 1fr 1fr;
          }

          .gallery-grid {
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

          .filters-grid {
            grid-template-columns: 1fr;
            }
        }
      `}</style>
    </div>
  );
};

export default Gallery;