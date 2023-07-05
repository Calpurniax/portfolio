import "../styles/layouts/summary.scss"
import { SummaryContainer } from "../components/summary-container"

export const Summary =()=>(
    <section className="summary">
        <h2 className="summary__title">Formación y experiencia</h2>
        <p className="summary__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quod amet consequuntur minus illo repellat nemo autem nesciunt doloribus blanditiis doloremque dicta, culpa sapiente eligendi, modi ratione totam magnam!</p>
        <div className="summary__box">         
            <div className="summary__box__border">
                <SummaryContainer/>
            </div>
            <SummaryContainer/>
        </div>
    </section>
)