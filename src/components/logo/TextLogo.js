import React from "react";
import styles from "./Logo.scss";


export default function TextLogo() {

  return (
    <div className={styles.icon}>
      Made with <span className={styles.heartIcon}>♡</span> in Barcelona
    </div>
  )
}