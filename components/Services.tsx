import React, { useState, useEffect } from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { CategoryId } from '../types';
import { ArrowRight, Plus } from 'lucide-react';
import { PageView } from '../App';

interface ServicesProps {
  preview?: boolean;
  onNavigate?: (page: PageView, category?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ preview, onNavigate }) => {
  const handleNavClick = (path: string, category?: string) => {
    if (onNavigate) {
      const page = (path === '/' ? 'home' : path.slice(1)) as PageView;
      onNavigate(page, category);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const [activeCategory, setActiveCategory] = useState<CategoryId>('bridal');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category') as CategoryId;
    if (categoryParam && SERVICE_CATEGORIES.some(c => c.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, []);

  const activeData = SERVICE_CATEGORIES.find(c => c.id === activeCategory) || SERVICE_CATEGORIES[0];

  return (
    <section className="py-16 md:py-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {preview ? (
          // Preview Layout (Home Page)
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
              <div className="max-w-2xl">
                <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Our Services</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                  Bridal Makeup & Styling Packages
                </h2>
              </div>
              <button
                onClick={() => handleNavClick('/services')}
                className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gold-400 transition-all duration-300 mt-6 md:mt-0"
              >
                View All Packages <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {SERVICE_CATEGORIES.map((category) => {
                const coverImage = category.services[0]?.image;
                const startingPrice = category.services[0]?.price;

                return (
                  <button
                    key={category.id}
                    onClick={() => handleNavClick(`/${category.id}`)}
                    className="group cursor-pointer flex flex-col text-left"
                  >
                    <div className="relative overflow-hidden aspect-[2/1] md:aspect-[4/5] mb-6 md:mb-8 bg-stone-100">
                      <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-all duration-500 z-10"></div>
                      <img 
                        src={coverImage} 
                        alt={category.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-sm">
                        View Details
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-baseline mb-2 md:mb-3">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gold-500">
                          Category 0{SERVICE_CATEGORIES.indexOf(category) + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-serif italic text-stone-900 mb-2 md:mb-3 group-hover:text-gold-500 transition-colors">
                        {category.title}
                      </h3>
                      
                      <p className="text-stone-500 font-light text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                        {category.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                         <span className="text-stone-900 font-serif italic text-lg">
                           From {startingPrice.split(' ')[0]} {startingPrice.split(' ')[1]}
                         </span>
                         <ArrowRight size={16} className="text-stone-300 group-hover:text-gold-400 transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-12 text-center md:hidden">
               <button
                  onClick={() => handleNavClick('/services')}
                  className="inline-block border border-stone-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
                >
                  View All Services
                </button>
            </div>
          </>
        ) : (
          // Full Services Overview Page
          <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-stone-900 py-24 md:py-32">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 opacity-90"></div>
              <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Our Services</span>
                <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
                  Professional Makeup & Styling Services
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                  From bridal elegance to personal makeovers, we offer comprehensive beauty services across Klang Valley and Malaysia. Each service is tailored to enhance your natural beauty and confidence.
                </p>
              </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-20 bg-stone-50">
              <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                  Why Choose Makeover Studio?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-gold-400 text-4xl font-serif mb-4">5+</div>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-stone-900 mb-2">Years Experience</h3>
                    <p className="text-stone-600 font-light text-sm">Professional makeup artists with extensive industry experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-gold-400 text-4xl font-serif mb-4">24/7</div>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-stone-900 mb-2">Availability</h3>
                    <p className="text-stone-600 font-light text-sm">Accept appointments anytime to fit your schedule</p>
                  </div>
                  <div className="text-center">
                    <div className="text-gold-400 text-4xl font-serif mb-4">100%</div>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-stone-900 mb-2">Door-to-Door</h3>
                    <p className="text-stone-600 font-light text-sm">Mobile services across Klang Valley and Malaysia</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Categories Section */}
            <section className="py-24 md:py-32">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Explore Our Services</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
                    Choose Your Perfect Service
                  </h2>
                  <p className="text-stone-500 font-light max-w-2xl mx-auto text-lg">
                    Select a service category below to view detailed packages, pricing, and our portfolio of work
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {SERVICE_CATEGORIES.map((category) => {
                    const coverImage = category.services[0]?.image;
                    const startingPrice = category.services[0]?.price;

                    return (
                      <button
                        key={category.id}
                        onClick={() => handleNavClick(`/${category.id}`)}
                        className="group cursor-pointer flex flex-col text-left bg-white border border-stone-100 hover:border-gold-400 transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative overflow-hidden aspect-[4/5] bg-stone-100">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                          <img
                            src={coverImage}
                            alt={category.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute bottom-6 left-6 right-6 z-20">
                            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase block mb-2">
                              Category 0{SERVICE_CATEGORIES.indexOf(category) + 1}
                            </span>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">
                              {category.title}
                            </h3>
                          </div>
                        </div>

                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                          <p className="text-stone-600 font-light leading-relaxed mb-6 flex-grow">
                            {category.description}
                          </p>

                          <div className="border-t border-stone-100 pt-6 flex items-center justify-between">
                            <div>
                              <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Starting From</span>
                              <span className="text-xl font-serif text-stone-900">
                                {startingPrice.split(' ')[0]} {startingPrice.split(' ')[1]}
                              </span>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-stone-50 group-hover:bg-gold-400 flex items-center justify-center transition-all">
                              <ArrowRight size={20} className="text-stone-400 group-hover:text-white transition-colors" />
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-stone-900 text-white">
              <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to Book?</h2>
                <p className="text-white/80 text-lg mb-8 font-light">
                  Contact us today to discuss your beauty needs and schedule an appointment
                </p>
                <button
                  onClick={() => window.open('https://wa.me/60123456789', '_blank')}
                  className="bg-gold-400 text-white px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-500 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>WhatsApp Us Now</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;