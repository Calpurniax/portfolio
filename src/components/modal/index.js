import "../../styles/components/modal.scss"

const Modal = ({ projectObject, id, showModal, handleModal, img, img2 }) => {
    const renderImgs = () => {
        if (img.length > 0) {
            return img.map((eachImg, index) => {
                return <li className="modal__img" key={index}><img className="modal__img" src={eachImg.img} alt={projectObject.title} /><p>{eachImg.text}</p></li>
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
                <div><i id={id} className="fa-regular fa-circle-left modal__arrow" onClick={handleClick}></i></div>
            </div>
        </article>

    )
}
export default Modal