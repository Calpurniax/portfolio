import "../styles/layouts/projects.scss";
import { ProjectsArticle } from "../components/projects-article";
import rickAndMorty_mob from "../images/r&m/portadaR&M_mobile.png";
import rickAndMorty_desk  from "../images/r&m/portadaR&M.png";
import taskList_landing from "../images/task-list/portadaTaskList_desktop.png"
import casaCanto_landing from "../images/casa-canto/portadaCasaCanto_mobile.png"
import cardCreator_landing from "../images/card-creator/card-creator-desktop.png"
import Modal from "../components/modal";

const Projects =({showModal,handleModals, RandMProject, casaCantoProject, taskListProject, cardCreator})=>{
 
   return (
    <section className="projects">
      <h3 className="projects__title">Muestras de proyectos</h3>
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
        img={casaCanto_landing}
        alt={'web Casa Canto'}
        link={"https://casa-canto.com/"}
        title={'Casa Canto - alquiler vacacional'}/>
         <ProjectsArticle
        id={'taskList'}
        handleModals={handleModals}
        tech={['React', 'Local Storage']}        
        img={taskList_landing}
        alt={'Web para crear tu lista de tareas'}
        link={"https://calpurniax.github.io/lista-de-tareas/"}
        title={'Lista de tareas con local storage'}/>
         <ProjectsArticle
        id={'cardCreator'}
        handleModals={handleModals}
        tech={['React', 'NodeJS']}        
        img={cardCreator_landing}
        alt={'Web para crear tarjetas de visita'}
        link={"https://calpurniax.github.io/lista-de-tareas/"}
        title={'Card Generator: crea tu tarjeta de visita'}/>
        <Modal projectObject={RandMProject} id='rickAndMorty' showModal={showModal} handleModal={handleModals} img={[{img:rickAndMorty_desk, text:"Versión desktop"}]}/>
        <Modal projectObject={casaCantoProject} id='casaCanto' showModal={showModal} handleModal={handleModals} img={[]}/>
        <Modal projectObject={taskListProject} id='taskList' showModal={showModal} handleModal={handleModals} img={[]}/>
        <Modal projectObject={cardCreator} id='cardCreator' showModal={showModal} handleModal={handleModals} img={[]}/>
       
      </ul>
      
    </section>
   )
}
export default Projects;
