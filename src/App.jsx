import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // <-- IMPORTS MANQUANTS
import Header from './Composant/Header';
import Accueil from './page/accueil';
import Footer from './Composant/Footer';
import Propos from './page/about';
import Filiales from './page/filiales';
import Galerie from './page/galerie';
import New from './page/actualite';
import Contact from './page/contact';

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Redirection de la racine vers /Accueil */}
        <Route path="/" element={<Navigate to="/Accueil" replace />} />

        {/* Route pour la page Accueil */}
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/A-propos-de-nous" element={<Propos />} />
        <Route path="/Nos-filiales" element={<Filiales />} />
        <Route path="/Notre-galerie" element={<Galerie />} />
        <Route path="/Nos-actualités" element={<New />} />
        <Route path="/Nos-contacts" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
