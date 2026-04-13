import './Skills.css'

function Skills() {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'C', 'C++', 'SQL']
    },
    {
      category: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'Tailwind']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'Prisma', 'PostgreSQL']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'n8n']
    }
  ]

  return (
    <section className="skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
