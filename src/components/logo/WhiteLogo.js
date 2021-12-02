import React from "react";
import styles from "./Logo.scss";

export default function WhiteLogo() {
  return (
    <div className={styles.logo}>
      <picture>
        <img
          src={"https://www.latevaweb.com/web-design/latevaweb.svg"}
          alt="White logo"
        />
      </picture>
    </div>
  );
}
