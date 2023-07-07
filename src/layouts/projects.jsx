import "../styles/layouts/projects.scss";
import { ProjectsArticle } from "../components/projects-article";
import rickandmorty_landing from "../images/r&m/portadaR&M_mobile.png"
import taskList_landing from "../images/task_list/portadaTaskList_mobile.png"
import casaCanto_landing from "../images/casaCanto/portadaCasaCanto_mobile.png"

const Projects =()=>{
   return (
    <section className="projects">
      <h3 className="projects__title">Muestras de proyectos</h3>
      <div className="projects__container">
        <ProjectsArticle
        tech1={'React'}
        tech2={'Fetch'}
        img={rickandmorty_landing}
        alt={'Buscador de personajes de Rick and Morty'}
        link={"https://calpurniax.github.io/modulo-3-evaluacion-final-Calpurniax/"}
        title={'Buscador de personajes de Rick and Morty'}/>
        <ProjectsArticle
        tech1={'Wordpress'}
        img={casaCanto_landing}
        alt={'web Casa Canto'}
        link={"https://casa-canto.com/"}
        title={'Casa Canto - alquiler vacacional'}/>
         <ProjectsArticle
        tech1={'React'}
        tech2={'Local Storage'}
        img={taskList_landing}
        alt={'Lista de tareas'}
        link={"https://calpurniax.github.io/lista-de-tareas/"}
        title={'Lista de tareas con local storage'}/>
      </div>
      
    </section>
   )
}
export default Projects;
