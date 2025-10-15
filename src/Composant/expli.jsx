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
  X
} from 'lucide-react';
import './home.css';

const RNCorporationPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    'why-us': useRef(null),
    subsidiaries: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    // Animation d'apparition initiale
    setIsVisible(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`rn-corporation-page ${isVisible ? 'visible' : ''}`}>
    

   
      
      {/* Rest of your existing sections remain the same */}
      {/* About Preview */}
      <section id="about" className="about-preview section" ref={sectionRefs.about}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Un Groupe, Six Univers d'Excellence</h2>
            <div className="divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="text-shadow">
                RN Corporation est un conglomérat ivoirien d'envergure, réunissant six
                filiales spécialisées dans des secteurs variés et complémentaires.
                Notre vision : créer des synergies entre nos activités pour offrir
                des solutions intégrées et innovantes à nos clients à travers toute
                l'Afrique de l'Ouest.
              </p>
              <p className="text-shadow">
                Depuis plus d'une décennie, nous bâtissons un écosystème d'entreprises 
                performantes, guidées par l'excellence, l'innovation et l'engagement 
                envers nos communautés.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <Star size={20} className="gold-icon" />
                  </div>
                  <span className="text-shadow">Excellence opérationnelle</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Star size={20} className="gold-icon" />
                  </div>
                  <span className="text-shadow">Innovation continue</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Star size={20} className="gold-icon" />
                  </div>
                  <span className="text-shadow">Engagement communautaire</span>
                </div>
              </div>
              <a 
                href="#about" 
                className="btn btn-outline"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                Découvrir notre histoire
              </a>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span>Image représentant l'équipe dirigeante de RN Corporation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="why-us section bg-light" ref={sectionRefs['why-us']}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pourquoi Choisir RN Corporation ?</h2>
            <p className="text-shadow">Notre groupe se distingue par son approche intégrée et son excellence opérationnelle</p>
            <div className="divider"></div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Award size={32} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Expertise Multisectorielle</h3>
              <p className="text-shadow">
                Six domaines d'activité complémentaires nous permettent d'offrir des solutions
                complètes et personnalisées à nos clients, de l'événementiel au restaurant,
                en passant par la communication digitale et le sport.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Globe size={32} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Présence Régionale</h3>
              <p className="text-shadow">
                Basés en Côte d'Ivoire avec des ambitions continentales, nous développons
                notre réseau à travers l'Afrique de l'Ouest pour servir une clientèle
                toujours plus diversifiée et exigeante.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Target size={32} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Standards d'Excellence</h3>
              <p className="text-shadow">
                Chaque filiale respecte des normes de qualité rigoureuses. Nos certifications
                et notre engagement envers l'amélioration continue garantissent des prestations
                irréprochables dans tous nos secteurs d'activité.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Zap size={32} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Innovation Continue</h3>
              <p className="text-shadow">
                Nous investissons massivement dans la recherche et le développement.
                Nouvelles technologies, méthodologies agiles et veille stratégique nous
                permettent de rester à la pointe de nos industries respectives.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Shield size={32} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Partenaire de Confiance</h3>
              <p className="text-shadow">
                Plus de 500 entreprises et milliers de particuliers nous font confiance.
                Notre réputation repose sur la transparence, l'intégrité et notre capacité
                à tenir nos engagements dans les délais impartis.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Clock size={32} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Service Premium 24/7</h3>
              <p className="text-shadow">
                Notre service client d'exception est disponible à tout moment pour répondre
                à vos besoins. Réactivité, personnalisation et suivi rigoureux caractérisent
                notre approche relationnelle avec chaque client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Showcase */}
      <section id="subsidiaries" className="subsidiaries section" ref={sectionRefs.subsidiaries}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Six Filiales d'Excellence</h2>
            <p className="text-shadow">Chaque filiale est un centre d'expertise reconnu dans son domaine</p>
            <div className="divider"></div>
          </div>

          <div className="subsidiaries-grid">
            <div className="subsidiary-card">
              <div className="card-icon">
                <Calendar size={40} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Événementiel</h3>
              <p className="text-shadow">
                De l'organisation de mariages somptueux aux grands événements corporatifs, 
                notre équipe créative transforme chaque occasion en moment inoubliable. 
                Plus de 200 événements organisés par an avec un taux de satisfaction de 98%.
              </p>
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Événements/an</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="subsidiary-card">
              <div className="card-icon">
                <Palette size={40} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Cosmétique</h3>
              <p className="text-shadow">
                Gamme complète de produits de beauté premium inspirés des richesses naturelles 
                africaines. Nos formulations brevetées allient tradition et innovation 
                scientifique pour sublimer toutes les carnations.
              </p>
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Produits</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Breuets</span>
                </div>
              </div>
            </div>

            <div className="subsidiary-card">
              <div className="card-icon">
                <Megaphone size={40} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Communication</h3>
              <p className="text-shadow">
                Agence 360° spécialisée en stratégie de marque, marketing digital, création 
                de contenu et relations publiques. Nous accompagnons les entreprises dans 
                leur transformation digitale avec des campagnes à fort impact.
              </p>
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">ROI moyen</span>
                </div>
              </div>
            </div>

            <div className="subsidiary-card">
              <div className="card-icon">
                <Trophy size={40} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Football</h3>
              <p className="text-shadow">
                Académie certifiée formant les talents de demain. Infrastructure moderne 
                de 5 hectares, 15 entraîneurs diplômés et partenariats avec des clubs 
                européens. Plus de 50 joueurs formés évoluent en division professionnelle.
              </p>
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Joueurs pro</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5ha</span>
                  <span className="stat-label">Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="subsidiary-card">
              <div className="card-icon">
                <Car size={40} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Location de véhicules</h3>
              <p className="text-shadow">
                Flotte premium de 80+ véhicules haut de gamme avec chauffeurs professionnels 
                multilingues. Services VIP pour aéroports, événements d'entreprise et 
                déplacements longue durée. Disponibilité 24h/24.
              </p>
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-number">80+</span>
                  <span className="stat-label">Véhicules</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Disponibilité</span>
                </div>
              </div>
            </div>

            <div className="subsidiary-card">
              <div className="card-icon">
                <UtensilsCrossed size={40} className="gold-icon" />
              </div>
              <h3 className="text-shadow">Restaurant</h3>
              <p className="text-shadow">
                Expérience gastronomique fusion alliant cuisine ivoirienne traditionnelle 
                et techniques culinaires internationales. Chef étoilé, cave à vins d'exception 
                et ambiance raffinée pour des moments d'exception.
              </p>
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Étoile</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Vins</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section-footer">
            <a 
              href="#subsidiaries" 
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('subsidiaries'); }}
            >
              Explorer toutes nos filiales en détail
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Services Complémentaires</h2>
            <p className="text-shadow">Au-delà de nos six filiales principales, nous proposons des services intégrés</p>
            <div className="divider"></div>
          </div>

          <div className="services-grid">
            <div className="service-item">
              <h3 className="text-shadow">Conseil en Stratégie d'Entreprise</h3>
              <p className="text-shadow">
                Nos experts accompagnent les entreprises dans leur développement stratégique, 
                de la planification à l'exécution, en tirant parti des synergies entre nos 
                différentes filiales.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-shadow">Solutions Digitales Intégrées</h3>
              <p className="text-shadow">
                Développement d'applications sur mesure, transformation digitale et 
                stratégies e-commerce pour accélérer la croissance de votre entreprise.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-shadow">Formation & Développement des Talents</h3>
              <p className="text-shadow">
                Programmes de formation professionnelle adaptés aux besoins spécifiques 
                de chaque secteur d'activité, avec certification reconnue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section" ref={sectionRefs.testimonials}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ils Nous Font Confiance</h2>
            <p className="text-shadow">Découvrez ce que nos clients disent de leurs expériences avec RN Corporation</p>
            <div className="divider"></div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={20} className="gold-icon" />
                ))}
              </div>
              <p className="testimonial-text text-shadow">
                "RN Corporation a organisé le mariage de mes rêves. Leur attention aux détails
                et leur professionnalisme ont dépassé toutes mes attentes. Une équipe formidable !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Users size={24} />
                </div>
                <div className="author-info">
                  <p className="author-name text-shadow">Aminata K.</p>
                  <p className="author-role text-shadow">Particulier - Événementiel</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={20} className="gold-icon" />
                ))}
              </div>
              <p className="testimonial-text text-shadow">
                "Leur agence de communication a propulsé notre visibilité digitale. ROI exceptionnel
                sur nos campagnes. Je recommande vivement leurs services stratégiques."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Users size={24} />
                </div>
                <div className="author-info">
                  <p className="author-name text-shadow">Jean-Marc D.</p>
                  <p className="author-role text-shadow">CEO - Tech Startup</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={20} className="gold-icon" />
                ))}
              </div>
              <p className="testimonial-text text-shadow">
                "Service de location de véhicules impeccable. Chauffeurs ponctuels et courtois,
                véhicules luxueux et bien entretenus. Le meilleur service premium d'Abidjan."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Users size={24} />
                </div>
                <div className="author-info">
                  <p className="author-name text-shadow">Sophie M.</p>
                  <p className="author-role text-shadow">Directrice - Multinationale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section section bg-gold" ref={sectionRefs.contact}>
        <div className="container">
          <div className="cta-content">
            <h2 className="section-title">Prêt à collaborer avec nous ?</h2>
            <p className="text-shadow">
              Rejoignez les entreprises qui ont fait confiance à RN Corporation
              pour leurs projets stratégiques.
            </p>
            <div className="cta-buttons">
              <a 
                href="#contact" 
                className="btn btn-dark"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Démarrer un projet
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline-light"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default RNCorporationPage;