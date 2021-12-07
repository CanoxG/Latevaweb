import React from "react";
import styles from "./Logo.scss";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <picture>
        <Link to="/">
          <img
            src={"https://www.latevaweb.com/images/logos/logo_color.svg"}
            alt="Colorful"
          />
        </Link>
      </picture>
    </div>
  );
}
