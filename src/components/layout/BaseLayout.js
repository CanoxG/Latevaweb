import React from "react";
import styles from "./BaseLayout.scss";

export default function BaseLayout({ children }) {
  return (
    <main className={styles.layoutFrame}>
      {children}
    </main>
  );
}
