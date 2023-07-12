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
  const [showModal, setShowModal] = useState({
    rickAndMorty: false,
    casaCanto: false,
    taskList: false,
    cardCreator: false,
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

  // const handleModalRick = () => {
  //   const oldValue = showModal, rickAndMorty 
  //   setShowModal(

  //     { ...showModal, rickAndMorty: (!oldValue) }


  //   )
  // }
  const handleModals = (id) => {
    const value = showModal[id]
    setShowModal({ ...showModal, [id]: !value })
    // if (id === 'rickAndMorty') {
    //   handleModalRick()
    // } else if (id === 'casaCanto') {
    //   handleModalCasaCanto()
    // } else if (id === 'taskList') {
    //   handleModalTaskList()
    // } else {
    //   handleModalCardCreator()
    // }
  }

  const rendingViews = () => {
    if (vista.projects) {
      return <Projects showModal={showModal} handleModals={handleModals} />
    } else if (vista.summary) {
      return <Summary />
    } else return <Landing />
  }
  return (
    <div className="App">
      <Header />
      <div className='mainContainer'>
        <Nav handleViews={handleViews} vista={vista} />
        <main>
          {rendingViews()}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
