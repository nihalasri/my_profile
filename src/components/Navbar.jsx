import { useState, useEffect } from 'react';

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
    <header className={isMenuOpen ? "header-active" : ""}>
      <div className="logo"><span className="red">NIHAL </span> ASRI</div>
      
      <div className="menu-btn" onClick={toggleMenu}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
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
    </header>
  );
};

export default Navbar;
