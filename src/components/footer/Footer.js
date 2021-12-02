import React from "react";
import styles from "./Footer.scss";
import FooterList from "../list/footer/FooterList";
import Address from "../address/Address";
import FlexMiddle from "../containers/flex-middle/FlexMiddle";
import TextLogo from "../logo/TextLogo";
import SectionContainer from "../containers/section-container/SectionContainer";

export default function Footer() {
  return (
    <footer>
      <SectionContainer>
        <FlexMiddle>
          <FooterList />
        </FlexMiddle>
      </SectionContainer>

      <div className={styles.googleContainer}>
        <img
          src="https://www.latevaweb.com/images/logos/google-partner.svg"
          alt="Google Logo"
        />
      </div>
      <SectionContainer>
        <FlexMiddle>
          <Address>
            <TextLogo />
          </Address>
        </FlexMiddle>
      </SectionContainer>
    </footer>
  );
}
