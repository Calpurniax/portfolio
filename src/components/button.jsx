import "../styles/components/button.scss"
const Button = ({link, text}) => {  
    return (
        <div className="buttons__container">
            <a className="buttons__link" href={link} download="Sofia Gracia CV" target="_blank" rel="noreferrer">{text}</a>
        </div>
    )
};
export default Button 