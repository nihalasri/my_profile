const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="intro">Hi There! I'm NIHAL</p>
        <h1><span className="highlight">SOFTWARE</span> ENGINEER</h1>
        <p className="desc">
          I am a passionate developer with a knack for creating dynamic and user-friendly web applications. 
          Ready to build the future, one line of code at a time.
        </p>
        <a href="https://drive.google.com/file/d/17K9MA1Y5oNMMa7PNm1iFSMl65EhxCedf/view?usp=sharing" target="_blank" id="bt1" className="btn">Download CV</a>
        <div className="social-links">
          <a href="https://github.com/nihalasri" target="_blank" rel="noreferrer" id="hero-github" title="GitHub Profile"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/nihalasri" target="_blank" rel="noreferrer" id="hero-linkedin" title="LinkedIn Profile"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:nihalofficialacc@gmail.com" id="hero-email" title="Email Me"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/profilee.png" alt="NIHAL ASRI" />
      </div>
    </section>
  );
};

export default Hero;
