import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cyber-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact — "Ping Me (Professionally, Please)"</h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="mb-6">
            Looking for a role in cybersecurity. I bring curiosity, weird energy, and a legally safe level of chaos.
            Also open to collaborations, CTFs, and helping debug your roommate's WiFi (again — kidding… unless?)
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <a 
              href="mailto:mananpunatu28@gmail.com"
              className="cyberpunk-card flex items-center transition-all hover:translate-y-[-5px]"
            >
              <div className="bg-cyber-green/20 rounded-full p-3 mr-4">
                <Mail className="h-6 w-6 text-cyber-green" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-sm">mananpunatu28@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/manan-punatu-b07710208/"
              target="_blank"
              rel="noopener noreferrer"
              className="cyberpunk-card flex items-center transition-all hover:translate-y-[-5px]"
            >
              <div className="bg-cyber-blue/20 rounded-full p-3 mr-4">
                <Linkedin className="h-6 w-6 text-cyber-blue" />
              </div>
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <div className="text-sm">Manan Punatu</div>
              </div>
            </a>
          </div>
          
          <div className="mb-10">
            <a 
              href="https://github.com/Note-28"
              target="_blank"
              rel="noopener noreferrer"
              className="cyberpunk-card flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="bg-cyber-purple/20 rounded-full p-3 mr-4">
                  <Github className="h-6 w-6 text-cyber-purple" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">GitHub</div>
                  <div className="text-sm">Note-28</div>
                </div>
              </div>
              <div className="cyber-button">
                View Profile
              </div>
            </a>
          </div>
          
          <div className="bg-cyber-gray/30 border border-cyber-gray rounded-md p-6">
            <h3 className="text-xl font-bold mb-4 text-cyber-green">Ready to connect?</h3>
            <p className="mb-6">
              Feel free to reach out for job opportunities, collaboration ideas, or just to chat about cybersecurity and tech.
            </p>
            <a 
              href="mailto:mananpunatu28@gmail.com"
              className="cyber-button w-full text-center"
            >
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
