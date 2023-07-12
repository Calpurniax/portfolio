const Modal = ({ id, showModal, handleModal }) => {
    const handleClick = (ev) => {
        handleModal()
        console.log(ev.currentTarget.id)
    }
    if (!showModal) {
        return null
    }
    return (
        <section className="modal" id={id} onClick={handleClick}>
            <h3>holiwis</h3>
        </section>

    )
}
export default Modal