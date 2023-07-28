import "../styles/components/modal.scss"
const Button = ({link, text}) => {  
    return (
        <div className="modal__buttons">
            <a className="modal__link" href={link} download="Sofia Gracia CV" target="_blank" rel="noreferrer">{text}</a>
        </div>
    )
};
export default Button 