import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { title: "Programming languages", content: "Python, Java, JavaScript, C" },
    { title: "Web Development", content: "HTML, CSS, JavaScript, React, Node.js" },
    { title: "Backend Development", content: "Node.js, Express.js, RESTful APIs" },
    { title: "Database Management", content: "MySQL" },
    { title: "Version Control", content: "Git, GitHub" },
    { title: "UI/UX Design", content: "Figma" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        variants={cardVariants}
        className="section-title"
      >
        My <span className="highlight_skill">S</span>kills
      </motion.h2>
      <motion.p variants={cardVariants} className="section-subtitle">What I Can Do</motion.p>
      <motion.div variants={cardVariants} className="dots"><span></span><span></span><span></span></motion.div>
      
      <motion.div 
        className="skills-container"
        variants={containerVariants}
      >
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill"
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: 'var(--primary-color)', transition: { duration: 0.3 } }}
          >
            <h3>{skill.title}</h3>
            <p>{skill.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;

