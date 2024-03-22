import React from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./about.module.css";
import AboutText from "./abouttext/AboutText";
import Image from "next/image";
import Icons from "./icons/incons";

const AboutPage = () => {
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.profilePhoto}>
          <Image
            src="/foto2.png"
            className={styles.photo}
            width={340}
            height={270}
            alt="profile foto"
          />
        </div>

        <div className={styles.aboutText}>
          <AboutText />
        </div>
        <div className={styles.technologies}>
        <h2 className={styles.subHeading}>Technologies I use now</h2>
         <Icons/>
          </div>
      </div>
    </div>
  );
};

export default AboutPage;
