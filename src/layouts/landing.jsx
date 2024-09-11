import Button from "../components/button"
import "../styles/layouts/landing.scss"
export const Landing =({pdfDocument})=>(
          <section className="landing">
            <h2 className="landing__title"><span className="landing__title__span">¡Hola!</span> Te doy la bienvenida a mi portfolio</h2>
            <p className="landing__text">Soy desarrolladora full stack, con conocimientos de UX/UI y CI/CD. Mi formación en comunicación audiovisual me ha proporcionado una mirada entrenada para el diseño y la usabilidad, permitiéndome abordar cada proyecto con una perspectiva integral. Entiendo la importancia de combinar la funcionalidad técnica con una estética atractiva, lo que se traduce en interfaces intuitivas y visualmente profesionales. </p>
            <p className="landing__text">Para conocer más de mi carrera profesional, puedes ir a la sección "Sobre mí" y en "Proyectos" están algunos ejemplos de mi trabajo.</p>
            <div className="landing__downloadBox">
              <p className="landing__text">Si quieres puedes descargar mi CV en PDF</p>
               <Button link={pdfDocument} text="Descarga"/>
            </div>
          </section>
)