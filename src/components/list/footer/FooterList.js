import React from "react";
import styles from "./FooterList.scss";
import { DIGITAL} from "../../../fixtures/digital";
import { COMPANY} from "../../../fixtures/company";
import { DESIGN } from "../../../fixtures/design";


export default function FooterList() {
  return (
    <>
      <div className={styles.listContainer}>
        <h3>Company</h3>
        <ul>
          {COMPANY.map((item) => (
            <li key={item.title} className={styles.listItem}>
              <span className={styles.arrow}>➤</span>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.listContainer}>
        <h3>Web design</h3>
        <ul>
          {DESIGN.map((item) => (
            <li key={item.title} className={styles.listItem}>
              <span className={styles.arrow}>➤</span>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.listContainer}>
        <h3>Digital Marketing</h3>
        <ul>
          {DIGITAL.map((item) => (
            <li key={item.title} className={styles.listItem}>
              <span className={styles.arrow}>➤</span>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.listItem}>
        <h3>Follow us</h3>
        <div className={styles.socialMediaIcons}>
          <a href="https://www.facebook.com/latevaweb/" title="Facebook"></a>
          <img
            className={styles.iconsShape}
            src="https://img.icons8.com/ios-filled/50/000000/facebook-f.png"
          />
        </div>
        <div className={styles.socialMediaIcons}>
          <a href="https://www.facebook.com/latevaweb/" title="Facebook"></a>
          <img
            className={styles.iconsShape}
            src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
          />
        </div>
        <div className={styles.socialMediaIcons}>
          <a href="https://www.facebook.com/latevaweb/" title="Facebook"></a>
          <img
            className={styles.iconsShape}
            src="https://img.icons8.com/ios-filled/50/000000/linkedin-2--v1.png"
          />
        </div>
        <div className={styles.socialMediaIcons}>
          <a href="https://www.facebook.com/latevaweb/" title="Facebook"></a>
          <img
            className={styles.iconsShape}
            src="https://img.icons8.com/plumpy/50/000000/pinterest.png"
          />
        </div>
        <div className={styles.socialMediaIcons}>
          <a href="https://www.facebook.com/latevaweb/" title="Facebook"></a>
          <img
            className={styles.iconsShape}
            src="https://img.icons8.com/ios-filled/50/000000/instagram.png"
          />
        </div>
        <div className={styles.socialMediaIcons}>
          <a href="https://www.facebook.com/latevaweb/" title="Facebook"></a>
          <img
            className={styles.iconsShape}
            src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"
          />
        </div>
      </div>
    </>
  );
}
