const About = () => {
  return (
    <section id="about">
      <h2 className="section-title"><span className="highlight_skill">A</span>bout <span className="highlight_skill">M</span>e</h2>
      <p className="section-subtitle">Professional Profile - There Is All About Me</p>
      <div className="dots"><span></span><span></span><span></span></div>
      <div className="about-container">
        <div className="about-image">
          <img src="/profilee.png" alt="NIHAL ASRI" />
        </div>
        <div className="about-content">
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
        </div>
      </div>
    </section>
  );
};

export default About;
