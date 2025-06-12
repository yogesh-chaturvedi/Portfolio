import react from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div className='min-h-screen border-gray-200 dark:border-red-600 bg-slate-100 text-slate-800 dark:bg-black dark:text-white transition-colors duration-300'>
      <Navbar />
      <div className='space-y-20'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div >
  )
}

export default App

