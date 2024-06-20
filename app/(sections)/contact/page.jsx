import React from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./contact.module.css";
import { client } from "@/client";
import Button from "./button/Button";
import { redirect } from "next/navigation";

const ContactPage = () => {

  async function addContact(formData){
    'use server'
    const {name, email, number, message} = Object.fromEntries(formData)

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      number: number,
      message: message,
    };
    try {
      await client.create(contact)
    } catch (error) {
      console.log(error)
      throw new Error("Failed to create user")
    }
    redirect("/contactsent")
  }


  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div className={styles.container}>
        <h3>Take A Coffee With Me</h3>
        <form action={addContact} className={styles.form}>
      <label className={styles.label} htmlFor="name">
        Name:
      </label>
      <div className={styles.fieldContainer}>
        <input
          className={styles.input}
          name="name"
          type="text"

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
      ></textarea>
   <Button/>
    </form>
      </div>
    </div>
  );
};

export default ContactPage;
