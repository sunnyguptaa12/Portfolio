import Background from '../components/Background.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollTop from '../components/ScrollTop.jsx'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Projects from '../sections/Projects.jsx'
import Skills from '../sections/Skills.jsx'
import Education from '../sections/Education.jsx'
import Resume from '../sections/Resume.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero /><About /><Projects /><Skills /><Education /><Resume /><Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
