import React from "react";
import styles from "./RedList.scss";
import { DIGITAL } from "../../../fixtures/digital";
import { DESIGN } from "../../../fixtures/design";
import FlexMiddle from "../../../components/containers/flex-middle/FlexMiddle";
import H2 from "../../../components/headings/h2/H2";
import SectionContainer from "../../../components/containers/section-container/SectionContainer";

export default function RedList() {
  return (
    <section>
      <SectionContainer>
        <FlexMiddle>
          <div className={styles.text}>
            <H2>A good web design</H2>
            <p>
              We are LA TEVA WEB, a web design and online marketing company in
              Barcelona. We understand web design and online marketing as two
              sides of the same coin.
              <br />
              <br />
              We propose the very best online strategy, creating effective,
              bespoke websites for our clients and effective online marketing
              strategies.
            </p>
            <p>
              We develop online marketing strategies for companies, focusing
              efforts on SEO and pay-per-click or SEM advertising campaigns. We
              also work as well on advertising and communication on social
              networks. Let us take your website to where your customers are.
              <br />
              <br />
              We are located in the centre of Barcelona and we invite you to put
              us to the test.
            </p>
            <ul className={styles.redList}>
              {DESIGN.map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className={styles.text}>
            <H2>Online digital experts</H2>
            <p>
              A website, no matter how beautiful it may look, does not make
              sense or pay off if it does not have an online marketing strategy
              that has been correctly devised and deployed. Our specialty is to
              achieve that potential customers reach your web page or
              e-commerce, and once they are on the web we will guide them
              towards the results you are looking for: forms, phone calls or
              online purchases.
              <br />
              <br />
              We develop tailor-made online marketing strategies, focusing our
              efforts on SEO positioning and pay-per-click or SEM advertising
              campaigns, as well as working with other online marketing tools
              such as social media communication or email marketing.
            </p>
            <ul className={styles.redList}>
              {DIGITAL.map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>
        </FlexMiddle>
      </SectionContainer>
    </section>
  );
}
