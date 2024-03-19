import { FunctionComponent, ReactElement } from "react";
import styles from '@/app/styles/Navbar.module.scss';
import Image from "next/image";
import images from "@/public/images"; 
import Link from "next/link";

interface NavbarProps {
}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    return (
        <div className={styles.navbar}>
            <Link href='/'>
                <div className={styles.logoArea}>
                    <div className={styles.logo}>
                        <Image src={images.logo} alt="Logo" />
                    </div>
                    <h3>DappsTools</h3>
                </div>
            </Link>
            <Link href='/connect'>
                <button>Connect</button>
            </Link>
        </div>
    );
}

export default Navbar;