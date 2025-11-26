import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: "DEVELOPMENT",
      icon: "</>",
      title: "Frontend Development",
      proficiency: "Advanced",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      category: "DEVELOPMENT",
      icon: "🗄️",
      title: "Backend Development",
      proficiency: "Intermediate",
      skills: ["Node.js", "Express.js", "Laravel", "MongoDB", "REST APIs", "Database Management"]
    },
    {
      category: "DEVELOPMENT",
      icon: "🎨",
      title: "UI/UX Design",
      proficiency: "Intermediate",
      skills: ["Wireframing", "Prototyping", "Figma", "User Research", "Design Systems"]
    },
    {
      category: "DEVELOPMENT",
      icon: "📱",
      title: "Responsive Web Design",
      proficiency: "Advanced",
      skills: ["Mobile-First Design", "Cross-Browser Compatibility", "Flexbox & Grid", "Media Queries"]
    },
    {
      category: "TOOLS",
      icon: "⚙️",
      title: "Version Control & Tools",
      proficiency: "Advanced",
      skills: ["Git & GitHub", "API Integration", "MS Office", "Troubleshooting", "Technical Skills"]
    },
    {
      category: "SOFT SKILLS",
      icon: "💼",
      title: "Professional Skills",
      proficiency: "Advanced",
      skills: ["Critical Thinking", "Fast Learner", "Team Collaboration", "Problem Solving", "Professionalism & Work Ethics", "Attention to Detail"]
    }
  ]

  const getCategoryColor = (category) => {
    switch(category) {
      case "DEVELOPMENT":
        return "purple"
      case "TOOLS":
        return "pink"
      case "SOFT SKILLS":
        return "purple"
      default:
        return "purple"
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            A comprehensive toolkit spanning web development, full-stack solutions, and professional skills.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const color = getCategoryColor(category.category)
            return (
              <div key={index} className={`skill-card skill-card-${color}`}>
                <div className="skill-card-icon">{category.icon}</div>
                <div className={`skill-card-tag skill-tag-${color}`}>{category.category}</div>
                <h3 className="skill-card-title">{category.title}</h3>
                <div className="skill-card-proficiency">
                  Proficiency: <span className={`proficiency-${color}`}>{category.proficiency}</span>
                </div>
                <ul className="skill-card-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className={`skill-list-item skill-item-${color}`}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

