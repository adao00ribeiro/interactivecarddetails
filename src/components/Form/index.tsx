import { useContext, useState } from "react"
import { MyContext } from "../../context/mycontext";
import { ICardFront } from "../cardFront"
import styles from "./style.module.scss"
import validator from 'validator'
export function Form() {
    const { infoCards, setInfoCards }: any = useContext(MyContext);

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.containerCardHolder}>
                <label>Cardholder Name</label>
                <input value={infoCards.cardname} onChange={handleInput} placeholder="e.g. Jane Appleseed" type="text" name="cardname" />
            </div>
            <div className={styles.containerCardHolder}>
                <label>Card Number</label>
                <input maxLength={19} value={infoCards.cardnumber} onChange={handleInput} placeholder="e.g. 1234 5678 9123 0000" type="text" name="cardnumber" />
                {error.numberError &&
                    <p>Wrong format, number only</p>
                }
            </div>

            <div>
                <div className={styles.containerDateCVC}>
                    <div className={styles.containerDate}>
                        <label>Exp. Date (MM/YY)</label>
                        <div className={styles.containerDateInputs}>
                            <input value={infoCards.cardmes} onChange={handleInput} placeholder="MM" type="text" name="cardmes" />
                            <input value={infoCards.cardano} onChange={handleInput} placeholder="YY" type="text" name="cardano" />
                        </div>

                        {error.dateerror &&
                            <p>Can't be blank</p>
                        }

                    </div>
                    <div className={styles.containerCVC}>
                        <label>CVC</label>
                        <input value={infoCards.cardcvc} onChange={handleInput} placeholder="e.g. 123" type="text" name="cardcvc" />
                        {error.cvcerror &&
                            <p>Can't be blank</p>
                        }
                    </div>
                </div>
            </div>
            <button onClick={validateCreditCard}>Confirm</button>
        </form>
    )
}