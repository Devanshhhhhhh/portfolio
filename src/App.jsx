import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TechStack from './components/TechStack/TechStack'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
