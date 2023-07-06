import "../styles/components/projects-article.scss"
import { ProjectsTechButton } from "./projects-techButton"

export const ProjectsArticle = (props) => (
    <article className="projects__article">
        <div className="projects__article__container">            
            <div className="projects__article__techDiv">
                <ProjectsTechButton text={props.tech1}/>
                <ProjectsTechButton text={props.tech2}/>
            </div>
            <img src={props.img} alt={props.alt} className="projects__article__img"/>
        </div>
        <a href={props.link} className="projects__article__title">{props.title}</a>
        <div className="projects__article__borderBottom"></div>
    </article>
)