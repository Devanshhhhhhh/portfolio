import './Hero.css'
import profileImage from '../../assets/images/profile.jpeg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hi, I'm Devansh,<br />a Full-Stack Web<br />Developer</h2>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Almaz Bissenbayev" />
      </div>
    </section>
  )
}

export default Hero
