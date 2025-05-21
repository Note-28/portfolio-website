import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SideQuests from '@/components/SideQuests';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Manan Punatu | Cybersecurity Portfolio";
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    // Typing effect for elements with the 'typing-effect' class
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach(element => {
      const text = element.textContent || '';
      element.textContent = '';
      let i = 0;
      
      const typeWriter = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, Math.random() * 50 + 50); // Random delay between 50-100ms
        }
      };
      
      // Using IntersectionObserver to check visibility
      const observerTyping = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          typeWriter();
          observerTyping.unobserve(element);
        }
      });
      observerTyping.observe(element);
    });
    
    // Add parallax effect to elements with 'parallax' class
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || '5';
        const xOffset = (x - 0.5) * parseInt(speed);
        const yOffset = (y - 0.5) * parseInt(speed);
        // We need to type cast el as HTMLElement to access style property
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <SideQuests />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
