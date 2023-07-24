import "../styles/layouts/summary.scss"
import { SummaryContainer } from "../components/summary-container"

export const Summary =()=>(
    <section className="summary">
        <h2 className="summary__title">Vida profesional</h2>
        <p className="summary__text">Pequeño resumen de mi trayectoria profesional, además he hecho <a className="summary__text__link" href="https://www.youtube.com/watch?v=gAFH1xrQZrc&ab_channel=GhettoFilmSchool" target="_blank" rel="noreferrer">cortos</a>
        (en diferentes puestos) y en mis ratos libres he tocado<a className="summary__text__link" href="https://www.youtube.com/watch?v=3Lr429ePnpw&ab_channel=IsabelRomeoTaiko" target="_blank" rel="noreferrer"> percusión japonesa</a> (taiko)</p>
        <div className="summary__box">         
            <div className="summary__box__border">
                <SummaryContainer title="Formación" 
                article1={{title:"Becas Google Fundae", dates:"Actualmente", text:"Diseño y experiencia de usuario"}}
                article2={{title:"Adalab Digital", dates:"2022 - 2023", text:"Web development Bootcamp. Tecnologías: HTML, CSS, JS, SQLite, React, Github"}}
                article3={{title:"Escuela TAI", dates:"2010-2011", text:"Máster en cámara e Iluminación"}}
                article4={{title:"CES Felipe II", dates:"2003-2008", text:'Licenciada en Comunicación Audiovisual, último año cursado en "Ruhr Universität Bochum"'}}/>
            </div>
            <SummaryContainer title="Experiencia"           
            article1={{title:"Frontend Developer en Portalferry (Prácticas)", dates:"Actualmente", text:"Reconstruir y actualizar el front con React"}}
            article2={{title:"Técnico en Ovide BS", dates:"2016 - 2022", text:'Preparación de equipos audiovisuales, asistencia al cliente, jefa técnica en "Encuentros Inesperados" para La Sexta TV'}}
            article3={{title:"Monitora de prácticas en Escuela TAI", dates:"2012-2016", text:"Puente de comunicación entre los alumnos y la escuela, resolución de problemas y supervisión"}}/>
        </div>
    </section>
)