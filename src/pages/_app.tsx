import { useState } from 'react';
import { ICardFront } from '../components/cardFront';
import { MyContext } from '../context/mycontext';
import './../styles/globals.scss'

export default function App({ Component, pageProps }) {
  const [infoCards, setInfoCards] = useState<ICardFront>({
    cardnumber: "",
    cardname: "",
    cardmes: "",
    cardano: "",
    cardcvc: ""
  });
  const [IsConfirm, setIsConfirm] = useState(false);
  return (
    <MyContext.Provider value={{ infoCards, setInfoCards, IsConfirm, setIsConfirm }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}
