import React from "react";
import styles from './H2.scss';


export default function H2({ children }) {

  return (
    <h2 className={styles.midBold}>
      {children}
    </h2>
  )
}