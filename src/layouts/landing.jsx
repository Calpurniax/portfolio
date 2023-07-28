import Button from "../components/button"
import "../styles/layouts/landing.scss"
export const Landing =({pdfDocument})=>(
          <section className="landing">
            <h2 className="landing__title"><span className="landing__title__span">¡Hola!</span> Te doy la bienvenida a mi portfolio</h2>
            <p className="landing__text">Por favor siéntete como en casa, 
            puedes usar el navegador o seguir bajando para descubrir el contenido</p>
            <p>Aquí puedes descargar mi CV en PDF</p> <Button link={pdfDocument} text="Descarga"/>
          </section>
)