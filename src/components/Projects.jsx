import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Rekomendito – MSME Recommender System",
      category: "UI/UX Design",
      description: "Champion – Byte Forward North Luzon Leg 2025 | Top 5 – National Leg. Developed an AI-powered system that recommends government programs, funding, and digital tools tailored to MSME profiles.",
      systemLink: "#",
      image: "/project-rekomendito.png"
    },
    {
      id: 2,
      title: "LAPIS: Learners' Access and Placement Internship System",
      category: "Development",
      description: "EXACT Colleges of Asia 2025. This project digitalizes internship management by creating a web-based system that connects students, coordinators, and industry partners.",
      systemLink: "https://ecainternship.vercel.app/student",
      image: "/project-lapis.jpg"
    },
    {
      id: 3,
      title: "AGILA: Adaptive Gamified Interactive Learning and Assessment System",
      category: "Development",
      description: "A web-based learning platform that uses gamification, adaptive questioning, and interactive activities to enhance student engagement and improve assessment accuracy.",
      systemLink: "https://agilacabiao.vercel.app/",
      image: "/public/project-agila.jpg"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-screenshot">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <a 
                  href={project.systemLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-view-btn"
                >
                  ↗
                </a>
              </div>
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

