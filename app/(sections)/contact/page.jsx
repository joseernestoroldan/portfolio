import React from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div className={styles.container}>
        <h3>Take A Coffee With Me</h3>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <div className={styles.fieldContainer}>
            <input className={styles.input} name="name" type="text" />
          </div>
          <label className={styles.label} htmlFor="email">Email:</label>
          <div className={styles.fieldContainer}>
            <input className={styles.input} name="email" type="email" />
          </div>
          <label className={styles.label} htmlFor="telephone">Telephone:</label>
          <div className={styles.fieldContainer}>
            <input className={styles.input} name="telephone" type="tel" />
          </div>
          <label className={styles.label} htmlFor="message">Message:</label>

          <textarea name="message" id="" className={styles.textArea} cols="30" rows="10"></textarea>

          <button className={styles.button}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
