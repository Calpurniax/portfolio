import "../../styles/components/modal.scss"

const Modal = ({ projectObject, id, showModal, handleModal }) => {
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
                    <li><img src="" alt="" />imagen1</li>
                    <li><img src="" alt="" />imagen2</li>
                </ul>
                <div><i id={id} className="fa-regular fa-circle-left modal__arrow" onClick={handleClick}></i></div>
            </div>
        </article>

    )
}
export default Modal