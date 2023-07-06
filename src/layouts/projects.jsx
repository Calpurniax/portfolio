import "../styles/layouts/projects.scss";
import { ProjectsArticle } from "../components/projects-article";
import rickandmorty_landing from "../images/R&M/portadaR&M_mobile.png"
const Projects =()=>{
   return (
    <section className="projects">
      <h3 className="projects__title">Muestras de proyectos</h3>
      <ProjectsArticle
      tech1={'React'}
      tech2={'Fetch'}
      img={rickandmorty_landing}
      alt={'Buscador de personajes de Rick and Morty'}
      link={"https://calpurniax.github.io/modulo-3-evaluacion-final-Calpurniax/"}
      title={'Buscador de personajes de Rick and Morty'}/>
    </section>
   )
}
export default Projects;
