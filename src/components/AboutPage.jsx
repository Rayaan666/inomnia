import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import DreamToReality from './DreamToReality.jsx';
import MissionVision from './MissionVision.jsx';
import WhyChooseInomnia from './WhyChooseInomnia.jsx';
import CTA from './CTA.jsx';
import Footer from './Footer.jsx';

export default function AboutPage() {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const elem = document.getElementById(hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-inomnia-black text-white">
      <Navbar />
      <Hero id="about" />
      <MissionVision />
      <DreamToReality />
      <WhyChooseInomnia />
      <CTA variant="about" />
      <Footer />
    </main>
  );
}
