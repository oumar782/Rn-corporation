import React, { useState, useEffect, useRef } from 'react';
import './hero.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const titles = [
    "RN CORPORATION",
    "EXCELLENCE IVOIRIENNE", 
    "INNOVATION & QUALITÉ",
    "LEADER MULTISECTORIEL"
  ];

  // Images du carrousel
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Excellence & Innovation"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Solutions Intégrées"
    },
    {
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Expertise Multisectorielle"
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Vision Africaine"
    }
  ];

  // Référence pour maintenir la largeur fixe
  const titleRef = useRef(null);

  // Machine à écrire
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, titles]);

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      {/* Carrousel d'images */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
          </div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="hero-content">
        <div className="content-wrapper">
       

          {/* Conteneur fixe pour le titre */}
          <div className="title-container" ref={titleRef}>
            <h1 className="main-title">
              <span className="typed-text">{displayText}</span>
              <span className="cursor">|</span>
            </h1>
            {/* Texte invisible pour maintenir la hauteur */}
            <div className="hidden-title" aria-hidden="true">
              {titles[0]}
            </div>
          </div>

          {/* Sous-titre */}
          <p className="subtitle">
            Un conglomérat d'excellence au service de six secteurs stratégiques en Côte d'Ivoire et en Afrique de l'Ouest
          </p>

          {/* Points clés */}
          <div className="key-points">
            <div className="key-point">
              <span className="point-icon">✓</span>
              <span>6 Filiales Spécialisées</span>
            </div>
            <div className="key-point">
              <span className="point-icon">✓</span>
              <span>500+ Clients Satisfaits</span>
            </div>
            <div className="key-point">
              <span className="point-icon">✓</span>
              <span>10+ Ans d'Expérience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn btn-primary">
              <span className="btn-icon"></span>
              Découvrir nos filiales
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon"></span>
              Devenir partenaire
            </button>
          </div>

       
        </div>
      </div>

      {/* Contrôles du carrousel */}
      <button className="carousel-control prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        ›
      </button>


      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll pour découvrir</span>
      </div>

    </section>
  );
};

export default HeroSection;