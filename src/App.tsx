import { useEffect, useState } from 'react'
import './App.css'
import type { Portfolio } from '../shared/types'
import { getPortfolio } from './api'
import { Navbar } from './pages/1.Navbar/Navbar'
import Contact from './pages/12.Contact/Contact'
import Footer from './pages/14.Footer/Footer'
import { Home } from './pages/2.Home/Home'
import { Education } from './pages/4.Education/Education'
import { Experience } from './pages/5.Experience/Experience'
import { LicenseCert } from './pages/6.LicenseCert/LicenseCert'
import { Technologies } from './pages/7.Technologies/Technologies'
import Projects from './pages/8.Projects/Projects'


function App() {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getPortfolio().then(setPortfolio).catch((err: Error) => setError(err.message))
  }, [])

  if (!portfolio) {
    return (
      <div className='bg-dark min-h-screen flex items-center justify-center text-gray-300'>
        {error ? (
          <p>Couldn't load the portfolio: {error}</p>
        ) : (
          <div className='w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin' />
        )}
      </div>
    )
  }

  const { profile } = portfolio

  return (
    <div className='bg-dark overflow-x-hidden' >
      <Navbar shortName={profile.shortName} />
      <Home profile={profile} />
      <Experience experience={portfolio.experience} />
      <Technologies skills={portfolio.skills} />
      <Projects projects={portfolio.projects} />
      <Education education={portfolio.education} />
      <LicenseCert certifications={portfolio.certifications} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  )
}

export default App
