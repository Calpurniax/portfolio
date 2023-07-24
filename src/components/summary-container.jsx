import "../styles/components/summary-container.scss"
import { SummaryArticle } from "./summary-article"
export const SummaryContainer=({title, article1, article2, article3})=>(
    <section className="c-summaryContainer">
        <h3 className="c-summaryContainer__title">{title}</h3>
       <ul className="c-summaryContainer__list">
            <SummaryArticle object={article1}/>
            <SummaryArticle object={article2}/>
            <SummaryArticle object={article3}/>
       </ul>
    </section>
)