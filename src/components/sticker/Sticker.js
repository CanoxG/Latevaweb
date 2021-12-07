import React from "react";
import styles from "./Sticker.scss";

export default function Sticker( {children} ) {
  return (
    <div className={styles.wallStick}>
      <div className={styles.blueStick}></div>
      {children}
    </div>
  );
}
