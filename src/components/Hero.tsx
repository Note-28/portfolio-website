
import { useEffect, useState } from 'react';
import { Terminal, TerminalLine } from './shared/Terminal';
import GlitchText from './shared/GlitchText';

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 select-none pointer-events-none">
        <div className="absolute top-20 left-10 text-xs">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="whitespace-nowrap font-mono">
              {Array(50).fill(0).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 right-10 text-xs">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="whitespace-nowrap font-mono">
              {Array(50).fill(0).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-sm md:text-base text-cyber-blue mb-2">## Home — "Welcome to the Glitch Zone"</h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span>Hey, I'm </span>
              <GlitchText text="Manan." className="text-cyber-green" />
            </h1>
            
            <p className="text-lg md:text-xl mb-6">
              I build things. Break them. Then build them again slightly better and pretend that was the plan.
              <br />
              <span className="text-cyber-blue">Cybersecurity enthusiast. CTF junkie.</span>
            </p>
            
            <p className="text-sm md:text-base text-gray-400 mb-6">
              <span className="text-cyber-yellow">Based in Shimla</span> — mountains, peace, and wildly unstable WiFi.
            </p>
            
            <div className="p-4 bg-cyber-gray/50 border-l-4 border-cyber-blue rounded mb-8">
              <p className="italic">
                <span className="font-bold">Disclaimer:</span> This is the <em>only</em> place where I'm being this casual. 
                Everywhere else — resumes, interviews, emails — it's strictly professional, no jokes (well, fewer jokes).
              </p>
            </div>
          </div>
          
          {showTerminal && (
            <Terminal title="visitor@glitchzone:~" className="mt-8 shadow-lg shadow-cyber-green/10 max-w-2xl mx-auto">
              <TerminalLine command delay={0.3}>whoami</TerminalLine>
              <TerminalLine delay={1.2}>visitor@glitch-zone</TerminalLine>
              <TerminalLine command delay={2.0}>cat skills.txt</TerminalLine>
              <TerminalLine delay={2.8}>Penetration Testing | Python | Security Tools | CTFs</TerminalLine>
              <TerminalLine command delay={3.6}>sudo ./connect.sh --purpose=hire</TerminalLine>
              <TerminalLine delay={4.4}>
                <span className="text-cyber-green">Connection established. Scroll down to learn more...</span>
              </TerminalLine>
            </Terminal>
          )}
          
          <div className="flex justify-center mt-12">
            <a 
              href="#about"
              className="animate-bounce text-cyber-green border border-cyber-green rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Scroll Down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
