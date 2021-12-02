import React from "react";
import styles from './Logo.scss'


export default function Logo() {

  return (
    <div className={styles.logo}>
      <picture>
        <img
          src={"https://www.latevaweb.com/images/logos/logo_color.svg"}
          alt="Colorful"
        />
      </picture>
    </div>
  );
}
