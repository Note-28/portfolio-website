
import React from 'react';
import { Terminal, TerminalLine } from './shared/Terminal';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-cyber-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me — "Behind the Bugs"</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="mb-6">
              I just wrapped up my B.Tech in Computer Science and dove headfirst into penetration testing.
              Why? Because legally breaking into things (with permission!) is cooler than pretending to enjoy frontend frameworks.
            </p>
            
            <Terminal title="about.sh" className="mb-6">
              <TerminalLine command>cat status.txt</TerminalLine>
              <TerminalLine delay={0.4}>
                <span className="text-cyber-yellow">STATUS:</span> Graduate, job-hunting in cybersecurity
              </TerminalLine>
              
              <TerminalLine command delay={0.8}>echo $LANGUAGES</TerminalLine>
              <TerminalLine delay={1.2}>
                <span className="text-cyber-blue">FLUENT IN:</span> Python, payloads, and painfully honest debug logs
              </TerminalLine>
              
              <TerminalLine command delay={1.6}>ls -la /etc/os-preferences</TerminalLine>
              <TerminalLine delay={2.0}>
                <span className="text-cyber-green">OS PREFERENCE:</span>
                <ul className="list-disc ml-6 mt-2">
                  <li>Linux (main)</li>
                  <li>Windows (games)</li>
                  <li>macOS (peer pressure)</li>
                </ul>
              </TerminalLine>
              
              <TerminalLine command delay={2.4}>cat fun_skills.txt</TerminalLine>
              <TerminalLine delay={2.8}>
                <span className="text-cyber-purple">FUN SKILL:</span> Reading error messages like ancient scrolls — then Googling better scrolls
              </TerminalLine>
            </Terminal>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-cyber-darkGray border border-cyber-gray rounded-md p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-cyber-green">Quick Facts</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">EDUCATION</div>
                  <div className="font-mono">B.Tech Computer Science</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400">FOCUS AREA</div>
                  <div className="font-mono">Penetration Testing & Security</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400">LOCATION</div>
                  <div className="font-mono">Shimla, India</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400">STATUS</div>
                  <div className="font-mono flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyber-green animate-pulse mr-2"></span>
                    Available for Work
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-cyber-gray">
                <div className="text-sm text-gray-400 mb-2">SECURITY FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Web Security", "Network Penetration", "CTF", "OSCP Prep"].map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-cyber-gray px-2 py-1 rounded text-cyber-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
