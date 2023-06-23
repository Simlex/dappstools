import { FunctionComponent, ReactElement, ReactNode } from "react";
import styles from '../styles/Footer.module.scss';

interface FooterProps {
}
 
const Footer: FunctionComponent<FooterProps> = ():ReactElement => {
    return ( 
        <div className={styles.Footer}>
            Footer
        </div>
     );
}
 
export default Footer;