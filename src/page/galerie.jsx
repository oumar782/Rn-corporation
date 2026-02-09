import { useState } from "react";
import { 
  Star, 
  Trophy, 
  Utensils, 
  MessageCircle, 
  Calendar, 
  Palette, 
  ArrowRight, 
  Users, 
  Award, 
  Target,
  Sparkles,
  ChevronRight,
  Eye,
  Zap,
  TrendingUp,
  Building,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  MapPin,
  Clock,
  Users as UsersIcon,
  Tag,
  ExternalLink,
  Heart,
  Share2,
  Download
} from "lucide-react";
import './galerie.css';

const OdevolvGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    { name: "Tous", icon: Sparkles },
    { name: "Événementiel", icon: Calendar },
    { name: "Cosmétique", icon: Palette },
    { name: "Communication", icon: MessageCircle },
    { name: "Football", icon: Trophy },
    { name: "Restaurant", icon: Utensils }
  ];

  // Données des projets avec plus d'images pour le carrousel
  const galleryItems = [
    { 
      id: 1,
      category: "Événementiel", 
      title: "Gala d'entreprise 2024",
      description: "Organisation complète d'un gala prestigieux pour 500 invités avec scénographie immersive et expérience client sur-mesure.",
      longDescription: "Pour ce gala d'exception, notre équipe a orchestré chaque détail avec précision : de la scénographie immersive à la gastronomie étoilée, en passant par le spectacle live et les animations interactives. Un événement qui a marqué les esprits par son élégance et son innovation.",
      link: "/evenementiel/gala-2024",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1492684223066-e9b4ff9632f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "15 Mars 2024",
        location: "Paris, France",
        duration: "6 mois de préparation",
        participants: "500 invités VIP",
        budget: "Confidentiel"
      },
      achievements: ["+200% engagement client", "100% satisfaction", "Retour sur investissance exceptionnel"]
    },
    { 
      id: 2,
      category: "Cosmétique", 
      title: "Nouvelle collection printemps",
      description: "Lancement de la collection saisonnière avec shooting professionnel et campagne digitale intégrée.",
      longDescription: "Nous avons créé un univers visuel unique pour cette collection printanière, combinant shooting en extérieur avec des mannequins internationaux et une campagne digitale 360°. Le résultat : une identité forte qui a généré un buzz immédiat sur les réseaux sociaux.",
      link: "/cosmetique/collection-printemps",
      images: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2087&q=80",
        "https://images.unsplash.com/photo-1596703923538-b6d4bb0a44ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1556228578-9c360e1d458b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Février 2024",
        location: "Côte d'Azur",
        duration: "3 mois",
        participants: "Équipe de 15 experts",
        budget: "Haut de gamme"
      },
      achievements: ["+300% ventes premier mois", "1M+ d'impressions digitales", "Prix de l'innovation"]
    },
    { 
      id: 3,
      category: "Communication", 
      title: "Campagne digitale 360°",
      description: "Stratégie de communication complète pour une marque internationale avec influence marketing.",
      longDescription: "Notre approche holistique a transformé la présence digitale de la marque. En combinant stratégie de contenu, partenariats d'influence et publicité programmatique, nous avons créé un écosystème digital performant qui a boosté la notoriété et les ventes.",
      link: "/communication/campagne-digitale",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Janvier 2024",
        location: "International",
        duration: "4 mois",
        participants: "10 pays ciblés",
        budget: "Significatif"
      },
      achievements: ["+150% d'engagement", "2M+ de reach", "ROI de 450%"]
    },
    { 
      id: 4,
      category: "Football", 
      title: "Tournoi inter-académies",
      description: "Compétition jeunes talents avec 32 équipes participantes et retransmission internationale.",
      longDescription: "Un événement sportif d'envergure qui a mis en lumière les talents émergents du football européen. Nous avons géré l'intégralité de l'organisation : logistique, hébergement, médiatisation et partenariats, avec une retransmission en direct sur 5 plateformes.",
      link: "/football/tournoi-academies",
      images: [
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1577223625818-2c7d0e2ee41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        "https://images.unsplash.com/photo-1579952363873-27f1bddcd8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ],
      details: {
        date: "Avril 2024",
        location: "Stade National",
        duration: "5 jours",
        participants: "32 équipes",
        budget: "Élevé"
      },
      achievements: ["5M de téléspectateurs", "12 jeunes talents repérés", "Sponsoring record"]
    },
    { 
      id: 5,
      category: "Restaurant", 
      title: "Soirée gastronomique",
      description: "Événement culinaire d'exception avec chef étoilé et expérience sensorielle unique.",
      longDescription: "Une expérience gastronomique immersive où chaque sens était sollicité. Nous avons conçu un parcours culinaire en 12 services, accompagné d'une harmonisation vins et arts vivants. Un véritable voyage gustatif qui a ébloui les 100 convives triés sur le volet.",
      link: "/restaurant/soiree-gastronomique",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ],
      details: {
        date: "Mars 2024",
        location: "Château historique",
        duration: "1 soirée",
        participants: "100 convives",
        budget: "Très haut de gamme"
      },
      achievements: ["Notation parfaite 10/10", "100% réservation", "Prix de l'excellence"]
    }
  ];

  const filteredItems = selectedFilter === "Tous"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="odevolv-gallery">
      {/* Hero Section */}
      <section className="odevolv-gallery-hero">
        <div className="odevolv-hero-background">
          <div className="odevolv-hero-gradient"></div>
          <div className="odevolv-hero-pattern"></div>
        </div>
        <div className="odevolv-hero-content">
          <div className="odevolv-hero-text">
            <div className="odevolv-hero-badge">
              <Building size={16} />
              <span>Odevolv Group · Excellence depuis 2010</span>
            </div>
            <h1 className="odevolv-hero-title">
              Galerie d'Excellence <span className="odevolv-hero-underline">Odevolv</span>
            </h1>
            <p className="odevolv-hero-description">
              Découvrez l'étendue de notre savoir-faire à travers des réalisations 
              qui marquent les esprits. Chaque projet est une promesse d'excellence 
              et d'innovation dans nos cinq domaines d'expertise.
            </p>
            <div className="odevolv-hero-stats">
              <div className="odevolv-stat">
                <div className="odevolv-stat-icon">
                  <Target size={20} />
                </div>
                <div className="odevolv-stat-content">
                  <span className="odevolv-stat-number">150+</span>
                  <span className="odevolv-stat-label">Projets d'exception</span>
                </div>
              </div>
              <div className="odevolv-stat">
                <div className="odevolv-stat-icon">
                  <TrendingUp size={20} />
                </div>
                <div className="odevolv-stat-content">
                  <span className="odevolv-stat-number">98%</span>
                  <span className="odevolv-stat-label">Satisfaction client</span>
                </div>
              </div>
              <div className="odevolv-stat">
                <div className="odevolv-stat-icon">
                  <Zap size={20} />
                </div>
                <div className="odevolv-stat-content">
                  <span className="odevolv-stat-number">5</span>
                  <span className="odevolv-stat-label">Filiales expertes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="odevolv-hero-visual">
            <div className="odevolv-visual-card odevolv-card-1">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Événement" />
              <div className="odevolv-card-badge">Événementiel</div>
            </div>
            <div className="odevolv-visual-card odevolv-card-2">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Communication" />
              <div className="odevolv-card-badge">Communication</div>
            </div>
            <div className="odevolv-visual-card odevolv-card-3">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Sport" />
              <div className="odevolv-card-badge">Sport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="odevolv-gallery-filters">
        <div className="odevolv-filters-container">
          <div className="odevolv-filters-header">
            <h2 className="odevolv-filters-title">Nos Domaines d'Expertise</h2>
            <p className="odevolv-filters-subtitle">
              Filtrez par spécialité pour découvrir nos réalisations spécifiques
            </p>
          </div>
          <div className="odevolv-filters-grid">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.name}
                  className={`odevolv-filter-button ${selectedFilter === filter.name ? 'odevolv-filter-active' : ''}`}
                  onClick={() => setSelectedFilter(filter.name)}
                >
                  <div className="odevolv-filter-icon-wrapper">
                    <div className="odevolv-filter-icon">
                      <IconComponent size={22} />
                    </div>
                  </div>
                  <span className="odevolv-filter-text">{filter.name}</span>
                  <div className="odevolv-filter-indicator">
                    <ChevronRight size={18} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="odevolv-gallery-grid-section">
        <div className="odevolv-gallery-container">
          <div className="odevolv-gallery-header">
            <div className="odevolv-gallery-header-content">
              <h2 className="odevolv-gallery-title">
                <span className="odevolv-gallery-title-accent">R</span>éalisations
                <span className="odevolv-gallery-title-underline">Odevolv</span>
              </h2>
              <p className="odevolv-gallery-subtitle">
                {selectedFilter === "Tous" 
                  ? "Découvrez l'ensemble de nos projets marquants" 
                  : `Projets ${selectedFilter} · ${filteredItems.length} réalisation${filteredItems.length > 1 ? 's' : ''}`}
              </p>
            </div>
          </div>
          <div className="odevolv-gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={`${item.title}-${index}`} 
                className="odevolv-gallery-item"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="odevolv-gallery-item-inner">
                  <div className="odevolv-item-image">
                    <img src={item.images[0]} alt={item.title} />
                    <div className="odevolv-item-overlay">
                      <div className="odevolv-overlay-content">
                        <span className="odevolv-item-category">
                          <Award size={14} />
                          {item.category}
                        </span>
                        <h3 className="odevolv-item-title">{item.title}</h3>
                        <p className="odevolv-item-description">{item.description}</p>
                        <button 
                          onClick={() => handleProjectClick(item)} 
                          className="odevolv-item-link"
                        >
                          <span>Découvrir le projet</span>
                          <Eye size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length > 0 && (
            <div className="odevolv-gallery-footer">
              <div className="odevolv-gallery-count">
                <Users size={20} />
                <span>{filteredItems.length} projets présentés</span>
              </div>
              <button className="odevolv-view-all">
                <span>Voir tous les projets</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal pour les projets */}
      {selectedProject && (
        <div className="odevolv-modal-overlay" onClick={closeModal}>
          <div className="odevolv-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header du modal */}
            <div className="odevolv-modal-header">
              <div className="odevolv-modal-header-content">
                <span className="odevolv-modal-category">
                  <Award size={14} />
                  {selectedProject.category}
                </span>
                <h2 className="odevolv-modal-title">{selectedProject.title}</h2>
              </div>
              <button className="odevolv-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            {/* Contenu du modal */}
            <div className="odevolv-modal-body">
              {/* Carrousel d'images */}
              <div className="odevolv-modal-carousel">
                <div className="odevolv-carousel-main">
                  <button className="odevolv-carousel-nav odevolv-carousel-prev" onClick={prevImage}>
                    <ChevronLeft size={24} />
                  </button>
                  
                  <div className="odevolv-carousel-image">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    />
                    <div className="odevolv-carousel-counter">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                  
                  <button className="odevolv-carousel-nav odevolv-carousel-next" onClick={nextImage}>
                    <ChevronRightIcon size={24} />
                  </button>
                </div>
                
                {/* Miniatures */}
                <div className="odevolv-carousel-thumbnails">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      className={`odevolv-carousel-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                    >
                      <img src={image} alt={`Miniature ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Détails du projet */}
              <div className="odevolv-modal-details">
                <div className="odevolv-modal-description">
                  <h3>À propos de ce projet</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="odevolv-modal-info-grid">
                  <div className="odevolv-info-item">
                    <div className="odevolv-info-icon">
                      <Calendar size={18} />
                    </div>
                    <div className="odevolv-info-content">
                      <span className="odevolv-info-label">Date</span>
                      <span className="odevolv-info-value">{selectedProject.details.date}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-info-item">
                    <div className="odevolv-info-icon">
                      <MapPin size={18} />
                    </div>
                    <div className="odevolv-info-content">
                      <span className="odevolv-info-label">Localisation</span>
                      <span className="odevolv-info-value">{selectedProject.details.location}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-info-item">
                    <div className="odevolv-info-icon">
                      <Clock size={18} />
                    </div>
                    <div className="odevolv-info-content">
                      <span className="odevolv-info-label">Durée</span>
                      <span className="odevolv-info-value">{selectedProject.details.duration}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-info-item">
                    <div className="odevolv-info-icon">
                      <UsersIcon size={18} />
                    </div>
                    <div className="odevolv-info-content">
                      <span className="odevolv-info-label">Participants</span>
                      <span className="odevolv-info-value">{selectedProject.details.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Réalisations */}
                <div className="odevolv-modal-achievements">
                  <h3>Nos réalisations</h3>
                  <div className="odevolv-achievements-grid">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="odevolv-achievement">
                        <div className="odevolv-achievement-icon">
                          <Zap size={16} />
                        </div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="odevolv-modal-actions">
                  <button className="odevolv-action-btn odevolv-action-primary">
                    <ExternalLink size={18} />
                    <span>Visiter le projet</span>
                  </button>
                  <button className="odevolv-action-btn odevolv-action-secondary">
                    <Heart size={18} />
                    <span>Sauvegarder</span>
                  </button>
                  <button className="odevolv-action-btn odevolv-action-secondary">
                    <Share2 size={18} />
                    <span>Partager</span>
                  </button>
                  <button className="odevolv-action-btn odevolv-action-secondary">
                    <Download size={18} />
                    <span>Télécharger PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OdevolvGallery;