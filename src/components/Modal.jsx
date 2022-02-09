import ReactDOM from 'react-dom';
import styles from "../styles/modal.module.css"

function Modal({ setStatusModal, url, message }) {
    const closeModal = () => { setStatusModal(prevState => !prevState) }
    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.containerModal}>
                <div className={styles.tittle}>
                    <h2>Completa tu compra!</h2>
                </div>
                <div className={styles.info}>
                    <p>Seras redireccionado a whatsapp para completar tu compra</p>
                    <div className={styles.btnBuy}>
                        <a href={url} onClick={message} target="_blank" rel="noreferrer">Continuar</a>
                    </div>
                </div>
                <button className={styles.close} onClick={closeModal}>x</button>
            </div>
        </div>, document.getElementById("modal")
    )
}
export { Modal }