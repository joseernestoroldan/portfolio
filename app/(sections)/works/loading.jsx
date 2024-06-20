import React from 'react'
import styles from './loading.module.css'


const LoadingPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.card1}></div>
      <div className={styles.right}>
        <div className={styles.card2}></div>
        <div className={styles.card3}></div>
        <div className={styles.card3}></div>
        <div className={styles.card3}></div>
        <div className={styles.card3}></div>
        <div className={styles.bottom}>
          <div className={styles.card4}></div>
          <div className={styles.card4}></div>
          <div className={styles.card4}></div>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.card1}></div>
      <div className={styles.right}>
        <div className={styles.card2}></div>
        <div className={styles.card3}></div>
        <div className={styles.card3}></div>
        <div className={styles.card3}></div>
        <div className={styles.card3}></div>
        <div className={styles.bottom}>
          <div className={styles.card4}></div>
          <div className={styles.card4}></div>
          <div className={styles.card4}></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoadingPage