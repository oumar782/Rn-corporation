import React from 'react';
import { Calendar, Palette, Megaphone, Trophy, Car, UtensilsCrossed, ArrowRight, MessageCircle } from "lucide-react";

const Subsidiaries = () => {
  const subsidiaries = [
    {
      title: "RN Événementiel",
      description: "Leader de l'événementiel premium en Côte d'Ivoire. Nous orchestrons des expériences mémorables : mariages de rêve (50+ par an), galas d'entreprise, conférences internationales, lancements de produits et manifestations culturelles d'envergure. Notre équipe de 25 experts créatifs, notre réseau de 100+ partenaires premium et notre flotte de matériel dernier cri nous permettent de réaliser des événements exceptionnels de 50 à 5000 invités. Certifiés ISO 9001, nous garantissons qualité, ponctualité et créativité sur chaque projet. Services : concept design, scénographie, traiteur gastronomique, animations artistiques, gestion technique complète.",
      icon: Calendar,
      link: "/filiales/evenementiel"
    },
    {
      title: "RN Cosmétique",
      description: "Marque de cosmétiques naturels premium \"Ébène Royale\" inspirée des richesses botaniques africaines. Gamme complète de 50+ produits certifiés bio : soins visage (sérums, crèmes anti-âge), soins corps (laits, gommages), maquillage (fonds de teint adaptés à toutes carnations) et parfums signature. Laboratoire R&D à Abidjan, formulations brevetées combinant karité, moringa, baobab et technologies dermatologiques avancées. Distribués dans 30+ points de vente en Côte d'Ivoire et exportés vers 5 pays africains. Nos produits sont cruelty-free, végans et développés en collaboration avec des dermatologues. Chiffre d'affaires 2023 : 500M FCFA, croissance annuelle de 40%.",
      icon: Palette,
      link: "/filiales/cosmetique"
    },
    {
      title: "RN Communication",
      description: "Agence de communication 360° et marketing digital primée. Services complets : stratégie de marque, création graphique (logos, chartes graphiques, packaging), production audiovisuelle (spots TV, vidéos corporate, contenus réseaux sociaux), campagnes digitales (SEO/SEA, social media management, influence marketing), relations publiques et organisation d'événements médiatiques. Équipe pluridisciplinaire de 20 talents : stratèges, créatifs, développeurs web, community managers, relations presse. Portfolio de 80+ clients dont multinationales, PME et institutions publiques. Spécialistes de la transformation digitale des entreprises africaines. Récompensés \"Meilleure agence digitale\" aux Abidjan Marketing Awards 2023. Studios créatifs équipés, plateforme de gestion 24/7 et reporting analytique détaillé.",
      icon: Megaphone,
      link: "/filiales/communication"
    },
    {
      title: "RN Football Academy",
      description: "Académie de football d'élite certifiée FIFA. Infrastructure exceptionnelle de 5 hectares : 3 terrains aux normes internationales (dont 1 en gazon synthétique nouvelle génération), salle de musculation équipée, espace médical avec kinés diplômés, internat de 80 places, salles de classe pour suivi scolaire. Programme complet de formation pour jeunes de 8 à 18 ans : technique individuelle, tactique collective, préparation physique, nutrition sportive, accompagnement psychologique et scolaire. Staff technique de 15 entraîneurs diplômés UEFA/CAF. Partenariats avec clubs européens (détection, stages). Plus de 300 jeunes formés depuis 2017, dont 50+ évoluent en championnats professionnels africains et européens. Organisation de tournois internationaux accueillant des équipes de toute l'Afrique de l'Ouest. Programmes de détection dans 10 régions ivoiriennes.",
      icon: Trophy,
      link: "/filiales/football-academy"
    },
    {
      title: "RN Prestige Location",
      description: "Service premium de location de véhicules avec chauffeur. Flotte exclusive de 80+ véhicules haut de gamme régulièrement renouvelés : berlines de luxe (Mercedes Classe S, BMW Série 7, Audi A8), SUV premium (Range Rover, Porsche Cayenne), minibus VIP (Mercedes Sprinter aménagés luxe jusqu'à 18 places), véhicules événementiels (limousines, voitures de collection pour mariages). Tous véhicules climatisés, GPS, WiFi embarqué. Chauffeurs professionnels trilingues (français/anglais/local), formés aux protocoles VIP, ponctuels et discrets. Services 24h/24, 7j/7 : transferts aéroport, déplacements d'affaires, circuits touristiques, événements spéciaux, mises à disposition longue durée. Tarifs dégressifs pour entreprises. Assurance tous risques incluse. Réservation en ligne et facturation simplifiée. Clientèle : diplomates, PDG, délégations officielles, touristes premium.",
      icon: Car,
      link: "/filiales/prestige-location"
    },
    {
      title: "Le Palais Saveurs",
      description: "Restaurant gastronomique fusion situé au cœur d'Abidjan Plateau. Expérience culinaire raffinée orchestrée par le Chef Kouamé, formé dans les meilleures tables parisiennes et récompensé d'une distinction Michelin. Cuisine signature mêlant traditions ivoiriennes et techniques gastronomiques contemporaines : attieké revisité aux fruits de mer nobles, poulet braisé aux épices rares, poissons grillés sauce vierge, desserts créatifs aux fruits tropicaux. Menu dégustation 7 plats (25000 FCFA), carte des vins exceptionnelle de 200+ références (France, Afrique du Sud, Californie), cave climatisée visible. Cadre élégant et intimiste de 80 couverts : décoration contemporaine africaine, vaisselle de créateurs, éclairage soigné, musique jazz live les vendredis. Service impeccable par sommeliers et maîtres d'hôtel formés. Salons privés disponibles pour événements d'affaires ou familiaux. Ouvert midi et soir, réservation conseillée. Certifié Hygiene Excellence.",
      icon: UtensilsCrossed,
      link: "/filiales/palais-saveurs"
    },
  ];

  return (
    <div className="rn-subsidiaries-page">
      <style jsx>{`
        /* Variables CSS */
        :root {
          --rn-primary-color: #1a1a1a;
          --rn-secondary-color: #d4af37;
          --rn-gold-light: #f4d03f;
          --rn-gold-dark: #b8941f;
          --rn-text-color: #333;
          --rn-light-bg: #f9f9f9;
          --rn-white: #ffffff;
          --rn-shadow-gold: 0 4px 20px rgba(212, 175, 55, 0.3);
          --rn-shadow-gold-strong: 0 8px 30px rgba(212, 175, 55, 0.5);
          --rn-shadow-gold-intense: 0 12px 40px rgba(212, 175, 55, 0.6);
          --rn-transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Reset et styles de base */
        .rn-subsidiaries-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .rn-subsidiaries-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
         
        }

        /* Hero Section - Pleine largeur */
        .rn-hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: 
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.85) 0%, 
              rgba(26, 26, 26, 0.92) 50%, 
              rgba(212, 175, 55, 0.25) 100%),
            url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center;
          background-size: cover;
          background-attachment: fixed;
          color: white;
          text-align: center;
          width: 100%;
          overflow: hidden;
        }

        .rn-hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
          animation: rn-pulseGolden 6s ease-in-out infinite;
        }

        .rn-hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(transparent, var(--rn-light-bg));
        }

        .rn-hero-content {
          max-width: 900px;
          animation: rn-fadeInUp 1.2s ease-out 0.3s both;
          position: relative;
          z-index: 2;
          padding: 0 20px;
          width: 100%;
        }

        .rn-hero-title {
          font-size: 4.8rem;
          font-weight: 800;
          margin-bottom: 2rem;
          text-shadow: 
            0 4px 12px rgba(32, 32, 28, 0.6),
            0 0 40px rgba(212, 175, 55, 0.5),
            0 0 80px rgba(212, 175, 55, 0.3);
          color: var(--rn-secondary-color);
          font-family: 'Georgia', serif;
          letter-spacing: 1.5px;
          position: relative;
          display: inline-block;
        }

        .rn-hero-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--rn-secondary-color), transparent);
          border-radius: 2px;
        }

        .rn-hero-subtitle {
          font-size: 1.6rem;
          margin-bottom: 3rem;
          opacity: 0.95;
          line-height: 1.7;
          text-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(212, 175, 55, 0.3);
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        .rn-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          animation: rn-bounce 2s infinite;
          z-index: 2;
        }

        .rn-scroll-arrow {
          width: 40px;
          height: 40px;
          border: 2px solid var(--rn-secondary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--rn-secondary-color);
          text-decoration: none;
          transition: var(--rn-transition);
        }

        .rn-scroll-arrow:hover {
          background: var(--rn-secondary-color);
          color: var(--rn-primary-color);
          box-shadow: var(--rn-shadow-gold-strong);
        }

        /* Section Title */
        .rn-section-title {
          text-align: center;
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 4rem;
          color: var(--rn-primary-color);
          position: relative;
          font-family: 'Georgia', serif;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .rn-section-title::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, var(--rn-secondary-color), var(--rn-gold-light));
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.4);
        }

        .rn-section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, var(--rn-gold-light), var(--rn-secondary-color));
          border-radius: 1px;
        }

        /* Subsidiaries Grid - Pleine largeur */
        .rn-subsidiaries-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          width: 100%;
        }

        .rn-subsidiaries-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            var(--rn-secondary-color) 20%, 
            var(--rn-gold-light) 50%, 
            var(--rn-secondary-color) 80%, 
            transparent 100%);
          box-shadow: 0 2px 10px rgba(212, 175, 55, 0.5);
        }

        .rn-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 20px;
        }

        .rn-subsidiaries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 50px;
          width: 100%;
        }

        .rn-subsidiary-card {
          background: linear-gradient(145deg, var(--rn-white), #f5f5f5);
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.08),
            0 5px 15px rgba(212, 175, 55, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          transition: var(--rn-transition);
          animation: rn-fadeInScale 0.8s ease-out;
          position: relative;
          border: 1px solid rgba(212, 175, 55, 0.15);
          width: 100%;
        }

        .rn-subsidiary-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, 
            var(--rn-secondary-color), 
            var(--rn-gold-light), 
            var(--rn-secondary-color));
          background-size: 200% 100%;
          animation: rn-shimmerGold 3s ease-in-out infinite;
          box-shadow: 0 2px 10px rgba(212, 175, 55, 0.4);
        }

        .rn-subsidiary-card:hover {
          transform: translateY(-20px) scale(1.02);
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.15),
            0 15px 35px rgba(212, 175, 55, 0.25),
            var(--rn-shadow-gold-intense);
        }

        .rn-card-header {
          padding: 35px 35px 25px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
          position: relative;
          width: 100%;
        }

        .rn-card-icon-wrapper {
          position: relative;
          margin-right: 25px;
        }

        .rn-card-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--rn-secondary-color), var(--rn-gold-light));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 
            var(--rn-shadow-gold),
            inset 0 2px 4px rgba(255, 255, 255, 0.4),
            0 0 20px rgba(212, 175, 55, 0.3);
          transition: var(--rn-transition);
          position: relative;
          z-index: 2;
        }

        .rn-card-icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 90px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          animation: rn-pulseIcon 2s ease-in-out infinite;
        }

        .rn-subsidiary-card:hover .rn-card-icon {
          transform: scale(1.15) rotate(8deg);
          box-shadow: 
            var(--rn-shadow-gold-strong),
            inset 0 2px 4px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(212, 175, 55, 0.5);
        }

        .rn-card-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--rn-primary-color);
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .rn-card-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--rn-secondary-color), transparent);
          transition: var(--rn-transition);
        }

        .rn-subsidiary-card:hover .rn-card-title::after {
          width: 100%;
        }

        .rn-card-body {
          padding: 30px 35px;
          width: 100%;
        }

        .rn-card-description {
          color: #555;
          line-height: 1.8;
          margin-bottom: 30px;
          max-height: 220px;
          overflow-y: auto;
          padding-right: 15px;
          font-size: 0.95rem;
          text-align: justify;
          width: 100%;
        }

        .rn-card-description::-webkit-scrollbar {
          width: 6px;
        }

        .rn-card-description::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .rn-card-description::-webkit-scrollbar-thumb {
          background: linear-gradient(var(--rn-secondary-color), var(--rn-gold-light));
          border-radius: 10px;
          box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
        }

        .rn-card-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 32px;
          background: linear-gradient(135deg, var(--rn-secondary-color), var(--rn-gold-light));
          color: var(--rn-primary-color);
          text-decoration: none;
          border-radius: 35px;
          font-weight: 700;
          transition: var(--rn-transition);
          box-shadow: 
            var(--rn-shadow-gold),
            0 4px 15px rgba(212, 175, 55, 0.3);
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .rn-card-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.4), 
            transparent);
          transition: left 0.6s;
        }

        .rn-card-link:hover::before {
          left: 100%;
        }

        .rn-card-link:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 
            var(--rn-shadow-gold-strong),
            0 8px 25px rgba(212, 175, 55, 0.4),
            0 0 20px rgba(212, 175, 55, 0.3);
          color: var(--rn-primary-color);
        }

        /* CTA Section - Pleine largeur */
        .rn-cta-section {
          padding: 120px 0;
          background: linear-gradient(135deg, 
            var(--rn-primary-color) 0%, 
            #2c2c2c 50%, 
            #1a1a1a 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .rn-cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
          animation: rn-floatGolden 8s ease-in-out infinite;
        }

        .rn-cta-content {
          max-width: 850px;
          margin: 0 auto;
          animation: rn-fadeInUp 1s ease-out;
          position: relative;
          z-index: 2;
          padding: 0 20px;
          width: 100%;
        }

        .rn-cta-title {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: var(--rn-secondary-color);
          font-family: 'Georgia', serif;
          text-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.6),
            0 0 30px rgba(212, 175, 55, 0.4);
          position: relative;
          display: inline-block;
        }

        .rn-cta-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--rn-gold-light), transparent);
          border-radius: 2px;
        }

        .rn-cta-text {
          font-size: 1.4rem;
          margin-bottom: 3rem;
          opacity: 0.95;
          line-height: 1.7;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
          font-weight: 300;
        }

        .rn-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 18px 50px;
          background: linear-gradient(135deg, var(--rn-secondary-color), var(--rn-gold-light));
          color: var(--rn-primary-color);
          text-decoration: none;
          border-radius: 35px;
          font-weight: 700;
          font-size: 1.2rem;
          transition: var(--rn-transition);
          box-shadow: 
            var(--rn-shadow-gold-intense),
            0 0 25px rgba(212, 175, 55, 0.4);
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
        }

        .rn-cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.5), 
            transparent);
          transition: left 0.7s;
        }

        .rn-cta-button:hover::before {
          left: 100%;
        }

        .rn-cta-button:hover {
          transform: translateY(-8px) scale(1.08);
          box-shadow: 
            var(--rn-shadow-gold-intense),
            0 15px 35px rgba(212, 175, 55, 0.5),
            0 0 30px rgba(212, 175, 55, 0.4);
        }

        /* Footer - Pleine largeur */
        .rn-footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
          color: white;
          text-align: center;
          padding: 50px 0;
          border-top: 1px solid rgba(212, 175, 55, 0.3);
          position: relative;
          width: 100%;
        }

        .rn-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            var(--rn-secondary-color), 
            transparent);
        }

        .rn-footer-content {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 20px;
        }

        .rn-footer-text {
          opacity: 0.9;
          font-size: 1rem;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        /* Animations */
        @keyframes rn-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rn-fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rn-shimmerGold {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes rn-pulseGolden {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes rn-floatGolden {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes rn-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        @keyframes rn-pulseIcon {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.3;
          }
        }

        /* Responsive - Largeur 100% maintenue */
        @media (max-width: 1024px) {
          .rn-subsidiaries-grid {
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .rn-hero-title {
            font-size: 3.5rem;
          }
          
          .rn-hero-subtitle {
            font-size: 1.3rem;
          }
          
          .rn-subsidiaries-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          
          .rn-section-title {
            font-size: 2.8rem;
          }
          
          .rn-cta-title {
            font-size: 2.8rem;
          }
          
          .rn-cta-text {
            font-size: 1.2rem;
          }

          .rn-card-header {
            padding: 30px 30px 20px;
          }

          .rn-card-body {
            padding: 25px 30px;
          }

          .rn-card-icon {
            width: 70px;
            height: 70px;
          }

          .rn-card-icon-glow {
            width: 80px;
            height: 80px;
          }

          .rn-container {
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .rn-hero-title {
            font-size: 2.8rem;
          }

          .rn-hero-subtitle {
            font-size: 1.1rem;
          }
          
          .rn-card-header {
            flex-direction: column;
            text-align: center;
            padding: 25px 20px 20px;
          }
          
          .rn-card-icon-wrapper {
            margin-right: 0;
            margin-bottom: 20px;
          }

          .rn-subsidiaries-grid {
            grid-template-columns: 1fr;
          }

          .rn-section-title {
            font-size: 2.3rem;
          }

          .rn-cta-title {
            font-size: 2.3rem;
          }

          .rn-cta-text {
            font-size: 1.1rem;
          }

          .rn-cta-button {
            padding: 16px 40px;
            font-size: 1.1rem;
          }

          .rn-container {
            padding: 0 10px;
          }
        }

        /* Garantir 100% de largeur sur tous les écrans */
        @media (min-width: 1920px) {
          .rn-container {
            max-width: 100%;
            padding: 0 40px;
          }
        }

        @media (min-width: 2560px) {
          .rn-container {
            max-width: 100%;
            padding: 0 60px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="rn-hero-section" id="rn-hero">
        <div className="rn-hero-content">
          <h1 className="rn-hero-title">Nos Filiales d'Excellence</h1>
          <p className="rn-hero-subtitle">
            Découvrez l'étendue de notre expertise à travers six secteurs d'activité spécialisés.
            Chaque filiale incarne notre engagement pour la qualité et l'innovation.
          </p>
        </div>
        <div className="rn-scroll-indicator">
          <a href="#rn-subsidiaries" className="rn-scroll-arrow">
            <ArrowRight size={20} style={{ transform: 'rotate(90deg)' }} />
          </a>
        </div>
      </section>

      {/* Subsidiaries Grid */}
      <section className="rn-subsidiaries-section" id="rn-subsidiaries">
        <div className="rn-container">
          <h2 className="rn-section-title">Nos Domaines d'Expertise</h2>
          <div className="rn-subsidiaries-grid">
            {subsidiaries.map((subsidiary, index) => (
              <div 
                key={subsidiary.title} 
                className="rn-subsidiary-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="rn-card-header">
                  <div className="rn-card-icon-wrapper">
                    <div className="rn-card-icon-glow"></div>
                    <div className="rn-card-icon">
                      {React.createElement(subsidiary.icon, { size: 36 })}
                    </div>
                  </div>
                  <h3 className="rn-card-title">{subsidiary.title}</h3>
                </div>
                <div className="rn-card-body">
                  <p className="rn-card-description">{subsidiary.description}</p>
                  <a href={subsidiary.link} className="rn-card-link">
                    Découvrir cette filiale
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rn-cta-section">
        <div className="rn-cta-content">
          <h2 className="rn-cta-title">Prêt à Collaborer ?</h2>
          <p className="rn-cta-text">
            Que vous soyez intéressé par une de nos filiales ou que vous souhaitiez 
            discuter d'un projet spécifique, notre équipe est à votre écoute pour 
            vous proposer des solutions sur mesure adaptées à vos besoins.
          </p>
          <a href="/contact" className="rn-cta-button">
            <MessageCircle size={20} />
            Contactez Notre Équipe
          </a>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default Subsidiaries;