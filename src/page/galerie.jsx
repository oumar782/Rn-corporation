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
  Download,
  Camera,
  Music,
  Gamepad2,
  ShoppingBag,
  Hotel,
  Car,
  Plane,
  Banknote,
  Globe,
  Microscope,
  GraduationCap
} from "lucide-react";
import './galerie.css';

const OdevolvGalleryModifie = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    { name: "Tous", icon: Sparkles },
    { name: "Événementiel", icon: Calendar },
    { name: "Cosmétique", icon: Palette },
    { name: "Communication", icon: MessageCircle },
    { name: "Football", icon: Trophy },
    { name: "Restaurant", icon: Utensils },
    { name: "Mode", icon: ShoppingBag },
    { name: "Sport", icon: Gamepad2 },
    { name: "Musique", icon: Music },
    { name: "Technologie", icon: Zap },
    { name: "Immobilier", icon: Building },
    { name: "Automobile", icon: Car }
  ];

  // Données des projets - 20 réalisations
  const galleryItems = [
    { 
      id: 1,
      category: "Événementiel", 
      title: "Gala d'entreprise 2024",
      description: "Organisation complète d'un gala prestigieux pour 500 invités avec scénographie immersive.",
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
      achievements: ["+200% engagement client", "100% satisfaction", "Retour sur investissement exceptionnel", "Couverture médiatique internationale"]
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
      achievements: ["+300% ventes premier mois", "1M+ d'impressions digitales", "Prix de l'innovation", "Meilleur lancement de l'année"]
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
      achievements: ["+150% d'engagement", "2M+ de reach", "ROI de 450%", "Prix de la meilleure campagne"]
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
      achievements: ["5M de téléspectateurs", "12 jeunes talents repérés", "Sponsoring record", "Meilleur événement sportif"]
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
      achievements: ["Notation parfaite 10/10", "100% réservation", "Prix de l'excellence", "Recommandation 5 étoiles"]
    },
    { 
      id: 6,
      category: "Mode", 
      title: "Défilé Haute Couture",
      description: "Présentation exclusive de la collection automne-hiver avec mannequins internationaux.",
      longDescription: "Un défilé qui a redéfini les standards de la mode avec une scénographie révolutionnaire et des créations uniques. Nous avons orchestré chaque détail pour créer une expérience mémorable.",
      link: "/mode/defile-haute-couture",
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Octobre 2024",
        location: "Milan, Italie",
        duration: "2 mois",
        participants: "30 mannequins",
        budget: "Exceptionnel"
      },
      achievements: ["Couverture Vogue", "+500% ventes", "Tendance mondiale"]
    },
    { 
      id: 7,
      category: "Sport", 
      title: "Marathon international",
      description: "Organisation d'un marathon avec 10 000 participants et retransmission mondiale.",
      longDescription: "Événement sportif majeur avec une logistique complexe et une sécurité optimale pour tous les participants. Une réussite complète.",
      link: "/sport/marathon-international",
      images: [
        "https://images.unsplash.com/photo-1552674605-db6ffd8facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Mai 2024",
        location: "New York, USA",
        duration: "6 mois",
        participants: "10 000 coureurs",
        budget: "Important"
      },
      achievements: ["Record participation", "0 incident", "Retransmission 50 pays"]
    },
    { 
      id: 8,
      category: "Musique", 
      title: "Festival de musique",
      description: "Festival 3 jours avec 50 artistes internationaux et 100 000 spectateurs.",
      longDescription: "Production d'un festival majeur avec scènes multiples, hébergement et sécurité optimisés pour une expérience inoubliable.",
      link: "/musique/festival",
      images: [
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Juillet 2024",
        location: "Coachella, USA",
        duration: "8 mois",
        participants: "100 000 spectateurs",
        budget: "Majeur"
      },
      achievements: ["Billetterie sold-out", "Streaming record", "Médias internationaux"]
    },
    { 
      id: 9,
      category: "Technologie", 
      title: "Conférence Tech Summit",
      description: "Événement tech avec 200 startups et 5 000 professionnels du secteur.",
      longDescription: "Organisation d'un sommet technologique majeur avec keynotes, workshops et networking de qualité.",
      link: "/technologie/tech-summit",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Novembre 2024",
        location: "San Francisco, USA",
        duration: "3 jours",
        participants: "5 000 professionnels",
        budget: "Élevé"
      },
      achievements: ["200 startups", "50 partenaires", "20M$ investissements"]
    },
    { 
      id: 10,
      category: "Immobilier", 
      title: "Lancement de résidence",
      description: "Marketing et lancement d'une résidence de luxe avec 100 appartements.",
      longDescription: "Stratégie marketing complète pour le lancement d'un projet immobilier haut de gamme avec succès total.",
      link: "/immobilier/residence-luxe",
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Septembre 2024",
        location: "Monaco",
        duration: "1 an",
        participants: "100 acheteurs",
        budget: "Prestige"
      },
      achievements: ["100% vendu", "Prix records", "Clientèle internationale"]
    },
    { 
      id: 11,
      category: "Automobile", 
      title: "Lancement véhicule électrique",
      description: "Événement de lancement mondial pour un nouveau véhicule électrique premium.",
      longDescription: "Production d'un événement spectaculaire pour révéler un véhicule révolutionnaire avec invités VIP mondiaux.",
      link: "/automobile/lancement-ve",
      images: [
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80",
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Juin 2024",
        location: "Los Angeles, USA",
        duration: "4 mois",
        participants: "300 VIP",
        budget: "Exceptionnel"
      },
      achievements: ["30 000 précommandes", "Couverture mondiale", "Innovation award"]
    },
    { 
      id: 12,
      category: "Événementiel", 
      title: "Mariage royal",
      description: "Organisation complète d'un mariage royal avec 2 000 invités et sécurité maximale.",
      longDescription: "Coordination d'un événement historique avec protocole strict, sécurité renforcée et luxe absolu.",
      link: "/evenementiel/mariage-royal",
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Août 2024",
        location: "Londres, UK",
        duration: "1 an",
        participants: "2 000 invités",
        budget: "Royal"
      },
      achievements: ["Sécurité parfaite", "Médias mondiaux", "Référence internationale"]
    },
    { 
      id: 13,
      category: "Cosmétique", 
      title: "Ligne biologique exclusive",
      description: "Développement et lancement d'une ligne cosmétique 100% biologique.",
      longDescription: "Création d'une gamme innovante respectueuse de l'environnement avec packaging écologique.",
      link: "/cosmetique/bio-exclusive",
      images: [
        "https://images.unsplash.com/photo-1556228578-9c360e1d458b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1596703923538-b6d4bb0a44ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Mars 2024",
        location: "Zurich, Suisse",
        duration: "18 mois",
        participants: "Labo 20 experts",
        budget: "Innovation"
      },
      achievements: ["Certification bio", "+400% ventes", "Prix écologie"]
    },
    { 
      id: 14,
      category: "Communication", 
      title: "Rebranding global",
      description: "Refonte complète de l'identité visuelle d'une multinationale.",
      longDescription: "Transformation profonde de l'image de marque avec nouvelle stratégie de communication.",
      link: "/communication/rebranding",
      images: [
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Janvier 2024",
        location: "Global",
        duration: "9 mois",
        participants: "100 pays",
        budget: "Significatif"
      },
      achievements: ["Notoriété +200%", "ROI 500%", "Case study Harvard"]
    },
    { 
      id: 15,
      category: "Football", 
      title: "Sponsoring stade",
      description: "Négociation et gestion de partenariat naming pour un stade majeur.",
      longDescription: "Stratégie complète de sponsoring avec activation marketing maximale.",
      link: "/football/sponsoring-stade",
      images: [
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1577223625818-2c7d0e2ee41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
      ],
      details: {
        date: "Février 2024",
        location: "Madrid, Espagne",
        duration: "2 ans",
        participants: "Partenaire majeur",
        budget: "Millions"
      },
      achievements: ["Visibilité maximale", "ROI 300%", "Partnership award"]
    },
    { 
      id: 16,
      category: "Restaurant", 
      title: "Ouverture gastronomique",
      description: "Création et lancement d'un restaurant 3 étoiles Michelin.",
      longDescription: "Direction complète du projet de création d'un établissement gastronomique d'exception.",
      link: "/restaurant/ouverture-3etoiles",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Avril 2024",
        location: "Tokyo, Japon",
        duration: "18 mois",
        participants: "Chef étoilé",
        budget: "Excellence"
      },
      achievements: ["3 étoiles", "Liste d'attente 1 an", "Prix design"]
    },
    { 
      id: 17,
      category: "Mode", 
      title: "Collaboration artistique",
      description: "Collection capsule avec artiste contemporain renommé.",
      longDescription: "Fusion entre mode et art contemporain pour une collection unique et limitée.",
      link: "/mode/collaboration-art",
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Mai 2024",
        location: "Paris, France",
        duration: "6 mois",
        participants: "Artiste célèbre",
        budget: "Créatif"
      },
      achievements: ["Édition limitée", "Vendu en 24h", "Exposition musée"]
    },
    { 
      id: 18,
      category: "Sport", 
      title: "Compétition e-sport",
      description: "Tournoi e-sport avec 1M€ de prize pool et streaming mondial.",
      longDescription: "Organisation d'un événement e-sport majeur avec production broadcast de qualité.",
      link: "/sport/esport-tournament",
      images: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Octobre 2024",
        location: "Séoul, Corée",
        duration: "3 jours",
        participants: "100 équipes",
        budget: "Majeur"
      },
      achievements: ["10M viewers", "Sponsors premium", "Media value 5M€"]
    },
    { 
      id: 19,
      category: "Musique", 
      title: "Tournée mondiale",
      description: "Production complète d'une tournée internationale pour artiste pop.",
      longDescription: "Gestion logistique et production d'une tournée dans 30 pays avec scénographie innovante.",
      link: "/musique/tournee-mondiale",
      images: [
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "2023-2024",
        location: "30 pays",
        duration: "18 mois",
        participants: "Artiste A-list",
        budget: "Colossal"
      },
      achievements: ["2M spectateurs", "Revenue record", "Production award"]
    },
    { 
      id: 20,
      category: "Technologie", 
      title: "Salon innovation",
      description: "Salon B2B avec 500 exposants et 20 000 visiteurs professionnels.",
      longDescription: "Organisation d'un salon leader dans le secteur technologique avec conférences et networking.",
      link: "/technologie/salon-innovation",
      images: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      details: {
        date: "Novembre 2024",
        location: "Berlin, Allemagne",
        duration: "4 jours",
        participants: "20 000 visiteurs",
        budget: "Important"
      },
      achievements: ["500 exposants", "95% satisfaction", "Édition record"]
    }
  ];

  const filteredItems = selectedFilter === "Tous"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.classList.add('odevolv-modifie-modal-open');
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('odevolv-modifie-modal-open');
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
    <div className="odevolv-modifie">
      {/* Hero Section */}
      <section className="odevolv-modifie-hero">
        <div className="odevolv-modifie-hero-background">
          <div className="odevolv-modifie-hero-gradient"></div>
          <div className="odevolv-modifie-hero-pattern"></div>
        </div>
        <div className="odevolv-modifie-hero-content">
          <div className="odevolv-modifie-hero-text">
            <div className="odevolv-modifie-hero-badge">
              <Building size={18} />
              <span>Odevolv Group · Excellence depuis 2010</span>
            </div>
            <h1 className="odevolv-modifie-hero-title">
              Galerie d'Excellence <span className="odevolv-modifie-hero-underline">Odevolv</span>
            </h1>
            <p className="odevolv-modifie-hero-description">
              Découvrez l'étendue de notre savoir-faire à travers 20 réalisations 
              exceptionnelles qui marquent les esprits. Chaque projet est une promesse 
              d'excellence et d'innovation dans nos 12 domaines d'expertise.
            </p>
            <div className="odevolv-modifie-hero-stats">
              <div className="odevolv-modifie-stat">
                <div className="odevolv-modifie-stat-icon">
                  <Target size={22} />
                </div>
                <div className="odevolv-modifie-stat-content">
                  <span className="odevolv-modifie-stat-number">200+</span>
                  <span className="odevolv-modifie-stat-label">Projets d'exception</span>
                </div>
              </div>
              <div className="odevolv-modifie-stat">
                <div className="odevolv-modifie-stat-icon">
                  <TrendingUp size={22} />
                </div>
                <div className="odevolv-modifie-stat-content">
                  <span className="odevolv-modifie-stat-number">99%</span>
                  <span className="odevolv-modifie-stat-label">Satisfaction client</span>
                </div>
              </div>
              <div className="odevolv-modifie-stat">
                <div className="odevolv-modifie-stat-icon">
                  <Zap size={22} />
                </div>
                <div className="odevolv-modifie-stat-content">
                  <span className="odevolv-modifie-stat-number">12</span>
                  <span className="odevolv-modifie-stat-label">Domaines experts</span>
                </div>
              </div>
            </div>
          </div>
          <div className="odevolv-modifie-hero-visual">
            <div className="odevolv-modifie-visual-card odevolv-modifie-card-1">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Événement" />
              <div className="odevolv-modifie-card-badge">Événementiel</div>
            </div>
            <div className="odevolv-modifie-visual-card odevolv-modifie-card-2">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Communication" />
              <div className="odevolv-modifie-card-badge">Communication</div>
            </div>
            <div className="odevolv-modifie-visual-card odevolv-modifie-card-3">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Sport" />
              <div className="odevolv-modifie-card-badge">Sport</div>
            </div>
            <div className="odevolv-modifie-visual-card odevolv-modifie-card-4">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Mode" />
              <div className="odevolv-modifie-card-badge">Mode</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="odevolv-modifie-filters">
        <div className="odevolv-modifie-filters-container">
          <div className="odevolv-modifie-filters-header">
            <h2 className="odevolv-modifie-filters-title">Nos 12 Domaines d'Expertise</h2>
            <p className="odevolv-modifie-filters-subtitle">
              Filtrez par spécialité pour découvrir nos 20 réalisations exceptionnelles
            </p>
          </div>
          <div className="odevolv-modifie-filters-grid">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.name}
                  className={`odevolv-modifie-filter-button ${selectedFilter === filter.name ? 'odevolv-modifie-filter-active' : ''}`}
                  onClick={() => setSelectedFilter(filter.name)}
                >
                  <div className="odevolv-modifie-filter-icon-wrapper">
                    <div className="odevolv-modifie-filter-icon">
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <span className="odevolv-modifie-filter-text">{filter.name}</span>
                  <div className="odevolv-modifie-filter-indicator">
                    <ChevronRight size={20} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="odevolv-modifie-gallery-section">
        <div className="odevolv-modifie-gallery-container">
          <div className="odevolv-modifie-gallery-header">
            <div className="odevolv-modifie-gallery-header-content">
              <h2 className="odevolv-modifie-gallery-title">
                <span className="odevolv-modifie-gallery-title-accent">20</span> Réalisations
                <span className="odevolv-modifie-gallery-title-underline">Odevolv Excellence</span>
              </h2>
              <p className="odevolv-modifie-gallery-subtitle">
                {selectedFilter === "Tous" 
                  ? "Découvrez l'ensemble de nos 20 projets marquants à travers le monde" 
                  : `Projets ${selectedFilter} · ${filteredItems.length} réalisation${filteredItems.length > 1 ? 's' : ''} exceptionnelle${filteredItems.length > 1 ? 's' : ''}`}
              </p>
            </div>
          </div>
          <div className="odevolv-modifie-gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={`${item.title}-${index}`} 
                className="odevolv-modifie-gallery-item"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="odevolv-modifie-gallery-item-inner">
                  <div className="odevolv-modifie-item-image">
                    <img src={item.images[0]} alt={item.title} />
                    <div className="odevolv-modifie-item-overlay">
                      <div className="odevolv-modifie-overlay-content">
                        <span className="odevolv-modifie-item-category">
                          <Award size={16} />
                          {item.category}
                        </span>
                        <h3 className="odevolv-modifie-item-title">{item.title}</h3>
                        <p className="odevolv-modifie-item-description">{item.description}</p>
                        <button 
                          onClick={() => handleProjectClick(item)} 
                          className="odevolv-modifie-item-link"
                        >
                          <span>Découvrir le projet</span>
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
            <div className="odevolv-modifie-gallery-footer">
              <div className="odevolv-modifie-gallery-count">
                <Users size={22} />
                <span>{filteredItems.length} projets sur 20 présentés</span>
              </div>
              <button className="odevolv-modifie-view-all">
                <span>Voir les 20 projets complets</span>
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal pour les projets - BOUTONS AGRANDIS */}
      {selectedProject && (
        <div className="odevolv-modifie-modal-overlay" onClick={closeModal}>
          <div className="odevolv-modifie-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header du modal avec BOUTON FERMER AGRANDI */}
            <div className="odevolv-modifie-modal-header">
              <div className="odevolv-modifie-modal-header-content">
                <span className="odevolv-modifie-modal-category">
                  <Award size={16} />
                  {selectedProject.category}
                </span>
                <h2 className="odevolv-modifie-modal-title">{selectedProject.title}</h2>
              </div>
              <button 
                className="odevolv-modifie-modal-close" 
                onClick={closeModal}
                aria-label="Fermer le modal"
              >
                <X size={32} />
              </button>
            </div>

            {/* Contenu du modal */}
            <div className="odevolv-modifie-modal-body">
              {/* Carrousel d'images avec BOUTONS NAVIGATION AGRANDIS */}
              <div className="odevolv-modifie-modal-carousel">
                <div className="odevolv-modifie-carousel-main">
                  <button 
                    className="odevolv-modifie-carousel-nav odevolv-modifie-carousel-prev" 
                    onClick={prevImage}
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={36} />
                  </button>
                  
                  <div className="odevolv-modifie-carousel-image">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    />
                    <div className="odevolv-modifie-carousel-counter">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                  
                  <button 
                    className="odevolv-modifie-carousel-nav odevolv-modifie-carousel-next" 
                    onClick={nextImage}
                    aria-label="Image suivante"
                  >
                    <ChevronRightIcon size={36} />
                  </button>
                </div>
                
                {/* Miniatures avec BOUTONS AGRANDIS */}
                <div className="odevolv-modifie-carousel-thumbnails">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      className={`odevolv-modifie-carousel-thumbnail ${index === currentImageIndex ? 'odevolv-modifie-thumbnail-active' : ''}`}
                      onClick={() => goToImage(index)}
                      aria-label={`Voir l'image ${index + 1}`}
                    >
                      <img src={image} alt={`Miniature ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Détails du projet */}
              <div className="odevolv-modifie-modal-details">
                <div className="odevolv-modifie-modal-description">
                  <h3>À propos de ce projet</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="odevolv-modifie-modal-info-grid">
                  <div className="odevolv-modifie-info-item">
                    <div className="odevolv-modifie-info-icon">
                      <Calendar size={20} />
                    </div>
                    <div className="odevolv-modifie-info-content">
                      <span className="odevolv-modifie-info-label">Date</span>
                      <span className="odevolv-modifie-info-value">{selectedProject.details.date}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-modifie-info-item">
                    <div className="odevolv-modifie-info-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="odevolv-modifie-info-content">
                      <span className="odevolv-modifie-info-label">Localisation</span>
                      <span className="odevolv-modifie-info-value">{selectedProject.details.location}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-modifie-info-item">
                    <div className="odevolv-modifie-info-icon">
                      <Clock size={20} />
                    </div>
                    <div className="odevolv-modifie-info-content">
                      <span className="odevolv-modifie-info-label">Durée</span>
                      <span className="odevolv-modifie-info-value">{selectedProject.details.duration}</span>
                    </div>
                  </div>
                  
                  <div className="odevolv-modifie-info-item">
                    <div className="odevolv-modifie-info-icon">
                      <UsersIcon size={20} />
                    </div>
                    <div className="odevolv-modifie-info-content">
                      <span className="odevolv-modifie-info-label">Participants</span>
                      <span className="odevolv-modifie-info-value">{selectedProject.details.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Réalisations */}
                <div className="odevolv-modifie-modal-achievements">
                  <h3>Nos réalisations</h3>
                  <div className="odevolv-modifie-achievements-grid">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="odevolv-modifie-achievement">
                        <div className="odevolv-modifie-achievement-icon">
                          <Zap size={18} />
                        </div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions avec BOUTONS AGRANDIS */}
                <div className="odevolv-modifie-modal-actions">
                  <button 
                    className="odevolv-modifie-action-btn odevolv-modifie-action-primary"
                    aria-label="Visiter le projet"
                  >
                    <ExternalLink size={22} />
                    <span>Visiter le projet</span>
                  </button>
                  <button 
                    className="odevolv-modifie-action-btn odevolv-modifie-action-secondary"
                    aria-label="Sauvegarder le projet"
                  >
                    <Heart size={22} />
                    <span>Sauvegarder</span>
                  </button>
                  <button 
                    className="odevolv-modifie-action-btn odevolv-modifie-action-secondary"
                    aria-label="Partager le projet"
                  >
                    <Share2 size={22} />
                    <span>Partager</span>
                  </button>
                  <button 
                    className="odevolv-modifie-action-btn odevolv-modifie-action-secondary"
                    aria-label="Télécharger le PDF"
                  >
                    <Download size={22} />
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

export default OdevolvGalleryModifie;