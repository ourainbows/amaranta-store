import styles from "../styles/gridImages.module.css"

import scarfImg from "../assets/images/bufanda.jpg"
import bustierImg from "../assets/images/bustier.jpg"
import infiniteScarfImg from "../assets/images/bufandaInfinita.jpg"
import brassierImg from "../assets/images/brassier.jpg"
import grayScarf from "../assets/images/grayScarf.jpeg"
import yellowShirt from "../assets/images/shirtYellow.jpg"



function GridImages() {
    return (
        <div className={styles.container}>
            <div className={styles.gridContainer} >
                <div className={styles.one}>
                    <img
                        className={styles.gridImage}
                        src={scarfImg}
                        alt="Modelo con prenda hecha en croshet" />
                </div>
                <div className={styles.two}>
                    <img
                        className={styles.gridImage}
                        src={bustierImg}
                        alt="Modelo con prenda hecha en croshet" />
                </div>
                <div className={styles.three}>
                    <img
                        className={styles.gridImage}
                        src={infiniteScarfImg}
                        alt="Modelo con prenda hecha en croshet" />
                </div>
                <div className={styles.four}>
                    <img
                        className={styles.gridImage}
                        src={grayScarf}
                        alt="Modelo con prenda hecha en croshet" />
                </div>
                <div className={styles.five}>
                    <img
                        className={styles.gridImage}
                        src={yellowShirt}
                        alt="Modelo con prenda hecha en croshet" />
                </div>
                <div className={styles.six}>
                    <img
                        className={styles.gridImage}
                        src={brassierImg}
                        alt="Modelo con prenda hecha en croshet" />
                </div>
            </div>
        </div>
    )
}

export { GridImages }