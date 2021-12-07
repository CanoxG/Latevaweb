import React from "react";
import styles from "./Footer.scss";
import FooterList from "../list/footer/FooterList";
import Address from "../address/Address";
import FlexMiddle from "../containers/flex-middle/FlexMiddle";
import TextLogo from "../logo/text-logo/TextLogo";
import BaseContainer from "../containers/section-container/BaseContainer";

export default function Footer() {
  return (
    <footer>
      <BaseContainer>
        <FlexMiddle>
          <FooterList />
        </FlexMiddle>
        <Address>
          <TextLogo />
        </Address>
      </BaseContainer>
      <div className={styles.googleContainer}>
        <img
          src="https://www.latevaweb.com/images/logos/google-partner.svg"
          alt="Google Logo"
        />
      </div>
    </footer>
  );
}
