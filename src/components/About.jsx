import './About.css'

function About() {
  const downloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Make sure your CV file is named 'resume.pdf' in the public folder
    link.download = 'Ysa_Victorio_Resume.pdf' // This will be the filename when downloaded
    link.target = '_blank'
    
    // Append to body, click, then remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Fallback: if download doesn't work, open in new tab
    setTimeout(() => {
      window.open('/resume.pdf', '_blank')
    }, 100)
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-top">
          <div className="about-image">
            <div className="profile-circle">
              <img 
                src="/Byte.jpg" 
                alt="Ysa Victorio - Web Developer"
                className="profile-photo"
              />
              <div className="circle-pattern"></div>
            </div>
          </div>
          <div className="about-text">
            <div className="about-label">ABOUT ME</div>
            <h2 className="about-title">
             Web Developer
            </h2>
            <p className="about-description">
              I am a passionate and driven web developer with experience in frontend development, UI/UX design, and basic backend integration. I enjoy creating systems that solve real-world problems and improve user experiences.
            </p>
            <p className="about-description">
              I was recognized as a Champion in the Byte Forward North Luzon Leg 2025 and a Top 5 Finalist in the National Leg, developing an AI-powered MSME Recommender System that suggests government programs, funding, and digital tools tailored to business profiles. This experience strengthened my skills in problem-solving, innovation, and practical application of technology for social impact.
            </p>
            <p className="about-description">
              I am always eager to learn, explore new technologies, and contribute to projects that make a meaningful difference.
            </p>
            <button onClick={downloadCV} className="download-cv-btn">Download CV</button>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">Student</div>
            <div className="stat-label">Developer</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Projects completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

