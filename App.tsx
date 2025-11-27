import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BridalPage from './components/BridalPage';
import ROMPage from './components/ROMPage';
import PersonalPage from './components/PersonalPage';
import SEO from './components/SEO';
import { CategoryId } from './types';

export type PageView = 'home' | 'about' | 'services' | 'bridal' | 'rom' | 'personal' | 'gallery' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [currentServiceCategory, setCurrentServiceCategory] = useState<CategoryId | undefined>(undefined);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // URL Query Param Management for Basic Routing support
  useEffect(() => {
    // Check initial URL params on load
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') as PageView;
    const cat = params.get('category') as CategoryId;

    if (page && ['home', 'about', 'services', 'bridal', 'rom', 'personal', 'gallery', 'contact'].includes(page)) {
      setCurrentPage(page);
    }
    if (cat) {
      setCurrentServiceCategory(cat);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (page: PageView, category?: string) => {
    if (page === currentPage && !category) return;
    
    // Update URL history without reloading
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    if (category) {
      url.searchParams.set('category', category);
    } else {
      url.searchParams.delete('category');
    }
    window.history.pushState({}, '', url);

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      if (page === 'services' && category) {
        setCurrentServiceCategory(category as CategoryId);
      }
      setIsTransitioning(false);
    }, 300); // Allow exit animation
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <SEO
              title="Makeup Artist Klang Valley"
              description="One-stop beauty solution in Malaysia. Professional bridal makeup, ROM hairdo, and personal styling services."
            />
            <Hero onNavigate={handleNavigate} />
            <About preview onNavigate={handleNavigate} />
            <Services preview onNavigate={handleNavigate} />
            <Testimonials />
          </>
        );
      case 'about':
        return (
          <>
            <SEO
              title="About Us"
              description="Meet our team of senior makeup artists. Over 5 years of experience serving clients in Kuala Lumpur and Selangor."
              path="?page=about"
            />
            <About onNavigate={handleNavigate} />
          </>
        );
      case 'services':
        return (
          <>
            <SEO
              title="Services & Packages"
              description="Explore our Bridal, ROM, and Personal Makeover packages. Competitive rates for high-end styling."
              path="?page=services"
            />
            <Services onNavigate={handleNavigate} />
          </>
        );
      case 'bridal':
        return (
          <>
            <SEO
              title="Bridal Makeup & Hairdo"
              description="Professional bridal makeup and hairdo services for your special day. Packages starting from RM 800."
              path="?page=bridal"
            />
            <BridalPage />
          </>
        );
      case 'rom':
        return (
          <>
            <SEO
              title="ROM & Solemnisation Makeup"
              description="Registration of Marriage makeup and hairdo services. Perfect for intimate celebrations."
              path="?page=rom"
            />
            <ROMPage />
          </>
        );
      case 'personal':
        return (
          <>
            <SEO
              title="Personal Makeover Services"
              description="Professional makeup for events, photoshoots, and special occasions. Transform your look today."
              path="?page=personal"
            />
            <PersonalPage />
          </>
        );
      case 'gallery':
        return (
          <>
            <SEO
              title="Portfolio Gallery"
              description="View our recent works including bridal portraits, editorial shoots, and natural makeovers."
              path="?page=gallery"
            />
            <Gallery />
          </>
        );
      case 'contact':
        return (
          <>
            <SEO
              title="Contact Us"
              description="Book your appointment today. Door-to-door service available 24/7 across Klang Valley."
              path="?page=contact"
            />
            <Contact />
          </>
        );
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />

        <main className={`flex-grow transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderPage()}
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </HelmetProvider>
  );
}

export default App;