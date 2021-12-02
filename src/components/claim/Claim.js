import React from "react";
import styles from "./Claim.scss";
import RedBtn from "../buttons/red/RedBtn";
import H1 from "../headings/h1/H1";

export default function Claim() {
  return (
    <div className={styles.container}>
      <H1>Web design Barcelona</H1>
      <p className={styles.text}>
        20 years in web design and digital marketing from Barcelona
      </p>
      <RedBtn />
    </div>
  );
}
