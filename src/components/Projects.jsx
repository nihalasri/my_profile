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

  return (
    <section id="projects">
      <h2 className="section-title">My <span className="highlight_skill">P</span>rojects</h2>
      <p className="section-subtitle">A Selection Of My Best Work</p>
      <div className="dots"><span></span><span></span><span></span></div>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h1 className="project-card-heading">{project.heading}</h1>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} className="btn" target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href={project.sourceLink} className="btn" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
