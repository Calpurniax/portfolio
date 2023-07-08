import "../styles/components/nav.scss"

const Nav =({handleViews, vista})=>{
    const handleClick=(ev)=> handleViews(ev.target.id)       
    
    return (<nav className="c-nav">
        <ul className="c-nav__box"onClick={handleClick} >
            <li className={vista.landing?"c-nav__box__link active":"c-nav__box__link"} id="landing">Inicio</li>
            <li className={vista.summary?"c-nav__box__link active":"c-nav__box__link"} id="summary">Sobre mí</li>
            <li className={vista.projects?"c-nav__box__link active":"c-nav__box__link"} id="projects">Proyectos</li>
        </ul>
    </nav>
)}
export default Nav;

