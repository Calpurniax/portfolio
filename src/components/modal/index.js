import "../../styles/components/modal.scss"

const Modal = ({ projectObject, id, showModal, handleModal, img, link }) => {
    const renderImgs = () => {
        if (img.length > 0) {
            return img.map((eachImg, index) => {
                return <li key={index}><img className="modal__img" src={eachImg.img} alt={projectObject.title} /><p className="modal__img__title">{eachImg.text}</p></li>
            })
        }
    }
    const handleClick = (ev) => {
        handleModal(ev.currentTarget.id)
    }
    if (!showModal[id]) {
        return null
    }
    return (
        <article className="modal">
            <div className="modal__container">
                <h3 className="modal__title">{projectObject.title}</h3>
                <p className="modal__text">
                    {projectObject.text}
                </p>
                <ul>
                    {renderImgs()}
                </ul>
                <div className="modal__buttons"><p><a className="modal__link" href={link}>Visita la web</a></p><i id={id} className="fa-regular fa-circle-left modal__arrow" onClick={handleClick}></i></div>
            </div>
        </article>

    )
}
export default Modal