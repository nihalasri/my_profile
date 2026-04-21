import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-text"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="intro">Hi There! I'm NIHAL</motion.p>
        <motion.h1 variants={itemVariants}>
          <span className="highlight">SOFTWARE</span> ENGINEER
        </motion.h1>
        <motion.p variants={itemVariants} className="desc">
          I am a passionate developer with a knack for creating dynamic and user-friendly web applications. 
          Ready to build the future, one line of code at a time.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a href="https://drive.google.com/file/d/17K9MA1Y5oNMMa7PNm1iFSMl65EhxCedf/view?usp=sharing" target="_blank" id="bt1" className="btn">Download CV</a>
        </motion.div>
        <motion.div variants={itemVariants} className="social-links">
          <a href="https://github.com/nihalasri" target="_blank" rel="noreferrer" id="hero-github" title="GitHub Profile"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/nihalasri" target="_blank" rel="noreferrer" id="hero-linkedin" title="LinkedIn Profile"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:nihalofficialacc@gmail.com" id="hero-email" title="Email Me"><i className="fa-solid fa-envelope"></i></a>
        </motion.div>
      </motion.div>
      <motion.div 
        className="hero-image"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src="/profilee.png" alt="NIHAL ASRI" />
      </motion.div>
    </section>
  );
};

export default Hero;


