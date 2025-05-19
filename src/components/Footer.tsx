
import React from 'react';
import GlitchText from './shared/GlitchText';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-cyber-darkGray border-t border-cyber-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-cyber-green">Footer — "EOF"</h2>
          
          <p className="mb-6">
            This is the only place I act this casual. Everywhere else I keep it sharp, professional, and appropriately caffeinated.
          </p>
          
          <div className="flex flex-wrap justify-between items-center pt-4 border-t border-cyber-gray">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {year} <GlitchText text="Manan Punatu" inline className="text-cyber-blue" /> — All bugs are features. Especially the undocumented ones.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="cyber-link text-sm">Home</a>
              <a href="#about" className="cyber-link text-sm">About</a>
              <a href="#projects" className="cyber-link text-sm">Projects</a>
              <a href="#contact" className="cyber-link text-sm">Contact</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block px-3 py-1 bg-cyber-black text-xs text-cyber-green border border-cyber-green font-mono rounded">
              <span className="mr-1">Status:</span>
              <span className="inline-block w-2 h-2 rounded-full bg-cyber-green animate-pulse mr-1"></span>
              <span>Server Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
