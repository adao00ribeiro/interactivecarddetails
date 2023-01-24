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
  return (
    <MyContext.Provider value={{ infoCards, setInfoCards }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}
