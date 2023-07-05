import './App.scss';
import { Header } from './components/header'
import Nav from './components/nav'
import { Landing } from './layouts/landing'
import { Summary } from './layouts/summary';
import Projects from './layouts/projects';

import { Footer } from './components/footer'
import { useState } from 'react';

function App() {
  const [vista, setVista] = useState({
    landing: true,
    summary: false,
    projects: false
  })

  const handleViewLanding = () => {
    setVista({
      landing: true,
      summary: false,
      projects: false
    })
  }
  const handleViewSummary = () => {
    setVista({
      landing: false,
      summary: true,
      projects: false
    })
  }
  const handleViewProjects = () => {
    setVista({
      landing: false,
      summary: false,
      projects: true
    })
  }
  const handleViews = (id) => {
    if (id === 'projects') {
      handleViewProjects()
    } else if (id === 'summary') {
      handleViewSummary()
    } else {
      handleViewLanding()
    }
  }
  const rendingViews = () => {
    if (vista.projects) {
      return <Projects />
    } else if (vista.summary) {
      return <Summary />
    } else return <Landing />
  }
  return (
    <div className="App">
      <Header />
      <div className='mainContainer'>
        <Nav handleViews={handleViews} />
        <main>
          {rendingViews()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
