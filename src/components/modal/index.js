import "../../styles/components/modal.scss"

const Modal = ({ text, id, showModal, handleModal }) => {
    const handleClick = (ev) => {
        handleModal(ev.currentTarget.id)
        console.log(ev.currentTarget.id)
    }
    if (!showModal[id]) {
        return null
    }
    return (
        <article className="modal"  >
            <div className="modal__container">
                <h3 className="modal__title">{text}</h3>
                <p className="modal__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quo voluptate, nulla at commodi repudiandae modi dolores debitis accusamus nesciunt quis, officia dolorum natus numquam voluptas, quas in maxime libero.</p>
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