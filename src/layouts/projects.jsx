import "../styles/layouts/projects.scss";
import { ProjectsArticle } from "../components/projects-article";
import rickandmorty_landing from "../images/r&m/portadaR&M_mobile.png"
import taskList_landing from "../images/task-list/portadaTaskList_mobile.png"
import casaCanto_landing from "../images/casa-canto/portadaCasaCanto_mobile.png"
import cardCreator_landing from "../images/card-creator/card-creator_desktop.png"
import Modal from "../components/modal";

const Projects =({showModal,handleModal})=>{
  const handleBtn=()=>{
    handleModal()
  }
   return (
    <section className="projects">
      <h3 className="projects__title">Muestras de proyectos</h3>
      <ul className="projects__container">
        <ProjectsArticle
        tech={['React','Fetch']}
        tech2={'Fetch'}
        img={rickandmorty_landing}
        alt={'Buscador de personajes de Rick and Morty'}
        link={"https://calpurniax.github.io/modulo-3-evaluacion-final-Calpurniax/"}
        title={'Buscador de personajes de Rick and Morty'}/>
        <ProjectsArticle
        tech={['Wordpress']}
        img={casaCanto_landing}
        alt={'web Casa Canto'}
        link={"https://casa-canto.com/"}
        title={'Casa Canto - alquiler vacacional'}/>
         <ProjectsArticle
        tech={['React', 'Local Storage']}        
        img={taskList_landing}
        alt={'Web para crear tu lista de tareas'}
        link={"https://calpurniax.github.io/lista-de-tareas/"}
        title={'Lista de tareas con local storage'}/>
         <ProjectsArticle
        tech={['React', 'NodeJS']}        
        img={cardCreator_landing}
        alt={'Web para crear tarjetas de visita'}
        link={"https://calpurniax.github.io/lista-de-tareas/"}
        title={'Card Generator: crea tu tarjeta de visita'}/>
        <Modal id={'modal1'} showModal={showModal} handleModal={handleModal}/>
        <button onClick={handleBtn}>showModal</button>
      </ul>
      
    </section>
   )
}
export default Projects;
