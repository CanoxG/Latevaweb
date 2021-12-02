import React from "react";
import styles from "./BlockOne.scss";

export default function BlockOne({ children }) {
  return (
    <section className={styles.container}>
      <div className={styles.rowBlock}>
          {children}
      </div>
    </section>
  );
}
