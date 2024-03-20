import Image from "next/image";
import { IoLanguageSharp } from "react-icons/io5";
import Menu from "../Menu/Menu";
import styles from "./navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Sidebar />

      <div>
        <Image
          src="/LogoColor.svg"
          alt="code2steps logo"
          className={styles.code2stepsLogo}
          width={80}
          height={20}
          priority
        />
      </div>

      <Menu />

      <div className={styles.containerLanguage}><IoLanguageSharp className={styles.language} /></div>

      
    </div>
  );
};

export default Navbar;
