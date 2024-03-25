"use client";
import React from "react";
import styles from "../contact.module.css"

const handleChangeInput = () =>{}

const handleSubmit = () =>{}

const Form = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="name">
        Name:
      </label>
      <div className={styles.fieldContainer}>
        <input
          className={styles.input}
          name="name"
          type="text"
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
        onChange={handleChangeInput}
      ></textarea>

      <button className={styles.button} onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
