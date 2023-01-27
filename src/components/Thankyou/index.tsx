import React, { MutableRefObject, useRef } from "react";
import styles from "./style.module.scss"
export function ThankYou() {

    return (
        <div className={styles.group} >
            <div className={styles.containerIcon}>
                <img src="/images/icon-complete.svg"></img>
            </div>
            <div className={styles.containerMensagem}>
                <span>THANK YOU!</span>
                <p>We've added your card details</p>
            </div>
            <button>Continue</button>
        </div >
    )

}




