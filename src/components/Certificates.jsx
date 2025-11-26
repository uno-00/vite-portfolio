import './Certificates.css'

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "I.S.Talk 2.0 Stories of Rise and Reach",
      issuer: "Exact Colleges of Asia",
      date: "September 2025",
      description: "Shared insights and inspired fellow students.",
      image: "/Certificate-1.jpg",
      category: "Speaking"
    },
    {
      id: 2,
      title: "North Leg Bataan Byte Forward Hackathon Champion",
      issuer: "Byte Forward Hackathon",
      date: "June 2025",
      description: "Collaborated in a 24-hour innovation challenge.",
      image: "/Certificate-2.jpg",
      category: "Hackathon"
    },
    {
      id: 3,
      title: "Digital Safety and Security Awareness",
      issuer: "Cisco",
      date: "April 2025",
      description: "Gained knowledge on online safety, data privacy, and responsible digital use.",
      image: "/Certificate-3.png",
      category: "Technical"
    },
    {
      id: 4,
      title: "HTML Essentials",
      issuer: "Cisco",
      date: "April 2025",
      description: "Learned basic web structure and HTML fundamentals",
      image: "/Certificate-4.png",
      category: "Technical"
    },
    {
      id: 5,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "April 2025",
      description: "Gained fundamental knowledge in cybersecurity principles",
      image: "/Certificate-5.png",
      category: "Technical"
    },
    {
      id: 6,
      title: "JavaScript Essentials 1",
      issuer: "Cisco",
      date: "June 2025",
      description: "Comprehensive web development course covering frontend and backend",
      image: "/Certificate-6.png",
      category: "Technical"
    }
  ]

  const badges = [
    {
      id: 1,
      name: "Digital Safety and Security Awareness",
      image: "/Badge-1.png",
      color: "#FFD700"
    },
    {
      id: 2,
      name: "HTML Essentials",
      image: "/Badge-2.png",
      color: "#4CAF50"
    },
    {
      id: 3,
      name: "JavaScript Essentials 1",
      image: "/Badge-3.png",
      color: "#2196F3"
    },
    {
      id: 4,
      name: "Python Essentials 1",
      image: "/Badge-4.png",
      color: "#FF9800"
    },
  ]

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Badges & Certificates</h2>
        
        <div className="badges-section">
          <h3>Badges</h3>
          <div className="badges-grid">
            {badges.map((badge) => (
              <div key={badge.id} className="badge-item" style={{ borderColor: badge.color }}>
                <div className="badge-image">
                  <img 
                    src={badge.image} 
                    alt={badge.name}
                    className="badge-img"
                  />
                </div>
                <span className="badge-name">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="certificates-section">
          <h3>Certificates</h3>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-image">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="cert-img"
                  />
                </div>
                <div className="certificate-content">
                  <div className="cert-category">{cert.category}</div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-date">{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
