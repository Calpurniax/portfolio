import "../styles/components/projects-article.scss"
import { ProjectsTechButton } from "./projects-techButton"

export const ProjectsArticle = () => (
    <article className="projects__article">
        <div className="projects__container">
            <img src="" alt="Aqui va la foto" className="projects__img"/>
            <ProjectsTechButton text='tech1'/>
            <ProjectsTechButton text='tech2'/>
        </div>
        <h4 className="projects__title">Título</h4>
    </article>
)