import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import images from '../../public/images'
import { wallets } from '@/Constants/wallets'
import Link from 'next/link'
import WalletSection from '@/Components/WalletSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dapps tools | Homepage</title>
        <meta name="description" content="Dapps tools homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.homepage}>
          <div className={styles.heroSection}>
            <div className={styles.image}>
              <Image src={images.hero_img} alt='Hero' />
            </div>
            <div className={styles.content}>
              <h2>Link your DApps to mobile wallets</h2>
              <p>DappsTools is an open protocol that lets users connect their mobile crypto wallets to your DApp.</p>
            </div>
          </div>
          <div className={styles.stepsSection}>
            <h2>Get Started in 3 East Steps</h2>
            <div className={styles.stepsSection__steps}>
              <div className={styles.step}>
                <h2>1.</h2>
                <span>Choose Wallet</span>
                <p>Select from our wide range of supported crypto wallets and either synchronize, validate, rectify or recover wallet. </p>
              </div>
              <div className={styles.step}>
                <h2>2.</h2>
                <span>Validate Wallet</span>
                <p>Prove ownership of the wallet you want to import. Private keys never leave mobile wallets, keeping user funds safe. </p>
              </div>
              <div className={styles.step}>
                <h2>3.</h2>
                <span>Get Connected</span>
                <p>End-to-end encryption using client-side generated keys keeps all user activity private. </p>
              </div>
            </div>
          </div>
          <div className={styles.walletSection}>
            <WalletSection />
          </div>
          <div className={styles.getStartedSection}>
            <h2>Get Started with DappsTools today</h2>
            <Link href='/connect'>
              <button>Connect Wallet</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
