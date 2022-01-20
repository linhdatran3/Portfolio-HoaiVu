import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
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
    </div>
  );
};

export default About;
