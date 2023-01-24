import { useContext, useState } from "react"
import { MyContext } from "../../context/mycontext";
import { ICardFront } from "../cardFront"
import styles from "./style.module.scss"

export function Form() {
    const { infoCards, setInfoCards }: any = useContext(MyContext);

    const [error, setError] = useState({
        numberError: false,
        dateerror: false,
        cvcerror: false
    });
    const handleInput = (event) => {
        const { name, value } = event.target;
        const altered = (prev) => {
            const data = { ...prev, [name]: value };
            return data
        };
        setInfoCards(altered);
    }
    const handleSubmit = () => {
        console.log(infoCards)
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.containerCardHolder}>
                <label>Cardholder Name</label>
                <input value={infoCards.cardname} onChange={handleInput} placeholder="e.g. Jane Appleseed" type="text" name="cardname" />
            </div>
            <div className={styles.containerCardHolder}>
                <label>Card Number</label>
                <input value={infoCards.cardnumber} onChange={handleInput} placeholder="e.g. 1234 5678 9123 0000" type="text" name="cardnumber" />
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
            <button>Confirm</button>
        </form>
    )
}