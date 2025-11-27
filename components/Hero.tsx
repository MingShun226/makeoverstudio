import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { PageView } from '../App';

interface HeroProps {
  onNavigate: (page: PageView, category?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const handleNavClick = (path: string) => {
    const page = (path === '/' ? 'home' : path.slice(1)) as PageView;
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/id/250/1920/1200")',
        }}
      >
        {/* Darker Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-white/90 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 animate-fade-in-up font-normal">
            Ready for Travel • Klang Valley & Malaysia
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 animate-fade-in-up delay-100 leading-tight px-4">
            Beauty on Demand
          </h1>
          <p className="text-white text-base md:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in-up delay-200 leading-relaxed px-4">
            Makeover Studio is a one-stop solution for all your beauty needs
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-md px-4">
            <button
              onClick={() => handleNavClick('/services')}
              className="bg-white text-stone-900 px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase hover:bg-stone-100 transition-all duration-300 shadow-lg"
            >
              BRIDAL PACKAGES
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-transparent text-white border-2 border-white px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} className="md:w-[18px] md:h-[18px]" />
              WHATSAPP
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;