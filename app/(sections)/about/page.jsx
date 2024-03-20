import React from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.left}>
          <div className={styles.profilePhoto}></div>
          <div className={styles.technologies}></div>
        </div>

        <div className={styles.aboutText}></div>
      </div>
    </div>
  );
};

export default AboutPage;
