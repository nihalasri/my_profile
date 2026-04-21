import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      const scrollPosition = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 150) {
          currentSection = section.getAttribute('id');
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header 
      className={isMenuOpen ? "header-active" : ""}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="logo"><span className="red">NIHAL </span> ASRI</div>
      
      <div className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={isMenuOpen ? "nav-active" : ""}>
        <ul>
          <li><a href="#home" onClick={closeMenu} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#skills" onClick={closeMenu} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#contact" onClick={closeMenu} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;

