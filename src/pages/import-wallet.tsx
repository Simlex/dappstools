import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/ImportWallet.module.scss';
import Image from "next/image";
import images from "../../public/images";
import { useRouter } from "next/router";

interface ImportWalletProps {

}

const ImportWallet: FunctionComponent<ImportWalletProps> = (): ReactElement => {
    const router = useRouter();
    return (
        <div className={styles.wallet}>
            <div className={styles.qrImage}>
                <Image src={images.qrcode} alt="QR" />
            </div>
            <span className={styles.loader}></span>
            <h3>Invalid Phrase</h3>
            <p>Unrecognized wallet, try again.</p>
            <button onClick={() => router.reload()}>TRY AGAIN</button>
        </div>
    );
}

export default ImportWallet;