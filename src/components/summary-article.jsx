import "../styles/components/summary-article.scss"
export const SummaryArticle=({object})=>(
    <li className="c-summaryArticle">
        <article className="c-summaryArticle__container">
            <h4 className="c-summaryArticle__title">{object.title}</h4>
            <p className="c-summaryArticle__dates">{object.dates}</p>
            <p className="c-summaryArticle__text">
            {object.text}
            </p>
        </article>
    </li>
)