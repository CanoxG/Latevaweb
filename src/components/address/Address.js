import React from "react";
import styles from "./Address.scss";

export default function Address( { children }) {
  return (
    <div className={styles.addressBar}>
      <ul className={styles.rowList}>
        <li className={styles.listItem}>Web design La Teva Web SL ®</li>
        <li className={styles.listItem}>
          Diputació 256, 4t 1a, 08007 Barcelona
        </li>
        <li className={styles.listItem}>Phone +34 93 250 35 86</li>
        <li className={styles.listItem}>info@latevaweb.com</li>
      </ul>
      {children}
    </div>
  );
}
