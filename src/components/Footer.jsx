import logo from "../assets/icons/logoFooter.svg"
import styles from "../styles/footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerLogoFooter}>
                <img src={logo} alt="Logo de la empresa"/>
                <span>Amaranta</span>
                <a href="https://www.tiktok.com/@lacatt99">@lacatt99</a>
            </div>
            <span className={styles.creator}>Powered by Juan Casas</span>
        </footer>
    )
}

export {Footer}