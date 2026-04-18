const Skills = () => {
  const skillsData = [
    { title: "Programming languages", content: "Python, Java, JavaScript, C" },
    { title: "Web Development", content: "HTML, CSS, JavaScript, React, Node.js" },
    { title: "Backend Development", content: "Node.js, Express.js, RESTful APIs" },
    // { title: "Mobile Development", content: "Flutter" },
    { title: "Database Management", content: "MySQL" },
    // { title: "Cloud Services", content: "AWS" },
    { title: "Version Control", content: "Git, GitHub" },
    { title: "UI/UX Design", content: "Figma" },
  ];

  return (
    <section id="skills">
      <h2 className="section-title">My <span className="highlight_skill">S</span>kills</h2>
      <p className="section-subtitle">What I Can Do</p>
      <div className="dots"><span></span><span></span><span></span></div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill.title}</h3>
            <p>{skill.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
