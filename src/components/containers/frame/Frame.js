import React from "react";
import styles from "./Frame.scss";

export default function Frame({ children }) {
  return (
    <section className={styles.frame}>
      {children}
    </section>
  );
}
