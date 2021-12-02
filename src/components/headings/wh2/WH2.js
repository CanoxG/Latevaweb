import React from "react";
import styles from './WH2.scss';


export default function WH2({ children }) {

  return (
    <h2 className={styles.midWBold}>
      {children}
    </h2>
  )
}