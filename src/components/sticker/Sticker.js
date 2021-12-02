import React from "react";
import styles from "./Sticker.scss";

export default function Sticker() {
  return (
    <div className={styles.wallStick}>
      <div className={styles.blueStick}></div>
      <div className={styles.wallText}>20 years in the shoes of our customers</div>
    </div>
  );
}
