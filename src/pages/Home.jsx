import bgCoat from "../assets/images/bgCoat.jpg"
import { ButtonProdcuts } from "../components/ButtonProducts"
import styles from "../styles/home.module.css"

function Home() {
    return (
        <main>
            <div className={styles.containerMain}>
                <img className={styles.bgImg} src={bgCoat} alt="background coat" />
                <div className={styles.containerBrand}>
                    <h1>Amaranta</h1>
                    <span>La tienda de ropa a tu medida</span>
                </div>
            </div>
            <p className={styles.aboutStore}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit exercitationem ipsum voluptatem est, aliquam totam modi non, error atque autem, dolor ut quaerat deleniti. Et harum illo ducimus porro iusto.
                Quo eligendi fugit ut in neque provident libero quos, maiores fuga voluptate qui iste minima doloribus natus pariatur delectus sapiente aperiam. Quo hic magnam dolores, et nobis ratione quasi quidem?</p>
            <ButtonProdcuts/>
            
        </main>
    )
}

export { Home }