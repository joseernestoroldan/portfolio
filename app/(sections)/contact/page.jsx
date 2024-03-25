import React from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./contact.module.css";
import Form from "./form/form";


const ContactPage = () => {


  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div className={styles.container}>
        <h3>Take A Coffee With Me</h3>
        <Form/>
      </div>
    </div>
  );
};

export default ContactPage;
