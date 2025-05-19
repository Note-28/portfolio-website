import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-cyber-black/90 backdrop-blur-md py-2 shadow-md shadow-cyber-green/10' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-cyber-green font-bold text-xl">
            <span className="text-white">&lt;</span>Manan Punatu<span className="text-white">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="cyber-link text-sm">About</a>
            <a href="#projects" className="cyber-link text-sm">Projects</a>
            <a href="#skills" className="cyber-link text-sm">Skills</a>
            <a href="#side-quests" className="cyber-link text-sm">Side Quests</a>
            <a href="#resume" className="cyber-link text-sm">Resume</a>
            <a href="#contact" className="cyber-link text-sm">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-cyber-green transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-cyber-green transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-cyber-green transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden absolute left-0 right-0 transition-all duration-300 bg-cyber-darkGray border-t border-b border-cyber-gray',
          mobileMenuOpen ? 'top-full opacity-100' : '-top-96 opacity-0'
        )}>
          <div className="flex flex-col py-4 px-4 space-y-4">
            <a href="#about" className="cyber-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="cyber-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" className="cyber-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#side-quests" className="cyber-link" onClick={() => setMobileMenuOpen(false)}>Side Quests</a>
            <a href="#resume" className="cyber-link" onClick={() => setMobileMenuOpen(false)}>Resume</a>
            <a href="#contact" className="cyber-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
