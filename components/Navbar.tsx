import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    if (href === '#') {
       window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '/');
      return;
    }

    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100; // Height of navbar + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without jumping
      window.history.pushState(null, '', href);
    }
    
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <nav 
          className={`
            transition-all duration-500 ease-in-out
            ${scrolled || mobileMenuOpen ? 'w-full max-w-4xl bg-white/90 backdrop-blur-xl shadow-lg border border-slate-200/50' : 'w-full max-w-5xl bg-transparent border-transparent'} 
            rounded-full px-6 py-3 flex justify-between items-center
          `}
        >
          <a 
            href="/" 
            onClick={(e) => handleLinkClick(e, '#')}
            className="font-bold text-lg tracking-tight text-slate-900 flex items-center gap-2 group"
          >
            <div className="bg-slate-900 text-white p-1.5 rounded-lg group-hover:bg-indigo-600 transition-colors">
              <Terminal size={18} />
            </div>
            <span className={`${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'} transition-opacity`}>Shivam<span className="text-indigo-600">.dev</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-colors transform hover:-translate-y-0.5 shadow-md"
            >
              Contact Me
            </a>
          </div>

          <button 
            className="md:hidden text-slate-900 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-6 md:hidden animate-in fade-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col space-y-6 text-center max-w-sm mx-auto">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-medium text-slate-800 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-100 w-full">
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="block w-full py-4 bg-indigo-600 text-white text-lg font-medium rounded-2xl shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};