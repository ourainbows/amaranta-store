import bgCoat from "../assets/images/bgCoat.jpg"
import { ButtonProdcuts } from "../components/ButtonProducts"
import { Footer } from "../components/Footer"
import { GridImages } from "../components/GridImages"
import styles from "../styles/home.module.css"

function Home() {
    return (
        <>
            <main>
                <div className={styles.containerMain}>
                    <img className={styles.bgImg} src={bgCoat} alt="background coat" />
                    <div className={styles.containerBrand}>
                        <h1>Amaranta</h1>
                        <span>La tienda de ropa a tu medida</span>
                    </div>
                </div>
                <div className={styles.containerAboutStore}>
                <p className={styles.aboutStore}>Amaranta, es un emprendimiento que aspira llegar a todos los corazones.
                    Tenemos una amplia variedad de productos con una excelente calidad y lo mejor ¡Son realizados 100% a mano!
                        <br />Puedes adquirir productos, para ti, para regalar o incluso para tu mascota.
                        <br />No dudes en comprar la amplia variedad de productos con una excelente calidad y lo mejor ¡Son realizados 100% a mano! <br />¡Pide ahora!
                </p>
                </div>
                <GridImages />
                <ButtonProdcuts />
                <div className={styles.containerSeeTiktok}>
                    <a href="https://www.tiktok.com/@lacatt99" className={styles.seeTiktok}>👉 Mira aqui nuestra cuenta de TikTok</a>
                </div>
            </main>
            <Footer />
        </>
    )
}

export { Home }