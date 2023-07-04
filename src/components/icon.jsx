import "../styles/components/icon.scss"
export const Icon =(props)=>(
    <a href={props.link} target="_blank" rel="noreferrer">
            <i className={`${props.iClass} c-header__iconList__icon ${props.dot}`}></i>
    </a>
)