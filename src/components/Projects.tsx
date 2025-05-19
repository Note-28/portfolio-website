import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  link: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  stack, 
  link,
  delay 
}) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cyberpunk-card h-full flex flex-col opacity-0 block"
      style={{ animation: `fade-in-up 0.6s ease-out forwards ${delay}s` }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-cyber-green mb-1">{title}</h3>
        <p className="text-sm text-cyber-blue mb-4">{subtitle}</p>
        <p className="mb-4 text-gray-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-cyber-gray/50 px-2 py-1 rounded text-cyber-yellow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="cyber-button flex items-center justify-center gap-2 w-full">
          <Github size={16} />
          <span>View Project</span>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "VigilantEye",
      subtitle: "A.K.A. The Snitch",
      description: "A paranoid ML-powered IDPS that detects anomalies at 98% accuracy and throws red flags like it's World Cup season.",
      stack: ["FastAPI", "Python", "Reptile++", "ML"],
      role: "Core Developer (Capstone Project)",
      link: "https://github.com/Note-28/VigilantEye"
    },
    {
      title: "ML-Firewall",
      subtitle: "When firewalls grow brains",
      description: "A RandomForest-based firewall that blocks threats in real time and doesn't ask for a raise.",
      stack: ["Python", "Sklearn", "Bash", "IPTables"],
      role: "Solo Project",
      link: "https://github.com/Note-28/ML-Firewall-RandomForest-Parameter-Tuning-for-Firewall-Automation"
    },
    {
      title: "LeafLens",
      subtitle: "Plant recognition, but make it AI",
      description: "Built a deep learning model to identify 83 leaf species. Because machine learning doesn't have to be serious all the time.",
      stack: ["TensorFlow", "Xception", "Python", "Image Processing"],
      role: "ML Engineer",
      link: "https://github.com/Note-28/LeafLens"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cyber-darkGray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects — "Lines of Code That Did Stuff"</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              stack={project.stack}
              link={project.link}
              delay={0.2 * index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            These are just a few highlighted projects. Check out my GitHub for more.
          </p>
          <a 
            href="https://github.com/Note-28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center gap-2"
          >
            <Github size={16} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
