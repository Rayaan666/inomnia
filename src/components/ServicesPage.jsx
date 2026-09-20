import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ServiceModal from './ServiceModal.jsx';

import Hero from './Hero.jsx';
import OurServicesSection from './services/OurServicesSection.jsx';
import TheQuestionSection from './services/TheQuestionSection.jsx';

export default function ServicesPage() {
  const [activeModalService, setActiveModalService] = useState(null);

  useEffect(() => {
    // SEO Updates
    document.title = 'Experiential Services & Disciplines | INOMNIA EVENTS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore INOMNIA\'s complete experiential capabilities: Event Management, Exhibition Stand Design & Fabrication, Immersive Technology, Live Entertainment, and Bespoke Giveaways.'
      );
    }

    // Add JSON-LD Schema for SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'services-seo-schema';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'INOMNIA EVENTS - Experiential Services',
      'url': 'https://inomnia.ae/services',
      'logo': 'https://inomnia.ae/logo.png',
      'image': 'https://inomnia.ae/images/hero-editorial-event.png',
      'description': 'Premier event management, bespoke exhibition stand design, spatial technology, live entertainment, and luxury gifting agency.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dubai',
        'addressCountry': 'AE'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '25.2048',
        'longitude': '55.2708'
      },
      'telephone': '+971556515998',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Experiential Capabilities',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Corporate Event Management & Live Production',
              'description': 'End-to-end luxury corporate galas, award ceremonies, and high-impact conferences.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Exhibition Stand Design & Custom Fabrication',
              'description': 'Turnkey architectural pavilions and custom exhibition stands for major trade shows and global expos.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Immersive Event Technology & Interactive Content',
              'description': 'Kinetic LED, projection mapping, spatial audio, and interactive responsive brand activations.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Live Entertainment & Show Direction',
              'description': 'International talent curation, stage choreography, and atmospheric performances.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Luxury Executive Giveaways & Branded Merchandise',
              'description': 'Haute corporate gifting, bespoke packaging, and tactile branded keepsakes.'
            }
          }
        ]
      }
    });
    
    // Remove previous schema if exists
    const existing = document.getElementById('services-seo-schema');
    if (existing) existing.remove();
    document.head.appendChild(schemaScript);

    // Hash Scroll Handling
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const elem = document.getElementById(hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      const el = document.getElementById('services-seo-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#02060B] text-white selection:bg-[#19D8FF]/30 selection:text-white">
      {/* Global Navigation Header */}
      <Navbar />

      <main>
        {/* SECTION 1 — HERO (Editorial Hero matching About Page) */}
        <Hero id="services" />

        {/* SECTION 2 — OUR SERVICES (Warm Ivory Interactive Architectural Index) */}
        <OurServicesSection onSelectService={(slug) => setActiveModalService(slug)} />

        {/* SECTION 3 — EXISTING INQUIRY SECTION (Untouched) */}
        <TheQuestionSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Deep-Dive Modal if user requests detailed spec */}
      <ServiceModal
        serviceSlug={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </div>
  );
}
