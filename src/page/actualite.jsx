import { useState } from "react";
import { 
  Calendar, 
  Tag, 
  ArrowRight, 
  Clock, 
  Users, 
  Award, 
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ExternalLink,
  Share2,
  Download,
  Heart,
  Target,
  Star,
  FileText,
  Eye,
  BookOpen,
  Newspaper,
  Trophy,
  Briefcase
} from "lucide-react";
import './actualite.css';

const OdevolvNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["Tous", "Football", "Cosmétique", "Événementiel", "Communication", "Restaurant", "Location", "Groupe"];

  const newsArticles = [
    {
      id: 1,
      title: "Odevolv Group inaugure son académie de football ultramoderne de 5 hectares",
      excerpt: "Investissement stratégique de 800 millions FCFA pour former la prochaine génération de champions africains.",
      fullContent: `Odevolv Group franchit une étape historique dans le développement du sport africain avec l'inauguration de son académie de football d'excellence. Cet investissement de 800 millions FCFA matérialise notre vision pour l'émergence des talents locaux.

      Infrastructure d'exception :
      • 3 terrains synthétiques dernière génération
      • 1 terrain naturel aux normes FIFA
      • Centre de performance avec analyse vidéo
      • Internat premium pour 200 jeunes sportifs
      • Centre médical et de rééducation
      • Salle de musculation high-tech
      
      Programme pédagogique exclusif :
      • Encadrement par 15 coachs diplômés UEFA/CAF
      • Suivi scolaire individualisé
      • Développement personnel et leadership
      • Stages internationaux avec clubs partenaires
      
      Partenariats stratégiques avec 3 clubs européens d'élite pour offrir des débouchés professionnels à nos meilleurs éléments.`,
      date: "15 Mars 2024",
      category: "Football",
      readTime: "4 min",
      images: [
        "https://images.unsplash.com/photo-1577223625818-2c7d0e2ee41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1579952363873-27f1bddcd8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ],
      location: "Abidjan, Côte d'Ivoire",
      author: "Jean Koffi",
      position: "Directeur Sports Odevolv",
      tags: ["Football", "Formation", "Jeunes Talents", "Infrastructure"],
      stats: {
        investissement: "800M FCFA",
        surface: "5 Hectares",
        capacite: "200 Jeunes",
        coachs: "15 Experts"
      }
    },
    {
      id: 2,
      title: "Lancement de \"Ébène Royale Prestige\", notre ligne cosmétique bio d'excellence",
      excerpt: "25 produits innovants 100% naturels, certifiés bio et enrichis d'ingrédients africains rares.",
      fullContent: `Odevolv Group révolutionne l'industrie cosmétique avec "Ébène Royale Prestige", une collection qui célèbre la beauté africaine authentique.

      Innovation scientifique :
      • 25 formules brevetées développées avec des dermatologues
      • Ingrédients 100% africains d'exception
      • Procédés d'extraction à froid préservant les actifs
      • Tests cliniques rigoureux
      
      Ingrédients phares :
      • Beurre de karité pur du Burkina Faso
      • Huile de moringa biologique certifiée
      • Extrait de baobab riche en antioxydants
      • Argile de Ndop aux propriétés purifiantes
      
      Engagement durable :
      • Packaging 100% recyclable et éco-conçu
      • Production neutre en carbone
      • Partenariat avec 50 coopératives locales
      • Programme de reforestation
      
      Disponible dans 30 points de vente premium et bientôt exportée vers 4 pays d'Afrique de l'Ouest.`,
      date: "8 Mars 2024",
      category: "Cosmétique",
      readTime: "5 min",
      images: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2087&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        "https://images.unsplash.com/photo-1596703923538-b6d4bb0a44ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      location: "Laboratoires Odevolv, Abidjan",
      author: "Dr Aïcha Diarra",
      position: "Directrice R&D Cosmétique",
      tags: ["Cosmétique", "Bio", "Innovation", "Made in Africa"],
      stats: {
        produits: "25 Formules",
        certification: "Ecocert Bio",
        pointsVente: "30 Boutiques",
        export: "4 Pays"
      }
    },
    {
      id: 3,
      title: "Gala Annuel 2024 : Une célébration d'excellence au Sofitel Hôtel Ivoire",
      excerpt: "650 personnalités d'élite ont célébré nos succès lors d'une soirée événementielle mémorable.",
      fullContent: `Le Gala Annuel Odevolv Group 2024 a marqué les esprits par son raffinement et son ambition. Réunissant l'élite économique d'Afrique de l'Ouest, cet événement a témoigné de notre leadership régional.

      Scénographie immersive :
      • Design signé par notre agence événementielle
      • Éclairage intelligent et mapping vidéo
      • Décors végétalisés et mobilier design
      • Ambiance sonore sur-mesure
      
      Expérience culinaire :
      • Menu dégustation en 5 services par notre chef étoilé
      • Accord mets-vins par notre sommelier
      • Produits locaux d'exception réinterprétés
      • Service au cordon bleu
      
      Moments stratégiques :
      • Signature de 3 nouveaux partenariats majeurs
      • Lancement de notre fondation éducative
      • Présentation de notre roadmap innovation 2025-2027
      • Remise des trophées "Partenaire d'Excellence"
      
      Retombées exceptionnelles avec une couverture média internationale.`,
      date: "1 Mars 2024",
      category: "Événementiel",
      readTime: "3 min",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      location: "Sofitel Hôtel Ivoire, Abidjan",
      author: "Sophie N'Guessan",
      position: "Directrice Événementiel",
      tags: ["Événement", "Gala", "Networking", "Prestige"],
      stats: {
        invites: "650 Personnalités",
        duree: "6 Heures",
        medias: "8 Couvertures",
        partenaires: "15 Distinctions"
      }
    }
  ];

  const filteredItems = selectedCategory === "Tous" 
    ? newsArticles 
    : newsArticles.filter(item => item.category === selectedCategory);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedArticle) {
      setCurrentImageIndex((prev) => 
        prev === selectedArticle.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedArticle) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedArticle.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="odevolv-news-container">
      {/* Hero Section */}
      <section className="odevolv-news-hero-section">
        <div className="odevolv-news-hero-bg">
          <div className="odevolv-news-hero-gradient"></div>
          <div className="odevolv-news-hero-pattern"></div>
        </div>
        <div className="odevolv-news-hero-wrapper">
          <div className="odevolv-news-hero-text-content">
            <div className="odevolv-news-hero-badge">
              <Newspaper size={16} />
              <span>Odevolv Group · Actualités Premium</span>
            </div>
            <h1 className="odevolv-news-hero-headline">
              L'Excellence <span className="odevolv-news-hero-highlight">en Actualités</span>
            </h1>
            <p className="odevolv-news-hero-description">
              Suivez les dernières innovations, réalisations et succès 
              d'Odevolv Group et de ses huit filiales spécialisées. 
              Chaque actualité témoigne de notre engagement pour l'excellence africaine.
            </p>
            <div className="odevolv-news-hero-stats">
              <div className="odevolv-news-stat-item">
                <div className="odevolv-news-stat-icon">
                  <Calendar size={20} />
                </div>
                <div className="odevolv-news-stat-details">
                  <span className="odevolv-news-stat-number">{newsArticles.length}+</span>
                  <span className="odevolv-news-stat-label">Articles premium</span>
                </div>
              </div>
              <div className="odevolv-news-stat-item">
                <div className="odevolv-news-stat-icon">
                  <Target size={20} />
                </div>
                <div className="odevolv-news-stat-details">
                  <span className="odevolv-news-stat-number">8</span>
                  <span className="odevolv-news-stat-label">Filiales expertes</span>
                </div>
              </div>
              <div className="odevolv-news-stat-item">
                <div className="odevolv-news-stat-icon">
                  <Trophy size={20} />
                </div>
                <div className="odevolv-news-stat-details">
                  <span className="odevolv-news-stat-number">15+</span>
                  <span className="odevolv-news-stat-label">Distinctions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="odevolv-news-hero-visual">
            <div className="odevolv-news-hero-image-container">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Odevolv Group Actualités" />
              <div className="odevolv-news-hero-overlay">
                <span className="odevolv-news-hero-tag">À la une</span>
                <h3 className="odevolv-news-hero-caption">Innovation & Leadership</h3>
                <p className="odevolv-news-hero-subcaption">Odevolv Group redéfinit l'excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="odevolv-news-categories-section">
        <div className="odevolv-news-categories-wrapper">
          <div className="odevolv-news-categories-header">
            <h2 className="odevolv-news-categories-title">Filtrer par Spécialité</h2>
            <p className="odevolv-news-categories-subtitle">
              Découvrez nos actualités par domaine d'expertise
            </p>
          </div>
          <div className="odevolv-news-categories-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`odevolv-news-category-btn ${selectedCategory === category ? 'odevolv-news-category-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span className="odevolv-news-category-label">{category}</span>
                {selectedCategory === category && (
                  <div className="odevolv-news-category-indicator">
                    <Star size={10} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="odevolv-news-articles-section">
        <div className="odevolv-news-articles-container">
          <div className="odevolv-news-articles-header">
            <div className="odevolv-news-articles-title-content">
              <h2 className="odevolv-news-articles-main-title">
                <span className="odevolv-news-articles-title-accent">A</span>ctualités
                <span className="odevolv-news-articles-title-sub">Odevolv</span>
              </h2>
              <p className="odevolv-news-articles-subtitle">
                {selectedCategory === "Tous" 
                  ? "Découvrez toutes nos réalisations d'excellence" 
                  : `${selectedCategory} · ${filteredItems.length} article${filteredItems.length > 1 ? 's' : ''} premium`}
              </p>
            </div>
          </div>
          <div className="odevolv-news-articles-grid">
            {filteredItems.map((item, index) => (
              <article 
                key={`odevolv-article-${item.id}`} 
                className="odevolv-news-article-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="odevolv-news-article-image">
                  <img src={item.images[0]} alt={item.title} />
                  <div className="odevolv-news-article-category">
                    <Tag size={12} />
                    <span>{item.category}</span>
                  </div>
                  <div className="odevolv-news-article-hover">
                    <button 
                      className="odevolv-news-article-read-btn"
                      onClick={() => handleArticleClick(item)}
                    >
                      <BookOpen size={18} />
                      <span>Lire l'article</span>
                    </button>
                  </div>
                </div>
                <div className="odevolv-news-article-content">
                  <div className="odevolv-news-article-meta">
                    <div className="odevolv-news-article-meta-item">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="odevolv-news-article-meta-item">
                      <Clock size={14} />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="odevolv-news-article-meta-item">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <h3 className="odevolv-news-article-heading">{item.title}</h3>
                  <p className="odevolv-news-article-summary">{item.excerpt}</p>
                  <div className="odevolv-news-article-footer">
                    <div className="odevolv-news-article-author">
                      <span>Par {item.author}</span>
                    </div>
                    <button 
                      className="odevolv-news-article-action"
                      onClick={() => handleArticleClick(item)}
                    >
                      <span>Lire la suite</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredItems.length > 0 && (
            <div className="odevolv-news-section-footer">
              <div className="odevolv-news-count-info">
                <FileText size={20} />
                <span>{filteredItems.length} articles premium</span>
              </div>
              <button className="odevolv-news-view-all">
                <span>Voir toutes les actualités</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal pour les articles */}
      {selectedArticle && (
        <div className="odevolv-news-modal-overlay" onClick={closeModal}>
          <div className="odevolv-news-modal-wrapper" onClick={(e) => e.stopPropagation()}>
            {/* Header du modal */}
            <div className="odevolv-news-modal-header">
              <div className="odevolv-news-modal-header-content">
                <div className="odevolv-news-modal-badge">
                  <Award size={14} />
                  <span>{selectedArticle.category}</span>
                </div>
                <h2 className="odevolv-news-modal-title">{selectedArticle.title}</h2>
                <div className="odevolv-news-modal-meta">
                  <div className="odevolv-news-modal-meta-item">
                    <Calendar size={14} />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="odevolv-news-modal-meta-item">
                    <Clock size={14} />
                    <span>{selectedArticle.readTime} de lecture</span>
                  </div>
                  <div className="odevolv-news-modal-meta-item">
                    <MapPin size={14} />
                    <span>{selectedArticle.location}</span>
                  </div>
                </div>
              </div>
              <button className="odevolv-news-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            {/* Contenu du modal */}
            <div className="odevolv-news-modal-body">
              {/* Carrousel d'images */}
              <div className="odevolv-news-modal-carousel">
                <div className="odevolv-news-carousel-main">
                  <button className="odevolv-news-carousel-nav odevolv-news-carousel-prev" onClick={prevImage}>
                    <ChevronLeft size={24} />
                  </button>
                  
                  <div className="odevolv-news-carousel-image">
                    <img 
                      src={selectedArticle.images[currentImageIndex]} 
                      alt={`${selectedArticle.title} - Image ${currentImageIndex + 1}`}
                    />
                    <div className="odevolv-news-carousel-counter">
                      {currentImageIndex + 1} / {selectedArticle.images.length}
                    </div>
                  </div>
                  
                  <button className="odevolv-news-carousel-nav odevolv-news-carousel-next" onClick={nextImage}>
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                {/* Miniatures */}
                <div className="odevolv-news-carousel-thumbnails">
                  {selectedArticle.images.map((image, index) => (
                    <button
                      key={`thumb-${index}`}
                      className={`odevolv-news-carousel-thumb ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                    >
                      <img src={image} alt={`Miniature ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Contenu de l'article */}
              <div className="odevolv-news-modal-article">
                <div className="odevolv-news-article-header">
                  <div className="odevolv-news-article-author-info">
                    <div className="odevolv-news-author-avatar">
                      {selectedArticle.author.split(' ')[0][0]}
                    </div>
                    <div className="odevolv-news-author-details">
                      <span className="odevolv-news-author-name">{selectedArticle.author}</span>
                      <span className="odevolv-news-author-position">{selectedArticle.position}</span>
                    </div>
                  </div>
                </div>

                <div className="odevolv-news-article-content-full">
                  <h3 className="odevolv-news-article-content-title">Article Complet</h3>
                  <div className="odevolv-news-article-text-content">
                    {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={`para-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Statistiques */}
                <div className="odevolv-news-article-stats">
                  <h4 className="odevolv-news-stats-title">Chiffres Clés</h4>
                  <div className="odevolv-news-stats-grid">
                    {Object.entries(selectedArticle.stats).map(([key, value]) => (
                      <div key={`stat-${key}`} className="odevolv-news-stat-card">
                        <div className="odevolv-news-stat-value">{value}</div>
                        <div className="odevolv-news-stat-label">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="odevolv-news-article-tags">
                  <h4 className="odevolv-news-tags-title">Mots-clés</h4>
                  <div className="odevolv-news-tags-list">
                    {selectedArticle.tags.map((tag, index) => (
                      <span key={`tag-${index}`} className="odevolv-news-tag-item">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="odevolv-news-article-actions">
                  <button className="odevolv-news-action-btn odevolv-news-action-primary">
                    <ExternalLink size={18} />
                    <span>Consulter le dossier complet</span>
                  </button>
                  <button className="odevolv-news-action-btn odevolv-news-action-secondary">
                    <Heart size={18} />
                    <span>Enregistrer</span>
                  </button>
                  <button className="odevolv-news-action-btn odevolv-news-action-secondary">
                    <Share2 size={18} />
                    <span>Partager</span>
                  </button>
                  <button className="odevolv-news-action-btn odevolv-news-action-secondary">
                    <Download size={18} />
                    <span>Télécharger PDF</span>
                  </button>
                </div>

                {/* Article suivant */}
                <div className="odevolv-news-next-article">
                  <div className="odevolv-news-next-content">
                    <span className="odevolv-news-next-label">Article suivant</span>
                    <h5 className="odevolv-news-next-title">
                      Découvrez nos autres réalisations d'excellence
                    </h5>
                    <button className="odevolv-news-next-button">
                      <span>Explorer les actualités</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OdevolvNews;