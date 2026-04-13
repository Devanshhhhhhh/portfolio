import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          
          <div className="about-text">
            <p>
              I'm a B.Tech CSE(AI) student from Jaipur Engineering College, passionate about building responsive frontends and structured backends using modern JavaScript frameworks and SQL. I approach development with a focus on understanding why a solution works, not just making it work.
            </p>
            
            <p>
              I specialize in full-stack development, with a strong foundation in React, Node.js, and MongoDB. My journey in tech has been driven by curiosity and the desire to create meaningful solutions that solve real-world problems.
            </p>
            
            <p>
              Currently, I'm automating business workflows and building AI agents to enhance efficiency. I'm ready to apply my skills to real-world production challenges in a fast-paced engineering environment and continuously grow as a developer.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <h3>Curious</h3>
              <p>I love learning new technologies and understanding the 'why' behind solutions</p>
            </div>
            <div className="highlight-item">
              <h3>Problem Solver</h3>
              <p>I break down complex problems into manageable components and implement efficient solutions</p>
            </div>
            <div className="highlight-item">
              <h3>Full-Stack Developer</h3>
              <p>Comfortable working across the entire stack from UI to database architecture</p>
            </div>
            <div className="highlight-item">
              <h3>Production-Ready</h3>
              <p>I build applications with deployment, scalability, and best practices in mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
