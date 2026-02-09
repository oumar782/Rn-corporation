import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Palette, 
  Megaphone, 
  Trophy, 
  Car, 
  UtensilsCrossed,
  Award,
  Globe,
  Target,
  Zap,
  Shield,
  Clock,
  Sparkles,
  Users,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  ArrowUp,
  ExternalLink,
  TrendingUp,
  Heart,
  CheckCircle,
  Building2,
  Lightbulb,
  Globe2,
  User,
  Briefcase,
  ChartLine,
  Handshake,
  Target as TargetIcon,
  Crown,Flag,
  Diamond
} from 'lucide-react';
import './home.css';

/**
 * RN Corporation - Édition Ultra Premium
 * Design Élégant avec Animations Cinématiques et Effets Visuels Avancés
 * @version 4.0.0 - Production Ultra
 */

const RNCorporationUltra = () => {
  // ========================================
  // ÉTATS AVANCÉS
  // ========================================
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [statsCounted, setStatsCounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // ========================================
  // RÉFÉRENCES OPTIMISÉES
  // ========================================
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    leadership: useRef(null),
    whyUs: useRef(null),
    subsidiaries: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null)
  };

  // ========================================
  // EFFETS CINÉMATIQUES
  // ========================================
  useEffect(() => {
    const initializePage = () => {
      setIsPageLoaded(true);
      const timer = setTimeout(() => {
        setStatsCounted(true);
      }, 800);
      return timer;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setHeaderScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 800);
      
      const sections = Object.entries(sectionRefs);
      sections.forEach(([key, ref]) => {
        if (ref.current) {
          const { top, height } = ref.current.getBoundingClientRect();
          const offset = 120;
          
          if (top <= offset && top + height > offset) {
            setActiveSection(key);
          }
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const loadTimer = initializePage();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // ========================================
  // HANDLERS OPTIMISÉS
  // ========================================
  const navigateToSection = (sectionId) => {
    const element = sectionRefs[sectionId]?.current;
    if (element) {
      const headerHeight = 90;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      if (isMobileMenuActive) {
        setIsMobileMenuActive(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // ========================================
  // DONNÉES STATIQUES PREMIUM
  // ========================================
  const navigationItems = [
    { id: 'home', label: 'Accueil', icon: Diamond },
    { id: 'about', label: 'À propos', icon: Building2 },
    { id: 'leadership', label: 'Leadership', icon: Crown },
    { id: 'whyUs', label: 'Pourquoi nous', icon: Award },
    { id: 'subsidiaries', label: 'Filiales', icon: Briefcase },
    { id: 'testimonials', label: 'Témoignages', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Handshake }
  ];

  const heroStats = [
    { 
      value: 6, 
      label: 'Filiales Stratégiques', 
      icon: Building2,
      suffix: '',
      color: '#d4af37',
      description: 'Domaines d\'expertise complémentaires'
    },
    { 
      value: 1500, 
      label: 'Clients Prestigieux', 
      icon: Users,
      suffix: '+',
      color: '#1a73e8',
      description: 'Entreprises et particuliers'
    },
    { 
      value: 15, 
      label: 'Années d\'Innovation', 
      icon: Trophy,
      suffix: '+',
      color: '#34a853',
      description: 'Expérience cumulée'
    },
    { 
      value: 98, 
      label: 'Satisfaction Clients', 
      icon: Star,
      suffix: '%',
      color: '#ea4335',
      description: 'Taux de fidélisation'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Dr. N\'Guessan Koffi',
      position: 'Président Directeur Général',
      bio: 'Visionnaire avec 20+ ans d\'expérience dans le développement stratégique en Afrique de l\'Ouest.',
      expertise: ['Stratégie', 'Innovation', 'Leadership'],
      avatarColor: '#d4af37'
    },
    {
      name: 'Mme. Aminata Diallo',
      position: 'Directrice des Opérations',
      bio: 'Expert en optimisation opérationnelle et gestion de projets complexes à grande échelle.',
      expertise: ['Opérations', 'Logistique', 'Gestion'],
      avatarColor: '#1a73e8'
    },
    {
      name: 'M. Jean-Baptiste Laurent',
      position: 'Directeur Financier',
      bio: 'Spécialiste en finance internationale et stratégies d\'investissement.',
      expertise: ['Finance', 'Investissement', 'Risques'],
      avatarColor: '#34a853'
    },
    {
      name: 'Dr. Fatoumata Camara',
      position: 'Directrice R&D',
      bio: 'Docteur en innovation technologique avec plusieurs brevets internationaux.',
      expertise: ['Innovation', 'R&D', 'Technologie'],
      avatarColor: '#9334e9'
    }
  ];

  const advantages = [
    {
      icon: Crown,
      title: 'Excellence Royale',
      description: 'Standards de qualité dignes des plus grandes entreprises internationales.',
      color: '#d4af37',
      gradient: 'linear-gradient(135deg, #d4af37 0%, #f7e8b2 50%, #d4af37 100%)'
    },
    {
      icon: Globe2,
      title: 'Vision Panafricaine',
      description: 'Stratégie d\'expansion intelligente à travers 15+ pays d\'Afrique de l\'Ouest.',
      color: '#1a73e8',
      gradient: 'linear-gradient(135deg, #1a73e8 0%, #64b5f6 50%, #1a73e8 100%)'
    },
    {
      icon: TargetIcon,
      title: 'Précision Stratégique',
      description: 'Approche ciblée avec des résultats mesurables et garantis.',
      color: '#34a853',
      gradient: 'linear-gradient(135deg, #34a853 0%, #81c784 50%, #34a853 100%)'
    },
    {
      icon: Zap,
      title: 'Innovation Dynamique',
      description: 'Laboratoire R&D avec 5% du chiffre d\'affaires dédié à l\'innovation.',
      color: '#fbbc04',
      gradient: 'linear-gradient(135deg, #fbbc04 0%, #ffd54f 50%, #fbbc04 100%)'
    },
    {
      icon: Shield,
      title: 'Sécurité Totale',
      description: 'Protocoles de sécurité certifiés ISO 27001 et RGPD international.',
      color: '#ea4335',
      gradient: 'linear-gradient(135deg, #ea4335 0%, #ff8a80 50%, #ea4335 100%)'
    },
    {
      icon: ChartLine,
      title: 'Croissance Durable',
      description: 'Croissance annuelle moyenne de 25% depuis 5 ans.',
      color: '#9334e9',
      gradient: 'linear-gradient(135deg, #9334e9 0%, #b388ff 50%, #9334e9 100%)'
    }
  ];

  const subsidiaries = [
    {
      icon: Calendar,
      title: 'Événementiel Prestige',
      tagline: 'L\'Art de Créer des Moments Exceptionnels',
      description: 'Organisation exclusive d\'événements corporatifs et privés de classe mondiale.',
      metrics: [
        { value: '200+', label: 'Événements/an', icon: TrendingUp },
        { value: '98%', label: 'Satisfaction', icon: Heart },
        { value: '50+', label: 'Partenaires', icon: Handshake }
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accent: '#667eea'
    },
    {
      icon: Palette,
      title: 'Cosmétique Luxe Africain',
      tagline: 'La Beauté dans sa Forme la Plus Noble',
      description: 'Produits cosmétiques premium inspirés des richesses naturelles africaines.',
      metrics: [
        { value: '50+', label: 'Produits', icon: Award },
        { value: '3', label: 'Brevets', icon: Shield },
        { value: '15+', label: 'Pays', icon: Globe }
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: '#f5576c'
    },
    {
      icon: Megaphone,
      title: 'Stratégie & Communication',
      tagline: 'Donner une Voix à Votre Ambition',
      description: 'Agence 360° spécialisée en stratégie de marque et marketing digital.',
      metrics: [
        { value: '150+', label: 'Clients', icon: Users },
        { value: '40%', label: 'ROI moyen', icon: TrendingUp },
        { value: '100M+', label: 'Portée', icon: Megaphone }
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      accent: '#4facfe'
    },
    {
      icon: Trophy,
      title: 'Académie Football Elite',
      tagline: 'Forger les Champions de Demain',
      description: 'Formation de talents avec infrastructure moderne et staff professionnel.',
      metrics: [
        { value: '50+', label: 'Joueurs pro', icon: Trophy },
        { value: '5ha', label: 'Campus', icon: Building2 },
        { value: '3', label: 'Équipes nationales', icon: Flag }
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      accent: '#43e97b'
    },
    {
      icon: Car,
      title: 'Mobilité Executive',
      tagline: 'L\'Art du Déplacement Raffiné',
      description: 'Flotte premium de véhicules avec chauffeurs professionnels certifiés.',
      metrics: [
        { value: '80+', label: 'Véhicules', icon: Car },
        { value: '24/7', label: 'Service', icon: Clock },
        { value: '99%', label: 'Ponctualité', icon: CheckCircle }
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      accent: '#fa709a'
    },
    {
      icon: UtensilsCrossed,
      title: 'Gastronomie Étoilée',
      tagline: 'Une Symphonie de Saveurs',
      description: 'Expérience culinaire fusion alliant traditions africaines et techniques internationales.',
      metrics: [
        { value: '1★', label: 'Étoile Michelin', icon: Star },
        { value: '500+', label: 'Vins sélectionnés', icon: Award },
        { value: '4.9', label: 'Note Google', icon: Star }
      ],
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      accent: '#fcb69f'
    }
  ];

  const testimonials = [
    {
      quote: 'RN Corporation a transcendé nos attentes. Leur approche stratégique a multiplié notre chiffre d\'affaires par 3 en 18 mois seulement.',
      author: 'Dr. Aminata Koné',
      position: 'Présidente - Groupe AK International',
      rating: 5,
      company: 'Multinationale Agroalimentaire',
      avatarColor: '#d4af37'
    },
    {
      quote: 'Leur expertise en digital transformation a révolutionné notre organisation. Une vraie valeur ajoutée stratégique.',
      author: 'Jean-Marc Dubois',
      position: 'CEO - TechVision Africa',
      rating: 5,
      company: 'Fintech Innovante',
      avatarColor: '#1a73e8'
    },
    {
      quote: 'Service de mobilité irréprochable. Professionalisme, discrétion et excellence à chaque déplacement.',
      author: 'Sophie Martin',
      position: 'Directrice Générale - Global Consulting',
      rating: 5,
      company: 'Cabinet de Conseil International',
      avatarColor: '#34a853'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877f2', gradient: 'linear-gradient(135deg, #1877f2 0%, #0d5db8 100%)' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1da1f2', gradient: 'linear-gradient(135deg, #1da1f2 0%, #0c8dd9 100%)' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#e4405f', gradient: 'linear-gradient(135deg, #e4405f 0%, #c13584 100%)' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0a66c2', gradient: 'linear-gradient(135deg, #0a66c2 0%, #004182 100%)' }
  ];

  // ========================================
  // RENDER AVEC DESIGN ULTRA PREMIUM
  // ========================================
  return (
    <div className={`rn-ultra ${isPageLoaded ? 'rn-ultra--loaded' : ''}`}>
      


      {/* HERO SECTION CINÉMATIQUE */}
     
      
            
     

      {/* SECTION À PROPOS ULTRA */}
      <section 
        id="about" 
        className="rn-ultra-section rn-ultra-section--about" 
        ref={sectionRefs.about}
        aria-label="À propos de RN Corporation"
      >
        <div className="rn-ultra-container">
          
          <div className="rn-ultra-section__header">
            <div className="rn-ultra-section__header-content">
              <span className="rn-ultra-section__label">Notre Essence</span>
              <h2 className="rn-ultra-section__title">
                <span className="rn-ultra-section__title-line">Un Groupe,</span>
                <span className="rn-ultra-section__title-line">
                  <span className="rn-ultra-section__title-accent">Six Univers d'Excellence</span>
                </span>
              </h2>
              
              <div className="rn-ultra-section__divider">
                <div className="rn-ultra-section__divider-line"></div>
                <Diamond className="rn-ultra-section__divider-icon" size={24} />
                <div className="rn-ultra-section__divider-line"></div>
              </div>
              
              <p className="rn-ultra-section__subtitle">
                RN Corporation est un conglomérat ivoirien d'envergure, réunissant six
                filiales spécialisées dans des secteurs variés et complémentaires.
                Notre vision : créer des synergies entre nos activités pour offrir
                des solutions intégrées et innovantes à travers l'Afrique de l'Ouest.
              </p>
            </div>
          </div>

          <div className="rn-ultra-about__grid">
            
            {/* Contenu About */}
            <div className="rn-ultra-about__content">
              <div className="rn-ultra-about__mission">
                <div className="rn-ultra-about__mission-header">
                  <div className="rn-ultra-about__mission-icon-wrapper">
                    <Crown className="rn-ultra-about__mission-icon" size={24} />
                  </div>
                  <h3 className="rn-ultra-about__mission-title">Notre Mission Royale</h3>
                </div>
                <p className="rn-ultra-about__mission-text">
                  Définir de nouveaux standards d'excellence en créant des synergies stratégiques 
                  entre nos six univers, tout en contribuant au développement économique et social 
                  de l'Afrique de l'Ouest.
                </p>
              </div>

              <div className="rn-ultra-about__values">
                <h4 className="rn-ultra-about__values-title">Nos Principes Fondateurs</h4>
                <div className="rn-ultra-about__values-grid">
                  {[
                    { icon: Star, label: 'Excellence Royale', color: '#d4af37' },
                    { icon: Zap, label: 'Innovation Continue', color: '#1a73e8' },
                    { icon: TargetIcon, label: 'Précision Absolue', color: '#34a853' },
                    { icon: Heart, label: 'Impact Communautaire', color: '#ea4335' }
                  ].map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="rn-ultra-about__value">
                        <div 
                          className="rn-ultra-about__value-icon-wrapper"
                          style={{ '--value-color': value.color }}
                        >
                          <Icon className="rn-ultra-about__value-icon" size={20} />
                        </div>
                        <span className="rn-ultra-about__value-label">{value.label}</span>
                        <div className="rn-ultra-about__value-glow"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                className="rn-ultra-btn rn-ultra-btn--learn-more"
                onClick={() => navigateToSection('leadership')}
              >
                <span>Rencontrer Nos Leaders</span>
                <div className="rn-ultra-btn__arrow">
                  <ChevronRight size={20} />
                </div>
              </button>
            </div>

            {/* Visual About */}
            <div className="rn-ultra-about__visual">
              <div className="rn-ultra-about__visual-container">
                {/* Carte Visuelle Premium */}
                <div className="rn-ultra-about__map">
                  <Globe2 className="rn-ultra-about__map-icon" size={64} />
                  <div className="rn-ultra-about__map-points">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="rn-ultra-about__map-point"
                        style={{ '--i': i }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Badges Statistiques */}
                <div className="rn-ultra-about__stats-badges">
                  <div className="rn-ultra-about__stat-badge rn-ultra-about__stat-badge--primary">
                    <span className="rn-ultra-about__stat-value">15+</span>
                    <span className="rn-ultra-about__stat-label">Pays</span>
                    <div className="rn-ultra-about__stat-glow"></div>
                  </div>
                  
                  <div className="rn-ultra-about__stat-badge rn-ultra-about__stat-badge--secondary">
                    <span className="rn-ultra-about__stat-value">500+</span>
                    <span className="rn-ultra-about__stat-label">Collaborateurs</span>
                    <div className="rn-ultra-about__stat-glow"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Effets de Section */}
        <div className="rn-ultra-section__accent"></div>
      </section>

      {/* SECTION LEADERSHIP ULTRA */}
      <section 
        id="leadership" 
        className="rn-ultra-section rn-ultra-section--leadership" 
        ref={sectionRefs.leadership}
        aria-label="Notre équipe dirigeante"
      >
        <div className="rn-ultra-container">
          
          <div className="rn-ultra-section__header">
            <div className="rn-ultra-section__header-content">
              <span className="rn-ultra-section__label">Direction Visionnaire</span>
              <h2 className="rn-ultra-section__title">
                <span className="rn-ultra-section__title-line">Les Architectes de</span>
                <span className="rn-ultra-section__title-line">
                  <span className="rn-ultra-section__title-accent">Notre Succès</span>
                </span>
              </h2>
              
              <div className="rn-ultra-section__divider">
                <div className="rn-ultra-section__divider-line"></div>
                <Crown className="rn-ultra-section__divider-icon" size={24} />
                <div className="rn-ultra-section__divider-line"></div>
              </div>
              
              <p className="rn-ultra-section__subtitle">
                Une équipe dirigeante d'élite, combinant expertise internationale 
                et vision stratégique pour guider RN Corporation vers de nouveaux sommets.
              </p>
            </div>
          </div>

          <div className="rn-ultra-leadership__grid">
            {leadershipTeam.map((leader, index) => (
              <div 
                key={index} 
                className="rn-ultra-leader-card"
                onMouseEnter={() => setHoveredCard(`leader-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="rn-ultra-leader-card__visual">
                  {/* Avatar avec effet premium */}
                  <div 
                    className="rn-ultra-leader-card__avatar"
                    style={{ backgroundColor: leader.avatarColor }}
                  >
                    <User className="rn-ultra-leader-card__avatar-icon" size={32} />
                    <div className="rn-ultra-leader-card__avatar-glow"></div>
                    <div className="rn-ultra-leader-card__avatar-shine"></div>
                  </div>
                  
                  {/* Badge de position */}
                  <div className="rn-ultra-leader-card__position-badge">
                    <Briefcase className="rn-ultra-leader-card__position-icon" size={14} />
                    <span className="rn-ultra-leader-card__position-text">{leader.position}</span>
                  </div>
                </div>
                
                <div className="rn-ultra-leader-card__content">
                  <h3 className="rn-ultra-leader-card__name">{leader.name}</h3>
                  <p className="rn-ultra-leader-card__bio">{leader.bio}</p>
                  
                  {/* Compétences */}
                  <div className="rn-ultra-leader-card__expertise">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="rn-ultra-leader-card__skill"
                        style={{ '--skill-color': leader.avatarColor }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Effets de hover */}
                <div 
                  className="rn-ultra-leader-card__hover-bg"
                  style={{ backgroundColor: `${leader.avatarColor}15` }}
                ></div>
                <div className="rn-ultra-leader-card__border-glow"></div>
              </div>
            ))}
          </div>

        </div>
        
        {/* Ornement de section */}
        <div className="rn-ultra-section__ornament">
          <div className="rn-ultra-section__ornament-line"></div>
          <Crown className="rn-ultra-section__ornament-icon" size={32} />
          <div className="rn-ultra-section__ornament-line"></div>
        </div>
      </section>

      {/* SECTION AVANTAGES ULTRA */}
      <section 
        id="whyUs" 
        className="rn-ultra-section rn-ultra-section--advantages" 
        ref={sectionRefs.whyUs}
        aria-label="Pourquoi choisir RN Corporation"
      >
        <div className="rn-ultra-container">
          
          <div className="rn-ultra-section__header">
            <div className="rn-ultra-section__header-content">
              <span className="rn-ultra-section__label">Notre Distinction</span>
              <h2 className="rn-ultra-section__title">
                <span className="rn-ultra-section__title-line">L'Art de</span>
                <span className="rn-ultra-section__title-line">
                  <span className="rn-ultra-section__title-accent">l'Excellence</span>
                </span>
              </h2>
              
              <div className="rn-ultra-section__divider">
                <div className="rn-ultra-section__divider-line"></div>
                <Award className="rn-ultra-section__divider-icon" size={24} />
                <div className="rn-ultra-section__divider-line"></div>
              </div>
              
              <p className="rn-ultra-section__subtitle">
                Ce qui fait de RN Corporation un partenaire stratégique incomparable 
                dans un paysage concurrentiel en pleine transformation.
              </p>
            </div>
          </div>

          <div className="rn-ultra-advantages__grid">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <article 
                  key={index} 
                  className="rn-ultra-advantage-card"
                  style={{ 
                    '--advantage-color': advantage.color,
                    '--advantage-gradient': advantage.gradient
                  }}
                  onMouseEnter={() => setHoveredCard(`advantage-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Numéro de carte */}
                  <div className="rn-ultra-advantage-card__number">
                    <span>0{index + 1}</span>
                  </div>
                  
                  {/* Icône animée */}
                  <div className="rn-ultra-advantage-card__icon-container">
                    <div className="rn-ultra-advantage-card__icon-orb">
                      <Icon className="rn-ultra-advantage-card__icon" size={36} />
                      <div className="rn-ultra-advantage-card__icon-aura"></div>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="rn-ultra-advantage-card__content">
                    <h3 className="rn-ultra-advantage-card__title">{advantage.title}</h3>
                    <p className="rn-ultra-advantage-card__description">{advantage.description}</p>
                  </div>
                  
                  {/* Effets visuels */}
                  <div className="rn-ultra-advantage-card__gradient-overlay"></div>
                  <div className="rn-ultra-advantage-card__particles"></div>
                  <div className="rn-ultra-advantage-card__shine-effect"></div>
                </article>
              );
            })}
          </div>

        </div>
        
        {/* Arrière-plan décoratif */}
        <div className="rn-ultra-section__pattern"></div>
      </section>

      {/* SECTION FILIALES ULTRA */}
      <section 
        id="subsidiaries" 
        className="rn-ultra-section rn-ultra-section--subsidiaries" 
        ref={sectionRefs.subsidiaries}
        aria-label="Nos filiales d'excellence"
      >
        <div className="rn-ultra-container">
          
          <div className="rn-ultra-section__header">
            <div className="rn-ultra-section__header-content">
              <span className="rn-ultra-section__label">Notre Écosystème</span>
              <h2 className="rn-ultra-section__title">
                <span className="rn-ultra-section__title-line">Six Piliers,</span>
                <span className="rn-ultra-section__title-line">
                  <span className="rn-ultra-section__title-accent">Une Excellence</span>
                </span>
              </h2>
              
              <div className="rn-ultra-section__divider">
                <div className="rn-ultra-section__divider-line"></div>
                <Briefcase className="rn-ultra-section__divider-icon" size={24} />
                <div className="rn-ultra-section__divider-line"></div>
              </div>
              
              <p className="rn-ultra-section__subtitle">
                Chaque filiale incarne l'excellence dans son domaine, créant des synergies 
                stratégiques pour offrir des solutions intégrées uniques.
              </p>
            </div>
          </div>

          <div className="rn-ultra-subsidiaries__grid">
            {subsidiaries.map((subsidiary, index) => {
              const Icon = subsidiary.icon;
              return (
                <article 
                  key={index} 
                  className="rn-ultra-subsidiary-card"
                  style={{ 
                    '--subsidiary-gradient': subsidiary.gradient,
                    '--subsidiary-accent': subsidiary.accent
                  }}
                  onMouseEnter={() => setHoveredCard(`subsidiary-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* En-tête de carte */}
                  <div className="rn-ultra-subsidiary-card__header">
                    <div className="rn-ultra-subsidiary-card__icon-wrapper">
                      <div className="rn-ultra-subsidiary-card__icon-bg"></div>
                      <Icon className="rn-ultra-subsidiary-card__icon" size={40} />
                      <div className="rn-ultra-subsidiary-card__icon-glow"></div>
                    </div>
                    
                    <div className="rn-ultra-subsidiary-card__badge">
                      <span className="rn-ultra-subsidiary-card__badge-text">Univers {index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="rn-ultra-subsidiary-card__content">
                    <h3 className="rn-ultra-subsidiary-card__title">{subsidiary.title}</h3>
                    <p className="rn-ultra-subsidiary-card__tagline">{subsidiary.tagline}</p>
                    <p className="rn-ultra-subsidiary-card__description">{subsidiary.description}</p>
                  </div>
                  
                  {/* Métriques */}
                  <div className="rn-ultra-subsidiary-card__metrics">
                    {subsidiary.metrics.map((metric, metricIndex) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={metricIndex} className="rn-ultra-subsidiary-card__metric">
                          <div className="rn-ultra-subsidiary-card__metric-icon">
                            <MetricIcon size={18} />
                          </div>
                          <div className="rn-ultra-subsidiary-card__metric-content">
                            <span className="rn-ultra-subsidiary-card__metric-value">{metric.value}</span>
                            <span className="rn-ultra-subsidiary-card__metric-label">{metric.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Effets de hover */}
                  <div className="rn-ultra-subsidiary-card__hover-bg"></div>
                  <div className="rn-ultra-subsidiary-card__border-effect"></div>
                </article>
              );
            })}
          </div>

          <div className="rn-ultra-section__cta">
            <button 
              className="rn-ultra-btn rn-ultra-btn--discover"
              onClick={() => navigateToSection('contact')}
            >
              <span>Explorer les Synergies</span>
              <div className="rn-ultra-btn__sparkles">
                {[...Array(3)].map((_, i) => (
                  <Sparkles key={i} size={16} />
                ))}
              </div>
            </button>
          </div>

        </div>
        
        {/* Effets de fond */}
        <div className="rn-ultra-section__floating-elements">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="rn-ultra-section__floating-element"
              style={{ '--i': i }}
            ></div>
          ))}
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES ULTRA */}
      <section 
        id="testimonials" 
        className="rn-ultra-section rn-ultra-section--testimonials" 
        ref={sectionRefs.testimonials}
        aria-label="Témoignages de nos partenaires"
      >
        <div className="rn-ultra-container">
          
          <div className="rn-ultra-section__header">
            <div className="rn-ultra-section__header-content">
              <span className="rn-ultra-section__label">Confiance & Réussite</span>
              <h2 className="rn-ultra-section__title">
                <span className="rn-ultra-section__title-line">Ils Nous Ont</span>
                <span className="rn-ultra-section__title-line">
                  <span className="rn-ultra-section__title-accent">Confié Leur Vision</span>
                </span>
              </h2>
              
              <div className="rn-ultra-section__divider">
                <div className="rn-ultra-section__divider-line"></div>
                <Heart className="rn-ultra-section__divider-icon" size={24} />
                <div className="rn-ultra-section__divider-line"></div>
              </div>
              
              <p className="rn-ultra-section__subtitle">
                Des leaders qui ont choisi RN Corporation comme partenaire stratégique 
                pour transformer leurs ambitions en succès tangibles.
              </p>
            </div>
          </div>

          <div className="rn-ultra-testimonials__carousel">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="rn-ultra-testimonial-card">
                {/* Citation */}
                <div className="rn-ultra-testimonial-card__quote-mark">
                  <span className="rn-ultra-testimonial-card__quote-mark-text">"</span>
                </div>
                
                {/* Note */}
                <div className="rn-ultra-testimonial-card__rating">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <div key={starIndex} className="rn-ultra-testimonial-card__star">
                      <Star size={20} />
                      <div className="rn-ultra-testimonial-card__star-glow"></div>
                    </div>
                  ))}
                </div>
                
                {/* Texte */}
                <blockquote className="rn-ultra-testimonial-card__text">
                  {testimonial.quote}
                </blockquote>
                
                {/* Auteur */}
                <div className="rn-ultra-testimonial-card__author">
                  <div className="rn-ultra-testimonial-card__author-avatar">
                    <div 
                      className="rn-ultra-testimonial-card__avatar-bg"
                      style={{ backgroundColor: testimonial.avatarColor }}
                    ></div>
                    <User className="rn-ultra-testimonial-card__avatar-icon" size={24} />
                  </div>
                  
                  <div className="rn-ultra-testimonial-card__author-info">
                    <p className="rn-ultra-testimonial-card__author-name">{testimonial.author}</p>
                    <p className="rn-ultra-testimonial-card__author-position">{testimonial.position}</p>
                    <p className="rn-ultra-testimonial-card__author-company">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Effets */}
                <div className="rn-ultra-testimonial-card__bg-glow"></div>
                <div className="rn-ultra-testimonial-card__border"></div>
              </article>
            ))}
          </div>

        </div>
        
        {/* Particules décoratives */}
        <div className="rn-ultra-section__particles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="rn-ultra-section__particle"
              style={{ '--i': i }}
            ></div>
          ))}
        </div>
      </section>

      {/* CTA ULTRA CINÉMATIQUE */}
      <section 
        id="contact" 
        className="rn-ultra-cta" 
        ref={sectionRefs.contact}
        aria-label="Contactez RN Corporation"
      >
        {/* Effets de fond dynamiques */}
        <div className="rn-ultra-cta__background">
          <div className="rn-ultra-cta__gradient-animated"></div>
          <div className="rn-ultra-cta__grid-pattern"></div>
          <div className="rn-ultra-cta__light-beams"></div>
          <div className="rn-ultra-cta__floating-circles"></div>
        </div>
        
        <div className="rn-ultra-container">
          <div className="rn-ultra-cta__content">
            
            {/* Badge CTA */}
            <div className="rn-ultra-cta__badge">
              <div className="rn-ultra-cta__badge-orb">
                <Zap className="rn-ultra-cta__badge-icon" size={20} />
              </div>
              <span className="rn-ultra-cta__badge-text">Opportunité Stratégique</span>
            </div>

            {/* Titre Épique */}
            <h2 className="rn-ultra-cta__title">
              <span className="rn-ultra-cta__title-line">Prêt à Redéfinir</span>
              <span className="rn-ultra-cta__title-line">
                <span className="rn-ultra-cta__title-highlight">Votre Futur ?</span>
              </span>
            </h2>
            
            {/* Description */}
            <p className="rn-ultra-cta__description">
              Rejoignez les visionnaires qui ont choisi RN Corporation comme levier stratégique 
              pour leur expansion en Afrique de l'Ouest. Ensemble, écrivons l'histoire de demain.
            </p>
            
            {/* Actions CTA */}
            <div className="rn-ultra-cta__actions">
              <button 
                className="rn-ultra-btn rn-ultra-btn--cta-primary"
                onClick={() => navigateToSection('contact')}
              >
                <div className="rn-ultra-btn__content">
                  <span>Démarrer une Collaboration</span>
                  <div className="rn-ultra-btn__icon-group">
                    <Handshake size={20} />
                    <div className="rn-ultra-btn__icon-aura"></div>
                  </div>
                </div>
                <div className="rn-ultra-btn__ripple"></div>
                <div className="rn-ultra-btn__shine"></div>
              </button>
              
              <button 
                className="rn-ultra-btn rn-ultra-btn--cta-secondary"
                onClick={() => navigateToSection('contact')}
              >
                <div className="rn-ultra-btn__content">
                  <span>Planifier un Audit Stratégique</span>
                  <div className="rn-ultra-btn__icon-group">
                    <ChartLine size={20} />
                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>
        
        {/* Effets visuels */}
        <div className="rn-ultra-cta__sparkles">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="rn-ultra-cta__sparkle"
              style={{ '--i': i }}
            >
              <Sparkles size={16} />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER ULTRA PREMIUM */}
      

      {/* BOUTON SCROLL TO TOP CINÉMATIQUE */}
      {showScrollTop && (
        <button
          className="rn-ultra-scroll-top"
          onClick={scrollToTop}
          aria-label="Retour au sommet"
        >
          <div className="rn-ultra-scroll-top__orb">
            <ArrowUp className="rn-ultra-scroll-top__icon" size={22} />
            <div className="rn-ultra-scroll-top__orb-glow"></div>
            <div className="rn-ultra-scroll-top__orb-particles"></div>
          </div>
          <div className="rn-ultra-scroll-top__ripple"></div>
        </button>
      )}

      {/* OVERLAY DE CHARGEMENT CINÉMATIQUE */}
      {!isPageLoaded && (
        <div className="rn-ultra-loader">
          <div className="rn-ultra-loader__container">
            {/* Logo animé */}
            <div className="rn-ultra-loader__logo">
              <div className="rn-ultra-loader__logo-orb">
                <span className="rn-ultra-loader__logo-text">RN</span>
                <div className="rn-ultra-loader__logo-aura"></div>
                <div className="rn-ultra-loader__logo-spin"></div>
              </div>
            </div>
            
            {/* Barre de progression */}
            <div className="rn-ultra-loader__progress">
              <div className="rn-ultra-loader__progress-bar">
                <div className="rn-ultra-loader__progress-fill"></div>
                <div className="rn-ultra-loader__progress-glow"></div>
              </div>
              <div className="rn-ultra-loader__progress-text">
                <span>Chargement de l'Excellence</span>
                <div className="rn-ultra-loader__progress-dots">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="rn-ultra-loader__progress-dot"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Effets de fond */}
          <div className="rn-ultra-loader__background">
            <div className="rn-ultra-loader__stars">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="rn-ultra-loader__star" style={{ '--i': i }}></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CURSEUR PERSONNALISÉ (Optionnel) */}
      <div 
        className="rn-ultra-cursor"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`
        }}
      ></div>

    </div>
  );
};

export default RNCorporationUltra;