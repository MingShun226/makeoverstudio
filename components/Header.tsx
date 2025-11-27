"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { WHATSAPP_LINK, SERVICE_CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  // Determine mobile button color
  const mobileButtonColor = mobileMenuOpen 
    ? 'text-stone-900' 
    : (isHome && !isScrolled ? 'text-white' : 'text-stone-900');

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || !isHome ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-100 py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <Link 
          href="/"
          className={`font-serif text-2xl md:text-3xl tracking-wide font-medium italic z-50 transition-colors ${
            isScrolled || mobileMenuOpen || !isHome ? 'text-stone-900' : 'text-stone-900 md:text-white'
          }`}
        >
          Makeover Studio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
            >
              <Link 
                href={link.path}
                className={`text-[11px] font-bold uppercase tracking-[0.25em] hover:text-gold-400 transition-all duration-300 relative group flex items-center gap-1 ${
                  isScrolled || !isHome ? 'text-stone-800' : 'text-white'
                } ${isActive(link.path) ? 'text-gold-400' : ''}`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={10} className="mt-[1px]" />}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`}></span>
              </Link>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                 <div 
                   className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 transform origin-top ${
                     dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                   }`}
                 >
                   <div className="bg-white shadow-xl border border-stone-100 w-56 py-3 flex flex-col">
                     {SERVICE_CATEGORIES.map((cat) => (
                       <Link
                         key={cat.id}
                         href={`/services?category=${cat.id}`}
                         onClick={() => setDropdownOpen(false)}
                         className="text-left px-6 py-3 text-[10px] uppercase tracking-widest text-stone-600 hover:bg-stone-50 hover:text-gold-400 transition-colors"
                       >
                         {cat.title}
                       </Link>
                     ))}
                   </div>
                 </div>
              )}
            </div>
          ))}
          
          <button 
            onClick={handleWhatsApp}
            className={`border px-6 py-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-gold-400 hover:border-gold-400 hover:text-white ${
               isScrolled || !isHome ? 'border-stone-900 text-stone-900' : 'border-white text-white'
            }`}
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 ${mobileButtonColor} transition-colors duration-300`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 
            <X size={24} /> : 
            <Menu size={24} />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-50 z-40 flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center max-h-[80vh] overflow-y-auto px-6">
          {navLinks.map((link) => (
            <div key={link.name}>
               <Link 
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif italic text-stone-900 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </Link>
              {link.hasDropdown && (
                <div className="flex flex-col space-y-3 mt-4 mb-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services?category=${cat.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs uppercase tracking-widest text-stone-500"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => {
              handleWhatsApp();
              setMobileMenuOpen(false);
            }}
            className="text-lg font-bold uppercase tracking-[0.25em] text-gold-400 border-b border-gold-400 pb-2 inline-block mx-auto mt-8"
          >
            Book on WhatsApp
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;