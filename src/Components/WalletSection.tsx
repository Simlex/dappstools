import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/Home.module.scss';
import { wallets } from "@/Constants/wallets";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface WalletSectionProps {

}

const WalletSection: FunctionComponent<WalletSectionProps> = (): ReactElement => {
    const route = useRouter();

    function validateWallet(walletName: string) {
        route.push(`validate-wallet?walletName=${walletName}`); 
    }

    return (
        <div className={styles.walletsSection}>
            {route.pathname === '/' && <div className={styles.topArea}>
                <h2>Supported Wallets</h2>
                <p>All these wallets and many others</p>
            </div>}
            {route.pathname === '/connect' && <div className={styles.topArea}>
                <h2>Choose A Wallet</h2>
                <p>Select a wallet to continue</p>
            </div>}
            <div className={styles.walletsSection__walletGroup}>
                {wallets.map((wallet, index) =>
                    // <Link href='/validate-wallet' key={index}>
                        <div className={styles.wallet} key={index} onClick={() => validateWallet(wallet.name)}>
                            <div className={styles.walletImage}>
                                <Image src={wallet.image} alt={wallet.name} />
                            </div>
                            <p>{wallet.name}</p>
                        </div>
                    // </Link>
                )}
            </div>
        </div>
    );
}

export default WalletSection;