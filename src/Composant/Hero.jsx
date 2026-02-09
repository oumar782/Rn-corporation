import React, { useState, useEffect, useRef, useCallback } from 'react';
import './hero.css';

import { 
  ChevronRight, 
  ChevronLeft,
  Globe,
  Users,
  TrendingUp,
  Target,
  Star,
  Shield,
  Sparkles,
  Award
} from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingLoop, setTypingLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const typingTimeoutRef = useRef(null);

  const TYPING_TEXTS = [
    "Odevolv CORPORATION",
    "Excellence Malienne", 
    "Innovation & Qualité",
    "Leader Multisectorielle"
  ];

  const CAROUSEL_SLIDES = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Excellence & Innovation",
      gradient: "rgba(10, 10, 10, 0.95)"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Solutions Intégrées",
      gradient: "rgba(10, 10, 10, 0.85)"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Expertise Multisectorielle",
      gradient: "rgba(10, 10, 10, 0.9)"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Vision Africaine",
      gradient: "rgba(10, 10, 10, 0.88)"
    }
  ];

  const KEY_STATS = [
    {
      id: 1,
      icon: <Shield size={24} />,
      value: "6 Filiales",
      label: "Spécialisées",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)"
    },
    {
      id: 2,
      icon: <Users size={24} />,
      value: "500+",
      label: "Clients Satisfaits",
      gradient: "linear-gradient(135deg, #FFD700 0%, #FFED4E 100%)"
    },
    {
      id: 3,
      icon: <Star size={24} />,
      value: "10+ Ans",
      label: "d'Expérience",
      gradient: "linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)"
    },
    {
      id: 4,
      icon: <TrendingUp size={24} />,
      value: "95%",
      label: "Taux de Réussite",
      gradient: "linear-gradient(135deg, #FFF8DC 0%, #FFD700 100%)"
    }
  ];

  const trustBadges = [
    'Certifié ISO 9001',
    'Leader Régional',
    'Innovation Award 2025'
  ];

  useEffect(() => {
    setIsLoaded(true);
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = typingLoop % TYPING_TEXTS.length;
      const fullText = TYPING_TEXTS[currentIndex];
      
      setTypedText(prev => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && typedText === fullText) {
        typingTimeoutRef.current = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTypingLoop(prev => prev + 1);
      }
    };

    typingTimeoutRef.current = setTimeout(handleTyping, typingSpeed);
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [typedText, isDeleting, typingLoop]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    
    return () => clearInterval(carouselInterval);
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleSecondaryCTA = useCallback(() => {
    console.log('Navigation vers partenariat');
  }, []);

  const renderParticles = () => {
    return Array.from({ length: 15 }).map((_, index) => (
      <div
        key={`particle-${index}`}
        className="rn-hero-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          opacity: Math.random() * 0.2 + 0.1
        }}
      />
    ));
  };

  const renderSlides = () => {
    return CAROUSEL_SLIDES.map((slide, index) => (
      <div
        key={`slide-${slide.id}`}
        className={`rn-hero-slide ${index === currentSlide ? 'rn-hero-slide--active' : ''}`}
        style={{ 
          backgroundImage: `linear-gradient(135deg, ${slide.gradient}, rgba(0, 0, 0, 0.4)), url(${slide.image})`
        }}
        aria-label={`Slide ${index + 1}: ${slide.title}`}
      />
    ));
  };

  const renderStats = () => {
    return KEY_STATS.map((stat) => (
      <div key={`stat-${stat.id}`} className="rn-hero-stat">
        <div className="rn-hero-stat-icon" style={{ background: stat.gradient }}>
          {stat.icon}
        </div>
        <div className="rn-hero-stat-content">
          <h3 className="rn-hero-stat-value">{stat.value}</h3>
          <p className="rn-hero-stat-label">{stat.label}</p>
        </div>
      </div>
    ));
  };

  return (
    <section 
      className={`rn-hero-container ${isLoaded ? 'rn-hero-container--loaded' : ''}`}
      role="banner"
      aria-label="Section principale Odevolv Corporation"
    >
      <div className="rn-hero-background" aria-hidden="true">
        {renderParticles()}
        <div className="rn-hero-slides">
          {renderSlides()}
        </div>
        <div className="rn-hero-overlay" />
      </div>

      <div className="rn-hero-content">
        <div className="rn-hero-content-wrapper">
          {/* Badges supérieurs */}
          <div className="rn-hero-top-section">
            <div className="rn-hero-badge">
              <div className="rn-hero-badge-inner">
                <Target size={18} className="rn-hero-badge-icon" aria-hidden="true" />
                <span className="rn-hero-badge-text">Leader depuis 2010</span>
              </div>
            </div>

            <div className="premium-hero__trust-badges">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="premium-hero__trust-badge"
                >
                  <Sparkles size={14} className="premium-hero__badge-icon" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Titre principal */}
          <div className="rn-hero-title-section">
            <div className="rn-hero-title-glow" aria-hidden="true" />
            <h1 className="rn-hero-title">
              <span className="rn-hero-title-text" aria-live="polite">
                {typedText}
              </span>
              <span className="rn-hero-title-cursor" aria-hidden="true">|</span>
            </h1>
            <div className="rn-hero-title-underline">
              <div className="rn-hero-title-underline-inner" />
            </div>
          </div>

          {/* Sous-titre */}
          <div className="rn-hero-subtitle-section">
            <div className="rn-hero-subtitle-icon">
              <Globe size={24} aria-hidden="true" />
            </div>
            <p className="rn-hero-subtitle">
              Un conglomérat d'excellence opérant dans six secteurs stratégiques 
              en Côte d'Ivoire et en Afrique de l'Ouest
            </p>
          </div>

          {/* Statistiques */}
          <div className="rn-hero-stats">
            {renderStats()}
          </div>

          {/* Boutons d'action */}
          <div className="rn-hero-actions">
            <button 
              className="rn-hero-btn rn-hero-btn--primary"
              onClick={() => scrollToSection('subsidiaries')}
              aria-label="Découvrir nos filiales"
            >
              <span className="rn-hero-btn-content">
                <span className="rn-hero-btn-text">Découvrir nos filiales</span>
                <ChevronRight size={20} className="rn-hero-btn-icon" aria-hidden="true" />
              </span>
            </button>
            
            <button 
              className="rn-hero-btn rn-hero-btn--secondary"
              onClick={handleSecondaryCTA}
              aria-label="Devenir partenaire"
            >
              <span className="rn-hero-btn-content">
                <span className="rn-hero-btn-text">Devenir partenaire</span>
                <ChevronRight size={20} className="rn-hero-btn-icon" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Contrôles du carrousel */}
      
    </section>
  );
};

export default Hero;