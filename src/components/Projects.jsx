import { motion } from 'framer-motion';

const Projects = () => {
  const projectsData = [
    {
      title: "LOGI TRUCK",
      heading: "LOGISTIC WEBSITE",
      description: "Built a full-stack logistics marketplace with bidding system and end-to-end shipment workflow management. (SvelteKit, Supabase, PostgreSQL, Google Maps API, Cloudflare Pages, Node.js).",
      demoLink: "https://logitruck.pages.dev/",
      sourceLink: "https://github.com/nihalasri/logitruck"
    },
    {
      title: "Task Manager App",
      heading: "Task+Manager",
      description: "A responsive task management application created with React and Firebase for real-time data synchronization.",
      demoLink: "https://demo.example.com/task-manager",
      sourceLink: "https://github.com/example/task-manager"
    },
    {
      title: "Personal Portfolio",
      heading: "Portfolio",
      description: "A dynamic personal portfolio website designed in Figma and built with HTML, CSS, and JavaScript.",
      demoLink: "https://demo.example.com/portfolio",
      sourceLink: "https://github.com/example/portfolio"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.section 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 variants={cardVariants} className="section-title">My <span className="highlight_skill">P</span>rojects</motion.h2>
      <motion.p variants={cardVariants} className="section-subtitle">A Selection Of My Best Work</motion.p>
      <motion.div variants={cardVariants} className="dots"><span></span><span></span><span></span></motion.div>
      
      <motion.div 
        className="projects-container"
        variants={containerVariants}
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
          >
            <h1 className="project-card-heading">{project.heading}</h1>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} className="btn" target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href={project.sourceLink} className="btn" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;

