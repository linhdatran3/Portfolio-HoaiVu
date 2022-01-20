import * as React from "react";
import styles from "./About.module.css";
import Title from "../Title";
import HoaiVuAvatar from "../../public/Avatar.png";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Title title="ABOUT ME" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image alt="Avatar" src={HoaiVuAvatar} width={300} height={300} />
      </div>
      <div className={styles.content__review}>
        <p>
          Hi there. I am Truong Hoai Vu a landscape and architecture
          photographer and working in Ho Chi Ming City.
        </p>
        <p>
          I was born and raisedin a coastal area, where are many beautiful
          scenes, so I started my passion for photography at the age of 16.
        </p>
        <p>
          photography has changed my life, I am constantly working on my
          creativity to improve my skills.
        </p>
        <p>
          If you have an invitation to collaborate, do not hesitate to leave a
          message through my inbox.
        </p>
      </div>
      <div className={styles.content__awards}>
        <h3>My Awards</h3>
        <p>Runner-up Royal Society of Biology Photo Contest 2021</p>
        <p>Winner of vn photography Redefined 2020</p>
        <p>Junior VN Heritage Photo Awards 2019</p>
      </div>
    </div>
  );
};

export default About;
