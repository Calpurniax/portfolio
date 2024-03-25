import "../styles/layouts/summary.scss"
import  SummaryContainer  from "../components/summary-container"

export const Summary =()=>(
    <section className="summary">
        <h2 className="summary__title">Vida profesional</h2>
        <p className="summary__text">Pequeño resumen de mi trayectoria profesional, en mis ratos libres me encanta tocar <a className="summary__text__link" href="https://www.youtube.com/watch?v=3Lr429ePnpw&ab_channel=IsabelRomeoTaiko" target="_blank" rel="noreferrer"> percusión japonesa</a> (taiko) y cuidar del huerto comunitario. Antes de entrar en desarrollo hice cortos, como <a className="summary__text__link" href="https://www.youtube.com/watch?v=gAFH1xrQZrc&ab_channel=GhettoFilmSchool" target="_blank" rel="noreferrer">este</a> en el que fui directora de fotografía, pero también he estado en otros puestos (cámara, iluminación o producción) y también he trabajado en teatro como luminotécnica.
        </p>
        <div className="summary__box">         
            <div className="summary__box__border">
                <SummaryContainer title="Formación" 
                article={[{title:"Código Facilito", dates:"2024", text:"Bootcamp de Diseño, Interfaces y CSS"},
                {title:"Factoría F5", dates:"2023", text:"Ciberseguridad orientada a aplicaciones web"},
                {title:"Becas Google Fundae", dates:"2023", text:"Diseño y experiencia de usuario"},
                {title:"Adalab Digital", dates:"2022 - 2023", text:"Web development Bootcamp. Tecnologías: HTML, CSS, JS, SQLite, React, Github"},
                {title:"Escuela TAI", dates:"2010-2011", text:"Máster en cámara e Iluminación"},
                {title:"CES Felipe II", dates:"2003-2008", text:'Licenciada en Comunicación Audiovisual, último año cursado en "Ruhr Universität Bochum"'}]}               
                />
            </div>

            <SummaryContainer title="Experiencia" article={[
            {title:"Web developer en AF Films", dates:"Enero - marzo 2024", text:"Diseño y creación de nuevas webs, mantenimiento, gestión del hosting "},
            {title:"Web developer freelance para Graphic Studio y Escribanos del agua", dates: "2023-2024", text:"Creacion y mantenimiento web (HTML/CSS y Wordpress)"},
            {title:"Técnico en Ovide BS", dates:"2016 - 2022", text:'Preparación de equipos audiovisuales, asistencia al cliente, jefa técnica en "Encuentros Inesperados" para La Sexta TV'},
            {title:"Responsable de prácticas audiovisuales en Escuela TAI", dates:"2012-2016", text:"Puente de comunicación entre los alumnos y la escuela, resolución de problemas y supervisión"}]}      
            />
        </div>
    </section>
)