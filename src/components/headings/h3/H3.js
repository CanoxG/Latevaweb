import React from "react";
import styles from './H3.scss';


export default function H3({ children }) {
  return <h3 className={styles.mid}>{children}</h3>;
}
