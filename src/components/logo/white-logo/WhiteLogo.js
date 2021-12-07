import React from "react";
import styles from "./WhiteLogo.scss";
import {Link} from "react-router-dom";

export default function WhiteLogo() {
  return (
    <div className={styles.logo}>
      <picture>
        <Link to='/' >
        <img
          src={"https://www.latevaweb.com/web-design/latevaweb.svg"}
          alt="White logo"
        />
        </Link>
      </picture>
    </div>
  );
}
