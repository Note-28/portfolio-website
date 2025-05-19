import React, { useEffect, useRef, useState } from 'react';
import GlitchText from './shared/GlitchText';

const SideQuests = () => {
  const ctfSectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  
  useEffect(() => {
    // Add interactive hover effect to CTF achievements
    const ctfItems = ctfSectionRef.current?.querySelectorAll('.ctf-item');
    
    ctfItems?.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('bg-cyber-gray/30');
        item.classList.add('scale-105');
      });
      
      item.addEventListener('mouseleave', () => {
        item.classList.remove('bg-cyber-gray/30');
        item.classList.remove('scale-105');
      });
    });
    
    // Add interactive cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid rgba(74, 255, 145, 0.7)';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'width 0.2s, height 0.2s, border 0.2s';
    document.body.appendChild(cursor);
    
    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    const enlargeCursor = () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.border = '2px solid rgba(88, 166, 255, 0.7)';
    };
    
    const resetCursor = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.border = '2px solid rgba(74, 255, 145, 0.7)';
    };
    
    document.addEventListener('mousemove', updateCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, .ctf-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', enlargeCursor);
      el.addEventListener('mouseleave', resetCursor);
    });
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', enlargeCursor);
        el.removeEventListener('mouseleave', resetCursor);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <section id="side-quests" className="py-20 bg-cyber-darkGray relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Side Quests — "Stuff That Keeps Me Interesting"</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-cyber-gray/20 border border-cyber-gray rounded-lg p-6" ref={ctfSectionRef}>
            <h3 className="text-xl font-bold mb-6 text-cyber-green">
              <GlitchText text="CTFs — Digital Adrenaline Rush" inline />
            </h3>
            
            <p className="mb-6">
              Reverse engineering, forensics, crypto — CTFs are where I get my dopamine.
            </p>
            
            <div className="mb-6 p-4 bg-cyber-black rounded-md border border-cyber-blue ctf-item transition-all duration-300">
              <div className="text-lg font-bold text-cyber-blue mb-2">
                Top 50 @ NCIIPC-AICTE Pentathon 2025
              </div>
              <p className="text-sm">
                22,000+ participants. Sleep was optional. Pride wasn't.
              </p>
            </div>
            
            <div className="p-4 bg-cyber-black rounded-md border border-cyber-green ctf-item transition-all duration-300">
              <div className="text-lg font-bold text-cyber-green mb-2">
                Recent favorite challenge:
              </div>
              <p className="text-sm">
                JWT bypass & cookie tampering on a login portal during Great AppSec Hackathon 2024.
              </p>
            </div>
          </div>
          
          <div className="bg-cyber-gray/20 border border-cyber-gray rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-cyber-blue">Photography — My Glitch-Free Zone</h3>
            
            <p className="mb-6">
              When I'm not chasing flags, I chase light.
              Photography keeps my creativity sharp and my CPU cool.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                className="aspect-square rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedImage({
                  src: '/uploads/snake.jpg',
                  alt: 'Close-up shot of a snake'
                })}
              >
                <img 
                  src="/uploads/snake.jpg" 
                  alt="Close-up shot of a snake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-square rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedImage({
                  src: '/uploads/tunnel.jpg',
                  alt: 'A railway track curves into a forest through an old stone tunnel'
                })}
              >
                <img 
                  src="/uploads/tunnel.jpg" 
                  alt="A railway track curves into a forest through an old stone tunnel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-cyber-gray/10 border border-cyber-gray rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-cyber-purple">Now — "What's Running in Foreground"</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="text-cyber-green mr-2">▶</div>
              <div>Completing labs at PortSwigger Web Security Academy</div>
            </li>
            <li className="flex items-start">
              <div className="text-cyber-blue mr-2">▶</div>
              <div>Preparing for OSCP</div>
            </li>
            <li className="flex items-start">
              <div className="text-cyber-yellow mr-2">▶</div>
              <div>Writing automation scripts for recon and vulnerability validation</div>
            </li>
            <li className="flex items-start">
              <div className="text-cyber-purple mr-2">▶</div>
              <div>Blogging soon-ish (yes, it'll live in the Glitch Zone)</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-cyber-gray/20 border border-cyber-gray rounded-lg p-4 max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 text-cyber-green text-2xl hover:text-cyber-blue transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="space-y-4">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-center">
                <p className="text-cyber-blue text-sm italic border-t border-cyber-gray/30 pt-3">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SideQuests;
