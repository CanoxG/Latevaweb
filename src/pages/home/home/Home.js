import React from "react";
import styles from "./Home.scss";
import BaseLayout from "../../../components/layout/BaseLayout";
import Header from "../../../components/header/Header";
import Claim from "../../../components/claim/Claim";
import RedList from "../red-list/RedList";
import Footer from "../../../components/footer/Footer";
import BlockOne from "../../../components/containers/block-one/BlockOne";
import WH2 from "../../../components/headings/wh2/WH2";
import Sticker from "../../../components/sticker/Sticker";
import FlexMiddle from "../../../components/containers/flex-middle/FlexMiddle";
import H2 from "../../../components/headings/h2/H2";
import Projects from "../projects/project/Projects";
import SectionContainer from "../../../components/containers/section-container/SectionContainer";
import Frame from "../../../components/containers/frame/Frame";
import ViewBtn from "../../../components/buttons/View/ViewBtn";

export function Home() {
  const background = {
    backgroundImage:
      "url('https://www.gmevents.ae/wp-content/uploads/2019/04/228109899-business-meeting" +
      "-wallpaper.jpg')",
  };
  const backgroundLeft = {
    backgroundImage:
      "url('https://www.pixelstalk.net/wp-content/uploads/2016/10/Apple-Business-uhd-wallpapers.jpg')",
  };

  return (
    <BaseLayout>
      <Header />
      <div style={background} className={styles.imgFrame}>
        <Claim />
      </div>
      <RedList />
      <BlockOne>
        <div style={backgroundLeft} className={styles.imgFrameLeft}></div>
        <FlexMiddle>
          <div className={styles.redBrick}></div>
          <div className={styles.textFrame}>
            <WH2>
              Our major advantage: Custom-designed websites for the client
            </WH2>
            We have over 19 years experience in web design. We have worked on a
            large number of web design and optimization projects, online shop
            designs, strategies for social networks, social media and website
            design. We cover each and every need that your company may have in
            relation to online marketing and web design, and we take charge of
            the entire process. We work for companies and organizations of all
            sizes, in Barcelona, Spain and abroad.
          </div>
          <Sticker />
        </FlexMiddle>
      </BlockOne>
      <Frame>
        <SectionContainer>
          <FlexMiddle align="center">
            <div className={styles.textCenter}>
              <H2>Featured Projects</H2>
              <FlexMiddle>
                <p>
                  Discover the latest websites we have designed and the latest
                  online marketing strategies we have carried out.
                </p>
              </FlexMiddle>
            </div>
          </FlexMiddle>
          <Projects />
          <ViewBtn />
        </SectionContainer>
      </Frame>
      <Footer />
    </BaseLayout>
  );
}
