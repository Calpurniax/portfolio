import "../styles/components/nav.scss"

const Nav =({handleViews})=>{
    const handleClick=(ev)=> handleViews(ev.target.id)       
    
    return (<nav className="c-nav">
        <ul className="c-nav__box"onClick={handleClick} >
            <li className="c-nav__box__link"  id="landing">Inicio</li>
            <li className="c-nav__box__link" id="summary">Sobre mí</li>
            <li className="c-nav__box__link" id="projects">Proyectos</li>
        </ul>
    </nav>
)}
export default Nav;

