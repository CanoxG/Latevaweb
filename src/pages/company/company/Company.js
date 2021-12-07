import React from "react";
import styles from "./Company.scss";
import About from "../about/About";
import BlockOne from "../../../components/containers/block-one/BlockOne";
import TextBox from "../../../components/text/text-box/TextBox";
import H2 from "../../../components/headings/h2/H2";
import Sticker from "../../../components/sticker/Sticker";
import TextFrame from "../../../components/text/text-frame/TextFrame";
import RedBrick from "../../../components/red-brick/RedBrick";
import BlockTwo from "../../../components/containers/block-two/BlockTwo";
import TextBoxRight from "../../../components/text/text-box-right/TextBoxRight";
import BlueSticker from "../../../assets/svg/BlueSticker";

const background = {
  backgroundImage:
    'url("https://rwcarrinvestment.com/wp-content/uploads/2018/06/iStock-878022900.jpg")',
};

const hello = {
  backgroundImage:
    'url("https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbG98ZW58MHx8MHx8&w=1000&q=80")',
};

const agency = {
  backgroundImage:
    'url("https://www.latevaweb.com/web-design/websites-barcelona.jpg")',
};

const junge = {
  backgroundImage:
    'url("https://www.latevaweb.com/web-design/online-marketing-agency-barcelona.jpg")',
};

export default function Company() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.background}></div>
        <div style={background} className={styles.backgroundFrame}>
          <div className={styles.textContainer}>
            <About />
            <div className={styles.logo}></div>
          </div>
        </div>
      </section>
      <BlockOne color="default">
        <picture className={styles.leftImg}>
          <div style={hello} className={styles.imgFrame}>
            <RedBrick />
          </div>
        </picture>
        <TextBox>
          <H2>Your web design agency in Barcelona</H2>
          <p>
            LA TEVA WEB provides companies with an integral service that focuses
            on a specialist strategic approach for each company. We combine the
            technical and strategic expertise we have gained from our experience
            in the corporate world and the world of consultancy, design and
            advertising, in order to understand the keys to the market within
            which each company operates, and to provide web design that will act
            as a starting point for an online marketing strategy that drives
            companies to achieve their objectives.
          </p>
        </TextBox>
        <Sticker>
          <TextFrame>
            <p className={styles.textColor}>
              We do custom-designed websites with love
            </p>
          </TextFrame>
        </Sticker>
      </BlockOne>
      <BlockTwo>
        <picture className={styles.rightImg}>
          <div style={agency} className={styles.imgFrame}></div>
        </picture>
        <TextBoxRight>
          <H2>Online marketing agency in Barcelona</H2>
          <p>
            If web design is the starting point, design of the online marketing
            strategy follows closely behind. The LA TEVA WEB team is
            multidisciplinary, including economists from the consultancy sector
            to web designers and programmers.
          </p>
        </TextBoxRight>
      </BlockTwo>
      <BlockOne>
        <picture className={styles.leftImg}>
          <div style={junge} className={styles.imgFrame}>
            <RedBrick />
          </div>
        </picture>
        <TextBox>
          <H2>Corporate Social Responsibility</H2>
          <p className={styles.textBox}>
            At LA TEVA WEB we also want to contribute our efforts towards
            solidarity and the reduction of social inequality. To this effect,
            we dedicate part of our profits from each project to helping
            children. Specifically, we collaborate with:
          <BlueSticker />
            We also dedicate part of our resources to helping non-governmental
            organizations and associations by undertaking web projects at
            symbolic prices.
          </p>
        </TextBox>
      </BlockOne>
    </>
  );
}
