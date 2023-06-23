import { FunctionComponent, ReactElement, ReactNode } from "react";
import styles from '../styles/Navbar.module.scss';

interface NavbarProps {
}
 
const Navbar: FunctionComponent<NavbarProps> = ():ReactElement => {
    return ( 
        <div className={styles.navbar}>
            Navbar
        </div>
     );
}
 
export default Navbar;