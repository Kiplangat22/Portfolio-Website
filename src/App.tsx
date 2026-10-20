import './App.css'
import { portfolio } from '../shared/portfolio'
import { Background } from './components/Background'
import { Stats } from './components/Stats'
import { Navbar } from './pages/1.Navbar/Navbar'
import Contact from './pages/12.Contact/Contact'
import Footer from './pages/14.Footer/Footer'
import { Home } from './pages/2.Home/Home'
import About from './pages/3.About/About'
import { Education } from './pages/4.Education/Education'
import { Experience } from './pages/5.Experience/Experience'
import { LicenseCert } from './pages/6.LicenseCert/LicenseCert'
import { Technologies } from './pages/7.Technologies/Technologies'
import Projects from './pages/8.Projects/Projects'


// Content is bundled from shared/portfolio.ts, so the page renders immediately (no API round trip).
function App() {
  const { profile } = portfolio

  return (
    <div className='bg-dark overflow-x-hidden relative' >
      <Background />
      <div className='relative z-10'>
      <Navbar shortName={profile.shortName} />
      <main>
        <Home profile={profile} />
        <Stats portfolio={portfolio} />
        <About profile={profile} />
        <Experience experience={portfolio.experience} />
        <Technologies skills={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Education education={portfolio.education} />
        <LicenseCert certifications={portfolio.certifications} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
      </div>
    </div>
  )
}

export default App
