import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            I'm <span className="highlight-name">Ysa</span>, Full Stack Developer
          </h1>
          <p className="hero-description">
            I transform ideas into fully functional, user-friendly applications that make a meaningful impact
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn-primary">Let's Talk</button>
            <button onClick={scrollToProjects} className="btn-secondary">My Works</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-shape">
              <img 
                src="/Pic.jpg" 
                alt="Ysa Victorio - Web Developer"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

