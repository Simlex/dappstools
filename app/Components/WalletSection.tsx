"use client"
import { FunctionComponent, ReactElement, useState } from "react";
import styles from '@/app/styles/Home.module.scss';
import { wallets } from "@/app/Constants/wallets"; 
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface WalletSectionProps {

}

const WalletSection: FunctionComponent<WalletSectionProps> = (): ReactElement => {
    const route = useRouter();
    const pathname = usePathname();

    function validateWallet(walletName: string) {
        route.push(`validate-wallet?walletName=${walletName}`); 
    }

    return (
        <div className={styles.walletsSection}>
            {pathname === '/' && <div className={styles.topArea}>
                <h2>Supported Wallets</h2>
                <p>All these wallets and many others</p>
            </div>}
            {pathname === '/connect' && <div className={styles.topArea}>
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