import React from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./contactsent.module.css";



const ContactSentPage = () => {




  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div className={styles.container}>
        <h3>We will be in touch so soon!</h3>
      </div>
    </div>
  );
};

export default ContactSentPage;
