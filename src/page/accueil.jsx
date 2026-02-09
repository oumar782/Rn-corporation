// accueil.jsx
import Hero from '../Composant/Hero';
import Expli from '../Composant/expli';

export function Accueil() {  // 使用命名导出
  return (
    <>
      <Hero/>
      <Expli/>
    </>
  );
}

export default Accueil;