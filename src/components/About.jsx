import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={fadeInUp} className="section-title"><span className="highlight_skill">A</span>bout <span className="highlight_skill">M</span>e</motion.h2>
      <motion.p variants={fadeInUp} className="section-subtitle">Professional Profile - There Is All About Me</motion.p>
      <motion.div variants={fadeInUp} className="dots"><span></span><span></span><span></span></motion.div>
      <div className="about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/profilee.png" alt="NIHAL ASRI" />
        </motion.div>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>I'm NIHAL</h3>
          <p>
            I am a dedicated Full Stack Developer with experience in building robust and scalable web applications. My expertise spans across front-end technologies like React and back-end frameworks like Node.js.
          </p>
          <p>
            I am passionate about solving complex problems and continuously learning new technologies to enhance my skill set and deliver high-quality products.
          </p>
          <div className="about-details">
            <ul>
              <li><i className="fa-solid fa-briefcase"></i> <strong>Freelance:</strong> Available</li>
              <li><i className="fa-solid fa-location-dot"></i> <strong>Address:</strong> Mayiladuthurai, Tamil Nadu, India</li>
              <li><i className="fa-solid fa-language"></i> <strong>Spoken Languages:</strong> Tamil - English</li>
            </ul>
            <ul>
              <li><i className="fa-solid fa-flag"></i> <strong>Nationality:</strong> Indian</li>
              <li><i className="fa-solid fa-envelope"></i> <strong>Email:</strong> nihalofficialacc@gmail.com</li>
            </ul>
          </div>
          <div className="social-links">
            <a href="https://github.com/nihalasri" target="_blank" rel="noreferrer" id="about-github" title="GitHub Profile"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/nihalasri" target="_blank" rel="noreferrer" id="about-linkedin" title="LinkedIn Profile"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="mailto:nihalofficialacc@gmail.com" id="about-email" title="Email Me"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
