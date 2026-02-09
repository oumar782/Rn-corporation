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
  ExternalLink,
  Heart,
  Share2,
  Download,
  Gem,
  Crown,
  Globe,
  Filter,
  Camera,
  Sparkle,
  CheckCircle,
  Medal
} from "lucide-react";
import './galerie.css';

const OdevolvGalleryLuxe = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    { name: "Tous", icon: Sparkles, color: "#D4AF37" },
    { name: "Événementiel", icon: Calendar, color: "#C9A227" },
    { name: "Cosmétique", icon: Palette, color: "#B8971E" },
    { name: "Communication", icon: MessageCircle, color: "#A88515" },
    { name: "Football", icon: Trophy, color: "#D4AF37" },
    { name: "Restaurant", icon: Utensils, color: "#C9A227" },
    { name: "Mode Luxe", icon: Gem, color: "#B8971E" },
    { name: "Immobilier", icon: Building, color: "#A88515" }
  ];

  const galleryItems = [
    { 
      id: 1,
      category: "Événementiel", 
      title: "Gala d'Exception 2024",
      description: "Organisation d'un gala prestigieux pour 500 invités VIP avec scénographie immersive.",
      longDescription: "Pour ce gala d'exception, notre équipe a orchestré chaque détail avec une précision millimétrée : scénographie immersive signée par un artiste renommé, gastronomie étoilée préparée par un chef 3 étoiles Michelin, et spectacle live exclusif. Un événement qui a redéfini les standards du luxe événementiel.",
      link: "/evenementiel/gala-2024",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1492684223066-e9b4ff9632f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "15 Mars 2024",
        location: "Paris, Palais Garnier",
        duration: "8 mois de préparation",
        participants: "500 invités VIP",
        budget: "Prestige"
      },
      achievements: ["+250% engagement client", "100% satisfaction", "Retour sur investissement ×5", "Couverture médiatique internationale"],
      highlight: true
    },
    { 
      id: 2,
      category: "Cosmétique", 
      title: "Collection Or Impérial",
      description: "Lancement exclusif d'une collection cosmétique avec or 24 carats.",
      longDescription: "Création d'une ligne cosmétique ultraluxe intégrant de l'or 24 carats et des ingrédients rares. Chaque flacon est une œuvre d'art soufflée à la main et sertie de cristaux Swarovski. Une expérience sensorielle qui transcende la beauté.",
      link: "/cosmetique/or-imperial",
      images: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2087&q=80",
        "https://images.unsplash.com/photo-1596703923538-b6d4bb0a44ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1556228578-9c360e1d458b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Février 2024",
        location: "Monte-Carlo, Hôtel de Paris",
        duration: "14 mois de développement",
        participants: "Équipe de 25 experts",
        budget: "Ultra Luxe"
      },
      achievements: ["+400% ventes premier mois", "2M+ d'impressions", "Prix de l'Innovation Luxe", "Édition limitée épuisée"],
      highlight: true
    },
    { 
      id: 3,
      category: "Communication", 
      title: "Stratégie Royale",
      description: "Campagne de communication pour une maison royale européenne.",
      longDescription: "Développement d'une stratégie de communication discrète mais impactante pour une maison royale. Gestion de l'image, relations presse internationales et création d'événements privés exclusifs. Une approche raffinée qui a renforcé le prestige de la monarchie.",
      link: "/communication/royale",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Janvier 2024",
        location: "Europe - International",
        duration: "12 mois",
        participants: "15 pays ciblés",
        budget: "Confidentiel"
      },
      achievements: ["Image renforcée +300%", "Couverture média premium", "Prix Excellence", "Relations diplomatiques"],
      highlight: false
    },
    { 
      id: 4,
      category: "Football", 
      title: "Académie d'Élite",
      description: "Création d'une académie de football pour jeunes talents d'exception.",
      longDescription: "Conception et mise en œuvre d'une académie de football ultramoderne dédiée aux jeunes prodiges. Infrastructure de pointe, encadrement par d'anciens champions et programme éducatif d'excellence. Un incubateur de futurs légendes du ballon rond.",
      link: "/football/academie-elite",
      images: [
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1577223625818-2c7d0e2ee41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        "https://images.unsplash.com/photo-1579952363873-27f1bddcd8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ],
      details: {
        date: "Septembre 2024",
        location: "Madrid, Espagne",
        duration: "18 mois",
        participants: "50 jeunes talents",
        budget: "Investissement majeur"
      },
      achievements: ["5 talents repérés par clubs pro", "Académie certifiée FIFA", "Sponsoring premium", "Référence européenne"],
      highlight: true
    },
    { 
      id: 5,
      category: "Restaurant", 
      title: "Table des Rois",
      description: "Ouverture d'un restaurant gastronomique dans un château historique.",
      longDescription: "Transformation d'un château du XVIIIe siècle en temple de la gastronomie. Architecture préservée, mobilier d'époque restauré et cuisine signée par un chef doublement étoilé. Une expérience historique et gustative unique au monde.",
      link: "/restaurant/table-des-rois",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ],
      details: {
        date: "Juin 2024",
        location: "Loire Valley, France",
        duration: "24 mois de restauration",
        participants: "40 couverts exclusifs",
        budget: "Patrimoine & Luxe"
      },
      achievements: ["2 étoiles Michelin", "Liste d'attente 1 an", "Prix du Patrimoine", "Clientèle internationale"],
      highlight: true
    },
    { 
      id: 6,
      category: "Mode Luxe", 
      title: "Haute Couture Diamant",
      description: "Collection capsule sertie de diamants et de soie rare.",
      longDescription: "Création d'une collection de haute couture où chaque pièce est une œuvre unique. Robes serties de diamants certifiés, soie de Lyon rare et broderies réalisées par les derniers artisans maîtres. Un hommage à l'artisanat d'excellence français.",
      link: "/mode/haute-couture-diamant",
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Mars 2024",
        location: "Paris, Avenue Montaigne",
        duration: "9 mois de création",
        participants: "12 pièces uniques",
        budget: "Exceptionnel"
      },
      achievements: ["Prix de la Création", "Ventes record", "Exposition au Louvre", "Clientèle royale"],
      highlight: true
    },
    { 
      id: 7,
      category: "Immobilier", 
      title: "Résidence Céleste",
      description: "Conceptualisation d'une résidence ultra-luxe avec vue panoramique.",
      longDescription: "Architecture visionnaire pour une résidence qui défie les limites du luxe. Chaque appartement est une penthouse avec piscine à débordement, terrasse privée et service de majordome 24h/24. Une adresse qui devient légendaire.",
      link: "/immobilier/residence-celeste",
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Novembre 2024",
        location: "Dubai, Palm Jumeirah",
        duration: "36 mois",
        participants: "25 appartements",
        budget: "Record du marché"
      },
      achievements: ["100% vendu en pré-vente", "Prix au m² record", "Architecture primée", "Référence mondiale"],
      highlight: false
    },
    { 
      id: 8,
      category: "Événementiel", 
      title: "Mariage Impérial",
      description: "Organisation d'un mariage princier avec protocole strict.",
      longDescription: "Coordination d'une union historique entre deux grandes familles. Logistique complexe, sécurité maximale, décoration florale spectaculaire et protocole d'État. Un événement qui a fait la une des médias internationaux.",
      link: "/evenementiel/mariage-imperial",
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Mai 2024",
        location: "Vienna, Hofburg Palace",
        duration: "16 mois",
        participants: "800 invités triés",
        budget: "Historique"
      },
      achievements: ["Sécurité parfaite", "Couverture mondiale", "Protocole impeccable", "Référence absolue"],
      highlight: true
    }
  ];

  const filteredItems = selectedFilter === "Tous"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.classList.add('odevolv-luxe-modal-open');
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('odevolv-luxe-modal-open');
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
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
    <div className="odevolv-luxe">
      {/* Hero Section */}
      <section className="odevolv-luxe-hero">
        <div className="odevolv-luxe-hero-background">
          <div className="odevolv-luxe-hero-gold-gradient"></div>
          <div className="odevolv-luxe-hero-pattern"></div>
          <div className="odevolv-luxe-hero-glitter"></div>
        </div>
        
        <div className="odevolv-luxe-hero-content">
          <div className="odevolv-luxe-hero-text">
            <div className="odevolv-luxe-hero-badge">
              <Crown size={20} className="odevolv-luxe-gold-icon" />
              <span className="odevolv-luxe-gold-text">Odevolv Group · Excellence depuis 2010</span>
              <div className="odevolv-luxe-badge-sparkle"></div>
            </div>
            
            <h1 className="odevolv-luxe-hero-title">
              <span className="odevolv-luxe-hero-title-glow">Galerie d'Excellence</span>
              <span className="odevolv-luxe-hero-title-main">
                <span className="odevolv-luxe-gold-glow">Odevolv</span> <span className="odevolv-luxe-hero-title-luxe">Luxe</span>
              </span>
            </h1>
            
            <p className="odevolv-luxe-hero-description">
              Plongez dans l'univers du luxe absolu à travers nos réalisations 
              <span className="odevolv-luxe-gold-highlight"> d'exception</span>. 
              Chaque projet est une symphonie de <span className="odevolv-luxe-gold-highlight">perfection</span>, 
              d'<span className="odevolv-luxe-gold-highlight">innovation</span> et d'<span className="odevolv-luxe-gold-highlight">élégance</span>.
            </p>
            
            <div className="odevolv-luxe-hero-stats">
              <div className="odevolv-luxe-stat odevolv-luxe-stat-gold">
                <div className="odevolv-luxe-stat-icon">
                  <Target size={24} />
                </div>
                <div className="odevolv-luxe-stat-content">
                  <span className="odevolv-luxe-stat-number">200+</span>
                  <span className="odevolv-luxe-stat-label">Projets d'exception</span>
                </div>
                <div className="odevolv-luxe-stat-sparkle"></div>
              </div>
              
              <div className="odevolv-luxe-stat odevolv-luxe-stat-silver">
                <div className="odevolv-luxe-stat-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="odevolv-luxe-stat-content">
                  <span className="odevolv-luxe-stat-number">99.8%</span>
                  <span className="odevolv-luxe-stat-label">Satisfaction client</span>
                </div>
              </div>
              
              <div className="odevolv-luxe-stat odevolv-luxe-stat-bronze">
                <div className="odevolv-luxe-stat-icon">
                  <Gem size={24} />
                </div>
                <div className="odevolv-luxe-stat-content">
                  <span className="odevolv-luxe-stat-number">8</span>
                  <span className="odevolv-luxe-stat-label">Domaines experts</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="odevolv-luxe-hero-visual">
            <div className="odevolv-luxe-visual-card odevolv-luxe-card-1">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Événement" />
              <div className="odevolv-luxe-card-badge">
                <Sparkle size={12} />
                Événementiel
              </div>
              <div className="odevolv-luxe-card-glow"></div>
            </div>
            
            <div className="odevolv-luxe-visual-card odevolv-luxe-card-2">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Communication" />
              <div className="odevolv-luxe-card-badge">
                <Sparkle size={12} />
                Communication
              </div>
              <div className="odevolv-luxe-card-glow"></div>
            </div>
            
            <div className="odevolv-luxe-visual-card odevolv-luxe-card-3">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Sport" />
              <div className="odevolv-luxe-card-badge">
                <Sparkle size={12} />
                Football
              </div>
              <div className="odevolv-luxe-card-glow"></div>
            </div>
            
            <div className="odevolv-luxe-visual-card odevolv-luxe-card-4">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Mode" />
              <div className="odevolv-luxe-card-badge">
                <Sparkle size={12} />
                Mode Luxe
              </div>
              <div className="odevolv-luxe-card-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="odevolv-luxe-filters">
        <div className="odevolv-luxe-filters-container">
          <div className="odevolv-luxe-filters-header">
            <div className="odevolv-luxe-filters-title-wrapper">
              <Filter size={28} className="odevolv-luxe-filter-title-icon" />
              <h2 className="odevolv-luxe-filters-title">
                Domaines d'Excellence
                <span className="odevolv-luxe-filters-subtitle-glow">Nos 8 spécialités</span>
              </h2>
            </div>
            <p className="odevolv-luxe-filters-subtitle">
              Filtrez par domaine pour découvrir nos <span className="odevolv-luxe-gold-text">réalisations d'exception</span>
            </p>
          </div>
          
          <div className="odevolv-luxe-filters-grid">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.name}
                  className={`odevolv-luxe-filter-button ${selectedFilter === filter.name ? 'odevolv-luxe-filter-active' : ''}`}
                  onClick={() => setSelectedFilter(filter.name)}
                  style={{ '--filter-gold': filter.color }}
                >
                  <div className="odevolv-luxe-filter-icon-wrapper">
                    <div className="odevolv-luxe-filter-icon">
                      <IconComponent size={26} className="odevolv-luxe-filter-icon-svg" />
                      <div className="odevolv-luxe-filter-icon-glow"></div>
                    </div>
                  </div>
                  <span className="odevolv-luxe-filter-text">{filter.name}</span>
                  <div className="odevolv-luxe-filter-indicator">
                    <ChevronRight size={22} />
                  </div>
                  <div className="odevolv-luxe-filter-gold-border"></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="odevolv-luxe-gallery-section">
        <div className="odevolv-luxe-gallery-container">
          <div className="odevolv-luxe-gallery-header">
            <div className="odevolv-luxe-gallery-header-content">
              <div className="odevolv-luxe-gallery-title-wrapper">
                <Medal size={32} className="odevolv-luxe-gallery-title-icon" />
                <h2 className="odevolv-luxe-gallery-title">
                  <span className="odevolv-luxe-gallery-title-number">8</span>
                  <span className="odevolv-luxe-gallery-title-text">
                    Réalisations
                    <span className="odevolv-luxe-gallery-title-luxe">Luxe</span>
                  </span>
                </h2>
              </div>
              <p className="odevolv-luxe-gallery-subtitle">
                {selectedFilter === "Tous" 
                  ? "Découvrez nos 8 projets d'exception à travers le monde" 
                  : `Projets ${selectedFilter} · ${filteredItems.length} réalisation${filteredItems.length > 1 ? 's' : ''} exclusive${filteredItems.length > 1 ? 's' : ''}`}
              </p>
            </div>
          </div>
          
          <div className="odevolv-luxe-gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={`${item.title}-${index}`} 
                className={`odevolv-luxe-gallery-item ${item.highlight ? 'odevolv-luxe-gallery-item-highlight' : ''}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="odevolv-luxe-gallery-item-inner">
                  {item.highlight && (
                    <div className="odevolv-luxe-item-highlight-badge">
                      <Star size={14} />
                      <span>Excellence</span>
                    </div>
                  )}
                  
                  <div className="odevolv-luxe-item-image">
                    <img src={item.images[0]} alt={item.title} />
                    <div className="odevolv-luxe-item-gold-overlay"></div>
                    <div className="odevolv-luxe-item-overlay">
                      <div className="odevolv-luxe-overlay-content">
                        <span className="odevolv-luxe-item-category">
                          <Award size={16} className="odevolv-luxe-gold-icon" />
                          {item.category}
                          <div className="odevolv-luxe-item-category-glow"></div>
                        </span>
                        <h3 className="odevolv-luxe-item-title">{item.title}</h3>
                        <p className="odevolv-luxe-item-description">{item.description}</p>
                        <button 
                          onClick={() => handleProjectClick(item)} 
                          className="odevolv-luxe-item-link"
                        >
                          <span>Découvrir l'excellence</span>
                          <Eye size={18} />
                          <div className="odevolv-luxe-item-link-glow"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length > 0 && (
            <div className="odevolv-luxe-gallery-footer">
              <div className="odevolv-luxe-gallery-count">
                <Users size={24} className="odevolv-luxe-gold-icon" />
                <span>{filteredItems.length} projets d'exception présentés</span>
              </div>
              <button className="odevolv-luxe-view-all">
                <span>Voir toutes les réalisations</span>
                <ArrowRight size={20} />
                <div className="odevolv-luxe-view-all-glow"></div>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal Luxe */}
      {selectedProject && (
        <div className="odevolv-luxe-modal-overlay" onClick={closeModal}>
          <div className="odevolv-luxe-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="odevolv-luxe-modal-gold-border"></div>
            
            {/* Header du modal */}
            <div className="odevolv-luxe-modal-header">
              <div className="odevolv-luxe-modal-header-glow"></div>
              <div className="odevolv-luxe-modal-header-content">
                <span className="odevolv-luxe-modal-category">
                  <Award size={18} className="odevolv-luxe-gold-icon" />
                  {selectedProject.category}
                  <div className="odevolv-luxe-modal-category-sparkle"></div>
                </span>
                <h2 className="odevolv-luxe-modal-title">
                  {selectedProject.title}
                  {selectedProject.highlight && (
                    <span className="odevolv-luxe-modal-highlight-badge">
                      <Crown size={16} />
                      <span>Projet d'Excellence</span>
                    </span>
                  )}
                </h2>
              </div>
              
              <button 
                className="odevolv-luxe-modal-close" 
                onClick={closeModal}
                aria-label="Fermer"
              >
                <X size={30} className="odevolv-luxe-modal-close-icon" />
                <div className="odevolv-luxe-modal-close-glow"></div>
              </button>
            </div>

            {/* Contenu du modal */}
            <div className="odevolv-luxe-modal-body">
              {/* Carrousel */}
              <div className="odevolv-luxe-modal-carousel">
                <div className="odevolv-luxe-carousel-main">
                  <button 
                    className="odevolv-luxe-carousel-nav odevolv-luxe-carousel-prev" 
                    onClick={prevImage}
                    aria-label="Précédent"
                  >
                    <ChevronLeft size={38} className="odevolv-luxe-carousel-nav-icon" />
                    <div className="odevolv-luxe-carousel-nav-glow"></div>
                  </button>
                  
                  <div className="odevolv-luxe-carousel-image">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    />
                    <div className="odevolv-luxe-carousel-counter">
                      <Camera size={16} />
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                    <div className="odevolv-luxe-carousel-gold-overlay"></div>
                  </div>
                  
                  <button 
                    className="odevolv-luxe-carousel-nav odevolv-luxe-carousel-next" 
                    onClick={nextImage}
                    aria-label="Suivant"
                  >
                    <ChevronRightIcon size={38} className="odevolv-luxe-carousel-nav-icon" />
                    <div className="odevolv-luxe-carousel-nav-glow"></div>
                  </button>
                </div>
                
                {/* Miniatures */}
                <div className="odevolv-luxe-carousel-thumbnails">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      className={`odevolv-luxe-carousel-thumbnail ${index === currentImageIndex ? 'odevolv-luxe-thumbnail-active' : ''}`}
                      onClick={() => goToImage(index)}
                      aria-label={`Voir l'image ${index + 1}`}
                    >
                      <img src={image} alt={`Miniature ${index + 1}`} />
                      {index === currentImageIndex && (
                        <div className="odevolv-luxe-thumbnail-gold-border"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Détails */}
              <div className="odevolv-luxe-modal-details">
                <div className="odevolv-luxe-modal-description">
                  <h3>
                    <span className="odevolv-luxe-gold-text">À propos</span> de ce projet
                  </h3>
                  <p className="odevolv-luxe-modal-description-text">{selectedProject.longDescription}</p>
                </div>

                <div className="odevolv-luxe-modal-info-grid">
                  <div className="odevolv-luxe-info-item">
                    <div className="odevolv-luxe-info-icon odevolv-luxe-info-icon-gold">
                      <Calendar size={22} />
                    </div>
                    <div className="odevolv-luxe-info-content">
                      <span className="odevolv-luxe-info-label">Date</span>
                      <span className="odevolv-luxe-info-value">{selectedProject.details.date}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-luxe-info-item">
                    <div className="odevolv-luxe-info-icon odevolv-luxe-info-icon-gold">
                      <MapPin size={22} />
                    </div>
                    <div className="odevolv-luxe-info-content">
                      <span className="odevolv-luxe-info-label">Localisation</span>
                      <span className="odevolv-luxe-info-value">{selectedProject.details.location}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-luxe-info-item">
                    <div className="odevolv-luxe-info-icon odevolv-luxe-info-icon-gold">
                      <Clock size={22} />
                    </div>
                    <div className="odevolv-luxe-info-content">
                      <span className="odevolv-luxe-info-label">Durée</span>
                      <span className="odevolv-luxe-info-value">{selectedProject.details.duration}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-luxe-info-item">
                    <div className="odevolv-luxe-info-icon odevolv-luxe-info-icon-gold">
                      <UsersIcon size={22} />
                    </div>
                    <div className="odevolv-luxe-info-content">
                      <span className="odevolv-luxe-info-label">Participants</span>
                      <span className="odevolv-luxe-info-value">{selectedProject.details.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Réalisations */}
                <div className="odevolv-luxe-modal-achievements">
                  <h3>
                    <span className="odevolv-luxe-gold-text">Nos</span> réalisations
                  </h3>
                  <div className="odevolv-luxe-achievements-grid">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="odevolv-luxe-achievement">
                        <div className="odevolv-luxe-achievement-icon">
                          <CheckCircle size={18} />
                          <div className="odevolv-luxe-achievement-glow"></div>
                        </div>
                        <span className="odevolv-luxe-achievement-text">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="odevolv-luxe-modal-actions">
                  <button 
                    className="odevolv-luxe-action-btn odevolv-luxe-action-primary"
                    aria-label="Visiter le projet"
                  >
                    <ExternalLink size={24} />
                    <span>Visiter le projet</span>
                    <div className="odevolv-luxe-action-btn-glow"></div>
                  </button>
                  
                  <button 
                    className="odevolv-luxe-action-btn odevolv-luxe-action-secondary"
                    aria-label="Sauvegarder"
                  >
                    <Heart size={24} />
                    <span>Sauvegarder</span>
                  </button>
                  
                  <button 
                    className="odevolv-luxe-action-btn odevolv-luxe-action-secondary"
                    aria-label="Partager"
                  >
                    <Share2 size={24} />
                    <span>Partager</span>
                  </button>
                  
                  <button 
                    className="odevolv-luxe-action-btn odevolv-luxe-action-secondary"
                    aria-label="Télécharger"
                  >
                    <Download size={24} />
                    <span>Télécharger</span>
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

export default OdevolvGalleryLuxe;