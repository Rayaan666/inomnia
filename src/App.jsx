import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import WhatWeCreate from './components/WhatWeCreate.jsx';
import Testimonials from './components/Testimonials.jsx';
import OurPartners from './components/OurPartners.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import AboutPage from './components/AboutPage.jsx';

function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-inomnia-black text-white">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeCreate />
      <OurPartners />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default function App() {
  if (window.location.pathname === '/about') {
    return (
      <>
        <AboutPage />
        <WhatsAppButton />
      </>
    );
  }

  return <HomePage />;
}
