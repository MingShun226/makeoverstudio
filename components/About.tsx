import React from 'react';
import { TEAM } from '../constants';
import { PageView } from '../App';

interface AboutProps {
  preview?: boolean;
  onNavigate?: (page: PageView, category?: string) => void;
}

const About: React.FC<AboutProps> = ({ preview, onNavigate }) => {
  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold-400/30 hidden lg:block"></div>
            <div className="relative z-10 shadow-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/129/600/800"
                alt="Studio Interior"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase block mb-4">Welcome</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 mb-6 md:mb-8 leading-tight">
              Professional Makeup Artists with 5+ Years Experience
            </h2>
            <div className="space-y-4 md:space-y-6 text-stone-600 font-light leading-relaxed text-sm md:text-base">
              <p>
                We provide one-stop makeup service and can accept appointments 24/7. Our professional makeup artists have more than 5 years of service experience, ensuring you transform into a fresh and radiant version of yourself.
              </p>
              <p>
                Based in Kuala Lumpur & Selangor, we provide door-to-door makeup and hairdo services across Klang Valley & throughout Malaysia. Our artists combine your vision with their expertise, advice, and technical skills.
              </p>
            </div>
            {preview && onNavigate && (
               <button
               onClick={() => {
                 onNavigate('about');
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }}
               className="mt-8 md:mt-10 inline-block border-b border-stone-900 pb-1 text-xs uppercase tracking-widest hover:text-gold-400 hover:border-gold-400 transition-colors"
             >
               Meet the Team
             </button>
            )}
          </div>
        </div>

        {/* Team Section - Only shown if not in preview mode */}
        {!preview && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h3 className="text-4xl font-serif italic text-stone-900 mb-4">The Artists</h3>
              <p className="text-stone-500 font-light">Dedicated professionals with over 5 years of experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {TEAM.map((member) => (
                <div key={member.id} className="group">
                  <div className="overflow-hidden mb-6 aspect-[3/4] relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h4 className="text-2xl font-serif italic mb-1">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400 mb-4">{member.role}</p>
                  <p className="text-stone-600 font-light leading-relaxed max-w-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;