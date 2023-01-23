import styles from "./style.module.scss"

export function CardFront() {
    return (
        <div className={styles.cardFront}>

            <div className={styles.cardMain}>
                <div className={styles.containerCirculos}>
                    <div className={styles.circulo1}></div>
                    <div className={styles.circulo2}></div>
                </div>
                <div className={styles.cardFrontInfo}>
                    <label>0000 0000 0000 0000</label>
                    <div className={styles.cardFrontInfoNameData}>
                        <span>  Jane Appleseed</span>
                        <p> 00/00</p>
                    </div>
                </div>
            </div>
        </div >
    )
}