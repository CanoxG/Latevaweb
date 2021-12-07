import React from "react";
import styles from "./Header.scss";
import WhiteLogo from "../logo/white-logo/WhiteLogo";
import Navbar from "../navbar/Navbar";
import Contact from "../buttons/contact/Contact";
import { Phone } from "../phone/Phone";
import Language from "../language/Language";

export default function Header() {
  return (
    <header>
        <WhiteLogo />
      <div className={styles.mainMenu}>
        <Navbar />
        <Phone />
        <Contact />
        <Language />
      </div>
    </header>
  );
}
