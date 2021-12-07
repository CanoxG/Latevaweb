import React from "react";
import styles from "./About.scss";

export default function About() {
  return (
    <>
      <div className={styles.textContainer}>
        <h1>Web design and digital marketing agency in Barcelona</h1>
        <div className={styles.textBox}>
          <p>
            LA TEVA WEB was born 19 years ago in{" "}
            <a title="Barcelona">Barcelona</a> for the purposes of opening up
            companies of all sizes to the Internet and providing them with the
            requisite tools. Over time and with the evolution of the Internet
            itself, online marketing and changes in the technological and
            economic landscape have extended this sole objective of web design
            into an entire range of services from <strong>web design</strong>,
            through to <strong>SEO</strong> and to{" "}
            <strong>online marketing</strong> with the introduction of companies
            to social networks and making full use of all the opportunities that
            a website and social networks provide to today’s companies.
          </p>
        </div>
      </div>
    </>
  );
}
