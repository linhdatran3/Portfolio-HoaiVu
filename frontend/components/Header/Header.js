import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import logo_xs from "../../public/hoaivu_logo_xs.png";
import logo_xl from "../../public/hoaivu_logo_xl.png";
import logo_md from "../../public/hoaivu_logo_md.png";
import Navbar from "./Navbar";
import Image from "next/image";
import headerStyle from "./Header.module.css";

const Header = () => {
  const [scrollOver, setScrollOver] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [logo, setLogo] = useState(logo_xl);
  const [logoHeight, setLogoHeight] = useState(90);
  const [logoWidth, setLogoWidth] = useState(180);

  useEffect(() => {
    setIsHomePage(["/", "/home"].includes(window.location.pathname));
    window.addEventListener("scroll", () => {
      const current = window.scrollY;
      setScrollOver(current <= 700);
      setLogo(logo_xs);
      setLogoHeight(50);
      setLogoWidth(100);
    });
  }, []);

  return (
    <AppBar
      className={
        !isHomePage
          ? headerStyle.header
          : scrollOver
          ? headerStyle.transparent
          : headerStyle.header
      }
    >
      <div className={headerStyle.image}>
        <Image src={logo} alt="logo" height={logoHeight} width={logoWidth} />
      </div>

      <Navbar />
    </AppBar>
  );
};

export default Header;
