import './App.scss';
import { Header } from './components/header'
import Nav from './components/nav'
import { Landing } from './layouts/landing'
import { Summary } from './layouts/summary';
import Projects from './layouts/projects';
import pdfDocument from './documents/sofia-gracia.pdf'
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
    restaurantApp:false
  })
  const RandMProject ={
    title: "Buscador de personajes de Rick and Morty",
    text: "Aplicación web realizada en React y con llamada a través del método fetch a una API de terceros. Tiene varios filtros de búsqueda: por nombre, especie, planeta y localización actual. El css tiene una paleta de colores de azul-verdoso y negro, sencillo y ligero.",
    link:"https://calpurniax.github.io/modulo-3-evaluacion-final-Calpurniax/"    
  }
  const matchPointService={
    title: "Web para Match Point Service",
    text: "Página web creada con React, alojada en servidor Apache.",
    link:"https://www.matchpointservice.com/"
  }
  const casaCantoProject = {
    title: "Casa Canto, alquiler vacacional",
    text: "Página web creada con wordpress, con información de contacto y una galería de fotos, el diseño y la paleta de colores busca transmitir elegancia y sobriedad.",
    link:"https://casa-canto.com/"
  }
  const taskListProject = {
    title: "Lista de tareas",
    text: "Aplicación realizada utilizando React, tiene unas tareas por defecto que aparecen al levantar la web y después, utilizando la funcionalidad de local storage, el usuario puede añadir/ quitar tareas o marcarlas como realizadas. Hay implementado también un contador que cambia con las interacciones del usuario y un modal para confirmar la eliminación de una tarea de la lista.",
    link:"https://calpurniax.github.io/lista-de-tareas/"
  }
  const restaurantApp ={
    title: "Diseño para una app de restaurantes",
    text: "Maquetación para una web de gestión de reservas en hostelería, sólo tiene HTML y Sass, usando React con Vite. Es un diseño totalmente mío, con vistas a una buena experiencia de usuario.",
    link:"https://calpurniax.github.io/restaurant_app/"
  }
  const secureForm ={
    title: "Aplicación full-stack orientada a la seguridad web",
    text: "Desarrollado en MERN con medidas para evitar las vulnerabilidades marcadas por OWASP, como ataques de fuerza bruta o de DoS, XSS etc. Aún no está desplegado pero se puede ver el código en Github.",
    link:"https://github.com/Calpurniax/secure_form"
  }
  const abitoProject={
    title: "Web para AbitoStudio, backoffice",
    text: "Web estática desarrollada con HTML y CSS, con diseño minimalista y elegante",
    link:"https://www.abitostudio.com/"
  }
  const afPictures={
    title: "Web para AF Pictures, distribuidora audiovisual",
    text: "Web estática desarrollada con PHP y alojada en servidor Apache.",
    link:"https://www.afpictures.com/"
  }
  const cardCreator = {
    title: "Generador de tarjetas de visita",
    text: "Proyecto grupal de Adalab, con diseño heredado de otras compañeras. Nuestra tarea consistió en trasladar el código heredado a React, generando una lógica nueva, además crear el backend con NodeJS, y la base de datos con SQLite.",
    link:"https://github.com/Calpurniax/project-promo-r-module-4-team-2"
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
        matchPointService={matchPointService}
        casaCantoProject={casaCantoProject} taskListProject={taskListProject}
        cardCreator={cardCreator} restaurantApp={restaurantApp} secureForm={secureForm} abitoProject={abitoProject} afPictures={afPictures}/>
    } else if (vista.summary) {
      return <Summary />
    } else return <Landing pdfDocument={pdfDocument} />
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
