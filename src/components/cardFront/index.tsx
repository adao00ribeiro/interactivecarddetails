import { useContext } from "react";
import { MyContext } from "../../context/mycontext";
import styles from "./style.module.scss"


export type ICardFront = {
    cardname: string,
    cardnumber: string,
    cardmes: string,
    cardano: string,
    cardcvc: string
}

export function CardFront() {
    const { infoCards, setInfoCards }: any = useContext(MyContext);
    const newName = () => {
        return infoCards.cardname == "" ? "Jane Appleseed" : infoCards.cardname;
    }
    const newNumber = () => {
        return infoCards.cardnumber == "" ? "0000 0000 0000 0000" : infoCards.cardnumber;
    }
    const newDate = () => {
        if (infoCards.cardmes == "" && infoCards.cardano == "") {
            return "00/00"
        }
        return infoCards.cardmes + "/" + infoCards.cardano;
    }

    return (
        <div className={styles.cardFront}>
            <div className={styles.cardMain}>
                <div className={styles.containerCirculos}>
                    <div className={styles.circulo1}></div>
                    <div className={styles.circulo2}></div>
                </div>
                <div className={styles.cardFrontInfo}>
                    <label >{newNumber()}</label>
                    <div className={styles.cardFrontInfoNameData}>
                        <span>  {newName()}</span>
                        <p>{newDate()}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}