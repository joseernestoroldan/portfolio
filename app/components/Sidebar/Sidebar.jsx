"use client";
import styles from "./sidebar.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.sidebar}>
      {!toggle && <div className={styles.containerIcon} onClick={() => {setToggle(!toggle)}}><GiHamburgerMenu className={styles.icon}/></div>}
      {toggle && <div className={styles.containerIcon} onClick={() => {setToggle(!toggle)}}><IoMdClose className={styles.icon}/></div>}
            
      <div className={toggle === true ? styles.containerOpen : styles.containerClose}>
        <div className={styles.navContainer}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={styles.links}>Home</Link>
            </li>
            <li className={styles.item}>
              <Link href="/about" className={styles.links} onClick={() => setToggle(false)}>About</Link>
            </li>
            <li className={styles.item}>
              <Link href="/works" className={styles.links} onClick={() => setToggle(false)}>Works</Link>
            </li>
            <li className={styles.item}>
              <Link href="/contact" className={styles.links} onClick={() => setToggle(false)}>Contact</Link>
            </li>
            <li className={styles.item}>
              <Link href="/learn" className={styles.links} onClick={() => setToggle(false)}>Learn</Link>
            </li>
          </ul>

        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
