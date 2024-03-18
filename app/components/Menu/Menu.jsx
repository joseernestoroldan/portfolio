"use client";
import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.links}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/about" className={styles.links}>About</Link>
        </li>
        <li className={styles.item}>
          <Link href="/works" className={styles.links}>Works</Link>
        </li>
        <li className={styles.item}>
          <Link href="/contact" className={styles.links}>Contact</Link>
        </li>
        <li className={styles.item}>
          <Link href="/learn" className={styles.links}>Learn</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
