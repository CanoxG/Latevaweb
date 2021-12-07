import React from "react";
import styles from './TextBoxRight.scss';

export default function TextBoxRight({ children }) {
  return <div className={styles.textBox}> {children} </div>;
}
