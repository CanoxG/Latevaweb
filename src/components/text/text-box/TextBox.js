import React from "react";
import styles from "./TextBox.scss";

export default function TextBox({ children }) {
  return <div className={styles.textBox}> {children} </div>;
}
