"use client"
import { FunctionComponent, ReactElement } from "react";
import styles from '@/app/styles/Connect.module.scss';
import WalletSection from "@/app/Components/WalletSection";

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