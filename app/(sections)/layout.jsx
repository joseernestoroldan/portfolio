import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from './sections.module.css'


const SectionsLayout = ({ children }) => {
  return (

      <div className={styles.wrapper}>
        <Navbar/>
        {children}
      </div>
  );
};

export default SectionsLayout;
