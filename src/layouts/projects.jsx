import "../styles/layouts/projects.scss";
import { ProjectsArticle } from "../components/projects-article";
import rickAndMorty_mob from "../images/r&m/rym_mobile.png";
import rickAndMorty_desk  from "../images/r&m/rym_desktop.png";
import taskList_desk from "../images/task-list/taskList_desktop.png"
import taskList_mob from "../images/task-list/taskList_mobile.png"
import casaCanto_mob from "../images/casa-canto/casaCanto_mobile.png";
import casaCanto_desk from "../images/casa-canto/casaCanto_desktop.png";
import cardCreator_desk from "../images/card-creator/card-creator_desktop.png";
import cardCreator_mob from "../images/card-creator/card-creator_mobile.png";
import restApp_mob from "../images/restaurant-app/restApp_mobile.png";
import restApp_desk from "../images/restaurant-app/restApp_desktop.png";
import Modal from "../components/modal";

const Projects =({showModal,handleModals, RandMProject, casaCantoProject, taskListProject, cardCreator, restaurantApp})=>{
 
   return (
    <section className="projects">
      <h2 className="projects__title">Muestras de proyectos</h2>
      <ul className="projects__container">
        <ProjectsArticle
        id={'rickAndMorty'}
        handleModals={handleModals}
        tech={['React','Fetch']}        
        img={rickAndMorty_mob}
        alt={'Buscador de personajes de Rick and Morty'}
        link={"https://calpurniax.github.io/modulo-3-evaluacion-final-Calpurniax/"}
        title={'Buscador de personajes de Rick and Morty'}/>
        <ProjectsArticle
        id={'casaCanto'}
        handleModals={handleModals}
        tech={['Wordpress']}
        img={casaCanto_mob}
        alt={'web Casa Canto'}
        link={"https://casa-canto.com/"}
        title={'Casa Canto - alquiler vacacional'}/>
         <ProjectsArticle
        id={'taskList'}
        handleModals={handleModals}
        tech={['React', 'Local Storage']}        
        img= {taskList_desk}
        alt={'Web para crear tu lista de tareas'}
        link={"https://calpurniax.github.io/lista-de-tareas/"}
        title={'Lista de tareas con local storage'}/>
         <ProjectsArticle
        id={'restaurantApp'}
        handleModals={handleModals}
        tech={['React', 'Sass']}        
        img= {restApp_desk}
        alt={'Aplicación para reservar en restaurantes'}
        link={"https://calpurniax.github.io/restaurant_app/"}
        title={'Diseño para una aplicación de reservas en restaurantes'}/>
         <ProjectsArticle
        id={'cardCreator'}
        handleModals={handleModals}
        tech={['React', 'NodeJS']}        
        img={cardCreator_desk}
        alt={'Web para crear tarjetas de visita'}
        link={"https://github.com/Calpurniax/project-promo-r-module-4-team-2"}
        title={'Card Generator: crea tu tarjeta de visita'}/>
        <Modal projectObject={RandMProject} id='rickAndMorty' showModal={showModal} handleModal={handleModals} link="https://calpurniax.github.io/modulo-3-evaluacion-final-Calpurniax/" img={{img:rickAndMorty_desk, text:"Versión desktop"}} imgClass='modal__img desktop'/>
        <Modal projectObject={casaCantoProject} id='casaCanto' showModal={showModal} handleModal={handleModals} link="https://casa-canto.com/" img={{img:casaCanto_desk, text:"Versión desktop"}} imgClass='modal__img desktop'/>
        <Modal projectObject={taskListProject} id='taskList' showModal={showModal} handleModal={handleModals} link="https://calpurniax.github.io/lista-de-tareas/"  img={{img:taskList_mob, text:"Versión para móvil"}} imgClass='modal__img mobile'/>
        <Modal projectObject={cardCreator} id='cardCreator' showModal={showModal} handleModal={handleModals} link="https://github.com/Calpurniax/project-promo-r-module-4-team-2" img={{img:cardCreator_mob, text:"Versión para móvil"}} imgClass='modal__img mobile'/>
        <Modal projectObject={restaurantApp} id='restaurantApp' showModal={showModal} handleModal={handleModals} link="https://calpurniax.github.io/restaurant_app/" img={{img:restApp_mob, text:"Versión para móvil"}} imgClass='modal__img mobile'/>       
      </ul>
      
    </section>
   )
}
export default Projects;
