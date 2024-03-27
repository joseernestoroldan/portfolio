'use client'
import React from "react";
import { useFormStatus } from 'react-dom'
import styles from "../contact.module.css";

const Button = () => {
    const { pending } = useFormStatus()
  return <button className={styles.button} type="submit" aria-disabled={pending}>Send</button>;
};

export default Button;
