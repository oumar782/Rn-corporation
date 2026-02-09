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
  Briefcase,
  ChevronDown,
  Maximize2,
  Minus,
  Plus,
  Filter,
  CheckCircle,
  Shield,
  Globe,
  BarChart3
} from "lucide-react";
import './actualite.css';

const OdevolvNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalFullscreen, setIsModalFullscreen] = useState(false);

  const categories = [
    { name: "Tous", icon: <Globe size={16} />, count: 3 },
    { name: "Football", icon: <Trophy size={16} />, count: 1 },
    { name: "Cosmétique", icon: <Award size={16} />, count: 1 },
    { name: "Événementiel", icon: <Calendar size={16} />, count: 1 },
    { name: "Communication", icon: <Share2 size={16} />, count: 0 },
    { name: "Restaurant", icon: <Target size={16} />, count: 0 },
    { name: "Location", icon: <Briefcase size={16} />, count: 0 },
    { name: "Groupe", icon: <Users size={16} />, count: 0 }
  ];

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
      },
      featured: true
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
      },
      featured: true
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
    setIsModalFullscreen(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setIsModalFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleFullscreen = () => {
    setIsModalFullscreen(!isModalFullscreen);
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
    <div className="odevolv-news-system">
      {/* Hero Section Élégante */}
      <section className="odevolv-hero-section">
        <div className="odevolv-hero-background">
          <div className="odevolv-hero-gradient"></div>
          <div className="odevolv-hero-pattern"></div>
        </div>
        
        <div className="odevolv-hero-container">
          <div className="odevolv-hero-content">
            <div className="odevolv-hero-badge">
              <Newspaper size={18} />
              <span>Odevolv Group · Actualités Premium</span>
            </div>
            
            <h1 className="odevolv-hero-title">
              L'Excellence en <span className="odevolv-hero-highlight">Actualités</span>
            </h1>
            
            <p className="odevolv-hero-description">
              Découvrez les réalisations, innovations et succès qui font d'Odevolv Group 
              un leader incontournable en Afrique de l'Ouest. Chaque actualité témoigne 
              de notre engagement pour l'excellence et le développement durable.
            </p>

            <div className="odevolv-hero-stats">
              <div className="odevolv-stat-card">
                <div className="odevolv-stat-icon">
                  <Calendar size={22} />
                </div>
                <div className="odevolv-stat-content">
                  <span className="odevolv-stat-number">{newsArticles.length}</span>
                  <span className="odevolv-stat-label">Articles Premium</span>
                </div>
              </div>
              
              <div className="odevolv-stat-card">
                <div className="odevolv-stat-icon">
                  <Target size={22} />
                </div>
                <div className="odevolv-stat-content">
                  <span className="odevolv-stat-number">8</span>
                  <span className="odevolv-stat-label">Filiales Expertes</span>
                </div>
              </div>
              
              <div className="odevolv-stat-card">
                <div className="odevolv-stat-icon">
                  <Trophy size={22} />
                </div>
                <div className="odevolv-stat-content">
                  <span className="odevolv-stat-number">15+</span>
                  <span className="odevolv-stat-label">Distinctions</span>
                </div>
              </div>
              
              <div className="odevolv-stat-card">
                <div className="odevolv-stat-icon">
                  <Globe size={22} />
                </div>
                <div className="odevolv-stat-content">
                  <span className="odevolv-stat-number">5+</span>
                  <span className="odevolv-stat-label">Pays d'Impact</span>
                </div>
              </div>
            </div>
          </div>

          <div className="odevolv-hero-visual">
            <div className="odevolv-hero-image-stack">
              <div className="odevolv-hero-image-main">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Odevolv Group Leadership" 
                />
                <div className="odevolv-hero-image-overlay">
                  <span className="odevolv-featured-tag">
                    <Star size={14} />
                    À la une
                  </span>
                  <h3 className="odevolv-image-title">Leadership & Innovation</h3>
                  <p className="odevolv-image-subtitle">Odevolv Group redéfinit l'excellence</p>
                </div>
              </div>
              
              <div className="odevolv-hero-image-secondary">
                <img src={newsArticles[0].images[0]} alt="Académie de football" />
                <div className="odevolv-image-mini-badge">
                  <Trophy size={12} />
                  <span>Nouveau</span>
                </div>
              </div>
              
              <div className="odevolv-hero-image-tertiary">
                <img src={newsArticles[1].images[0]} alt="Cosmétique bio" />
                <div className="odevolv-image-mini-badge">
                  <Award size={12} />
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Filtres Premium */}
      <section className="odevolv-filters-section">
        <div className="odevolv-filters-container">
          <div className="odevolv-filters-header">
            <h2 className="odevolv-filters-title">
              <Filter size={24} />
              Filtrer par Expertise
            </h2>
            <p className="odevolv-filters-subtitle">
              Découvrez nos actualités par domaine d'excellence
            </p>
          </div>
          
          <div className="odevolv-filters-grid">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`odevolv-filter-button ${
                  selectedCategory === category.name ? 'odevolv-filter-active' : ''
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="odevolv-filter-icon">
                  {category.icon}
                </div>
                <div className="odevolv-filter-text">
                  <span className="odevolv-filter-name">{category.name}</span>
                  <span className="odevolv-filter-count">{category.count} articles</span>
                </div>
                {selectedCategory === category.name && (
                  <div className="odevolv-filter-indicator">
                    <CheckCircle size={16} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Articles Grid */}
      <section className="odevolv-articles-section">
        <div className="odevolv-articles-container">
          <div className="odevolv-articles-header">
            <div className="odevolv-articles-title-group">
              <h2 className="odevolv-articles-main-title">
                <span className="odevolv-title-accent">A</span>ctualités
                <span className="odevolv-title-sub">Odevolv</span>
              </h2>
              <p className="odevolv-articles-subtitle">
                {selectedCategory === "Tous" 
                  ? "Explorez nos dernières réalisations d'excellence" 
                  : `${selectedCategory} · ${filteredItems.length} article${filteredItems.length > 1 ? 's' : ''} premium`}
              </p>
            </div>
          </div>

          <div className="odevolv-articles-grid">
            {filteredItems.map((article, index) => (
              <article 
                key={`article-${article.id}`}
                className="odevolv-article-card"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleArticleClick(article)}
              >
                <div className="odevolv-article-image">
                  <img src={article.images[0]} alt={article.title} />
                  {article.featured && (
                    <div className="odevolv-featured-badge">
                      <Star size={12} />
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="odevolv-article-category">
                    <Tag size={14} />
                    <span>{article.category}</span>
                  </div>
                  <div className="odevolv-article-hover">
                    <div className="odevolv-hover-content">
                      <Eye size={20} />
                      <span>Voir les détails</span>
                    </div>
                  </div>
                </div>
                
                <div className="odevolv-article-content">
                  <div className="odevolv-article-meta">
                    <div className="odevolv-meta-item">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="odevolv-meta-item">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="odevolv-meta-item">
                      <MapPin size={14} />
                      <span>{article.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="odevolv-article-title">{article.title}</h3>
                  <p className="odevolv-article-excerpt">{article.excerpt}</p>
                  
                  <div className="odevolv-article-footer">
                    <div className="odevolv-author-info">
                      <div className="odevolv-author-avatar">
                        {article.author.split(' ')[0][0]}
                      </div>
                      <div className="odevolv-author-details">
                        <span className="odevolv-author-name">{article.author}</span>
                        <span className="odevolv-author-position">{article.position}</span>
                      </div>
                    </div>
                    <button className="odevolv-read-more">
                      <span>Lire</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length > 0 && (
            <div className="odevolv-section-footer">
              <div className="odevolv-count-info">
                <FileText size={20} />
                <span>{filteredItems.length} articles premium trouvés</span>
              </div>
              <button className="odevolv-view-all-button">
                <span>Voir toutes les actualités</span>
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal Article Premium */}
      {selectedArticle && (
        <div 
          className={`odevolv-modal-overlay ${isModalFullscreen ? 'odevolv-modal-fullscreen' : ''}`}
          onClick={closeModal}
        >
          <div 
            className="odevolv-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du Modal */}
            <div className="odevolv-modal-header">
              <div className="odevolv-modal-header-content">
                <div className="odevolv-modal-badge-group">
                  <div className="odevolv-category-badge">
                    <Tag size={14} />
                    <span>{selectedArticle.category}</span>
                  </div>
                  {selectedArticle.featured && (
                    <div className="odevolv-featured-badge-modal">
                      <Star size={12} />
                      <span>Article Premium</span>
                    </div>
                  )}
                </div>
                
                <h2 className="odevolv-modal-title">{selectedArticle.title}</h2>
                
                <div className="odevolv-modal-meta">
                  <div className="odevolv-modal-meta-item">
                    <Calendar size={14} />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="odevolv-modal-meta-item">
                    <Clock size={14} />
                    <span>{selectedArticle.readTime} de lecture</span>
                  </div>
                  <div className="odevolv-modal-meta-item">
                    <MapPin size={14} />
                    <span>{selectedArticle.location}</span>
                  </div>
                  <div className="odevolv-modal-meta-item">
                    <Eye size={14} />
                    <span>Expert</span>
                  </div>
                </div>
              </div>
              
              <div className="odevolv-modal-controls">
                <button className="odevolv-modal-button odevolv-share-button">
                  <Share2 size={18} />
                </button>
                <button className="odevolv-modal-button odevolv-download-button">
                  <Download size={18} />
                </button>
                <button 
                  className="odevolv-modal-button odevolv-fullscreen-button"
                  onClick={toggleFullscreen}
                >
                  {isModalFullscreen ? <Minus size={18} /> : <Maximize2 size={18} />}
                </button>
                <button 
                  className="odevolv-modal-button odevolv-close-button"
                  onClick={closeModal}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Corps du Modal */}
            <div className="odevolv-modal-body">
              {/* Section Images avec Carrousel */}
              <div className="odevolv-image-carousel-section">
                <div className="odevolv-carousel-main">
                  <button 
                    className="odevolv-carousel-button odevolv-prev-button"
                    onClick={prevImage}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <div className="odevolv-carousel-image-container">
                    <img 
                      src={selectedArticle.images[currentImageIndex]} 
                      alt={`${selectedArticle.title} - Image ${currentImageIndex + 1}`}
                    />
                    <div className="odevolv-carousel-counter">
                      {currentImageIndex + 1} / {selectedArticle.images.length}
                    </div>
                    
                    <div className="odevolv-carousel-overlay">
                      <button className="odevolv-zoom-button">
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    className="odevolv-carousel-button odevolv-next-button"
                    onClick={nextImage}
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="odevolv-carousel-progress">
                    {selectedArticle.images.map((_, index) => (
                      <button
                        key={`progress-${index}`}
                        className={`odevolv-progress-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Miniatures */}
                <div className="odevolv-carousel-thumbnails">
                  <div className="odevolv-thumbnails-header">
                    <h4>Galerie d'images</h4>
                    <span className="odevolv-thumbnails-count">
                      {selectedArticle.images.length} photos
                    </span>
                  </div>
                  <div className="odevolv-thumbnails-grid">
                    {selectedArticle.images.map((image, index) => (
                      <button
                        key={`thumb-${index}`}
                        className={`odevolv-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                      >
                        <img src={image} alt={`Miniature ${index + 1}`} />
                        {index === currentImageIndex && (
                          <div className="odevolv-thumbnail-active">
                            <CheckCircle size={12} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contenu de l'article */}
              <div className="odevolv-article-content-section">
                <div className="odevolv-author-section">
                  <div className="odevolv-author-card">
                    <div className="odevolv-author-avatar-large">
                      {selectedArticle.author.split(' ')[0][0]}
                    </div>
                    <div className="odevolv-author-info-details">
                      <span className="odevolv-author-name-large">{selectedArticle.author}</span>
                      <span className="odevolv-author-position-large">{selectedArticle.position}</span>
                      <div className="odevolv-author-verified">
                        <Shield size={14} />
                        <span>Expert vérifié Odevolv</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="odevolv-article-full-content">
                  <h3 className="odevolv-content-title">
                    <BookOpen size={20} />
                    Article Complet
                  </h3>
                  <div className="odevolv-content-text">
                    {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={`para-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Statistiques Chiffrées */}
                <div className="odevolv-stats-section">
                  <h4 className="odevolv-stats-title">
                    <BarChart3 size={20} />
                    Chiffres Clés
                  </h4>
                  <div className="odevolv-stats-grid">
                    {Object.entries(selectedArticle.stats).map(([key, value]) => (
                      <div key={`stat-${key}`} className="odevolv-stat-card-modal">
                        <div className="odevolv-stat-value-modal">{value}</div>
                        <div className="odevolv-stat-label-modal">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="odevolv-tags-section">
                  <h4 className="odevolv-tags-title">Mots-clés associés</h4>
                  <div className="odevolv-tags-list">
                    {selectedArticle.tags.map((tag, index) => (
                      <span key={`tag-${index}`} className="odevolv-tag-item">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="odevolv-actions-section">
                  <button className="odevolv-action-button odevolv-action-primary">
                    <ExternalLink size={18} />
                    <span>Consulter le dossier complet</span>
                    <ArrowRight size={16} />
                  </button>
                  <div className="odevolv-secondary-actions">
                    <button className="odevolv-action-button odevolv-action-secondary">
                      <Heart size={18} />
                      <span>Enregistrer</span>
                    </button>
                    <button className="odevolv-action-button odevolv-action-secondary">
                      <Share2 size={18} />
                      <span>Partager</span>
                    </button>
                    <button className="odevolv-action-button odevolv-action-secondary">
                      <Download size={18} />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>

                {/* Prochain Article */}
                <div className="odevolv-next-article-section">
                  <div className="odevolv-next-content">
                    <span className="odevolv-next-label">À découvrir ensuite</span>
                    <h5 className="odevolv-next-title">Explorez nos autres succès d'excellence</h5>
                    <button className="odevolv-next-button">
                      <span>Voir toutes les actualités</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer du Modal */}
            <div className="odevolv-modal-footer">
              <div className="odevolv-footer-left">
                <div className="odevolv-footer-info">
                  <Shield size={14} />
                  <span>Contenu vérifié · Odevolv Group © 2024</span>
                </div>
              </div>
              <div className="odevolv-footer-right">
                <button className="odevolv-footer-button">
                  <span>Signaler un problème</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OdevolvNews;