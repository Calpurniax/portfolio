import Button from "../components/button"
import "../styles/layouts/landing.scss"
export const Landing =({pdfDocument})=>(
          <section className="landing">
            <h2 className="landing__title"><span className="landing__title__span">¡Hola!</span> Te doy la bienvenida a mi portfolio</h2>
            <p className="landing__text">Soy licenciada en Comunicación Audiovisual, y he decidido abrirme un nuevo camino en el sector IT. </p>
            <p className="landing__text">Para conocer más de mi carrera profesional, puedes ir a la sección "Sobre mí" y en "Proyectos" están algunos ejemplos de mi trabajo.</p>
            <p className="landing__text">Si quieres puedes descargar mi CV en PDF</p>
             <Button link={pdfDocument} text="Descarga"/>
          </section>
)