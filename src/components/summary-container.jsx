import "../styles/components/summary-container.scss"
import { SummaryArticle } from "./summary-article"
const SummaryContainer=({title, article})=>{
    const renderArticles =()=>{
        return article.map(eachArticle=>{
            return  <SummaryArticle object={eachArticle}/>
        })
        }
            
    
    return(
    <section className="c-summaryContainer">
        <h3 className="c-summaryContainer__title">{title}</h3>
       <ul className="c-summaryContainer__list">
        {renderArticles()}            
       </ul>
    </section>
    )
}

export default SummaryContainer
