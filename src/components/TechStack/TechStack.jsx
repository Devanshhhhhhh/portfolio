import './TechStack.css'
import { FaReact, FaNode, FaGit, FaGithub, FaHtml5, FaCss3Alt, FaCode, FaCog } from 'react-icons/fa'
import { SiJavascript, SiC, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiPrisma, SiPostgresql, SiSqlite } from 'react-icons/si'

function TechStack() {
  const techStackData = [
    {
      category: 'Languages',
      technologies: [
        { name: 'HTML', icon: FaHtml5, color: '#e34c26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#264de4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'C', icon: SiC, color: '#a8b9cc' },
        { name: 'C++', icon: SiCplusplus, color: '#00599c' },
        { name: 'SQL', icon: SiSqlite, color: '#336791' }
      ]
    },
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'HTML', icon: FaHtml5, color: '#e34c26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#264de4' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: FaNode, color: '#68a063' },
        { name: 'Express.js', icon: SiExpress, color: '#fff' }
      ]
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
        { name: 'Prisma', icon: SiPrisma, color: '#0c344b' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }
      ]
    },
    {
      category: 'Tools & Platforms',
      technologies: [
        { name: 'Git', icon: FaGit, color: '#f34f29' },
        { name: 'GitHub', icon: FaGithub, color: '#fff' },
        { name: 'VS Code', icon: FaCode, color: '#007acc' },
        { name: 'n8n', icon: FaCog, color: '#ff6b35' }
      ]
    }
  ]

  return (
    <section className="tech-stack">
      <div className="tech-stack-container">
        <h2>The <span className="tech-stack-highlight">Tech Stack</span></h2>
        <div className="tech-columns">
          {techStackData.map((column, index) => (
            <div key={index} className="tech-column">
              <h3 className="column-title">{column.category}</h3>
              <div className="column-pills">
                {column.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon
                  return (
                    <div key={techIndex} className="tech-pill">
                      <IconComponent className="tech-icon" style={{ color: tech.color }} />
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
