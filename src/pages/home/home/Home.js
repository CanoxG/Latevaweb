import React from "react";
import styles from "./Home.scss";
import RedList from "../red-list/RedList";
import BlockOne from "../../../components/containers/block-one/BlockOne";
import WH2 from "../../../components/headings/wh2/WH2";
import Sticker from "../../../components/sticker/Sticker";
import FlexMiddle from "../../../components/containers/flex-middle/FlexMiddle";
import H2 from "../../../components/headings/h2/H2";
import Projects from "../projects/project/Projects";
import BaseContainer from "../../../components/containers/section-container/BaseContainer";
import Frame from "../../../components/containers/frame/Frame";
import ViewBtn from "../../../components/buttons/View/ViewBtn";
import Flex from "../../../components/containers/flex-default/Flex";
import Claim from "../claim/Claim";
import TextBox from "../../../components/text/text-box/TextBox";
import TextFrame from "../../../components/text/text-frame/TextFrame";
import RedBrick from "../../../components/red-brick/RedBrick";

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
    <>
      <div style={background} className={styles.imgFrame}>
        <Flex>
          <Claim />
        </Flex>
      </div>
      <RedList />
      <BlockOne color="grey">
        <div style={backgroundLeft} className={styles.imgFrameLeft}>
          <RedBrick />
        </div>
        <FlexMiddle>
          <TextBox>
            <WH2>
              Our major advantage: Custom-designed websites for the client
            </WH2>
            <p className={styles.textColor}>
              We have over 19 years experience in web design. We have worked on
              a large number of web design and optimization projects, online
              shop designs, strategies for social networks, social media and
              website design. We cover each and every need that your company may
              have in relation to online marketing and web design, and we take
              charge of the entire process. We work for companies and
              organizations of all sizes, in Barcelona, Spain and abroad.
            </p>
          </TextBox>
          <Sticker>
            <TextFrame>
              <p className={styles.textColor}>
                Effective web design that produces results
              </p>
            </TextFrame>
          </Sticker>
        </FlexMiddle>
      </BlockOne>
      <Frame>
        <BaseContainer>
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
        </BaseContainer>
      </Frame>
    </>
  );
}
