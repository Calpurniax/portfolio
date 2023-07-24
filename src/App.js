import './App.scss';
import { Header } from './components/header'
import Nav from './components/nav'
import { Landing } from './layouts/landing'
import { Summary } from './layouts/summary';
import Projects from './layouts/projects';
// import { Footer } from './components/footer'
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
  const RandMProject =
  {
    title: "Buscador de personajes de Rick and Morty",
    text: "Aplicación web realizada en React y con llamada a través del método fetch a una API de terceros. Tiene varios filtros de búsqueda: por nombre, especie, planeta y localización actual. El css tiene una paleta de colores de azul-verdoso y negro, sencillo y ligero."
  }
  const casaCantoProject = {
    title: "Casa Canto, alquiler vacacional",
    text: "Página web creada con wordpress, con información de contacto y una galería de fotos, el diseño y la paleta de colores busca transmitir elegancia y sobriedad"
  }
  const taskListProject = {
    title: "Lista de tareas",
    text: "Aplicación realizada utilizando React, tiene unas tareas por defecto que aparecen al levantar la web y después, utilizando la funcionalidad de local storage, el usuario puede añadir/ quitar tareas o marcarlas como realizadas. Hay implementado también un contador que cambia con las interacciones del usuario."
  }
  const cardCreator = {
    title: "Generador de tarjetas de visita",
    text: "Proyecto grupal de Adalab, con diseño heredado de otras compañeras. Nuestra tarea consistió en trasladar el código heredado a React, generando una lógica nueva, además crear el backend con NodeJS, y la base de datos con SQLite"
  }




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


  const handleModals = (id) => {
    const value = showModal[id]
    setShowModal({ ...showModal, [id]: !value })
  }

  const rendingViews = () => {
    if (vista.projects) {
      return <Projects showModal={showModal}
        handleModals={handleModals} RandMProject={RandMProject}
        casaCantoProject={casaCantoProject} taskListProject={taskListProject}
        cardCreator={cardCreator} />
    } else if (vista.summary) {
      return <Summary />
    } else return <Landing />
  }
  return (
    <div className="App">
      <Header />
      <div className='mainContainer'>
        <Nav handleViews={handleViews} vista={vista} />
        <main className='main'>
          {rendingViews()}
        </main>
      </div>
    </div>
  );
}

export default App;
