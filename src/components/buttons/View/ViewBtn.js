import React from "react";
import styles from "./View.scss";

export default function ViewBtn() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>View all</button>
    </div>
  );
}
