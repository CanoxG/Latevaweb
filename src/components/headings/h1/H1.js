import React from "react";
import styles from './H1.scss';


export default function H1({ children }) {
  return <h1 className={styles.lgBold}>{children}</h1>;
}
