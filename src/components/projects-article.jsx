import "../styles/components/projects-article.scss"
import { ProjectsTechButton } from "./projects-techButton"

export const ProjectsArticle = (props) => {
    const renderTechs=()=>{
        if (props.tech.length>0){
            return props.tech.map((eachTech, index)=>{        
                return <ProjectsTechButton text={eachTech} key={index}/>
               })
        }       
    }
    return(
    <li>
        <article className="projects__article">
            <div className="projects__article__container">
                <div className="projects__article__techDiv">        
                    {renderTechs()}
                </div>
                <img src={props.img} alt={props.alt} className="projects__article__img"/>
            </div>
            <a href={props.link} className="projects__article__title">{props.title}</a>
            <div className="projects__article__borderBottom"></div>
        </article>
    </li>
)};