import React, { useContext } from "react";
import { MyContext } from "../../context/mycontext";
import styles from "./style.module.scss"
export class CardBack extends React.Component {
    static contextType = MyContext
    render() {
        const { infoCards, setInfoCards }: any = this.context

        const newCvc = () => {
            return infoCards.cardcvc == "" ? "000" : infoCards.cardcvc;
        }
        return (
            <div className={styles.cardBack}>
                <div className={styles.cardMain}>
                    <label>{newCvc()}</label>
                </div>
            </div >
        )
    }
}




