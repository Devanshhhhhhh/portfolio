import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Devansh Sharma</h1>
        <p>Web Developer</p>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#posts">Posts</a>
        <a href="#resume">Resume</a>
      </nav>
    </header>
  )
}

export default Header
