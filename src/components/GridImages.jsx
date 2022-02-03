import styles from "../styles/gridImages.module.css"
import {scarfImg} from "../assets/images/bufanda.jpg"
import {bustierImg} from "../assets/images/bustier.jpg"
import {infiniteScarfImg} from "../assets/images/bufandaInfinita.jpg"
import {brassierImg} from "../assets/images/brassier.jpg"


function GridImages() {
    return ( 
        <div className={styles.containerGrid}>
            <img src={scarfImg} alt="Modelo con prenda hecha en croshet"/>
            <img src={ bustierImg} alt="Modelo con prenda hecha en croshet"/>
            <img src={infiniteScarfImg } alt="Modelo con prenda hecha en croshet"/>
            <img src={brassierImg } alt="Modelo con prenda hecha en croshet"/>
        </div>
    )
}

export { GridImages }