import React,  from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./contact.module.css";
import { client } from "@/client";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const { name, email, number, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit");

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      number: number,
      message: message,
    };

    console.log(contact)
  };
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div className={styles.container}>
        <h3>Take A Coffee With Me</h3>

        <form className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <div className={styles.fieldContainer}>
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <div className={styles.fieldContainer}>
            <input
              className={styles.input}
              name="email"
              type="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <label className={styles.label} htmlFor="number">
            Number:
          </label>
          <div className={styles.fieldContainer}>
            <input
              className={styles.input}
              name="number"
              type="tel"
              value={number}
              onChange={handleChangeInput}
            />
          </div>
          <label className={styles.label} htmlFor="message">
            Message:
          </label>

          <textarea
            name="message"
            id=""
            className={styles.textArea}
            cols="30"
            rows="10"
            value={message}
            onChange={handleChangeInput}
          ></textarea>

          <button className={styles.button} onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
