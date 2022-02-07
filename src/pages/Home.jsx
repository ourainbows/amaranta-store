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
                <p className={styles.aboutStore}>En Amaranta encontraras los productos con la mejor calidad del mercado.<br/>
                Todos nuestros productos son fabricados 100% a mano.
                </p>
                {/* <ButtonProdcuts /> */}
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