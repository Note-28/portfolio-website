
import React from 'react';
import { Download } from 'lucide-react';
import GlitchText from './shared/GlitchText';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-cyber-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Resume — "The Formal Documentation"</h2>
          
          <div className="bg-cyber-gray/20 border border-cyber-gray rounded-lg p-8 text-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyber-blue">
                <GlitchText text="Download My Resume" inline />
              </h3>
              <p className="mb-6">
                For a more formal representation of my skills, experience, and qualifications.
                No glitches or jokes included — I promise.
              </p>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="/manan_punatu_resume.pdf" 
                download
                className="cyber-button inline-flex items-center gap-2 px-6 py-3 bg-cyber-gray/30 hover:bg-cyber-gray/50"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
            
            <div className="mt-6 text-xs text-gray-400">
              <p>Last updated: May 2025</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-cyber-darkGray/50 border border-cyber-gray rounded text-sm">
            <div className="flex items-start">
              <div className="text-cyber-green mr-2">&gt;</div>
              <div className="font-mono">
                <span className="text-cyber-purple">cat</span> <span className="text-cyber-blue">resume_note.md</span>
              </div>
            </div>
            <div className="mt-2 pl-6">
              For a complete breakdown of my technical skills, work experience, and education, 
              please download the resume. I'm currently open to opportunities in cybersecurity, 
              especially penetration testing and security analysis roles.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
