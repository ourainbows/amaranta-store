import logo from "../assets/icons/logoFooter.svg"
import styles from "../styles/footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerLogoFooter}>
                <img src={logo} alt="Logo de la empresa"/>
                <span>Amaranta</span>
            </div>
        </footer>
    )
}

export {Footer}