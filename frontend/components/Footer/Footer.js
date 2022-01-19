import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo_sm from "../../public/hoaivu_logo_sm.png";
import footerStyle from "./Footer.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: 5,
        width: "100%",
        position: "relative",
        bottom: 0,
        justifyContent: "center",
      }}
    >
      <Image src={logo_sm} className={footerStyle.logo} />
      <Box
        sx={{
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <FacebookRoundedIcon />
        <InstagramIcon />
        <YouTubeIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </Box>
      <Typography variant="body2">{"Copyright © "}</Typography>
    </Box>
  );
};

export default Footer;
