import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/Connect.module.scss';
import WalletSection from "@/Components/WalletSection";

interface ConnectProps {
    
}
 
const Connect: FunctionComponent<ConnectProps> = ():ReactElement => {
    return ( 
        <div className={styles.connectPage}>
            <WalletSection />
        </div>
     );
}
 
export default Connect;