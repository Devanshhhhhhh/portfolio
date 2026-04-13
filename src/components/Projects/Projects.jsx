import './Projects.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useRef } from 'react'
import urlSqueezerImg from '../../assets/images/projects/url-squeezer.png'
import newsAggregatorImg from '../../assets/images/projects/news-aggregator.png'
import carSearchImg from '../../assets/images/projects/carsearch.png'

function Projects() {
  const cardRefs = useRef([])

  const handleCardMouseMove = (e, index) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate rotation based on mouse position - tilt TOWARDS the mouse
    const rotateY = ((0.5) - (x / rect.width)) * 30  // Reversed
    const rotateX = ((y / rect.height) - 0.5) * 30   // Reversed

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleCardMouseLeave = (index) => {
    const card = cardRefs.current[index]
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
    }
  }
  const projectsData = [
    {
      title: 'URL Squeezer',
      description: 'A full-stack URL shortening application that converts long URLs into short, shareable links.',
      scope: 'Full-Stack',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      details: 'Unique short ID generation • Copy-to-clipboard • Production deployment • CORS-enabled API',
      codeLink: 'https://github.com/Devanshhhhhhh',
      liveLink: 'https://lnkd.in/gdYMSgsJ',
      image: urlSqueezerImg
    },
    {
      title: 'News Aggregator App',
      description: 'A responsive web application displaying real-time news from multiple sources.',
      scope: 'Frontend',
      tech: ['React', 'HTML', 'CSS', 'API'],
      details: 'Real-time news fetching • Category filters • Search functionality • Responsive design',
      codeLink: 'https://github.com/Devanshhhhhhh',
      liveLink: '#',
      image: newsAggregatorImg
    },
    {
      title: 'CarSearch App',
      description: 'A dynamic car search interface with advanced filters and modern Material-UI design.',
      scope: 'Frontend',
      tech: ['React', 'Material-UI', 'JavaScript', 'CSS'],
      details: 'Dynamic search • Advanced filters • Material-UI components • Responsive layout',
      codeLink: 'https://github.com/Devanshhhhhhh',
      liveLink: '#',
      image: carSearchImg
    }
  ]

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleCardMouseMove(e, index)}
              onMouseLeave={() => handleCardMouseLeave(index)}
            >
              {/* Image Section */}
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              {/* Title */}
              <h3 className="card-title">{project.title}</h3>
              
              {/* Description */}
              <p className="card-description">{project.description}</p>
              
              {/* Scope and Tech Buttons */}
              <div className="card-badges">
                <span className="scope-badge">{project.scope}</span>
                <span className="tech-badge">TECH</span>
              </div>
              
              {/* Tech Stack Tags */}
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {/* Project Details */}
              <p className="project-details">{project.details}</p>
              
              {/* Links */}
              <div className="project-links">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="link-button" title="View Code">
                  <FaGithub className="link-icon" />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-button" title="Live Demo">
                  <FaExternalLinkAlt className="link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

