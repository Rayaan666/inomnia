import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ContactHero from './contact/ContactHero.jsx';
import ContactExperience from './contact/ContactExperience.jsx';
import ContactFinalCTA from './contact/ContactFinalCTA.jsx';

export default function ContactPage() {
  useEffect(() => {
    // Dynamic SEO update
    document.title = 'Contact INOMNIA | Start an Experience | Dubai, UAE';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Get in touch with INOMNIA in Dubai. Let’s create something worth remembering. Submit your event, exhibition, or brand experience brief directly to our executive team.'
      );
    }

    // JSON-LD ContactPage Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'contact-seo-schema';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact INOMNIA EVENTS',
      'url': 'https://inomnia.ae/contact',
      'description': 'Contact INOMNIA EVENTS in Dubai, UAE for high-end corporate events, bespoke exhibition pavilions, live entertainment, and experiential activations.',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'INOMNIA EVENTS',
        'telephone': '+971556515998',
        'email': 'hello@inomnia.ae',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '5th floor 501-40 Horizon Building, Next to Dnata Travels, Port Saeed',
          'postOfficeBoxNumber': '118467',
          'addressLocality': 'Dubai',
          'addressCountry': 'AE'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '25.2532',
          'longitude': '55.3372'
        }
      }
    });

    const existing = document.getElementById('contact-seo-schema');
    if (existing) existing.remove();
    document.head.appendChild(schemaScript);

    // Scroll to top or handle hash
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
      const el = document.getElementById('contact-seo-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#02060B] text-white selection:bg-white selection:text-black">
      {/* Global Navigation */}
      <Navbar />

      {/* 3-SECTION CONTACT ARCHITECTURE */}
      <main>
        {/* SECTION 01 — HERO */}
        <ContactHero />

        {/* SECTION 02 — CONTACT EXPERIENCE */}
        <ContactExperience />

        {/* SECTION 03 — FINAL CTA */}
        <ContactFinalCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
