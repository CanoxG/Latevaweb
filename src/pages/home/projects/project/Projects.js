import React from "react";
import styles from "./Projects.scss";
import ImgFrame from "../img-frame/ImgFrame";
import Flex from "../../../../components/containers/flex-default/Flex";

const design = {
  backgroundImage:
    "url('https://okdiario.com/look/img/2020/04/25/velas-zara.jpg')",
};

const fashion = {
  backgroundImage:
    "url('https://hips.hearstapps.com/hbz.h-cdn.co/assets/17/01/hbz-150-fashionable-women-rosie-huntington-whiteley.jpg')",
};

const pure = {
  backgroundImage:
    "url('https://glaminati.com/wp-content/uploads/2017/01/tp-fashionable-spring-work-outfits-1.jpg')",
};

const team = {
  backgroundImage:
    "url('https://cdn.nba.com/manage/2021/07/GettyImages-1232994916.jpg')",
};

const brand = {
  backgroundImage:
    "url('https://www.pandasweets.co.uk/wp-content/uploads/2019/07/WEIGH5019-Haribo-Fruity-Frogs.jpg')",
};

export default function Projects() {
  return (
    <div className={styles.container}>
      <Flex>
        <div className={styles.colLg}>
          <ImgFrame size="padding">
            <div style={design} className={styles.background}></div>
          </ImgFrame>
          <Flex>
            <div className={styles.colMd}>
              <ImgFrame size="small" align="top">
                <div style={team} className={styles.background}></div>
              </ImgFrame>
            </div>
            <div className={styles.colMd}>
              <ImgFrame size="small">
                <div style={fashion} className={styles.background}></div>
              </ImgFrame>
            </div>
          </Flex>
        </div>
        <div className={styles.colSm}>
          <ImgFrame size="small">
            <div style={brand} className={styles.background}></div>
          </ImgFrame>
          <ImgFrame>
            <div style={pure} className={styles.background}></div>
          </ImgFrame>
        </div>
      </Flex>
    </div>
  );
}
