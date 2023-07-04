import "../styles/components/header.scss"
import sofiaPhoto from "../images/foto-sofia.jpg";
import {Icon} from "./icon"

export const Header =()=>(
    <header className="c-header">
        <div className="c-header__border">
            <img className = "c-header__img" alt="Sofía Gracia" src={sofiaPhoto}></img>
            <div className="c-header__textBox">
                <h1 className = "c-header__title">Sofía Gracia</h1>
                <p className = "c-header__text">Front-end developer from Madrid (Spain)</p>
                <ul className = "c-header__iconList">
                    <li>
                        <Icon link="https://github.com/Calpurniax"
                            iClass={'fa-brands fa-github-alt'}/>
                    </li>
                    <li>
                        <Icon link="https://twitter.com/calpurniax_"
                        iClass={'fa-brands fa-twitter'}/>
                    </li>
                    <li>
                        <Icon link="https://www.linkedin.com/in/sofia-gracia-pe%C3%B1a/"
                        iClass={'fa-brands fa-linkedin-in'}/>
                    </li>
                </ul>
            </div>
        </div>
    </header>
);