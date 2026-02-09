import { useState, useEffect } from "react";
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
  ExternalLink,
  Heart,
  Share2,
  Download,
  Camera,
  CheckCircle,
  ChevronDown,
  Maximize2,
  Minimize2,
  Info,
  Bookmark,
  Printer,
  Mail,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  Lock,
  Shield,
  Crown,
  Tag,
  Image as ImageIcon,
  FileText,
  BarChart,
  Smartphone,
  Plane,
  Video,
  ShoppingBag,
  Flag,
  Settings,
  AlertTriangle,
  Filter
} from "lucide-react";
import './galerie.css';

const OdevolvGalleryShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filters = [
    { name: "Tous", icon: Sparkles, count: 15 },
    { name: "Événementiel", icon: Calendar, count: 4 },
    { name: "Cosmétique", icon: Palette, count: 3 },
    { name: "Communication", icon: MessageCircle, count: 3 },
    { name: "Football", icon: Trophy, count: 3 },
    { name: "Restaurant", icon: Utensils, count: 2 }
  ];

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
        budget: "Confidentiel",
        status: "Terminé",
        priority: "Haute"
      },
      achievements: ["+200% engagement client", "100% satisfaction", "Retour sur investissement exceptionnel"],
      tags: ["Événement", "Luxe", "VIP", "France"],
      stats: {
        views: "12500",
        likes: "890",
        shares: "450",
        downloads: "230"
      },
      featured: true
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
        budget: "Haut de gamme",
        status: "En cours",
        priority: "Moyenne"
      },
      achievements: ["+300% ventes premier mois", "1M+ d'impressions digitales", "Prix de l'innovation"],
      tags: ["Beauté", "Mode", "Digital", "France"],
      stats: {
        views: "9800",
        likes: "1200",
        shares: "670",
        downloads: "310"
      },
      featured: true
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
        budget: "Significatif",
        status: "Terminé",
        priority: "Critique"
      },
      achievements: ["+150% d'engagement", "2M+ de reach", "ROI de 450%"],
      tags: ["Digital", "Marketing", "International", "Stratégie"],
      stats: {
        views: "15600",
        likes: "2100",
        shares: "890",
        downloads: "420"
      }
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
        budget: "Élevé",
        status: "Terminé",
        priority: "Haute"
      },
      achievements: ["5M de téléspectateurs", "12 jeunes talents repérés", "Sponsoring record"],
      tags: ["Sport", "Jeunes", "Compétition", "Live"],
      stats: {
        views: "23400",
        likes: "3400",
        shares: "1200",
        downloads: "560"
      }
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
        budget: "Très haut de gamme",
        status: "Terminé",
        priority: "Maximum"
      },
      achievements: ["Notation parfaite 10/10", "100% réservation", "Prix de l'excellence"],
      tags: ["Gastronomie", "Luxe", "Événement", "VIP"],
      stats: {
        views: "8700",
        likes: "980",
        shares: "320",
        downloads: "190"
      }
    }
  ];

  const filteredItems = selectedFilter === "Tous"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsFullscreen(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleDownload = () => {
    alert("Portfolio du projet téléchargé avec succès");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = selectedProject?.title || "Projet Odevolv";
    
    let shareUrl = "";
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'mail':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url
          });
          return;
        }
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (isLoading) {
    return (
      <div className="odevolv-gs-loading">
        <div className="odevolv-gs-loading-spinner">
          <div className="odevolv-gs-spinner-ring"></div>
          <Building size={32} className="odevolv-gs-spinner-icon" />
        </div>
        <p className="odevolv-gs-loading-text">Chargement de l'excellence Odevolv...</p>
      </div>
    );
  }

  return (
    <div className="odevolv-gs-container">
      {/* Hero Section */}
      <section className="odevolv-gs-hero">
        <div className="odevolv-gs-hero-background">
          <div className="odevolv-gs-hero-gradient"></div>
          <div className="odevolv-gs-hero-pattern"></div>
        </div>
        
        <div className="odevolv-gs-hero-content">
          <div className="odevolv-gs-hero-text">
            <div className="odevolv-gs-hero-badge">
              <Building size={18} />
              <span>Odevolv Group · Excellence depuis 2010</span>
            </div>
            
            <h1 className="odevolv-gs-hero-title">
              Galerie d'
              <span className="odevolv-gs-title-accent">Excellence</span>
              <br />
              <span className="odevolv-gs-title-underline">Odevolv</span>
            </h1>
            
            <p className="odevolv-gs-hero-description">
              Découvrez l'art de l'excellence à travers des réalisations 
              qui transcendent les standards. Chaque projet est une symphonie 
              d'innovation et de maîtrise dans nos cinq domaines d'expertise.
            </p>
            
            <div className="odevolv-gs-hero-stats">
              <div className="odevolv-gs-stat">
                <div className="odevolv-gs-stat-icon">
                  <Target size={22} />
                </div>
                <div className="odevolv-gs-stat-content">
                  <span className="odevolv-gs-stat-number">150+</span>
                  <span className="odevolv-gs-stat-label">Projets d'exception</span>
                </div>
              </div>
              
              <div className="odevolv-gs-stat">
                <div className="odevolv-gs-stat-icon">
                  <TrendingUp size={22} />
                </div>
                <div className="odevolv-gs-stat-content">
                  <span className="odevolv-gs-stat-number">98%</span>
                  <span className="odevolv-gs-stat-label">Satisfaction client</span>
                </div>
              </div>
              
              <div className="odevolv-gs-stat">
                <div className="odevolv-gs-stat-icon">
                  <Zap size={22} />
                </div>
                <div className="odevolv-gs-stat-content">
                  <span className="odevolv-gs-stat-number">5</span>
                  <span className="odevolv-gs-stat-label">Filiales expertes</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="odevolv-gs-hero-visual">
            <div className="odevolv-gs-visual-card odevolv-gs-card-1">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Événementiel Odevolv" 
              />
              <div className="odevolv-gs-card-badge">
                <Calendar size={14} />
                Événementiel
              </div>
            </div>
            
            <div className="odevolv-gs-visual-card odevolv-gs-card-2">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Communication Odevolv" 
              />
              <div className="odevolv-gs-card-badge">
                <MessageCircle size={14} />
                Communication
              </div>
            </div>
            
            <div className="odevolv-gs-visual-card odevolv-gs-card-3">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Sport Odevolv" 
              />
              <div className="odevolv-gs-card-badge">
                <Trophy size={14} />
                Sport
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="odevolv-gs-filters">
        <div className="odevolv-gs-filters-container">
          <div className="odevolv-gs-filters-header">
            <h2 className="odevolv-gs-filters-title">Nos Domaines d'Excellence</h2>
            <p className="odevolv-gs-filters-subtitle">
              Sélectionnez une spécialité pour découvrir nos réalisations phares
            </p>
          </div>
          
          <div className="odevolv-gs-filters-grid">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.name}
                  className={`odevolv-gs-filter-button ${selectedFilter === filter.name ? 'odevolv-gs-filter-actives' : ''}`}
                  onClick={() => setSelectedFilter(filter.name)}
                >
                  <div className="odevolv-gs-filter-icon-wrapper">
                    <IconComponent size={24} className="odevolv-gs-filter-icon" />
                    {filter.count && (
                      <span className="odevolv-gs-filter-count">{filter.count}</span>
                    )}
                  </div>
                  <span className="odevolv-gs-filter-text">{filter.name}</span>
                  <div className="odevolv-gs-filter-indicator">
                    <ChevronRight size={18} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section - CORRIGÉ */}
      <section className="odevolv-gs-grid-section">
        <div className="odevolv-gs-container">
          <div className="odevolv-gs-header">
            <div className="odevolv-gs-header-content">
              <h2 className="odevolv-gs-title">
                <span className="odevolv-gs-title-accent">R</span>éalisations 
                <span className="odevolv-gs-title-underlines"> Odevolv</span>
              </h2>
              <p className="odevolv-gs-subtitle">
                {selectedFilter === "Tous" 
                  ? "Collection exclusive de nos projets les plus marquants" 
                  : `Projets ${selectedFilter} · ${filteredItems.length} réalisation${filteredItems.length > 1 ? 's' : ''}`}
              </p>
            </div>
          </div>
          
          <div className="odevolv-gs-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="odevolv-gs-item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="odevolv-gs-item-inner">
                  <div className="odevolv-gs-item-image">
                    <img src={item.images[0]} alt={item.title} loading="lazy" />
                    
                    {item.featured && (
                      <div className="odevolv-gs-item-featured">
                        <Star size={14} fill="currentColor" />
                        Projet phare
                      </div>
                    )}
                    
                    <div className="odevolv-gs-item-overlay">
                      <div className="odevolv-gs-overlay-content">
                        <span className="odevolv-gs-item-category">
                          <Award size={16} />
                          {item.category}
                        </span>
                        <h3 className="odevolv-gs-item-title">{item.title}</h3>
                        <p className="odevolv-gs-item-description">{item.description}</p>
                        <button 
                          onClick={() => handleProjectClick(item)} 
                          className="odevolv-gs-item-link"
                        >
                          <span>Explorer le projet</span>
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length > 0 && (
            <div className="odevolv-gs-footer">
              <div className="odevolv-gs-count">
                <Users size={22} />
                <span>{filteredItems.length} projets présentés</span>
              </div>
              <button className="odevolv-gs-view-all">
                <span>Voir toute la collection</span>
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="odevolv-gs-modal-overlay" onClick={closeModal}>
          <div 
            className={`odevolv-gs-modal-content ${isFullscreen ? 'odevolv-gs-modal-fullscreen' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="odevolv-gs-modal-header">
              <div className="odevolv-gs-modal-header-left">
                <span className="odevolv-gs-modal-category">
                  <Award size={18} />
                  {selectedProject.category}
                  <ChevronDown size={12} className="odevolv-gs-modal-category-chevron" />
                </span>
                <h2 className="odevolv-gs-modal-title">{selectedProject.title}</h2>
                
                <div className="odevolv-gs-modal-badges">
                  <span className="odevolv-gs-modal-badge">
                    <div className={`odevolv-gs-status-indicator odevolv-gs-status-${selectedProject.details.status === "Terminé" ? "completed" : selectedProject.details.status === "En cours" ? "ongoing" : "critical"}`} />
                    {selectedProject.details.status}
                  </span>
                  <span className="odevolv-gs-modal-badge">
                    <Flag size={14} />
                    Priorité: {selectedProject.details.priority}
                  </span>
                </div>
              </div>
              
              <div className="odevolv-gs-modal-controls">
                <div className="odevolv-gs-modal-social-buttons">
                  <button className="odevolv-gs-modal-social-btn" onClick={toggleLike} title="Apprécier">
                    <Heart size={20} fill={isLiked ? "#000000" : "none"} color={isLiked ? "#000000" : "currentColor"} />
                    <span className="odevolv-gs-modal-social-count">{selectedProject.stats.likes}</span>
                  </button>
                  
                  <button className="odevolv-gs-modal-social-btn" onClick={toggleBookmark} title="Archiver">
                    <Bookmark size={20} fill={isBookmarked ? "#000000" : "none"} color={isBookmarked ? "#000000" : "currentColor"} />
                  </button>
                </div>
                
                <div className="odevolv-gs-modal-action-buttons">
                  <button className="odevolv-gs-modal-action-btn" onClick={toggleFullscreen} title={isFullscreen ? "Réduire" : "Immersion"}>
                    {isFullscreen ? <Minimize2 size={22} /> : <Maximize2 size={22} />}
                  </button>
                  
                  <button className="odevolv-gs-modal-action-btn" onClick={handleDownload} title="Télécharger">
                    <Download size={22} />
                  </button>
                </div>
                
                <button className="odevolv-gs-modal-close" onClick={closeModal} title="Fermer">
                  <X size={26} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="odevolv-gs-modal-body">
              {/* Carousel Section */}
              <div className="odevolv-gs-modal-carousel">
                <div className="odevolv-gs-carousel-main">
                  <div className="odevolv-gs-carousel-image">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Vue ${currentImageIndex + 1}`}
                    />
                    
                    <div className="odevolv-gs-carousel-overlay">
                      <button className="odevolv-gs-carousel-overlay-btn" onClick={toggleFullscreen} title="Immersion">
                        <Maximize2 size={22} />
                      </button>
                      <button className="odevolv-gs-carousel-overlay-btn" onClick={handleDownload} title="Télécharger">
                        <Download size={22} />
                      </button>
                    </div>
                    
                    <div className="odevolv-gs-carousel-counter">
                      <Camera size={18} />
                      <span>{currentImageIndex + 1} / {selectedProject.images.length}</span>
                      <span className="odevolv-gs-carousel-size">4K</span>
                    </div>
                  </div>
                  
                  <button className="odevolv-gs-carousel-nav odevolv-gs-carousel-prev" onClick={prevImage} title="Précédent">
                    <ChevronLeft size={32} />
                  </button>
                  
                  <button className="odevolv-gs-carousel-nav odevolv-gs-carousel-next" onClick={nextImage} title="Suivant">
                    <ChevronRightIcon size={32} />
                  </button>
                  
                  <div className="odevolv-gs-carousel-progress">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        className={`odevolv-gs-carousel-progress-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        title={`Vue ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Thumbnails */}
                <div className="odevolv-gs-carousel-thumbnails">
                  <div className="odevolv-gs-carousel-thumbnails-header">
                    <h4>
                      <ImageIcon size={18} />
                      Galerie
                      <span className="odevolv-gs-carousel-thumbnails-count">
                        {selectedProject.images.length} vues
                      </span>
                    </h4>
                    <button className="odevolv-gs-carousel-thumbnails-expand" onClick={toggleFullscreen}>
                      <Maximize2 size={16} />
                    </button>
                  </div>
                  
                  <div className="odevolv-gs-carousel-thumbnails-grid">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        className={`odevolv-gs-carousel-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        title={`Vue ${index + 1}`}
                      >
                        <img src={image} alt={`Miniature ${index + 1}`} />
                        {index === currentImageIndex && (
                          <div className="odevolv-gs-carousel-thumbnail-active">
                            <CheckCircle size={16} />
                          </div>
                        )}
                        <div className="odevolv-gs-carousel-thumbnail-hover">
                          <Eye size={20} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="odevolv-gs-modal-details">
                <div className="odevolv-gs-modal-description">
                  <div className="odevolv-gs-modal-description-header">
                    <h3>
                      <FileText size={22} />
                      Narration du projet
                    </h3>
                    <div className="odevolv-gs-modal-description-actions">
                      <button className="odevolv-gs-modal-description-btn" onClick={toggleBookmark}>
                        <Bookmark size={18} />
                      </button>
                      <button className="odevolv-gs-modal-description-btn" onClick={handlePrint}>
                        <Printer size={18} />
                      </button>
                    </div>
                  </div>
                  <p>{selectedProject.longDescription}</p>
                  
                  <div className="odevolv-gs-modal-tags">
                    <h4>
                      <Tag size={18} />
                      Éléments clés
                    </h4>
                    <div className="odevolv-gs-modal-tags-list">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="odevolv-gs-modal-tag">
                          {tag === "Luxe" && <Crown size={14} />}
                          {tag === "VIP" && <Star size={14} />}
                          {tag === "France" && <Globe size={14} />}
                          {tag === "Sport" && <Trophy size={14} />}
                          {tag === "Digital" && <Smartphone size={14} />}
                          {tag === "Gastronomie" && <Utensils size={14} />}
                          {tag === "Événement" && <Calendar size={14} />}
                          {tag === "Marketing" && <BarChart size={14} />}
                          {tag === "International" && <Plane size={14} />}
                          {tag === "Stratégie" && <Target size={14} />}
                          {tag === "Live" && <Video size={14} />}
                          {tag === "Beauté" && <Palette size={14} />}
                          {tag === "Mode" && <ShoppingBag size={14} />}
                          {tag === "Compétition" && <Flag size={14} />}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="odevolv-gs-modal-info-grid">
                  <div className="odevolv-gs-info-item">
                    <div className="odevolv-gs-info-icon">
                      <Calendar size={22} />
                    </div>
                    <div className="odevolv-gs-info-content">
                      <span className="odevolv-gs-info-label">Date</span>
                      <span className="odevolv-gs-info-value">{selectedProject.details.date}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-gs-info-item">
                    <div className="odevolv-gs-info-icon">
                      <MapPin size={22} />
                    </div>
                    <div className="odevolv-gs-info-content">
                      <span className="odevolv-gs-info-label">Localisation</span>
                      <span className="odevolv-gs-info-value">{selectedProject.details.location}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-gs-info-item">
                    <div className="odevolv-gs-info-icon">
                      <Clock size={22} />
                    </div>
                    <div className="odevolv-gs-info-content">
                      <span className="odevolv-gs-info-label">Durée</span>
                      <span className="odevolv-gs-info-value">{selectedProject.details.duration}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-gs-info-item">
                    <div className="odevolv-gs-info-icon">
                      <UsersIcon size={22} />
                    </div>
                    <div className="odevolv-gs-info-content">
                      <span className="odevolv-gs-info-label">Participants</span>
                      <span className="odevolv-gs-info-value">{selectedProject.details.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="odevolv-gs-modal-achievements">
                  <div className="odevolv-gs-modal-achievements-header">
                    <h3>
                      <CheckCircle size={22} />
                      Réalisations majeures
                    </h3>
                    <div className="odevolv-gs-modal-achievements-stat">
                      {selectedProject.achievements.length} succès
                    </div>
                  </div>
                  <div className="odevolv-gs-achievements-grid">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="odevolv-gs-achievement">
                        <div className="odevolv-gs-achievement-icon">
                          {index === 0 && <Zap size={18} />}
                          {index === 1 && <CheckCircle size={18} />}
                          {index === 2 && <Star size={18} />}
                          {index >= 3 && <CheckCircle size={18} />}
                        </div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="odevolv-gs-modal-stats">
                  <h3>
                    <BarChart size={22} />
                    Métriques d'impact
                  </h3>
                  <div className="odevolv-gs-modal-stats-grid">
                    <div className="odevolv-gs-modal-stat">
                      <div className="odevolv-gs-modal-stat-icon">
                        <Eye size={20} />
                      </div>
                      <div className="odevolv-gs-modal-stat-content">
                        <span className="odevolv-gs-modal-stat-value">{selectedProject.stats.views}</span>
                        <span className="odevolv-gs-modal-stat-label">Vues</span>
                      </div>
                    </div>
                    
                    <div className="odevolv-gs-modal-stat">
                      <div className="odevolv-gs-modal-stat-icon">
                        <Heart size={20} />
                      </div>
                      <div className="odevolv-gs-modal-stat-content">
                        <span className="odevolv-gs-modal-stat-value">{selectedProject.stats.likes}</span>
                        <span className="odevolv-gs-modal-stat-label">Appréciations</span>
                      </div>
                    </div>
                    
                    <div className="odevolv-gs-modal-stat">
                      <div className="odevolv-gs-modal-stat-icon">
                        <Share2 size={20} />
                      </div>
                      <div className="odevolv-gs-modal-stat-content">
                        <span className="odevolv-gs-modal-stat-value">{selectedProject.stats.shares}</span>
                        <span className="odevolv-gs-modal-stat-label">Partages</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="odevolv-gs-modal-actions">
                  <div className="odevolv-gs-modal-actions-header">
                    <h3>
                      <Settings size={22} />
                      Actions disponibles
                    </h3>
                    <button className="odevolv-gs-modal-actions-quick-btn" onClick={() => window.open(selectedProject.link, '_blank')}>
                      <Settings size={20} />
                    </button>
                  </div>
                  
                  <div className="odevolv-gs-modal-actions-grid">
                    <button className="odevolv-gs-action-btn odevolv-gs-action-primary" onClick={() => window.open(selectedProject.link, '_blank')}>
                      <ExternalLink size={22} />
                      <span>Visiter le projet</span>
                      <ChevronRight size={18} className="odevolv-gs-action-btn-arrow" />
                    </button>
                    
                    <button className="odevolv-gs-action-btn odevolv-gs-action-secondary" onClick={() => handleShare('mail')}>
                      <Mail size={22} />
                      <span>Partager par email</span>
                    </button>
                    
                    <button className="odevolv-gs-action-btn odevolv-gs-action-secondary" onClick={handlePrint}>
                      <Printer size={22} />
                      <span>Imprimer le portfolio</span>
                    </button>
                    
                    <button className="odevolv-gs-action-btn odevolv-gs-action-secondary" onClick={() => handleShare('linkedin')}>
                      <Linkedin size={22} />
                      <span>Partager sur LinkedIn</span>
                    </button>
                  </div>
                  
                  {/* Social Share */}
                  <div className="odevolv-gs-modal-social-share">
                    <h4>
                      <Share2 size={18} />
                      Partager sur les réseaux
                    </h4>
                    <div className="odevolv-gs-modal-social-share-buttons">
                      <button className="odevolv-gs-modal-social-share-btn odevolv-gs-modal-social-fb" onClick={() => handleShare('facebook')} title="Facebook">
                        <Facebook size={20} />
                      </button>
                      <button className="odevolv-gs-modal-social-share-btn odevolv-gs-modal-social-tw" onClick={() => handleShare('twitter')} title="Twitter">
                        <Twitter size={20} />
                      </button>
                      <button className="odevolv-gs-modal-social-share-btn odevolv-gs-modal-social-in" onClick={() => handleShare('linkedin')} title="LinkedIn">
                        <Linkedin size={20} />
                      </button>
                      <button className="odevolv-gs-modal-social-share-btn odevolv-gs-modal-social-msg" onClick={() => handleShare('mail')} title="Email">
                        <Mail size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="odevolv-gs-modal-footer">
              <div className="odevolv-gs-modal-footer-left">
                <span className="odevolv-gs-modal-footer-info">
                  <Shield size={16} />
                  Projet sécurisé
                </span>
                <span className="odevolv-gs-modal-footer-security">
                  <Lock size={16} />
                  ID: {selectedProject.id}
                </span>
              </div>
              
              <div className="odevolv-gs-modal-footer-right">
                <button className="odevolv-gs-modal-footer-btn" title="Support">
                  <Info size={18} />
                </button>
                <button className="odevolv-gs-modal-footer-btn" title="Feedback">
                  <MessageSquare size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OdevolvGalleryShowcase;