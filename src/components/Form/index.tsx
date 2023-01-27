import { MutableRefObject, useContext, useRef, useState } from "react"
import { MyContext } from "../../context/mycontext";
import { ICardFront } from "../cardFront"
import styles from "./style.module.scss"
import validator from 'validator'
export function Form() {
    const { infoCards, setInfoCards, setIsConfirm }: any = useContext(MyContext);
    const FormRef = useRef<HTMLFormElement>();
    const [error, setError] = useState({
        numberError: false,
        dateerror: false,
        cvcerror: false
    });

    function validateCreditCard() {
        const formatNumber = /^[0-9]+$/;
        setError((prev) => {
            const data = { ...prev, numberError: false };
            return data
        });
        setError((prev) => {
            const data = { ...prev, dateerror: false };
            return data
        });
        setError((prev) => {
            const data = { ...prev, cvcerror: false };
            return data
        });
        if (!validator.isCreditCard(infoCards.cardnumber.toString())) {
            setError((prev) => {
                const data = { ...prev, numberError: true };
                return data
            });

        }
        if (infoCards.cardmes == "" || infoCards.cardano == "") {
            setError((prev) => {
                const data = { ...prev, dateerror: true };
                return data
            });

        }
        if (infoCards.cardcvc == "") {
            setError((prev) => {
                const data = { ...prev, cvcerror: true };
                return data
            });

        }
        if (error.cvcerror == false || error.dateerror == false && error.numberError == false) {

            setIsConfirm(true);
        }

    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        var newValue = value;
        if (name == "cardnumber") {
            newValue = cc_format(value);
        }
        const altered = (prev) => {
            const data = { ...prev, [name]: newValue };
            return data
        };
        setInfoCards(altered);
    }
    const handleSubmit = (event) => {
        console.log(infoCards)
        event.preventDefault();
    }
    function cc_format(value: string) {
        const v = value
            .replace(/\s+/g, "")
            .substring(0, 16);
        const parts = [];
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substring(i, i + 4));
        }
        return parts.length > 1 ? parts.join(" ") : value;
    }

    return (
        <form className={styles.form} ref={FormRef} onSubmit={handleSubmit}>
            <div className={styles.groupName}>
                <label>Cardholder Name</label>
                <input className={styles.input} value={infoCards.cardname} onChange={handleInput} placeholder="e.g. Jane Appleseed" type="text" name="cardname" />
            </div>
            <div className={styles.groupNumber}>

                <label>Card Number</label>
                <input className={styles.input} maxLength={19} value={infoCards.cardnumber} onChange={handleInput} placeholder="e.g. 1234 5678 9123 0000" type="text" name="cardnumber" />
                {error.numberError &&
                    <span>Wrong format, number only</span>
                }
            </div>
            <div className={styles.groupDateCVC}>
                <div className={styles.containerDate}>
                    <label>Exp. Date (MM/YY)</label>
                    <div className={styles.containerDateInputs}>
                        <input className={styles.input} value={infoCards.cardmes} onChange={handleInput} placeholder="MM" type="text" name="cardmes" />
                        <input className={styles.input} value={infoCards.cardano} onChange={handleInput} placeholder="YY" type="text" name="cardano" />
                    </div>
                    {error.dateerror &&
                        <span>Can't be blank</span>
                    }
                </div>
                <div className={styles.containerDate}>
                    <label>CVC</label>
                    <div className={styles.containerDateInputs}>
                        <input className={styles.input} value={infoCards.cardcvc} onChange={handleInput} placeholder="e.g. 123" type="text" name="cardcvc" />
                    </div>
                    {error.cvcerror &&
                        <span>Can't be blank</span>
                    }
                </div>
            </div>
            <button className={styles.btn} onClick={validateCreditCard}>Confirm</button>
        </form >
    )
}