import "../styles/components/summary-container.scss"
import { SummaryArticle } from "./summary-article"
export const SummaryContainer=()=>(
    <section className="c-summaryContainer">
        <h3 className="c-summaryContainer__title">Formación</h3>
       <ul className="c-summaryContainer__list">
            <SummaryArticle/>
            <SummaryArticle/>
       </ul>
    </section>
)