import './Contact.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

function Contact() {
  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ddevansh24@gmail.com',
      link: 'mailto:ddevansh24@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 6367533473',
      link: 'tel:+916367533473'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Devanshhhhhhh',
      link: 'https://github.com/Devanshhhhhhh'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/connectdevanshsharma',
      link: 'https://linkedin.com/in/connectdevanshsharma'
    }
  ]

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <p className="contact-subtitle">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          
          <div className="contact-grid">
            {contactLinks.map((item, index) => {
              const Icon = item.icon
              return (
                <a 
                  key={index} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <Icon />
                  </div>
                  <div className="contact-info">
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                  </div>
                  <div className="arrow">→</div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Almaz Bissenbayev. All rights reserved.</p>
          <p>Crafted with passion and modern web technologies</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
