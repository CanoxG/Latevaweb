import React from "react";
import styles from "./FlexMiddle.scss";

export default function FlexMiddle({ align = "between", children }) {
  return (
    <div className={[styles.flexMid, styles[align]].join(" ")}>
      {children}
    </div>
  );
}
