
import React from 'react';
import { Terminal, TerminalLine } from './shared/Terminal';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-mono">{name}</span>
        <span className="text-xs text-cyber-green">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress opacity-0"
          style={{ 
            width: `${percentage}%`,
            animation: `fade-in-up 0.6s ease-out forwards ${delay}s`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const languages = [
    { name: "Python", percentage: 95 },
    { name: "Java", percentage: 75 },
    { name: "C", percentage: 65 },
    { name: "HTML/CSS/JavaScript", percentage: 65 },
    { name: "MySQL", percentage: 75 },
  ];

  const securityTools = [
    { name: "Wireshark", percentage: 85 },
    { name: "Nmap", percentage: 80 },
    { name: "Metasploit", percentage: 70 },
    { name: "Burp Suite", percentage: 95 },
    { name: "Ghidra", percentage: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-cyber-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills — "Things I Can Actually Do"</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyber-blue">Languages</h3>
            <div className="space-y-6">
              {languages.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.1 * index}
                />
              ))}
            </div>

            <h3 className="text-xl font-bold mt-10 mb-6 text-cyber-blue">Security Tools</h3>
            <div className="space-y-6">
              {securityTools.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.1 * (index + languages.length)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Terminal title="skills.sh" className="h-full">
              <TerminalLine command>cat security_tools.txt</TerminalLine>
              <TerminalLine delay={0.4}>
                <div className="mb-4">
                  <span className="text-cyber-green font-bold">Network:</span> Wireshark, Nmap
                </div>
                <div className="mb-4">
                  <span className="text-cyber-green font-bold">Exploitation:</span> Metasploit, Burp Suite
                </div>
                <div className="mb-4">
                  <span className="text-cyber-green font-bold">Forensics:</span> Sleuth Kit, Ghidra, Autopsy
                </div>
                <div className="mb-4">
                  <span className="text-cyber-green font-bold">Utilities:</span> Postman
                </div>
              </TerminalLine>
              
              <TerminalLine command delay={1.0}>echo $CURRENT_GRIND</TerminalLine>
              <TerminalLine delay={1.4}>
                <ul className="list-disc ml-6 my-2 text-cyber-blue">
                  <li>Penetration testing</li>
                  <li>Exploit development</li>
                </ul>
              </TerminalLine>
              
              <TerminalLine command delay={2.0}>cat soft_skills.json</TerminalLine>
              <TerminalLine delay={2.4}>
                <div className="code-block">
                  <pre>
                    <span className="keyword">&#123;</span><br />
                    &nbsp;&nbsp;<span className="string">"skills"</span>: <span className="keyword">[</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Writing payloads"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Explaining them to humans"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Pretending not to cry during segmentation faults"</span><br />
                    &nbsp;&nbsp;<span className="keyword">]</span><br />
                    <span className="keyword">&#125;</span>
                  </pre>
                </div>
              </TerminalLine>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
