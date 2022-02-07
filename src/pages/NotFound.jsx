import styles from "../styles/notFound.module.css"
function NotFound() {
    return (
        <div className={styles.notFound}><span>404</span><p>Lo sentimos, la pagina que estas buscando no existe :(</p></div>
    )
}

export {NotFound}