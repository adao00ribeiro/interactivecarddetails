import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from './../styles/Home.module.scss'
import { CardFront, ICardFront } from '../components/cardFront'
import { CardBack } from '../components/cardBack'
import { Form } from '../components/Form'
import { ThankYou } from '../components/Thankyou'
import { MyContext } from '../context/mycontext'
import { MutableRefObject, useContext, useRef } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { IsConfirm, setIsConfirm }: any = useContext(MyContext);
  const divFliperRef = useRef<HTMLDivElement>();
  const showDivContainerRef = (div: MutableRefObject<HTMLDivElement>, string: string) => {
    if (div.current) {
      div.current.classList.add(string)
    }
  }
  if (IsConfirm) {
    showDivContainerRef(divFliperRef, styles.flipperRotation)
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.containerLeft}>
          <div className={styles.containerCards}>
            <CardFront></CardFront>
            <CardBack></CardBack>
          </div>
        </div>
        <div className={styles.containerRight} >
          <div className={styles.flipper} ref={divFliperRef}>
            <Form></Form>
            <ThankYou></ThankYou>
          </div>
        </div>
      </main>
    </>
  )
}
