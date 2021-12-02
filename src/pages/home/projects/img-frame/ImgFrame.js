import React from "react";
import styles from "./ImgFrame.scss";


export default function ImgFrame({ children, size = "imgFrame", align = 'imgFrame' }) {
  return (
    <div className={`${styles.imgFrame} ${styles[size]} ${styles[align]}`}>
      {children}
    </div>
  );
}