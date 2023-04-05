import React, { MutableRefObject, useRef } from "react";
import styles from "./style.module.scss";
import Image from 'next/image'
export function ThankYou() {

    return (
        <div className={styles.group} >
            <div className={styles.containerIcon}>
                <Image src="/images/icon-complete.svg" alt={""} fill></Image>
            </div>
            <div className={styles.containerMensagem}>
                <span>THANK YOU!</span>
                <p>We&apos;ve added your card details</p>
            </div>
            <button>Continue</button>
        </div >
    )

}




