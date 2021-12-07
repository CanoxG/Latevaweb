import React from "react";
import styles from "./BlockOne.scss";

export default function BlockOne({ children, color = '' }) {
  return (
    <section className={styles.container}>
      <div className={`${styles.rowBlock} ${styles[color]}`}>
          {children}
      </div>
    </section>
  );
}